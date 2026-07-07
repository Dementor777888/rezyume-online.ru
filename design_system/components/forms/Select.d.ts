export interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options?: string[];
  placeholder?: string;
}

export function Select(props: SelectProps): JSX.Element;
