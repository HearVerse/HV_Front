import { FC } from "react";

import Logo from "shared/Logo/Logo";

export interface SectionFansProps {
  className?: string;
}

const SectionFans: FC<SectionFansProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionFans relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionFans"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-full">
        <Logo className="w-28" />
        <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
          For Fans
        </h2>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Create songs and distribute them on the stream platforms.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Creating fan tokens on the HV blockchain.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Earning rewards for cooperation with DAOs.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Donate to the crowdfunding mechanism and mint HV coins.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Stake HV coins to earn Music NFTs.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Turn into from a fan to a music businessman!
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Quick and timely receipt of copyright revenues by decentralized
          mechanism.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Super-fans of popular artists are onboarded as consumers.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Receive NFT airdrops, bonuses, ownership, and participation rewards.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Collective participation and voting to collaborate with new artists.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Become a part of the community-oriented music Metaverse, and obtain
          ownership of pieces from the artist's territory.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Access to pre-sales of exclusive and unreleased tracks from artists.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Direct communication and meetings with artists and participation in
          events and concerts.
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Q&As with artists and meet-and-greets with fans
        </span>
        <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
          ● Joining online communities with a long-term focus
        </span>
      </div>
    </div>
  );
};

export default SectionFans;
