export function getServerStaticParams() {}

export default async function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <p>Say hello</p>
    </div>
  );
}
