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
          subHeader:
            'Women’s Board is an NGO with a Special Consultative Status with the Economic and Social Council of the United Nations. We are also associated with the Department of Public Information of the United Nations.',
          imageURL: [
            '/assets/images/heroSectionImage.jpeg',
            '/assets/images/heroSectionImage.jpeg',
            '/assets/images/heroSectionImage.jpeg',
            '/assets/images/heroSectionImage.jpeg',
            '/assets/images/heroSectionImage.jpeg',
          ],
          page: 'home',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          header: 'UN Collaboration',
          subHeader: '',
          imageURL: ['/assets/images/un-collaboration-hero-image.png'],
          page: 'un-collaboration',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          header: 'Women’s Board Impacts Lives',
          subHeader:
            'Women’s Board is an NGO with a Special Consultative Status with the Economic and Social Council of the United Nations. We are also associated with the Department of Public Information of the United Nations.',
          imageURL: ['/assets/images/iit.png'],
          page: 'about',
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
