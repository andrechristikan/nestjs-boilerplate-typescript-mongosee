import { registerAs } from '@nestjs/config';

export default registerAs(
    'helper',
    (): Record<string, any> => ({
        salt: {
            length: 8
        },
        jwt: {
            secretKey: '123456',
            expirationTime: '1h',
            notBeforeExpirationTime: '1h'
        },
        image: {
            maxSize: parseInt(process.env.HELPER_IMAGE_MAX_SIZE) || 1048576 // 1 MB
        }
    })
);
