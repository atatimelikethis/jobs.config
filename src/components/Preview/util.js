import {
  WEEKLY,
  MONTHLY,
  CRON,
} from '../../constants';

function createLocation(location) {
  const SLASH_CHAR_CODE = 47;

  return location.charCodeAt(0) !== SLASH_CHAR_CODE
    ? `/${location}`
    : location;
}

function parseDate(date) {
  const t = parseInt(date, 10);

  if (isNaN(t) || t < 1) return 1;
  if (t > 31) return 31;

  return t;
}

export function createConfig(items) {
  const config = {
    jobs: items.map((item) => {
      return {
        functionLocation: createLocation(item.functionLocation),
        functionName: item.functionName.trim(),
        description: (item.description !== '') ? item.description : undefined,
        executionConfig: {
          time: item.period !== CRON ? (item.time || '00:00') : undefined,
          dayOfWeek: (item.period === WEEKLY) ? item.dayOfWeek : undefined,
          dateInMonth: (item.period === MONTHLY) ? parseDate(item.dateInMonth) : undefined,
          cronExpression: item.period === CRON ? item.cronExpression.trim() : undefined,
        },
      };
    }),
  };

  return JSON.stringify(config, null, 2);
}
