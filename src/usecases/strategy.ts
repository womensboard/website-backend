import { type StrategyDataGateway } from 'data-gateway/strategy-data-gateway';
import { type StrategyDetail, type StrategyDetailInput } from 'entities';
import { strategySchema } from 'schemas/strategy';
import { validateData } from 'utils/helpers';

export class StrategyUsecase {
  constructor(private readonly dataGateway: StrategyDataGateway) {}

  async fetch(): Promise<StrategyDetail> {
    return await this.dataGateway.fetch();
  }

  async update(data: StrategyDetailInput): Promise<StrategyDetail> {
    const strategyData = validateData(strategySchema, data);

    return await this.dataGateway.update(strategyData);
  }
}
