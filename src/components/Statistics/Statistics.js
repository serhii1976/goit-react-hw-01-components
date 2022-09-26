import PropTypes from 'prop-types';
import {
  StatisticsWraper,
  StatisticsBox,
  Title,
  StatisticsList,
  StatisticsElement,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWraper>
      <StatisticsBox>
        {title && <Title>{title}</Title>}
        <StatisticsList>
          {stats.map(data => (
            <StatisticsElement key={data.id}>
              <span>{data.label}</span>
              <span>{data.percentage}%</span>
            </StatisticsElement>
          ))}
        </StatisticsList>
      </StatisticsBox>
    </StatisticsWraper>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
