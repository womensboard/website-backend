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
import { BoardMemberUseCase } from './board-members';
import { BoardMembersDataGateway } from 'data-gateway/board-members-data-gateway';
import { ProjectsUseCase } from './projects';
import { ProjectsDataGateway } from 'data-gateway/projects';
import { AboutPageUsecase } from './about-page';
import { AboutPageDataGateway } from 'data-gateway/about-page';

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

export const boardMembersUsecase = new BoardMemberUseCase(
  new BoardMembersDataGateway(fileService)
);

export const projectsUsecase = new ProjectsUseCase(
  new ProjectsDataGateway(fileService)
);

export const aboutPageUsecase = new AboutPageUsecase(
  new AboutPageDataGateway(fileService)
);
export * from './interfaces';
