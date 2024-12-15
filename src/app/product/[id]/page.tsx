'use client'


import Image from 'next/image';
import Head from 'next/head';
import React, {useEffect, useState} from 'react';
import { useData } from '@/context/DataContext';
import { formatToBRL } from '@/utils/geral';
import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product';
import {useParams} from "next/navigation";

interface ProductProps {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
}

type Props = {
    params: {
        id: string
    }
}

export default function ProductPage( ) {
    const [productDetailsState, setProductDetailsState] = useState<ProductProps>();
    const params = useParams();
    //const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
    //const { addProductToCart, handleCartDetails } = useData();

    // Busca os dados do produto no servidor (route.ts)

                                                            
    useEffect(() => {


        console.log("chegou aqui" + params?.id)
        if (params?.id) {
            console.log("chegou aqui2" + params?.id)
            getProductDetails(params?.id as string).then((productDetails) => {
                console.log(productDetails)
                setProductDetailsState(productDetails);
            });

        }


    }, [params]);



    // function handleBuyButton() {
    //     addProductToCart(product);
    //     handleCartDetails(true);
    // }

    return (
        <>
            <Head>
                <title>{productDetailsState?.name}</title>
            </Head>
            <ProductContainer>
                {
                    productDetailsState &&

                    <>
                        <ImageContainer>
                        <Image src={productDetailsState.imageUrl} width={520} height={480} alt="" />
                        </ImageContainer>

                        <ProductDetails>
                            <h1>{productDetailsState.name}</h1>
                            <span>{formatToBRL(productDetailsState.price)}</span>

                            <p>{productDetailsState.description}</p>

                            {/*<button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>*/}
                            {/*    Comprar agora*/}
                            {/*</button>*/}

                            <button >
                                Comprar agora
                            </button>
                        </ProductDetails>
                    </>
                }

            </ProductContainer>
        </>
    );
}

export async function getProductDetails(productId: string) {
    const res = await fetch(`/api/product/${productId}`);
    const product: ProductProps = await res.json();

    return product;
}
