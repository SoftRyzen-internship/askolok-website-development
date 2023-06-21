import { FC } from 'react';

import { IPublicContractProps } from './PublicContractList.props';

const PublicContractList: FC<IPublicContractProps> = ({ sections }) => {
  return (
    <ul className="flex flex-col gap-10">
      {sections.map((section, index) => (
        <li key={index}>
          <h3 className="mb-4 text-center">{section.title}</h3>
          <ul>
            {section.subtitle.map((item, index) => (
              <li key={index}>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default PublicContractList;
