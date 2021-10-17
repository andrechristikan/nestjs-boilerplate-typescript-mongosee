import { Controller, Get, HttpException, Inject } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Response } from 'src/response/response.decorator';
import { IResponse } from 'src/response/response.interface';
import {
    IKafkaResponseError,
    IKafkaRequest,
    IKafkaResponse
} from '../response/kafka.response.interface';
import {
    KAFKA_PRODUCER_SERVICE_NAME,
    KAFKA_PRODUCER_TOPICS
} from './producer.constant';
import { Logger as DebuggerService } from 'winston';
import { Debugger } from 'src/debugger/debugger.decorator';

@Controller('kafka/produce')
export class KafkaProducerController {
    constructor(
        @Inject(KAFKA_PRODUCER_SERVICE_NAME)
        private readonly client: ClientKafka,
        @Debugger() private readonly debuggerService: DebuggerService
    ) {}

    async onModuleInit(): Promise<void> {
        KAFKA_PRODUCER_TOPICS.forEach((val) =>
            this.client.subscribeToResponseOf(val)
        );

        await this.client.connect();
    }

    async onModuleDestroy(): Promise<void> {
        await this.client.close();
    }

    @Get('/')
    @Response('kafka.produce')
    async produce(): Promise<IResponse> {
        const message: IKafkaRequest = {
            value: {
                from: '127.0.0.1'
            },
            key: `${new Date().valueOf()}`
        };

        try {
            const kafka: IKafkaResponse = await this.client
                .send('nestjs.ack.topic', message)
                .toPromise();

            return kafka;
        } catch (err: any) {
            this.debuggerService.error('Produce Internal Server Error', {
                class: 'KafkaProducerController',
                function: 'produce',
                ...err
            });

            const errors: IKafkaResponseError = err as IKafkaResponseError;

            throw new HttpException(errors, errors.statusCode);
        }
    }
}
