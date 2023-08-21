import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FriendListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const FriendListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Status = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.p`
  font-size: 18px;
`;

function FriendList({ friends }) {
  return (
    <FriendListWrapper className="friend-list">
      {friends.map((friend) => (
        <FriendListItem key={friend.id} className="item">
          <Status className="status" isOnline={friend.isOnline}></Status>
          <Avatar className="avatar" src={friend.avatar} alt={`${friend.name}'s avatar`} />
          <Name className="name">{friend.name}</Name>
        </FriendListItem>
      ))}
    </FriendListWrapper>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
