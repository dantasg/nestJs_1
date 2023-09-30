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
import { LoggerService } from './utils/logger/Mylogger.service';
import { CabDetService } from './cab-det/cab-det.service';
import { CabDetController } from './cab-det/cab-det.controller';
import { CabUserRepository } from './cab-det/repositories/cabUser-repository';
import { PrismaCabUserRepository } from './cab-det/repositories/prisma/prisma-cabUser-repository';
import { DetUserRepository } from './cab-det/repositories/detUser-repository';
import { PrismaDetUserRepository } from './cab-det/repositories/prisma/prisma-detUser-repository';

@Module({
  imports: [
    JwtModule.register({
      privateKey: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [
    AppController,
    UserController,
    AuthController,
    CabDetController,
  ],
  providers: [
    UserService,
    PrismaService,
    AuthService,
    LocalStrategy,
    JwtStrategy,
    SendEmailService,
    LoggerService,
    CabDetService,
    {
      provide: RocketMembersRepository,
      useClass: PrimaRocketMembersRepository,
    },
    {
      provide: UserJWTRepository,
      useClass: PrismaUserJwtRepository,
    },
    {
      provide: CabUserRepository,
      useClass: PrismaCabUserRepository,
    },
    {
      provide: DetUserRepository,
      useClass: PrismaDetUserRepository,
    },
  ],
})
export class AppModule {}
