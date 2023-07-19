import fs from 'fs';
import { type IFileService } from './flat-file-types';

export class LocalFileService implements IFileService {
  write(filename: string, content: string) {
    if (!fs.existsSync('localdata')) {
      fs.mkdirSync('localdata');
    }
    fs.writeFileSync(`localdata/${filename}`, content, 'utf-8');
  }

  async read(filename: string) {
    return fs.readFileSync(`localdata/${filename}`, {
      encoding: 'utf-8',
    });
  }

  async generateImageUploadURL(filename: string) {
    return '';
  }
}
