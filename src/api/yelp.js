import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer dDZAKXinAjcN1nOQEvi9zvYtRjDqGc8JVDUJuGEETCUbsyUhpCzBnmOMqRGx4tdxQumPZWabUkAhRK5tEJ605xquqah7GcMoxg-RbMuibeE4gtY1E4EdAkhPiRg6YnYx",
  },
});
