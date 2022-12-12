import { Component } from 'react';

import { Section } from 'components/Section/Section';
import { Box } from 'components/Box/Box';
import { Statistics } from 'components/Statistics/Statistics';
import { Feedbacks } from '../Feedbacks/Feedbacks';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickHandler = option => {
    // console.log(option);
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0;
    if (this.countTotalFeedback() !== 0) {
      positiveFeedbackPercentage = Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      );
    }
    return positiveFeedbackPercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Box
        maxWidth="480px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        ml="auto"
        mr="auto"
      >
        <Section title="Please leave feedback">
          <Feedbacks
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickHandler}
          ></Feedbacks>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              goodPercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Box>
    );
  }
}
