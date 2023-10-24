import {
  type TrusteesDetail,
  type TrusteesDetailInput,
  type EventsPageContent,
  type EventsPageContentInput,
  type NewsPageContent,
  type NewsPageContentInput,
  type BoardMembersDetailInput,
  type BoardMembersDetail,
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
  type AboutPageFeatureDetailInput,
  type ContributionsDetail,
  type ContributionsDetailInput,
  type OurTeamDetail,
  type OurTeamDetailInput,
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

export interface IBoardMembersDataGateway {
  fetch: () => Promise<BoardMembersDetailInput[]>;
  create: (data: BoardMembersDetail) => Promise<BoardMembersDetailInput>;
  update: (
    id: string,
    data: BoardMembersDetail
  ) => Promise<BoardMembersDetailInput>;
  delete: (id: string) => Promise<any>;
}

export interface IProjectsDataGateway {
  fetch: () => Promise<ProjectsDetailInput[]>;
  create: (data: ProjectsDetail) => Promise<ProjectsDetailInput>;
  update: (id: string, data: ProjectsDetail) => Promise<ProjectsDetailInput>;
  delete: (id: string) => Promise<any>;
}

export interface INigerianYouthVoicesDataGateway {
  fetch: () => Promise<NigerianYouthVoicesDetail[]>;
  create: (
    data: NigerianYouthVoicesDetailInput
  ) => Promise<NigerianYouthVoicesDetail>;
  update: (
    id: string,
    data: NigerianYouthVoicesDetailInput
  ) => Promise<NigerianYouthVoicesDetail>;
  delete: (id: string) => Promise<any>;
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
  fetch: () => Promise<HeroSectionDetail>;
  update: (data: HeroSectionDetailInput) => Promise<HeroSectionDetail>;
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
  fetch: () => Promise<AboutPageFeatureDetail>;
  update: (
    data: AboutPageFeatureDetailInput
  ) => Promise<AboutPageFeatureDetail>;
}

export interface IContributionsDataGateway {
  fetch: () => Promise<ContributionsDetail[]>;
  create: (data: ContributionsDetailInput) => Promise<ContributionsDetail>;
  update: (
    id: string,
    data: ContributionsDetailInput
  ) => Promise<ContributionsDetail>;
  delete: (id: string) => Promise<any>;
  filterByYear: (year: string) => Promise<ContributionsDetail[]>;
  fetchById: (id: string) => Promise<ContributionsDetail>;
}
export interface IOurTeamDataGateway {
  fetch: () => Promise<OurTeamDetail>;
  update: (data: OurTeamDetailInput) => Promise<OurTeamDetail>;
}
