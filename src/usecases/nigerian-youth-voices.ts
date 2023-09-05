import { type NigerianYouthVoicesDetailInput } from 'entities';
import { nigerianYouthVoicesDetailSchema } from 'schemas/nigerian-youth-voices';
import { validateData } from 'utils/helpers';
import { type INigerianYouthVoicesDataGateway } from './interfaces';

export class NIgerianYouthVoicesUsecase {
  constructor(private readonly datagateway: INigerianYouthVoicesDataGateway) {}

  async fetch() {
    return await this.datagateway.fetch();
  }

  async create(data: NigerianYouthVoicesDetailInput) {
    const voiceData = validateData(nigerianYouthVoicesDetailSchema, data);
    return await this.datagateway.create(voiceData);
  }

  async update(idToUpdate: string, data: NigerianYouthVoicesDetailInput) {
    const voiceData = validateData(nigerianYouthVoicesDetailSchema, data);
    return await this.datagateway.update(idToUpdate, voiceData);
  }

  async delete(idToDelete: string) {
    return await this.datagateway.delete(idToDelete);
  }
}
