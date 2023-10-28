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
          header: "Women's Board Impacts Lives",
          subHeader:
            "Women's Board is an NGO which was created with a Special Consultative StatusE with the Economic and Social Council of the Unnited Nations. We are also associated with the deaprtment of Public Information of the United Nations.",
          imageURL: [],
          page: 'home',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          header: 'Empowering the Nigerian Woman',
          subHeader:
            'Women’s Board – Educational Cooperation Society is a Nigerian not-for-profit, non-governmental organization working since 1972 for the development of women of any background, ethnic group or religion. The organization was formally registered in 1974 with the Nigerian Companies Decree under the name of Educational Cooperation Society, the Women’s Board is an autonomous division committed to the promotion of women under a Governing Board created for the purpose. It is registered in the Ministry of Women Affairs and Poverty Alleviation in Lagos. We have a Special Consultative Status with the Economic and Social Council of the United Nations and we are associated with the Department of Public Information of the United Nations.',
          imageURL: [],
          page: 'about',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ];
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
    // const updated = {
    //   ...heros,
    //   ...data,
    // };
    // updated.updatedAt = new Date();

    const heroDataString = JSON.stringify(heros);
    await this.fileService.write(fileName, heroDataString);

    return heros[itemIndex];
  }
}
