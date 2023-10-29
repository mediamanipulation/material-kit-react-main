import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';

import Cards from './Card';
import styles from './PostsComponent.module.css'; // Import the CSS module

function PostsComponent() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        setPosts(json);
        setLoading(false);
      })
      .catch((fetchError) => {
        setError(fetchError.toString());
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">Error: {error}</Typography>;

  function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) : str;
  }

  // trim empty space from front of string

  function trimFront(str) {
    return str.replace(/^\s+/, '');
  }
  // // trim empty space from end of string
  // function trimEnd(str) {
  //   return str.replace(/\s+$/, '');
  // }
  // trim empty space from both ends of string
  // function trim(str) {
  //   return trimFront(trimEnd(str));
  // }

  return (
    <Container> 
        <Container maxWidth="md">
      <Cards />
      </Container>
<Typography 
  variant="h1" 
  component="div" 
  style={{ 
    fontWeight: 'bold', 
    textTransform: 'uppercase', 
    color: 'black', 
    paddingBottom: '20px', 
    letterSpacing: '1em',  // Adjust as necessary for kerning
    textShadow: '5px 2px 5px rgba(0, 0, 0, 0.2)'  // Drop shadow on text
  }} 
  align="left">
  Posts
</Typography>

      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} md={4} key={post.id}>
            <Card className={`${styles.card} ${styles.boldUppercaseOrange}`}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                  <Typography variant="h5" component="div" style={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'orange' }} align="left">
                    { trimFront(truncateString(post.title, 15))}
                  </Typography>
                    <Typography sx={{ mb: .5 }} color="text.secondary" align="left">
                    {truncateString(post.body, 90)}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <CardMedia
                      component="img"
                      height="140"
                      image="/assets/images/additions/plc.jpg"
                      alt="Placeholder"
                      sx={{
                        borderRadius: 2, // Rounded corners
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.8)', // Drop shadow
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PostsComponent;
