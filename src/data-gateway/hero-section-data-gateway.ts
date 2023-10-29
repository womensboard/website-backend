import { HERO_SECTION_ENV } from 'config';
import { type HeroSectionDetail, type HeroSectionDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IHeroSectionDataGateway } from 'usecases';

const fileName = HERO_SECTION_ENV;

export class HeroSectionDataGateway implements IHeroSectionDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<HeroSectionDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Hero', error);
      return [];
    }
  }

  async update(data: HeroSectionDetailInput): Promise<HeroSectionDetail> {
    const heros = await this.fetch();

    const itemIndex = heros.findIndex((item) => item.page === data.page);

    heros[itemIndex] = {
      ...heros[itemIndex],
      ...data,
      updatedAt: new Date(),
    };

    const heroDataString = JSON.stringify(heros);
    await this.fileService.write(fileName, heroDataString);

    return heros[itemIndex];
  }
}
