'use client'

import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from "keen-slider/react";
import Link from "next/link";
import Image from "next/image";
import bagImage from "@/assets/bag.svg";
import {useEffect, useState} from "react";

import {ProductSliderContainer, Product} from "@/app/components/productSlider/styles";
import {useData} from "@/context/DataContext";

export interface Product {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
}

export interface ProductSliderProps {
    products: Product[];
}

export default function ProductSlider(products : ProductSliderProps) {
    const [productsState, setProductsState] = useState<ProductSliderProps>();
    //const { handleCartDetails } = useData();

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: {
            perView: 3,
            spacing: 48,
        },
    });

    useEffect(() => {

        if (products != null && products.products.length > 0) {
            setProductsState(products)
        }

    }, [products]);

    useEffect(() => {
        if (productsState?.products?.length) {
            instanceRef.current?.update();
        }
    }, [productsState]);

    return (
        <ProductSliderContainer ref={sliderRef} className="keen-slider">

            {
                productsState != null &&

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
        </ProductSliderContainer>

    )
}