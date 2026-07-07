import { ReactNode } from 'react';
export interface BadgeProps {
  tone?: 'brand' | 'action' | 'neutral' | 'paid';
  children?: ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
