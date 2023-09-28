import { Injectable } from '@nestjs/common';
import { UserService } from 'src/app/user/user.service';
import { compareSync } from 'bcrypt';
import { UserJWT } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    let user: UserJWT;
    try {
      user = await this.userService.getOneByEmail(email);

      if (!user) return null;
    } catch (err) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) return null;

    return user;
  }

  async login(user) {
    const payload = {
      sub: user.id,
      email: user.emai,
    };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
