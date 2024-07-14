import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  private refreshTokenStorage: { [token: string]: { ipAddress: string; expires: Date } } = {};

  async generateRefreshToken(ipAddress: string): Promise<string> {
    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
    this.refreshTokenStorage[token] = { ipAddress, expires };
    return token;
  }

  async validateRefreshToken(token: string): Promise<boolean> {
    const refreshToken = this.refreshTokenStorage[token];
    if (!refreshToken) {
      return false;
    }
    if (refreshToken.expires < new Date()) {
      delete this.refreshTokenStorage[token];
      return false;
    }
    return true;
  }
}