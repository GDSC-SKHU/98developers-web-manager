/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import { auth } from "@/api/instance/firebase";
import Nav from "@/components/Nav";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { instance } from "@/api/instance/axios";

interface Challenge {
    id: number;
    topic: string;
    pleaseNote: string;
    headCount: number;
}

const MemberList = () => {
    const router = useRouter();
    let ready = router.isReady;
    // console.log(ready);

    const [challenges, setChallenges] = useState<Challenge[]>([]);

    useEffect(() => {
        if (ready) {
            const getChallengeList = async () => {
                const Token = await auth.currentUser
                    ?.getIdToken()
                    .then((token) => {});
                // console.log(Token);

                instance.get("/challenges", {}).then((data) => {
                    console.log(data.data);

                    setChallenges(data.data);
                });
            };
            getChallengeList();
        }
    }, [ready]);

    return (
        <div css={base}>
            <Nav />
            <div css={MainContents}>
                {challenges !== undefined ? (
                    <div css={challengeCard}>
                        {challenges.map((eachChallenge) => (
                            <div
                                css={cardContents}
                                onClick={() =>
                                    router.push({
                                        pathname: "/challenge/detail",
                                        query: {
                                            id: eachChallenge.id,
                                            topic: eachChallenge.topic,
                                        },
                                    })
                                }
                                key={eachChallenge.id}
                            >
                                <div css={challengeTitle}>
                                    {eachChallenge.topic}
                                </div>
                                <div css={challenger}>
                                    👥 {eachChallenge.headCount}명
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Loading..</p>
                )}
            </div>
        </div>
    );
};

export default MemberList;

const base = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

const MainContents = (theme: Theme) => css`
    display: grid;

    margin-top: 17vh;
    margin-bottom: 5vh;
    width: 80vw;
    height: 100vh;

    border-radius: 0.4vw;

    font-size: 5vw;
`;
const challengeCard = (theme: Theme) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    gap: 2vw;
`;
const cardContents = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 1vw;

    width: 22vw;
    height: 25vh;
    border-radius: 0.5vw;

    font-size: 1vw;
    background-color: ${theme.color.white};

    box-shadow: 0vw 0.4vw 0.7vw 0.2vw rgba(101, 101, 101, 0.42);
    -webkit-box-shadow: 0vw 0.4vw 0.7vw 0.2vw rgba(101, 101, 101, 0.42);
    -moz-box-shadow: 0vw 0.4vw 0.7vw 0.2vw rgba(101, 101, 101, 0.42);

    :hover {
        cursor: pointer;
    }

    :active {
        box-shadow: 0vw 0.4vw 0.7vw 0.2vw rgba(101, 101, 101, 0.42) inset;
        -webkit-box-shadow: 0vw 0.4vw 0.7vw 0.2vw rgba(101, 101, 101, 0.42)
            inset;
        -moz-box-shadow: 0vw 0.4vw 0.7vw 0.2vw rgba(101, 101, 101, 0.42) inset;
    }
`;

const challengeTitle = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 2vw;
    font-weight: ${theme.fontWeight.bold};

    width: 20vw;
    height: 20vh;
`;

const challenger = () => css`
    margin-top: 2vh;
`;
