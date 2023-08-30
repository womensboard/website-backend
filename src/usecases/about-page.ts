import { type AboutPageContent } from 'entities';
import { aboutPageContentSchema } from 'schemas/about-page';
import { validateData } from 'utils/helpers';
import { type IAboutPageDataGateway } from './interfaces';

export class AboutPageUsecase {
  constructor(private readonly datagateway: IAboutPageDataGateway) {}

  async fetch() {
    return await this.datagateway.fetch();
  }

  async create(data: AboutPageContent) {
    const aboutPageData = validateData(aboutPageContentSchema, data);
    return await this.datagateway.create(aboutPageData);
  }

  async update(idToUpdate: string, data: AboutPageContent) {
    const aboutPageData = validateData(aboutPageContentSchema, data);
    return await this.datagateway.update(idToUpdate, aboutPageData);
  }

  async delete(idToDelete: string) {
    return await this.datagateway.delete(idToDelete);
  }
}
