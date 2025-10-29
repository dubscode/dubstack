import { sql } from 'drizzle-orm';
import { timestamp } from 'drizzle-orm/pg-core';
import { ulid } from './ulid';

function normalizePrefix(prefix: string): string {
  if (!prefix) {
    throw new Error('defaultId prefix must be a non-empty string');
  }

  return prefix.endsWith('_') ? prefix : `${prefix}_`;
}

export function prefixedId(columnName: string, prefix: string) {
  const normalizedPrefix = normalizePrefix(prefix);

  return ulid(columnName)
    .notNull()
    .default(sql.raw(`concat('${normalizedPrefix}', gen_ulid())`))
    .primaryKey();
}

export function defaultId(prefix: string) {
  return {
    id: prefixedId('id', prefix),
  } as const;
}

export const timestamps = {
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
};
