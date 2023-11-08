import { type UNCollaborationSectionDetail } from 'entities';
import { unCollaborationSectionSchema } from 'schemas/un-collaboration-section';
import { validateData } from 'utils/helpers';
import { type IUNCollaborationSectionDataGateway } from './interfaces';

export class UNCollaborationSectionUseCase {
  constructor(
    private readonly dataGateway: IUNCollaborationSectionDataGateway
  ) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: UNCollaborationSectionDetail) {
    const unCollaborationData = validateData(
      unCollaborationSectionSchema,
      data
    );
    return await this.dataGateway.create(unCollaborationData);
  }

  async update(idToUpdate: string, data: UNCollaborationSectionDetail) {
    const unCollaborationData = validateData(
      unCollaborationSectionSchema,
      data
    );
    return await this.dataGateway.update(idToUpdate, unCollaborationData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }

  async filterByYear(year: string, section: string) {
    return await this.dataGateway.filterByYear(year, section);
  }

  async fetchById(id: string) {
    return await this.dataGateway.fetchById(id);
  }
}
