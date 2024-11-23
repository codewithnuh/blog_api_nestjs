import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  // UseGuards,
  Delete,
  ValidationPipe,
  UseGuards,
} from '@nestjs/common';
// import { JwtAuthGuard } from 'src/jwt/jwt.guard';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body(ValidationPipe) createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
