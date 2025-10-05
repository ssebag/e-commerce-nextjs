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
        <div className='flex flex-col items-center mb-[20px]'>
          <img src={product.thumbnail} alt={product.title} className='w-[450px] '/>
          <div className='flex gap-[20px]'>
            {product.images.map(image =>(
              <img src={image} alt={product.title} key={product.id} className='h-[150px] ' />
            ))}
          </div>
        </div>
       
       <div className='flex flex-col gap-[20px]'>
          <h5 className='text-yellow-400 text-2xl font-semibold text-center mb-[5px]'>{product.title}</h5>
            <p className='text-[18px]'>{product.description}</p>
            <p className='text-[18px]'><span className='text-yellow-400 font-bold'>Category: </span>{product.category}</p>
            <p className='text-[18px]'><span className='text-yellow-400 font-bold'>Price: </span>{product.price}</p>
            <p className='text-[18px]'><span className='text-yellow-400 font-bold'>Brand: </span>{product.brand}</p>
           <hr className='w-[300px]'/>
            <p className='text-yellow-400 font-bold'>Reviews: </p>
            <div className='flex justify-between '>
                {product.reviews.map(review =>(
                    <div className='flex flex-col gap-[20px] border-[1px] border-yellow-400 rounded-2xl p-[20px]'>
                      <p className='text-[18px]'><span className='text-yellow-400'>Rating: </span>{review.rating}</p>
                      <p className='text-[18px]'><span className='text-yellow-400'>Comment: </span>{review.comment}</p>
                      <p className='text-[18px]'><span className='text-yellow-400'>Date: </span>{review.date}</p>
                      <p className='text-[18px]'><span className='text-yellow-400'>Reviewer Name: </span>{review.reviewerName}</p>
                    </div>
                ))}
            </div>
       </div>
    </div>
   
  )
}

export default Post