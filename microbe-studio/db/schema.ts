import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
export const settings=sqliteTable('settings',{id:text('id').primaryKey(),value:text('value').notNull()});
export const submissions=sqliteTable('submissions',{id:text('id').primaryKey(),name:text('name').notNull(),date:text('date').notNull(),created:text('created').notNull(),audio:text('audio').notNull(),signature:text('signature').notNull(),snapshot:text('snapshot').notNull()});
