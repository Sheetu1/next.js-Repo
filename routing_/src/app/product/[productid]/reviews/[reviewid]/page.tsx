import notfound from '@/app/not-found'
import React from 'react'

const reviews = async ({
    params,
}: {
    params: Promise<{productid:string, reviewid:string }> } ) => {
    const {productid,reviewid } = await params

    if(Number(reviewid) > 50){
        return notfound()
    }
  return (
    <div>product {productid}  reviews {reviewid}</div>
  )
}

export default reviews