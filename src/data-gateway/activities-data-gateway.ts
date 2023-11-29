import { type IActivitiesDataGateway } from 'usecases';
import { type ActivityDetail, type ActivityDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { ACTIVITIES_ENV } from 'config';
import { v4 as uuidv4 } from 'uuid';
import { ActivitiesNotFound } from 'utils/errors';

const fileName = ACTIVITIES_ENV;

export class ActivitiesDataGateway implements IActivitiesDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<ActivityDetail[]> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching Activities:', error);
      return [];
    }
  }

  async create(data: ActivityDetailInput): Promise<ActivityDetail> {
    const currentActivity = await this.fetch();

    const newActivity = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentActivity.push(newActivity);

    const activityDataString = JSON.stringify(currentActivity);
    await this.fileService.write(fileName, activityDataString);

    return newActivity;
  }

  async update(id: string, data: ActivityDetailInput): Promise<ActivityDetail> {
    const currentActivity = await this.fetch();

    const indexToUpdate = currentActivity.findIndex(
      (activity) => activity.id === id
    );

    if (indexToUpdate < 0) {
      throw new ActivitiesNotFound();
    }
    const updated = {
      ...currentActivity[indexToUpdate],
      ...data,
    };
    currentActivity[indexToUpdate] = updated;

    const activityDataString = JSON.stringify(currentActivity);
    await this.fileService.write(fileName, activityDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const currentActivity = await this.fetch();

    const indexToDelete = currentActivity.findIndex(
      (activity) => activity.id === id
    );

    if (indexToDelete < 0) {
      throw new ActivitiesNotFound();
    }

    currentActivity.splice(indexToDelete, 1);

    const activityDataString = JSON.stringify(currentActivity);
    await this.fileService.write(fileName, activityDataString);

    return currentActivity;
  }
}
