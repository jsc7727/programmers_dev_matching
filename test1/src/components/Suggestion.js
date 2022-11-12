export default function Suggestion({ $target, initialState, onClick }) {
  const $div = document.createElement("div");
  $div.className = "Suggestion";
  $target.append($div);

  this.state = initialState;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    $div.style.display = "block";
    const { fetchedLanguages = [] } = this.state;
    if (fetchedLanguages.length > 0) {
      console.log(fetchedLanguages);
      $div.innerHTML = `<ul>
              ${fetchedLanguages
                .map((language, index) => {
                  return `<li data-index=${index}>${language}</li>`;
                })
                .join("")}
          </ul>`;
    } else {
      $div.style.display = "none";
    }
  };

  $div.addEventListener("click", (e) => {
    const $li = e.target.closest("li");
    onClick($li.getAttribute("data-index"));
  });

  this.render();
}
