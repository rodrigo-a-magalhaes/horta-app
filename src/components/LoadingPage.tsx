import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { AppContext } from '../utils/context/AppContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export function LoadingPage() {
  const classes = useStyles();
  const { loadingPage } = useContext(AppContext);

  return (
    <>
      {loadingPage && (
        <div className={classes.root}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}