import { type ActivityDetail } from 'entities';
import { type IActivitiesDataGateway } from './interfaces';
import { validateData } from 'utils/helpers';
import { activiesSchema } from 'schemas/activities';

export class ActivitiesUsecase {
  constructor(private readonly dataGateway: IActivitiesDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: ActivityDetail) {
    const activitiesData = validateData(activiesSchema, data);
    return await this.dataGateway.create(activitiesData);
  }

  async update(idToUpdate: string, data: ActivityDetail) {
    const activitiesData = validateData(activiesSchema, data);
    return await this.dataGateway.update(idToUpdate, activitiesData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
