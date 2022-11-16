// App.js
import SearchInput from "./components/SearchInput.js";
import SelectedLanguage from "./components/SelectedLanguage.js";
import Suggestion from "./components/Suggestion.js";
import { getSearchedLanguages } from "./lib/api.js";

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    selectedIndex: 0,
  };
  const selectedLanguage = new SelectedLanguage({
    $target,
    initialState: { selectedLanguages: [] },
  });

  this.onChangeHandler = async (text, key) => {
    console.log("key", text, key);
    if (key === "ArrowUp" || key === "ArrowDown") {
      if (key === "ArrowUp") {
        this.state.selectedIndex =
          this.state.selectedIndex === 0
            ? this.state.fetchedLanguages.length - 1
            : this.state.selectedIndex - 1;
      } else if (key === "ArrowDown") {
        this.state.selectedIndex =
          this.state.selectedIndex === this.state.fetchedLanguages.length - 1
            ? 0
            : this.state.selectedIndex + 1;
      }
      suggestion.setState({ selectedIndex: this.state.selectedIndex });
    } else {
      this.state.selectedIndex = 0;
      this.state.fetchedLanguages = await getSearchedLanguages(text);
    }
    suggestion.setState({
      selectedIndex: this.state.selectedIndex,
      fetchedLanguages: this.state.fetchedLanguages,
    });
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
    initialState: { fetchedLanguages: [], selectedIndex: 0 },
    onClick: this.onClickHandler,
  });
  this.setState = (newState) => {};
}
