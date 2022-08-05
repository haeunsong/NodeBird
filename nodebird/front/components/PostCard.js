import React from 'react';
import {Card,Button,Avatar} from 'antd';
import {RetweetOutlined,HeartOutlined,CommentOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';

const PostCard = ({post}) => {
  return (
    <div>
      <Card 
            key={+post.createdAt}
            cover={post.img && <img alt='example' src={post.img} />}
            actions={[
                <RetweetOutlined type="retweet" key="retweet" />,
                <HeartOutlined type='heart' key='heart' />,
                <CommentOutlined type='ellipsis' key='ellipsis' />,
                
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta 
              avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
              title={post.User.nickname}
              description={post.content}
            ></Card.Meta>
          </Card>
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  })
}

export default PostCard;