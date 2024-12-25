'use client'

import Image from "next/image";
import {formatToBRL} from "@/utils/geral";
import * as React from "react";
import {useEffect, useState} from "react";
import {ProductProps} from "@/app/product/[id]/page";
import {ImageContainer, ProductDetailsContainer, ProductInfoContainer} from "@/app/components/productDetails/styles";
import {useData} from "@/context/DataContext";
import Button from "@/app/ui/button/button";

export default function ProductDetails({product}:{product:ProductProps}) {

    const [productDetailsState, setProductDetailsState] = useState<ProductProps>();

    const { addProductToCart, handleCartDetails } = useData();

    function handleBuyButton() {
        if (productDetailsState) {
            addProductToCart(productDetailsState);
            handleCartDetails(true);
        }

    }

    useEffect(() => {
        if (product != null) {
            setProductDetailsState(product)
        }
    }, [product]);


    return (
        <ProductDetailsContainer>
            {
                productDetailsState &&

                <>
                    <ImageContainer>
                        {
                            productDetailsState.imageUrl &&
                            <Image src={productDetailsState?.imageUrl} width={520} height={480} alt="" priority={true}/>
                        }
                    </ImageContainer>
                    {(productDetailsState.name && productDetailsState.price && productDetailsState.description) &&
                        <ProductInfoContainer>

                            <h1>{productDetailsState.name}</h1>
                            <span>{formatToBRL(productDetailsState.price)}</span>

                            <p>{productDetailsState.description}</p>

                            <Button onClick={handleBuyButton}
                                title={"Comprar Agora"}
                            />

                        </ProductInfoContainer>
                    }
                </>
            }

        </ProductDetailsContainer>


    )
}