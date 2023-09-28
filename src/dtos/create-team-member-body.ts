import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message:
      'A função do membro não pode ser vazia! || The member function should not bt empty!',
  })
  memberFunction: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
