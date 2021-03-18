import { Box, Breadcrumbs, Container, Grid, Link, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { default as React } from "react";
import { useHistory } from "react-router";
import CardProduct from "../components/CardProduct";

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

  function handleBack(){
    history.push('/');
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%">
      <Container maxWidth="xl">

        <Breadcrumbs aria-label="breadcrumb" className={classes.title}>
          <Link color="inherit" href="/" onClick={handleBack}>Lista de produtores</Link>
          <Typography color="textPrimary">Pedro LTDA</Typography>
        </Breadcrumbs>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <CardProduct />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <CardProduct />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <CardProduct />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <CardProduct />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <CardProduct />
          </Grid>
        </Grid>
      </Container>
    </Box>


    // <div >
    //   <Typography variant="h5" component="h2">
    //     Produtores recomendados
    //   </Typography>
    //   <div className={classes.root}>
    //     <Grid container spacing={3}>
    //       <Grid item xs={12}>
    //         <CardProducer />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <CardProducer />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <CardProducer />
    //       </Grid>
    //       <Grid item xs={4}>
    //         <CardProducer />
    //       </Grid>
    //     </Grid>
    //   </div>
    // </div>
  );
}
