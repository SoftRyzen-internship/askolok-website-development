import { FC } from 'react';

import { policyText } from '@/public/materials/policy';

import PolicyList from '@/components/policy/PolicyList/PolicyList';

const Policy: FC = () => {
  const { sections, text1, text2, text3, title, subtitle } = policyText;
  return (
    <div className="smOnly:pt-5">
      <h2 className=" mb-[60px] text-center text-xl font-medium leading-[0.63] md:text-[32px] xl:text-[48px]">
        {title}
      </h2>
      <h3 className="mb-[60px] text-center  text-xl leading-[0.93] md:text-[32px]">{subtitle}</h3>
      <p className="mb-10 text-sm text-black md:text-base xl:text-xl">{text1}</p>
      <p className="mb-10 text-sm text-black md:text-base xl:text-xl">{text2}</p>
      <p className="mb-10 text-sm text-black md:text-base xl:text-xl">{text3}</p>
      <PolicyList sections={sections} />
    </div>
  );
};

export default Policy;
