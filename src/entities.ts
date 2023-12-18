export type NewsPageContentInput = {
  title: string;
  description: string;
  author: string;
  imageURL: string[];
  shareURL: string;
};

export type NewsPageContent = NewsPageContentInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export type EventsPageContentInput = {
  title: string;
  body: string;
  buttonLabel: string;
  eventImage: string[];
  shareURL: string;
  buttonURL: string;
};

export type EventsPageContent = EventsPageContentInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export type TrusteesDetailInput = {
  name: string;
  description: string;
  imageURL: string;
};

export type TrusteesDetail = TrusteesDetailInput & {
  createdAt: Date;
  updateAt: Date;
  id: string;
};

export type GoverningCouncilDetailInput = {
  name: string;
  description: string;
  imageURL: string;
};

export type GoverningCouncilDetail = GoverningCouncilDetailInput & {
  createdAt: Date;
  updateAt: Date;
  id: string;
};

export type ProjectsDetailInput = {
  title: string;
  description: string;
  location: string;
  imageURL: string;
  sponsored: boolean;
};

export type ProjectsDetail = ProjectsDetailInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export type NigerianYouthVoicesDetailInput = {
  subHeading: string;
  year?: string;
};

export type NigerianYouthVoicesDetail = NigerianYouthVoicesDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type ValueMetricsDetailInput = {
  metricOneLabel: string;
  metricOneValue: string;
  metricTwoLabel: string;
  metricTwoValue: string;
  metricThreeLabel: string;
  metricThreeValue: string;
  metricFourLabel: string;
  metricFourValue: string;
};

export type ValueMetricsDetail = ValueMetricsDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type UNCollaborationDetailInput = {
  title: string;
  description: string[];
  imageURL: string;
};

export type UNCollaborationDetail = UNCollaborationDetailInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export type HeroSectionDetailInput = {
  header: string;
  subHeader: string;
  page: 'about' | 'home' | 'un-collaboration' | 'project';
  imageURL: string[];
};

export type HeroSectionDetail = HeroSectionDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type PartnersDetailInput = {
  subHeader: string;
  logo: string[];
};

export type PartnersDetail = PartnersDetailInput;

export type AboutPageContentInput = {
  header: string;
  subHeader: string;
  backgroundImage: string;
};

export type AboutPageContent = AboutPageContentInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export type ContactDetailInput = {
  category: 'partnership' | 'sponsorship' | 'enquiries' | 'others';
  officeAddress: string;
  emailAddress: string;
  phoneNumber: string;
  facebook: string;
  instagram: string;
  linkedIn: string;
  twitter: string;
};

export type ContactDetail = ContactDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type ManagementDetailInput = {
  name: string;
  imageURL: string;
};

export type ManagementDetail = ManagementDetailInput & {
  id: string;
  createdAt: Date;
  updateAt: Date;
};

export type AboutPageFeatureDetail = {
  header: string;
  subHeader: string;
};

export type UNCollaborationSectionDetailInput = {
  section: 'contribution' | 'conference';
  year: string;
  subHeading: string;
  activities: string;
};

export type UNCollaborationSectionDetail = UNCollaborationSectionDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type OurTeamDetailInput = {
  content: string;
};

export type OurTeamDetail = OurTeamDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type StrategyDetailInput = {
  content: string;
};

export type StrategyDetail = StrategyDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type GalleryDetailInput = {
  subHeader: string;
  imageURL: string[];
};

export type GalleryDetail = GalleryDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type ActivityDetailInput = {
  imageURL: string;
  description: string;
};

export type ActivityDetail = ActivityDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type SupportersDetailInput = {
  description: string;
  supporters: string[];
};

export type SupportersDetail = SupportersDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};
