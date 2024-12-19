import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { stripe } from '@/lib/stripe';

export async function GET(request: Request, props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const { id } = params;

    try {
        const product = await stripe.products.retrieve(id, {
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

        return NextResponse.json(productData);
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
        return new Response('Produto não encontrado', { status: 404 });
    }
}