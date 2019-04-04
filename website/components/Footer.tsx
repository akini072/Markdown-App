import React from 'react';
import style from './Footer.less';

export interface IFooterProps {
  name?: string;
  href?: string;
  year?: number;
}

export default function Footer({ name, href, year }: IFooterProps) {
  return (
    <div className={style.footer}>
      <div>Licensed under MIT. (Yes it&acute;s free and <a href="https://github.com/jaywcjlove/hotkeys">open-sourced</a>)</div>
      <div>
        © <a target="_blank" rel="noopener noreferrer" href={href}>{name}</a> {year}
      </div>
    </div>
  );
}
