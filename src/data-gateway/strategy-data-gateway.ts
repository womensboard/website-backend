import { STRATEGY_ENV } from 'config';
import { type StrategyDetailInput, type StrategyDetail } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IStrategyDataGateway } from 'usecases';

const fileName = STRATEGY_ENV;

export class StrategyDataGateway implements IStrategyDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<StrategyDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Strategy', error);
      return {
        content:
          'We pursue our objectives through educational activities carried out by Projects set-up with a long term vision in different parts of the country. The Lagoon Executive Secretarial College was the first project of the organization established in 1973. It offered young women a specialized professional training for administrative and secretarial career. The Secretarial College was discontinued in 1995 so as to attend to more relevant development Projects.',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async update(data: StrategyDetailInput): Promise<StrategyDetail> {
    const currentStrategy = await this.fetch();

    const updated = {
      ...currentStrategy,
      ...data,
    };

    updated.updatedAt = new Date();

    const strategyDataString = JSON.stringify(updated);
    await this.fileService.write(fileName, strategyDataString);

    return updated;
  }
}
