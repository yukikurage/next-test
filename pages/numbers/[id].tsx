function Number({ num }) {
  return <div>このページは{num}番目のページです．</div>;
}

export async function getStaticPaths() {
  const paths = [0, 1, 2, 3].map((id) => `/numbers/${id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // propsを通じてpostをページに渡す
  return { props: { num: params.id } };
}

export default Number;
