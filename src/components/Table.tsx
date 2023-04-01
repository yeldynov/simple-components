import React from 'react';
import { TableColConfig } from '../types';

type Props = {
  data: any[];
  config: TableColConfig[];
  keyFn: (key: any) => any;
};

export default function Table({ data, config, keyFn }: Props) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return (
        <React.Fragment key={column.label}>{column.header()}</React.Fragment>
      );
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td key={column.label} className='p-3'>
        {column.render(rowData)}
      </td>
    ));

    return (
      <tr className='border-b' key={keyFn(rowData)}>
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
