import axios from "axios";

var getapiUrl = "https://api.thecatapi.com/v1/images/search";

class CatsApi {
  static getcats() {
    axios.defaults.headers.common["x-api-key"] =
      "eed3d530-965b-400f-b68b-c837bb6731bf";

    let query_params = {
      limit: 100,
      order: "Rand",
      page: 1
    };

    return axios
      .get(getapiUrl, { params: query_params })
      .then(response => {
        return Object.assign([], response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
}

export default CatsApi;
