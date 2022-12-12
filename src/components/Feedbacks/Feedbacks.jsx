import PropTypes from 'prop-types';
import { Box } from 'components/Box/Box';
import { FeedbackButton } from './Feedbacks.styled';

export function Feedbacks({ options, onLeaveFeedback }) {
  /*console.log(states);*/
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="space-between">
      {options.map(option => (
        <FeedbackButton
          key={option}
          type="button"
          onClick={() => {
            // console.log('click', e);
            onLeaveFeedback(option);
          }}
        >
          {option}
        </FeedbackButton>
      ))}
    </Box>
  );
}

Feedbacks.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
