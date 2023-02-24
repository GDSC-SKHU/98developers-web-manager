/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import theme from "@/styles/Theme/theme";

function Nav() {
    return (
        <nav css={navStyle}>
            <div>
                <Image
                    src={"/Miri.png"}
                    alt={"미리이미지"}
                    width={150}
                    height={85}
                ></Image>
            </div>
            <Link href="/regist/signin">
                <button css={buttonStyle}>Sign in</button>
            </Link>
        </nav>
    );
}
export default Nav;

const navStyle = css`
    position: fixed;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 70%;

    width: 100%;
    margin-bottom: 24px;
    padding-top: 20px;
    padding-bottom: 20px;

    background-color: ${theme.color.white};

    z-index: 2;
`;

const buttonStyle = (theme: Theme) => css`
    width: 160px;
    height: 55px;
    border-radius: 5px;

    background-color: ${theme.color.sapphire};
    color: ${theme.color.white};

    text-align: center;
    font-size: ${theme.fontWeight.normal};
    font-size: 25px;

    margin-right: 10px;
`;
