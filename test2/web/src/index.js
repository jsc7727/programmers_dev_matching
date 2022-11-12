import Header from "./components/Header.js";
import Router, { ROUTE } from "./lib/router.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";
import { getData } from "./lib/api.js";

function index({ $target }) {
  this.state = {
    pathname: location.pathname,
    pages: {},
  };

  this.rerender = () => {
    this.render(this.state.pathname);
  };

  this.ininial = async () => {
    if (localStorage.getItem("personalInfo") === null) {
      const personalInfo = (await getData()).map((v, idx) => ({
        idx,
        ...v,
      }));
      localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
      const cardStatus = personalInfo.map(({ idx }) => ({
        idx,
        status: "card",
      }));
      localStorage.setItem("cardStatus", JSON.stringify(cardStatus));
    }
    this.rerender();
  };

  this.render = (url) => {
    this.state.pathname = url;
    $target.innerHTML = "";
    this.state.pages[ROUTE[url].page].render();
  };

  window.onpopstate = (event) => {
    const url = location.pathname;
    this.render(url);
  };

  const header = new Header({
    $target: document.querySelector("body"),
    initialState: [
      { position: "left", text: "HOME", url: "/web/" },
      { position: "right", text: "SIGNUP", url: "/web/signup" },
    ],
    onClickHandler: (url) => {
      Router({ url });
      this.render(url);
    },
  });

  // pages
  this.state.pages.homePage = new HomePage({
    $target,
    initialState: {
      personalInfo: [],
      cardStatus: [],
    },
  });

  this.state.pages.signupPage = new SignupPage({
    $target,
    initialState: {
      name: "",
      email: "",
      nickname: "",
      role: "",
      mbti: "",
    },
  });
  this.render(this.state.pathname);
  this.ininial();
}

new index({ $target: document.querySelector(".app") });
