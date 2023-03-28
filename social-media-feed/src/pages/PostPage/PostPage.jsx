import { useNavigate, useParams } from 'react-router-dom';
import posts from '../../data/posts.json';
import { useEffect, useState } from 'react';
import { CardItem } from 'components/CardItem';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import styles from './PostPage.module.css';

function PostPage() {
  const postId = useParams().postId;
  const navigate = useNavigate();
  const [postObject] = useState(posts.filter(post => post.id === +postId)[0]);

  useEffect(() => {
    if(!postObject) navigate("/not-found", {replace: true});
  }, [])

  return postObject ? (
    <>
      <ArrowBackIosNewOutlinedIcon className={styles.backArrow} onClick={() => navigate(-1)}/>
      <CardItem post={postObject}>
        <div>
          {postObject.comments.map(comment => 
            <CardItem key={comment.id} post={comment}/>
          )}
        </div>
      </CardItem>
    </>
  ) : null
}

export {PostPage}