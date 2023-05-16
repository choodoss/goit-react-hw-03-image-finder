import { Component } from "react";
import { SearchFormCont, SearchFormBody, SearchInput, SearchButton } from './SearchForm.styled'
import { BsSearch } from 'react-icons/bs';

class SearchForm extends Component {
    state = {
        searchName: '',
    };

    hendlerSearchValue = ({ currentTarget: { value } }) => {
        this.setState({ searchName: value });
    };

    henderSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.searchName.trim().length === 0) {
            return alert("Введіть валідний запит")
        }
        this.props.onSubmit({ submit: true, searchName: this.state.searchName })
        this.setState({ searchName: '' });

    };
    render() {
        const { searchName } = this.state;
        const { submitted } = this.props;

        const searchForm =
            <section>
                <div className="container">
                    <SearchFormCont onSubmit={this.henderSubmitForm} submitted={submitted} autoComplete="off" name="searchForm">
                        <SearchFormBody>
                            <SearchInput onChange={this.hendlerSearchValue} type="text" name="searchQuery" placeholder="Search images and photos" value={searchName} autoFocus />
                            <SearchButton type="submit" ><BsSearch fill="currentColor" /></SearchButton>
                        </SearchFormBody>
                        {/* <div class="filters">
                <div class="sam-dropdown">
                    <select name="category">
                        <option selected value="all">all</option>
                        <option value="backgrounds">backgrounds</option>
                        <option value="fashion">fashion</option>
                        <option value="nature">nature</option>
                        <option value="science">science</option>
                        <option value="education">education</option>
                        <option value="feelings">feelings</option>
                        <option value="health">health</option>
                        <option value="people">people</option>
                        <option value="religion">religion</option>
                        <option value="places">places</option>
                        <option value="animals">animals</option>
                        <option value="industry">industry</option>
                        <option value="computer">omputer</option>
                        <option value="food">food</option>
                        <option value="sports">sports</option>
                        <option value="transportation">transportation</option>
                        <option value="travel">travel</option>
                        <option value="buildings">buildings</option>
                        <option value="music">music</option>
                    </select>
                </div>
                <div class="sam-dropdown">
                    <select name="colors">
                        <option selected value="all">all</option>
                        <option value="grayscale">grayscale</option>
                        <option value="transparent">transparent</option>
                        <option value="red">red</option>
                        <option value="orange">orange</option>
                        <option value="yellow">yellow</option>
                        <option value="green">green</option>
                        <option value="turquoise">turquoise</option>
                        <option value="blue">blue</option>
                        <option value="lilac">lilac</option>
                        <option value="white">white</option>
                        <option value="black">black</option>
                        <option value="brown">brown</option>
                    </select>
                </div>
                <div class="sam-dropdown">
                    <select name="orientation">
                        <option selected value="all">all</option>
                        <option value="horizontal">horizontal</option>
                        <option value="vertical">vertical</option>
                    </select>
                </div>
                <div class="sam-dropdown">
                    <select name="imageType">
                        <option value="all">all</option>
                        <option value="photo">photo</option>
                        <option selected value="illustration">illustration</option>
                        <option value="vector">vector</option>
                    </select>
                </div>
            </div> */}
                    </SearchFormCont>
                </div>
            </section>

        return searchForm;
    }
};

export default SearchForm;

