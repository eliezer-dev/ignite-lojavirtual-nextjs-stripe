import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next"
import Image from 'next/image'
import Head from "next/head";
import { useState } from "react";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import {useData} from "@/context/DataContext";
import {formatToBRL} from "@/utils/geral";
import Carrinho from "@/components/carrinho";

export interface ProductProps {

    id: string
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string

}

export default function Product(product: ProductProps) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
    const { data, addProductToCart, handleCartDetails } = useData();


    async function handleBuyButton() {
        addProductToCart(product)
        handleCartDetails(true)

    }

    return (
        <>
            <Head>
                <title>{product.name}</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                   <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>{formatToBRL(product.price)}</span>

                    <p>{product.description}</p>

                    <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>
                        Comprar agora
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_MLH5Wy0Y97hDAC' } },
        ],
        fallback: 'blocking',
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params!.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    });

    const price = product.default_price as Stripe.Price;

    return {
        props: {
           id: product.id,
           name: product.name,
           imageUrl: product.images[0],
           price: price.unit_amount!/100,
           description: product.description,
           defaultPriceId: price.id

        },
        revalidate: 60 * 60 * 1 // 1 hours
    }
}