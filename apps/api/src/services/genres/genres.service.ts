import { prisma } from "@/connections/prisma.connections";

export const getGenresService = async () => {
  const genres = await prisma.genre.findMany();

  if (!genres || genres.length === 0) {
    throw ({message:'Failed fetching genres',status:404});
  }

  return {
    genres
  };
};
