import axios from "axios";
class AppService {
  public init() {
    return axios.get("http://192.168.43.224:8000/init");
  }

  public turnLights(status: boolean) {
    const endpoint = status ? "open" : "close";
    return axios.get(`http://192.168.43.224:8000/${endpoint}`);
  }
}

export default AppService;
