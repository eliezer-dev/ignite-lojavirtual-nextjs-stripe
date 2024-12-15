'use client'

import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react";
import {useData} from "@/context/DataContext";
import Head from "next/head";
import {HomeContainer, Product} from "@/app/styles";
import Link from "next/link";
import Image from "next/image";
import bagImage from "@/assets/bag.svg";
import {useEffect, useState} from "react";



interface HomeProps {
    products: Products[]
}

interface Products {
    id: string
    name: string
    imageUrl: string
    price: string
}


export default function Home() {
    const [productsState, setProductsState] = useState<HomeProps>();
    //const { handleCartDetails } = useData();

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48,
        },
    });


    useEffect(() => {
        getMostSellerProducts().then((products) => {
            setProductsState(products)

        }

        )

    }, []);

    useEffect(() => {
        if (productsState?.products?.length) {
            instanceRef.current?.update();
        }
    }, [productsState]);

    return (

        <>
            <Head>
                <title>Home | Ignite Shop</title>
            </Head>
            <HomeContainer ref={sliderRef} className="keen-slider">

                {
                    productsState?.products &&

                    productsState?.products.map((product) => {

                        return (

                        <Product key={product.id} className="keen-slider__slide">
                            <Link href={`/product/${product.id}`} prefetch={false}>
                                <Image src={product.imageUrl} width={520} height={480} alt=""/>
                            </Link>
                            <footer>
                                <div className='footer_productinfo'>
                                    <strong>{product.name}</strong>
                                    <span>{product.price}</span>
                                </div>
                                <Image
                                    src={bagImage}
                                    alt="icone representando um carrinho vazio"/>
                                {/*<Image onClick={handleCartDetails}*/}
                                {/*       src={bagImage}*/}
                                {/*       alt="icone representando um carrinho vazio"/>*/}


                            </footer>
                        </Product>

                    )
                })}
            </HomeContainer>
        </>
    )
}

export async function getMostSellerProducts() {

    const res = await fetch(`/api/home`, {cache: 'force-cache'});
    const products: HomeProps ={
        products: await res.json()
    }

    return products;
}
