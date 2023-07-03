import BlobService from './BlobService';
import HttpServiceV1, { type HttpOptions } from './HttpServiceV1';
import type { Section, SectionIndex, Id } from '@/models';

export default class SectionService {
  static async createAsync(section: Section, options: HttpOptions={}): Promise<Section> {
    try {
      return await HttpServiceV1.postAsync<Section>('section', section, options);
    }
    catch (err: any) {
      options.toast?.error(`Failed to create section: ${err}`);
      throw err;
    }
  }

  static async deleteAsync(id: Id, options: HttpOptions={}): Promise<Section> {
    try {
      return await HttpServiceV1.deleteAsync<Section>('section', id, options);
    }
    catch (err: any) {
      options.toast?.error(`Failed to delete section: ${err}`);
      throw err;
    }
  }

  static async fillTemplateAsync(template: string, options: HttpOptions={}): Promise<string> {
    if (!template) {
      return '';
    }
    // NOTE: Match and captures what is between ${}, to replace with presigned URLs
    const re = /"\${([0-9a-zA-Z_\-\/\.]+)}"/g;
    const presignedUrls = new Map<string, string>();
    for (let match of template.matchAll(re)) {
      const textToReplace = match[0];
      const filePath = match[1];
      if (!(textToReplace in presignedUrls)) {
        presignedUrls.set(textToReplace, await BlobService.getPresignedUrlAsync(filePath, options));
      }
    }
    for (let [key, value] of presignedUrls) {
      template = template.replace(key, value);
    }
    return template;
  }

  static async getAsync(id: Id, options: HttpOptions={}): Promise<Section> {
    try {
      return await HttpServiceV1.getAsync<Section>('section', id, options);
    }
    catch (err: any) {
      options.toast?.error(`Failed to get section: ${err}`);
      throw err;
    }
  }

  static async getAllAsync(options: HttpOptions={}): Promise<SectionIndex> {
    try {
      return await HttpServiceV1.getAllAsync<SectionIndex>('section', options);
    }
    catch (err: any) {
      options.toast?.error(`Failed to get all sections: ${err}`);
      throw err;
    }
  }

  static async updateAsync(section: Section, options: HttpOptions={}): Promise<Section> {
    try {
      return await HttpServiceV1.putAsync<Section>('section', section, options);
    }
    catch (err: any) {
      options.toast?.error(`Failed to update section: ${err}`);
      throw err;
    }
  }
};
