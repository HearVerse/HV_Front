import { FC } from "react";

import Logo from "shared/Logo/Logo";

export interface SectionCreatorsProps {
  className?: string;
}

const SectionCreators: FC<SectionCreatorsProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionCreators relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionCreators"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-full">
        <Logo className="w-28" />
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
          For Creators
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● The crowdfunding mechanism for distribution
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● IMO (Initial Music Offering) and Share Rare Produced Catalogs
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Visual Branding like the concept and IP metaverse avatars,Virtual
          assets, metaverse music videos rails, VR concerts, etc.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Bring On-chain royalty values to own music revenues.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Forked a creator DAO to Implement fans for distributing songs on
          Song Fund and minting HV coins for rewards.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            ● Distribution of full copyrights revenue (Off-Chain Royalty) to HV
            Songs Fund
          </span>
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Engage with fans (especially superfans)
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            ● Engage fans in social interactions (i.e. fan communities)
          </span>
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Promote virality and co-creation between fans
        </span>
      </div>
    </div>
  );
};

export default SectionCreators;
