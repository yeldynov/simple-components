import SortableTable from '../components/SortableTable';
import { TableColConfig, FruitTableDataRow } from '../types';

export default function TablePage() {
  const data: FruitTableDataRow[] = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-300', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
    { name: 'Cherry', color: 'bg-red-700', score: 2.5 },
  ];

  const config: TableColConfig[] = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`${fruit.color} m-2 p-3`} />,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,
    },
    {
      label: 'Score Squared',
      render: (fruit) => fruit.score ** 2,
      sortValue: (fruit) => fruit.score ** 2,
    },
  ];

  const keyFn = (fruit: FruitTableDataRow) => {
    return fruit.name;
  };

  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
}
