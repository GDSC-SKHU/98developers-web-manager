/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Main from "@/components/Main";
import JoinUs from "@/components/Main/joinUs";
import { defaultScoll } from "@/motion";

export default function Home() {
    return (
        <div>
            <Nav />
            <div css={mainContents}>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={defaultScoll}
                    viewport={{ once: false }}
                    exit="exit"
                >
                    <Main
                        mainTitle={"Find reusable items and make them."}
                        title={"Title"}
                        context={
                            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        }
                    />
                </motion.div>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={defaultScoll}
                    viewport={{ once: false }}
                    exit="exit"
                >
                    <Main
                        mainTitle={"Find and use the climate community."}
                        title={"Title"}
                        context={
                            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        }
                    />
                </motion.div>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={defaultScoll}
                    viewport={{ once: false }}
                    exit="exit"
                >
                    <Main
                        mainTitle={"Search and learn how to recycle."}
                        title={"Title"}
                        context={
                            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
                        }
                    />
                </motion.div>
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    variants={defaultScoll}
                    viewport={{ once: false }}
                    exit="exit"
                >
                    <JoinUs />
                </motion.div>
            </div>
        </div>
    );
}

const mainContents = css`
    padding-top: 100px;
`;
