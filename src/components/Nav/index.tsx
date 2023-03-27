/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import Image from "next/image";
import { auth } from "@/api/instance/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Nav() {
    const router = useRouter();
    const [username, setUserName] = useState<string>("");

    useEffect(() => {
        const getusername = localStorage.getItem("userName");
        if (typeof getusername === "string") {
            setUserName(getusername);
        }
    }, [typeof window !== "undefined" && localStorage.getItem("userName")]);

    const logout = () => {
        auth.signOut();
        router.push("/");
    };

    return (
        <nav css={navStyle}>
            <div css={navSubTitle}>
                <div css={navImage}>
                    <Image
                        src={"/ZIKIZA.png"}
                        alt={"미리이미지"}
                        fill
                        sizes="5vw"
                    ></Image>
                </div>
                <div>ZIKIZA MANAGER</div>
            </div>
            <div css={nameNLogout}>
                <div css={user}>{username}</div>
                <div css={buttonStyle} onClick={logout}>
                    Log Out
                </div>
            </div>
        </nav>
    );
}
export default Nav;

const navStyle = (theme: Theme) => css`
    position: fixed;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    gap: 30vw;

    width: 100vw;
    height: 7vh;
    padding-top: 4vh;
    padding-bottom: 4vh;

    background-color: ${theme.color.white};

    z-index: 1;
`;

const navSubTitle = (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 2vw;

    font-weight: ${theme.fontWeight.bold};
    font-size: 2.2vw;
`;

const buttonStyle = (theme: Theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10vw;
    height: 7vh;
    border-radius: 0.3vw;

    background-color: ${theme.color.sapphire};
    color: ${theme.color.white};

    font-size: ${theme.fontWeight.normal};
    font-size: 1.5vw;
`;

const navImage = (theme: Theme) => css`
    position: relative;
    width: 5vw;
    height: 5vw;
`;
const nameNLogout = (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw;

    width: 15vw;
`;
const user = (theme: Theme) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.color.sapphire};
    width: 5vw;
    height: 6.5vh;

    color: ${theme.color.white};

    border-radius: 0.5vw;
`;
