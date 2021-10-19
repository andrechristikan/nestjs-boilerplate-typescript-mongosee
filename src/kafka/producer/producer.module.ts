import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KAFKA_PRODUCER_SERVICE_NAME } from './producer.constant';
import { KafkaProducerController } from './producer.controller';
@Module({
    providers: [],
    exports: [],
    controllers: [KafkaProducerController],
    imports: [
        ClientsModule.registerAsync([
            {
                name: KAFKA_PRODUCER_SERVICE_NAME,
                inject: [ConfigService],
                imports: [ConfigModule],
                useFactory: async (configService: ConfigService) => ({
                    transport: Transport.KAFKA,
                    options: {
                        client: {
                            clientId: configService.get<string>(
                                'kafka.clientId'
                            ),
                            brokers: configService.get<string[]>(
                                'kafka.brokers'
                            )
                        },
                        consumer: {
                            groupId: configService.get<string>(
                                'kafka.consumerGroup'
                            ),
                            allowAutoTopicCreation: true
                        },
                        producer: {
                            allowAutoTopicCreation: true
                        }
                    }
                })
            }
        ])
    ]
})
export class KafkaProducerModule {}
