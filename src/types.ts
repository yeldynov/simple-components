import React from 'react';

export interface AccordionItem {
  id: string;
  label: string;
  content: string;
}

export interface DropdownOption {
  label: string;
  value: string;
}

export interface MenuItem {
  label: string;
  path: string;
}

export interface FruitTableDataRow {
  name: string;
  color: string;
  score: number;
}

export interface TableColConfig {
  label: string;
  header?: () => any;
  render: (row: any) => React.ReactElement | React.ReactNode;
  sortValue?: (col: any) => any;
}
