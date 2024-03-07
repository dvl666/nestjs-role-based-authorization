import { Injectable } from '@nestjs/common';
import { Role } from 'src/common/enums/role.enum';
import { User } from './entity/user.entity';

@Injectable()
export class UsersService {

    private readonly fakeUsers = [
        {
            userId: 1,
            username: 'anna',
            password: '12345',
            roles: [Role.USER],
        },
        {
            userId: 2,
            username: 'andrew',
            password: '54321',
            roles: [Role.ADMIN],
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.fakeUsers.find((user) => user.username === username);
    }

}
