import { type NewsPageContent } from 'entities';
import { type INewsDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { newsContentSchema } from 'schemas/news';

export class NewsUsecase {
  constructor(private readonly dataGateway: INewsDataGateway) {}

  async fetchNews() {
    return await this.dataGateway.fetch();
  }

  async createNews(data: NewsPageContent) {
    const newsData = validateData(newsContentSchema, data);
    return await this.dataGateway.create(newsData)
  }

  async updateNews(idToUpdate: string, data: NewsPageContent) {
    const newsData = validateData(newsContentSchema, data);
    return await this.dataGateway.update(idToUpdate, newsData);
  }

  async deleteNews(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
