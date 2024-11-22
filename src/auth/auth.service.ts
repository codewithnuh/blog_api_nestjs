/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  async validateAdmin(username: string, password: string): Promise<any> {
    const adminUsername = this.configService.get<string>('ADMIN_USERNAME');
    const adminPassword = this.configService.get<string>('ADMIN_PASSWORD');

    if (username === adminUsername && password === adminPassword) {
      return { username };
    }
    throw new UnauthorizedException('Invalid admin credentials');
  }

  async loginAdmin(username: string) {
    const payload = { username, role: 'admin' };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
