/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";

const SignInModal = (props: { modalClick: any }) => {
    const { modalClick } = props;
    return (
        // 뒷배경을 클릭하면 모달을 나갈 수 있게 해야하므로 뒷 배경 onClick에 state함수를 넣는다.
        <div css={ModalBack} onClick={modalClick}>
            {/*  모달을 닫는 state함수가 아래로 전파되는 것을 막아줌 */}
            <div css={ModalContent} onClick={(e) => e.stopPropagation()}>
                <span css={titleText}>Sign In</span>
                <span css={subtitleText}>Join us for the Earth</span>
                <div css={LoginFunction}>
                    <button css={Google}>Continue with Google</button>
                    <button css={Local} onClick={modalClick}>
                        뒤로가기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignInModal;

const ModalBack = (theme: Theme) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 여기에 만들고 싶은 모달 스타일 구현
export const ModalContent = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 40vw;
    height: 60vh;

    background-color: ${theme.color.white};

    border-radius: 4px;
`;

const titleText = (theme: Theme) => css`
    color: ${theme.color.sapphire};
    font-weight: ${theme.fontWeight.bold};
    font-size: 3vw;
`;
const subtitleText = (theme: Theme) => css`
    color: ${theme.color.jetblack};
    font-size: 2vw;
`;

const LoginFunction = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 10vh;

    gap: 5vh;
`;

const Google = (theme: Theme) => css`
    border: 2px solid ${theme.color.sapphire};
    border-radius: 3px;
    width: 18vw;
    height: 5vh;
    text-align: center;
    font-size: 1vw;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.color.sapphire};
`;

const Local = (theme: Theme) => css`
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
