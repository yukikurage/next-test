import React from "react";

function Number({ num }: { num: number }) {
  return <div>このページは{num}番目のページです．</div>;
}

export async function getStaticPaths() {
  const paths = [0, 1, 2, 3].map((id) => `/numbers/${id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  return { props: { num: params.id } };
}

export default Number;
