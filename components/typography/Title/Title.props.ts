import { ReactNode } from 'react';

export interface ITitle {
  tag: 'h1' | 'h2';
  className?: string;
  children: ReactNode;
}
