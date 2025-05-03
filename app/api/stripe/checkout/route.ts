
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-04-30.basil',
});

export async function POST(req: NextRequest) {
    const body = await req.json();

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: body.items,
        mode: 'payment',
        success_url: `${req.nextUrl.origin}/Order`,
        cancel_url: req.headers.get("referer") || `${req.nextUrl.origin}/`,

    });

    return NextResponse.json({ url: session.url });
}
