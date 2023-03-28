import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from "./CardItem.module.css";
import { timeUtil } from 'utils';

function CardItem({ post, children }) {
  return (
    <Box sx={{ minWidth: 275 }} className={styles.cardWrapper}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <div className={styles.userAreaWrapper}>
              <img src={post.userPhotoUrl} alt="profile" className={styles.profilePhoto} />
              <Typography className={styles.userProfileName}>
                {post.profileName}
              </Typography>
              <Typography className={styles.username}>
                @{post.username}
              </Typography>
            </div>
            <Typography className={styles.postText}>
              {post.text}
            </Typography>
            <Typography className={styles.postTimestamp}>
              {timeUtil.getTimeFromNow(new Date(post.timestamp))} 
            </Typography>
          </CardContent>
          {children}
        </React.Fragment>
      </Card>
    </Box>
  );
}

export { CardItem };
