export default function SelectedLanguage({ $target, initialState }) {
  const $div = document.createElement("div");
  $div.className = "SelectedLanguage";
  $target.append($div);

  this.state = initialState;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    const { selectedLanguages = [] } = this.state;
    $div.innerHTML = `<ul>
          ${selectedLanguages
            .map((v) => {
              return `<li>${v}</div>`;
            })
            .join("")}
      </ul>`;
  };
}
