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
  metric_one_label: string;
  metric_one_value: string;
  metric_two_label: string;
  metric_two_value: string;
  metric_three_label: string;
  metric_three_value: string;
  metric_four_label: string;
  metric_four_value: string;
};

export type ValueMetricsDetail = ValueMetricsDetailInput & {
  createdAt: Date;
  updatedAt: Date;
};
