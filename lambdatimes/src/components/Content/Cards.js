import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => {
        return <Card card ={card} />
      })}
    </div>
  )
}

Cards.PropTypes = {
  card: PropTypes.array,
}

export default Cards;