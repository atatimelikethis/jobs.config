import { h } from 'preact';

import s from './styles.css';

function Grid({ header, left, right }) {
  return (
    <div className={s.wrapper}>
      <header className={s.header}>
        {header}
      </header>
      <main className={s.container}>
        <section className={s.left}>
          {left}
        </section>
        <section className={s.right}>
          {right}
        </section>
      </main>
      <footer />
    </div>
  );
}

export default Grid;
