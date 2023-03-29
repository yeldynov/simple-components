import Accordion from '../components/Accordion';
import { AccordionItem } from '../types';

function AccordionPage() {
  const items: AccordionItem[] = [
    {
      id: 'l23lsc',
      label: 'Can I use React on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'c2wsc',
      label: 'Can I use Javascript on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
    {
      id: 'jasd33',
      label: 'Can I use CSS on a project?',
      content:
        'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.',
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
