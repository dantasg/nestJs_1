import { SendEmailService } from './send-email/send-email.service';
import { Controller, Post, Body } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repositort';

@Controller('app')
export class AppController {
  constructor(
    private rocketMemberRepository: RocketMembersRepository,
    private sendEmailService: SendEmailService,
  ) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, memberFunction, email } = body;

    const member = await this.rocketMemberRepository.create(
      name,
      memberFunction,
    );

    await this.sendEmailService.send(
      email,
      name,
      'Created member!',
      'Member created successfully',
    );

    return {
      message: 'Member created successfully',
    };
  }
}
