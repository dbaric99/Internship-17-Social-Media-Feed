import styles from './FeedPage.module.css';
import posts from '../../data/posts.json';
import { FeedItem } from '.';

function FeedPage() {
  
  return (
    <div>
      {posts.map(post => <FeedItem key={post.id} post={post} />)}
    </div>
  )
}

export {FeedPage}