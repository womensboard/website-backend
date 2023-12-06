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
      return [
        {
          header: 'Women’s Board Impacts Lives',
          subHeader: '',
          imageURL: [''],
          page: 'home',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          header: 'UN Collaboration',
          subHeader: '',
          imageURL: [''],
          page: 'un-collaboration',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          header: 'Empowering the Nigerian woman',
          subHeader: '',
          imageURL: [''],
          page: 'about',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          header: 'Projects',
          subHeader: '',
          imageURL: [''],
          page: 'project',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
    }
  }

  async update(
    page: string,
    data: HeroSectionDetailInput
  ): Promise<HeroSectionDetail> {
    const heros = await this.fetch();
    const itemIndex = heros.findIndex((item) => item.page === page);

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
