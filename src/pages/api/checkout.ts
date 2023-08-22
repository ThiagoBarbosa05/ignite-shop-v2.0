import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {


    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed." });
    }
  

    const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
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

