// import { createPool } from 'mysql2/promise';

// export const pool = createPool({
//   host: 'localhost',
//   user: 'root',
//   database: 'warriors_arena',
//   namedPlaceholders: true,
//   decimalNumbers: true,
// });

import { createPool } from 'mysql2/promise';
import 'dotenv/config';

export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  namedPlaceholders: true,
  decimalNumbers: true,
});
