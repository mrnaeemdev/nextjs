import { notFound } from "next/navigation";
import React from "react";

type PageProps = {
  params: { productId: string,
    reviewId: string
   };
};

const ReviewDetail = ({ params }: PageProps) => {

  if(parseInt(params.reviewId) > 1000) {
    notFound();
  }

  return <h1>{`Review ${params.reviewId} for Product ${params.productId}`}</h1>;
};

export default ReviewDetail;
