import {styled} from "@/styles";
import {HomeContainer, Product} from "@/styles/pages/home";
import Image from "next/image";

import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react";
import Stripe from 'stripe'
import {GetServerSideProps} from "next";
import { GetStaticProps } from "next"
import {stripe} from "@/lib/stripe";
import Link from "next/link"
import Head from 'next/head'
import {useData} from "@/context/DataContext";
import bagImage from "@/assets/bag.svg";

interface HomeProps {
    products: {
        id: string
        name: string
        imageUrl: string
        price: string
    }[]
}

export default function Home({ products }: HomeProps) {
    const { handleCartDetails } = useData();
    const [sliderRef] = useKeenSlider({
            slides: {
                perView: 3,
                spacing: 48,
            }
    }

    )

    return (

        <>
            <Head>
                <title>Home | Ignite Shop</title>
            </Head>

            <HomeContainer ref={sliderRef} className="keen-slider">
                {products.map(product => {
                    return (

                            <Product className="keen-slider__slide">
                                <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
                                    <Image src={product.imageUrl} width={520} height={480} alt=""/>
                                </Link>
                                <footer>
                                    <div className='footer_productinfo'>
                                        <strong>{product.name}</strong>
                                        <span>{product.price}</span>
                                    </div>
                                    <Image onClick={handleCartDetails}
                                        src={bagImage}
                                        alt="icone representando um carrinho vazio"/>


                                </footer>
                            </Product>

                    )
                })}
            </HomeContainer>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    });


    const products = response.data.map(product => {
        const price = product.default_price as Stripe.Price;

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(price.unit_amount! / 100),
        }
    })

    return {
        props: {
            products
        },
        revalidate: 60 * 60 * 2
    }
}