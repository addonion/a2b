export default async function Head() {
  const { data } = await getData();
  const page = data.attributes;

  return (
    <>
      <title>{page.seo.metaTitle}</title>
      <meta name="description" content={page.seo.metaDescription} />
      <link rel="canonical" href="https://www.art2business.ru/" />
    </>
  );
}

async function getData() {
  const res = await fetch("https://server.art2business.ru/api/main?populate=*");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
