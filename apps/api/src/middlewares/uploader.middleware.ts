import multer from 'multer';
import fs from 'fs';
import { Request } from 'express';

type DestinationCallback = (error: Error | null, destination: string) => void;
type FilenameCallback = (error: Error | null, filename: string) => void;

export const uploader = (
  filePrefix: string,
  folderName: string,
  fileAccepted: string[],
  filelimit: number,
) => {
  const defaultDir = 'src/public/';

  const storage = multer.diskStorage({
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback,
    ) => {
      const destination = defaultDir + folderName;
      const isDirectoryExist = fs.existsSync(destination);

      if (!isDirectoryExist) {
        fs.mkdirSync(destination, { recursive: true });
      }
      cb(null, destination);
    },

    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: FilenameCallback,
    ) => {
      const fileExtension = file.originalname.split('.').pop();
      const filename = `${filePrefix}-${Date.now()}.${fileExtension}`;
      cb(null, filename);
    },
  });

  const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback,
  ) => {
    const fileExtension = file.originalname.split('.').pop();
    if (
      file.mimetype.startsWith('image/') &&
      fileAccepted.includes(fileExtension || '')
    ) {
      cb(null, true);
    } else {
      cb(
        new Error(
          `Invalid file type. Accepted file extensions are: ${fileAccepted.join(
            ', ',
          )}`,
        ),
      );
    }
  };

  return multer({ storage, fileFilter, limits: { fileSize: filelimit } });
};