function ContentTitle({ $target, title }) {
  this.$div = document.createElement("div");
  this.$div.className = "content_title";
  this.render = () => {
    $target.prepend(this.$div);
    this.$div.innerHTML = `
            <h1>${title}</h1>
        `;
  };
  this.render();
}
export default ContentTitle;
