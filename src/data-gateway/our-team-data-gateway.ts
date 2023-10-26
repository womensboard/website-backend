import { OUR_TEAM_ENV } from 'config';
import { type OurTeamDetailInput, type OurTeamDetail } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IOurTeamDataGateway } from 'usecases';

const fileName = OUR_TEAM_ENV;

export class OurTeamDataGateway implements IOurTeamDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<OurTeamDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Our Team', error);
      return {
        content:
          'Our organization is managed by a Council of Management chosen by the Board. The Council attends to the promotion and actual setting-up of new Projects as well as to their possible further development. The day-to-day running of each Project, once it starts is entrusted to Management Teams who enjoy delegated authority and are accountable to the Council. Most of the Management Teams count on the help of a Development Committee made up of a group of professionals who work voluntarily, with advisory capacity assisting the Management Team technically and financially',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async update(data: OurTeamDetailInput): Promise<OurTeamDetail> {
    const currentTeam = await this.fetch();

    const updated = {
      ...currentTeam,
      ...data,
    };

    updated.updatedAt = new Date();

    const teamDataString = JSON.stringify(updated);
    await this.fileService.write(fileName, teamDataString);

    return updated;
  }
}
