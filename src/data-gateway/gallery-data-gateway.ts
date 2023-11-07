import { GALLERY_ENV } from 'config';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IGalleryDataGateway } from 'usecases';
import type { GalleryDetail, GalleryDetailInput } from 'entities';

const fileName = GALLERY_ENV;

export class GalleryDataGateway implements IGalleryDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<GalleryDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching Gallery', error);

      return {
        subHeader: '',
        imageURL: [''],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async create(data: GalleryDetailInput): Promise<GalleryDetail> {
    const currentGallery = await this.fetch();

    const newGallery = {
      ...currentGallery,
      ...data,
    };
    const galleryDataString = JSON.stringify(newGallery);
    await this.fileService.write(fileName, galleryDataString);

    return newGallery;
  }
}
