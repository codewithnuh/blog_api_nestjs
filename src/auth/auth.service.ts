/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  validateAdmin(username: string, password: string): boolean {
    const adminUsername = this.configService.get<string>('ADMIN_USERNAME');
    const adminPassword = this.configService.get<string>('ADMIN_PASSWORD');

    if (username === adminUsername && password === adminPassword) {
      return true;
    }
    throw new UnauthorizedException('Invalid admin credentials');
  }

  login(username: string) {
    const payload = { username, role: 'admin' };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
