import { FC } from "react";

import ButtonPrimary from "shared/Button/ButtonPrimary";
import Logo from "shared/Logo/Logo";

export interface SectionInvestProps {
  className?: string;
}

const SectionInvest: FC<SectionInvestProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-SectionInvest relative flex flex-col lg:flex-row items-center  ${className}`}
      data-nc-id="SectionInvest"
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-full">
        <Logo className="w-28" />
        <div className="bg-neutral-100/80 dark:bg-black/20  p-5">
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
            Customized Marketplace
          </h2>
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            Invest, Earn, and join special access and licensing programs in
            Hearverse Music NFTs Marketplace (MNM).
          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <ButtonPrimary href="/page-upload-item" className="">
              Learn More
            </ButtonPrimary>
          </div>
        </div>
        <div className="p-5">
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
            Become Music Investor
          </h2>
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            Turn into talents backer by investing in their Music NFTs Offering
          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <ButtonPrimary href="/page-upload-item" className="">
              Fans Seating
            </ButtonPrimary>
          </div>
        </div>
        <div className="bg-neutral-100/80 dark:bg-black/20  p-5">
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
            On-Chain Royalty Bearing NFTs
          </h2>
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            Revenue generation for music rights by next-gen NFT format.
          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <ButtonPrimary href="/page-upload-item" className="">
              Join Whitelist
            </ButtonPrimary>
          </div>
        </div>
        <div className="p-5">
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
            Backed by DAO
          </h2>
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            You can vote for new artists, be involved in projects, gain early
            access to lineups, and get share profits.
          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <ButtonPrimary href="/page-upload-item" className="">
              Join our Discord
            </ButtonPrimary>
          </div>
        </div>
        <div className="bg-neutral-100/80 dark:bg-black/20  p-5">
          <h2 className="font-semibold text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
            Innovative Music Dex
          </h2>
          <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
            To trade NFT rights and other music-native tokens and offer
            liquidity providers with blockchain revenue shares.
          </span>
          <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
            <ButtonPrimary href="/page-upload-item" className="">
              Start Trading
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInvest;
