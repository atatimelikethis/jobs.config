import { h } from 'preact';
import { useStoreon } from 'storeon/preact';
import { useRef } from 'preact/hooks';

import s from './styles.css';
import { Button } from '../Button';
import { JSON } from './JSON';
import { createConfig } from '../../util/items';
import { TState } from '../../store';

export const Preview = () => {
  const { items } = useStoreon<TState>('items');
  const output = useRef<HTMLPreElement>();

  const config = createConfig(items);
  const dataURL = 'data:application/json,' + encodeURIComponent(config);

  const clipboard: EventHandlerNonNull = () => {
    const selection = window.getSelection() as Selection;
    const range = document.createRange() as Range;

    range.selectNodeContents(output.current);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
  };

  return (
    <div className={s.box}>
      <div className={s.copy}>
        <Button onClick={clipboard}>
          Copy Code
        </Button>
      </div>
      <pre
        ref={output}
        className={s.out}
      >
        <JSON input={config} />
      </pre>
      <div className={s.export}>
        <a
          href={dataURL}
          className={s.download}
          download="jobs.config"
          type="application/json"
          aria-label="Download a file"
          data-rh="Download a file"
          data-rh-at="left"
        />
      </div>
    </div>
  );
};
