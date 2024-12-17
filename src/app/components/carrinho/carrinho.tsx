'use client'

import {CarrinhoContainer, QuantityItemCartContainer} from "@/app/components/carrinho/styles";
import Image from "next/image";
import emptyCart from "@/assets/empty_cart.svg";
import {useEffect, useState} from "react";
import {useData} from "@/context/DataContext";
import {ProductProps} from "@/app/product/[id]/page";

export default function Carrinho () {
    const [cartItems, setCartItems] = useState<ProductProps[]>([])
    const { data, addProductToCart, handleCartDetails } = useData();

    useEffect(() => {
        if(data.length > 0) {
            setCartItems(data)
        }

    },[data])

    function handleShowCartDetails () {
        handleCartDetails(true)
    }


    return (

            <CarrinhoContainer onClick={handleShowCartDetails}>
                <QuantityItemCartContainer>
                    <p>{cartItems.length}</p>
                </QuantityItemCartContainer>
                <Image src={emptyCart} alt="icone representando um carrinho vazio"/>
            </CarrinhoContainer>
    )
}