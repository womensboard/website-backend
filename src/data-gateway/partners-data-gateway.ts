import { PARTNERS_SECTION_ENV } from 'config';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IPartnersDataGateway } from 'usecases';

import { defaultPartners } from './defaultPartners';
import type { PartnersDetail, PartnersDetailInput } from 'entities';

const fileName = PARTNERS_SECTION_ENV;

export class PartnersDataGateway implements IPartnersDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<PartnersDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching Partners', error);

      return defaultPartners;
    }
  }

  async create(data: PartnersDetailInput): Promise<PartnersDetail> {
    const currentPartners = await this.fetch();

    const newPartner = {
      ...currentPartners,
      ...data,
    };
    const partnerDataString = JSON.stringify(newPartner);
    await this.fileService.write(fileName, partnerDataString);

    return newPartner;
  }
}
