import { h } from 'preact';

import st from './styles.css';
import { MONTHLY } from '../../constants';

function DateInMonth({ id, date, period, update }) {
  return (
    <fieldset
      className={st.fields}
      hidden={period !== MONTHLY}
    >
      <div className={st.location}>
        <label className={st.block}>
          <span className={st.text}>
            The day of the month the job runs.
          </span>
          <input
            type="number"
            min="1"
            max="31"
            step="1"
            value={date}
            data-id={id}
            data-name="dateInMonth"
            onInput={update}
            className={st.date}
            required
          />
        </label>
      </div>
    </fieldset>
  );
}

export default DateInMonth;
