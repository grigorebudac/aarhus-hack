declare module Components {
  export interface OptionSlider {
    title: string;
    description: string;
    min: number;
    max: number;
    value: number;
    onChange: (value: number) => void;
  }
}
