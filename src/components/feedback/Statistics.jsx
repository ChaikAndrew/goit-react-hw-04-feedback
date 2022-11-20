import PropTypes from 'prop-types';
import s from './style.module.css';

const Statistics = ({
  goodFeedback,
  neutralFeedback,
  badFeedback,
  TotalFeedback,
  PositiveFeedbackPercentage,
}) => (
  <ul className={s.Feedback__counter}>
    <li className={s.Feedback__list}>Good: {goodFeedback}</li>
    <li className={s.Feedback__list}>Neutral: {neutralFeedback}</li>
    <li className={s.Feedback__list}>Bad: {badFeedback}</li>
    <li className={s.Feedback__list}>Total: {TotalFeedback}</li>
    <li className={s.Feedback__list}>
      Positive feedback: {PositiveFeedbackPercentage}%
    </li>
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  goodFeedback: PropTypes.number.isRequired,
  neutralFeedback: PropTypes.number.isRequired,
  badFeedback: PropTypes.number.isRequired,
  TotalFeedback: PropTypes.number.isRequired,
  PositiveFeedbackPercentage: PropTypes.number.isRequired,
};
