/** @jsxImportSource @emotion/react */
import theme from "@/styles/Theme/theme";
import { css, Theme } from "@emotion/react";
import Contents from "./contents";

interface Props {
    mainTitle: string;
    title: string;
    context: string;
}

const MainTitle = ({ mainTitle, title, context }: Props) => {
    return (
        <div css={mainContents}>
            <div css={titleText}>{mainTitle}</div>
            <Contents title={title} context={context} />
        </div>
    );
};

export default MainTitle;

const mainContents = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;

    margin-top: 50px;
    margin-left: 5%;
    margin-bottom: 155px;

    width: 90vw;
    height: 79vh;
`;

const titleText = css`
    color: ${theme.color.sapphire};
    font-weight: ${theme.fontWeight.bold};
    font-size: 70px;
`;
