"use client";
import { HomePageContent } from "@/app/data/PageContent";
import ContentModule from "@/app/components/ContentModule";

export default function Home() {
  return (
    <main className="h-screen w-screen pb-56">
      {HomePageContent.collections.map((value, index) => (
        <ContentModule {...value} key={`module-index-${index}`} />
      ))}
    </main>
  );
}
