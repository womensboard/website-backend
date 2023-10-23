import { MANAGEMENT_ENV } from 'config';
import { type ManagementDetail, type ManagementDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IManagementDataGateway } from 'usecases';
import { ManagementNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = MANAGEMENT_ENV;
export class ManagementDataGateway implements IManagementDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<ManagementDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Management', error);
      return [];
    }
  }

  async create(data: ManagementDetail): Promise<ManagementDetailInput> {
    const currentManagement = await this.fetch();

    const newManagement = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentManagement.push(newManagement);

    const managementDataString = JSON.stringify(currentManagement);
    await this.fileService.write(fileName, managementDataString);

    return newManagement;
  }

  async update(
    id: string,
    data: ManagementDetail
  ): Promise<ManagementDetailInput> {
    const currentManagement = await this.fetch();

    const indexToUpdate = currentManagement.findIndex(
      (management) => management.id === id
    );

    if (indexToUpdate < 0) {
      throw new ManagementNotFound();
    }

    const updated = {
      ...currentManagement[indexToUpdate],
      ...data,
    };

    updated.updateAt = new Date();

    currentManagement[indexToUpdate] = updated;

    const managementDataString = JSON.stringify(currentManagement);
    await this.fileService.write(fileName, managementDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const currentManagement = await this.fetch();

    const indexToDelete = currentManagement.findIndex(
      (management) => management.id === id
    );

    if (indexToDelete < 0) {
      throw new ManagementNotFound();
    }

    currentManagement.splice(indexToDelete, 1);

    const managementDataString = JSON.stringify(currentManagement);
    await this.fileService.write(fileName, managementDataString);

    return currentManagement;
  }
}
