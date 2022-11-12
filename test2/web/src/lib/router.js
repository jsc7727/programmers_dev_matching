const DEFAULT_URL = "/web";

export const ROUTE = {
  "/web/": {
    page: "homePage",
  },
  "/web/signup": {
    page: "signupPage",
  },
};
function router({ state, url }) {
  history.pushState(state, "", url);
}
export default router;
