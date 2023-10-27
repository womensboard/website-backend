import { type OurTeamDataGateway } from 'data-gateway/our-team-data-gateway';
import { type OurTeamDetail, type OurTeamDetailInput } from 'entities';
import { ourTeamSchema } from 'schemas/our-team';
import { validateData } from 'utils/helpers';

export class OurTeamUsecase {
  constructor(private readonly dataGateway: OurTeamDataGateway) {}

  async fetch(): Promise<OurTeamDetail> {
    return await this.dataGateway.fetch();
  }

  async update(data: OurTeamDetailInput): Promise<OurTeamDetail> {
    const ourTeamData = validateData(ourTeamSchema, data);

    return await this.dataGateway.update(ourTeamData);
  }
}
