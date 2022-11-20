import s from './style.module.css';

const Controls = ({ onGood, onNeutral, onBad }) => (
  <div className={s.Feedback__controls}>
    <button className={s.Feedback__btn} type="button" onClick={onGood}>
      Good
    </button>
    <button className={s.Feedback__btn} type="button" onClick={onNeutral}>
      Neutral
    </button>
    <button className={s.Feedback__btn} type="button" onClick={onBad}>
      Bad
    </button>
  </div>
);

export default Controls;
