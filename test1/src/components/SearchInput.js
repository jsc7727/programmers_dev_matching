// SearchInput.js
export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement("form");
  this.$element.className = "SearchInput";
  this.state = initialState;

  $target.appendChild(this.$element);

  this.setState = (newState) => {
    this.state = { ...this.state, ...newState };
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `
    <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
    `;
  };

  this.render();

  this.$element.addEventListener("keyup", (e) => {
    console.log(e.target);
    console.log(e.target.value, e.key);
    onChange(e.target.value, e.key);
  });

  this.$element.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}
