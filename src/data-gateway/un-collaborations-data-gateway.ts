import { UN_COLLABORATIONS_ENV } from 'config';
import {
  type UNCollaborationDetail,
  type UNCollaborationDetailInput,
} from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IUNCollaborationDataGateway } from 'usecases';
import { UnCollaborationNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

export class UNCollaborationsDataGateway
  implements IUNCollaborationDataGateway
{
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<UNCollaborationDetail[]> {
    try {
      const fileName = UN_COLLABORATIONS_ENV;

      const fileContent = await this.fileService.read(fileName);

      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching UN Collaborations', error);
      return [];
    }
  }

  async create(
    data: UNCollaborationDetailInput
  ): Promise<UNCollaborationDetail> {
    const fileName = UN_COLLABORATIONS_ENV;

    const currentUnCollaborations = await this.fetch();

    const newUnCollaboration = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentUnCollaborations.push(newUnCollaboration);

    const newDataString = JSON.stringify(currentUnCollaborations);
    await this.fileService.write(fileName, newDataString);

    return newUnCollaboration;
  }

  async update(
    id: string,
    data: UNCollaborationDetailInput
  ): Promise<UNCollaborationDetail> {
    const fileName = UN_COLLABORATIONS_ENV;

    const currentUnCollaborations = await this.fetch();

    const indexToUpdate = currentUnCollaborations.findIndex(
      (currentUnCollaboration) => currentUnCollaboration.id === id
    );

    if (indexToUpdate < 0) {
      throw new UnCollaborationNotFound();
    }

    const updateCollaboration = {
      ...currentUnCollaborations[indexToUpdate],
      ...data,
    };
    updateCollaboration.updatedAt = new Date();

    currentUnCollaborations[indexToUpdate] = updateCollaboration;

    const newDataString = JSON.stringify(currentUnCollaborations);
    await this.fileService.write(fileName, newDataString);

    return updateCollaboration;
  }

  async delete(id: string): Promise<any> {
    const fileName = UN_COLLABORATIONS_ENV;

    const currentUnCollaborations = await this.fetch();

    const indexToDelete = currentUnCollaborations.findIndex(
      (currentUnCollaboration) => currentUnCollaboration.id === id
    );

    if (indexToDelete < 0) {
      throw new UnCollaborationNotFound();
    }

    currentUnCollaborations.splice(indexToDelete, 1);

    const newDataString = JSON.stringify(currentUnCollaborations);
    await this.fileService.write(fileName, newDataString);

    return currentUnCollaborations;
  }
}
