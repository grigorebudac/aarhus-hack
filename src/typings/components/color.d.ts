declare module Components {
  export interface Color {
    value: string;
    active: boolean;
    onPress: (color: string) => void;
  }
}
