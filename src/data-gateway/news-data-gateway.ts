import { type INewsDataGateway } from 'usecases';
import { type NewsPageContent } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { NEWS_FILE_ENV } from 'config';
import { v4 as uuidv4 } from 'uuid';

export class NewsDataGateway implements INewsDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<NewsPageContent[]> {
    const filename = NEWS_FILE_ENV;

    try {
      const fileContent = await this.fileService.read(filename) || '[]';
      return JSON.parse(fileContent);
    } catch (error) {
      console.error('Error fetching news:', error);
      return [];
    }
  }

  //   async create(data: NewsPageContent): Promise<any> {
//     const filename = NEWS_FILE_ENV;

//     console.log(filename)

 

//     const fileContent = await this.fileService.read(filename) || '[]';
//     if (!fileContent) {
//       console.log('Mymy');
//     } else {
//       const currentNews = JSON.parse(fileContent);

//       const newNews = {
//         ...data,
//         id: uuidv4(),
//       }

//       currentNews.push(newNews);

//       console.log(currentNews)
//       const newDataString = JSON.stringify(currentNews);
//       await this.fileService.write(filename, newDataString);

//       return {
//         msg: 'success',
//         body: currentNews,
//       };

//     }
  //   }

  async create(data: NewsPageContent): Promise<any> {
    const filename = NEWS_FILE_ENV;

    try {
      let fileContent;
      try {
        fileContent = await this.fileService.read(filename);
      } catch (readError) {
        fileContent = '[]';
      }

      const currentNews = JSON.parse(fileContent);

      const newNews = {
        ...data,
        id: uuidv4(),
      }

      currentNews.push(newNews);

      const newDataString = JSON.stringify(currentNews);
      await this.fileService.write(filename, newDataString);

      return {
        msg: 'success',
        body: currentNews,
      };
    } catch (error) {
      console.error('Error creating news:', error);
      return {
        msg: 'error',
        error: 'An error occurred while creating news.',
      };
    }
  }

  async update(id: string, data: NewsPageContent): Promise<any> {
    const filename = NEWS_FILE_ENV;

    try {
      const fileContent = await this.fileService.read(filename) || '[]';
      const currentNews = JSON.parse(fileContent);

      const indexToUpdate = currentNews.findIndex((news) => news.id === id);

      if (indexToUpdate !== -1) {
        currentNews[indexToUpdate] = {
          ...currentNews[indexToUpdate],
          ...data,
        };

        const newDataString = JSON.stringify(currentNews);
        await this.fileService.write(filename, newDataString);

        return {
          msg: 'success',
          body: currentNews,
        };
      } else {
        return {
          msg: 'news not found',
        };
      }
    } catch (error) {
      console.error('Error updating news:', error);
      return {
        msg: 'error',
        error: 'An error occurred while updating news.',
      };
    }
  }

  async delete(id: string): Promise<any> {
    const filename = NEWS_FILE_ENV;

    try {
      const fileContent = (await this.fileService.read(filename)) || '[]';
      const currentNews = JSON.parse(fileContent);

      const indexToDelete = currentNews.findIndex((news) => news.id === id);

      if (indexToDelete !== -1) {
        currentNews.splice(indexToDelete, 1);

        const newDataString = JSON.stringify(currentNews);
        await this.fileService.write(filename, newDataString);

        return {
          msg: 'success',
          body: currentNews,
        };
      } else {
        return {
          msg: 'news not found',
        };
      }
    } catch (error) {
      console.error('Error deleting news:', error);
      return {
        msg: 'error',
        error: 'An error occurred while deleting news.',
      };
    }
  }
}
