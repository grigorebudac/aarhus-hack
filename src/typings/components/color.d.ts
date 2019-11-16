declare module Components {
  export interface Color {
    value: string;
    onPress: (color: string) => void;
  }
}
