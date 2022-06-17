import axios from "axios";

class Request {
  constructor(token = "") {
    this.request = axios.create({
      baseURL: "https://api.github.com",
    });
    this.token = token;
  }
  get = (url) => {
    return this.request.get(url);
  };

  post = (url, params) => {
    return this.request.get(url, params);
  };
}

export const request = new Request();
