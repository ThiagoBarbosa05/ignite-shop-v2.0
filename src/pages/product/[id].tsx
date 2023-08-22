import { addItemToCart } from "@/features/cartSlice"
import { stripe } from "@/lib/stripe"
import { ImageContainer, ProductContainer, ProductsDetails } from "@/styles/pages/product"
import axios from "axios"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"
import { useDispatch } from "react-redux"
import Stripe from "stripe"

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}


export default function Product({product}: ProductProps) {

  const {isFallback} = useRouter()
 
  const dispatch = useDispatch()

  if(isFallback) {
    return <p>Loading...</p>
  }
 
  return (
    <>
        <Head>
          <title>{product.name} | Ignite Shop</title>
        </Head>
        <ProductContainer>
          <ImageContainer>
            <Image src={product.imageUrl} width={520} height={480} alt=""/>
          </ImageContainer>
          <ProductsDetails>
          <h1>{product.name}</h1>
            <span>{product.price}</span>

            <p>{product.description}</p>

            <button onClick={() => {dispatch(addItemToCart({...product, quantity:1}))}}>
              Adicionar a sacola
            </button>
          </ProductsDetails>
        </ProductContainer>
    </>
    
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_OQTBl6gCbj2ylv' }
      }
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
    const productId = params!.id

    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price
    return {
      props: {
        product: {
          id: product.id,
          name: product.name,
          imageUrl: product.images[0],
          price: new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(price.unit_amount! / 100),
          description: product.description,
          defaultPriceId: price.id
        }
      }
    } 

}