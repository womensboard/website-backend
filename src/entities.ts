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
  description: string;
  author: string;
  imageURL: string;
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
  author: string;
  imageURL: string;
};

export type ProjectsDetail = ProjectsDetailInput & {
  createdAt: Date;
  updatedAt: Date;
  id: string;
};
