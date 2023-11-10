import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'

export async function getProducts(){
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "image2": image2.asset->url,
      price,
      size,
      length,
      number,
      type,
      category
    }`
  )
}
export async function getProduct(slug){
  return createClient(clientConfig).fetch(
    groq`*[_type == "product" && slug.current == '${slug}'][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      "image2": image2.asset->url,
      price,
      size,
      length,
      number,
      type,
      category
    }`,
    { slug }
  )
}