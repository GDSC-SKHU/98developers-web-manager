import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, useId, useState } from "react";
import styled from "styled-components";

const SignUp = () => {
    const [userId, setUserId] = useState<string>("");
    const [userNickname, setUserNickname] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");

    const onChangeId = (e: ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
        // console.log(userId);
    };
    const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
        setUserNickname(e.target.value);
        // console.log(userNickname);
    };
    const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
        setUserPw(e.target.value);
        // console.log(userPw);
    };

    const onsubmit = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert("제출 완");
    };

    return (
        <div>
            <div>
                <Image
                    src={"/woodtexture.jpg"}
                    alt={"topwood"}
                    width={800}
                    height={100}
                ></Image>
            </div>
            <div>회원가입 페이지임</div>
            <InputPage>
                <form onSubmit={onsubmit}>
                    <div>
                        <input
                            type="text"
                            placeholder="id"
                            onChange={onChangeId}
                            value={userId}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="nickname"
                            onChange={onChangeNickname}
                            value={userNickname}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="pw"
                            onChange={onChangePw}
                            value={userPw}
                        />
                    </div>
                    <button type="submit">제출 버튼</button>
                </form>
            </InputPage>
        </div>
    );
};

export default SignUp;

const Main = styled.div``;

const InputPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url("woodtexture.jpg");

    input {
        all: unset;
        width: 500px;
        height: 50px;
        margin: 20px;
        padding: 10px;
        background-color: beige;
        border-bottom: 1px solid gray;
    }
`;
