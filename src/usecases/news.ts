import { type NewsPageContentInput } from 'entities';
import { type INewsDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { newsContentSchema } from 'schemas/news';

export class NewsUsecase {
  constructor(private readonly dataGateway: INewsDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: NewsPageContentInput) {
    const newsData = validateData(newsContentSchema, data);
    return await this.dataGateway.create(newsData);
  }

  async update(idToUpdate: string, data: NewsPageContentInput) {
    const newsData = validateData(newsContentSchema, data);
    return await this.dataGateway.update(idToUpdate, newsData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
