import {AppProps} from "next/app";
import {globalStyles} from "@/styles/global";

import {Container} from "@/styles/pages/app";
import Header from "@/components/header";
import {DataProvider, useData} from "@/context/DataContext";
import CartDetails from "@/components/cartDetails";

globalStyles();
export default function MyApp({Component, pageProps}: AppProps) {


    return(
        <DataProvider>
            <Container>
                <Header/>
                <CartDetails/>
                <Component {...pageProps}/>
            </Container>
        </DataProvider>


    )
}
