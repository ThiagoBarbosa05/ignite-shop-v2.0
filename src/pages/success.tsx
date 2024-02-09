import { stripe } from "@/lib/stripe";
import { ImageContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";


interface SuccessProps {
    customerName: string;
    products: {
        imageUrl: string
        name: string
        quantity: number
    }[]
    quantityOfItems: number
    
}

export default function Success({customerName, products, quantityOfItems}: SuccessProps) {
    return (
        <>
        <Head>
          <title>Compra efetuada | Ignite Shop</title>
          <meta name='robots' content='noindex' />
        </Head>
        <SuccessContainer>
            <section>
                {products.map(product => (
                    <div key={product.imageUrl}>
                        <ImageContainer >
                            <Image src={product.imageUrl} width={120} height={110} alt="" />
                        </ImageContainer>
                        <span>x{product.quantity}</span>
                    </div>
                ))}
            </section>
            <h1>Compra efetuada!</h1>
           

            <p>
                Uhuul <strong>{customerName}</strong>, 
                {quantityOfItems === 1 ?
                 `sua camiseta já está a caminho da sua casa.` 
                : 
                 `suas ${quantityOfItems} camisetas já estao a caminho da sua casa.`}
                
            </p>

            <Link href='/'>
                voltar ao catalogo
            </Link>
        </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
    if(!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const quantityOfItems = session.line_items!.data.reduce(
        (total, item) => total + item.quantity!, 0
    )
    const customerName = session.customer_details!.name
    const products = session.line_items?.data.map(item => {
        const product = item.price!.product as Stripe.Product
        const quantity = item.quantity

        return ({
            name: product.name,
            imageUrl: product.images![0],
            quantity
        })
    })

    return {
        props: {
            customerName,
            products,
            quantityOfItems
        }
    }
}   