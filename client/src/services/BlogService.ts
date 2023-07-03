import HttpServiceV1, { type HttpOptions } from './HttpServiceV1';
import type { Blog, BlogIndex, Id } from '@/models';

export default class BlogService {
  static async getAsync(id: Id, options: HttpOptions={}): Promise<Blog> {
    try {
      return await HttpServiceV1.getAsync<Blog>('blog', id, options);
    }
    catch (err: any) {
      options.toast?.error(`Failed to get blog: ${err}`);
      throw err;
    }
  }

  static async getAllAsync(options: HttpOptions={}): Promise<BlogIndex> {
    try {
      return await HttpServiceV1.getAllAsync<BlogIndex>('blog', options);
    }
    catch (err: any) {
      options.toast?.error(`Failed to get all blogs: ${err}`);
      throw err;
    }
  }
};
