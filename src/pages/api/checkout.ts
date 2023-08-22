import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // const { lineItems } = req.body;

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed." });
    }
  
    // if (!priceId) {
    //   return res.status(400).json({ error: 'Price not found.' });
    // }

    const successUrl = `ignite-shop-v2-0-ten.vercel.app/success?session_id={CHECKOUT_SESSION_ID}`
    const cancelUrl = `${process.env.NEXT_URL}/`


    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: req.body.lineItems 
    }
    )
    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}

