import s from './style.module.css';

const Controls = ({ goodFeedback, neutralFeedback, badFeedback }) => (
  <div className={s.Feedback__controls}>
    <button className={s.Feedback__btn} type="button" onClick={goodFeedback}>
      Good
    </button>
    <button className={s.Feedback__btn} type="button" onClick={neutralFeedback}>
      Neutral
    </button>
    <button className={s.Feedback__btn} type="button" onClick={badFeedback}>
      Bad
    </button>
  </div>
);

export default Controls;
