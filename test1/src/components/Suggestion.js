export default function Suggestion({ $target, initialState, onClick }) {
  this.$div = document.createElement("div");
  this.$div.className = "Suggestion";
  $target.append(this.$div);

  this.state = initialState;

  this.setState = (newState) => {
    this.state = {
      ...this.state,
      ...newState,
    };
    this.render();
  };

  this.render = () => {
    this.$div.style.display = "block";
    const { fetchedLanguages = [], selectedIndex = 0 } = this.state;
    if (fetchedLanguages.length > 0) {
      this.$div.innerHTML = `<ul>
              ${fetchedLanguages
                .map((language, index) => {
                  const selectedClass =
                    selectedIndex === index ? "Suggestion__item--selected" : "";
                  return `<li class="${selectedClass}" data-index="${index}">${language}</li>`;
                })
                .join("")}
          </ul>`;
    } else {
      this.$div.style.display = "none";
    }
  };

  this.$div.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    onClick($li.dataset.index);
  });

  this.$div.addEventListener("keyup", (e) => {
    console.log("suggestion", e.target);
  });

  this.render();
}
