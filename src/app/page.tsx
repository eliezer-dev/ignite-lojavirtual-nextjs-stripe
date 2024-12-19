import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react";
import {useData} from "@/context/DataContext";
import Head from "next/head";
import {HomeContainer} from "@/app/styles";

import ProductSlider, {ProductSliderProps, Product} from "@/app/components/productSlider/productSlider";
import {GET} from "@/app/api/home/route";


export default async function Home() {
    const res = await fetch(`${process.env.NEXT_URL}/api/home`, { cache: 'force-cache' });
    const products:Product[]= await res.json()


    return (

        <>
            <Head>
                <title>Home | Ignite Shop</title>
            </Head>
            <HomeContainer >
                <ProductSlider products={products}/>

            </HomeContainer>
        </>
    )
}

