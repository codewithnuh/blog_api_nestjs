import { Body, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
// import { BlogPost } from 'types';
// import { v4 as uuid } from 'uuid';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class PostsService {
  constructor(private readonly prismaService: PrismaService) {}
  // private blogPosts: BlogPost[] = []; // Simulated database
  currentTime = new Date().toISOString();

  create(@Body() createPostDto: CreatePostDto) {
    return this.prismaService.post.create({
      data: createPostDto,
    });
  }

  async findAll() {
    const allPosts = await this.prismaService.post.findMany();
    return allPosts.map((post) => ({
      ...post,
      tags: post.tags ? post.tags.split(',') : [], // Transform tags into an array
    }));
  }

  findOne(id: string) {
    const uniquePost = this.prismaService.post.findUnique({
      where: {
        id,
      },
    });
    if (!uniquePost) return 'Not Found';
    return uniquePost;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const post = await this.prismaService.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) return 'Not Found';
    const updatedPost = await this.prismaService.post.update({
      where: {
        id,
      },
      data: updatePostDto,
    });
    return updatedPost;
  }

  async remove(id: string) {
    const post = await this.prismaService.post.findUnique({
      where: {
        id,
      },
    });
    if (!post) return null;
    await this.prismaService.post.delete({
      where: {
        id,
      },
    });
    return post;
  }
}
