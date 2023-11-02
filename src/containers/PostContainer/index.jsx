// React import
import React from 'react';

// External library imports
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

// Relative imports for API functions and hooks
import useApi from '../../hooks/useApi';
import { getPosts } from '../../api/posts';


// Components imports
// import TruncateText from '../../components/TruncateText'; // Assuming you're using it somewhere.
import PostCard from '../../components/pat/Card';
import styles from './PostsContainer.module.css'; // Make sure this path is correct


function PostsContainer() {
  const { data: posts, loading, error } = useApi(getPosts);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container className={styles.postsContainer}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6} md={4}>
            <PostCard title={post.title} body={post.body} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PostsContainer;
