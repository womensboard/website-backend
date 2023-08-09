import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { type IFileService } from './flat-file-types';

export interface AWSConfig {
  bucketName: string;
  accessKeyID?: string;
  accessSecret?: string;
  region: string;
}
export class S3Service implements IFileService {
  private readonly s3Client: S3Client;
  private readonly bucketName: string;
  constructor(config: AWSConfig) {
    if (config.accessKeyID && config.accessSecret) {
      this.s3Client = new S3Client({
        region: config.region,
        credentials: {
          accessKeyId: config.accessKeyID,
          secretAccessKey: config.accessSecret,
        },
      });
    } else {
      this.s3Client = new S3Client({
        region: config.region,
      });
    }
    this.bucketName = config.bucketName;
  }

  public async read(keyName: string) {
    try {
      const command = new GetObjectCommand({
        Key: `db/${keyName}`,
        Bucket: this.bucketName,
      });

      const response = await this.s3Client.send(command);
      const body = await response.Body?.transformToString();

      return body as string;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async write(keyName: string, data: string) {
    const command = new PutObjectCommand({
      Key: `db/${keyName}`,
      Bucket: this.bucketName,
      Body: data,
    });

    await this.s3Client.send(command);
  }

  public async generateImageUploadURL(keyName: string) {
    const command = new PutObjectCommand({
      Key: `images/${keyName}`,
      Bucket: this.bucketName,
    });
    return await getSignedUrl(this.s3Client, command, { expiresIn: 3600 });
  }
}
