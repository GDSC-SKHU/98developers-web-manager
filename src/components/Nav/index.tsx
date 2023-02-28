/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import theme from "@/styles/Theme/theme";
import SignInModal from "../Modal/signInModal";
import { useState } from "react";

function Nav() {
    // 모달의 상태를 저장하는 state
    const [signClick, setSignClick] = useState<boolean>(false);

    // 모달의 클릭 여부를 설정할 state함수
    const modalClick = () => {
        setSignClick(!signClick);
    };

    return (
        <nav css={navStyle}>
            <div>
                <Image
                    src={"/ZIKIZA.png"}
                    alt={"미리이미지"}
                    width={150}
                    height={85}
                ></Image>
            </div>
            <div>
                <div css={buttonStyle} onClick={modalClick}>
                    Sign in
                </div>
                {signClick && <SignInModal modalClick={modalClick} />}
            </div>
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

const modal = css`
    :modal {
        border: 5px solid red;
        background-color: yellow;
        box-shadow: 3px 3px 10px rgba(0 0 0 / 0.5);
    }
`;
