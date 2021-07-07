import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const CardDiv = styled.div`
border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const HeadLine = styled.div`
font-size: 25px;
  font-family: Didot, serif;
`;

const Author = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
margin-top: 15px;
`;

const Span = styled.span`
padding-left: 10px;
font-size: 12px;
letter-spacing: 1px;
font-weight: bold;
`;

const ImgContainer = styled.div`
padding-right: 10px;
border-right: 1px solid lightgrey;
height: 40px;
`;

const Img = styled.img`
width: 40px;
`;

const Card = props => {
  return (
    <CardDiv className="card">
      <HeadLine className="headline">{props.card.headline}</HeadLine>
      <Author className="author">
        <ImgContainer className="img-container">
          <Img src={props.card.img} alt='img'/>
        </ImgContainer>
        <Span>By ${props.card.author}</Span>
      </Author>
    </CardDiv>
  );
};

Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.img,
  author: PropTypes.string
};

export default Card;
