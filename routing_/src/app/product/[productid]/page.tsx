import React from "react";

const productid = async ({
  params,
}: {
  params: Promise<{ productid: string }>;
}) => {
  const productid = (await params).productid;
  return <div>product details {productid}</div>;
};

export default productid;
