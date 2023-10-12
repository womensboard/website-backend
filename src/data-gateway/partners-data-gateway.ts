import { PARTNERS_SECTION_ENV } from 'config';
import { type PartnersDetail, type PartnersDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IPartnersDataGateway } from 'usecases';
import { PartnerNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = PARTNERS_SECTION_ENV;

export class PartnersDataGateway implements IPartnersDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<PartnersDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching Partners', error);
      return [];
    }
  }

  async create(data: PartnersDetailInput): Promise<PartnersDetail> {
    const currentPartners = await this.fetch();

    const newPartner = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    currentPartners.push(newPartner);
    const partnerDataString = JSON.stringify(currentPartners);
    await this.fileService.write(fileName, partnerDataString);

    return newPartner;
  }

  async update(id: string, data: PartnersDetailInput): Promise<PartnersDetail> {
    const currentPartners = await this.fetch();

    const indexToUpdate = currentPartners.findIndex(
      (partner) => partner.id === id
    );

    if (indexToUpdate < 0) {
      throw new PartnerNotFound();
    }

    const updated = {
      ...currentPartners[indexToUpdate],
      ...data,
    };
    updated.updatedAt = new Date();

    currentPartners[indexToUpdate] = updated;

    const partnerDataString = JSON.stringify(currentPartners);
    await this.fileService.write(fileName, partnerDataString);

    return updated;
  }

  async delete(id: string): Promise<void> {
    const currentPartners = await this.fetch();

    const indexToDelete = currentPartners.findIndex(
      (partner) => partner.id === id
    );

    if (indexToDelete < 0) {
      throw new PartnerNotFound();
    }

    currentPartners.splice(indexToDelete, 1);

    const partnerDataString = JSON.stringify(currentPartners);
    await this.fileService.write(fileName, partnerDataString);
  }
}
