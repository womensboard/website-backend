import { type ContributionsDetail } from 'entities';
import { contributionSchema } from 'schemas/contribution';
import { validateData } from 'utils/helpers';
import { type IContributionsDataGateway } from './interfaces';

export class ContributionsUseCase {
  constructor(private readonly dataGateway: IContributionsDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: ContributionsDetail) {
    const contributionsData = validateData(contributionSchema, data);
    return await this.dataGateway.create(contributionsData);
  }

  async update(idToUpdate: string, data: ContributionsDetail) {
    const contributionsData = validateData(contributionSchema, data);
    return await this.dataGateway.update(idToUpdate, contributionsData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }

  async filterByYear(year: string) {
    return await this.dataGateway.filterByYear(year);
  }

  async fetchById(id: string) {
    return await this.dataGateway.fetchById(id);
  }
}
