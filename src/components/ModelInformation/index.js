import React from 'react'
import { Card, DivFlex, ProductImg, Title, Description, FeatureSection, FeatureTitle, FeatureValue, LikeButton, ChatButton, UserCard, UserButtons, UserCardSection, BreadCrumbs } from './Elements';
import product from '../../images/product.jpg';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { LikeNumber } from '../ModelCard/Elements';
import { colors } from '../../theme';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import products from '../../images/filling_products.png';


class ModelInformation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contentProduct: null,
      contentModel: null,
      contentUser: null,
      DataisLoaded: false
    }
  }

  pullData() {
    const { id } = this.props.params;

    fetch('https://flexeo-api.dgpmakes.com/v1/model/' + id, {
      credentials: 'include'
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          contentProduct: json,
          DataisLoaded: true,
        });
        //console.log(json);
        //console.log(this.state.contentProduct.length);
      });




  }



  componentDidMount() {
    this.interval = this.pullData();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  translateGender(gender) {
    switch (gender) {
      case 'women':
        return 'Mujer';
      case 'men':
        return 'Hombre';
    }
  }

  render() {
    const { DataisLoaded } = this.state;
    if (!DataisLoaded) {
      return (
        <>
          <p>Loading</p>
        </>)
    }


    return (
      <>
        <Card>
          <FeatureSection>
            <ProductImg src={"https://flexeo-images.dgpmakes.com/file/flexeo/models/"+this.state.contentProduct.model_id}></ProductImg>
            <div style={{margin:"80px 0px 0px 0px"}}>

              <BreadCrumbs to={'/'} >Inicio / Modelo / {this.state.contentProduct.name}</BreadCrumbs>

              <Title style={{margin:"3px 0px 5px 0px"}}>{this.state.contentProduct.name}</Title>
              <div style={{ color: colors.like_count_grey }}>
                <DivFlex>
                  <h3 style={{fontWeight:"400", color:"#707092"}}>{this.state.contentProduct.retail_price}$</h3>
                  <h6 style={{margin:"8px 0px 0px 5px", fontWeight:"400"}}>en retail </h6>
                </DivFlex>
                <FeatureTitle style={{margin:"8px 0px 0px 0px"}}>{this.state.contentProduct.brand} · {this.translateGender(this.state.contentProduct.gender)}</FeatureTitle>
                <FeatureTitle>A la venta desde el {this.state.contentProduct.retail_date} </FeatureTitle>
              </div>

              
            </div>
            
          </FeatureSection>
          <img style={{margin:"0px 0px 0px 100px", width:"670px"}}src={products}></img>
        </Card>
      </>)

  };
}

export default (props) => (
  <ModelInformation
    {...props}
    params={useParams()}
  />
);