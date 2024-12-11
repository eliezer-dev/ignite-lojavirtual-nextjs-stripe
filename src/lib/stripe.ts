import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.STRIPE_SECRET_KEY) {
    console.log("STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY);
    throw new Error("STRIPE_SECRET_KEY não definida. Verifique o arquivo .env.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2024-11-20.acacia',
    appInfo: {
        name: 'Ignite Shop',
    }
})