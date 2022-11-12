function Header({ $target, initialState, onClickHandler }) {
  this.state = initialState;

  this.$header = document.createElement("header");

  this.render = () => {
    $target.prepend(this.$header);
    this.$header.innerHTML = `
            ${this.state
              .map((el) => {
                const { position = "", text = "", url = "" } = el;
                return `
                <div class="header header_${position}">
                    <span class="menu_name" id="menu_${text.toLowerCase()}" data-url=${url}>${text}</span>
                </div>
                `;
              })
              .join("")}
        `;
  };
  this.$header.addEventListener("click", (e) => {
    const $menu = e.target.closest(".menu_name");
    if ($menu) {
      onClickHandler($menu.getAttribute("data-url"));
    }
  });

  this.render();
}
export default Header;
