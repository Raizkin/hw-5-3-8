import React from 'react';
import FeedbackOptions from './components/FeedbackOptions.jsx';
import Notification from './components/Notification.jsx';
import Section from './components/Section.jsx';
import Statistics from './components/Statistics.jsx';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    if (total === 0) {
      return 0;
    }

    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackOptions = Object.keys(this.state);

    return (
      <main className="app-shell">
        <div className="feedback-widget">
          <Section title="Please leave feedback">
            <FeedbackOptions options={feedbackOptions} onLeaveFeedback={this.handleLeaveFeedback} />
          </Section>

          <Section title="Statistics">
            {total > 0 ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Section>
        </div>
      </main>
    );
  }
}

export default App;
