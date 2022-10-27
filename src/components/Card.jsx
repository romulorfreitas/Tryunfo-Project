import React, { Component } from 'react';
import Props from 'prop-types';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo } = this.props;

    return (
      <>
        <h1 data-testid="name-card">{ cardName }</h1>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">{ cardAttr1 }</p>
        <p data-testid="attr2-card">{ cardAttr2 }</p>
        <p data-testid="attr3-card">{ cardAttr3 }</p>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo && <p data-testid="trunfo-card"> Super Trunfo</p> }

        {/* <p {cardTrunfo: true} <p> Super Trunfo </p> </p>  */}

      </>
    );
  }
}

Card.propTypes = {
  cardName: Props.string.isRequired,
  cardDescription: Props.string.isRequired,
  cardAttr1: Props.string.isRequired,
  cardAttr2: Props.string.isRequired,
  cardAttr3: Props.string.isRequired,
  cardImage: Props.string.isRequired,
  cardRare: Props.string.isRequired,
  cardTrunfo: Props.string.isRequired,
};

export default Card;
