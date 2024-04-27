import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Page from "../../components/layout/Page";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
    useEffect(() => {
        router.push("/home");
    }, []);
    return <Page title="Transfering to home page"></Page>;
}
