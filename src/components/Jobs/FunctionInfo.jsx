import { h } from 'preact';

import s from './styles.css';
import Label from './Label';

function FunctionInfo({
  id,
  functionLocation,
  functionName,
  description,
}) {
  return (
    <fieldset className={s.fields}>
      <div className={s.location}>
        <Label top="Function Location">
          <input
            type="text"
            data-id={id}
            data-name="functionLocation"
            data-fl
            data-fl-at="bottom"
            className={s.funcInput}
            value={functionLocation}
            placeholder="Function Location"
            pattern="^(\/)?[\w\-\.\/]*[\w-]\.jsw?$"
            required
          />
        </Label>
        <span className={s.slash}>
          /
        </span>
        <Label top="Function Name">
          <input
            type="text"
            data-id={id}
            data-name="functionName"
            data-fl
            data-fl-at="bottom"
            className={s.funcInput}
            value={functionName}
            placeholder="Function Name"
            pattern="^(\s)*?[\$a-zA-Z_][\$\w]*(\s)*?$"
            required
          />
        </Label>
      </div>
      <div className={s.location}>
        <Label top="Description">
          <input
            type="text"
            value={description}
            data-id={id}
            className={s.description}
            data-name="description"
            placeholder="Description"
          />
        </Label>
      </div>
    </fieldset>
  );
}

export default FunctionInfo;
