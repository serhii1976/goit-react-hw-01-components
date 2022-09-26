import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { Cards, Card } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Cards>
      {friends.map(friend => (
        <Card key={friend.id}>
          <FriendListItem friend={friend} />
        </Card>
      ))}
    </Cards>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
