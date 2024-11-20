import { Body, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BlogPost } from 'types';
import { v4 as uuid } from 'uuid';
@Injectable()
export class PostsService {
  private blogPosts: BlogPost[] = []; // Simulated database
  currentTime = new Date().toISOString();
  create(@Body() createPostDto: CreatePostDto) {
    const newPost: BlogPost = {
      id: uuid(), // Generate unique ID
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      title: createPostDto.title,
      slug: createPostDto.slug,
      content: createPostDto.content,
      author: createPostDto.author,
      summary: createPostDto.summary,
      tags: createPostDto.tags,
      category: createPostDto.category,
      publishAt: this.currentTime,
    };
    this.blogPosts.push(newPost);
    return newPost;
  }

  findAll() {
    return this.blogPosts;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    const index = this.blogPosts.findIndex((post) => post.id === id);
    if (index === -1) return null;

    this.blogPosts[index] = {
      ...this.blogPosts[index],
      ...updatePostDto,
      updatedAt: new Date().toISOString(),
    };
    return this.blogPosts[index];
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
