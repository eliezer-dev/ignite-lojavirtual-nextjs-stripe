import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react";
import {useData} from "@/context/DataContext";
import Head from "next/head";

import ProductSlider, {ProductSliderProps, Product} from "@/app/components/productSlider/productSlider";
import {GET} from "@/app/api/home/route";
import {stripe} from "@/lib/stripe";
import Stripe from "stripe";
import {HomeContainer} from "@/app/styles";

async function getProducts() {
    const response = await stripe.products.list({
        expand: ['data.default_price'],
    });

    return response.data.map((product) => {
        const price = product.default_price as Stripe.Price;
        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }).format(price.unit_amount! / 100),
        };
    });
}

export default async function Home() {

      const products:Product[]= await getProducts()


    return (

        <>
            <Head>
                <title>Home | Ignite Shop</title>
            </Head>
            <HomeContainer>
                <ProductSlider products={products}/>

            </HomeContainer>
        </>
    )
}

