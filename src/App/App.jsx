import React, { Component } from 'react';
import BackgroundContainer from './BackgroundContainer/BackgroundContainer';
import { searchImages } from './fetchDefault/fetchDefault';
import SearchForm from './SearchForm/SearchForm';
import ImagesList from './ImagesList/ImagesList';
import { Container } from './App.styled';
import LoadBtn from './LoadBtn/LoadBtn';

class App extends Component {

  state = {
    name: '',
    page: 1,
    per_page: 9,
    category: 'all',
    colors: 'all',
    orientation: 'all',
    image_type: 'all',
    response: null,
    submitted: false,
    total: 0,
  };

  componentDidMount() {
    const local = localStorage.getItem("searchName");
    if (local) {
      this.setState({ name: JSON.parse(local) }, () => {
        searchImages(this.state)
          .then(res => {
            return this.setState({ response: res })
          })
      })
    }
    searchImages(this.state)
      .then(res => {
        return this.setState({ response: res })
      })
  }

  hendlerSubmitChange = async ({ submit, searchName }) => {
    localStorage.setItem("searchName", JSON.stringify(searchName))
    await this.setState({ submitted: { submit }, per_page: 40, name: searchName })
    await searchImages(this.state)
      .then(res => {
        this.setState({ total: res.total })
        return this.setState({ response: res })
      })
  }

  hendlerLoadMore = async () => {
    await this.setState(prevState => ({ total: prevState.total - 40, page: prevState.page + 1 }))
    await searchImages(this.state)
      .then(res => {
        this.setState({ total: res.total })
        return this.setState({ response: res })
      })
  }

  render() {
    const { response, submitted, total } = this.state;
    const hendlerSubmitChange = this.hendlerSubmitChange;
    const hendlerLoadMore = this.hendlerLoadMore;

    const app = (
      <Container>
        {response && !submitted ? <BackgroundContainer response={response} /> : null}
        <SearchForm onSubmit={hendlerSubmitChange} submitted={submitted} />
        {response && submitted ? <ImagesList response={response} /> : null}
        {total > 1 && response && submitted ? <LoadBtn hendlerLoadMore={hendlerLoadMore} /> : null}
      </Container>
    );
    return app;
  }
}

export default App;
