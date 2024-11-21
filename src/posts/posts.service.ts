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

  findAll() {
    return this.prismaService.post.findMany();
  }

  findOne(id: number) {
    const uniquePost = this.prismaService.post.findUnique({
      where: {
        id,
      },
    });
    if (!uniquePost) return 'Not Found';
    return uniquePost;
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    // const index = this.blogPosts.findIndex((post) => post.id === id);
    // if (index === -1) return null;
    // this.blogPosts[index] = {
    //   ...this.blogPosts[index],
    //   ...updatePostDto,
    //   updatedAt: new Date().toISOString(),
    // };
    // return this.blogPosts[index];
  }

  async remove(id: number) {
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
