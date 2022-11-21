import s from './style.module.css';

const Controls = ({ onGoodFeedback, onNeutralFeedback, onBadFeedback }) => (
  <div className={s.Feedback__controls}>
    <button className={s.Feedback__btn} type="button" onClick={onGoodFeedback}>
      Good
    </button>
    <button
      className={s.Feedback__btn}
      type="button"
      onClick={onNeutralFeedback}
    >
      Neutral
    </button>
    <button className={s.Feedback__btn} type="button" onClick={onBadFeedback}>
      Bad
    </button>
  </div>
);

export default Controls;
