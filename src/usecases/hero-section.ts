import { type HeroSectionDetailInput } from 'entities';
import { type IHeroSectionDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { heroSectionSchema } from 'schemas/hero-section';

export class HeroSectionUsecase {
  constructor(private readonly dataGateway: IHeroSectionDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async update(data: HeroSectionDetailInput) {
    const heroSectionData = validateData(heroSectionSchema, data);

    return await this.dataGateway.update(heroSectionData.page, heroSectionData);
  }
}
