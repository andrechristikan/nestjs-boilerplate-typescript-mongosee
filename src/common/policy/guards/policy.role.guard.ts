import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { POLICY_ROLE_META_KEY } from 'src/common/policy/constants/policy.constant';
import { ENUM_POLICY_ROLE } from 'src/common/policy/constants/policy.enum.constant';
import { ENUM_POLICY_STATUS_CODE_ERROR } from 'src/common/policy/constants/policy.status-code.constant';
import { IRequestApp } from 'src/common/request/interfaces/request.interface';

@Injectable()
export class PolicyRoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const role =
            this.reflector.get<ENUM_POLICY_ROLE>(
                POLICY_ROLE_META_KEY,
                context.getHandler()
            ) || [];

        const { user } = context.switchToHttp().getRequest<IRequestApp>();
        const { type } = user;

        if (type === ENUM_POLICY_ROLE.SUPER_ADMIN) {
            return true;
        }

        if (role !== type) {
            throw new ForbiddenException({
                statusCode:
                    ENUM_POLICY_STATUS_CODE_ERROR.POLICY_ROLE_FORBIDDEN_ERROR,
                message: 'policy.error.roleForbidden',
            });
        }

        return true;
    }
}
