import {React,useState} from 'react';
import {Card, CardImage,Text,Title,Subsection,Subtitle,Price,LikeCount,LikeNumber} from './Elements';
import {FaRegHeart, FaHeart} from 'react-icons/fa';
import product from '../../images/product.jpg';
import { colors } from '../../theme';
import { Link } from 'react-router-dom';
//import { useState } from 'react/cjs/react.production.min';

const ProductCard = (props) => {

  const [count, setCount] = useState(Math.round(100*Math.random())); //reemplazar por nº likes
  const [likedState, setLikedState] = useState(false);

  function handleLike(){
    if(!likedState){
      setCount(count + 1);
      setLikedState(true);
    }else{
      setCount(count - 1);
      setLikedState(false);
    }
  }

  function showIcon(){
    if(!likedState){
      return <LikeCount onClick={() => handleLike()}><FaRegHeart/><LikeNumber>{count}</LikeNumber></LikeCount>
    }else{
      return <LikeCount style={{color: colors.ter}} onClick={() => handleLike()}><FaHeart/><LikeNumber>{count}</LikeNumber></LikeCount>
    }
  }

  return (
    <>
      <Card>
        <Link to={'/product/' + props.id}>
        <CardImage src={product} alt='product-photo'></CardImage>
        </Link>
        <Text>
          <Subsection>        
            <Subtitle><Price>{props.price}€ </Price></Subtitle>
            {showIcon()}
          </Subsection>
          <Title>@{props.name}</Title>
        </Text>
      </Card>
      
    </>
  );
};

export default ProductCard;
