import { type INewsDataGateway } from 'usecases';
import { type NewsPageContent, type NewsPageContentInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { NEWS_FILE_ENV } from 'config';
import { v4 as uuidv4 } from 'uuid';
import { NewsNotFound } from 'utils/errors';

export class NewsDataGateway implements INewsDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<NewsPageContent[]> {
    const fileName = NEWS_FILE_ENV;

    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }

  async create(data: NewsPageContentInput): Promise<NewsPageContent> {
    const fileName = NEWS_FILE_ENV;

    const currentNews = await this.fetch();

    const newNews = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentNews.push(newNews);

    const newDataString = JSON.stringify(currentNews);
    await this.fileService.write(fileName, newDataString);

    return newNews;
  }

  async update(
    id: string,
    data: NewsPageContentInput
  ): Promise<NewsPageContent> {
    const fileName = NEWS_FILE_ENV;

    const currentNews = await this.fetch();

    const indexToUpdate = currentNews.findIndex((news) => news.id === id);

    if (indexToUpdate < 0) {
      throw new NewsNotFound();
    }
    const updated = {
      ...currentNews[indexToUpdate],
      ...data,
    };
    currentNews[indexToUpdate] = updated;

    const newDataString = JSON.stringify(currentNews);
    await this.fileService.write(fileName, newDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const fileName = NEWS_FILE_ENV;

    const currentNews = await this.fetch();

    const indexToDelete = currentNews.findIndex((news) => news.id === id);

    if (indexToDelete < 0) {
      throw new NewsNotFound();
    }

    currentNews.splice(indexToDelete, 1);

    const newDataString = JSON.stringify(currentNews);
    await this.fileService.write(fileName, newDataString);

    return currentNews;
  }
}
