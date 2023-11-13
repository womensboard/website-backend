import { CONTACTS_ENV } from 'config';
import { type ContactDetail, type ContactDetailInput } from 'entities';
import { type IFileService } from 'services/file-services/flat-file-types';
import { type IContactDataGateway } from 'usecases';

const fileName = CONTACTS_ENV;

export class ContactsDataGateway implements IContactDataGateway {
  constructor(private readonly fileService: IFileService) {}

  async fetch(): Promise<ContactDetail> {
    try {
      const fileContent = await this.fileService.read(fileName);
      return JSON.parse(fileContent as string);
    } catch (error) {
      console.error('Error Fetching contacts', error);
      return {
        category: 'enquiries',
        officeAddress:
          '75, Adisa Bashua Street, Off Adelabu Street, Surulere, Lagos.',
        emailAddress: 'wbb@womensboard.com',
        phoneNumber: '+2348032174572',
        facebook: '@womensboard.com.ng',
        instagram: '@womens_board',
        linkedIn: '',
        twitter: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
  }

  async update(data: ContactDetailInput): Promise<ContactDetail> {
    const currentContact = await this.fetch();

    const updated = {
      ...currentContact,
      ...data,
    };
    updated.updatedAt = new Date();

    const contactDataString = JSON.stringify(updated);
    await this.fileService.write(fileName, contactDataString);

    return updated;
  }
}
