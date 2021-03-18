
import { Box, Button, Container, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function NotFoundView() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%"
      justifyContent="center"
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          404
      </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
          A página que você está procurando não está aqui
      </Typography>
        <Box p={4} textAlign="center">
          <Link to="/">
            <Button color="primary" variant="contained">Voltar</Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
export default NotFoundView;