import PropTypes from 'prop-types';
import {
  Card,
  Description,
  Avatar,
  Tag,
  Name,
  Location,
  Stats,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Card className="profile">
      <Description className="description">
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <Name className="name">{username}</Name>
        <Tag className="tag">@ {tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>

      <Stats className="stats">
        <Item>
          <Label className="label">Followers</Label>
          <Quantity className="quantity">{followers}</Quantity>
        </Item>
        <Item>
          <Label className="label">Views</Label>
          <Quantity className="quantity">{views}</Quantity>
        </Item>
        <Item>
          <Label className="label">Likes</Label>
          <Quantity className="quantity">{likes}</Quantity>
        </Item>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
