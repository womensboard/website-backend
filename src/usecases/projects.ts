import { type ProjectsDetail } from 'entities';
import { projectDetailsSchema } from 'schemas/projects';
import { validateData } from 'utils/helpers';
import { type IProjectsDataGateway } from './interfaces';

export class ProjectsUseCase {
  constructor(private readonly dataGateway: IProjectsDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: ProjectsDetail) {
    const newData = validateData(projectDetailsSchema, data);
    return await this.dataGateway.create(newData);
  }

  async update(idToUpdate: string, data: ProjectsDetail) {
    const newData = validateData(projectDetailsSchema, data);
    return await this.dataGateway.update(idToUpdate, newData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
