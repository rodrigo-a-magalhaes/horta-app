import { Box, Container, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { default as React } from "react";
import CardProducer from "../components/CardProducer";

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

function ProducersList() {

  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="column"
      height="100%">
      <Container maxWidth="xl">
        <Typography variant="h5" component="h2" className={classes.title}>
          Produtores recomendados
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <CardProducer />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <CardProducer />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <CardProducer />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <CardProducer />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
            <CardProducer />
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
export default ProducersList;