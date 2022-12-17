export default async function Head({ params }: { params: { slug: string } }) {
  const { data } = await getData(params.slug);
  const page = data[0].attributes;

  return (
    <>
      <title>{page.seo.metaTitle}</title>
      <meta name="description" content={page.seo.metaDescription} />
      <link rel="canonical" href={`https://www.art2business.ru/${params.slug}/`} />
    </>
  );
}

async function getData(slug: string) {
  const res = await fetch(`https://server.art2business.ru/api/services?filters[Slug][$eq]=${slug}&populate=*`);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
