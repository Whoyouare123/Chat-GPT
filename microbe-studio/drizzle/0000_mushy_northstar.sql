CREATE TABLE `settings` (
	`id` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `submissions` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`date` text NOT NULL,
	`created` text NOT NULL,
	`audio` text NOT NULL,
	`signature` text NOT NULL,
	`snapshot` text NOT NULL
);
