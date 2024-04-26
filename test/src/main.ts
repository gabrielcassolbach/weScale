import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create new DynamoDB instance
  const ddb = new dynamoose.aws.ddb.DynamoDB({
    credentials: {
      accessKeyId: 'AKIAXYKJTTV5XQPLZ3WF',
      secretAccessKey: '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',
    },
    region: 'us-east-2',
  });

  // Set DynamoDB instance to the Dynamoose DDB instance
  dynamoose.aws.ddb.set(ddb);

  await app.listen(3000);
}
bootstrap();
