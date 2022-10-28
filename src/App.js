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
  };

  handleCardTrunfo = (cardName) => {
    if (cardName !== 'cardTrunfo') {
      this.setState({ cardTrunfo: this.cardTrunfo });
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

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo,
      hasTrunfo, onSaveButtonClick, isSaveButtonDisabled } = this.state;
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
          onSaveButtonClick={ onSaveButtonClick }
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

      </div>
    );
  }
}

export default App;
