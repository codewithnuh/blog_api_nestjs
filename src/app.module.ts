import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PostsModule, PrismaModule, AuthModule],
  exports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
