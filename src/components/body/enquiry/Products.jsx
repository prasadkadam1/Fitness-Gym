import React from 'react'
import Product from './Product'
import ProductsScrolling from './ProductsScrolling';
import AboutFooter from './AboutFooter';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Products = () => {
  let [count, setCount] = React.useState(0)
  let handleCount = () => {
    setCount(count + 1)
  }
  return (
    <div className='h-[89.5vh] w-[84vw] overflow-y-scroll  bg-black'>
      {/* <ProductsScrolling></ProductsScrolling> */}
      <div className='bg-white flex justify-end pe-10'>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={count} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
      <div className=' flex flex-wrap p-5'>
        <Product handleCount={handleCount}></Product>
        {/* <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>s
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product> */}
      </div>
      <AboutFooter></AboutFooter>
    </div>
  )
}

export default Products