import Link from "@docusaurus/Link";
import ArrowRight from "@site/static/img/arrow-right.svg";
import transitions from "@site/static/transitions.json";
import clsx from "clsx";
import { motion } from "framer-motion";
import React from "react";
import AnimateSpawn from "../../Common/AnimateSpawn";
import LinkArrowRight from "../Icons/LinkArrowRight";

const OpenChatCard: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <AnimateSpawn
      className={clsx("md:container-12", className)}
      el={motion.section}
      variants={transitions.container}
    >
      <div className="md:rounded-[32px] backdrop-blur-2xl bg-white-60 relative flex flex-col md:flex-row md:gap-10 lg:gap-0 px-6 md:px-0">
        <div className="max-w-sm mx-auto md:max-w-none md:mx-0 flex-1 md:self-center md:order-2 lg:self-start -mt-12 mb-12 lg:-mt-12">
          <motion.img
            src="/img/openchat/oc-img.webp"
            alt=""
            className="w-full relative"
            variants={transitions.item}
          />
        </div>
        <div className="flex-1 md:order-1 pb-20 md:py-30">
          <div className="md:ml-2/12">
            <motion.p className="tw-heading-6 mb-2" variants={transitions.item}>
              Community Story
            </motion.p>
            <motion.h2
              className=" text-transparent bg-clip-text gradient-text tw-heading-3 md:tw-heading-60 mb-6"
              variants={transitions.item}
            >
              OpenChat raised 1M ICP in 6 hours
            </motion.h2>
            <motion.p
              className="tw-lead-sm md:tw-lead mb-8"
              variants={transitions.item}
            >
              It became the world’s first "open internet service". A new "SNS" DAO took over its code and data,
              and swapped $ICP for its governance tokens, placing its community in control, and creating a
              community treasury. Now it will founderize its users too.
            </motion.p>

            <motion.p className="mb-0" variants={transitions.item}>
              <Link className="link-primary link-with-icon" href="/openchat">
                <LinkArrowRight />
                See how OpenChat decentralized, fully on-chain
              </Link>
            </motion.p>
          </div>
        </div>
      </div>
    </AnimateSpawn>
  );
};

export default OpenChatCard;
