import {
  drizzle,
  type NodePgClient,
  type NodePgDatabase,
} from 'drizzle-orm/node-postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL ?? '';

export const db = drizzle(connectionString, { schema });
export type DbType = typeof db;
export type SchemaType = typeof schema;
export type DbClient = NodePgClient;
export type TypedNodePgDatabase = NodePgDatabase<typeof schema>;

export { schema };
