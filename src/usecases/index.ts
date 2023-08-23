import { LoginUserUsecase } from './login-user';
import { tokenManager } from 'clients';
import { AuthMiddlewareUsecase } from './auth-middleware';
import { GenerateUploadURLUsecase } from './geenrate-upload-url';
import { JWT_SECRET } from 'config';
import { FileServiceFactory } from 'services';
import { NewsUsecase } from './news';
import { NewsDataGateway } from 'data-gateway/news-data-gateway';
import { EventsUsecase } from './event';
import { EventsDataGateway } from 'data-gateway/events-data-gateway';
import { TrusteesUseCase } from './trustees';
import { TrusteesDataGateway } from 'data-gateway/trustees-data-gateway';

export const loginUserUsecase = new LoginUserUsecase(tokenManager, JWT_SECRET);

export const authMiddlewareUsecase = new AuthMiddlewareUsecase(
  tokenManager,
  JWT_SECRET
);

const fileService = FileServiceFactory.create();

export const generateUploadURLUsecase = new GenerateUploadURLUsecase(
  fileService
);

export const newsUsecase = new NewsUsecase(new NewsDataGateway(fileService));

export const eventsUsecase = new EventsUsecase(
  new EventsDataGateway(fileService)
);

export const trusteeUsecase = new TrusteesUseCase(
  new TrusteesDataGateway(fileService)
);

export * from './interfaces';
