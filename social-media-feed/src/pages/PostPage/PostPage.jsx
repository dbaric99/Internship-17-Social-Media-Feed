import { useNavigate, useParams } from 'react-router-dom';
import styles from './PostPage.module.css';
import posts from '../../data/posts.json';
import { useEffect, useState } from 'react';
import { CardItem } from 'components/CardItem';

function PostPage() {
  const postId = useParams().postId;
  const navigate = useNavigate();
  const [postObject, setPostObject] = useState(posts.filter(post => post.id === +postId)[0]);

  //add check if postId exists

  return (
    <CardItem post={postObject}>

    </CardItem>
  )
}

export {PostPage}