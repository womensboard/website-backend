import { BOARD_MEMBERS_FILE_ENV } from 'config';
import {
  type BoardMembersDetail,
  type BoardMembersDetailInput,
} from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IBoardMembersDataGateway } from 'usecases';
import { BoardMemberNotFound } from 'utils/errors';
import { v4 as uuidv4 } from 'uuid';

export class BoardMembersDataGateway implements IBoardMembersDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<BoardMembersDetail[]> {
    const fileName = BOARD_MEMBERS_FILE_ENV;

    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching Trustees', error);
      return [];
    }
  }

  async create(data: BoardMembersDetail): Promise<BoardMembersDetailInput> {
    const fileName = BOARD_MEMBERS_FILE_ENV;

    const currentBoardMembers = await this.fetch();

    const newBoardMembers = {
      ...data,
      id: uuidv4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    currentBoardMembers.push(newBoardMembers);
    const newDataString = JSON.stringify(currentBoardMembers);
    await this.fileService.write(fileName, newDataString);

    return newBoardMembers;
  }

  async update(
    id: string,
    data: BoardMembersDetail
  ): Promise<BoardMembersDetailInput> {
    const fileName = BOARD_MEMBERS_FILE_ENV;

    const currentBoardMembers = await this.fetch();

    const indexToUpdate = currentBoardMembers.findIndex(
      (boardMember) => boardMember.id === id
    );

    if (indexToUpdate < 0) {
      throw new BoardMemberNotFound();
    }

    const updated = {
      ...currentBoardMembers[indexToUpdate],
      ...data,
    };

    currentBoardMembers[indexToUpdate] = updated;

    const newDataString = JSON.stringify(currentBoardMembers);
    await this.fileService.write(fileName, newDataString);

    return updated;
  }

  async delete(id: string): Promise<any> {
    const fileNmae = BOARD_MEMBERS_FILE_ENV;

    const currentBoardMembers = await this.fetch();

    const indexToDelete = currentBoardMembers.findIndex(
      (boardMembers) => boardMembers.id === id
    );

    if (indexToDelete < 0) {
      throw new BoardMemberNotFound();
    }

    currentBoardMembers.splice(indexToDelete, 1);

    const newDataString = JSON.stringify(currentBoardMembers);
    await this.fileService.write(fileNmae, newDataString);

    return currentBoardMembers;
  }
}
