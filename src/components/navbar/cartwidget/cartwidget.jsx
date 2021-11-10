import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';


const CartWidget = () => {  

    return (
    
        <IconButton
        size="large"
        aria-label="show 1 new items in cart"
        color="inherit"
        >
        <Badge badgeContent={1} color="error">
        <ShoppingCartIcon />
        </Badge>
        </IconButton>

            );

}

export default CartWidget;



