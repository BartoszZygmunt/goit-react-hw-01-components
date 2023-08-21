import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticsWrapper = styled.section`
  background-color: #f3f3f3;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px 20px;
  background-color: ${props => props.color};
  border-radius: 4px;
`;

const Label = styled.span`
  font-weight: 700;
  color: #ffffff;
`;

const Percentage = styled.span`
  font-weight: 700;
  color: #ffffff;
`;

function Statistics({ title, stats }) {
  return (
    <StatisticsWrapper>
      {title && <Title className="title">{title}</Title>}
      <StatList className="stat-list">
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            className="item"
            color={`rgba( ${Math.floor(Math.random() * 256)}, ${Math.floor(
              Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.7)`}
          >
            <Label className="label">{stat.label}</Label>
            <Percentage className="percentage">{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrapper>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
