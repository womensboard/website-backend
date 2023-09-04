import { UNCollaborationsDataGateway } from 'data-gateway/un-collaborations-data-gateway';
import { UNCollaborationDetail, UNCollaborationDetailInput } from 'entities';
import { valid } from 'joi';
import { unCollaborationSchema } from 'schemas/un-collaboration';
import { validateData } from 'utils/helpers';

export class UnCollaborationsUsecase {
  constructor(private readonly datagateway: UNCollaborationsDataGateway) {}

  async fetch(): Promise<UNCollaborationDetail[]> {
    return await this.datagateway.fetch();
  }

  async create(
    data: UNCollaborationDetailInput
  ): Promise<UNCollaborationDetail> {
    const inputData = validateData(unCollaborationSchema, data);
    return await this.datagateway.create(inputData);
  }

  async update(
    idToUpdate: string,
    data: UNCollaborationDetailInput
  ): Promise<UNCollaborationDetail> {
    const inputData = validateData(unCollaborationSchema, data);
    return await this.datagateway.update(idToUpdate, inputData);
  }

  async delete(idToDelete: string): Promise<any> {
    return await this.datagateway.delete(idToDelete);
  }
}
