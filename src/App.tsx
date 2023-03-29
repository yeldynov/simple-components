import { useState } from 'react';
import Dropdown from './components/Dropdown';
import { DropdownOption } from './types';

function App() {
  const [selected, setSelected] = useState<DropdownOption | null>(null);

  const handleSelect = (option: DropdownOption) => {
    setSelected(option);
  };

  const options: DropdownOption[] = [
    {
      label: 'Red',
      value: 'red',
    },
    {
      label: 'Green',
      value: 'green',
    },
    {
      label: 'Blue',
      value: 'blue',
    },
  ];

  return (
    <div className='flex'>
      <Dropdown onChange={handleSelect} value={selected} options={options} />
    </div>
  );
}

export default App;
