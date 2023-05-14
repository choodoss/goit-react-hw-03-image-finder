import React, { Component } from 'react';
import BackgroundContainer from './BackgroundContainer/BackgroundContainer';
import { searchImages } from './fetchDefault/fetchDefault'
//запрос на картинки із масиву даних
//відмальовуємо картинки
//має бути пошукова стрічка
//після пошуку: зникає бекграунд + сьорч піднімається вверх
//зявляються фільтри
//знизу відмальовуються картинки
//підключити бібліотеку для зображень...

class App extends Component {

  state = {
    name: 'girl',
    page: 1,
    per_page: 9,
    category: 'all',
    colors: 'all',
    orientation: 'all',
    image_type: 'all',
    response: null,
  };

  componentDidMount() {
    searchImages(this.state)
      .then(res => this.setState({ response: res }))

  }

  render() {
    const response = this.state.response
    const app = (
      <>
        {response && <BackgroundContainer response={response} />}
        {response && <BackgroundContainer response={response} />}
      </>
    );
    return app;
  }
}

export default App;
