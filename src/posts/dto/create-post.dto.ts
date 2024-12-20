import {
  IsString,
  IsNotEmpty,
  IsOptional,
  IsDateString,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  slug: string;

  @IsString()
  @IsNotEmpty()
  content: string; // Supports Markdown content

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsOptional()
  summary: string;

  @IsString()
  @IsOptional()
  tags: string;

  @IsString()
  @IsOptional()
  category: string;

  @IsDateString()
  @IsOptional()
  publishAt?: string | ''; // For scheduled posts

  @IsDateString()
  @IsOptional()
  createdAt?: string;

  @IsDateString()
  @IsOptional()
  updatedAt?: string;
}
