import API from "./Api";

export default {
  async getCookie() {
    await API.get("/csrf-cookie");
  },
};
