import { type TrusteesDetail } from 'entities';
import { trusteesDetailsSchema } from 'schemas/trustees';
import { validateData } from 'utils/helpers';
import { type ITrusteesDataGateway } from './interfaces';

export class TrusteesUseCase {
  constructor(private readonly dataGateway: ITrusteesDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: TrusteesDetail) {
    const trusteeData = validateData(trusteesDetailsSchema, data);
    return await this.dataGateway.create(trusteeData);
  }

  async update(idToUpdate: string, data: TrusteesDetail) {
    const trusteeData = validateData(trusteesDetailsSchema, data);
    return await this.dataGateway.update(idToUpdate, trusteeData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
