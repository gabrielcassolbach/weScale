import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';
import process = require('process');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create new DynamoDB instance
  const ddb = new dynamoose.aws.ddb.DynamoDB({
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.secretAccessKey,
    },
    region: 'us-east-2',
  });

  //console.log(process.env.AWS_ACCESS_KEY_ID);

  // Set DynamoDB instance to the Dynamoose DDB instance
  dynamoose.aws.ddb.set(ddb);

  await app.listen(3000);
}
bootstrap();
