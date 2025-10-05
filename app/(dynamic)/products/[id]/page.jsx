import React from 'react'


async function getData(id){
  const res= await fetch(`https://dummyjson.com/products/${id}`);
  if(!res.ok){
    throw new Error('Failed')
  }
  return res.json()
}
 
export async function generateMetadata({ params }) {
  const product = await getData(params.id);
  return{
    title:product.title,
    description: product.description
  }
} 

async function Post({params}) {
  const product = await getData(params.id);
 
  return (
    <div>
      <div>
        {product.images.map(image =>(
          <img src={image} alt={product.title} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default Post