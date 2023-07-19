import { type Project } from 'entities';

const defaultProject = {
  imageURL: '/assets/Project1.png',
  heading: 'Project Title',
  description:
    'Mollitia earum autem eum nisi blanditiis qui distinctio. Voluptas possimus ad voluptatem. Sit qui ad aut corporis reiciendis consequatur cum. Minus nisi illo assumenda et enim ad repudiandae dignissimos.',
  donateLink: 'http://9jacode.com',
  donateLabel: 'Donate',
  volunteerLink: 'http://9jacode.com',
  volunteerLabel: 'Volunteer',
  waitlistLink: 'http://9jacode.com',
  waitlistLabel: 'Join Waitlist',
};
export const defaultProjects: Project[] = [
  {
    id: '7ab94e44-63e7-4419-a88e-14b5844c0fd8',
    status: 'ongoing',
    ...defaultProject,
  },
  {
    id: '2542ebe6-eaed-472c-bb32-4f43af2d9004',
    status: 'ongoing',
    ...defaultProject,
  },
  {
    id: '41745731-28db-4e1d-bd74-e8c421fdd890',
    status: 'upcoming',
    ...defaultProject,
  },
  {
    id: 'c00cf318-f71a-4434-9dc7-41a6e4bb24b3',
    status: 'upcoming',
    ...defaultProject,
  },
  {
    id: '4ad7224d-dd6a-4b5d-a7ab-a60551f3681c',
    status: 'current',
    ...defaultProject,
  },
  {
    id: '90309132-ed04-4866-a5b8-137ca0d5cfea',
    status: 'current',
    ...defaultProject,
  },
];
