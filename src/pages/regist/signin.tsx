/** @jsxImportSource @emotion/react */
import theme from "@/styles/Theme/theme";
import { css, Theme } from "@emotion/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");

    return (
        <div css={LogInMain}>
            <div css={title}>
                <div>
                    <Image
                        src={"/ZIKIZA.png"}
                        alt={"미리이미지"}
                        width={150}
                        height={85}
                    ></Image>
                </div>
                <div css={titleText}>Join us for the Earth.</div>
            </div>
            <div css={LoginFunction}>
                <button css={Google}>Continue with Google</button>
                <button css={Local}>Sign up</button>
                <div css={already}>
                    <p css={alreadyText}>Already have an account?</p>
                    <Link href="/regist/signup" css={SignInTxt}>
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;

const LogInMain = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.color.white};
`;

const title = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 10vh;
`;

const titleText = css`
    color: ${theme.color.darkgray};
    font-size: 3vw;
`;

const LoginFunction = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 20vh;

    gap: 5vh;
`;

const Google = css`
    border: 2px solid ${theme.color.sapphire};
    border-radius: 3px;
    width: 18vw;
    height: 5vh;
    text-align: center;
    font-size: 1vw;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.color.sapphire};
`;

const Local = css`
    border: 2px solid ${theme.color.sapphire};
    border-radius: 3px;
    width: 18vw;
    height: 5vh;
    text-align: center;
    font-size: 1vw;
    color: ${theme.color.white};
    font-weight: ${theme.fontWeight.normal};
    background-color: ${theme.color.sapphire};
`;

const already = css`
    display: flex;
    flex-direction: row;
    gap: 3vw;
`;

const alreadyText = css`
    font-size: 1vw;
    color: ${theme.color.darkgray};
`;

const SignInTxt = css`
    font-size: 1vw;
    color: ${theme.color.sapphire};
    text-decoration: underline;
`;
