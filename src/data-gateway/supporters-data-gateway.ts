import { SUPPORTERS_ENV } from 'config';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type ISupportersDataGateway } from 'usecases';
import type { SupportersDetail, SupportersDetailInput } from 'entities';

const fileName = SUPPORTERS_ENV;

export class SupportersDataGateway implements ISupportersDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<SupportersDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error fetching Supporters', error);

      return {
        description:
          'Some of our partners includes International partners, Embassies and Corporate Organizations',
        supporters: [
          'America Embassy – Self Help Project',
          'American Initiatives for Social Development',
          'Anjos Tech',
          'Arise Foundation',
          'Association for Cultural, Technical and Educational Corporation ACTEC/AEDC Belgian',
          'Brande Aristotle',
          'CSTWF- Combined Services Third World Fund',
          'Cummins Energy',
          'Cummins West Africa Ltd',
          'Chikki Food Production',
          'Diamond Bank',
          'Donkem Construction',
          'ELIS',
          'European Commission',
          'Fundación Codespa',
          'Fundacion Promocion Social de la Cultura',
          'Harambee International',
          'Institut Européen de Coopération et de Développement (IECD)',
          'FAS',
          'Fidelity Bank',
          'FPSC- Fundacion Promocion Social de la Cultura',
          'Fundacion Promocion Social de la Cultura',
          'Fundación FABRE',
          'IFFD- - International Federation for Family Development',
          'ICEP- Institute of European Certificate of Personnel',
          'Limmat Foundation',
          'OXFAM',
          'Polengi Geincarlo',
          'Real Tech',
          'Rhein-Donau-Stiftung e.V.',
          'Small World',
          'Sterling Capital',
          'Stavros Niarchos Foundation',
          'Swiss Friends',
          'United Nations Development Programme (UNDP)',
          'United Nations Information Centre (UNIC)',
          "United Nations International Children's Emergency Fund (UNICEF)",
          'University of Lagos, Department of Adult Education',
          'Wonder Foundation',
          'Yaba College of Technology, Centre for Entrepreneurship Development',
          'Zenith Bank',
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async create(data: SupportersDetailInput): Promise<SupportersDetail> {
    const currentSupporters = await this.fetch();

    const newSupporters = {
      ...currentSupporters,
      ...data,
      updatedAt: new Date(),
    };

    const supportersDataString = JSON.stringify(newSupporters);
    await this.fileService.write(fileName, supportersDataString);

    return newSupporters;
  }
}
