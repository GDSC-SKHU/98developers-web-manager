import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/globalStyle";
import theme from "@/styles/Theme/theme";
import { ThemeProvider } from "@emotion/react";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}
