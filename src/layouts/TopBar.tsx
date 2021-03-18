import { AppBar, Theme, Toolbar } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../components/Logo';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    height: 80,
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[1]

  },
  logo: {
    maxWidth: 200
  }
}));

interface TopBarData {
  className?: string
}

function TopBar({ className, ...rest }: TopBarData) {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.root}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
}
export default TopBar;