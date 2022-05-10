import React from 'react'
import { Card, DivFlex, ProductImg, Title, Description, FeatureSection, FeatureTitle, FeatureValue, LikeButton, ChatButton, SubTitle, UserCard, UserButtons, UserCardSection } from './Elements';
import product from '../../images/product.jpg';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { LikeNumber } from '../ModelCard/Elements';
import { colors } from '../../theme';
import { useParams } from 'react-router-dom';


class ProductInformation extends React.Component {
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

    fetch('https://api.flexeo.es/v1/product/'+id, {
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
          <ProductImg src={"https://images.flexeo.es/file/flexeo/products/"+this.state.contentProduct.product_id}></ProductImg>
          <div>
            
            <Title>{this.state.contentProduct.model.name}</Title>
            <Description>{this.state.contentProduct.description}</Description>
            <DivFlex>
              <FeatureTitle>Estado:</FeatureTitle><FeatureValue>{this.state.contentProduct.condition}</FeatureValue>
            </DivFlex>
            <DivFlex>
              <FeatureTitle>Talla:</FeatureTitle><FeatureValue>{this.state.contentProduct.size}</FeatureValue>   
            </DivFlex>
            <FeatureValue>{this.state.contentProduct.model.gender}</FeatureValue>   
            <DivFlex>
              <FeatureTitle>Precio retail:</FeatureTitle><FeatureValue>{this.state.contentProduct.model.retail_price}$</FeatureValue>
            </DivFlex>
            <DivFlex>
              <FeatureTitle>Marca:</FeatureTitle><FeatureValue>{this.state.contentProduct.model.brand}</FeatureValue>
            </DivFlex>
            <DivFlex>
              <ChatButton>Chat</ChatButton>
            </DivFlex>
            <SubTitle></SubTitle>
            <UserCardSection>
              <UserCard>

              </UserCard>
              <UserButtons>

              </UserButtons>
            </UserCardSection>
          </div>
        </FeatureSection>


      </Card>
    </>)

};
}

export default (props) => (
  <ProductInformation
      {...props}
      params={useParams()}
  />
);