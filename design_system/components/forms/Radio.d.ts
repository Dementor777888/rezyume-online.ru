export interface RadioProps {
  label?: string;
  name?: string;
  checked?: boolean;
  onChange?: () => void;
}

export function Radio(props: RadioProps): JSX.Element;
