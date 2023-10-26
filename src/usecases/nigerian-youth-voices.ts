import { type NigerianYouthVoicesDetailInput } from 'entities';
import { nigerianYouthVoicesDetailSchema } from 'schemas/nigerian-youth-voices';
import { validateData } from 'utils/helpers';
import { type INigerianYouthVoicesDataGateway } from './interfaces';

export class NIgerianYouthVoicesUsecase {
  constructor(private readonly datagateway: INigerianYouthVoicesDataGateway) {}

  async fetch() {
    return await this.datagateway.fetch();
  }

  async update(data: NigerianYouthVoicesDetailInput) {
    const voiceData = validateData(nigerianYouthVoicesDetailSchema, data);
    return await this.datagateway.update(voiceData);
  }
}
