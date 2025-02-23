"use client";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import BestSeller from "@/components/BestSeller";

export const dynamic = "force-dynamic"; // Add this line

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <BestSeller />
    </>
  );
}