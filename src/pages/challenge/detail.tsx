/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { instance } from "@/api/instance/axios";

interface Success {
    image: string;
    success: boolean;
    member: Members;
}

type Members = {
    name: string;
    email: string;
    uid: string;
    avatar: string;
    challenges: Array<object>;
};

const Detail = () => {
    const router = useRouter();
    const { id, topic } = router.query;
    let ready = router.isReady;
    const accessToken = localStorage.getItem("accessToken");

    const [memberObj, setMemberObj] = useState<Success[]>([]);
    const [success, setSuccess] = useState<string>("false");
    const [ckBoxId, setCkBoxId] = useState<string>("");

    // 뒤로가기 버튼 함수
    const backButton = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        // router.back();
        router.push("/memberList");
    };

    // 체크박스 값을 변경하기위한 함수
    const currentonChange = (e: ChangeEvent<HTMLInputElement>) => {
        // 체크박스의 체크 여부 확인
        // console.log(e.currentTarget.checked);
        // 해당 체크박스의 index번호를 찾기위한 id = {index}
        // console.log("인덱스 번호 찾을 거임", e.currentTarget.id);
        // 유저의 id저장해주기
        setCkBoxId(e.currentTarget.id);

        let copyData = memberObj;
        copyData[parseInt(e.currentTarget.id)].success =
            e.currentTarget.checked;

        if (e.currentTarget.id == ckBoxId && e.currentTarget.checked === true) {
            setSuccess(String(e.currentTarget.checked));
            // console.log("선택한 아이디: ", ckBoxId, "성공여부", success);
        }
        if (
            e.currentTarget.id == ckBoxId &&
            e.currentTarget.checked === false
        ) {
            setSuccess(String(e.currentTarget.checked));
            // console.log("선택한 아이디: ", ckBoxId, "성공여부", success);
        }
        // console.log("???", success);
    };

    // 챌린지의 id값 별로 get 요청을 받기위한 useEffect
    useEffect(() => {
        const getChallenge = () => {
            axios
                .get(`/challenges/${id}`, {})
                .then((data) => {
                    // console.log(data);
                    setMemberObj(data.data.members);
                    // console.log(data.data.members);
                })
                .catch((e) => {
                    alert("조회 실패");
                    // console.log(e);
                });
        };
        ready ? getChallenge() : null;
    }, [id, ready]);

    // 확인한 값들을 post보내기
    const onsubmitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(memberObj);
        // instance.interceptor를 사용해 header에 토큰값 넣어주기
        axios
            .post(`/api/challenge/${id}/change`, JSON.stringify(memberObj), {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            })
            .then((res) => {
                // console.log(res);
                alert("확인 완료");
                router.push("/memberList");
            })
            .catch((error) => {
                // console.log(error);
            });
    };

    return (
        <div css={base}>
            <h1 css={topicCss}>{topic}</h1>
            <div css={main}>
                {memberObj !== undefined ? (
                    <form css={contentList} onSubmit={onsubmitHandler}>
                        {memberObj.map((eachMemberObj, index) => (
                            <div css={contents} key={index}>
                                <div css={imageDiv}>
                                    <Image
                                        src={
                                            "https://storage.googleapis.com/zikiza/user/ab9a75c1-a299-418a-b99d-cdd9b4cda624.jpg"
                                        }
                                        alt={"mokImg"}
                                        fill
                                        sizes="7vw"
                                    ></Image>
                                </div>
                                <div css={memberNcheck}>
                                    <div css={memberInfo}>
                                        <div>{eachMemberObj.member?.email}</div>
                                        <div>{eachMemberObj.member?.name}</div>
                                    </div>
                                    <input
                                        type="checkbox"
                                        id={String(index)}
                                        checked={eachMemberObj.success}
                                        onChange={currentonChange}
                                    />
                                </div>
                            </div>
                        ))}
                        <button type="submit" css={submitBtn}>
                            submit
                        </button>
                    </form>
                ) : (
                    <p>Loading...</p>
                )}
                <button onClick={backButton} css={backBtn}>
                    back
                </button>
            </div>
        </div>
    );
};

export default Detail;

const base = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100vw;
    height: 100vh;
`;

const topicCss = (theme: Theme) => css`
    display: flex;
    margin-top: 5vh;
    margin-right: 15vw;
    width: 65vw;

    font-weight: ${theme.fontWeight.bold};
    font-size: 2.2vw;
    color: ${theme.color.jetblack};
`;

const main = (theme: Theme) => css`
    display: grid;

    margin-top: 5vh;
    margin-bottom: 5vh;
    width: 80vw;
    height: 100vh;

    border-radius: 0.4vw;

    font-size: 5vw;
`;

const contentList = (theme: Theme) => css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;

    gap: 2vw;
`;

const contents = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 14vw;
    height: 36vh;

    border-radius: 0vw 0vw 0.5vw 0.5vw;
    box-shadow: 0vw 0.4vw 0.7vw 0.2vw rgba(101, 101, 101, 0.42);
    -webkit-box-shadow: 0vw 0.4vw 0.7vw 0.2vw rgba(101, 101, 101, 0.42);
    -moz-box-shadow: 0vw 0.4vw 0.7vw 0.2vw rgba(101, 101, 101, 0.42);
`;
const imageDiv = () => css`
    position: relative;
    width: 100%;
    height: 75%;

    :hover {
        cursor: default;
    }
`;

const memberNcheck = (theme: Theme) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 25%;

    font-size: 0.2vw;
    font-weight: ${theme.fontWeight.normal};
    background-color: ${theme.color.sapphire};
    border-radius: 0vw 0vw 0.5vw 0.5vw;
`;

const memberInfo = (theme: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    font-size: 0.7vw;
    color: ${theme.color.white};
`;

const submitBtn = (theme: Theme) => css`
    position: fixed;
    right: 5vw;
    bottom: 1.2vw;

    width: 5vw;
    height: 4vh;

    border: 0.2vw solid ${theme.color.sapphire};
    border-radius: 0.5vw;

    text-align: center;
    font-size: 1vw;
    color: ${theme.color.sapphire};
    background-color: ${theme.color.white};
`;

const backBtn = (theme: Theme) => css`
    position: fixed;
    left: 1vw;
    bottom: 1.2vw;

    margin-left: 5vw;
    margin-top: 5vh;

    width: 5vw;
    height: 4vh;

    border: 0.2vw solid ${theme.color.sapphire};
    border-radius: 0.5vw;

    text-align: center;
    font-size: 1vw;
    color: ${theme.color.sapphire};
    background-color: ${theme.color.white};
`;
