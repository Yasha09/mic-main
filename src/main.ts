import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost'],
      queue: 'main_queue',
      queueOptions: {
        durable: true,
      },
    },
  });
  // @ts-ignore
  await app.listen(() => {
    console.log(`Microservices are running`);
  });
}

bootstrap();
