import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//styled components:
const ProfileWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const Tag = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Location = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Stats = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const StatItem = styled.li`
  margin: 0 20px;
`;

const StatLabel = styled.span`
  font-weight: bold;
`;

// Komponent Profile
function Profile({ username, tag, location, avatar, stats }) {
  return (
    <ProfileWrapper>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>{`@${tag}`}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatItem>
          <StatLabel>Followers: </StatLabel>
          {stats.followers}
        </StatItem>
        <StatItem>
          <StatLabel>Views: </StatLabel>
          {stats.views}
        </StatItem>
        <StatItem>
          <StatLabel>Likes: </StatLabel>
          {stats.likes}
        </StatItem>
      </Stats>
    </ProfileWrapper>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
