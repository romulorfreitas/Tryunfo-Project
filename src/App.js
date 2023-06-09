import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: true,
    hasTrunfo: false,
    isSaveButtonDisabled: false,
    savedCard: [],
  };

  handleCardTrunfo = (cardName) => {
    if (cardName !== 'cardTrunfo') {
      this.setState({ cardTrunfo: this.cardTrunfo, hasTrunfo: true });
    }
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const checkTrunfo = name === 'cardTrunfo'
      ? this.handleCardTrunfo(name) : this.setState({
        [name]: value }, () => {
        const { cardName, cardDescription, cardAttr1, cardAttr2,
          cardAttr3, cardImage } = this.state;

        const maxCharacters = 90;
        const totalCharacteres = 210;

        const verifyInputs = cardName.length > 0
          && cardImage.length > 0
          && cardDescription.length > 0
          && (Number(cardAttr1) >= 0 && Number(cardAttr1) <= maxCharacters)
          && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= maxCharacters)
          && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= maxCharacters)
          && (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3)
          <= totalCharacteres);
        this.setState({ isSaveButtonDisabled: verifyInputs });
      });
    return checkTrunfo;
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage } = this.state;

    const obj = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage };

    this.setState((previus) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: '',
      cardTrunfo: true,
      hasTrunfo: false,
      isSaveButtonDisabled: false,
      savedCard: [...previus.savedCard, obj],
    }));
    this.handleCardTrunfo();
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled, savedCard } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ !isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

        { savedCard.map((eachItem) => (
          <Card
            key={ eachItem.cardImage }
            cardName={ eachItem.cardName }
            cardDescription={ eachItem.cardDescription }
            cardAttr1={ eachItem.cardAttr1 }
            cardAttr2={ eachItem.cardAttr2 }
            cardAttr3={ eachItem.cardAttr3 }
            cardImage={ eachItem.cardImage }
            cardRare={ eachItem.cardRare }
            cardTrunfo={ eachItem.cardTrunfo }
          />
        ))}

      </div>
    );
  }
}

export default App;
