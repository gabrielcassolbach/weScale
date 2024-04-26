import { Schema } from 'dynamoose';

export const UserSchema = new Schema({
  id: {
    type: String,
    hashKey: true,
  },
  nome_produto: {
    type: String,
  },
  valor_produto: {
    type: String,
  },
});
