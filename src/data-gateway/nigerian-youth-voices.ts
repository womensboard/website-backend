import { NIGERIAN_YOUTH_VOICES_ENV } from 'config';
import {
  type NigerianYouthVoicesDetail,
  type NigerianYouthVoicesDetailInput,
} from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type INigerianYouthVoicesDataGateway } from 'usecases';
import { NIgerianYouthVoiceNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

export class NigerianYouthVoicesDataGateway
  implements INigerianYouthVoicesDataGateway
{
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<NigerianYouthVoicesDetail[]> {
    const fileNmae = NIGERIAN_YOUTH_VOICES_ENV;

    try {
      const fileContent = await this.fileService.read(fileNmae);

      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Nigerian Youth voices', error);
      return [];
    }
  }

  async create(
    data: NigerianYouthVoicesDetailInput
  ): Promise<NigerianYouthVoicesDetail> {
    const fileName = NIGERIAN_YOUTH_VOICES_ENV;

    const currentVoices = await this.fetch();

    const newVoice = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentVoices.push(newVoice);
    const newDataString = JSON.stringify(currentVoices);
    await this.fileService.write(fileName, newDataString);

    return newVoice;
  }

  async update(
    id: string,
    data: NigerianYouthVoicesDetailInput
  ): Promise<NigerianYouthVoicesDetail> {
    const fileName = NIGERIAN_YOUTH_VOICES_ENV;

    const currentVoices = await this.fetch();

    const indexToUpdate = currentVoices.findIndex(
      (currentVoice) => currentVoice.id === id
    );

    if (indexToUpdate < 0) {
      throw new NIgerianYouthVoiceNotFound();
    }

    const updated = {
      ...currentVoices[indexToUpdate],
      ...data,
    };

    updated.updatedAt = new Date();

    currentVoices[indexToUpdate] = updated;

    const voiceDataString = JSON.stringify(currentVoices);
    await this.fileService.write(fileName, voiceDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const fileName = NIGERIAN_YOUTH_VOICES_ENV;

    const currentVoices = await this.fetch();

    const indexToDelete = currentVoices.findIndex(
      (currentVoice) => currentVoice.id === id
    );

    if (indexToDelete < 0) {
      throw new NIgerianYouthVoiceNotFound();
    }

    currentVoices.splice(indexToDelete, 1);
    const voiceDataString = JSON.stringify(currentVoices);

    await this.fileService.write(fileName, voiceDataString);

    return currentVoices;
  }
}
