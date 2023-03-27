/** @jsxImportSource @emotion/react */
import theme from "@/styles/Theme/theme";
import { css, Theme } from "@emotion/react";
import { useState } from "react";
import Image from "next/image";
import SignInModal from "@/components/Modal/signInModal";

const SignIn = () => {
    // 모달의 상태를 저장하는 state
    const [signClick, setSignClick] = useState<boolean>(false);

    // 모달의 클릭 여부를 설정할 state함수
    const modalClick = () => {
        setSignClick(!signClick);
    };

    return (
        <div css={LogInMain}>
            <div css={title}>
                <div css={titleImg}>
                    <Image
                        src={"/ZIKIZA.png"}
                        alt={"미리이미지"}
                        fill
                        sizes="10vw"
                    ></Image>
                </div>
                <div css={titleText}>Join us for the Earth.</div>
            </div>
            <div css={LoginFunction}>
                <button css={Google} onClick={modalClick}>
                    Login
                    {signClick && <SignInModal modalClick={modalClick} />}
                </button>
                <button css={Local}>Sign up</button>
                <div css={already}>
                    <p css={alreadyText}>Already have an account?</p>
                    <div css={SignInTxt}>Sign in</div>
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

const titleImg = css`
    position: relative;
    width: 10vw;
    height: 10vw;
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
function useAuth(): { currentUser: any } {
    throw new Error("Function not implemented.");
}
