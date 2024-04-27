export interface Page {
  children?: React.ReactNode | string;
  title?: string | 'Mad Software';
  description?: string;
  keywords?: string | [];
  fullscreen?: boolean;
}