import React from 'react';
import Controls from './Controls';
import Statistics from './Statistics';
import s from './style.module.css';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  goodFeedback = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        good: prevState.good + 1,
      };
    });
  };

  neutralFeedback = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        neutral: prevState.neutral + 1,
      };
    });
  };

  badFeedback = () => {
    this.setState(prevState => {
      return {
        ...prevState,
        bad: prevState.bad + 1,
      };
    });
  };

  TotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  PositiveFeedbackPercentage = () => {
    let TotalFeedback = Math.ceil(
      (this.state.good / this.TotalFeedback()) * 100
    );

    return isNaN(TotalFeedback) ? 0 : TotalFeedback;
  };

  render() {
    return (
      <section className={s.Feedback__section}>
        <p className={s.Feedback__title}>Please leave feedback</p>
        <Controls
          onGood={this.goodFeedback}
          onNeutral={this.neutralFeedback}
          onBad={this.badFeedback}
        />

        <p className={s.Feedback__title}>Statistics:</p>
        {this.TotalFeedback() > 0 ? (
          <Statistics
            goodFeedback={this.state.good}
            neutralFeedback={this.state.neutral}
            badFeedback={this.state.bad}
            TotalFeedback={this.TotalFeedback()}
            PositiveFeedbackPercentage={this.PositiveFeedbackPercentage()}
          />
        ) : (
          <p>Leave feedback to view statistics</p>
        )}
      </section>
    );
  }
}

export default Feedback;
