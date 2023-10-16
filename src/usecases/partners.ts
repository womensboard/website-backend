import { type PartnersDetail } from 'entities';
import { partnersDetailSchema } from 'schemas/partners';
import { validateData } from 'utils/helpers';
import { type IPartnersDataGateway } from './interfaces';

export class PartnersUseCase {
  constructor(private readonly dataGateway: IPartnersDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: PartnersDetail) {
    const newData = validateData(partnersDetailSchema, data);
    return await this.dataGateway.create(newData);
  }

  async update(idToUpdate: string, data: PartnersDetail) {
    const newData = validateData(partnersDetailSchema, data);
    return await this.dataGateway.update(idToUpdate, newData);
  }

  async delete(idToDelete: string) {
    return await this.dataGateway.delete(idToDelete);
  }
}
