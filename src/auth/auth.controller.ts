/* eslint-disable prettier/prettier */
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    if (this.authService.validateAdmin(username, password)) {
      return this.authService.login(username);
    }
  }
}
