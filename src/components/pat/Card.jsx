// Import necessary React and MUI components
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import {
  CardMedia,
  Typography,
  CardContent,
  Card as MuiCard,

//   Button,
} from '@mui/material';

// import .css file
import './Card.css';

const PostsData = [
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
      "category": "News",
      "title": "CNN Acquire BEME",
      "text": "CNN purchased Casey Neistat's Beme app for $25million.",
      "image": "https://source.unsplash.com/user/erondu/600x400"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Travel",
      "title": "Nomad Lifestyle",
      "text": "Learn our tips and tricks on living a nomadic lifestyle",
      "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
    },
    {
      "category": "Development",
      "title": "React and the WP-API",
      "text": "The first ever decoupled starter theme for React & the WP-API",
      "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
    },
    {
        "category": "Travel",
        "title": "Nomad Lifestyle",
        "text": "Learn our tips and tricks on living a nomadic lifestyle",
        "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
      },
      {
        "category": "Development",
        "title": "React and the WP-API",
        "text": "The first ever decoupled starter theme for React & the WP-API",
        "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
      }
  ]
  
  
  const Cards = () => {
    const [posts] = useState(PostsData);

    useEffect(() => {
      // Add any necessary logic to fetch or manipulate data on component mount
    }, []);
  
    return (
      <div>
        <header className="app-header" />
        <Title />
        <div className="app-card-list" id="app-card-list">
          {Object.keys(posts).map((key) => (
            <PostCard key={key} details={posts[key]} />
          ))}
        </div>
      </div>
    );
  };
  
  // Title component
  const Title = () => (
    <header className="app-header">
      <h1>Latest News</h1>
    </header>
  );
  
  // Post card component
  const PostCard = ({ details }) => (
    <MuiCard className="card">
      <CardHeader category={details.category} image={details.image} title={details.title} />
      <CardBody title={details.title} text={details.text} />
    </MuiCard>
  );
  
  PostCard.propTypes = {
    details: PropTypes.shape({
      category: PropTypes.string,
      image: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  };
  
  // Card header component
  const CardHeader = ({ image, category, title }) => (
    <div className="card-header">
      <CardMedia component="img" alt={category} height="140" image={image} />
      <div className="overlay">
        <Typography variant="h5" component="h2" className="title" align='left'>
          {title}
        </Typography>
      </div>
    </div>
  );
  
  CardHeader.propTypes = {
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };
  
  
  // Card body component
  const CardBody = ({  text }) => (
    <CardContent>
      <Typography variant="body2" color="textSecondary" component="p" align="left">
        {text}
      </Typography>
    </CardContent>
  );
  
  CardBody.propTypes = {
    text: PropTypes.string.isRequired,
  };
  
  export default Cards;