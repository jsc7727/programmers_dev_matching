import ContentTitle from "./../components/ContentTitle.js";

function HomePage({ $target }) {
  this.$main = document.createElement("main");
  this.$main.id = "page_content";

  new ContentTitle({
    $target: this.$main,
    title: "CardView",
  });

  this.$cards_container = document.createElement("div");
  this.$cards_container.id = "cards_container";
  this.$main.append(this.$cards_container);

  this.render = async () => {
    $target.append(this.$main);
    const personalInfo = JSON.parse(localStorage.getItem("personalInfo"));
    const cardStatus = JSON.parse(localStorage.getItem("cardStatus"));
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
    const idx = e.target.parentNode.getAttribute("idx");
    const cardStatus = JSON.parse(localStorage.getItem("cardStatus"));
    cardStatus[idx].status =
      cardStatus[idx].status === "card" ? "card is-flipped" : "card";
    localStorage.setItem("cardStatus", JSON.stringify(cardStatus));
    e.target.parentNode.classList.toggle("is-flipped");
  });
}
export default HomePage;
