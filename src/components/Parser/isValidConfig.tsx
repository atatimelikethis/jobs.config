import { ComponentChildren, h, Fragment } from 'preact';
import { isValidCron } from 'cron-validator';

import { CronTrue } from '../CronTrue';
import { IncorrectType } from './IncorrectType';
import { weekList } from '../../util/week';
import { isValidFunctionName } from '../../util/validator';

type TValidResult = [
  hasError: boolean,
  message?: ComponentChildren,
];

const $jobs = 'jobs';
const $functionLocation = 'functionLocation';
const $functionName = 'functionName';
const $description = 'description';
const $executionConfig = 'executionConfig';
const $cronExpression = 'cronExpression';
const $time = 'time';
const $dayOfWeek = 'dayOfWeek';
const $dateInMonth = 'dateInMonth';

const $_ffe = [$functionLocation, $functionName, $executionConfig];
const $_ffed = [...$_ffe, $description];

const $$_wm = [$dayOfWeek, $dateInMonth];
const $$_twm = [$time, ...$$_wm];
const $$_ctwm = [$cronExpression, ...$$_twm];

const error = (message: ComponentChildren): TValidResult => [
  true,
  message,
];

const isInvalidCron = (val: string) => {
  return !isValidCron(val, { seconds: false });
};

const isUTCTime = (val: string) => {
  return /^([01]\d|2[0-3]):([0-5]\d)$/.test(val);
};

const isObject = (val: unknown): val is Readonly<Record<string, unknown>> => {
  return typeof val === 'object' && !Array.isArray(val) && val !== null;
};

const isString = (val: unknown): val is string => {
  return typeof val === 'string';
};

const isNumber = (val: unknown): val is number => {
  return typeof val === 'number';
};

const hasUnknownProps = (item: Record<string, unknown>, list: string[]): TValidResult => {
  for (const key of Object.keys(item)) {
    const notOne = !list.includes(key);

    if (notOne) {
      return [true, key];
    }
  }

  return [false];
};

const hasMissingProps = (item: Record<string, unknown>, list: string[]): TValidResult => {
  for (const key of list) {
    if (!(key in item)) {
      return [true, key];
    }
  }

  return [false];
};

export const isValidConfig = (config: unknown): TValidResult => {
  const separator = '", "';

  if (!isObject(config)) {
    return error(
      <>
        <p>{'Incorrect type. Expected "object".'}</p>
        <p>{'The jobs.config file must contains a JSON object.'}</p>
      </>,
    );
  }

  if (!($jobs in config)) {
    return error(
      <>
        <p>{'Missing property "jobs".'}</p>
        <p>{'The jobs object must contains one top-level key named "jobs".'}</p>
      </>,
    );
  }

  const keys = Object.keys(config);

  if (keys.length > 1) {
    const names = keys.filter((i) => i !== $jobs).join(separator);

    return error(
      <>
        <p>{`Unknown property "${names}".`}</p>
        <p>{'The jobs object must contains one top-level key named "jobs".'}</p>
      </>,
    );
  }

  if (!Array.isArray(config.jobs)) {
    return error(
      <>
        <p>{'Incorrect type. Expected "array".'}</p>
        <p>{'The top-level key "jobs" must be an array.'}</p>
      </>,
    );
  }

  const JOBS = config.jobs;
  const len = JOBS.length;

  if (len > 20) {
    return error(
      <>
        <p>{`Too many scheduled jobs. (${len})`}</p>
        <p>You can configure up to 20 jobs.</p>
      </>,
    );
  }

  if (len < 1) {
    return error(
      <p>No scheduled jobs.</p>,
    );
  }

  if (!JOBS.every(isObject)) {
    return error(
      <>
        <p>{'Incorrect type. Expected "object."'}</p>
        <p>{'The "jobs" array must contain only objects, each of which represents a scheduled job.'}</p>
      </>,
    );
  }

  let i = len;

  while (0 < i--) {
    const ITEM = JOBS[i];

    const [hasUnknown, unknownKey] = hasUnknownProps(ITEM, $_ffed);
    if (hasUnknown) {
      return error(
        <>
          <p>{`Unknown property "${unknownKey}" at "jobs[${i}]".`}</p>
          <p>{`Allowed one of "${$_ffed.join(separator)}"`}</p>
        </>,
      );
    }

    const [hasMissing, missingkey] = hasMissingProps(ITEM, $_ffe);
    if (hasMissing) {
      return error(
        <>
          <p>{`Missing property "${missingkey}" at "jobs[${i}]"`}</p>
          <p>{`Each scheduled job object must contain the required fields "${$_ffe.join(separator)}".`}</p>
        </>,
      );
    }

    if ($description in ITEM) {
      if (!isString(ITEM.description)) {
        return error(
          <IncorrectType index={i} name="description" expected="string" />,
        );
      }
    }

    // TODO: functionLocation syntax

    const FL = ITEM.functionLocation;

    if (!isString(FL)) {
      return error(
        <IncorrectType index={i} name="functionLocation" expected="string" />,
      );
    }

    const FN = ITEM.functionName;

    if (!isString(FN)) {
      return error(
        <IncorrectType index={i} name="functionName" expected="string" />,
      );
    }

    if (!isValidFunctionName(FN)) {
      return error(
        <>
          <p>{`Invalid "functionName" at "jobs[${i}]"`}</p>
          <p>{`Error: "${FN}".`}</p>
        </>,
      );
    }

    const EXEC_CONFIG = ITEM.executionConfig;

    if (!isObject(EXEC_CONFIG)) {
      return error(
        <IncorrectType index={i} name="executionConfig" expected="object" />,
      );
    }

    const [hasUnknown1, unknownKey1] = hasUnknownProps(EXEC_CONFIG, $$_ctwm);
    if (hasUnknown1) {
      return error(
        <>
          <p>{`Unknown property "${unknownKey1}" in "jobs[${i}].executionConfig".`}</p>
          <p>{`Allowed one of "${$$_ctwm.join(separator)}"`}</p>
        </>,
      );
    }

    if ($cronExpression in EXEC_CONFIG) {
      const CRON_EXP = EXEC_CONFIG.cronExpression;

      if (isString(CRON_EXP)) {
        if (isInvalidCron(CRON_EXP)) {
          return error(
            <>
              <p>{`Invalid "cronExpression" at "jobs[${i}].executionConfig".`}</p>
              <p>
                <CronTrue value={CRON_EXP} setValidity={() => {/**/}} />
              </p>
              <p>
                <em>
                  You can schedule your job to run at intervals as short as one hour apart, but not shorter.
                  If you define your job to run more frequently, the job will be ignored.
                </em>
              </p>
            </>,
          );
        }
      } else {
        return error(
          <IncorrectType index={i} name="cronExpression" expected="string" />,
        );
      }
    } else if ($time in EXEC_CONFIG) {
      const TIME = EXEC_CONFIG.time;

      if (!isString(TIME)) {
        return error(
          <IncorrectType index={i} name="time" expected="string" />,
        );
      }

      if (!isUTCTime(TIME)) {
        return error(
          <>
            <p>{`Invalid "time" at "jobs[${i}].executionConfig".`}</p>
            <p>{`Error: "${TIME}". The time is specified as UTC time in HH:MM format.`}</p>
          </>,
        );
      }

    } else {
      return error(
        <>
          <p>{`Missing the time of the job runs at "jobs[${i}].executionConfig".`}</p>
          <p>{'The "executionConfig" object must contain one of "time", "cronExpression" properties.'}</p>
        </>,
      );
    }

    if ($dayOfWeek in EXEC_CONFIG) {
      const DOW = EXEC_CONFIG.dayOfWeek;

      if (!isString(DOW)) {
        return error(
          <IncorrectType index={i} name="dayOfWeek" expected="string" />,
        );
      }

      if (!weekList.some((i) => i === DOW)) {
        return error(
          <>
            <p>{`Incorrect value of "dayOfWeek" at "jobs[${i}].executionConfig".`}</p>
            <p>{`Error: unknown value "${DOW}". Allowed one of "${weekList.join(separator)}"`}</p>
          </>,
        );
      }
    }

    if ($dateInMonth in EXEC_CONFIG) {
      const DIM = EXEC_CONFIG.dateInMonth;

      if (!isNumber(DIM)) {
        return error(
          <IncorrectType index={i} name="dateInMonth" expected="number" />,
        );
      }

      if (!Number.isInteger(DIM) || DIM < 1 || DIM > 31) {
        return error(
          <>
            <p>{`Invalid "dateInMonth" at "jobs[${i}].executionConfig".`}</p>
            <p>{'The value of the "dateInMonth" property must be a number between 1 and 31.'}</p>
          </>,
        );
      }
    }

    if (
      ($cronExpression in EXEC_CONFIG) &&
      ($$_twm.some((i) => i in EXEC_CONFIG))
    ) {
      return error(
        <>
          <p>{`Mutual exclusion property at "jobs[${i}].executionConfig".`}</p>
          <p>{`Error: "cronExpression" omit all of "${$$_twm.join(separator)}" properties.`}</p>
          <p>
            <em>
              {'When using a cron expression to specify when a job runs, the "executionConfig" object contains a single property, named "cronExpression", whose value is a valid cron expression.'}
            </em>
          </p>
        </>,
      );
    }

    if ($$_wm.every((i) => i in EXEC_CONFIG)) {
      return error(
        <>
          <p>{`Mutual exclusion property at "jobs[${i}].executionConfig".`}</p>
          <p>{'Error: "dateInMonth" omit the "dayOfWeek" property.'}</p>
        </>,
      );
    }
  }

  return [false];
};
