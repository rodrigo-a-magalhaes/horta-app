import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IconVerify } from './IconsSVG';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    cursor: 'pointer',
    border: '1px solid transparent',
    "&:hover": {
      borderColor: '#cacaca'
    },
  },
  content: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  thumb: {
    paddingRight: '16px',
    borderRight: '1px solid #EBEBEB '
  },
  thumbImg: {
    width: 90,
    height: 90,
    borderRadius: '50%',
    border: '1px solid #EBEBEB',
    padding: '10px'
  },
  info: {
    padding: '0 1rem',
    width: '100%'
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  p: {
    color: '#8f8f8f'
  }
});

export default function CardProducer() {
  const classes = useStyles();
  const history = useHistory();

  function handleButton() {
    history.push('/pedro')
  }

  return (
    <Card className={classes.root} onClick={handleButton}>
      <CardContent className={classes.content}>
        <div className={classes.thumb}>
          <img className={classes.thumbImg} src="./static/banana-p-500.jpeg" alt="" />
        </div>
        <div className={classes.info}>
          <div className={classes.title}>
            <Typography variant="h4" component="h2">HORTA LTDA</Typography>
            <IconVerify />
          </div>
          <Typography className={classes.p} variant="body2" component="p">Melhor hortifruti de Uberlândia</Typography>
          <Typography className={classes.p} variant="subtitle1" component="p">Horta.app</Typography>
        </div>
      </CardContent>
    </Card>
  );
}