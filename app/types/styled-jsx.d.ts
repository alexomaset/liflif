import 'react';

declare module 'react' {
  interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

declare module 'styled-jsx/css' {
  export default function css(strings: TemplateStringsArray, ...expressions: any[]): string;
}
