"use client";

import Link from "next/link";
import { useAppSelector } from "@/hooks";
import CraftCard from "@/components/organisms/CraftCard";

export default function Home() {
  const { crafts } = useAppSelector((state) => state.craft);

  return (
    <main>
      <div className="flex flex-wrap">
        {crafts?.map((craft) => (
          <Link href={`/craft/${craft._id}`} key={craft._id}>
            <CraftCard
              image={craft.image}
              name={craft.name}
              price={craft.price}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
