import { GOVERNING_COUNCIL_FILE_ENV } from 'config';
import {
  type GoverningCouncilDetail,
  type GoverningCouncilDetailInput,
} from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IGoverningCouncilDataGateway } from 'usecases';
import { GoverningCouncilNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = GOVERNING_COUNCIL_FILE_ENV;

export class GoverningCouncilDataGateway
  implements IGoverningCouncilDataGateway
{
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<GoverningCouncilDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Governing Council', error);
      return [];
    }
  }

  async create(
    data: GoverningCouncilDetail
  ): Promise<GoverningCouncilDetailInput> {
    const currentGoverningCouncil = await this.fetch();

    const newGoverningCouncil = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentGoverningCouncil.push(newGoverningCouncil);
    const newDataString = JSON.stringify(currentGoverningCouncil);
    await this.fileService.write(fileName, newDataString);

    return newGoverningCouncil;
  }

  async update(
    id: string,
    data: GoverningCouncilDetail
  ): Promise<GoverningCouncilDetailInput> {
    const currentGoverningCouncil = await this.fetch();

    const indexToUpdate = currentGoverningCouncil.findIndex(
      (governingCouncil) => governingCouncil.id === id
    );

    if (indexToUpdate < 0) {
      throw new GoverningCouncilNotFound();
    }

    const updated = {
      ...currentGoverningCouncil[indexToUpdate],
      ...data,
    };

    currentGoverningCouncil[indexToUpdate] = updated;

    const newDataString = JSON.stringify(currentGoverningCouncil);
    await this.fileService.write(fileName, newDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const currentGoverningCouncil = await this.fetch();

    const indexToDelete = currentGoverningCouncil.findIndex(
      (governingCouncil) => governingCouncil.id === id
    );

    if (indexToDelete < 0) {
      throw new GoverningCouncilNotFound();
    }

    currentGoverningCouncil.splice(indexToDelete, 1);

    const newDataString = JSON.stringify(currentGoverningCouncil);
    await this.fileService.write(fileName, newDataString);

    return currentGoverningCouncil;
  }
}
