import React, { useState } from 'react';
import Controls from './Controls';
import Statistics from './Statistics';
import s from './style.module.css';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = prevState => prevState + 1;

  const goodFeedback = () => {
    setGood(increment);
  };

  const neutralFeedback = () => {
    setNeutral(increment);
  };

  const badFeedback = () => {
    setBad(increment);
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.ceil((good / totalFeedback) * 100);

  return (
    <>
      <section className={s.Feedback__section}>
        <p className={s.Feedback__title}>Please leave feedback</p>
        <Controls
          goodFeedback={goodFeedback}
          neutralFeedback={neutralFeedback}
          badFeedback={badFeedback}
        />
        <p className={s.Feedback__title}>Statistics:</p>
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <p>Leave feedback to view statistics</p>
        )}
      </section>
    </>
  );
}
