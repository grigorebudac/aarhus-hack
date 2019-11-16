import axios from "src/lib/axios";

class AppService {
  public init() {
    return axios.get("/init");
  }

  public turnLights(status: number) {
    return axios.post(`/lights/${status}`);

    // 1- blinking
    // 2 - static
    // 3 - predefined
  }

  public turnParty(status: boolean) {
    return this.turnLights(1);
  }

  public async changeBrightness(brightness: number) {
    return axios.post(`/brightness/${brightness}`);
  }

  public async changeColor(rgbColor: string) {
    if (rgbColor === "") {
      return this.turnLights(2);
    }

    const args = rgbColor
      .substring(rgbColor.indexOf("(") + 1, rgbColor.length - 1)
      .split(", ");

    await this.turnLights(3);
    return setTimeout(() => {
      return axios.post(`/colors/${args[0]}/${args[1]}/${args[2]}`);
    }, 700);
  }

  public pinAction({ con, action, pin, value }: Utils.PinAction) {
    return axios.post(`/${con}/${action}/${pin}/${value}`);
  }
}

export default AppService;
