
import React from 'react';
import {Form,Card,Avatar,Input,Button} from 'antd';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const dummy = {
  isLoggedIn: true,
  imagePaths: [],
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '호야',
    },
    content: '첫 번째 게시글',
    img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }]
  }],
};

const Home = () => {
  return (
    <>
    {dummy.isLoggedIn && <PostForm />}
      {dummy.mainPosts.map((c)=> {
        return (
          <PostCard key={c} post={c} />
        )
      })}
      

    </>
  );
};

export default Home;