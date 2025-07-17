export async function generateStaticParams() {
  return data.map((item) => ({
    slug: item.slug,
  }));
}

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>
  }) {
  const { slug } = await params
  
  return (
    <>
      Daftar { slug }
    </>
  )
}
