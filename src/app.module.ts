import { UserService } from './app/user/user.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RocketMembersRepository } from './repositories/rocket-members-repositort';
import { PrimaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';
import { UserJWTRepository } from './repositories/user-jwt-repository';
import { PrismaUserJwtRepository } from './repositories/prisma/prisma-user-jwt-repository';
import { UserController } from './app/user/user.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './auth/strategies/local.strategy';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { SendEmailService } from './send-email/send-email.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    JwtModule.register({
      privateKey: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
    HttpModule,
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [
    UserService,
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrimaRocketMembersRepository,
    },
    {
      provide: UserJWTRepository,
      useClass: PrismaUserJwtRepository,
    },
    AuthService,
    LocalStrategy,
    JwtStrategy,
    SendEmailService,
  ],
})
export class AppModule {}
