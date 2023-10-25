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
      url,
      content
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
      url,
      content
    }`,
    { slug }
  )
}