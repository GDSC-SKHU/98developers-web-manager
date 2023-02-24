/** @jsxImportSource @emotion/react */
import theme from "@/styles/Theme/theme";
import { css, Theme } from "@emotion/react";
import Image from "next/image";

const JoinUs = () => {
    return (
        <div css={mainContents}>
            <div css={titleText}>아무튼 함께하자고 아 ㅋㅋ</div>
            <div css={imageBox}>
                <div>
                    <Image
                        src={"/image 2.png"}
                        alt={"topwood"}
                        width={1000}
                        height={100}
                    ></Image>
                </div>
                <div>
                    <Image
                        src={"/image 1.png"}
                        alt={"topwood"}
                        width={800}
                        height={100}
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;

const mainContents = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    margin-top: 50px;
    margin-left: 5%;
    margin-bottom: 150px;

    width: 90vw;
    height: 79vh;
`;

const titleText = css`
    color: ${theme.color.sapphire};
    font-weight: ${theme.fontWeight.bold};
    font-size: 70px;
`;

const imageBox = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 250px;
`;
