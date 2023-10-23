export type NewsPageContentInput = {
  title: string;
  description: string;
  author: string;
  imageURL: string;
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
  eventImage: string;
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

export type BoardMembersDetailInput = {
  name: string;
  description: string;
  imageURL: string;
};

export type BoardMembersDetail = BoardMembersDetailInput & {
  createdAt: Date;
  updateAt: Date;
  id: string;
};

export type ProjectsDetailInput = {
  title: string;
  description: string;
  location: string;
  imageURL: string;
};

export type ProjectsDetail = ProjectsDetailInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};

export type NigerianYouthVoicesDetailInput = {
  title: string;
  description: string;
  imageURL: string;
};

export type NigerianYouthVoicesDetail = NigerianYouthVoicesDetailInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
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
  imageURL: string[];
};

export type HeroSectionDetail = HeroSectionDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};

export type PartnersDetailInput = {
  subHeader: string;
  logo: string;
};

export type PartnersDetail = PartnersDetailInput & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

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

export type AboutPageFeatureDetailInput = {
  sectionOne: object;
  sectionTwo: object;
  sectionThree: object;
};

export type AboutPageFeatureDetail = AboutPageFeatureDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};
