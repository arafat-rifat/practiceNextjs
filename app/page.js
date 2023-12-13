import Hero from "@/Components/Hero";
import CarCard from "@/Components/CarCard";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className=" w-[1400] mx-auto">
        <h1 className="text-4xl text-black font-semibold text-start">
          Car Catagory
        </h1>
        <div className="flex gap-5 items-center my-10">
          <CarCard title="TOYOTA" CarName="Corolla" Price="108" />
          <CarCard title="TOYOTA" CarName="Primio" Price="148" />
          <CarCard title="TOYOTA" CarName="Allion" Price="118" />
          <CarCard title="TOYOTA" CarName="Karina" Price="79" />
          <CarCard title="TOYOTA" CarName="G-100" Price="55" />
        </div>
      </div>
    </main>
  );
}
