import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';

import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    position: 'relative'
  },
  addCard: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '25px',
    border: '1px solid #eaeaea',
    right: '16px',
    top: '14px',
    padding: '6px 9px',
    background: '#FFF'
  },
  itemNumber: {
    fontSize: '1.2rem',
    fontWeight: 600,
    color: '#333',
    width: '40px',
    textAlign: 'center'
  },
  itemRemove: {
    cursor: 'pointer'
  },
  itemAdd: {
    cursor: 'pointer'
  },
  thumb: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbImg: {
    width: '110px',
    height: '110px',
  },
  info: {
    padding: '0 1rem',
    width: '100%'
  },
  price: {
    color: '#333',
    fontSize: '1.5rem',
    marginBottom: '1rem'
  },
  name: {
    color: '#8f8f8f',
    fontSize: '1.1rem'
  },
  alert: {
    color: '#8f8f8f',
    fontSize: '.65rem',
    marginTop: '1rem'
  }
});

export default function CardProduct() {
  const classes = useStyles();
  const [item, setItem] = useState(0);

  function handleAddItem() {
    setItem(item + 1);
  }
  
  function handleRemoveItem() {
    setItem(item - 1);
  }

  return (
    <Card className={classes.root}>
      <div className={classes.addCard}>

        {item > 0 ?
          (
            <>
              <span onClick={handleRemoveItem} className={classes.itemRemove}>
                {item === 1 ? (<DeleteIcon />) : (<RemoveIcon />)}
              </span>
              <span className={classes.itemNumber}>{item}</span>
              <span onClick={handleAddItem} className={classes.itemAdd}><AddIcon /></span>
            </>
          ) : (
            <span onClick={handleAddItem} className={classes.itemAdd}><AddIcon /></span>
          )}

      </div>
      <CardContent>
        <div className={classes.thumb}>
          <img className={classes.thumbImg} src="./static/banana-p-500.jpeg" alt="" />
        </div>
        <div className={classes.info}>
          <Typography className={classes.price} variant="h4" component="h2">R$ 1,50</Typography>
          <Typography className={classes.name} variant="body2" component="p">Banana Nanica Kg</Typography>
          <Typography className={classes.alert} variant="body2" component="p">*ATENÇÃO O PREÇO ACIMA É REFERENTE À 1 KILO DO PRODUTO</Typography>
        </div>
      </CardContent>
    </Card>
  );
}