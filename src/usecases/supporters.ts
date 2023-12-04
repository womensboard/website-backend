import { type SupportersDetail } from 'entities';
import { supportersSchema } from 'schemas/supporters';
import { validateData } from 'utils/helpers';
import { type ISupportersDataGateway } from './interfaces';

export class SupportersUseCase {
  constructor(private readonly dataGateway: ISupportersDataGateway) {}

  async fetch() {
    return await this.dataGateway.fetch();
  }

  async create(data: SupportersDetail) {
    const newSupporters = validateData(supportersSchema, data);
    return await this.dataGateway.create(newSupporters);
  }
}
