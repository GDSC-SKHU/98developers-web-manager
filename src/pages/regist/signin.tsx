/** @jsxImportSource @emotion/react */
import { css, Theme } from "@emotion/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

const SignIn = () => {
    const [userId, setUserId] = useState<string>("");
    const [userPw, setUserPw] = useState<string>("");

    return (
        <div>
            <div>로그인 페이지임</div>
        </div>
    );
};

export default SignIn;
