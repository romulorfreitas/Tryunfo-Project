import { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <h1>ADICONE NOVA CARTA</h1>
          <label htmlFor="cardName">
            Nome
            <input type="text" data-testid="name-input" id="cardName" />
          </label>

          <label htmlFor="cardDescription">
            Descrição da Carta
            <textarea
              data-testid="description-input"
              id="cardDescription"
            />
          </label>

          <label htmlFor="attr1">
            Attr1
            <input type="number" data-testid="attr1-input" id="attr1" />
          </label>

          <label htmlFor="attr2">
            Attr2
            <input type="number" data-testid="attr2-input" id="attr2" />
          </label>

          <label htmlFor="attr3">
            Attr3
            <input type="number" data-testid="attr3-input" id="attr2" />
          </label>

          <label htmlFor="cardImage">
            Imagem da Carta
            <input type="text" data-testid="image-input" id="cardImage" />
          </label>

          <label htmlFor="selectType">
            <select data-testid="rare-input" id="selectType">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>

          <label htmlFor="trunfoInput">
            Super Trybe Trunfo
            <input type="checkbox" data-testid="trunfo-input" id="trunfoInput" />
          </label>

          <button type="submit" data-testid="save-button"> Salvar </button>

        </form>
      </div>

    );
  }
}
export default Form;
