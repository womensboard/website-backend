import { type AboutPageFeatureDataGateway } from 'data-gateway/about-feature';
import {
  type AboutPageFeatureDetail,
  type AboutPageFeatureDetailInput,
} from 'entities';
import { aboutFeatureSchema } from 'schemas/about-feature';
import { validateData } from 'utils/helpers';

export class AboutFeatureUsecase {
  constructor(private readonly dataGateway: AboutPageFeatureDataGateway) {}

  async fetch(): Promise<AboutPageFeatureDetail> {
    return await this.dataGateway.fetch();
  }

  async update(
    data: AboutPageFeatureDetailInput
  ): Promise<AboutPageFeatureDetail> {
    const aboutFeatueData = validateData(aboutFeatureSchema, data);

    return await this.dataGateway.update(aboutFeatueData);
  }
}
