import { Box, Breadcrumbs, Container, Grid, Link, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { default as React, useContext } from "react";
import { useHistory } from "react-router";
import CardProduct from "../components/CardProduct";
import { AppContext } from "../utils/context/AppContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    title: {
      margin: '2rem 0'
    }
  }),
);

export function ProductList() {
  const classes = useStyles();
  const history = useHistory();

  const { products, producer } = useContext(AppContext);

  function handleBack(event: React.SyntheticEvent) {
    event.preventDefault();
    history.push('/');
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%">
      <Container maxWidth="xl">

        <Breadcrumbs aria-label="breadcrumb" className={classes.title}>
          <Link color="inherit" href="/" onClick={(event: React.SyntheticEvent) => handleBack(event)}>Lista de produtores</Link>
          <Typography color="textPrimary">{producer.name}</Typography>
        </Breadcrumbs>

        <Grid container spacing={2}>
          {products.map(product => (
            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} xl={2} >
              <CardProduct product={product} />
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
}
