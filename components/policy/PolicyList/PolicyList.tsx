import { FC } from 'react';

import PolicyItem from '../PolicyItem/PolicyItem';

import { IPolicyListProps } from './PolicyList.props';

const PolicyList: FC<IPolicyListProps> = ({ sections }) => {
  return (
    <ul className="text-black">
      {sections.map((section, index) => (
        <li key={index} className="mb-10 last:mb-0">
          <h3 className="mb-4 text-lg font-medium md:text-2xl">{section.title}</h3>
          <ul className="pl-3">
            {section.subtitles.map((subtitle, index) => (
              <PolicyItem subtitle={subtitle} key={index} />
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default PolicyList;
