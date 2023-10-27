import { AWS_CONFIG, FEATURE_TOGGLE } from 'config';
import { type IFileService } from './flat-file-types';
import { LocalFileService } from './local-file-service';
import { S3Service } from './s3-service';

export class FileServiceFactory {
  static create(): IFileService {
    let fileService = new LocalFileService();

    if (FEATURE_TOGGLE.has('use_s3')) {
      if (!AWS_CONFIG?.bucketName) {
        throw new Error('AWS config is missing. App would not start ');
      }

      fileService = new S3Service(AWS_CONFIG);
    }
    return fileService;
  }
}
