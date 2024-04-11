import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import p11 from "../../../assets/images/p1 (1).jpg"
import p12 from "../../../assets/images/p1 (2).jpg"
import p13 from "../../../assets/images/p1 (3).jpg"
import p14 from "../../../assets/images/p1 (4).jpg"
import p15 from "../../../assets/images/p1 (5).jpg"
import p16 from "../../../assets/images/p1 (6).jpg"
import p17 from "../../../assets/images/p1 (7).jpg"
import p18 from "../../../assets/images/p1 (8).jpg"
import p19 from "../../../assets/images/p1 (9).jpg"
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
// import { grey } from '@mui/material/colors';
import { green } from '@mui/material/colors';


export default function Product(props) {
  console.log(props.handleCount)
  const ColorButtongreen = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  }));

  let products = [
    {
      img: p11,
      prodName: "Whey Protein",
      price: 250 + "$",
      buy: ColorButtongreen,
      description: "Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle  synthesis and the growth of lean muscle mass. Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass."
    },
    {
      img: p12,
      prodName: "Gain Pro",
      price: 250 + "$",
      buy: ColorButtongreen,
      description: "Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass"
    },
    {
      img: p13,
      prodName: "Creatinine",
      price: 250 + "$",
      buy: ColorButtongreen,
      description: "Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass"
    },
    {
      img: p14,
      prodName: "Protein Shakers",
      price: 250 + "$",
      buy: ColorButtongreen,
      description: "Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass"
    },
    {
      img: p15,
      prodName: "Whey Protein",
      price: 250 + "$",
      buy: ColorButtongreen,
      description: "Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass"
    },
    {
      img: p16,
      prodName: "Protein Shake",
      price: 250 + "$",
      buy: ColorButtongreen,
      description: "Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass"
    },
    {
      img: p17,
      prodName: "Dietary Suppliments",
      price: 250 + "$",
      buy: ColorButtongreen,
      description: "Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass"
    },
    {
      img: p18,
      prodName: "Protein Powder",
      price: 250 + "$",
      buy: ColorButtongreen,
      description: "Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass"
    },
    {
      img: p19,
      prodName: "Vitamin D3",
      price: 250 + "$",
      buy: ColorButtongreen,
      description: "Whey protein is a supplement that some people use alongside resistance exercise to help boost muscle protein synthesis and the growth of lean muscle mass"
    },
  ]

  return (
    <div className='flex flex-wrap '>

      {products.map((val, i) => {
        return (
          <div className='p-2' key={i}>

            <Card sx={{ maxWidth: 345, height: "60vh", overflowY: "auto" }} className='prodCard' >
              <CardMedia
                sx={{ height: 140 }}
                image={val.img}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.prodName}
                  <div>
                    <span className='text-dm me-5'>{val.price}</span>
                    <ColorButtongreen variant="contained" className='m-2' onClick={() => { props.handleCount() }}>Add to Cart</ColorButtongreen>
                  </div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {val.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

          </div>
        )

      })}
    </div>
  );
}





