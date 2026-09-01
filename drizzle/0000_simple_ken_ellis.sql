CREATE TABLE `leads` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`full_name` text NOT NULL,
	`phone` text NOT NULL,
	`subject` text NOT NULL,
	`privacy_accepted` integer NOT NULL,
	`gclid` text,
	`gbraid` text,
	`wbraid` text,
	`page_url` text NOT NULL,
	`submitted_at` text NOT NULL
);
