import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            theme={createTheme({
                palette: {
                    primary: { main: "#a61e17" },
                    secondary: { main: "#eaeaea" },
                },
                components:{
                    MuiTextField:{
                        defaultProps:{
                            sx:{
                                background:'red'
                            }
                        }
                    }
                }
            })}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
