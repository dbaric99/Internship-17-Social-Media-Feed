import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import styles from "./FeedPage.module.css";
import { Link } from 'react-router-dom';
import { CardItem } from 'components/CardItem';

function FeedItem({ post }) {
  return (
    <div>
      <CardItem post={post}>
        <CardActions>
          <Link to={`${post.id}`} style={{textDecoration: 'none'}}>
            <Button size="small" className={styles.postButton}> <span className={styles.commentCount}>{post.comments.length}</span>Comments...</Button>
          </Link>
        </CardActions>
      </CardItem>
    </div>
  );
}

export { FeedItem };
