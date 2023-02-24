/** @jsxImportSource @emotion/react */
import theme from "@/styles/Theme/theme";
import { css, Theme } from "@emotion/react";

interface Props {
    title: string;
    context: string;
}

const Contents = ({ title, context }: Props) => {
    return (
        <div css={contentBox}>
            <div css={columBox}>
                <div css={titleBox}>{title}</div>
                <div css={contextBox}>{context}</div>
            </div>
            <div css={imageBox}>IMAGE</div>
        </div>
    );
};

export default Contents;

const contentBox = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    margin-top: 100px;
    gap: 500px;

    width: 90vw;
    height: 100vh;
`;

const columBox = css`
    display: flex;
    flex-direction: column;
    align-items: left;

    gap: 30px;
`;

const titleBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100px;

    background-color: ${theme.color.babyblue};
    color: ${theme.color.white};
    font-size: 60px;
    font-weight: ${theme.fontWeight.bold};
`;

const contextBox = css`
    width: 650px;
    height: 200px;
    font-size: 30px;
`;

const imageBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 350px;
    height: 350px;

    font-size: 60px;
    color: ${theme.color.darkgray};
    background-color: ${theme.color.sliver};
`;
