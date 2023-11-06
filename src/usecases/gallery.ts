import { type GalleryDetail } from 'entities';
import { gallerySchema } from 'schemas/gallery';
import { validateData } from 'utils/helpers';
import { type IGalleryDataGateway } from './interfaces';

export class GalleryUseCase {
  constructor(private readonly dataGateway: IGalleryDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: GalleryDetail) {
    const newGallery = validateData(gallerySchema, data);
    return await this.dataGateway.create(newGallery);
  }
}
