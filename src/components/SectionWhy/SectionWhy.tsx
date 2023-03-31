import { FC } from "react";

import Logo from "shared/Logo/Logo";

export interface SectionWhyProps {
  className?: string;
}

const SectionWhy: FC<SectionWhyProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionWhy relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionWhy"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-full">
        <Logo className="w-28" />
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
          Why Hearverse MNM?
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Develop the most comprehensive NFT music framework based on on-chain
          and off-chain solutions
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Develop the most comprehensive NFT music framework based on on-chain
          and off-chain solutions
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● The creation of a new world with a music style in the metaverse with
          realistic avatars and environments
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Enhancement of music metadata
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Creating a coherent ecosystem to prevent fan dispersion and
          concentrate them
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            ● Developing strategies for attracting Web 2 music fans to the
            platform
          </span>
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● A platform for creating billions of small and large music
          transactions using a professional music blockchain
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            ● Direct connections between artists and their fans remove
            intermediaries
          </span>
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Using the NFT Protocol, create next-format music assets
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Providing users with special supervised platform services
        </span>
      </div>
    </div>
  );
};

export default SectionWhy;
