declare module Components {
  export interface OptionColor {
    title: string;
    description: string;
    colors: string[];
    onChange: (colors: string) => void;
  }
}
