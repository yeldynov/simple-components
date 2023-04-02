import { useState } from 'react';
import { TableColConfig } from '../types';

export default function useSort(data: any[], config: TableColConfig[]) {
  const [sortOrder, setSortOrder] = useState<null | 'asc' | 'desc'>(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label: any) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue func and use it to sort
  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find(
      (column) => column.label === sortBy
    ) as TableColConfig;

    if (typeof sortValue === 'function') {
      sortedData = [...data].sort((a, b) => {
        const valueA = sortValue(a);
        const valueB = sortValue(b);

        const reverseOrder = sortOrder === 'asc' ? 1 : -1;

        if (typeof valueA === 'string') {
          return valueA.localeCompare(valueB) * reverseOrder;
        } else {
          return (valueA - valueB) * reverseOrder;
        }
      });
    } else {
      sortedData = data;
    }
  }

  return { sortOrder, sortBy, sortedData, setSortColumn };
}
