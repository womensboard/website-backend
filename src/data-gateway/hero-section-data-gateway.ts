import { HERO_SECTION_ENV } from 'config';
import { type HeroSectionDetail, type HeroSectionDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IHeroSectionDataGateway } from 'usecases';

const fileName = HERO_SECTION_ENV;

export class HeroSectionDataGateway implements IHeroSectionDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<HeroSectionDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Hero', error);
      return {
        header: "Women's Board Impacts Lives",
        subHeader:
          "Women's Board is an NGO which was created with a Special Consultative StatusE with the Economic and Social Council of the Unnited Nations. We are also associated with the deaprtment of Public Information of the United Nations.",
        imageURL: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async update(data: HeroSectionDetailInput): Promise<HeroSectionDetail> {
    const currentHero = await this.fetch();

    const updated = {
      ...currentHero,
      ...data,
    };
    updated.updatedAt = new Date();

    const heroDataString = JSON.stringify(updated);
    await this.fileService.write(fileName, heroDataString);

    return updated;
  }
}
