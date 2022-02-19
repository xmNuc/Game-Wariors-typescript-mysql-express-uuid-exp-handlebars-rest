import { createPool } from 'mysql2/promise';
import 'dotenv/config';
export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT),
    namedPlaceholders: true,
    decimalNumbers: true,
});
//# sourceMappingURL=db.js.map