import { VALUE_METRICS_ENV } from 'config';
import {
  type ValueMetricsDetailInput,
  type ValueMetricsDetail,
} from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IValueMetricsDataGateway } from 'usecases';

export class ValueMetricsDataGateway implements IValueMetricsDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<ValueMetricsDetail> {
    const fileName = VALUE_METRICS_ENV;

    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Value Metrics', error);
      return {
        metricOneLabel: 'Partners',
        metricOneValue: '100+',
        metricTwoLabel: 'Projects',
        metricTwoValue: '1000+',
        metricThreeLabel: 'Beneficiaries',
        metricThreeValue: '1M+',
        metricFourLabel: 'Collaborations',
        metricFourValue: '1000+',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async update(data: ValueMetricsDetailInput): Promise<ValueMetricsDetail> {
    const fileName = VALUE_METRICS_ENV;

    const fileContent = await this.fetch();

    const updated = {
      ...fileContent,
      ...data,
    };

    updated.updatedAt = new Date();

    const metricDataString = JSON.stringify(updated);
    await this.fileService.write(fileName, metricDataString);

    return updated;
  }
}
