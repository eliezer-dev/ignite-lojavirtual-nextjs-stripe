'use client'

import {
    CartDetailsContainer,
    ClosedButton,
    ItemsContainer, TotalPrice,
    TotalQuantity,
    TotalValueContainer,
    ButtonContainer
} from "@/app/components/cartDetails/styles";
import ItemSelected from "@/app/components/itemSelected/itemSelected";
import Image from "next/image"
import closeIcon from "@/assets/closeIcon.svg"
import Button from "@/app/ui/button/button";
import {useData} from "@/context/DataContext";
import {useEffect, useState} from "react";
import {ProductProps} from "@/app/product/[id]/page";
import {number} from "prop-types";
import {formatToBRL} from "@/utils/geral";
import axios from "axios";

export interface PriceStripe {
    price: string
    quantity: number
}

export default function CartDetails() {
    const { data, handleCartDetails, showCartDetails, handleRemoveItemData } = useData();
    const [cartItems, setCartItems] = useState<ProductProps[]>([])
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
    const [showCartDetailsState, setCartDetailsState] = useState('disabled');


    useEffect(() => {
        if (data.length > 0) {
            setCartItems(data)
        }
     }, [data]);

    useEffect(() => {
        if (showCartDetails == true && showCartDetailsState == 'disabled') {
            setCartDetailsState('enabled')
        }

        if (showCartDetails == false && showCartDetailsState == 'enabled') {
            setCartDetailsState('disabled')
        }

    }, [showCartDetails]);

    const getTotalPrice = () => {

        if (cartItems.length > 0) {
            let total = 0
            cartItems.forEach((cartItem) => {
                total += cartItem.price
            })
            return formatToBRL(total)
        }
        return formatToBRL(0)
    };



    async function handleBuyButton() {
        let productsPriceIdsList: PriceStripe[] = []

        cartItems.forEach((cartItem) => {
            productsPriceIdsList.push(
                {
                    price: cartItem.defaultPriceId,
                    quantity: 1
                }
            )
        })

        try {
            setIsCreatingCheckoutSession(true);
            const response = await axios.post('/api/checkout', productsPriceIdsList)

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl;
        } catch (err) {
            setIsCreatingCheckoutSession(false);
            console.log(err)

            alert('Falha ao redirecionar ao checkout!')
        }
    }

    function handleRemoveCartItem (cartItemId : string) {
        handleRemoveItemData(cartItemId)
        setCartItems(cartItems.filter(cartItem => cartItem.id !== cartItemId ))
    }

    function handleDisabledCartDetails () {
        setCartDetailsState('disabled')
        handleCartDetails(false)
    }


    return (
         <CartDetailsContainer className={showCartDetailsState}>
            <ClosedButton onClick = {handleDisabledCartDetails}>
                <Image src={closeIcon} alt="Desenho de um X que fecha a tela" />
            </ClosedButton>
            <h1>Sacola de Compras</h1>
            <div className="main">
                <ItemsContainer>
                    {cartItems.map((cartItem, index) => (
                            <ItemSelected key={index} productName={cartItem.name}
                                      productPrice={cartItem.price}
                                      productImage={cartItem.imageUrl}
                                      onClick={() => handleRemoveCartItem(cartItem.id) }
                            />
                        )

                    )}

                </ItemsContainer>
                <TotalValueContainer>
                    <TotalQuantity>
                        <p>Quantidade</p>
                        <p>{cartItems.length} itens</p>
                    </TotalQuantity>

                    <TotalPrice>
                        <p style={{fontSize: "18px"}}>Valor Total</p>
                        <p style={{fontSize: "24px"}}>{getTotalPrice()}</p>
                    </TotalPrice>
                    <Button onClick={handleBuyButton}
                            title={"Finalizar Compra"}
                            disabled={isCreatingCheckoutSession || cartItems.length == 0}/>
                </TotalValueContainer>

            </div>


        </CartDetailsContainer>
    )
}