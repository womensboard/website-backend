import { NIGERIAN_YOUTH_VOICES_ENV } from 'config';
import {
  type NigerianYouthVoicesDetail,
  type NigerianYouthVoicesDetailInput,
} from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type INigerianYouthVoicesDataGateway } from 'usecases';

export class NigerianYouthVoicesDataGateway
  implements INigerianYouthVoicesDataGateway
{
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<NigerianYouthVoicesDetail> {
    const fileNmae = NIGERIAN_YOUTH_VOICES_ENV;

    try {
      const fileContent = await this.fileService.read(fileNmae);

      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Nigerian Youth voices', error);
      return {
        subHeading:
          'Nigerian Youth Voices” is an initiative of Women’s Board to advance the presence of young women in the UN. The group is made out of undergraduates and young professionals (aged 18 – 35) wishing to make their voices heard in the UN international debate',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async update(
    data: NigerianYouthVoicesDetailInput
  ): Promise<NigerianYouthVoicesDetail> {
    const fileName = NIGERIAN_YOUTH_VOICES_ENV;

    const currentVoices = await this.fetch();

    const updated = {
      ...currentVoices,
      ...data,
    };

    updated.updatedAt = new Date();

    const voiceDataString = JSON.stringify(updated);
    await this.fileService.write(fileName, voiceDataString);

    return updated;
  }
}
