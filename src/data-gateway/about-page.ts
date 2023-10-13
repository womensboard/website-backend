import { ABOUT_PAGE_FILE_ENV } from 'config';
import { type AboutPageContent, type AboutPageContentInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IAboutPageDataGateway } from 'usecases';
import { AboutPageNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

export class AboutPageDataGateway implements IAboutPageDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<AboutPageContent[]> {
    const fileName = ABOUT_PAGE_FILE_ENV;

    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching About Page Content', error);
      return [];
    }
  }

  async create(data: AboutPageContent): Promise<AboutPageContentInput> {
    const fileName = ABOUT_PAGE_FILE_ENV;

    const currentAboutPages = await this.fetch();

    const newAboutPage = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentAboutPages.push(newAboutPage);
    const newDataString = JSON.stringify(currentAboutPages);
    await this.fileService.write(fileName, newDataString);

    return newAboutPage;
  }

  async update(
    id: string,
    data: AboutPageContent
  ): Promise<AboutPageContentInput> {
    const fileName = ABOUT_PAGE_FILE_ENV;

    const currentAboutPages = await this.fetch();

    const indexToUpdate = currentAboutPages.findIndex(
      (currentAboutPage) => currentAboutPage.id === id
    );

    if (indexToUpdate < 0) {
      throw new AboutPageNotFound();
    }
    data.updatedAt = new Date();

    const update = {
      ...currentAboutPages[indexToUpdate],
      ...data,
    };

    currentAboutPages[indexToUpdate] = update;
    const newDataString = JSON.stringify(currentAboutPages);
    await this.fileService.write(fileName, newDataString);

    return update;
  }

  async delete(id: string): Promise<any> {
    const fileName = ABOUT_PAGE_FILE_ENV;

    const currentAboutPages = await this.fetch();

    const indexToDelete = currentAboutPages.findIndex(
      (currentAboutPage) => currentAboutPage.id === id
    );

    if (indexToDelete < 0) {
      throw new AboutPageNotFound();
    }

    currentAboutPages.splice(indexToDelete, 1);

    const newDataString = JSON.stringify(currentAboutPages);
    await this.fileService.write(fileName, newDataString);
  }
}
