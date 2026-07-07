import { ReactNode, CSSProperties } from 'react';
export interface CardProps {
  padding?: string;
  elevated?: boolean;
  children?: ReactNode;
  style?: CSSProperties;
}

export function Card(props: CardProps): JSX.Element;
