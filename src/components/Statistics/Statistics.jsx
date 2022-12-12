import PropTypes from 'prop-types';
import { StatisticList, StatisticItem } from './Statistics.styled';

export function Statistics({ good, neutral, bad, total, goodPercentage }) {
  return (
    <StatisticList>
      <StatisticItem>Good: {good}</StatisticItem>
      <StatisticItem>Neutral: {neutral}</StatisticItem>
      <StatisticItem>Bad: {bad}</StatisticItem>
      <StatisticItem>Total: {total}</StatisticItem>
      <StatisticItem>Positive feedback: {goodPercentage} %</StatisticItem>
    </StatisticList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goodPercentage: PropTypes.number.isRequired,
};
