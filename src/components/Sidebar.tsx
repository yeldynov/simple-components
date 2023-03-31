import React from 'react';
import Link from './Link';
import { MenuItem } from '../types';

type Props = {};

export default function Sidebar({}: Props) {
  const links: MenuItem[] = [
    { label: 'Dropdown', path: '/' },
    { label: 'Accordion', path: '/accordion' },
    { label: 'Buttons', path: '/buttons' },
    { label: 'Modal', path: '/modal' },
  ];

  const renderedLinks = links.map((link) => (
    <Link
      className='mb-3'
      activeClassName='font-bold border-l-4 border-blue-500 pl-2'
      key={link.label}
      to={link.path}
    >
      {link.label}
    </Link>
  ));

  return (
    <div className='sticky top-0 flex flex-col items-start'>
      {renderedLinks}
    </div>
  );
}
