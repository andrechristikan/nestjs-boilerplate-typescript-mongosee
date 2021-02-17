import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt/jwt.guard';
import { LocalGuard } from 'src/auth/guard/local/local.guard';
import { BasicGuard } from 'src/auth/guard/basic/basic.guard';
import { applyDecorators } from '@nestjs/common';
import { IApplyDecorator } from 'src/auth/auth.interface';

export function AuthJwt(): IApplyDecorator {
    return applyDecorators(UseGuards(JwtGuard));
}

export function AuthLocal(): IApplyDecorator {
    return applyDecorators(UseGuards(LocalGuard));
}

export function AuthBasic(): IApplyDecorator {
    return applyDecorators(UseGuards(BasicGuard));
}
