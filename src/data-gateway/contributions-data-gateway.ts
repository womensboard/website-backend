import { CONTRIBUTIONS_ENV } from 'config';
import {
  type ContributionsDetail,
  type ContributionsDetailInput,
} from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IContributionsDataGateway } from 'usecases';
import { ContributionsNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

const fileName = CONTRIBUTIONS_ENV;
export class ContributionsDataGateway implements IContributionsDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<ContributionsDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Contributions', error);
      return [];
    }
  }

  async create(data: ContributionsDetailInput): Promise<ContributionsDetail> {
    const currentContributions = await this.fetch();

    const newContributions = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentContributions.push(newContributions);

    const ContributionsDataString = JSON.stringify(currentContributions);
    await this.fileService.write(fileName, ContributionsDataString);

    return newContributions;
  }

  async update(
    id: string,
    data: ContributionsDetailInput
  ): Promise<ContributionsDetail> {
    const currentContributions = await this.fetch();

    const indexToUpdate = currentContributions.findIndex(
      (contributions) => contributions.id === id
    );

    if (indexToUpdate < 0) {
      throw new ContributionsNotFound();
    }

    const updated = {
      ...currentContributions[indexToUpdate],
      ...data,
    };

    updated.updatedAt = new Date();

    currentContributions[indexToUpdate] = updated;

    const contributionsDataString = JSON.stringify(currentContributions);
    await this.fileService.write(fileName, contributionsDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const currentContributions = await this.fetch();

    const indexToDelete = currentContributions.findIndex(
      (contributions) => contributions.id === id
    );

    if (indexToDelete < 0) {
      throw new ContributionsNotFound();
    }

    currentContributions.splice(indexToDelete, 1);

    const contributionsDataString = JSON.stringify(currentContributions);
    await this.fileService.write(fileName, contributionsDataString);

    return currentContributions;
  }

  async filterByYear(year: string): Promise<ContributionsDetail[]> {
    const currentContributions = await this.fetch();

    const contributionsForYear = currentContributions.filter(
      (contribution) => contribution.year === year
    );

    return contributionsForYear;
  }

  async fetchById(id: string): Promise<ContributionsDetail> {
    const currentContributions = await this.fetch();

    const contributionIndex = currentContributions.findIndex(
      (contribution) => contribution.id === id
    );

    const contribution = currentContributions[contributionIndex];

    return contribution;
  }
}
