import React from "react";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <div className="wrapper section-padding">
        <div className="grid grid-cols-1 gap-10 md:gap-20 md:text-xl">
          {/* PART 1 */}
          <div className="grid xl:grid-cols-5 gap-10 md:gap-20">
            <div className="space-y-5 xl:col-span-3">
              {/* number part  */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75 }}
                  className="text-5xl md:text-5xl font-bold opacity-30"
                >
                  1
                </motion.p>
              </div>
              {/* title part  */}
              <div className="overflow-hidden">
                <motion.h3
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75, delay: 0.2 }}
                  className="text-2xl text-balance md:text-3xl font-semibold uppercase opacity-70 break-words"
                >
                  <Fade delay={1e3} cascade damping={1e-1}>
                    Data Analytics for Patient Care
                  </Fade>
                </motion.h3>
              </div>
              {/* paragraph part 1 */}
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  transition={{ ease: "easeInOut", duration: 0.75, delay: 0.4 }}
                >
                  Enhance patient outcomes with our advanced data analytics
                  tools. We provide in-depth analysis and insights to help
                  healthcare providers understand patient data, predict health
                  trends, and tailor treatments to individual needs
                </motion.p>
              </div>
            </div>
            {/* Image part 1  */}
            <div className="xl:col-span-2 w-full h-full overflow-hidden">
              <motion.div
                initial={{ y: "-100%" }}
                whileInView={{ y: 0 }}
                transition={{ ease: "easeInOut", duration: 1 }}
                className="w-full h-full"
              >
                <div className="w-full h-full object-cover">
                  <Image
                    src="https://i.ibb.co/DLdysvz/image.png"
                    alt="Black and White Bicolor Cat"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
