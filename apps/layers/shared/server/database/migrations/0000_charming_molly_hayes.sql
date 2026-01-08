--> statement-breakpoint
CREATE TABLE "user_content_interaction" (
	"id" serial PRIMARY KEY NOT NULL,
	"date_created" timestamp with time zone,
	"interaction_type" varchar(255)
);
--> statement-breakpoint
CREATE TABLE "user_friends" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"user" uuid,
	"friend" uuid,
	"created_at" timestamp with time zone,
	"relation" json
);
--> statement-breakpoint
CREATE TABLE "user_friends_posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_friends_id" integer,
	"posts_id" integer
);
--> statement-breakpoint
CREATE TABLE "user_profile" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"user" uuid,
	"display_name" varchar(255),
	"bio" text,
	"avatar" uuid,
	"location" varchar(255),
	"socials" json,
	"store" varchar(255),
	"age" integer
);
--> statement-breakpoint
CREATE TABLE "variants" (
	"id" serial PRIMARY KEY NOT NULL,
	"product_id" integer,
	"sku" text,
	"options_json" jsonb,
	"price" numeric,
	"cost" numeric,
	"barcode" text,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "vibez_clips" (
	"id" serial PRIMARY KEY NOT NULL,
	"creator_id" integer,
	"media_url" text,
	"duration" integer,
	"captions" text,
	"created_at" timestamp with time zone DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "vibez_product_map" (
	"clip_id" integer NOT NULL,
	"product_id" integer NOT NULL,
	CONSTRAINT "vibez_product_map_pkey" PRIMARY KEY("clip_id","product_id")
);
--> statement-breakpoint
CREATE TABLE "videos" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" varchar(255) DEFAULT 'draft' NOT NULL,
	"sort" integer,
	"user_created" uuid,
	"date_created" timestamp with time zone,
	"user_updated" uuid,
	"date_updated" timestamp with time zone,
	"type" varchar(255),
	"description" text,
	"ratings" integer,
	"name" varchar(255),
	"media" uuid,
	"thumbnail" uuid,
	"video_url" varchar(255),
	"user" uuid,
	"minio_key" varchar(255),
	"duration" varchar(255),
	"visibility" varchar(255),
	"view_count" integer,
	"distributor" integer
);
--> statement-breakpoint
CREATE TABLE "videos_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"categories_id" integer
);
--> statement-breakpoint
CREATE TABLE "videos_comments" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"comments_id" integer
);
--> statement-breakpoint
CREATE TABLE "videos_departments" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"departments_id" integer
);
--> statement-breakpoint
CREATE TABLE "videos_manufacturer" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"manufacturer_id" bigint
);
--> statement-breakpoint
CREATE TABLE "videos_product_types" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"product_types_id" integer
);
--> statement-breakpoint
CREATE TABLE "videos_products" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"products_id" bigint
);
--> statement-breakpoint
CREATE TABLE "videos_tags" (
	"id" serial PRIMARY KEY NOT NULL,
	"videos_id" integer,
	"tags_id" integer
);
--> statement-breakpoint
CREATE TABLE "websites" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"created_at" timestamp(3) DEFAULT CURRENT_TIMESTAMP,
	"name" text,
	"url" text,
	"image" uuid,
	"type" varchar(255),
	"slug" varchar(255),
	"icon" varchar(255),
	"status" varchar(255),
	"note" text,
	"username" varchar(255),
	"description" text,
	"creator" uuid
);
--> statement-breakpoint
ALTER TABLE "about_departments_articles" ADD CONSTRAINT "about_departments_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "about_departments_pages" ADD CONSTRAINT "about_departments_pages_pages_id_foreign" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "about_departments_platform" ADD CONSTRAINT "about_departments_platform_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_cart" ADD CONSTRAINT "address_cart_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_cart" ADD CONSTRAINT "address_cart_cart_id_foreign" FOREIGN KEY ("cart_id") REFERENCES "public"."cart"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_cities" ADD CONSTRAINT "address_cities_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_cities" ADD CONSTRAINT "address_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_countries" ADD CONSTRAINT "address_countries_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_countries" ADD CONSTRAINT "address_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "address_directus_users" ADD CONSTRAINT "address_directus_users_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "agreements_products" ADD CONSTRAINT "agreements_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_prompts" ADD CONSTRAINT "ai_prompts_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ai_prompts" ADD CONSTRAINT "ai_prompts_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "announcements" ADD CONSTRAINT "announcements_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles" ADD CONSTRAINT "articles_author_foreign" FOREIGN KEY ("author") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_categories" ADD CONSTRAINT "articles_categories_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_categories" ADD CONSTRAINT "articles_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_comments" ADD CONSTRAINT "articles_comments_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_comments" ADD CONSTRAINT "articles_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_departments" ADD CONSTRAINT "articles_departments_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "articles_departments" ADD CONSTRAINT "articles_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attributes_product_types" ADD CONSTRAINT "attributes_product_types_attributes_id_foreign" FOREIGN KEY ("attributes_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attributes_product_types" ADD CONSTRAINT "attributes_product_types_product_types_id_foreign" FOREIGN KEY ("product_types_id") REFERENCES "public"."product_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attributes_products" ADD CONSTRAINT "attributes_products_attributes_id_foreign" FOREIGN KEY ("attributes_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "attributes_products" ADD CONSTRAINT "attributes_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "auction_lots" ADD CONSTRAINT "auction_lots_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "bids" ADD CONSTRAINT "bids_lot_id_fkey" FOREIGN KEY ("lot_id") REFERENCES "public"."auction_lots"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands" ADD CONSTRAINT "brands_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_categories" ADD CONSTRAINT "brands_categories_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_categories" ADD CONSTRAINT "brands_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_departments" ADD CONSTRAINT "brands_departments_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_departments" ADD CONSTRAINT "brands_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_manufacturer" ADD CONSTRAINT "brands_manufacturer_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_manufacturer" ADD CONSTRAINT "brands_manufacturer_manufacturer_id_foreign" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_products" ADD CONSTRAINT "brands_products_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_products" ADD CONSTRAINT "brands_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_shorts" ADD CONSTRAINT "brands_shorts_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "brands_shorts" ADD CONSTRAINT "brands_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar" ADD CONSTRAINT "calendar_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_comments" ADD CONSTRAINT "calendar_comments_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_comments" ADD CONSTRAINT "calendar_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_directus_users" ADD CONSTRAINT "calendar_directus_users_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_directus_users" ADD CONSTRAINT "calendar_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_events" ADD CONSTRAINT "calendar_events_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_integrations" ADD CONSTRAINT "calendar_integrations_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_integrations" ADD CONSTRAINT "calendar_integrations_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_lists" ADD CONSTRAINT "calendar_lists_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "calendar_lists" ADD CONSTRAINT "calendar_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart" ADD CONSTRAINT "cart_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_cart_items" ADD CONSTRAINT "cart_cart_items_cart_id_foreign" FOREIGN KEY ("cart_id") REFERENCES "public"."cart"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_cart_items" ADD CONSTRAINT "cart_cart_items_cart_items_id_foreign" FOREIGN KEY ("cart_items_id") REFERENCES "public"."cart_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_cart_foreign" FOREIGN KEY ("cart") REFERENCES "public"."cart"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_items" ADD CONSTRAINT "cart_items_products_foreign" FOREIGN KEY ("products") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_products" ADD CONSTRAINT "cart_products_cart_id_foreign" FOREIGN KEY ("cart_id") REFERENCES "public"."cart"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cart_products" ADD CONSTRAINT "cart_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_departments" ADD CONSTRAINT "categories_departments_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_departments" ADD CONSTRAINT "categories_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_postgresstores" ADD CONSTRAINT "categories_postgresstores_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_postgresstores" ADD CONSTRAINT "categories_postgresstores_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_shorts" ADD CONSTRAINT "categories_shorts_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "categories_shorts" ADD CONSTRAINT "categories_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chart_entries" ADD CONSTRAINT "chart_entries_chart_id_foreign" FOREIGN KEY ("chart_id") REFERENCES "public"."charts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chart_entries" ADD CONSTRAINT "chart_entries_product_id_foreign" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts" ADD CONSTRAINT "charts_icon_foreign" FOREIGN KEY ("icon") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_departments" ADD CONSTRAINT "charts_departments_charts_id_foreign" FOREIGN KEY ("charts_id") REFERENCES "public"."charts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_departments" ADD CONSTRAINT "charts_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_products" ADD CONSTRAINT "charts_products_charts_id_foreign" FOREIGN KEY ("charts_id") REFERENCES "public"."charts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_products" ADD CONSTRAINT "charts_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_radios" ADD CONSTRAINT "charts_radios_charts_id_foreign" FOREIGN KEY ("charts_id") REFERENCES "public"."charts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "charts_radios" ADD CONSTRAINT "charts_radios_radios_id_foreign" FOREIGN KEY ("radios_id") REFERENCES "public"."radios"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat" ADD CONSTRAINT "chat_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat" ADD CONSTRAINT "chat_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "chat" ADD CONSTRAINT "chat_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "circles_directus_users" ADD CONSTRAINT "circles_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "circles_posts" ADD CONSTRAINT "circles_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "circles_products" ADD CONSTRAINT "circles_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cities_countries" ADD CONSTRAINT "cities_countries_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cities_states" ADD CONSTRAINT "cities_states_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_brands" ADD CONSTRAINT "collections_brands_brands_id_foreign" FOREIGN KEY ("brands_id") REFERENCES "public"."brands"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_brands" ADD CONSTRAINT "collections_brands_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_products" ADD CONSTRAINT "collections_products_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_products" ADD CONSTRAINT "collections_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_spaces" ADD CONSTRAINT "collections_spaces_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "collections_spaces" ADD CONSTRAINT "collections_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_directus_users" ADD CONSTRAINT "comments_directus_users_comment_id_foreign" FOREIGN KEY ("comment_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_products" ADD CONSTRAINT "comments_products_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_products" ADD CONSTRAINT "comments_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_reactions" ADD CONSTRAINT "comments_reactions_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_reactions" ADD CONSTRAINT "comments_reactions_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_shorts" ADD CONSTRAINT "comments_shorts_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments_shorts" ADD CONSTRAINT "comments_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "connections_directus_users" ADD CONSTRAINT "connections_directus_users_connections_id_foreign" FOREIGN KEY ("connections_id") REFERENCES "public"."connections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "countries_currency" ADD CONSTRAINT "countries_currency_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "countries_currency" ADD CONSTRAINT "countries_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "countries_timezones" ADD CONSTRAINT "countries_timezones_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "countries_timezones" ADD CONSTRAINT "countries_timezones_timezones_id_foreign" FOREIGN KEY ("timezones_id") REFERENCES "public"."timezones"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "coupons_products" ADD CONSTRAINT "coupons_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_sell_products" ADD CONSTRAINT "cross_sell_products_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_sell_products_products" ADD CONSTRAINT "cross_sell_products_products_cross_sell_products_id_foreign" FOREIGN KEY ("cross_sell_products_id") REFERENCES "public"."cross_sell_products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cross_sell_products_products" ADD CONSTRAINT "cross_sell_products_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "currency_departments" ADD CONSTRAINT "currency_departments_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "currency_departments" ADD CONSTRAINT "currency_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_categories" ADD CONSTRAINT "departments_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_categories" ADD CONSTRAINT "departments_categories_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_collections" ADD CONSTRAINT "departments_collections_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_collections" ADD CONSTRAINT "departments_collections_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_products" ADD CONSTRAINT "departments_products_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_products" ADD CONSTRAINT "departments_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_shorts" ADD CONSTRAINT "departments_shorts_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_shorts" ADD CONSTRAINT "departments_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_showcases" ADD CONSTRAINT "departments_showcases_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "departments_showcases" ADD CONSTRAINT "departments_showcases_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_access" ADD CONSTRAINT "directus_access_policy_foreign" FOREIGN KEY ("policy") REFERENCES "public"."directus_policies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_access" ADD CONSTRAINT "directus_access_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_access" ADD CONSTRAINT "directus_access_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_collections" ADD CONSTRAINT "directus_collections_group_foreign" FOREIGN KEY ("group") REFERENCES "public"."directus_collections"("collection") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_comments" ADD CONSTRAINT "directus_comments_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_comments" ADD CONSTRAINT "directus_comments_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_dashboards" ADD CONSTRAINT "directus_dashboards_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_files" ADD CONSTRAINT "directus_files_folder_foreign" FOREIGN KEY ("folder") REFERENCES "public"."directus_folders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_files" ADD CONSTRAINT "directus_files_modified_by_foreign" FOREIGN KEY ("modified_by") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_files" ADD CONSTRAINT "directus_files_uploaded_by_foreign" FOREIGN KEY ("uploaded_by") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_flows" ADD CONSTRAINT "directus_flows_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_folders" ADD CONSTRAINT "directus_folders_parent_foreign" FOREIGN KEY ("parent") REFERENCES "public"."directus_folders"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_notifications" ADD CONSTRAINT "directus_notifications_recipient_foreign" FOREIGN KEY ("recipient") REFERENCES "public"."directus_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_notifications" ADD CONSTRAINT "directus_notifications_sender_foreign" FOREIGN KEY ("sender") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_flow_foreign" FOREIGN KEY ("flow") REFERENCES "public"."directus_flows"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_reject_foreign" FOREIGN KEY ("reject") REFERENCES "public"."directus_operations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_resolve_foreign" FOREIGN KEY ("resolve") REFERENCES "public"."directus_operations"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_operations" ADD CONSTRAINT "directus_operations_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_panels" ADD CONSTRAINT "directus_panels_dashboard_foreign" FOREIGN KEY ("dashboard") REFERENCES "public"."directus_dashboards"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_panels" ADD CONSTRAINT "directus_panels_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_permissions" ADD CONSTRAINT "directus_permissions_policy_foreign" FOREIGN KEY ("policy") REFERENCES "public"."directus_policies"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_presets" ADD CONSTRAINT "directus_presets_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_presets" ADD CONSTRAINT "directus_presets_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_revisions" ADD CONSTRAINT "directus_revisions_activity_foreign" FOREIGN KEY ("activity") REFERENCES "public"."directus_activity"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_revisions" ADD CONSTRAINT "directus_revisions_parent_foreign" FOREIGN KEY ("parent") REFERENCES "public"."directus_revisions"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_revisions" ADD CONSTRAINT "directus_revisions_version_foreign" FOREIGN KEY ("version") REFERENCES "public"."directus_versions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_roles" ADD CONSTRAINT "directus_roles_parent_foreign" FOREIGN KEY ("parent") REFERENCES "public"."directus_roles"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_sessions" ADD CONSTRAINT "directus_sessions_share_foreign" FOREIGN KEY ("share") REFERENCES "public"."directus_shares"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_sessions" ADD CONSTRAINT "directus_sessions_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_project_logo_foreign" FOREIGN KEY ("project_logo") REFERENCES "public"."directus_files"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_background_foreign" FOREIGN KEY ("public_background") REFERENCES "public"."directus_files"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_favicon_foreign" FOREIGN KEY ("public_favicon") REFERENCES "public"."directus_files"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_foreground_foreign" FOREIGN KEY ("public_foreground") REFERENCES "public"."directus_files"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_public_registration_role_foreign" FOREIGN KEY ("public_registration_role") REFERENCES "public"."directus_roles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_settings" ADD CONSTRAINT "directus_settings_storage_default_folder_foreign" FOREIGN KEY ("storage_default_folder") REFERENCES "public"."directus_folders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_shares" ADD CONSTRAINT "directus_shares_collection_foreign" FOREIGN KEY ("collection") REFERENCES "public"."directus_collections"("collection") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_shares" ADD CONSTRAINT "directus_shares_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_shares" ADD CONSTRAINT "directus_shares_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_users" ADD CONSTRAINT "directus_users_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_versions" ADD CONSTRAINT "directus_versions_collection_foreign" FOREIGN KEY ("collection") REFERENCES "public"."directus_collections"("collection") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_versions" ADD CONSTRAINT "directus_versions_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_versions" ADD CONSTRAINT "directus_versions_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "directus_webhooks" ADD CONSTRAINT "directus_webhooks_migrated_flow_foreign" FOREIGN KEY ("migrated_flow") REFERENCES "public"."directus_flows"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "emoji_reactions" ADD CONSTRAINT "emoji_reactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events" ADD CONSTRAINT "events_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_cities" ADD CONSTRAINT "events_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_cities" ADD CONSTRAINT "events_cities_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_countries" ADD CONSTRAINT "events_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_countries" ADD CONSTRAINT "events_countries_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_coupons" ADD CONSTRAINT "events_coupons_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_directus_users" ADD CONSTRAINT "events_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_directus_users" ADD CONSTRAINT "events_directus_users_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_files" ADD CONSTRAINT "events_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_files" ADD CONSTRAINT "events_files_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_invoices" ADD CONSTRAINT "events_invoices_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_invoices" ADD CONSTRAINT "events_invoices_invoices_id_foreign" FOREIGN KEY ("invoices_id") REFERENCES "public"."invoices"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_lists" ADD CONSTRAINT "events_lists_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_lists" ADD CONSTRAINT "events_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_posts" ADD CONSTRAINT "events_posts_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_posts" ADD CONSTRAINT "events_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_products" ADD CONSTRAINT "events_products_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_products" ADD CONSTRAINT "events_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_states" ADD CONSTRAINT "events_states_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "events_states" ADD CONSTRAINT "events_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_directus_users" ADD CONSTRAINT "faqs_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_directus_users" ADD CONSTRAINT "faqs_directus_users_faqs_id_foreign" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_files" ADD CONSTRAINT "faqs_files_faqs_id_foreign" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_products" ADD CONSTRAINT "faqs_products_faqs_id_foreign" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs_products" ADD CONSTRAINT "faqs_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "federated_spaces_spaces" ADD CONSTRAINT "federated_spaces_spaces_federated_spaces_id_foreign" FOREIGN KEY ("federated_spaces_id") REFERENCES "public"."federated_spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "federated_spaces_spaces" ADD CONSTRAINT "federated_spaces_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feeds" ADD CONSTRAINT "feeds_shop_foreign" FOREIGN KEY ("shop") REFERENCES "public"."shops"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feeds_posts" ADD CONSTRAINT "feeds_posts_feed_id_foreign" FOREIGN KEY ("feed_id") REFERENCES "public"."feeds"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "feeds_posts" ADD CONSTRAINT "feeds_posts_post_id_foreign" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_articles" ADD CONSTRAINT "finance_index_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_articles" ADD CONSTRAINT "finance_index_articles_finance_index_id_foreign" FOREIGN KEY ("finance_index_id") REFERENCES "public"."finance_index"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_currency" ADD CONSTRAINT "finance_index_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_currency" ADD CONSTRAINT "finance_index_currency_finance_index_id_foreign" FOREIGN KEY ("finance_index_id") REFERENCES "public"."finance_index"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_region" ADD CONSTRAINT "finance_index_region_finance_index_id_foreign" FOREIGN KEY ("finance_index_id") REFERENCES "public"."finance_index"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "finance_index_region" ADD CONSTRAINT "finance_index_region_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_anniversaries_foreign" FOREIGN KEY ("anniversaries") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_birthdays_foreign" FOREIGN KEY ("birthdays") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_leaderboards_foreign" FOREIGN KEY ("leaderboards") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_nomination_user_foreign" FOREIGN KEY ("nomination_user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_user_profile_foreign" FOREIGN KEY ("user_profile") REFERENCES "public"."user_profile"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification" ADD CONSTRAINT "gamification_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_directus_users" ADD CONSTRAINT "gamification_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_directus_users" ADD CONSTRAINT "gamification_directus_users_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_events" ADD CONSTRAINT "gamification_events_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_events" ADD CONSTRAINT "gamification_events_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_notifications" ADD CONSTRAINT "gamification_notifications_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_notifications" ADD CONSTRAINT "gamification_notifications_notifications_id_foreign" FOREIGN KEY ("notifications_id") REFERENCES "public"."notifications"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_products" ADD CONSTRAINT "gamification_products_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_products" ADD CONSTRAINT "gamification_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_videos" ADD CONSTRAINT "gamification_videos_gamification_id_foreign" FOREIGN KEY ("gamification_id") REFERENCES "public"."gamification"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "gamification_videos" ADD CONSTRAINT "gamification_videos_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_cities" ADD CONSTRAINT "geo_regions_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_cities" ADD CONSTRAINT "geo_regions_cities_geo_regions_id_foreign" FOREIGN KEY ("geo_regions_id") REFERENCES "public"."geo_regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_countries" ADD CONSTRAINT "geo_regions_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_countries" ADD CONSTRAINT "geo_regions_countries_geo_regions_id_foreign" FOREIGN KEY ("geo_regions_id") REFERENCES "public"."geo_regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_states" ADD CONSTRAINT "geo_regions_states_geo_regions_id_foreign" FOREIGN KEY ("geo_regions_id") REFERENCES "public"."geo_regions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "geo_regions_states" ADD CONSTRAINT "geo_regions_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives" ADD CONSTRAINT "incentives_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_currency" ADD CONSTRAINT "incentives_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_currency" ADD CONSTRAINT "incentives_currency_incentives_id_foreign" FOREIGN KEY ("incentives_id") REFERENCES "public"."incentives"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_orders" ADD CONSTRAINT "incentives_orders_incentives_id_foreign" FOREIGN KEY ("incentives_id") REFERENCES "public"."incentives"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_orders" ADD CONSTRAINT "incentives_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_products" ADD CONSTRAINT "incentives_products_incentives_id_foreign" FOREIGN KEY ("incentives_id") REFERENCES "public"."incentives"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "incentives_products" ADD CONSTRAINT "incentives_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations" ADD CONSTRAINT "integrations_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations" ADD CONSTRAINT "integrations_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_attributes" ADD CONSTRAINT "integrations_attributes_attributes_id_foreign" FOREIGN KEY ("attributes_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_attributes" ADD CONSTRAINT "integrations_attributes_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_categories" ADD CONSTRAINT "integrations_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_categories" ADD CONSTRAINT "integrations_categories_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_departments" ADD CONSTRAINT "integrations_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_departments" ADD CONSTRAINT "integrations_departments_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_files" ADD CONSTRAINT "integrations_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_files" ADD CONSTRAINT "integrations_files_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_platform" ADD CONSTRAINT "integrations_platform_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_platform" ADD CONSTRAINT "integrations_platform_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_product_types" ADD CONSTRAINT "integrations_product_types_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_product_types" ADD CONSTRAINT "integrations_product_types_product_types_id_foreign" FOREIGN KEY ("product_types_id") REFERENCES "public"."product_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_ratings" ADD CONSTRAINT "integrations_ratings_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_ratings" ADD CONSTRAINT "integrations_ratings_ratings_id_foreign" FOREIGN KEY ("ratings_id") REFERENCES "public"."ratings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_report" ADD CONSTRAINT "integrations_report_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_report" ADD CONSTRAINT "integrations_report_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_spaces" ADD CONSTRAINT "integrations_spaces_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_spaces" ADD CONSTRAINT "integrations_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_tags" ADD CONSTRAINT "integrations_tags_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "integrations_tags" ADD CONSTRAINT "integrations_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_address" ADD CONSTRAINT "invoices_address_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_address" ADD CONSTRAINT "invoices_address_invoice_id_foreign" FOREIGN KEY ("invoice_id") REFERENCES "public"."invoices"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_orders" ADD CONSTRAINT "invoices_orders_invoice_id_foreign" FOREIGN KEY ("invoice_id") REFERENCES "public"."invoices"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_orders" ADD CONSTRAINT "invoices_orders_order_id_foreign" FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_shipping_address" ADD CONSTRAINT "invoices_shipping_address_invoice_id_foreign" FOREIGN KEY ("invoice_id") REFERENCES "public"."invoices"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invoices_shipping_address" ADD CONSTRAINT "invoices_shipping_address_shipping_address_id_foreign" FOREIGN KEY ("shipping_address_id") REFERENCES "public"."shipping_address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_list_id_foreign" FOREIGN KEY ("list_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_media_foreign" FOREIGN KEY ("media") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_post_id_foreign" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items" ADD CONSTRAINT "list_items_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items_directus_users" ADD CONSTRAINT "list_items_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items_directus_users" ADD CONSTRAINT "list_items_directus_users_list_items_id_foreign" FOREIGN KEY ("list_items_id") REFERENCES "public"."list_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items_products" ADD CONSTRAINT "list_items_products_list_items_id_foreign" FOREIGN KEY ("list_items_id") REFERENCES "public"."list_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_items_products" ADD CONSTRAINT "list_items_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_products_lists" ADD CONSTRAINT "list_products_lists_list_products_id_foreign" FOREIGN KEY ("list_products_id") REFERENCES "public"."list_products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "list_products_lists" ADD CONSTRAINT "list_products_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_categories" ADD CONSTRAINT "lists_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_categories" ADD CONSTRAINT "lists_categories_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_departments" ADD CONSTRAINT "lists_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_departments" ADD CONSTRAINT "lists_departments_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_directus_users" ADD CONSTRAINT "lists_directus_users_list_id_foreign" FOREIGN KEY ("list_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_files" ADD CONSTRAINT "lists_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_files" ADD CONSTRAINT "lists_files_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_products" ADD CONSTRAINT "lists_products_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_products" ADD CONSTRAINT "lists_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_shorts" ADD CONSTRAINT "lists_shorts_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_shorts" ADD CONSTRAINT "lists_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template" ADD CONSTRAINT "lists_template_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template" ADD CONSTRAINT "lists_template_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_directus_users" ADD CONSTRAINT "lists_template_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_directus_users" ADD CONSTRAINT "lists_template_directus_users_lists_template_id_foreign" FOREIGN KEY ("lists_template_id") REFERENCES "public"."lists_template"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_list_items" ADD CONSTRAINT "lists_template_list_items_list_items_id_foreign" FOREIGN KEY ("list_items_id") REFERENCES "public"."list_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_list_items" ADD CONSTRAINT "lists_template_list_items_lists_template_id_foreign" FOREIGN KEY ("lists_template_id") REFERENCES "public"."lists_template"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_tags" ADD CONSTRAINT "lists_template_tags_lists_template_id_foreign" FOREIGN KEY ("lists_template_id") REFERENCES "public"."lists_template"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_template_tags" ADD CONSTRAINT "lists_template_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_templates" ADD CONSTRAINT "lists_templates_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_templates" ADD CONSTRAINT "lists_templates_templates_id_foreign" FOREIGN KEY ("templates_id") REFERENCES "public"."templates"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type" ADD CONSTRAINT "lists_type_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type" ADD CONSTRAINT "lists_type_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type_categories" ADD CONSTRAINT "lists_type_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type_categories" ADD CONSTRAINT "lists_type_categories_lists_type_id_foreign" FOREIGN KEY ("lists_type_id") REFERENCES "public"."lists_type"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type_lists" ADD CONSTRAINT "lists_type_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists_type_lists" ADD CONSTRAINT "lists_type_lists_lists_type_id_foreign" FOREIGN KEY ("lists_type_id") REFERENCES "public"."lists_type"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "manufacturer_countries" ADD CONSTRAINT "manufacturer_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "manufacturer_countries" ADD CONSTRAINT "manufacturer_countries_manufacturer_id_foreign" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_profile_id_foreign" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media" ADD CONSTRAINT "media_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_files" ADD CONSTRAINT "media_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_files" ADD CONSTRAINT "media_files_media_id_foreign" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders" ADD CONSTRAINT "media_folders_parent_folder_foreign" FOREIGN KEY ("parent_folder") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders" ADD CONSTRAINT "media_folders_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders" ADD CONSTRAINT "media_folders_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders" ADD CONSTRAINT "media_folders_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders_directus_users" ADD CONSTRAINT "media_folders_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "media_folders_directus_users" ADD CONSTRAINT "media_folders_directus_users_media_folders_id_foreign" FOREIGN KEY ("media_folders_id") REFERENCES "public"."media_folders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_groups_events" ADD CONSTRAINT "member_groups_events_events_id_foreign" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_groups_polls" ADD CONSTRAINT "member_groups_polls_polls_id_foreign" FOREIGN KEY ("polls_id") REFERENCES "public"."polls"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_groups_posts" ADD CONSTRAINT "member_groups_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "member_groups_products" ADD CONSTRAINT "member_groups_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments_products" ADD CONSTRAINT "moments_products_moments_id_foreign" FOREIGN KEY ("moments_id") REFERENCES "public"."moments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments_products" ADD CONSTRAINT "moments_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments_spaces" ADD CONSTRAINT "moments_spaces_moments_id_foreign" FOREIGN KEY ("moments_id") REFERENCES "public"."moments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "moments_spaces" ADD CONSTRAINT "moments_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "musicchart_departments" ADD CONSTRAINT "musicchart_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "navigation_pages" ADD CONSTRAINT "navigation_pages_navigation_id_foreign" FOREIGN KEY ("navigation_id") REFERENCES "public"."navigation"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "navigation_pages" ADD CONSTRAINT "navigation_pages_pages_id_foreign" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "navigation_websites" ADD CONSTRAINT "navigation_websites_navigation_id_foreign" FOREIGN KEY ("navigation_id") REFERENCES "public"."navigation"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "navigation_websites" ADD CONSTRAINT "navigation_websites_websites_id_foreign" FOREIGN KEY ("websites_id") REFERENCES "public"."websites"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_recipient_foreign" FOREIGN KEY ("recipient") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items_orders" ADD CONSTRAINT "order_items_orders_order_items_id_foreign" FOREIGN KEY ("order_items_id") REFERENCES "public"."order_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items_orders" ADD CONSTRAINT "order_items_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items_products" ADD CONSTRAINT "order_items_products_order_items_id_foreign" FOREIGN KEY ("order_items_id") REFERENCES "public"."order_items"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "order_items_products" ADD CONSTRAINT "order_items_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders" ADD CONSTRAINT "orders_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders_products" ADD CONSTRAINT "orders_products_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orders_products" ADD CONSTRAINT "orders_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets" ADD CONSTRAINT "outlets_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets_categories" ADD CONSTRAINT "outlets_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets_categories" ADD CONSTRAINT "outlets_categories_outlets_id_foreign" FOREIGN KEY ("outlets_id") REFERENCES "public"."outlets"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets_shorts" ADD CONSTRAINT "outlets_shorts_outlets_id_foreign" FOREIGN KEY ("outlets_id") REFERENCES "public"."outlets"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "outlets_shorts" ADD CONSTRAINT "outlets_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "page_blocks" ADD CONSTRAINT "page_blocks_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "page_blocks" ADD CONSTRAINT "page_blocks_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "page_blocks_files" ADD CONSTRAINT "page_blocks_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "page_blocks_files" ADD CONSTRAINT "page_blocks_files_page_blocks_id_foreign" FOREIGN KEY ("page_blocks_id") REFERENCES "public"."page_blocks"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_countries" ADD CONSTRAINT "payments_countries_country_id_foreign" FOREIGN KEY ("country_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_countries" ADD CONSTRAINT "payments_countries_payment_id_foreign" FOREIGN KEY ("payment_id") REFERENCES "public"."payments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_currency" ADD CONSTRAINT "payments_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_currency" ADD CONSTRAINT "payments_currency_payments_id_foreign" FOREIGN KEY ("payments_id") REFERENCES "public"."payments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_directus_users" ADD CONSTRAINT "payments_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_directus_users" ADD CONSTRAINT "payments_directus_users_payments_id_foreign" FOREIGN KEY ("payments_id") REFERENCES "public"."payments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_orders" ADD CONSTRAINT "payments_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "payments_orders" ADD CONSTRAINT "payments_orders_payments_id_foreign" FOREIGN KEY ("payments_id") REFERENCES "public"."payments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pickup_locations_city" ADD CONSTRAINT "pickup_locations_city_pickup_locations_id_foreign" FOREIGN KEY ("pickup_locations_id") REFERENCES "public"."pickup_locations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pickup_locations_country" ADD CONSTRAINT "pickup_locations_country_pickup_locations_id_foreign" FOREIGN KEY ("pickup_locations_id") REFERENCES "public"."pickup_locations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pickup_locations_state" ADD CONSTRAINT "pickup_locations_state_pickup_locations_id_foreign" FOREIGN KEY ("pickup_locations_id") REFERENCES "public"."pickup_locations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform" ADD CONSTRAINT "platform_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_articles" ADD CONSTRAINT "platform_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_articles" ADD CONSTRAINT "platform_articles_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_categories" ADD CONSTRAINT "platform_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_categories" ADD CONSTRAINT "platform_categories_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_lists" ADD CONSTRAINT "platform_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_lists" ADD CONSTRAINT "platform_lists_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_navigation" ADD CONSTRAINT "platform_navigation_navigation_id_foreign" FOREIGN KEY ("navigation_id") REFERENCES "public"."navigation"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_navigation" ADD CONSTRAINT "platform_navigation_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_page_blocks" ADD CONSTRAINT "platform_page_blocks_page_blocks_id_foreign" FOREIGN KEY ("page_blocks_id") REFERENCES "public"."page_blocks"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_page_blocks" ADD CONSTRAINT "platform_page_blocks_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_pages" ADD CONSTRAINT "platform_pages_pages_id_foreign" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_pages" ADD CONSTRAINT "platform_pages_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_products" ADD CONSTRAINT "platform_products_platform_id_foreign" FOREIGN KEY ("platform_id") REFERENCES "public"."platform"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "platform_products" ADD CONSTRAINT "platform_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls" ADD CONSTRAINT "polls_author_foreign" FOREIGN KEY ("author") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls" ADD CONSTRAINT "polls_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls" ADD CONSTRAINT "polls_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls" ADD CONSTRAINT "polls_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls_spaces" ADD CONSTRAINT "polls_spaces_polls_id_foreign" FOREIGN KEY ("polls_id") REFERENCES "public"."polls"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "polls_spaces" ADD CONSTRAINT "polls_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_collections" ADD CONSTRAINT "postgresstores_collections_collections_id_foreign" FOREIGN KEY ("collections_id") REFERENCES "public"."collections"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_collections" ADD CONSTRAINT "postgresstores_collections_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_products" ADD CONSTRAINT "postgresstores_products_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_products" ADD CONSTRAINT "postgresstores_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_websites" ADD CONSTRAINT "postgresstores_websites_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "postgresstores_websites" ADD CONSTRAINT "postgresstores_websites_websites_id_foreign" FOREIGN KEY ("websites_id") REFERENCES "public"."websites"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_audio_foreign" FOREIGN KEY ("audio") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_author_foreign" FOREIGN KEY ("author") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts" ADD CONSTRAINT "posts_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts_polls" ADD CONSTRAINT "posts_polls_polls_id_foreign" FOREIGN KEY ("polls_id") REFERENCES "public"."polls"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "posts_polls" ADD CONSTRAINT "posts_polls_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_attributes" ADD CONSTRAINT "product_attributes_attribute_id_foreign" FOREIGN KEY ("attribute_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_attributes" ADD CONSTRAINT "product_attributes_product_id_foreign" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_types_products" ADD CONSTRAINT "product_types_products_product_types_id_foreign" FOREIGN KEY ("product_types_id") REFERENCES "public"."product_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "product_types_products" ADD CONSTRAINT "product_types_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_attributes" ADD CONSTRAINT "products_attributes_attributes_id_foreign" FOREIGN KEY ("attributes_id") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_attributes" ADD CONSTRAINT "products_attributes_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_categories" ADD CONSTRAINT "products_categories_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_countries" ADD CONSTRAINT "products_countries_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_currency" ADD CONSTRAINT "products_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_currency" ADD CONSTRAINT "products_currency_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_departments" ADD CONSTRAINT "products_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_departments" ADD CONSTRAINT "products_departments_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_directus_users" ADD CONSTRAINT "products_directus_users_product_id_foreign" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_manufacturer" ADD CONSTRAINT "products_manufacturer_manufacturer_id_foreign" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_manufacturer" ADD CONSTRAINT "products_manufacturer_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_product_designer" ADD CONSTRAINT "products_product_designer_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_spaces" ADD CONSTRAINT "products_spaces_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_spaces" ADD CONSTRAINT "products_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_tags" ADD CONSTRAINT "products_tags_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_tags" ADD CONSTRAINT "products_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_websites" ADD CONSTRAINT "products_websites_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "products_websites" ADD CONSTRAINT "products_websites_websites_id_foreign" FOREIGN KEY ("websites_id") REFERENCES "public"."websites"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_avatar_foreign" FOREIGN KEY ("avatar") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_fkey" FOREIGN KEY ("id") REFERENCES "public"."profiles"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_role_foreign" FOREIGN KEY ("role") REFERENCES "public"."directus_roles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_cities" ADD CONSTRAINT "profiles_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_cities" ADD CONSTRAINT "profiles_cities_profiles_id_foreign" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_countries" ADD CONSTRAINT "profiles_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_countries" ADD CONSTRAINT "profiles_countries_profiles_id_foreign" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_followers" ADD CONSTRAINT "profiles_followers_followers_id_foreign" FOREIGN KEY ("followers_id") REFERENCES "public"."followers"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_followers" ADD CONSTRAINT "profiles_followers_profiles_id_foreign" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_states" ADD CONSTRAINT "profiles_states_profiles_id_foreign" FOREIGN KEY ("profiles_id") REFERENCES "public"."profiles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "profiles_states" ADD CONSTRAINT "profiles_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board" ADD CONSTRAINT "project_board_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board" ADD CONSTRAINT "project_board_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_comments" ADD CONSTRAINT "project_board_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_comments" ADD CONSTRAINT "project_board_comments_project_board_id_foreign" FOREIGN KEY ("project_board_id") REFERENCES "public"."project_board"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_directus_users" ADD CONSTRAINT "project_board_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_directus_users" ADD CONSTRAINT "project_board_directus_users_project_board_id_foreign" FOREIGN KEY ("project_board_id") REFERENCES "public"."project_board"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_files" ADD CONSTRAINT "project_board_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_files" ADD CONSTRAINT "project_board_files_project_board_id_foreign" FOREIGN KEY ("project_board_id") REFERENCES "public"."project_board"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_projects" ADD CONSTRAINT "project_board_projects_project_board_id_foreign" FOREIGN KEY ("project_board_id") REFERENCES "public"."project_board"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "project_board_projects" ADD CONSTRAINT "project_board_projects_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_icon_foreign" FOREIGN KEY ("icon") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_calendar" ADD CONSTRAINT "projects_calendar_calendar_id_foreign" FOREIGN KEY ("calendar_id") REFERENCES "public"."calendar"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_calendar" ADD CONSTRAINT "projects_calendar_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_comments" ADD CONSTRAINT "projects_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_comments" ADD CONSTRAINT "projects_comments_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_directus_users" ADD CONSTRAINT "projects_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_directus_users" ADD CONSTRAINT "projects_directus_users_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_files" ADD CONSTRAINT "projects_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_files" ADD CONSTRAINT "projects_files_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_integrations" ADD CONSTRAINT "projects_integrations_integrations_id_foreign" FOREIGN KEY ("integrations_id") REFERENCES "public"."integrations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_integrations" ADD CONSTRAINT "projects_integrations_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_lists" ADD CONSTRAINT "projects_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_lists" ADD CONSTRAINT "projects_lists_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_products" ADD CONSTRAINT "projects_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_products" ADD CONSTRAINT "projects_products_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_project_timeline" ADD CONSTRAINT "projects_project_timeline_project_timeline_id_foreign" FOREIGN KEY ("project_timeline_id") REFERENCES "public"."project_timeline"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_project_timeline" ADD CONSTRAINT "projects_project_timeline_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_region" ADD CONSTRAINT "projects_region_projects_id_foreign" FOREIGN KEY ("projects_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects_region" ADD CONSTRAINT "projects_region_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios" ADD CONSTRAINT "radios_file_foreign" FOREIGN KEY ("file") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios" ADD CONSTRAINT "radios_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios" ADD CONSTRAINT "radios_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios" ADD CONSTRAINT "radios_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_categories" ADD CONSTRAINT "radios_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_categories" ADD CONSTRAINT "radios_categories_radios_id_foreign" FOREIGN KEY ("radios_id") REFERENCES "public"."radios"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_departments" ADD CONSTRAINT "radios_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_departments" ADD CONSTRAINT "radios_departments_radios_id_foreign" FOREIGN KEY ("radios_id") REFERENCES "public"."radios"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "radios_musicchart" ADD CONSTRAINT "radios_musicchart_radios_id_foreign" FOREIGN KEY ("radios_id") REFERENCES "public"."radios"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings" ADD CONSTRAINT "ratings_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings_products" ADD CONSTRAINT "ratings_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ratings_products" ADD CONSTRAINT "ratings_products_ratings_id_foreign" FOREIGN KEY ("ratings_id") REFERENCES "public"."ratings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_list_id_foreign" FOREIGN KEY ("list_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_posts_foreign" FOREIGN KEY ("posts") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_product_foreign" FOREIGN KEY ("product") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_space_id_foreign" FOREIGN KEY ("space_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_user_id_foreign" FOREIGN KEY ("user_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions" ADD CONSTRAINT "reactions_video_id_foreign" FOREIGN KEY ("video_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_comments" ADD CONSTRAINT "reactions_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_comments" ADD CONSTRAINT "reactions_comments_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_directus_users" ADD CONSTRAINT "reactions_directus_users_reaction_id_foreign" FOREIGN KEY ("reaction_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_lists" ADD CONSTRAINT "reactions_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_lists" ADD CONSTRAINT "reactions_lists_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_posts" ADD CONSTRAINT "reactions_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_posts" ADD CONSTRAINT "reactions_posts_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_shorts" ADD CONSTRAINT "reactions_shorts_reactions_id_foreign" FOREIGN KEY ("reactions_id") REFERENCES "public"."reactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reactions_shorts" ADD CONSTRAINT "reactions_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "redirects" ADD CONSTRAINT "redirects_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "redirects" ADD CONSTRAINT "redirects_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_address" ADD CONSTRAINT "region_address_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_address" ADD CONSTRAINT "region_address_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_countries" ADD CONSTRAINT "region_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_countries" ADD CONSTRAINT "region_countries_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_shipping_address" ADD CONSTRAINT "region_shipping_address_region_id_foreign" FOREIGN KEY ("region_id") REFERENCES "public"."region"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "region_shipping_address" ADD CONSTRAINT "region_shipping_address_shipping_address_id_foreign" FOREIGN KEY ("shipping_address_id") REFERENCES "public"."shipping_address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_products" ADD CONSTRAINT "related_products_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_products_products" ADD CONSTRAINT "related_products_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_products_products" ADD CONSTRAINT "related_products_products_related_products_id_foreign" FOREIGN KEY ("related_products_id") REFERENCES "public"."related_products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_comments" ADD CONSTRAINT "report_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_comments" ADD CONSTRAINT "report_comments_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_directus_users" ADD CONSTRAINT "report_directus_users_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_faqs" ADD CONSTRAINT "report_faqs_faqs_id_foreign" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_faqs" ADD CONSTRAINT "report_faqs_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_posts" ADD CONSTRAINT "report_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_posts" ADD CONSTRAINT "report_posts_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_products" ADD CONSTRAINT "report_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_products" ADD CONSTRAINT "report_products_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_spaces" ADD CONSTRAINT "report_spaces_report_id_foreign" FOREIGN KEY ("report_id") REFERENCES "public"."report"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "report_spaces" ADD CONSTRAINT "report_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "returns_orders" ADD CONSTRAINT "returns_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "returns_orders" ADD CONSTRAINT "returns_orders_returns_id_foreign" FOREIGN KEY ("returns_id") REFERENCES "public"."returns"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "returns_products" ADD CONSTRAINT "returns_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "returns_products" ADD CONSTRAINT "returns_products_returns_id_foreign" FOREIGN KEY ("returns_id") REFERENCES "public"."returns"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "reviews_products" ADD CONSTRAINT "reviews_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seasons" ADD CONSTRAINT "seasons_name_foreign" FOREIGN KEY ("name") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seasons_videos" ADD CONSTRAINT "seasons_videos_seasons_id_foreign" FOREIGN KEY ("seasons_id") REFERENCES "public"."seasons"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "seasons_videos" ADD CONSTRAINT "seasons_videos_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment" ADD CONSTRAINT "shipment_order_foreign" FOREIGN KEY ("order") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_address" ADD CONSTRAINT "shipment_address_address_id_foreign" FOREIGN KEY ("address_id") REFERENCES "public"."address"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_address" ADD CONSTRAINT "shipment_address_shipment_id_foreign" FOREIGN KEY ("shipment_id") REFERENCES "public"."shipment"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_comments" ADD CONSTRAINT "shipment_comments_parent_id_foreign" FOREIGN KEY ("parent_id") REFERENCES "public"."shipment"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_products" ADD CONSTRAINT "shipment_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_products" ADD CONSTRAINT "shipment_products_shipment_id_foreign" FOREIGN KEY ("shipment_id") REFERENCES "public"."shipment"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipment_tracking" ADD CONSTRAINT "shipment_tracking_parent_id_foreign" FOREIGN KEY ("parent_id") REFERENCES "public"."shipment"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_cities" ADD CONSTRAINT "shipping_addresses_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_cities" ADD CONSTRAINT "shipping_addresses_cities_shipping_addresses_id_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_countries" ADD CONSTRAINT "shipping_addresses_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_countries" ADD CONSTRAINT "shipping_addresses_countries_shipping_addresses_id_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_directus_users" ADD CONSTRAINT "shipping_addresses_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_directus_users" ADD CONSTRAINT "shipping_addresses_directus_users_shipping__1c96539d_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_orders" ADD CONSTRAINT "shipping_addresses_orders_orders_id_foreign" FOREIGN KEY ("orders_id") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_orders" ADD CONSTRAINT "shipping_addresses_orders_shipping_addresses_id_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_states" ADD CONSTRAINT "shipping_addresses_states_shipping_addresses_id_foreign" FOREIGN KEY ("shipping_addresses_id") REFERENCES "public"."shipping_addresses"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shipping_addresses_states" ADD CONSTRAINT "shipping_addresses_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shop_type_shops" ADD CONSTRAINT "shop_type_shops_shop_type_id_foreign" FOREIGN KEY ("shop_type_id") REFERENCES "public"."shop_type"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shop_type_shops" ADD CONSTRAINT "shop_type_shops_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_agreements" ADD CONSTRAINT "shops_agreements_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_categories" ADD CONSTRAINT "shops_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_categories" ADD CONSTRAINT "shops_categories_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_comments" ADD CONSTRAINT "shops_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_comments" ADD CONSTRAINT "shops_comments_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_countries" ADD CONSTRAINT "shops_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_countries" ADD CONSTRAINT "shops_countries_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_departments" ADD CONSTRAINT "shops_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_departments" ADD CONSTRAINT "shops_departments_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_directus_users" ADD CONSTRAINT "shops_directus_users_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_files" ADD CONSTRAINT "shops_files_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_products" ADD CONSTRAINT "shops_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_products" ADD CONSTRAINT "shops_products_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_showcases" ADD CONSTRAINT "shops_showcases_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shops_showcases" ADD CONSTRAINT "shops_showcases_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts" ADD CONSTRAINT "shorts_video_foreign" FOREIGN KEY ("video") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_directus_users" ADD CONSTRAINT "shorts_directus_users_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_files" ADD CONSTRAINT "shorts_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_files" ADD CONSTRAINT "shorts_files_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_products" ADD CONSTRAINT "shorts_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_products" ADD CONSTRAINT "shorts_products_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_spaces" ADD CONSTRAINT "shorts_spaces_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "shorts_spaces" ADD CONSTRAINT "shorts_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases" ADD CONSTRAINT "showcases_owner_foreign" FOREIGN KEY ("owner") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_products" ADD CONSTRAINT "showcases_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_products" ADD CONSTRAINT "showcases_products_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_shops" ADD CONSTRAINT "showcases_shops_shops_id_foreign" FOREIGN KEY ("shops_id") REFERENCES "public"."shops"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_shops" ADD CONSTRAINT "showcases_shops_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_spaces" ADD CONSTRAINT "showcases_spaces_showcases_id_foreign" FOREIGN KEY ("showcases_id") REFERENCES "public"."showcases"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "showcases_spaces" ADD CONSTRAINT "showcases_spaces_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "site_preference_categories" ADD CONSTRAINT "site_preference_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "site_preference_countries" ADD CONSTRAINT "site_preference_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "site_preference_departments" ADD CONSTRAINT "site_preference_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "site_preference_products" ADD CONSTRAINT "site_preference_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "Space_products" ADD CONSTRAINT "space_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "space_types" ADD CONSTRAINT "space_types_icon_foreign" FOREIGN KEY ("icon") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_cover_image_foreign" FOREIGN KEY ("cover_image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_image_foreign" FOREIGN KEY ("image") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_owner_foreign" FOREIGN KEY ("owner") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces" ADD CONSTRAINT "spaces_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_articles" ADD CONSTRAINT "spaces_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_articles" ADD CONSTRAINT "spaces_articles_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_cities" ADD CONSTRAINT "spaces_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_cities" ADD CONSTRAINT "spaces_cities_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_countries" ADD CONSTRAINT "spaces_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_countries" ADD CONSTRAINT "spaces_countries_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_departments" ADD CONSTRAINT "spaces_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_departments" ADD CONSTRAINT "spaces_departments_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_directus_users" ADD CONSTRAINT "spaces_directus_users_directus_users_id_foreign" FOREIGN KEY ("directus_users_id") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_directus_users" ADD CONSTRAINT "spaces_directus_users_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_files" ADD CONSTRAINT "spaces_files_directus_files_id_foreign" FOREIGN KEY ("directus_files_id") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_files" ADD CONSTRAINT "spaces_files_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_lists" ADD CONSTRAINT "spaces_lists_lists_id_foreign" FOREIGN KEY ("lists_id") REFERENCES "public"."lists"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_lists" ADD CONSTRAINT "spaces_lists_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_live_rooms" ADD CONSTRAINT "spaces_live_rooms_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_posts" ADD CONSTRAINT "spaces_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_posts" ADD CONSTRAINT "spaces_posts_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_shop_type" ADD CONSTRAINT "spaces_shop_type_shop_type_id_foreign" FOREIGN KEY ("shop_type_id") REFERENCES "public"."shop_type"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_shop_type" ADD CONSTRAINT "spaces_shop_type_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_space_types" ADD CONSTRAINT "spaces_space_types_space_types_id_foreign" FOREIGN KEY ("space_types_id") REFERENCES "public"."space_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_space_types" ADD CONSTRAINT "spaces_space_types_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_states" ADD CONSTRAINT "spaces_states_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_states" ADD CONSTRAINT "spaces_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_tags" ADD CONSTRAINT "spaces_tags_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_tags" ADD CONSTRAINT "spaces_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_templates" ADD CONSTRAINT "spaces_templates_spaces_id_foreign" FOREIGN KEY ("spaces_id") REFERENCES "public"."spaces"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "spaces_templates" ADD CONSTRAINT "spaces_templates_templates_id_foreign" FOREIGN KEY ("templates_id") REFERENCES "public"."templates"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "states_cities" ADD CONSTRAINT "states_cities_cities_id_foreign" FOREIGN KEY ("cities_id") REFERENCES "public"."cities"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "states_cities" ADD CONSTRAINT "states_cities_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "streams" ADD CONSTRAINT "streams_stream_id_foreign" FOREIGN KEY ("stream_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "streams_ratings" ADD CONSTRAINT "streams_ratings_ratings_id_foreign" FOREIGN KEY ("ratings_id") REFERENCES "public"."ratings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "streams_ratings" ADD CONSTRAINT "streams_ratings_streams_id_foreign" FOREIGN KEY ("streams_id") REFERENCES "public"."streams"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions_directus_users" ADD CONSTRAINT "subscriptions_directus_users_subscriptions_id_foreign" FOREIGN KEY ("subscriptions_id") REFERENCES "public"."subscriptions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions_products" ADD CONSTRAINT "subscriptions_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "subscriptions_products" ADD CONSTRAINT "subscriptions_products_subscriptions_id_foreign" FOREIGN KEY ("subscriptions_id") REFERENCES "public"."subscriptions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_articles" ADD CONSTRAINT "tags_articles_articles_id_foreign" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_articles" ADD CONSTRAINT "tags_articles_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_categories" ADD CONSTRAINT "tags_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_categories" ADD CONSTRAINT "tags_categories_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_departments" ADD CONSTRAINT "tags_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_departments" ADD CONSTRAINT "tags_departments_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_posts" ADD CONSTRAINT "tags_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_posts" ADD CONSTRAINT "tags_posts_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_products" ADD CONSTRAINT "tags_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_products" ADD CONSTRAINT "tags_products_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_shorts" ADD CONSTRAINT "tags_shorts_shorts_id_foreign" FOREIGN KEY ("shorts_id") REFERENCES "public"."shorts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tags_shorts" ADD CONSTRAINT "tags_shorts_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taxes_countries" ADD CONSTRAINT "taxes_countries_countries_id_foreign" FOREIGN KEY ("countries_id") REFERENCES "public"."countries"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taxes_countries" ADD CONSTRAINT "taxes_countries_taxes_id_foreign" FOREIGN KEY ("taxes_id") REFERENCES "public"."taxes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taxes_states" ADD CONSTRAINT "taxes_states_states_id_foreign" FOREIGN KEY ("states_id") REFERENCES "public"."states"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "taxes_states" ADD CONSTRAINT "taxes_states_taxes_id_foreign" FOREIGN KEY ("taxes_id") REFERENCES "public"."taxes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "templates" ADD CONSTRAINT "templates_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "templates" ADD CONSTRAINT "templates_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "templates_space_types" ADD CONSTRAINT "templates_space_types_space_types_id_foreign" FOREIGN KEY ("space_types_id") REFERENCES "public"."space_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "templates_space_types" ADD CONSTRAINT "templates_space_types_templates_id_foreign" FOREIGN KEY ("templates_id") REFERENCES "public"."templates"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_order_foreign" FOREIGN KEY ("order") REFERENCES "public"."orders"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions_currency" ADD CONSTRAINT "transactions_currency_currency_id_foreign" FOREIGN KEY ("currency_id") REFERENCES "public"."currency"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "transactions_currency" ADD CONSTRAINT "transactions_currency_transactions_id_foreign" FOREIGN KEY ("transactions_id") REFERENCES "public"."transactions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "translations_postgresstores" ADD CONSTRAINT "translations_postgresstores_postgresstores_id_foreign" FOREIGN KEY ("postgresstores_id") REFERENCES "public"."postgresstores"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "translations_postgresstores" ADD CONSTRAINT "translations_postgresstores_translations_id_foreign" FOREIGN KEY ("translations_id") REFERENCES "public"."translations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_friend_foreign" FOREIGN KEY ("friend") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends" ADD CONSTRAINT "user_friends_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends_posts" ADD CONSTRAINT "user_friends_posts_posts_id_foreign" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_friends_posts" ADD CONSTRAINT "user_friends_posts_user_friends_id_foreign" FOREIGN KEY ("user_friends_id") REFERENCES "public"."user_friends"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_avatar_foreign" FOREIGN KEY ("avatar") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_profile" ADD CONSTRAINT "user_profile_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "variants" ADD CONSTRAINT "variants_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vibez_product_map" ADD CONSTRAINT "vibez_product_map_clip_id_fkey" FOREIGN KEY ("clip_id") REFERENCES "public"."vibez_clips"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "vibez_product_map" ADD CONSTRAINT "vibez_product_map_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_distributor_foreign" FOREIGN KEY ("distributor") REFERENCES "public"."attributes"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_media_foreign" FOREIGN KEY ("media") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_ratings_foreign" FOREIGN KEY ("ratings") REFERENCES "public"."ratings"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_thumbnail_foreign" FOREIGN KEY ("thumbnail") REFERENCES "public"."directus_files"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_user_created_foreign" FOREIGN KEY ("user_created") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_user_foreign" FOREIGN KEY ("user") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos" ADD CONSTRAINT "videos_user_updated_foreign" FOREIGN KEY ("user_updated") REFERENCES "public"."directus_users"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_categories" ADD CONSTRAINT "videos_categories_categories_id_foreign" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_categories" ADD CONSTRAINT "videos_categories_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_comments" ADD CONSTRAINT "videos_comments_comments_id_foreign" FOREIGN KEY ("comments_id") REFERENCES "public"."comments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_comments" ADD CONSTRAINT "videos_comments_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_departments" ADD CONSTRAINT "videos_departments_departments_id_foreign" FOREIGN KEY ("departments_id") REFERENCES "public"."departments"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_departments" ADD CONSTRAINT "videos_departments_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_manufacturer" ADD CONSTRAINT "videos_manufacturer_manufacturer_id_foreign" FOREIGN KEY ("manufacturer_id") REFERENCES "public"."manufacturer"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_manufacturer" ADD CONSTRAINT "videos_manufacturer_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_product_types" ADD CONSTRAINT "videos_product_types_product_types_id_foreign" FOREIGN KEY ("product_types_id") REFERENCES "public"."product_types"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_product_types" ADD CONSTRAINT "videos_product_types_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_products" ADD CONSTRAINT "videos_products_products_id_foreign" FOREIGN KEY ("products_id") REFERENCES "public"."products"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_products" ADD CONSTRAINT "videos_products_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_tags" ADD CONSTRAINT "videos_tags_tags_id_foreign" FOREIGN KEY ("tags_id") REFERENCES "public"."tags"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "videos_tags" ADD CONSTRAINT "videos_tags_videos_id_foreign" FOREIGN KEY ("videos_id") REFERENCES "public"."videos"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "websites" ADD CONSTRAINT "websites_creator_foreign" FOREIGN KEY ("creator") REFERENCES "public"."directus_users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "ai_prompts_name_index" ON "ai_prompts" USING btree ("name" text_ops);--> statement-breakpoint
CREATE INDEX "directus_activity_timestamp_index" ON "directus_activity" USING btree ("timestamp" timestamptz_ops);--> statement-breakpoint
CREATE INDEX "directus_revisions_parent_index" ON "directus_revisions" USING btree ("parent" int4_ops);--> statement-breakpoint
CREATE INDEX "profiles_supabase_user_id_index" ON "profiles" USING btree ("supabase_user_id" uuid_ops);--> statement-breakpoint
CREATE POLICY "Users can see their own newsfeed" ON "feeds" AS PERMISSIVE FOR SELECT TO public USING (("user" = auth.uid()));