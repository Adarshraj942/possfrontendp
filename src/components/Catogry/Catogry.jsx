import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import catone from '../../assets/catone.png'
import cattwo from '../../assets/cattwo.png'

import catthree from '../../assets/catthree.png'
import icon from '../../assets/icon.png'
import catpc1 from '../../assets/catpc1.png'
import catpc2 from '../../assets/catpc2.png'
import catpc3 from '../../assets/catpc3.png'
import catpc4 from '../../assets/catpc4.png'
import Typography from '@mui/material/Typography';
import { useNavigate }  from 'react-router-dom';
import catfour from '../../assets/catfour.png'
import catseven from '../../assets/catseven.png'
const Catogry = () => {


      const navigate = useNavigate();
  function handlePayment(event){
    navigate('/Payment');
  }

  return (

  )
}

export default Catogry