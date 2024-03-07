import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string) {

        const user = await this.usersService.findOne(username);
        if (user && user.password === password) {
            const { password, ...restUser } = user;
            return restUser;
        }
        
        return
    }

    async login(user: any) {

        const payload = {
            username: user.username,
            userId: user.userId,
            roles: user.roles
        }

        return {
            access_token: await this.jwtService.signAsync(payload)
        }

    }

}
