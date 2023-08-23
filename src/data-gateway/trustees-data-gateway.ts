import { TRUSTEES_FILE_ENV } from 'config';
import { type TrusteesDetail, type TrusteesDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type ITrusteesDataGateway } from 'usecases';
import { TrusteeNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

export class TrusteesDataGateway implements ITrusteesDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<TrusteesDetail[]> {
    const fileName = TRUSTEES_FILE_ENV;

    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('|Error Fetching Trustees', error);
      return [];
    }
  }

  async create(data: TrusteesDetail): Promise<TrusteesDetailInput> {
    const fileName = TRUSTEES_FILE_ENV;

    const currentTrustees = await this.fetch();

    const newTrustee = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentTrustees.push(newTrustee);

    const newDataString = JSON.stringify(currentTrustees);
    await this.fileService.write(fileName, newDataString);

    return newTrustee;
  }

  async update(id: string, data: TrusteesDetail): Promise<TrusteesDetailInput> {
    const fileName = TRUSTEES_FILE_ENV;

    const currentTrustees = await this.fetch();

    const indexToUpdate = currentTrustees.findIndex(
      (trustee) => trustee.id === id
    );

    if (indexToUpdate < 0) {
      throw new TrusteeNotFound();
    }

    const updated = {
      ...currentTrustees[indexToUpdate],
      ...data,
    };

    currentTrustees[indexToUpdate] = updated;

    const newDataString = JSON.stringify(currentTrustees);
    await this.fileService.write(fileName, newDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const fileName = TRUSTEES_FILE_ENV;

    const currentTrustees = await this.fetch();

    const indexToDelete = currentTrustees.findIndex(
      (trustee) => trustee.id === id
    );

    if (indexToDelete < 0) {
      throw new TrusteeNotFound();
    }

    currentTrustees.splice(indexToDelete, 1);

    const newDataString = JSON.stringify(currentTrustees);
    await this.fileService.write(fileName, newDataString);

    return currentTrustees;
  }
}
