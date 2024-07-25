import { prisma } from "@/connections/prisma.connections";

export const getRegionsService = async () => {
  const regions = await prisma.region.findMany();

  if (!regions || regions.length === 0) {
    throw ({message:'Failed fetching regions',status:404});
  }

  return {
    regions
  };
};
