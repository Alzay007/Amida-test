import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemsCount,
  onCartClick
}) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyShop
        </Typography>
        <IconButton color="inherit" aria-label="cart" onClick={onCartClick}>
          <ShoppingCartIcon />
        </IconButton>
        <span>{cartItemsCount}</span>
      </Toolbar>
    </AppBar>
  );
};
