import { type ValueMetricsDataGateway } from 'data-gateway/value-metrics';
import {
  type ValueMetricsDetail,
  type ValueMetricsDetailInput,
} from 'entities';
import { valueMetricsSchema } from 'schemas/value-metrics';
import { validateData } from 'utils/helpers';

export class ValueMetricsUsecase {
  constructor(private readonly dataGateway: ValueMetricsDataGateway) {}

  async fetch(): Promise<ValueMetricsDetail> {
    return await this.dataGateway.fetch();
  }

  async update(data: ValueMetricsDetailInput): Promise<ValueMetricsDetail> {
    const valueMetricData = validateData(valueMetricsSchema, data);

    return await this.dataGateway.update(valueMetricData);
  }
}
