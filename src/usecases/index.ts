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
import { NIgerianYouthVoicesUsecase } from './nigerian-youth-voices';
import { NigerianYouthVoicesDataGateway } from 'data-gateway/nigerian-youth-voices';
import { ValueMetricsUsecase } from './vlaue-metrics';
import { ValueMetricsDataGateway } from 'data-gateway/value-metrics';
import { UnCollaborationsUsecase } from './un-collaborations';
import { UNCollaborationsDataGateway } from 'data-gateway/un-collaborations-data-gateway';
import { HeroSectionUsecase } from './hero-section';
import { HeroSectionDataGateway } from 'data-gateway/hero-section-data-gateway';
import { PartnersUseCase } from './partners';
import { PartnersDataGateway } from 'data-gateway/partners-data-gateway';
import { ContactUsecase } from './contacts';
import { ContactsDataGateway } from 'data-gateway/contacts-data-gateway';

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
export const nigerianYouthVoicesUsecase = new NIgerianYouthVoicesUsecase(
  new NigerianYouthVoicesDataGateway(fileService)
);

export const valueMetricsUsecase = new ValueMetricsUsecase(
  new ValueMetricsDataGateway(fileService)
);

export const unCollaborationUsecase = new UnCollaborationsUsecase(
  new UNCollaborationsDataGateway(fileService)
);

export const heroSectionUsecase = new HeroSectionUsecase(
  new HeroSectionDataGateway(fileService)
);

export const partnersUsecase = new PartnersUseCase(
  new PartnersDataGateway(fileService)
);

export const contactUsecase = new ContactUsecase(
  new ContactsDataGateway(fileService)
);

export * from './interfaces';
