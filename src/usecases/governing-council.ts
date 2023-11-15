import { type GoverningCouncilDetail } from 'entities';
import { governingCouncilDetailsSchema } from 'schemas/governing-council';
import { validateData } from 'utils/helpers';
import { type IGoverningCouncilDataGateway } from './interfaces';

export class GoverningCouncilUseCase {
  constructor(private readonly datagateway: IGoverningCouncilDataGateway) {}

  async fecth() {
    return await this.datagateway.fetch();
  }

  async create(data: GoverningCouncilDetail) {
    const governingCouncilData = validateData(
      governingCouncilDetailsSchema,
      data
    );
    return await this.datagateway.create(governingCouncilData);
  }

  async update(idToUpdate: string, data: GoverningCouncilDetail) {
    const governingCouncilData = validateData(
      governingCouncilDetailsSchema,
      data
    );
    return await this.datagateway.update(idToUpdate, governingCouncilData);
  }

  async delete(idToDelete: string) {
    return await this.datagateway.delete(idToDelete);
  }
}
