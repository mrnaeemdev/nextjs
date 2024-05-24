import React from "react";

type PageProps = {
  params: { productId: string,
    reviewId: string
   };
};

const ReviewDetail = ({ params }: PageProps) => {
  return <h1>{`Review ${params.reviewId} for Product ${params.productId}`}</h1>;
};

export default ReviewDetail;
