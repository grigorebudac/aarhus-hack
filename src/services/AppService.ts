import axios from "src/lib/axios";

class AppService {
  public init() {
    return axios.get("/init");
  }

  public turnLights(status: boolean) {
    const endpoint = status ? 1 : 0;
    return axios.post(`/lights/${endpoint}`);
  }

  public turnParty(status: boolean) {
    const endpoint = status ? 1 : 0;
    return axios.get(`/party/${endpoint}`);
  }

  public changeBrightness(brightness: number) {
    return axios.post(`/brightness/${brightness}`);
  }

  public pinAction({ con, action, pin, value }: Utils.PinAction) {
    return axios.post(`/${con}/${action}/${pin}/${value}`);
  }
}

export default AppService;
