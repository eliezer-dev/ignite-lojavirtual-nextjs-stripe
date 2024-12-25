import * as React from 'react';

import ProductDetails from "@/app/components/productDetails/productDetails";
import {stripe} from "@/lib/stripe";
import Stripe from "stripe";

export interface ProductProps {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string | null;
    defaultPriceId: string;
}

type Props = {
    id: string;
}

export default async function ProductPage({params}: {params: Promise<Props>}) {
    const id = (await params).id
    const product:ProductProps = await getProductDetails(id);

    return (
            <ProductDetails product={product}/>

    )
}

async function getProductDetails(productId: string) {

    try {
        const product = await stripe.products.retrieve(productId, {
            expand: ['default_price'],
        });

        const price = product.default_price as Stripe.Price;

        const productData = {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: price.unit_amount! / 100,
            description: product.description,
            defaultPriceId: price.id,
        };

        return productData
    } catch (error) {
        throw new Error('Erro ao buscar detalhes do produto');
    }

}
export const revalidate: number = 3600;