import { dailyContent } from "@/content/daily";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
export default async function DailyPage({
  params,
}: {
  params: Promise<{ date: string }>;
}) {
  const { date } = await params;

  console.log("DATE:", date);

  const data = dailyContent[date];

  if (!data) return notFound();

  return (
    <div>
        <Navbar/>
      <h1>{data.title}</h1>
      <Image
      src={data.images[0]}
      alt={data.title}
      width={600}
      height={400}
      />
      <p>{data.description}</p>
    </div>
  );
}