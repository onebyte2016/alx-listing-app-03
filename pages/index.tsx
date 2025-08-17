import Head from 'next/head';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { PROPERTYLISTINGSAMPLE, SITE_TITLE } from '../constants';
import images from '@/constants/images';
import FilterSection from '@/components/common/FilterSection';
import PropertyCard from '@/components/common/PropertyCard';

export default function Home() {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section
        className="mt-10 bg-cover bg-center flex flex-col justify-center items-center text-white text-center p-8 md:p-16 rounded-5xl overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${images.heroBackground})`,
          height: '70vh',
          margin: '2rem',
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Find your favorite place here!
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          The best prices for over 2 million properties worldwide.
        </p>
     </section>
     <FilterSection />
{/* Listing Section */}
<section>
        <h2 className="text-3xl font-bold mb-6">Top Picks For You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <PropertyCard
              // key={property.id}
              name={property.name}
              price={property.price}
              rating={property.rating}
              image={property.image}
            />
          ))}
        </div>
      </section>

      <main className="p-4">
        <h1 className="text-2xl font-bold mb-6">Featured Listings</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {[
    {
      title: "Modern Apartment in the City",
      imageUrl: "/assets/OIP.webp",
      description: "A beautiful and modern apartment located in the heart of the city.",
    },
    {
      title: "Cozy Cottage Retreat",
      imageUrl: "/assets/hotel img2.jpg",
      description: "Enjoy peace and quiet in this cozy countryside cottage.",
    },
  ].map((card, index) => (
    <Card
      key={`featured-${index}`}
      title={card.title}
      imageUrl={card.imageUrl}
      description={card.description}
    />
  ))}
</div>

      </main>
    </>
  );
}
