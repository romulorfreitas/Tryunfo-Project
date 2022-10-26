import { Component } from 'react';
import Props from 'prop-types';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, // hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <div>
        <form>
          <h1>ADICONE NOVA CARTA</h1>
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardDescription">
            Descrição da Carta
            <textarea
              data-testid="description-input"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1">
            Attr1
            <input
              type="number"
              data-testid="attr1-input"
              id="attr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2">
            Attr2
            <input
              type="number"
              data-testid="attr2-input"
              id="attr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3">
            Attr3
            <input
              type="number"
              data-testid="attr3-input"
              id="attr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="cardImage">
            Imagem da Carta
            <input
              type="text"
              data-testid="image-input"
              id="cardImage"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="selectType">
            <select
              data-testid="rare-input"
              id="selectType"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="trunfoInput">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="trunfoInput"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>

          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>

        </form>
      </div>

    );
  }
}

Form.propTypes = {
  cardName: Props.string.isRequired,
  cardDescription: Props.string.isRequired,
  cardAttr1: Props.string.isRequired,
  cardAttr2: Props.string.isRequired,
  cardAttr3: Props.string.isRequired,
  cardImage: Props.string.isRequired,
  cardRare: Props.string.isRequired,
  cardTrunfo: Props.string.isRequired,
  // hasTrunfo: Props.string.isRequired,
  isSaveButtonDisabled: Props.bool.isRequired,
  onInputChange: Props.func.isRequired,
  onSaveButtonClick: Props.string.isRequired,
};

export default Form;
