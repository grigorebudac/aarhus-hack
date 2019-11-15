import axios from "axios";

class AppService {
  public init() {
    return axios.get("/init");
  }

  public turnLights(status: boolean) {
    const endpoint = status ? "open" : "close";
    return axios.get(`/${endpoint}`);
  }

  public pinAction({ con, action, pin, value }: Utils.PinAction) {
    return axios.post(`/${con}/${action}/${pin}/${value}`);
  }
}

export default AppService;
