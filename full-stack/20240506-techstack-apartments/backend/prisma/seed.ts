import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.apartment.createMany({
    data: [
      {
        name: 'Market square apartments',
        rooms: 1,
        price: 100,
        description: 'Cozy studio in the heart of the city, fully furnished with modern amenities and close to public transport',
        is_rented: true,
      },
      {
        name: 'Sun apartments',
        rooms: 2,
        price: 200,
        description: 'Spacious two-bedroom apartment with a great view, includes parking and a pet-friendly policy',
        is_rented: false,
      },
      {
        name: 'Cozy Room',
        rooms: 3,
        price: 300,
        description: 'Charming one-bedroom loft near downtown, featuring high ceilings, natural light, and a quiet neighborhood',
        is_rented: false,
      },
      {
        name: 'Flat for crazy students',
        rooms: 1,
        price: 10_000,
        description: 'You know what to do',
        is_rented: false,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error( e );
    await prisma.$disconnect();
    process.exit(1);
  })