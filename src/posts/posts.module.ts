import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthModule } from '../auth/auth.module'; // Import AuthModule to access JwtService

@Module({
  imports: [
    PrismaModule,
    AuthModule, // Import AuthModule for JwtService
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
