import { pgTable, text } from 'drizzle-orm/pg-core';
import { defaultId, timestamps } from './columns';

export const users = pgTable('users', {
  ...defaultId('usr'),
  email: text('email').notNull().unique(),
  name: text('name'),
  ...timestamps,
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
