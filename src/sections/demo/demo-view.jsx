import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import { RouterLink } from 'src/routes/components';

import Logo from 'src/components/logo';
import PostsComponent from 'src/components/pat/PostsComponent';
  
// ----------------------------------------------------------------------

export default function DemoView() {
  const renderHeader = (
    <Box
      component="header"
      sx={{
        top: 0,
        left: 0,
        width: 1,
        lineHeight: 0,
        position: 'fixed',
        p: (theme) => ({ xs: theme.spacing(3, 3, 0), sm: theme.spacing(5, 5, 0) }),
      }}
    >
      <Logo />
    </Box>
  );

  return (
    <>
      {renderHeader}

      <Container>
        <Box
          sx={{
            py: 12,
            maxWidth: 1200,
            mx: 'auto',
            display: 'flex',
            minHeight: '100vh',
            textAlign: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <PostsComponent />

        </Box>
      </Container>
    </>
  );
}
