import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { AppContext, ProducerProps } from '../utils/context/AppContext';
import { IconVerify } from './IconsSVG';

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

interface CardProducerProps {
  producer: ProducerProps
}

export default function CardProducer({ producer }: CardProducerProps) {
  const classes = useStyles();
  const history = useHistory();
  const { setProducer } = useContext(AppContext);

  function handleProduct(producer: ProducerProps) {
    setProducer(producer);
    history.push(`/${producer.id}`);
  }

  return (
    <Card className={classes.root} onClick={() => { handleProduct(producer) }}>
      <CardContent className={classes.content}>
        <div className={classes.thumb}>
          <img className={classes.thumbImg} src={producer.thumb} alt={producer.name} />
        </div>
        <div className={classes.info}>
          <div className={classes.title}>
            <Typography variant="h4" component="h2">{producer.name}</Typography>
            <IconVerify />
          </div>
          <Typography className={classes.p} variant="body2" component="p">{producer.description}</Typography>
          <Typography className={classes.p} variant="subtitle1" component="p">{producer.category}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}