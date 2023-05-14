
export default function SearchForm() {
    const searchForm = <section> <div class="container">
        <form class="search-form" autocomplete="off" name="search-form">
            <div class="search-form__body">
                <input type="text" name="searchQuery" placeholder="Search images..." />
                <button type="submit" class="search-button"></button>
            </div>
            <div class="filters is-hidden">
                <div class="sam-dropdown">
                    <select name="category">
                        <option selected value="">category</option>
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
                    <select name="image type">
                        <option value="all">all</option>
                        <option value="photo">photo</option>
                        <option selected value="illustration">illustration</option>
                        <option value="vector">vector</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
    </section>;

    return searchForm;
}

