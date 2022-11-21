import PropTypes from 'prop-types';
import s from './style.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => (
  <ul className={s.Feedback__counter}>
    <li className={s.Feedback__list}>Good: {good}</li>
    <li className={s.Feedback__list}>Neutral: {neutral}</li>
    <li className={s.Feedback__list}>Bad: {bad}</li>
    <li className={s.Feedback__list}>Total: {totalFeedback}</li>
    <li className={s.Feedback__list}>Positive feedback: {positiveFeedback}%</li>
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
