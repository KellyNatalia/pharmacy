import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
<<<<<<< HEAD
import { UsersService } from '../suppliers/users/users.service';
=======
import { UsersService } from '../users/users.service';
>>>>>>> c9250f2bdc5ec015dc138991fda014a693449aba
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService): JwtModuleOptions => ({
        secret: config.get<string>('JWT_SECRET_KEY'),
        signOptions: {
          expiresIn: (config.get<string>('JWT_EXPIRES_IN') || '1h') as any
        }
      }),
    })
  ],
  providers: [AuthService, UsersService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule { }
