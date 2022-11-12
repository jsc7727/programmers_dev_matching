import ContentTitle from "./../components/ContentTitle.js";

function HomePage({ $target, initialState, onClickHandler }) {
  this.$main = document.createElement("main");
  this.$main.id = "page_content";

  new ContentTitle({
    $target: this.$main,
    title: "CardView",
  });
  console.log("check", this.$main);
  console.log("check", $target);

  this.$cards_container = document.createElement("div");
  this.$cards_container.id = "cards_container";
  this.$main.append(this.$cards_container);

  this.state = initialState;

  this.setState = (newState) => {
    this.state = { ...this.state, ...newState };
    console.log(this.state);
    this.render();
  };

  this.render = async () => {
    $target.append(this.$main);
    const { personalInfo, cardStatus } = this.state;
    this.$cards_container.innerHTML = `
      ${personalInfo
        .map((card) => {
          const { nickname, mbti, idx } = card;
          const { status } = cardStatus[idx];
          return `
              <div idx=${idx} class="${status}">
                  <div class="card_plane card_plane--front">${nickname}</div>
                  <div class="card_plane card_plane--back">${mbti}</div>
              </div>
          `;
        })
        .join("")}
    `;
  };
  this.$cards_container.addEventListener("click", (e) => {
    console.log(e.target.parentNode.classList.toggle("is-flipped"));
    onClickHandler(e.target.parentNode.getAttribute("idx"));
  });
}
export default HomePage;
