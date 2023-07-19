import { type IFileService } from 'services/file-services/flat-file-types';
import sinon, { type SinonStubbedInstance } from 'sinon';
import { type ITokenManager } from 'usecases/interfaces';

export const tokenManagerStub: SinonStubbedInstance<ITokenManager> = {
  verifySocialLogin: sinon.stub(),
  generateToken: sinon.stub(),
  decode: sinon.stub(),
  verifyToken: sinon.stub(),
};

export const fileServiceStub: SinonStubbedInstance<IFileService> = {
  write: sinon.stub(),
  read: sinon.stub(),
  generateImageUploadURL: sinon.stub(),
};
