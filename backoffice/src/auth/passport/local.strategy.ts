import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  /*
    constructor(private readonly authService: AuthService,
                @InjectModel('User') private readonly userModel: PassportLocalModel<IUser>) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        }, userModel.authenticate());
    }*/
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
