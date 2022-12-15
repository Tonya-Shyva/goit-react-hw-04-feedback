import { useState } from 'react';

import { Section } from 'components/Section/Section';
import { Box } from 'components/Box/Box';
import { Statistics } from 'components/Statistics/Statistics';
import { Feedbacks } from '../Feedbacks/Feedbacks';
import { Notification } from 'components/Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const clickHandler = option => {
    switch (option) {
      case 'Good':
        return setGood(prevGood => prevGood + 1);
      case 'Neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);
      case 'Bad':
        return setBad(prevBad => prevBad + 1);
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let positiveFeedbackPercentage = 0;
    if (countTotalFeedback() !== 0) {
      positiveFeedbackPercentage = Math.round(
        (good / countTotalFeedback()) * 100
      );
    }
    return positiveFeedbackPercentage;
  };

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
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={clickHandler}
        ></Feedbacks>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            goodPercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </Section>
    </Box>
  );
}
