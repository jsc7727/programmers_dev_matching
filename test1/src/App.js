// App.js
import SearchInput from "./components/SearchInput.js";
import SelectedLanguage from "./components/SelectedLanguage.js";
import Suggestion from "./components/Suggestion.js";
import { getSearchedLanguages } from "./lib/api.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
  };
  const selectedLanguage = new SelectedLanguage({
    $target,
    initialState: { selectedLanguages: [] },
  });

  this.onChangeHandler = async (text) => {
    this.state.fetchedLanguages = await getSearchedLanguages(text);
    suggestion.setState({ fetchedLanguages: this.state.fetchedLanguages });
  };

  this.onClickHandler = (fetchedLanguagesIndex) => {
    const language = this.state.fetchedLanguages[fetchedLanguagesIndex];
    const findIndex = this.state.selectedLanguages.indexOf(language);
    if (findIndex !== -1) {
      this.state.selectedLanguages.splice(findIndex, 1);
    }

    this.state.selectedLanguages.push(language);

    if (this.state.selectedLanguages.length > 5) {
      this.state.selectedLanguages.shift();
    }
    selectedLanguage.setState({
      selectedLanguages: this.state.selectedLanguages,
    });
  };

  const searchInput = new SearchInput({
    $target,
    initialState: "",
    onChange: this.onChangeHandler,
  });

  const suggestion = new Suggestion({
    $target,
    initialState: { fetchedLanguages: [] },
    onClick: this.onClickHandler,
  });
  this.setState = (newState) => {};
}
