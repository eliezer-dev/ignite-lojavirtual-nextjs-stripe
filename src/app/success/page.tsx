import {ImageContainer, SuccessContainer} from "@/app/success/styles";
import Link from "next/link";
import {stripe} from "@/lib/stripe";
import Stripe from "stripe";
import React from "react";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
    costumerName: string;
    product: {
        name: string;
        imageUrl: string;
    }
}

export  default async function Page ({searchParams,}: {
                    searchParams: Promise<{ [session_id: string]: string | string[] | undefined }>
                    }) {

    const query = (await searchParams).session_id

    if (!query) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const {costumerName, product} = (await fetchCheckoutSucessData(String(query))).props

    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>
                <meta name="robots" content="noindex"/>
            </Head>
            <SuccessContainer>
            <h1>Compra efetuada</h1>

                <ImageContainer>

                    <Image src={product.imageUrl} width={120} height={110} alt="" />
                </ImageContainer>

                <p>
                    Uhuul <strong>{costumerName}</strong>, sua <strong>{product.name}</strong> já está a
                    caminho da sua casa.
                </p>

                <Link href="/">
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>

    )
}

async function fetchCheckoutSucessData (querySessionId : string) {



    const session = await stripe.checkout.sessions.retrieve(querySessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    });

    const costumerName = session.customer_details!.name;
    const product = session.line_items!.data[0].price!.product as Stripe.Product;

    return {
        props: {
            costumerName,
            product: {
                name: product.name,
                imageUrl: product.images[0]
            }
        }
    }
}
