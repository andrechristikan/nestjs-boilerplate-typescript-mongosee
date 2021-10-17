import { PipeTransform, ArgumentMetadata } from '@nestjs/common';
import { validate } from 'class-validator';
import { Debugger } from 'src/debugger/debugger.decorator';
import { Logger as DebuggerService } from 'winston';
import { Message } from 'src/message/message.decorator';
import { MessageService } from 'src/message/message.service';
import { IErrors } from 'src/message/message.interface';
import { UserUpdateValidation } from 'src/user/validation/user.update.validation';
import { UserCreateValidation } from 'src/user/validation/user.create.validation';
import { plainToClass } from 'class-transformer';
import { AuthLoginValidation } from 'src/auth/validation/auth.login.validation';
import { CustomHttpException } from 'src/response/response.filter';
import { ENUM_RESPONSE_STATUS_CODE } from 'src/response/response.constant';

export class RequestValidationPipe implements PipeTransform {
    constructor(
        @Message() private readonly messageService: MessageService,
        @Debugger() private readonly debuggerService: DebuggerService
    ) {}

    async transform(
        value: Record<string, any>,
        { metatype }: ArgumentMetadata
    ): Promise<Record<string, any>> {
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        const request = plainToClass(metatype, value);
        this.debuggerService.info('Request Data', {
            class: 'RequestValidationPipe',
            function: 'transform',
            request: request
        });

        const rawErrors: Record<string, any>[] = await validate(request);
        if (rawErrors.length > 0) {
            const errors: IErrors[] = this.messageService.getRequestErrorsMessage(
                rawErrors
            );

            this.debuggerService.error('Request Errors', {
                class: 'RequestValidationPipe',
                function: 'transform',
                errors
            });

            throw new CustomHttpException(
                ENUM_RESPONSE_STATUS_CODE.REQUEST_VALIDATION_ERROR
            );
        }
        return value;
    }

    private toValidate(metatype: Record<string, any>): boolean {
        const types: Record<string, any>[] = [
            UserUpdateValidation,
            UserCreateValidation,
            AuthLoginValidation
        ];
        return types.includes(metatype);
    }
}
