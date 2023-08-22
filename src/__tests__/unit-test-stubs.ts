import { type IFileService } from 'services/file-services/flat-file-types';
import sinon, { type SinonStubbedInstance } from 'sinon';
import { type ITokenManager, type INewsDataGateway } from 'usecases/interfaces';

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

export const newsDataStub: SinonStubbedInstance<INewsDataGateway> = {
  fetch: sinon.stub(),
  create: sinon.stub(),
  update: sinon.stub(),
  delete: sinon.stub(),
};
