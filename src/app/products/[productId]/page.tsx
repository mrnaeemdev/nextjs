import React from "react";

type PageProps = {
  params: { productId: string };
};

const ProductDetail = ({ params }: PageProps) => {
  console.log("prtar", params);

  return <h1>{`Details about product ${params.productId}`}</h1>;
};

export default ProductDetail;
