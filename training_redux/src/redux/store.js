import { createStore } from "redux";
const reducer = (state = {}, action) => {
  console.log("Лог екшена", action);
  return state;
};
const store = createStore(reducer);

export default store;
