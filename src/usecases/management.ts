import { type ManagementDetail } from 'entities';
import { managementSchema } from 'schemas/management';
import { validateData } from 'utils/helpers';
import { type IManagementDataGateway } from './interfaces';

export class ManagementUseCase {
  constructor(private readonly dataGateway: IManagementDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: ManagementDetail) {
    const managementData = validateData(managementSchema, data);
    return await this.dataGateway.create(managementData);
  }

  async update(idToUpdate: string, data: ManagementDetail) {
    const managementData = validateData(managementSchema, data);
    return await this.dataGateway.update(idToUpdate, managementData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
