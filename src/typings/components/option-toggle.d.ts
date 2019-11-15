declare module Components {
  export interface OptionToggle {
    title: string;
    description: string;
    active: boolean;
    onChange: (active: boolean) => void;
  }
}
