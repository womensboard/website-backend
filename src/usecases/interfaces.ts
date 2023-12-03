import {
  type TrusteesDetail,
  type TrusteesDetailInput,
  type EventsPageContent,
  type EventsPageContentInput,
  type NewsPageContent,
  type NewsPageContentInput,
  type GoverningCouncilDetailInput,
  type GoverningCouncilDetail,
  type ProjectsDetailInput,
  type ProjectsDetail,
  type AboutPageContentInput,
  type AboutPageContent,
  type NigerianYouthVoicesDetail,
  type NigerianYouthVoicesDetailInput,
  type ValueMetricsDetail,
  type ValueMetricsDetailInput,
  type UNCollaborationDetail,
  type UNCollaborationDetailInput,
  type HeroSectionDetail,
  type HeroSectionDetailInput,
  type PartnersDetail,
  type PartnersDetailInput,
  type ContactDetail,
  type ContactDetailInput,
  type ManagementDetailInput,
  type ManagementDetail,
  type AboutPageFeatureDetail,
  type UNCollaborationSectionDetail,
  type UNCollaborationSectionDetailInput,
  type OurTeamDetail,
  type OurTeamDetailInput,
  type StrategyDetail,
  type StrategyDetailInput,
  type GalleryDetail,
  type GalleryDetailInput,
  type ActivityDetail,
  type ActivityDetailInput,
  type SupportersDetail,
  type SupportersDetailInput,
} from 'entities';

interface TokenData {
  email: string;
  emailIsVerified: boolean;
  aud: string;
  iss: string;
}

export interface ITokenManager {
  verifySocialLogin: (token: string) => TokenData | Promise<TokenData>;
  decode: (token: string) => Record<string, string>;
  verifyToken: (secretKey: string, token: string) => object;
  generateToken: (secretKey: string, payload: object) => Promise<string>;
}

export interface INewsDataGateway {
  fetch: () => Promise<NewsPageContentInput[]>;
  create: (data: NewsPageContentInput) => Promise<NewsPageContent>;
  update: (id: string, data: NewsPageContentInput) => Promise<NewsPageContent>;
  delete: (id: string) => Promise<any>;
}

export interface IEventsDataGateway {
  fetch: () => Promise<EventsPageContent[]>;
  create: (data: EventsPageContentInput) => Promise<EventsPageContent>;
  update: (
    id: string,
    data: EventsPageContentInput
  ) => Promise<EventsPageContent>;
  delete: (id: string) => Promise<any>;
}

export interface ITrusteesDataGateway {
  fetch: () => Promise<TrusteesDetailInput[]>;
  create: (data: TrusteesDetail) => Promise<TrusteesDetailInput>;
  update: (id: string, data: TrusteesDetail) => Promise<TrusteesDetailInput>;
  delete: (id: string) => Promise<any>;
}

export interface IGoverningCouncilDataGateway {
  fetch: () => Promise<GoverningCouncilDetailInput[]>;
  create: (
    data: GoverningCouncilDetail
  ) => Promise<GoverningCouncilDetailInput>;
  update: (
    id: string,
    data: GoverningCouncilDetail
  ) => Promise<GoverningCouncilDetailInput>;
  delete: (id: string) => Promise<any>;
}

export interface IProjectsDataGateway {
  fetch: () => Promise<ProjectsDetailInput[]>;
  create: (data: ProjectsDetail) => Promise<ProjectsDetailInput>;
  update: (id: string, data: ProjectsDetail) => Promise<ProjectsDetailInput>;
  delete: (id: string) => Promise<any>;
}

export interface INigerianYouthVoicesDataGateway {
  fetch: () => Promise<NigerianYouthVoicesDetail>;
  update: (
    data: NigerianYouthVoicesDetailInput
  ) => Promise<NigerianYouthVoicesDetail>;
}

export interface IValueMetricsDataGateway {
  fetch: () => Promise<ValueMetricsDetail>;
  update: (data: ValueMetricsDetailInput) => Promise<ValueMetricsDetail>;
}

export interface IUNCollaborationDataGateway {
  fetch: () => Promise<UNCollaborationDetail[]>;
  create: (data: UNCollaborationDetailInput) => Promise<UNCollaborationDetail>;
  update: (
    id: string,
    data: UNCollaborationDetailInput
  ) => Promise<UNCollaborationDetail>;
  delete: (id: string) => Promise<any>;
}

export interface IAboutPageDataGateway {
  fetch: () => Promise<AboutPageContentInput[]>;
  create: (data: AboutPageContent) => Promise<AboutPageContentInput>;
  update: (
    id: string,
    data: AboutPageContent
  ) => Promise<AboutPageContentInput>;
  delete: (id: string) => Promise<any>;
}

export interface IHeroSectionDataGateway {
  fetch: () => Promise<HeroSectionDetail[]>;
  update: (
    page: string,
    data: HeroSectionDetailInput
  ) => Promise<HeroSectionDetail>;
}

export interface IPartnersDataGateway {
  fetch: () => Promise<PartnersDetail>;
  create: (data: PartnersDetailInput) => Promise<PartnersDetail>;
}

export interface IContactDataGateway {
  fetch: () => Promise<ContactDetail>;
  update: (data: ContactDetailInput) => Promise<ContactDetail>;
}

export interface IManagementDataGateway {
  fetch: () => Promise<ManagementDetailInput[]>;
  create: (data: ManagementDetail) => Promise<ManagementDetailInput>;
  update: (
    id: string,
    data: ManagementDetail
  ) => Promise<ManagementDetailInput>;
  delete: (id: string) => Promise<any>;
}

export interface IAboutPageFeatureDataGateway {
  fetch: () => Promise<AboutPageFeatureDetail[]>;
  update: (data: AboutPageFeatureDetail[]) => Promise<AboutPageFeatureDetail[]>;
}

export interface IUNCollaborationSectionDataGateway {
  fetch: () => Promise<UNCollaborationSectionDetail[]>;
  create: (
    data: UNCollaborationSectionDetailInput
  ) => Promise<UNCollaborationSectionDetail>;
  update: (
    id: string,
    data: UNCollaborationSectionDetailInput
  ) => Promise<UNCollaborationSectionDetail>;
  delete: (id: string) => Promise<any>;
  filterByYear: (
    year: string,
    section: string
  ) => Promise<UNCollaborationSectionDetail[]>;
  fetchById: (id: string) => Promise<UNCollaborationSectionDetail>;
}

export interface IOurTeamDataGateway {
  fetch: () => Promise<OurTeamDetail>;
  update: (data: OurTeamDetailInput) => Promise<OurTeamDetail>;
}

export interface IStrategyDataGateway {
  fetch: () => Promise<StrategyDetail>;
  update: (data: StrategyDetailInput) => Promise<StrategyDetail>;
}

export interface IGalleryDataGateway {
  fetch: () => Promise<GalleryDetail>;
  create: (data: GalleryDetailInput) => Promise<GalleryDetail>;
}

export interface IActivitiesDataGateway {
  fetch: () => Promise<ActivityDetailInput[]>;
  create: (data: ActivityDetail) => Promise<ActivityDetailInput>;
  update: (id: string, data: ActivityDetail) => Promise<ActivityDetailInput>;
  delete: (id: string) => Promise<any>;
}

export interface ISupportersDataGateway {
  fetch: () => Promise<SupportersDetail>;
  create: (data: SupportersDetailInput) => Promise<SupportersDetail>;
}
