import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "@/lib/stripe";
import {PriceStripe} from "@/app/components/cartDetails/cartDetails";

export async function POST(req: Request) {

    const productsPriceIdsList : PriceStripe[] = await req.json()

    if (req.method !== "POST") {
        return new Response(JSON.stringify({error: "Method not allowed."}), {
            status: 405
        })
    }

    if (productsPriceIdsList.length == 0) {
        return new Response(JSON.stringify({error: "Price not found."}), {
            status: 400
        })
    }

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${process.env.NEXT_URL}/`;

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: productsPriceIdsList
    })

    return new Response(JSON.stringify({checkoutUrl: checkoutSession.url}), {
        status: 201
    })


}