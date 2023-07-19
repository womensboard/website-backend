import { type IFileService } from 'services/file-services/flat-file-types';
import { v4 as uuidv4 } from 'uuid';

export class GenerateUploadURLUsecase {
  constructor(private readonly fileService: IFileService) {}
  async execute(filename: string) {
    const lastDotIndex = filename.lastIndexOf('.');
    const fileType = filename.slice(lastDotIndex);

    const fileNameWithoutExtension = filename.slice(0, lastDotIndex);
    const keyName = `${fileNameWithoutExtension}-${uuidv4()}-${fileType}`;
    const url = await this.fileService.generateImageUploadURL(keyName);

    return {
      url,
      keyName,
    };
  }
}
