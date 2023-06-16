import { FC } from 'react';

import PolicyList from '@/components/policy/PolicyList/PolicyList';

import { policyText } from '@/public/materials/policy';

const Policy: FC = () => {
  const { sections, text1, text2, text3, title, subtitle } = policyText;
  return (
    <div className="container">
      <h2 className=" mb-[60px] text-center text-[48px] font-medium leading-[0.63]">{title}</h2>
      <h3 className="mb-[60px] text-center text-[32px] leading-[0.93]">{subtitle}</h3>
      <p className="mb-10 text-xl text-black">{text1}</p>
      <p className="mb-10 text-xl text-black">{text2}</p>
      <p className="mb-10 text-xl text-black">{text3}</p>
      <PolicyList sections={sections} />
    </div>
  );
};

export default Policy;
