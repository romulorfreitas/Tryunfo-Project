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
              name="cardName"
            />
          </label>

          <label htmlFor="cardDescription">
            Descrição da Carta
            <textarea
              data-testid="description-input"
              id="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
              name="cardDescription"
            />
          </label>

          <label htmlFor="cardAttr1">
            Attr1
            <input
              type="number"
              data-testid="attr1-input"
              id="cardAttr1"
              value={ cardAttr1 }
              onChange={ onInputChange }
              name="cardAttr1"
            />
          </label>

          <label htmlFor="cardAttr2">
            Attr2
            <input
              type="number"
              data-testid="attr2-input"
              id="cardAttr2"
              value={ cardAttr2 }
              onChange={ onInputChange }
              name="cardAttr2"
            />
          </label>

          <label htmlFor="cardAttr3">
            Attr3
            <input
              type="number"
              data-testid="attr3-input"
              id="cardAttr3"
              value={ cardAttr3 }
              onChange={ onInputChange }
              name="cardAttr3"
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
              name="cardImage"
            />
          </label>

          <label htmlFor="cardRare">
            <select
              data-testid="rare-input"
              id="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
              name="cardRare"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="cardTrunfo">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="cardTrunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
              name="cardTrunfo"
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
  hasTrunfo: Props.string.isRequired,
  isSaveButtonDisabled: Props.bool.isRequired,
  onInputChange: Props.func.isRequired,
  onSaveButtonClick: Props.string.isRequired,
};

export default Form;
