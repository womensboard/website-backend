import { type BoardMembersDetail } from 'entities';
import { boardMembersDetailsSchema } from 'schemas/board-members';
import { validateData } from 'utils/helpers';
import { type IBoardMembersDataGateway } from './interfaces';

export class BoardMemberUseCase {
  constructor(private readonly datagateway: IBoardMembersDataGateway) {}

  async fecth() {
    return await this.datagateway.fetch();
  }

  async create(data: BoardMembersDetail) {
    const boardMemberData = validateData(boardMembersDetailsSchema, data);
    return await this.datagateway.create(boardMemberData);
  }

  async update(idToUpdate: string, data: BoardMembersDetail) {
    const boardMemberData = validateData(boardMembersDetailsSchema, data);
    return await this.datagateway.update(idToUpdate, boardMemberData);
  }

  async delete(idToDelete: string) {
    return await this.datagateway.delete(idToDelete);
  }
}
