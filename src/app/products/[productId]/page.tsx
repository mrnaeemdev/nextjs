import React from "react";
import { Metadata } from "next";

type PageProps = {
  params: { productId: string };
};

export const generateMetadata = ({ params }: PageProps): Metadata => {
  return {
    title: `Product ${params.productId}`,
  };
};

const ProductDetail = ({ params }: PageProps) => {
  return <h1>{`Details about product ${params.productId}`}</h1>;
};

export default ProductDetail;
