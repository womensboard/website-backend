import { ABOUT_FEATURE_ENV } from 'config';
import {
  type AboutPageFeatureDetailInput,
  type AboutPageFeatureDetail,
} from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IAboutPageFeatureDataGateway } from 'usecases';

const fileName = ABOUT_FEATURE_ENV;

export class AboutPageFeatureDataGateway
  implements IAboutPageFeatureDataGateway
{
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<AboutPageFeatureDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Value Metrics', error);
      return {
        sectionOne: {
          header: 'Mission Statement',
          subHeader:
            'Our misson is : To foster the development of the individual Nigerian woman, empowering her with education and high standards of work and commitment of service to the community so as to make her a citizen better equipped to participate in the social progress of teh country',
        },
        sectionTwo: {
          header: 'Funding',
          subHeader: '',
        },
        sectionThree: {
          header: 'Objectives',
          subHeader: '',
        },
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async update(
    data: AboutPageFeatureDetailInput
  ): Promise<AboutPageFeatureDetail> {
    const currentFeature = await this.fetch();

    const updated = {
      ...currentFeature,
      ...data,
    };

    updated.updatedAt = new Date();

    const metricDataString = JSON.stringify(updated);
    await this.fileService.write(fileName, metricDataString);

    return updated;
  }
}
