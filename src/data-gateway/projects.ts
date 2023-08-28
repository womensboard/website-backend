import { PROJECTS_FILE_ENV } from 'config';
import { type ProjectsDetail, type ProjectsDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IProjectsDataGateway } from 'usecases';
import { ProjectNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

export class ProjectsDataGateway implements IProjectsDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<ProjectsDetail[]> {
    const fileName = PROJECTS_FILE_ENV;

    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching projects', error);
      return [];
    }
  }

  async create(data: ProjectsDetailInput): Promise<ProjectsDetail> {
    const fileName = PROJECTS_FILE_ENV;

    const currentProjects = await this.fetch();

    const newProject = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    currentProjects.push(newProject);
    const newDataString = JSON.stringify(currentProjects);
    await this.fileService.write(fileName, newDataString);

    return newProject;
  }

  async update(id: string, data: ProjectsDetailInput): Promise<ProjectsDetail> {
    const fileName = PROJECTS_FILE_ENV;

    const currentProjects = await this.fetch();

    const indexToUpdate = currentProjects.findIndex(
      (project) => project.id === id
    );

    if (indexToUpdate < 0) {
      throw new ProjectNotFound();
    }

    const updated = {
      ...currentProjects[indexToUpdate],
      ...data,
    };
    updated.updatedAt = new Date();

    currentProjects[indexToUpdate] = updated;

    const newDataString = JSON.stringify(currentProjects);
    await this.fileService.write(fileName, newDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const fileName = PROJECTS_FILE_ENV;

    const currentProjects = await this.fetch();

    const indexToDelete = currentProjects.findIndex(
      (project) => project.id === id
    );

    if (indexToDelete < 0) {
      throw new ProjectNotFound();
    }

    currentProjects.splice(indexToDelete, 1);

    const newDataString = JSON.stringify(currentProjects);
    await this.fileService.write(fileName, newDataString);

    return currentProjects;
  }
}
