
import React from 'react';
import {Form,Card,Avatar,Input,Button} from 'antd';
import {RetweetOutlined,HeartOutlined,CommentOutlined} from '@ant-design/icons';

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
    {dummy.isLoggedIn && <Form encType="multipart/form-data">
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        <input type="file" multiple hidden />
        <Button>이미지 업로드</Button>
        <Button type='primary' style={{float:'right'}} htmlType='submit'>짹짹</Button>
      </div>
      <div>
        {dummy.imagePaths.map((v,i) => {
          return (
            <div key={v} style={{display: 'inline-block'}}>
              <img src={'http://localhost:3065/' +v} style={{width:'200px'}} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          )
        })}
        
      </div>
      </Form>}

      {dummy.mainPosts.map((c)=> {
        return (
          
          <Card 
            key={+c.createdAt}
            cover={c.img && <img alt='example' src={c.img} />}
            actions={[
                <RetweetOutlined type="retweet" key="retweet" />,
                <HeartOutlined type='heart' key='heart' />,
                <CommentOutlined type='ellipsis' key='ellipsis' />,
                
            ]}
            extra={<Button>팔로우</Button>}
          >
            <Card.Meta 
              avatar={<Avatar>{c.User.nickname[0]}</Avatar>}
              title={c.User.nickname}
              description={c.content}
            ></Card.Meta>
          </Card>
        )
      })}
      

    </>
  );
};

export default Home;