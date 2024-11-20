/* eslint-disable prettier/prettier */
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  summary?: string;
  tags?: string[];
  category?: string;
  publishAt?: string;
  createdAt: string;
  updatedAt: string;
}
