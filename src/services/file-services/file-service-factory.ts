import { AWS_ACCESS_ID, AWS_SECRET, FEATURE_TOGGLE } from 'config';
import { type IFileService } from './flat-file-types';
import { LocalFileService } from './local-file-service';
import { type AWSConfig, S3Service } from './s3-service';

export class FileServiceFactory {
  static create(aws?: AWSConfig): IFileService {
    let fileService = new LocalFileService();

    if (FEATURE_TOGGLE.has('use_s3')) {
      if (!aws?.bucketName) {
        throw new Error('AWS config is missing. App would not start ');
      }

      fileService = new S3Service({
        ...aws,
        accessSecret: aws.accessSecret || AWS_SECRET,
        accessKeyID: aws.accessKeyID || AWS_ACCESS_ID,
      });
    }
    return fileService;
  }
}
