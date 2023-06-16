import { FC } from 'react';

import { IPolicyItemProps } from './PolicyItem.props';

const PolicyItem: FC<IPolicyItemProps> = ({ subtitle }) => {
  const { marker, text, notes } = subtitle;
  return (
    <li>
      <div className="flex gap-1">
        <span className="min-w-[15px]">{marker}</span>
        <p className="">{text}</p>
      </div>
      {notes && (
        <ul className={`pl-5 ${notes ? 'py-4' : 'py-0'}`}>
          {notes.map((note, index) => (
            <li key={index} className="flex  gap-1">
              <span className="min-w-[15px]">{note.marker}</span>
              <p className="">{note.text}</p>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default PolicyItem;
