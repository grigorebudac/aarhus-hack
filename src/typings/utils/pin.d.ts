type conType = "digital" | "analog";
type actionType = "read" | "write";

declare module Utils {
  export interface PinAction {
    con: conType;
    action: actionType;
    pin: number;
    value: string;
  }
}
