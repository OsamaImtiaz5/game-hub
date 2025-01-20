import axios from 'axios'

export default axios.create({
    baseURL: "https://api.rawg.io/api",
  params: {
    key: "2c81458799f8420b89da6fc6bc373965",
  },
});