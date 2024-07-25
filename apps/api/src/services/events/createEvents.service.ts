import { IEventDetails } from './types';
import { prisma } from '@/connections/prisma.connections';

interface IProductImages extends IEventDetails {
  files: Express.Multer.File[];
}

export const createProductService = async ({
  name,
  price,
  files,
}: IProductImages) => {
  await prisma.$transaction(async($transaction: any) => {
    const createdProduct = await $transaction.product.create({
      data: {
        name,
        price: parseInt(price),
      },
    });

    const productImage: any = [];
    files.forEach(async (item: Express.Multer.File) => {
      productImage.push({ url: item.path, productId: createdProduct.id });
    });
    await $transaction.productImage.createMany({
      data: productImage,
    });
  });
};
