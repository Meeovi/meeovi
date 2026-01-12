import { pgTable, foreignKey, serial, varchar, integer, uuid, timestamp, text, json, boolean, bigserial, bigint, numeric, char, index, unique, smallint, pgPolicy, date, check, time, real, jsonb, primaryKey, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const spaces = pgTable("spaces", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	numberOfMembers: integer(),
	description: text(),
	image: uuid(),
	products: varchar({ length: 255 }),
	groupRules: json("group_rules"),
	owner: uuid(),
	coverImage: uuid("cover_image"),
	customTabs: json("custom_tabs"),
	slug: varchar({ length: 255 }),
	customDomain: varchar("custom_domain", { length: 255 }),
	theme: json(),
	spaceAnalytics: boolean("space_analytics"),
	federationEnabled: boolean("federation_enabled"),
	defaultLanguage: varchar("default_language", { length: 255 }),
	inviteOnly: boolean("invite_only"),
	badgesEnabled: boolean("badges_enabled"),
	rss: json(),
	isShop: boolean("is_shop"),
	address: varchar({ length: 255 }),
	rating: integer(),
	shippingPolicy: text("shipping_policy"),
	trustedScore: varchar("trusted_score", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.coverImage],
			foreignColumns: [directusFiles.id],
			name: "spaces_cover_image_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "spaces_image_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.owner],
			foreignColumns: [directusUsers.id],
			name: "spaces_owner_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "spaces_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "spaces_user_updated_foreign"
		}),
]);

export const spacesShopType = pgTable("spaces_shop_type", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	shopTypeId: integer("shop_type_id"),
}, (table) => [
	foreignKey({
			columns: [table.shopTypeId],
			foreignColumns: [shopType.id],
			name: "spaces_shop_type_shop_type_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_shop_type_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const socialConnections = pgTable("social_connections", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	user: uuid(),
	platform: varchar({ length: 255 }),
	identifier: varchar({ length: 255 }),
	credentials: json(),
	active: boolean().default(true),
});

export const momentsSpaces = pgTable("moments_spaces", {
	id: serial().primaryKey().notNull(),
	momentsId: integer("moments_id"),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.momentsId],
			foreignColumns: [moments.id],
			name: "moments_spaces_moments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "moments_spaces_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const spacesTemplates = pgTable("spaces_templates", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	templatesId: integer("templates_id"),
}, (table) => [
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_templates_spaces_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.templatesId],
			foreignColumns: [templates.id],
			name: "spaces_templates_templates_id_foreign"
		}).onDelete("set null"),
]);

export const showcasesShops = pgTable("showcases_shops", {
	id: serial().primaryKey().notNull(),
	showcasesId: integer("showcases_id"),
	shopsId: integer("shops_id"),
}, (table) => [
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "showcases_shops_shops_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.showcasesId],
			foreignColumns: [showcases.id],
			name: "showcases_shops_showcases_id_foreign"
		}).onDelete("set null"),
]);

export const addressCart = pgTable("address_cart", {
	id: serial().primaryKey().notNull(),
	addressId: integer("address_id"),
	cartId: integer("cart_id"),
}, (table) => [
	foreignKey({
			columns: [table.addressId],
			foreignColumns: [address.id],
			name: "address_cart_address_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.cartId],
			foreignColumns: [cart.id],
			name: "address_cart_cart_id_foreign"
		}).onDelete("set null"),
]);

export const announcements = pgTable("announcements", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	subject: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
	location: json(),
	icon: varchar({ length: 255 }),
	color: varchar({ length: 255 }),
	borderColor: varchar("border_color", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "announcements_image_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "announcements_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "announcements_user_updated_foreign"
		}),
]);

export const agreements = pgTable("agreements", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	created: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	content: text(),
	name: text(),
	excerpt: text(),
	type: json(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	referenceId: bigint("reference_id", { mode: "number" }),
	status: varchar({ length: 255 }),
	updated: timestamp({ withTimezone: true, mode: 'string' }),
});

export const advertising = pgTable("advertising", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	link: varchar({ length: 255 }),
	startDate: timestamp("start_date", { mode: 'string' }),
	endTime: timestamp("end_time", { mode: 'string' }),
});

export const articlesComments = pgTable("articles_comments", {
	id: serial().primaryKey().notNull(),
	articlesId: integer("articles_id"),
	commentsId: integer("comments_id"),
}, (table) => [
	foreignKey({
			columns: [table.articlesId],
			foreignColumns: [articles.id],
			name: "articles_comments_articles_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "articles_comments_comments_id_foreign"
		}).onDelete("set null"),
]);

export const mediaFolders = pgTable("media_folders", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	user: uuid(),
	parentFolder: integer("parent_folder"),
}, (table) => [
	foreignKey({
			columns: [table.parentFolder],
			foreignColumns: [media.id],
			name: "media_folders_parent_folder_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "media_folders_user_created_foreign"
		}),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "media_folders_user_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "media_folders_user_updated_foreign"
		}),
]);

export const seasonsVideos = pgTable("seasons_videos", {
	id: serial().primaryKey().notNull(),
	seasonsId: integer("seasons_id"),
	videosId: integer("videos_id"),
}, (table) => [
	foreignKey({
			columns: [table.seasonsId],
			foreignColumns: [seasons.id],
			name: "seasons_videos_seasons_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videosId],
			foreignColumns: [videos.id],
			name: "seasons_videos_videos_id_foreign"
		}).onDelete("set null"),
]);

export const spacesCities = pgTable("spaces_cities", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	citiesId: integer("cities_id"),
}, (table) => [
	foreignKey({
			columns: [table.citiesId],
			foreignColumns: [cities.id],
			name: "spaces_cities_cities_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_cities_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const posts = pgTable("posts", {
	id: serial().primaryKey().notNull(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	content: text(),
	file: uuid(),
	username: varchar({ length: 255 }),
	userAvatar: varchar("user_avatar", { length: 255 }),
	image: uuid(),
	title: varchar({ length: 255 }),
	type: varchar({ length: 255 }),
	status: varchar({ length: 255 }),
	audio: uuid(),
	slug: varchar({ length: 255 }),
	author: uuid(),
	pinnedPost: boolean("pinned_post"),
	autoPublish: boolean("auto_publish"),
	mastodonId: varchar("mastodon_id", { length: 255 }),
	blskyId: varchar("blsky_id", { length: 255 }),
	targetAudience: varchar("target_audience", { length: 255 }),
	visibilityScope: varchar("visibility_scope", { length: 255 }),
	linkPreview: json("link_preview"),
	contentType: varchar("content_type", { length: 255 }),
	views: integer(),
}, (table) => [
	foreignKey({
			columns: [table.audio],
			foreignColumns: [directusFiles.id],
			name: "posts_audio_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.author],
			foreignColumns: [directusUsers.id],
			name: "posts_author_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "posts_image_foreign"
		}).onDelete("set null"),
]);

export const countriesTimezones = pgTable("countries_timezones", {
	id: serial().primaryKey().notNull(),
	countriesId: integer("countries_id"),
	timezonesId: integer("timezones_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "countries_timezones_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.timezonesId],
			foreignColumns: [timezones.id],
			name: "countries_timezones_timezones_id_foreign"
		}).onDelete("set null"),
]);

export const spacesArticles = pgTable("spaces_articles", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	articlesId: integer("articles_id"),
}, (table) => [
	foreignKey({
			columns: [table.articlesId],
			foreignColumns: [articles.id],
			name: "spaces_articles_articles_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_articles_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const spacesStates = pgTable("spaces_states", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	statesId: integer("states_id"),
}, (table) => [
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_states_spaces_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.statesId],
			foreignColumns: [states.id],
			name: "spaces_states_states_id_foreign"
		}).onDelete("set null"),
]);

export const spacesCountries = pgTable("spaces_countries", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "spaces_countries_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_countries_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const brandsProducts = pgTable("brands_products", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	brandsId: bigint("brands_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.brandsId],
			foreignColumns: [brands.id],
			name: "brands_products_brands_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "brands_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const buyagain = pgTable("buyagain", {
	id: serial().primaryKey().notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
});

export const cities = pgTable("cities", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	description: text(),
	postalCode: text(),
	image: uuid(),
	longitude: varchar({ length: 255 }),
	latitude: varchar({ length: 255 }),
	languagenames: text(),
});

export const citiesCountries = pgTable("cities_countries", {
	id: serial().primaryKey().notNull(),
	citiesId: integer("cities_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.citiesId],
			foreignColumns: [cities.id],
			name: "cities_countries_cities_id_foreign"
		}).onDelete("set null"),
]);

export const cartCartItems = pgTable("cart_cart_items", {
	id: serial().primaryKey().notNull(),
	cartId: integer("cart_id"),
	cartItemsId: integer("cart_items_id"),
}, (table) => [
	foreignKey({
			columns: [table.cartId],
			foreignColumns: [cart.id],
			name: "cart_cart_items_cart_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.cartItemsId],
			foreignColumns: [cartItems.id],
			name: "cart_cart_items_cart_items_id_foreign"
		}).onDelete("set null"),
]);

export const templatesSpaceTypes = pgTable("templates_space_types", {
	id: serial().primaryKey().notNull(),
	templatesId: integer("templates_id"),
	spaceTypesId: integer("space_types_id"),
}, (table) => [
	foreignKey({
			columns: [table.spaceTypesId],
			foreignColumns: [spaceTypes.id],
			name: "templates_space_types_space_types_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.templatesId],
			foreignColumns: [templates.id],
			name: "templates_space_types_templates_id_foreign"
		}).onDelete("set null"),
]);

export const spaceTypes = pgTable("space_types", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
	allowedContentTypes: json("allowed_content_types"),
	defaultTabs: json("default_tabs"),
	customTabs: json("custom_tabs"),
	description: text(),
	icon: uuid(),
	componentPath: text("component_path"),
	layoutName: varchar("layout_name", { length: 255 }),
	remoteUrl: varchar("remote_url", { length: 255 }),
	enabled: boolean().default(true),
}, (table) => [
	foreignKey({
			columns: [table.icon],
			foreignColumns: [directusFiles.id],
			name: "space_types_icon_foreign"
		}).onDelete("set null"),
]);

export const projectBoardDirectusUsers = pgTable("project_board_directus_users", {
	id: serial().primaryKey().notNull(),
	projectBoardId: integer("project_board_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "project_board_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectBoardId],
			foreignColumns: [projectBoard.id],
			name: "project_board_directus_users_project_board_id_foreign"
		}).onDelete("set null"),
]);

export const postsPolls = pgTable("posts_polls", {
	id: serial().primaryKey().notNull(),
	postsId: integer("posts_id"),
	pollsId: integer("polls_id"),
}, (table) => [
	foreignKey({
			columns: [table.pollsId],
			foreignColumns: [polls.id],
			name: "posts_polls_polls_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.postsId],
			foreignColumns: [posts.id],
			name: "posts_polls_posts_id_foreign"
		}).onDelete("set null"),
]);

export const moments = pgTable("moments", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	content: text(),
	type: varchar({ length: 255 }),
});

export const platform = pgTable("platform", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('active').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "platform_image_foreign"
		}).onDelete("set null"),
]);

export const incentives = pgTable("incentives", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	incentiveType: varchar("incentive_type", { length: 255 }),
	amount: numeric({ precision: 10, scale:  5 }),
	userId: uuid("user_id"),
	expiresAt: timestamp("expires_at", { withTimezone: true, mode: 'string' }),
	metadata: json(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [directusUsers.id],
			name: "incentives_user_id_foreign"
		}).onDelete("set null"),
]);

export const incentivesCurrency = pgTable("incentives_currency", {
	id: serial().primaryKey().notNull(),
	incentivesId: integer("incentives_id"),
	currencyId: integer("currency_id"),
}, (table) => [
	foreignKey({
			columns: [table.currencyId],
			foreignColumns: [currency.id],
			name: "incentives_currency_currency_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.incentivesId],
			foreignColumns: [incentives.id],
			name: "incentives_currency_incentives_id_foreign"
		}).onDelete("set null"),
]);

export const countries = pgTable("countries", {
	id: integer().primaryKey().notNull(),
	name: varchar({ length: 100 }),
	iso3: char({ length: 3 }),
	iso2: char({ length: 2 }),
	phonecode: varchar({ length: 255 }),
	capital: varchar({ length: 255 }),
	tld: varchar({ length: 255 }),
	native: varchar({ length: 255 }),
	translations: text(),
	latitude: numeric({ precision: 10, scale:  8 }),
	longitude: numeric({ precision: 11, scale:  8 }),
	emoji: varchar({ length: 191 }),
	emojiU: varchar({ length: 191 }),
	createdAt: timestamp("created_at", { mode: 'string' }),
	updatedAt: timestamp("updated_at", { mode: 'string' }),
	flag: integer().default(1).notNull(),
	wikiDataId: varchar({ length: 255 }),
	region: json(),
});

export const couponsProducts = pgTable("coupons_products", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "coupons_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const crossSellProducts = pgTable("cross_sell_products", {
	id: serial().primaryKey().notNull(),
	sort: integer(),
	user: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "cross_sell_products_user_foreign"
		}).onDelete("set null"),
]);

export const momentsProducts = pgTable("moments_products", {
	id: serial().primaryKey().notNull(),
	momentsId: integer("moments_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.momentsId],
			foreignColumns: [moments.id],
			name: "moments_products_moments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "moments_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const spacesSpaceTypes = pgTable("spaces_space_types", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	spaceTypesId: integer("space_types_id"),
}, (table) => [
	foreignKey({
			columns: [table.spaceTypesId],
			foreignColumns: [spaceTypes.id],
			name: "spaces_space_types_space_types_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_space_types_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const projectsDirectusUsers = pgTable("projects_directus_users", {
	id: serial().primaryKey().notNull(),
	projectsId: integer("projects_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "projects_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "projects_directus_users_projects_id_foreign"
		}).onDelete("set null"),
]);

export const addressCities = pgTable("address_cities", {
	id: serial().primaryKey().notNull(),
	addressId: integer("address_id"),
	citiesId: integer("cities_id"),
}, (table) => [
	foreignKey({
			columns: [table.addressId],
			foreignColumns: [address.id],
			name: "address_cities_address_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.citiesId],
			foreignColumns: [cities.id],
			name: "address_cities_cities_id_foreign"
		}).onDelete("set null"),
]);

export const aiPrompts = pgTable("ai_prompts", {
	id: uuid().primaryKey().notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	userCreated: uuid("user_created"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	name: varchar({ length: 255 }),
	status: varchar({ length: 255 }).default('draft'),
	description: text(),
	systemPrompt: text("system_prompt"),
	messages: json(),
}, (table) => [
	index().using("btree", table.name.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "ai_prompts_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "ai_prompts_user_updated_foreign"
		}),
	unique("ai_prompts_name_unique").on(table.name),
]);

export const spaceProducts = pgTable("Space_products", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "space_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const platformProducts = pgTable("platform_products", {
	id: serial().primaryKey().notNull(),
	platformId: integer("platform_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.platformId],
			foreignColumns: [platform.id],
			name: "platform_products_platform_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "platform_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const address = pgTable("address", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	type: json(),
	address: text(),
	address2: varchar({ length: 255 }),
	postalcode: varchar({ length: 255 }),
	firstName: varchar({ length: 255 }),
	lastName: varchar({ length: 255 }),
	company: varchar({ length: 255 }),
	email: varchar({ length: 255 }),
	telephone: varchar({ length: 255 }),
	format: varchar({ length: 255 }),
	user: varchar({ length: 255 }),
});

export const space = pgTable("Space", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
	media: uuid(),
	numberOfMembers: varchar({ length: 255 }),
	groupType: varchar({ length: 255 }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	creatorId: bigint("creator_id", { mode: "number" }),
	slug: varchar({ length: 255 }),
});

export const advertisingFiles = pgTable("advertising_files", {
	id: serial().primaryKey().notNull(),
	directusFilesId: uuid("directus_files_id"),
});

export const applications = pgTable("applications", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	name: varchar({ length: 255 }),
	description: text(),
	url: varchar({ length: 255 }),
	image: uuid(),
	operatingSystems: json("operating_systems"),
	slug: varchar({ length: 255 }),
});

export const agreementsDirectusUsers = pgTable("agreements_directus_users", {
	id: serial().primaryKey().notNull(),
	userId: uuid("user_id"),
});

export const articles = pgTable("articles", {
	id: serial().primaryKey().notNull(),
	name: text(),
	excerpt: text(),
	content: text(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	image: uuid(),
	type: json(),
	isPublic: boolean(),
	stamp: integer(),
	slug: varchar({ length: 255 }),
	author: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.author],
			foreignColumns: [directusUsers.id],
			name: "articles_author_foreign"
		}).onDelete("set null"),
]);

export const addressDirectusUsers = pgTable("address_directus_users", {
	id: serial().primaryKey().notNull(),
	addressId: integer("address_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.addressId],
			foreignColumns: [address.id],
			name: "address_directus_users_address_id_foreign"
		}).onDelete("set null"),
]);

export const careers = pgTable("careers", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	url: varchar({ length: 255 }),
	description: text(),
	type: varchar({ length: 255 }),
	image: uuid(),
	degreeLevel: varchar("degree_level", { length: 255 }),
	experience: varchar({ length: 255 }),
});

export const financeIndexRegion = pgTable("finance_index_region", {
	id: serial().primaryKey().notNull(),
	financeIndexId: integer("finance_index_id"),
	regionId: integer("region_id"),
}, (table) => [
	foreignKey({
			columns: [table.financeIndexId],
			foreignColumns: [financeIndex.id],
			name: "finance_index_region_finance_index_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.regionId],
			foreignColumns: [region.id],
			name: "finance_index_region_region_id_foreign"
		}).onDelete("set null"),
]);

export const financeIndex = pgTable("finance_index", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	previousClose: varchar("previous_close", { length: 255 }),
	dayRange: varchar("day_range", { length: 255 }),
	yearRange: varchar("year_range", { length: 255 }),
	todayPrice: varchar("today_price", { length: 255 }),
	stockUpDown: boolean("stock_up_down"),
	stockExchangeName: varchar("stock_exchange_name", { length: 255 }),
	slug: varchar({ length: 255 }),
});

export const cartItems = pgTable("cart_items", {
	id: serial().primaryKey().notNull(),
	quantity: integer(),
	metadata: json(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	products: bigint({ mode: "number" }),
	cart: integer(),
	productId: varchar("product_id", { length: 255 }),
	price: integer(),
	total: integer(),
	variantId: varchar("variant_id", { length: 255 }),
	variant: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.cart],
			foreignColumns: [cart.id],
			name: "cart_items_cart_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.products],
			foreignColumns: [products.id],
			name: "cart_items_products_foreign"
		}).onDelete("set null"),
]);

export const financeIndexCurrency = pgTable("finance_index_currency", {
	id: serial().primaryKey().notNull(),
	financeIndexId: integer("finance_index_id"),
	currencyId: integer("currency_id"),
}, (table) => [
	foreignKey({
			columns: [table.currencyId],
			foreignColumns: [currency.id],
			name: "finance_index_currency_currency_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.financeIndexId],
			foreignColumns: [financeIndex.id],
			name: "finance_index_currency_finance_index_id_foreign"
		}).onDelete("set null"),
]);

export const citiesStates = pgTable("cities_states", {
	id: serial().primaryKey().notNull(),
	citiesId: integer("cities_id"),
}, (table) => [
	foreignKey({
			columns: [table.citiesId],
			foreignColumns: [cities.id],
			name: "cities_states_cities_id_foreign"
		}).onDelete("set null"),
]);

export const commentsDirectusUsers = pgTable("comments_directus_users", {
	id: serial().primaryKey().notNull(),
	commentId: integer("comment_id"),
	userId: uuid("user_id"),
}, (table) => [
	foreignKey({
			columns: [table.commentId],
			foreignColumns: [comments.id],
			name: "comments_directus_users_comment_id_foreign"
		}).onDelete("set null"),
]);

export const directusFields = pgTable("directus_fields", {
	id: serial().primaryKey().notNull(),
	collection: varchar({ length: 64 }).notNull(),
	field: varchar({ length: 64 }).notNull(),
	special: varchar({ length: 64 }),
	interface: varchar({ length: 64 }),
	options: json(),
	display: varchar({ length: 64 }),
	displayOptions: json("display_options"),
	readonly: boolean().default(false).notNull(),
	hidden: boolean().default(false).notNull(),
	sort: integer(),
	width: varchar({ length: 30 }).default('full'),
	translations: json(),
	note: text(),
	conditions: json(),
	required: boolean().default(false),
	group: varchar({ length: 64 }),
	validation: json(),
	validationMessage: text("validation_message"),
	searchable: boolean().default(true).notNull(),
});

export const collectionsBrands = pgTable("collections_brands", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	collectionsId: bigint("collections_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	brandsId: bigint("brands_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.brandsId],
			foreignColumns: [brands.id],
			name: "collections_brands_brands_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.collectionsId],
			foreignColumns: [collections.id],
			name: "collections_brands_collections_id_foreign"
		}).onDelete("set null"),
]);

export const colors = pgTable("colors", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint({ mode: "number" }).primaryKey().generatedByDefaultAsIdentity({ name: "colors_id_seq", startWith: 1, increment: 1, minValue: 1, maxValue: 9223372036854775807, cache: 1 }),
	name: text(),
	hex: text().notNull(),
	red: smallint(),
	green: smallint(),
	blue: smallint(),
	hue: smallint(),
	satHsl: smallint("sat_hsl"),
	lightHsl: smallint("light_hsl"),
	satHsv: smallint("sat_hsv"),
	valHsv: smallint("val_hsv"),
	//source: colorSource(),
});

export const commentsProducts = pgTable("comments_products", {
	id: serial().primaryKey().notNull(),
	commentsId: integer("comments_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "comments_products_comments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "comments_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const commentsShorts = pgTable("comments_shorts", {
	id: serial().primaryKey().notNull(),
	commentsId: integer("comments_id"),
	shortsId: integer("shorts_id"),
}, (table) => [
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "comments_shorts_comments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "comments_shorts_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const categoriesShorts = pgTable("categories_shorts", {
	id: serial().primaryKey().notNull(),
	categoriesId: integer("categories_id"),
	shortsId: integer("shorts_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "categories_shorts_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "categories_shorts_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const categoriesPostgresstores = pgTable("categories_postgresstores", {
	id: serial().primaryKey().notNull(),
	categoriesId: integer("categories_id"),
	postgresstoresId: integer("postgresstores_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "categories_postgresstores_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.postgresstoresId],
			foreignColumns: [postgresstores.id],
			name: "categories_postgresstores_postgresstores_id_foreign"
		}).onDelete("set null"),
]);

export const currencyDepartments = pgTable("currency_departments", {
	id: serial().primaryKey().notNull(),
	currencyId: integer("currency_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.currencyId],
			foreignColumns: [currency.id],
			name: "currency_departments_currency_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "currency_departments_departments_id_foreign"
		}).onDelete("set null"),
]);

export const currency = pgTable("currency", {
	id: serial().primaryKey().notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	code: varchar({ length: 255 }),
	symbol: varchar({ length: 255 }),
});

export const directusAccess = pgTable("directus_access", {
	id: uuid().primaryKey().notNull(),
	role: uuid(),
	user: uuid(),
	policy: uuid().notNull(),
	sort: integer(),
}, (table) => [
	foreignKey({
			columns: [table.policy],
			foreignColumns: [directusPolicies.id],
			name: "directus_access_policy_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.role],
			foreignColumns: [directusRoles.id],
			name: "directus_access_role_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "directus_access_user_foreign"
		}).onDelete("cascade"),
]);

export const departmentsCategories = pgTable("departments_categories", {
	id: serial().primaryKey().notNull(),
	departmentsId: integer("departments_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "departments_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "departments_categories_departments_id_foreign"
		}).onDelete("set null"),
]);

export const departmentsCollections = pgTable("departments_collections", {
	id: serial().primaryKey().notNull(),
	departmentsId: integer("departments_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	collectionsId: bigint("collections_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.collectionsId],
			foreignColumns: [collections.id],
			name: "departments_collections_collections_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "departments_collections_departments_id_foreign"
		}).onDelete("set null"),
]);

export const currenciesCountries = pgTable("currencies_countries", {
	id: serial().primaryKey().notNull(),
	countriesId: integer("countries_id"),
});

export const digiboard = pgTable("digiboard", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	board: text(),
	createdAt: timestamp("created_at", { precision: 6, withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	image: uuid(),
});

export const departments = pgTable("departments", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	description: text(),
	content: text(),
	color: varchar({ length: 255 }),
	image: uuid(),
	colortext: varchar({ length: 255 }),
	menus: json(),
	callouts: json(),
	slug: varchar({ length: 255 }),
	active: varchar({ length: 255 }),
	relativeId: varchar("relative_id", { length: 255 }),
	type: varchar({ length: 255 }),
	customDomain: varchar("custom_domain", { length: 255 }),
});

export const departmentsProducts = pgTable("departments_products", {
	id: serial().primaryKey().notNull(),
	departmentsId: integer("departments_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "departments_products_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "departments_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const directusComments = pgTable("directus_comments", {
	id: uuid().primaryKey().notNull(),
	collection: varchar({ length: 64 }).notNull(),
	item: varchar({ length: 255 }).notNull(),
	comment: text().notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	userCreated: uuid("user_created"),
	userUpdated: uuid("user_updated"),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "directus_comments_user_created_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "directus_comments_user_updated_foreign"
		}),
]);

export const departmentsShorts = pgTable("departments_shorts", {
	id: serial().primaryKey().notNull(),
	departmentsId: integer("departments_id"),
	shortsId: integer("shorts_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "departments_shorts_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "departments_shorts_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const platformCategories = pgTable("platform_categories", {
	id: serial().primaryKey().notNull(),
	platformId: integer("platform_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "platform_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.platformId],
			foreignColumns: [platform.id],
			name: "platform_categories_platform_id_foreign"
		}).onDelete("set null"),
]);

export const eventsLists = pgTable("events_lists", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
	listsId: integer("lists_id"),
}, (table) => [
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_lists_events_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "events_lists_lists_id_foreign"
		}).onDelete("set null"),
]);

export const eventsInvoices = pgTable("events_invoices", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	invoicesId: bigint("invoices_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_invoices_events_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.invoicesId],
			foreignColumns: [invoices.id],
			name: "events_invoices_invoices_id_foreign"
		}).onDelete("set null"),
]);

export const digiboardDirectusUsers = pgTable("digiboard_directus_users", {
	id: serial().primaryKey().notNull(),
	directusUsersId: uuid("directus_users_id"),
});

export const directusActivity = pgTable("directus_activity", {
	id: serial().primaryKey().notNull(),
	action: varchar({ length: 45 }).notNull(),
	user: uuid(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	ip: varchar({ length: 50 }),
	userAgent: text("user_agent"),
	collection: varchar({ length: 64 }).notNull(),
	item: varchar({ length: 255 }).notNull(),
	origin: varchar({ length: 255 }),
}, (table) => [
	index().using("btree", table.timestamp.asc().nullsLast().op("timestamptz_ops")),
]);

export const directusCollections = pgTable("directus_collections", {
	collection: varchar({ length: 64 }).primaryKey().notNull(),
	icon: varchar({ length: 64 }),
	note: text(),
	displayTemplate: varchar("display_template", { length: 255 }),
	hidden: boolean().default(false).notNull(),
	singleton: boolean().default(false).notNull(),
	translations: json(),
	archiveField: varchar("archive_field", { length: 64 }),
	archiveAppFilter: boolean("archive_app_filter").default(true).notNull(),
	archiveValue: varchar("archive_value", { length: 255 }),
	unarchiveValue: varchar("unarchive_value", { length: 255 }),
	sortField: varchar("sort_field", { length: 64 }),
	accountability: varchar({ length: 255 }).default('all'),
	color: varchar({ length: 255 }),
	itemDuplicationFields: json("item_duplication_fields"),
	sort: integer(),
	group: varchar({ length: 64 }),
	collapse: varchar({ length: 255 }).default('open').notNull(),
	previewUrl: varchar("preview_url", { length: 255 }),
	versioning: boolean().default(false).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.group],
			foreignColumns: [table.collection],
			name: "directus_collections_group_foreign"
		}),
]);

export const directusOperations = pgTable("directus_operations", {
	id: uuid().primaryKey().notNull(),
	name: varchar({ length: 255 }),
	key: varchar({ length: 255 }).notNull(),
	type: varchar({ length: 255 }).notNull(),
	positionX: integer("position_x").notNull(),
	positionY: integer("position_y").notNull(),
	options: json(),
	resolve: uuid(),
	reject: uuid(),
	flow: uuid().notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	userCreated: uuid("user_created"),
}, (table) => [
	foreignKey({
			columns: [table.flow],
			foreignColumns: [directusFlows.id],
			name: "directus_operations_flow_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.reject],
			foreignColumns: [table.id],
			name: "directus_operations_reject_foreign"
		}),
	foreignKey({
			columns: [table.resolve],
			foreignColumns: [table.id],
			name: "directus_operations_resolve_foreign"
		}),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "directus_operations_user_created_foreign"
		}).onDelete("set null"),
	unique("directus_operations_resolve_unique").on(table.resolve),
	unique("directus_operations_reject_unique").on(table.reject),
]);

export const platformPages = pgTable("platform_pages", {
	id: serial().primaryKey().notNull(),
	platformId: integer("platform_id"),
	pagesId: integer("pages_id"),
}, (table) => [
	foreignKey({
			columns: [table.pagesId],
			foreignColumns: [pages.id],
			name: "platform_pages_pages_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.platformId],
			foreignColumns: [platform.id],
			name: "platform_pages_platform_id_foreign"
		}).onDelete("set null"),
]);

export const directusFiles = pgTable("directus_files", {
	id: uuid().primaryKey().notNull(),
	storage: varchar({ length: 255 }).notNull(),
	filenameDisk: varchar("filename_disk", { length: 255 }),
	filenameDownload: varchar("filename_download", { length: 255 }).notNull(),
	title: varchar({ length: 255 }),
	type: varchar({ length: 255 }),
	folder: uuid(),
	uploadedBy: uuid("uploaded_by"),
	createdOn: timestamp("created_on", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	modifiedBy: uuid("modified_by"),
	modifiedOn: timestamp("modified_on", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	charset: varchar({ length: 50 }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	filesize: bigint({ mode: "number" }),
	width: integer(),
	height: integer(),
	duration: integer(),
	embed: varchar({ length: 200 }),
	description: text(),
	location: text(),
	tags: text(),
	metadata: json(),
	focalPointX: integer("focal_point_x"),
	focalPointY: integer("focal_point_y"),
	tusId: varchar("tus_id", { length: 64 }),
	tusData: json("tus_data"),
	uploadedOn: timestamp("uploaded_on", { withTimezone: true, mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.folder],
			foreignColumns: [directusFolders.id],
			name: "directus_files_folder_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.modifiedBy],
			foreignColumns: [directusUsers.id],
			name: "directus_files_modified_by_foreign"
		}),
	foreignKey({
			columns: [table.uploadedBy],
			foreignColumns: [directusUsers.id],
			name: "directus_files_uploaded_by_foreign"
		}),
]);

export const directusFolders = pgTable("directus_folders", {
	id: uuid().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	parent: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.parent],
			foreignColumns: [table.id],
			name: "directus_folders_parent_foreign"
		}),
]);

export const directusPolicies = pgTable("directus_policies", {
	id: uuid().primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	icon: varchar({ length: 64 }).default('badge').notNull(),
	description: text(),
	ipAccess: text("ip_access"),
	enforceTfa: boolean("enforce_tfa").default(false).notNull(),
	adminAccess: boolean("admin_access").default(false).notNull(),
	appAccess: boolean("app_access").default(false).notNull(),
});

export const directusPanels = pgTable("directus_panels", {
	id: uuid().primaryKey().notNull(),
	dashboard: uuid().notNull(),
	name: varchar({ length: 255 }),
	icon: varchar({ length: 64 }).default(sql`NULL`),
	color: varchar({ length: 10 }),
	showHeader: boolean("show_header").default(false).notNull(),
	note: text(),
	type: varchar({ length: 255 }).notNull(),
	positionX: integer("position_x").notNull(),
	positionY: integer("position_y").notNull(),
	width: integer().notNull(),
	height: integer().notNull(),
	options: json(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	userCreated: uuid("user_created"),
}, (table) => [
	foreignKey({
			columns: [table.dashboard],
			foreignColumns: [directusDashboards.id],
			name: "directus_panels_dashboard_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "directus_panels_user_created_foreign"
		}).onDelete("set null"),
]);

export const directusRelations = pgTable("directus_relations", {
	id: serial().primaryKey().notNull(),
	manyCollection: varchar("many_collection", { length: 64 }).notNull(),
	manyField: varchar("many_field", { length: 64 }).notNull(),
	oneCollection: varchar("one_collection", { length: 64 }),
	oneField: varchar("one_field", { length: 64 }),
	oneCollectionField: varchar("one_collection_field", { length: 64 }),
	oneAllowedCollections: text("one_allowed_collections"),
	junctionField: varchar("junction_field", { length: 64 }),
	sortField: varchar("sort_field", { length: 64 }),
	oneDeselectAction: varchar("one_deselect_action", { length: 255 }).default('nullify').notNull(),
});

export const platformLists = pgTable("platform_lists", {
	id: serial().primaryKey().notNull(),
	platformId: integer("platform_id"),
	listsId: integer("lists_id"),
}, (table) => [
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "platform_lists_lists_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.platformId],
			foreignColumns: [platform.id],
			name: "platform_lists_platform_id_foreign"
		}).onDelete("set null"),
]);

export const gamificationVideos = pgTable("gamification_videos", {
	id: serial().primaryKey().notNull(),
	gamificationId: integer("gamification_id"),
	videosId: integer("videos_id"),
}, (table) => [
	foreignKey({
			columns: [table.gamificationId],
			foreignColumns: [gamification.id],
			name: "gamification_videos_gamification_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videosId],
			foreignColumns: [videos.id],
			name: "gamification_videos_videos_id_foreign"
		}).onDelete("set null"),
]);

export const integrationsDepartments = pgTable("integrations_departments", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "integrations_departments_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_departments_integrations_id_foreign"
		}).onDelete("set null"),
]);

export const integrationsRatings = pgTable("integrations_ratings", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	ratingsId: integer("ratings_id"),
}, (table) => [
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_ratings_integrations_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.ratingsId],
			foreignColumns: [ratings.id],
			name: "integrations_ratings_ratings_id_foreign"
		}).onDelete("set null"),
]);

export const integrationsFiles = pgTable("integrations_files", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusFilesId],
			foreignColumns: [directusFiles.id],
			name: "integrations_files_directus_files_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_files_integrations_id_foreign"
		}).onDelete("set null"),
]);

export const transactionsCurrency = pgTable("transactions_currency", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	transactionsId: bigint("transactions_id", { mode: "number" }),
	currencyId: integer("currency_id"),
}, (table) => [
	foreignKey({
			columns: [table.currencyId],
			foreignColumns: [currency.id],
			name: "transactions_currency_currency_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.transactionsId],
			foreignColumns: [transactions.id],
			name: "transactions_currency_transactions_id_foreign"
		}).onDelete("set null"),
]);

export const directusPermissions = pgTable("directus_permissions", {
	id: serial().primaryKey().notNull(),
	collection: varchar({ length: 64 }).notNull(),
	action: varchar({ length: 10 }).notNull(),
	permissions: json(),
	validation: json(),
	presets: json(),
	fields: text(),
	policy: uuid().notNull(),
}, (table) => [
	foreignKey({
			columns: [table.policy],
			foreignColumns: [directusPolicies.id],
			name: "directus_permissions_policy_foreign"
		}).onDelete("cascade"),
]);

export const directusMigrations = pgTable("directus_migrations", {
	version: varchar({ length: 255 }).primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
});

export const platformNavigation = pgTable("platform_navigation", {
	id: serial().primaryKey().notNull(),
	platformId: integer("platform_id"),
	navigationId: integer("navigation_id"),
}, (table) => [
	foreignKey({
			columns: [table.navigationId],
			foreignColumns: [navigation.id],
			name: "platform_navigation_navigation_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.platformId],
			foreignColumns: [platform.id],
			name: "platform_navigation_platform_id_foreign"
		}).onDelete("set null"),
]);

export const directusWebhooks = pgTable("directus_webhooks", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	method: varchar({ length: 10 }).default('POST').notNull(),
	url: varchar({ length: 255 }).notNull(),
	status: varchar({ length: 10 }).default('active').notNull(),
	data: boolean().default(true).notNull(),
	actions: varchar({ length: 100 }).notNull(),
	collections: varchar({ length: 255 }).notNull(),
	headers: json(),
	wasActiveBeforeDeprecation: boolean("was_active_before_deprecation").default(false).notNull(),
	migratedFlow: uuid("migrated_flow"),
}, (table) => [
	foreignKey({
			columns: [table.migratedFlow],
			foreignColumns: [directusFlows.id],
			name: "directus_webhooks_migrated_flow_foreign"
		}).onDelete("set null"),
]);

export const incentivesOrders = pgTable("incentives_orders", {
	id: serial().primaryKey().notNull(),
	incentivesId: integer("incentives_id"),
	ordersId: integer("orders_id"),
}, (table) => [
	foreignKey({
			columns: [table.incentivesId],
			foreignColumns: [incentives.id],
			name: "incentives_orders_incentives_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.ordersId],
			foreignColumns: [orders.id],
			name: "incentives_orders_orders_id_foreign"
		}).onDelete("set null"),
]);

export const directusShares = pgTable("directus_shares", {
	id: uuid().primaryKey().notNull(),
	name: varchar({ length: 255 }),
	collection: varchar({ length: 64 }).notNull(),
	item: varchar({ length: 255 }).notNull(),
	role: uuid(),
	password: varchar({ length: 255 }),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	dateStart: timestamp("date_start", { withTimezone: true, mode: 'string' }),
	dateEnd: timestamp("date_end", { withTimezone: true, mode: 'string' }),
	timesUsed: integer("times_used").default(0),
	maxUses: integer("max_uses"),
}, (table) => [
	foreignKey({
			columns: [table.collection],
			foreignColumns: [directusCollections.collection],
			name: "directus_shares_collection_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.role],
			foreignColumns: [directusRoles.id],
			name: "directus_shares_role_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "directus_shares_user_created_foreign"
		}).onDelete("set null"),
]);

export const reportSpaces = pgTable("report_spaces", {
	id: serial().primaryKey().notNull(),
	reportId: integer("report_id"),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.reportId],
			foreignColumns: [report.id],
			name: "report_spaces_report_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "report_spaces_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const listItemsProducts = pgTable("list_items_products", {
	id: serial().primaryKey().notNull(),
	listItemsId: integer("list_items_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.listItemsId],
			foreignColumns: [listItems.id],
			name: "list_items_products_list_items_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "list_items_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const platformArticles = pgTable("platform_articles", {
	id: serial().primaryKey().notNull(),
	platformId: integer("platform_id"),
	articlesId: integer("articles_id"),
}, (table) => [
	foreignKey({
			columns: [table.articlesId],
			foreignColumns: [articles.id],
			name: "platform_articles_articles_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.platformId],
			foreignColumns: [platform.id],
			name: "platform_articles_platform_id_foreign"
		}).onDelete("set null"),
]);

export const directusTranslations = pgTable("directus_translations", {
	id: uuid().primaryKey().notNull(),
	language: varchar({ length: 255 }).notNull(),
	key: varchar({ length: 255 }).notNull(),
	value: text().notNull(),
});

export const directusVersions = pgTable("directus_versions", {
	id: uuid().primaryKey().notNull(),
	key: varchar({ length: 64 }).notNull(),
	name: varchar({ length: 255 }),
	collection: varchar({ length: 64 }).notNull(),
	item: varchar({ length: 255 }).notNull(),
	hash: varchar({ length: 255 }),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	userCreated: uuid("user_created"),
	userUpdated: uuid("user_updated"),
	delta: json(),
}, (table) => [
	foreignKey({
			columns: [table.collection],
			foreignColumns: [directusCollections.collection],
			name: "directus_versions_collection_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "directus_versions_user_created_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "directus_versions_user_updated_foreign"
		}),
]);

export const eventsCoupons = pgTable("events_coupons", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
}, (table) => [
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_coupons_events_id_foreign"
		}).onDelete("set null"),
]);

export const eventsCities = pgTable("events_cities", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
	citiesId: integer("cities_id"),
}, (table) => [
	foreignKey({
			columns: [table.citiesId],
			foreignColumns: [cities.id],
			name: "events_cities_cities_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_cities_events_id_foreign"
		}).onDelete("set null"),
]);

export const eventsStates = pgTable("events_states", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
	statesId: integer("states_id"),
}, (table) => [
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_states_events_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.statesId],
			foreignColumns: [states.id],
			name: "events_states_states_id_foreign"
		}).onDelete("set null"),
]);

export const faqsDirectusUsers = pgTable("faqs_directus_users", {
	id: serial().primaryKey().notNull(),
	faqsId: integer("faqs_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "faqs_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.faqsId],
			foreignColumns: [faqs.id],
			name: "faqs_directus_users_faqs_id_foreign"
		}).onDelete("set null"),
]);

export const faqsProducts = pgTable("faqs_products", {
	id: serial().primaryKey().notNull(),
	faqsId: integer("faqs_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.faqsId],
			foreignColumns: [faqs.id],
			name: "faqs_products_faqs_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "faqs_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const faqsFiles = pgTable("faqs_files", {
	id: serial().primaryKey().notNull(),
	faqsId: integer("faqs_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.faqsId],
			foreignColumns: [faqs.id],
			name: "faqs_files_faqs_id_foreign"
		}).onDelete("set null"),
]);

export const incentivesProducts = pgTable("incentives_products", {
	id: serial().primaryKey().notNull(),
	incentivesId: integer("incentives_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.incentivesId],
			foreignColumns: [incentives.id],
			name: "incentives_products_incentives_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "incentives_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const circlesProducts = pgTable("circles_products", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "circles_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const navigationWebsites = pgTable("navigation_websites", {
	id: serial().primaryKey().notNull(),
	navigationId: integer("navigation_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	websitesId: bigint("websites_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.navigationId],
			foreignColumns: [navigation.id],
			name: "navigation_websites_navigation_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.websitesId],
			foreignColumns: [websites.id],
			name: "navigation_websites_websites_id_foreign"
		}).onDelete("set null"),
]);

export const feeds = pgTable("feeds", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	user: uuid(),
	shop: integer(),
	contextId: uuid("context_id"),
	contextType: varchar("context_type", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.shop],
			foreignColumns: [shops.id],
			name: "feeds_shop_foreign"
		}).onDelete("cascade"),
	pgPolicy("Users can see their own newsfeed", { as: "permissive", for: "select", to: ["public"], using: sql`("user" = auth.uid())` }),
]);

export const feedsPosts = pgTable("feeds_posts", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	feedId: bigint("feed_id", { mode: "number" }),
	postId: integer("post_id"),
}, (table) => [
	foreignKey({
			columns: [table.feedId],
			foreignColumns: [feeds.id],
			name: "feeds_posts_feed_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.postId],
			foreignColumns: [posts.id],
			name: "feeds_posts_post_id_foreign"
		}).onDelete("set null"),
]);

export const gamificationEvents = pgTable("gamification_events", {
	id: serial().primaryKey().notNull(),
	gamificationId: integer("gamification_id"),
	eventsId: integer("events_id"),
}, (table) => [
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "gamification_events_events_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.gamificationId],
			foreignColumns: [gamification.id],
			name: "gamification_events_gamification_id_foreign"
		}).onDelete("set null"),
]);

export const followers = pgTable("followers", {
	id: serial().primaryKey().notNull(),
	followingId: uuid("following_id"),
	followerId: uuid("follower_id"),
	profileFollowing: uuid("profile_following").defaultRandom(),
	profileFollowers: uuid("profile_followers").defaultRandom(),
}, (table) => [
	unique("followers_profile_following_key").on(table.profileFollowing),
	unique("followers_profile_followers_key").on(table.profileFollowers),
]);

export const gamification = pgTable("gamification", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	userCreated: uuid("user_created"),
	userUpdated: uuid("user_updated"),
	name: varchar({ length: 255 }),
	timeLimit: timestamp("time_limit", { mode: 'string' }),
	userProfile: integer("user_profile"),
	ranks: json(),
	achievementType: json("achievement_type"),
	pointsType: json("points_type"),
	openBadgeCompatible: varchar("open_badge_compatible", { length: 255 }),
	nominationUser: uuid("nomination_user"),
	birthdays: uuid(),
	leaderboards: uuid(),
	anniversaries: uuid(),
	progress: varchar({ length: 255 }),
	dailyLoginRewards: timestamp("daily_login_rewards", { withTimezone: true, mode: 'string' }),
	timeBasedAwards: timestamp("time_based_awards", { mode: 'string' }),
	referrals: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.anniversaries],
			foreignColumns: [directusUsers.id],
			name: "gamification_anniversaries_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.birthdays],
			foreignColumns: [directusUsers.id],
			name: "gamification_birthdays_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.leaderboards],
			foreignColumns: [directusUsers.id],
			name: "gamification_leaderboards_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.nominationUser],
			foreignColumns: [directusUsers.id],
			name: "gamification_nomination_user_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "gamification_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userProfile],
			foreignColumns: [userProfile.id],
			name: "gamification_user_profile_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "gamification_user_updated_foreign"
		}),
]);

export const integrationsReport = pgTable("integrations_report", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	reportId: integer("report_id"),
}, (table) => [
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_report_integrations_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.reportId],
			foreignColumns: [report.id],
			name: "integrations_report_report_id_foreign"
		}).onDelete("set null"),
]);

export const integrationsSpaces = pgTable("integrations_spaces", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_spaces_integrations_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "integrations_spaces_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const invoicesAddress = pgTable("invoices_address", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	invoiceId: bigint("invoice_id", { mode: "number" }),
	addressId: integer("address_id"),
}, (table) => [
	foreignKey({
			columns: [table.addressId],
			foreignColumns: [address.id],
			name: "invoices_address_address_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.invoiceId],
			foreignColumns: [invoices.id],
			name: "invoices_address_invoice_id_foreign"
		}).onDelete("set null"),
]);

export const paymentsCurrency = pgTable("payments_currency", {
	id: serial().primaryKey().notNull(),
	paymentsId: integer("payments_id"),
	currencyId: integer("currency_id"),
}, (table) => [
	foreignKey({
			columns: [table.currencyId],
			foreignColumns: [currency.id],
			name: "payments_currency_currency_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.paymentsId],
			foreignColumns: [payments.id],
			name: "payments_currency_payments_id_foreign"
		}).onDelete("set null"),
]);

export const pageBlocksFiles = pgTable("page_blocks_files", {
	id: serial().primaryKey().notNull(),
	pageBlocksId: integer("page_blocks_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusFilesId],
			foreignColumns: [directusFiles.id],
			name: "page_blocks_files_directus_files_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.pageBlocksId],
			foreignColumns: [pageBlocks.id],
			name: "page_blocks_files_page_blocks_id_foreign"
		}).onDelete("set null"),
]);

export const pages = pgTable("pages", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	content: text(),
	list: json(),
	type: varchar({ length: 255 }),
	link: varchar({ length: 255 }),
	image: uuid(),
	repeaterTextBox: json(),
	slug: varchar({ length: 255 }),
});

export const invoices = pgTable("invoices", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	baseCurrencyCode: text("base_currency_code"),
	baseDiscountAmount: integer("base_discount_amount"),
	baseGrandTotal: integer("base_grand_total"),
	baseDiscountTaxCompensationAmount: integer("base_discount_tax_compensation_amount"),
	baseShippingAmount: integer("base_shipping_amount"),
	baseShippingDiscountTaxCompensationAmnt: integer("base_shipping_discount_tax_compensation_amnt"),
	baseShippingInclTax: integer("base_shipping_incl_tax"),
	baseShippingTaxAmount: integer("base_shipping_tax_amount"),
	baseSubtotal: integer("base_subtotal"),
	baseSubtotalInclTax: integer("base_subtotal_incl_tax"),
	baseTaxAmount: integer("base_tax_amount"),
	baseTotalRefunded: integer("base_total_refunded"),
	baseToGlobalRate: integer("base_to_global_rate"),
	baseToOrderRate: integer("base_to_order_rate"),
	canVoidFlag: integer("can_void_flag"),
	discountAmount: integer("discount_amount"),
	discountDescription: text("discount_description"),
	emailSent: integer("email_sent"),
	entityId: integer("entity_id"),
	globalCurrencyCode: text("global_currency_code"),
	grandTotal: integer("grand_total"),
	discountTaxCompensationAmount: integer("discount_tax_compensation_amount"),
	incrementId: text("increment_id"),
	isUsedForRefund: integer("is_used_for_refund"),
	orderCurrencyCode: text("order_currency_code"),
	shippingAmount: integer("shipping_amount"),
	shippingDiscountTaxCompensationAmount: integer("shipping_discount_tax_compensation_amount"),
	shippingInclTax: integer("shipping_incl_tax"),
	shippingTaxAmount: integer("shipping_tax_amount"),
	state: integer(),
	storeCurrencyCode: text("store_currency_code"),
	storeId: integer("store_id"),
	storeToBaseRate: integer("store_to_base_rate"),
	storeToOrderRate: integer("store_to_order_rate"),
	subtotal: integer(),
	subtotalInclTax: integer("subtotal_incl_tax"),
	taxAmount: integer("tax_amount"),
	totalQty: integer("total_qty"),
	user: uuid(),
	plan: varchar({ length: 255 }),
	servicePeriod: varchar("service_period", { length: 255 }),
	paymentPeriod: varchar("payment_period", { length: 255 }),
});

export const invoicesOrders = pgTable("invoices_orders", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	invoiceId: bigint("invoice_id", { mode: "number" }),
	orderId: integer("order_id"),
}, (table) => [
	foreignKey({
			columns: [table.invoiceId],
			foreignColumns: [invoices.id],
			name: "invoices_orders_invoice_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.orderId],
			foreignColumns: [orders.id],
			name: "invoices_orders_order_id_foreign"
		}).onDelete("set null"),
]);

export const invoicesTransactions = pgTable("invoices_transactions", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	invoiceId: bigint("invoice_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	transactionId: bigint("transaction_id", { mode: "number" }),
});

export const listItems = pgTable("list_items", {
	id: serial().primaryKey().notNull(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	listId: integer("list_id"),
	postId: integer("post_id"),
	title: varchar({ length: 255 }),
	description: text(),
	status: varchar({ length: 255 }),
	dueDate: timestamp("due_date", { mode: 'string' }),
	link: varchar({ length: 255 }),
	media: uuid(),
	priority: varchar({ length: 255 }),
	position: integer(),
	isChecked: boolean("is_checked"),
	slug: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.listId],
			foreignColumns: [lists.id],
			name: "list_items_list_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.media],
			foreignColumns: [directusFiles.id],
			name: "list_items_media_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.postId],
			foreignColumns: [posts.id],
			name: "list_items_post_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "list_items_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "list_items_user_updated_foreign"
		}),
]);

export const listProducts = pgTable("list_products", {
	id: serial().primaryKey().notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	productSku: varchar("product_sku", { length: 255 }),
	quantity: integer(),
});

export const manufacturer = pgTable("manufacturer", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	code: text(),
	name: text(),
	description: text(),
	isPublic: boolean(),
	image: uuid(),
});

export const listsDirectusUsers = pgTable("lists_directus_users", {
	id: serial().primaryKey().notNull(),
	listId: integer("list_id"),
	userId: uuid("user_id"),
}, (table) => [
	foreignKey({
			columns: [table.listId],
			foreignColumns: [lists.id],
			name: "lists_directus_users_list_id_foreign"
		}).onDelete("set null"),
]);

export const postgresstoresWebsites = pgTable("postgresstores_websites", {
	id: serial().primaryKey().notNull(),
	postgresstoresId: integer("postgresstores_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	websitesId: bigint("websites_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.postgresstoresId],
			foreignColumns: [postgresstores.id],
			name: "postgresstores_websites_postgresstores_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.websitesId],
			foreignColumns: [websites.id],
			name: "postgresstores_websites_websites_id_foreign"
		}).onDelete("set null"),
]);

export const productsCategories = pgTable("products_categories", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "products_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_categories_products_id_foreign"
		}).onDelete("set null"),
]);

export const lists = pgTable("lists", {
	id: serial().primaryKey().notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
	type: varchar({ length: 255 }),
	status: varchar({ length: 255 }),
	favorite: varchar({ length: 255 }),
	productSku: json("product_sku"),
	slug: varchar({ length: 255 }),
	priority: varchar({ length: 255 }),
	progress: integer(),
});

export const manufacturerCountries = pgTable("manufacturer_countries", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	manufacturerId: bigint("manufacturer_id", { mode: "number" }),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "manufacturer_countries_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.manufacturerId],
			foreignColumns: [manufacturer.id],
			name: "manufacturer_countries_manufacturer_id_foreign"
		}).onDelete("set null"),
]);

export const circlesPosts = pgTable("circles_posts", {
	id: serial().primaryKey().notNull(),
	postsId: integer("posts_id"),
}, (table) => [
	foreignKey({
			columns: [table.postsId],
			foreignColumns: [posts.id],
			name: "circles_posts_posts_id_foreign"
		}).onDelete("set null"),
]);

export const messages = pgTable("messages", {
	id: serial().primaryKey().notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	title: varchar({ length: 255 }),
	content: text(),
});

export const platformPageBlocks = pgTable("platform_page_blocks", {
	id: serial().primaryKey().notNull(),
	platformId: integer("platform_id"),
	pageBlocksId: integer("page_blocks_id"),
}, (table) => [
	foreignKey({
			columns: [table.pageBlocksId],
			foreignColumns: [pageBlocks.id],
			name: "platform_page_blocks_page_blocks_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.platformId],
			foreignColumns: [platform.id],
			name: "platform_page_blocks_platform_id_foreign"
		}).onDelete("set null"),
]);

export const newsletters = pgTable("newsletters", {
	id: serial().primaryKey().notNull(),
	email: text().notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	firstName: varchar("first_name", { length: 255 }),
	lastName: varchar("last_name", { length: 255 }),
	status: varchar({ length: 255 }),
});

export const orderItems = pgTable("order_items", {
	id: serial().primaryKey().notNull(),
	quantity: integer(),
	price: numeric({ precision: 10, scale:  5 }),
});

export const orderItemsProducts = pgTable("order_items_products", {
	id: serial().primaryKey().notNull(),
	orderItemsId: integer("order_items_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.orderItemsId],
			foreignColumns: [orderItems.id],
			name: "order_items_products_order_items_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "order_items_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const radios = pgTable("radios", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	format: varchar({ length: 255 }),
	satellite: varchar({ length: 255 }),
	internet: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
	file: uuid(),
	creator: varchar({ length: 255 }),
	type: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.file],
			foreignColumns: [directusFiles.id],
			name: "radios_file_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "radios_image_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "radios_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "radios_user_updated_foreign"
		}),
]);

export const radiosDepartments = pgTable("radios_departments", {
	id: serial().primaryKey().notNull(),
	radiosId: integer("radios_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "radios_departments_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.radiosId],
			foreignColumns: [radios.id],
			name: "radios_departments_radios_id_foreign"
		}).onDelete("set null"),
]);

export const profiles = pgTable("profiles", {
	id: uuid().primaryKey().notNull(),
	username: text(),
	birthDate: date("birth_date"),
	description: text(),
	slug: varchar({ length: 255 }).default(sql`NULL`),
	company: varchar({ length: 255 }),
	activitypubHandle: varchar("activitypub_handle", { length: 255 }),
	dropshippingPartnerId: varchar("dropshipping_partner_id", { length: 255 }),
	user: uuid(),
	commerceAuthId: varchar("commerce_auth_id", { length: 255 }),
	cmsAuthId: varchar("cms_auth_id", { length: 255 }),
	keycloakId: varchar("keycloak_id", { length: 255 }),
	supabaseUserId: uuid("supabase_user_id"),
	role: uuid(),
	sellerRequested: boolean("seller_requested"),
	sellerApproved: boolean("seller_approved"),
	position: varchar({ length: 255 }),
	links: json(),
	magentoCustomerId: varchar("magento_customer_id", { length: 255 }),
	avatar: uuid(),
}, (table) => [
	index().using("btree", table.supabaseUserId.asc().nullsLast().op("uuid_ops")),
	foreignKey({
			columns: [table.avatar],
			foreignColumns: [directusFiles.id],
			name: "profiles_avatar_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.id],
			foreignColumns: [profiles.id],
			name: "profiles_id_fkey"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.role],
			foreignColumns: [directusRoles.id],
			name: "profiles_role_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "profiles_user_foreign"
		}).onDelete("set null"),
	unique("profiles_username_unique").on(table.username),
	unique("profiles_slug_unique").on(table.slug),
	unique("profiles_user_unique").on(table.user),
	unique("profiles_supabase_user_id_unique").on(table.supabaseUserId),
]);

export const radiosMusicchart = pgTable("radios_musicchart", {
	id: serial().primaryKey().notNull(),
	radiosId: integer("radios_id"),
}, (table) => [
	foreignKey({
			columns: [table.radiosId],
			foreignColumns: [radios.id],
			name: "radios_musicchart_radios_id_foreign"
		}).onDelete("set null"),
]);

export const ordersProducts = pgTable("orders_products", {
	id: serial().primaryKey().notNull(),
	ordersId: integer("orders_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.ordersId],
			foreignColumns: [orders.id],
			name: "orders_products_orders_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "orders_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const outletsCategories = pgTable("outlets_categories", {
	id: serial().primaryKey().notNull(),
	outletsId: integer("outlets_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "outlets_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.outletsId],
			foreignColumns: [outlets.id],
			name: "outlets_categories_outlets_id_foreign"
		}).onDelete("set null"),
]);

export const orders = pgTable("orders", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	type: varchar({ length: 255 }),
	adjustmentNegative: integer("adjustment_negative"),
	adjustmentPositive: integer("adjustment_positive"),
	appliedRuleIds: text("applied_rule_ids"),
	baseAdjustmentNegative: integer("base_adjustment_negative"),
	baseAdjustmentPositive: integer("base_adjustment_positive"),
	baseCurrencyCode: text("base_currency_code"),
	baseDiscountAmount: integer("base_discount_amount"),
	baseDiscountCanceled: integer("base_discount_canceled"),
	baseDiscountInvoiced: integer("base_discount_invoiced"),
	baseDiscountRefunded: integer("base_discount_refunded"),
	baseGrandTotal: integer("base_grand_total"),
	baseDiscountTaxCompensationAmount: integer("base_discount_tax_compensation_amount"),
	baseDiscountTaxCompensationInvoiced: integer("base_discount_tax_compensation_invoiced"),
	baseDiscountTaxCompensationRefunded: integer("base_discount_tax_compensation_refunded"),
	baseShippingAmount: integer("base_shipping_amount"),
	baseShippingCanceled: integer("base_shipping_canceled"),
	baseShippingDiscountAmount: integer("base_shipping_discount_amount"),
	baseShippingDiscountTaxCompensationAmnt: integer("base_shipping_discount_tax_compensation_amnt"),
	baseShippingInclTax: integer("base_shipping_incl_tax"),
	baseShippingInvoiced: integer("base_shipping_invoiced"),
	baseShippingRefunded: integer("base_shipping_refunded"),
	baseShippingTaxAmount: integer("base_shipping_tax_amount"),
	baseShippingTaxRefunded: integer("base_shipping_tax_refunded"),
	baseSubtotal: integer("base_subtotal"),
	baseSubtotalCanceled: integer("base_subtotal_canceled"),
	baseSubtotalInclTax: integer("base_subtotal_incl_tax"),
	baseSubtotalInvoiced: integer("base_subtotal_invoiced"),
	baseSubtotalRefunded: integer("base_subtotal_refunded"),
	baseTaxAmount: integer("base_tax_amount"),
	baseTaxCanceled: integer("base_tax_canceled"),
	baseTaxInvoiced: integer("base_tax_invoiced"),
	baseTaxRefunded: integer("base_tax_refunded"),
	baseTotalCanceled: integer("base_total_canceled"),
	baseTotalDue: integer("base_total_due"),
	baseTotalInvoiced: integer("base_total_invoiced"),
	baseTotalInvoicedCost: integer("base_total_invoiced_cost"),
	baseTotalOfflineRefunded: integer("base_total_offline_refunded"),
	baseTotalOnlineRefunded: integer("base_total_online_refunded"),
	baseTotalPaid: integer("base_total_paid"),
	baseTotalQtyOrdered: integer("base_total_qty_ordered"),
	baseTotalRefunded: integer("base_total_refunded"),
	baseToGlobalRate: integer("base_to_global_rate"),
	baseToOrderRate: integer("base_to_order_rate"),
	billingAddressId: integer("billing_address_id"),
	canShipPartially: integer("can_ship_partially"),
	canShipPartiallyItem: integer("can_ship_partially_item"),
	couponCode: text("coupon_code"),
	customerDob: text("customer_dob"),
	customerEmail: text("customer_email"),
	customerFirstname: text("customer_firstname"),
	customerGender: integer("customer_gender"),
	customerGroupId: integer("customer_group_id"),
	customerId: integer("customer_id"),
	customerIsGuest: integer("customer_is_guest"),
	customerLastname: text("customer_lastname"),
	customerMiddlename: text("customer_middlename"),
	customerNote: text("customer_note"),
	customerNoteNotify: integer("customer_note_notify"),
	customerPrefix: text("customer_prefix"),
	customerSuffix: text("customer_suffix"),
	customerTaxvat: text("customer_taxvat"),
	discountAmount: integer("discount_amount"),
	discountCanceled: integer("discount_canceled"),
	discountDescription: text("discount_description"),
	discountInvoiced: integer("discount_invoiced"),
	discountRefunded: integer("discount_refunded"),
	editIncrement: integer("edit_increment"),
	emailSent: integer("email_sent"),
	entityId: integer("entity_id"),
	extCustomerId: text("ext_customer_id"),
	extOrderId: text("ext_order_id"),
	forcedShipmentWithInvoice: integer("forced_shipment_with_invoice"),
	globalCurrencyCode: text("global_currency_code"),
	grandTotal: integer("grand_total"),
	discountTaxCompensationAmount: integer("discount_tax_compensation_amount"),
	discountTaxCompensationInvoiced: integer("discount_tax_compensation_invoiced"),
	discountTaxCompensationRefunded: integer("discount_tax_compensation_refunded"),
	holdBeforeState: text("hold_before_state"),
	holdBeforeStatus: text("hold_before_status"),
	incrementId: text("increment_id"),
	isVirtual: integer("is_virtual"),
	orderCurrencyCode: text("order_currency_code"),
	originalIncrementId: text("original_increment_id"),
	paymentAuthorizationAmount: integer("payment_authorization_amount"),
	paymentAuthExpiration: integer("payment_auth_expiration"),
	protectCode: text("protect_code"),
	quoteAddressId: integer("quote_address_id"),
	quoteId: integer("quote_id"),
	relationChildId: text("relation_child_id"),
	relationChildRealId: text("relation_child_real_id"),
	relationParentId: text("relation_parent_id"),
	relationParentRealId: text("relation_parent_real_id"),
	remoteIp: text("remote_ip"),
	shippingAmount: integer("shipping_amount"),
	shippingCanceled: integer("shipping_canceled"),
	shippingDescription: text("shipping_description"),
	shippingDiscountAmount: integer("shipping_discount_amount"),
	shippingDiscountTaxCompensationAmount: integer("shipping_discount_tax_compensation_amount"),
	shippingInclTax: integer("shipping_incl_tax"),
	shippingInvoiced: integer("shipping_invoiced"),
	shippingRefunded: integer("shipping_refunded"),
	shippingTaxAmount: integer("shipping_tax_amount"),
	shippingTaxRefunded: integer("shipping_tax_refunded"),
	state: text(),
	storeCurrencyCode: text("store_currency_code"),
	storeId: integer("store_id"),
	storeName: text("store_name"),
	storeToBaseRate: integer("store_to_base_rate"),
	storeToOrderRate: integer("store_to_order_rate"),
	subtotal: integer(),
	subtotalCanceled: integer("subtotal_canceled"),
	subtotalInclTax: integer("subtotal_incl_tax"),
	subtotalInvoiced: integer("subtotal_invoiced"),
	subtotalRefunded: integer("subtotal_refunded"),
	taxAmount: integer("tax_amount"),
	taxCanceled: integer("tax_canceled"),
	taxInvoiced: integer("tax_invoiced"),
	taxRefunded: integer("tax_refunded"),
	totalCanceled: integer("total_canceled"),
	totalDue: integer("total_due"),
	totalInvoiced: integer("total_invoiced"),
	totalItemCount: integer("total_item_count"),
	totalOfflineRefunded: integer("total_offline_refunded"),
	totalOnlineRefunded: integer("total_online_refunded"),
	totalPaid: integer("total_paid"),
	totalQtyOrdered: integer("total_qty_ordered"),
	totalRefunded: integer("total_refunded"),
	weight: integer(),
	xForwardedFor: text("x_forwarded_for"),
	paymentStatus: varchar("payment_status", { length: 255 }),
	userId: uuid("user_id"),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [directusUsers.id],
			name: "orders_user_id_foreign"
		}).onDelete("set null"),
]);

export const outlets = pgTable("outlets", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	color: varchar({ length: 255 }),
	colortext: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
	callouts: json(),
	uid: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "outlets_image_foreign"
		}).onDelete("set null"),
]);

export const payments = pgTable("payments", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	description: text(),
	gateway: varchar({ length: 255 }),
	amount: numeric({ precision: 10, scale:  5 }),
	createdAt: timestamp("created_at", { mode: 'string' }),
});

export const pickupLocations = pgTable("pickup_locations", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	phone: bigint({ mode: "number" }),
	address: varchar({ length: 255 }),
	postcode: varchar({ length: 255 }),
	pickupLocationCode: varchar("pickup_location_code", { length: 255 }),
	contactName: varchar("contact_name", { length: 255 }),
	email: varchar({ length: 255 }),
	fax: varchar({ length: 255 }),
	latitude: varchar({ length: 255 }),
	longitude: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
});

export const paymentsDirectusUsers = pgTable("payments_directus_users", {
	id: serial().primaryKey().notNull(),
	paymentsId: integer("payments_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "payments_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.paymentsId],
			foreignColumns: [payments.id],
			name: "payments_directus_users_payments_id_foreign"
		}).onDelete("set null"),
]);

export const relatedProductsProducts = pgTable("related_products_products", {
	id: serial().primaryKey().notNull(),
	relatedProductsId: integer("related_products_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "related_products_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.relatedProductsId],
			foreignColumns: [relatedProducts.id],
			name: "related_products_products_related_products_id_foreign"
		}).onDelete("set null"),
]);

export const region = pgTable("region", {
	id: serial().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	regionId: integer("region_id"),
	name: varchar({ length: 255 }),
	code: varchar({ length: 255 }),
	description: text(),
	slug: varchar({ length: 255 }),
});

export const regionShippingAddress = pgTable("region_shipping_address", {
	id: serial().primaryKey().notNull(),
	regionId: integer("region_id"),
	shippingAddressId: integer("shipping_address_id"),
}, (table) => [
	foreignKey({
			columns: [table.regionId],
			foreignColumns: [region.id],
			name: "region_shipping_address_region_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shippingAddressId],
			foreignColumns: [shippingAddress.id],
			name: "region_shipping_address_shipping_address_id_foreign"
		}).onDelete("set null"),
]);

export const reportComments = pgTable("report_comments", {
	id: serial().primaryKey().notNull(),
	reportId: integer("report_id"),
	commentsId: integer("comments_id"),
}, (table) => [
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "report_comments_comments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.reportId],
			foreignColumns: [report.id],
			name: "report_comments_report_id_foreign"
		}).onDelete("set null"),
]);

export const reportDirectusUsers = pgTable("report_directus_users", {
	id: serial().primaryKey().notNull(),
	reportId: integer("report_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.reportId],
			foreignColumns: [report.id],
			name: "report_directus_users_report_id_foreign"
		}).onDelete("set null"),
]);

export const reportFaqs = pgTable("report_faqs", {
	id: serial().primaryKey().notNull(),
	reportId: integer("report_id"),
	faqsId: integer("faqs_id"),
}, (table) => [
	foreignKey({
			columns: [table.faqsId],
			foreignColumns: [faqs.id],
			name: "report_faqs_faqs_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.reportId],
			foreignColumns: [report.id],
			name: "report_faqs_report_id_foreign"
		}).onDelete("set null"),
]);

export const pickupLocationsCity = pgTable("pickup_locations_city", {
	id: serial().primaryKey().notNull(),
	pickupLocationsId: integer("pickup_locations_id"),
	item: varchar({ length: 255 }),
	collection: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.pickupLocationsId],
			foreignColumns: [pickupLocations.id],
			name: "pickup_locations_city_pickup_locations_id_foreign"
		}).onDelete("set null"),
]);

export const pickupLocationsCountry = pgTable("pickup_locations_country", {
	id: serial().primaryKey().notNull(),
	pickupLocationsId: integer("pickup_locations_id"),
	item: varchar({ length: 255 }),
	collection: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.pickupLocationsId],
			foreignColumns: [pickupLocations.id],
			name: "pickup_locations_country_pickup_locations_id_foreign"
		}).onDelete("set null"),
]);

export const pickupLocationsState = pgTable("pickup_locations_state", {
	id: serial().primaryKey().notNull(),
	pickupLocationsId: integer("pickup_locations_id"),
	item: varchar({ length: 255 }),
	collection: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.pickupLocationsId],
			foreignColumns: [pickupLocations.id],
			name: "pickup_locations_state_pickup_locations_id_foreign"
		}).onDelete("set null"),
]);

export const shipment = pgTable("shipment", {
	id: serial().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	emailSent: integer("email_sent"),
	user: uuid(),
	order: integer(),
	shipmentStatus: varchar("shipment_status", { length: 255 }),
	shippingLabel: varchar("shipping_label", { length: 255 }),
	storeId: integer("store_id"),
	totalQty: integer("total_qty"),
	totalWeight: integer("total_weight"),
	code: varchar({ length: 255 }),
	cost: integer(),
	deliveryTime: varchar("delivery_time", { length: 255 }),
	deliveryWindow: varchar("delivery_window", { length: 255 }),
	carrierMatrix: json("carrier_matrix"),
}, (table) => [
	foreignKey({
			columns: [table.order],
			foreignColumns: [orders.id],
			name: "shipment_order_foreign"
		}).onDelete("set null"),
]);

export const financeIndexArticles = pgTable("finance_index_articles", {
	id: serial().primaryKey().notNull(),
	financeIndexId: integer("finance_index_id"),
	articlesId: integer("articles_id"),
}, (table) => [
	foreignKey({
			columns: [table.articlesId],
			foreignColumns: [articles.id],
			name: "finance_index_articles_articles_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.financeIndexId],
			foreignColumns: [financeIndex.id],
			name: "finance_index_articles_finance_index_id_foreign"
		}).onDelete("set null"),
]);

export const shipmentProducts = pgTable("shipment_products", {
	id: serial().primaryKey().notNull(),
	shipmentId: integer("shipment_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "shipment_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shipmentId],
			foreignColumns: [shipment.id],
			name: "shipment_products_shipment_id_foreign"
		}).onDelete("set null"),
]);

export const outletsShorts = pgTable("outlets_shorts", {
	id: serial().primaryKey().notNull(),
	outletsId: integer("outlets_id"),
	shortsId: integer("shorts_id"),
}, (table) => [
	foreignKey({
			columns: [table.outletsId],
			foreignColumns: [outlets.id],
			name: "outlets_shorts_outlets_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "outlets_shorts_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const reportPosts = pgTable("report_posts", {
	id: serial().primaryKey().notNull(),
	reportId: integer("report_id"),
	postsId: integer("posts_id"),
}, (table) => [
	foreignKey({
			columns: [table.postsId],
			foreignColumns: [posts.id],
			name: "report_posts_posts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.reportId],
			foreignColumns: [report.id],
			name: "report_posts_report_id_foreign"
		}).onDelete("set null"),
]);

export const productsCountries = pgTable("products_countries", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_countries_products_id_foreign"
		}).onDelete("set null"),
]);

export const productsCurrency = pgTable("products_currency", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	currencyId: integer("currency_id"),
}, (table) => [
	foreignKey({
			columns: [table.currencyId],
			foreignColumns: [currency.id],
			name: "products_currency_currency_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_currency_products_id_foreign"
		}).onDelete("set null"),
]);

export const productsDepartments = pgTable("products_departments", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "products_departments_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_departments_products_id_foreign"
		}).onDelete("set null"),
]);

export const productsManufacturer = pgTable("products_manufacturer", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	manufacturerId: bigint("manufacturer_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.manufacturerId],
			foreignColumns: [manufacturer.id],
			name: "products_manufacturer_manufacturer_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_manufacturer_products_id_foreign"
		}).onDelete("set null"),
]);

export const productsDirectusUsers = pgTable("products_directus_users", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productId: bigint("product_id", { mode: "number" }),
	userId: uuid("user_id"),
}, (table) => [
	foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "products_directus_users_product_id_foreign"
		}).onDelete("set null"),
]);

export const shorts = pgTable("shorts", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	videoUrl: varchar("video_url", { length: 255 }),
	duration: varchar({ length: 255 }),
	host: varchar({ length: 255 }),
	thumbnail: uuid(),
	dateTime: timestamp({ mode: 'string' }),
	type: varchar({ length: 255 }),
	ageRequirement: varchar("age_requirement", { length: 255 }),
	creator: varchar({ length: 255 }),
	video: uuid(),
	watchTime: varchar("watch_time", { length: 255 }),
	clickThroughRate: varchar("click_through_rate", { length: 255 }),
	conversion: varchar({ length: 255 }),
	saves: varchar({ length: 255 }),
	favorite: boolean(),
	ageGate: varchar("age_gate", { length: 255 }),
	region: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.video],
			foreignColumns: [directusFiles.id],
			name: "shorts_video_foreign"
		}).onDelete("set null"),
]);

export const shippingAddressesDirectusUsers = pgTable("shipping_addresses_directus_users", {
	id: serial().primaryKey().notNull(),
	shippingAddressesId: integer("shipping_addresses_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "shipping_addresses_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shippingAddressesId],
			foreignColumns: [shippingAddresses.id],
			name: "shipping_addresses_directus_users_shipping__1c96539d_foreign"
		}).onDelete("set null"),
]);

export const shippingAddressesOrders = pgTable("shipping_addresses_orders", {
	id: serial().primaryKey().notNull(),
	shippingAddressesId: integer("shipping_addresses_id"),
	ordersId: integer("orders_id"),
}, (table) => [
	foreignKey({
			columns: [table.ordersId],
			foreignColumns: [orders.id],
			name: "shipping_addresses_orders_orders_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shippingAddressesId],
			foreignColumns: [shippingAddresses.id],
			name: "shipping_addresses_orders_shipping_addresses_id_foreign"
		}).onDelete("set null"),
]);

export const productsProductDesigner = pgTable("products_product_designer", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	item: varchar({ length: 255 }),
	collection: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_product_designer_products_id_foreign"
		}).onDelete("set null"),
]);

export const postgresstoresCollections = pgTable("postgresstores_collections", {
	id: serial().primaryKey().notNull(),
	postgresstoresId: integer("postgresstores_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	collectionsId: bigint("collections_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.collectionsId],
			foreignColumns: [collections.id],
			name: "postgresstores_collections_collections_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.postgresstoresId],
			foreignColumns: [postgresstores.id],
			name: "postgresstores_collections_postgresstores_id_foreign"
		}).onDelete("set null"),
]);

export const ratingsProducts = pgTable("ratings_products", {
	id: serial().primaryKey().notNull(),
	ratingsId: integer("ratings_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "ratings_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.ratingsId],
			foreignColumns: [ratings.id],
			name: "ratings_products_ratings_id_foreign"
		}).onDelete("set null"),
]);

export const reactionsComments = pgTable("reactions_comments", {
	id: serial().primaryKey().notNull(),
	reactionsId: integer("reactions_id"),
	commentsId: integer("comments_id"),
}, (table) => [
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "reactions_comments_comments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.reactionsId],
			foreignColumns: [reactions.id],
			name: "reactions_comments_reactions_id_foreign"
		}).onDelete("set null"),
]);

export const productsWebsites = pgTable("products_websites", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	websitesId: bigint("websites_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_websites_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.websitesId],
			foreignColumns: [websites.id],
			name: "products_websites_websites_id_foreign"
		}).onDelete("set null"),
]);

export const reactionsLists = pgTable("reactions_lists", {
	id: serial().primaryKey().notNull(),
	reactionsId: integer("reactions_id"),
	listsId: integer("lists_id"),
}, (table) => [
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "reactions_lists_lists_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.reactionsId],
			foreignColumns: [reactions.id],
			name: "reactions_lists_reactions_id_foreign"
		}).onDelete("set null"),
]);

export const reactionsDirectusUsers = pgTable("reactions_directus_users", {
	id: serial().primaryKey().notNull(),
	reactionId: integer("reaction_id"),
	userId: uuid("user_id"),
}, (table) => [
	foreignKey({
			columns: [table.reactionId],
			foreignColumns: [reactions.id],
			name: "reactions_directus_users_reaction_id_foreign"
		}).onDelete("set null"),
]);

export const reactionsPosts = pgTable("reactions_posts", {
	id: serial().primaryKey().notNull(),
	reactionsId: integer("reactions_id"),
	postsId: integer("posts_id"),
}, (table) => [
	foreignKey({
			columns: [table.postsId],
			foreignColumns: [posts.id],
			name: "reactions_posts_posts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.reactionsId],
			foreignColumns: [reactions.id],
			name: "reactions_posts_reactions_id_foreign"
		}).onDelete("set null"),
]);

export const reactionsShorts = pgTable("reactions_shorts", {
	id: serial().primaryKey().notNull(),
	reactionsId: integer("reactions_id"),
	shortsId: integer("shorts_id"),
}, (table) => [
	foreignKey({
			columns: [table.reactionsId],
			foreignColumns: [reactions.id],
			name: "reactions_shorts_reactions_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "reactions_shorts_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const reportProducts = pgTable("report_products", {
	id: serial().primaryKey().notNull(),
	reportId: integer("report_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "report_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.reportId],
			foreignColumns: [report.id],
			name: "report_products_report_id_foreign"
		}).onDelete("set null"),
]);

export const shortsSpaces = pgTable("shorts_spaces", {
	id: serial().primaryKey().notNull(),
	shortsId: integer("shorts_id"),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "shorts_spaces_shorts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "shorts_spaces_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const sitePreferenceCountries = pgTable("site_preference_countries", {
	id: serial().primaryKey().notNull(),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "site_preference_countries_countries_id_foreign"
		}).onDelete("set null"),
]);

export const sitePreferenceDepartments = pgTable("site_preference_departments", {
	id: serial().primaryKey().notNull(),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "site_preference_departments_departments_id_foreign"
		}).onDelete("set null"),
]);

export const userFriendsPosts = pgTable("user_friends_posts", {
	id: serial().primaryKey().notNull(),
	userFriendsId: integer("user_friends_id"),
	postsId: integer("posts_id"),
}, (table) => [
	foreignKey({
			columns: [table.postsId],
			foreignColumns: [posts.id],
			name: "user_friends_posts_posts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userFriendsId],
			foreignColumns: [userFriends.id],
			name: "user_friends_posts_user_friends_id_foreign"
		}).onDelete("set null"),
]);

export const projectBoardProjects = pgTable("project_board_projects", {
	id: serial().primaryKey().notNull(),
	projectBoardId: integer("project_board_id"),
	projectsId: integer("projects_id"),
}, (table) => [
	foreignKey({
			columns: [table.projectBoardId],
			foreignColumns: [projectBoard.id],
			name: "project_board_projects_project_board_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "project_board_projects_projects_id_foreign"
		}).onDelete("set null"),
]);

export const emojiReactions = pgTable("emoji_reactions", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	targetType: text("target_type"),
	targetId: uuid("target_id").notNull(),
	userId: uuid("user_id"),
	emoji: text().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [profiles.id],
			name: "emoji_reactions_user_id_fkey"
		}).onDelete("cascade"),
	check("emoji_reactions_target_type_check", sql`target_type = ANY (ARRAY['video'::text, 'comment'::text])`),
]);

export const returnsOrders = pgTable("returns_orders", {
	id: serial().primaryKey().notNull(),
	returnsId: integer("returns_id"),
	ordersId: integer("orders_id"),
}, (table) => [
	foreignKey({
			columns: [table.ordersId],
			foreignColumns: [orders.id],
			name: "returns_orders_orders_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.returnsId],
			foreignColumns: [returns.id],
			name: "returns_orders_returns_id_foreign"
		}).onDelete("set null"),
]);

export const reviewsProducts = pgTable("reviews_products", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "reviews_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const projects = pgTable("projects", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	dueDate: timestamp("due_date", { mode: 'string' }),
	priority: varchar({ length: 255 }),
	budget: integer(),
	spend: integer(),
	difference: integer(),
	estimatedTime: time("estimated_time"),
	icon: uuid(),
	slug: varchar({ length: 255 }),
	customFields: json("custom_fields"),
	name: varchar({ length: 255 }),
	taskName: json("task_name"),
	gantt: json(),
}, (table) => [
	foreignKey({
			columns: [table.icon],
			foreignColumns: [directusFiles.id],
			name: "projects_icon_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "projects_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "projects_user_updated_foreign"
		}),
]);

export const shipmentComments = pgTable("shipment_comments", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	parentId: integer("parent_id"),
	comment: text(),
	entityId: integer("entity_id"),
	isCustomerNotified: varchar("is_customer_notified", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.parentId],
			foreignColumns: [shipment.id],
			name: "shipment_comments_parent_id_foreign"
		}).onDelete("set null"),
]);

export const projectBoardFiles = pgTable("project_board_files", {
	id: serial().primaryKey().notNull(),
	projectBoardId: integer("project_board_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusFilesId],
			foreignColumns: [directusFiles.id],
			name: "project_board_files_directus_files_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectBoardId],
			foreignColumns: [projectBoard.id],
			name: "project_board_files_project_board_id_foreign"
		}).onDelete("set null"),
]);

export const shipmentTracking = pgTable("shipment_tracking", {
	id: serial().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	entityId: integer("entity_id"),
	weight: integer(),
	qty: integer(),
	description: text(),
	trackNumber: integer("track_number"),
	title: varchar({ length: 255 }),
	carrierCode: varchar("carrier_code", { length: 255 }),
	parentId: integer("parent_id"),
}, (table) => [
	foreignKey({
			columns: [table.parentId],
			foreignColumns: [shipment.id],
			name: "shipment_tracking_parent_id_foreign"
		}).onDelete("set null"),
]);

export const shippingAddress = pgTable("shipping_address", {
	id: serial().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	customerId: integer("customer_id"),
	regionId: integer("region_id"),
	countryId: text("country_id"),
	street: text(),
	company: text(),
	telephone: text(),
	fax: text(),
	postcode: text(),
	city: text(),
	firstname: text(),
	lastname: text(),
	middlename: text(),
	prefix: text(),
	suffix: text(),
	vatId: text("vat_id"),
	defaultShipping: boolean("default_shipping"),
	defaultBilling: boolean("default_billing"),
});

export const projectsProjectTimeline = pgTable("projects_project_timeline", {
	id: serial().primaryKey().notNull(),
	projectsId: integer("projects_id"),
	projectTimelineId: integer("project_timeline_id"),
}, (table) => [
	foreignKey({
			columns: [table.projectTimelineId],
			foreignColumns: [projectTimeline.id],
			name: "projects_project_timeline_project_timeline_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "projects_project_timeline_projects_id_foreign"
		}).onDelete("set null"),
]);

export const calendarDirectusUsers = pgTable("calendar_directus_users", {
	id: serial().primaryKey().notNull(),
	calendarId: integer("calendar_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.calendarId],
			foreignColumns: [calendar.id],
			name: "calendar_directus_users_calendar_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "calendar_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
]);

export const shippingAddressesStates = pgTable("shipping_addresses_states", {
	id: serial().primaryKey().notNull(),
	shippingAddressesId: integer("shipping_addresses_id"),
	statesId: integer("states_id"),
}, (table) => [
	foreignKey({
			columns: [table.shippingAddressesId],
			foreignColumns: [shippingAddresses.id],
			name: "shipping_addresses_states_shipping_addresses_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.statesId],
			foreignColumns: [states.id],
			name: "shipping_addresses_states_states_id_foreign"
		}).onDelete("set null"),
]);

export const shopsCategories = pgTable("shops_categories", {
	id: serial().primaryKey().notNull(),
	shopsId: integer("shops_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "shops_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shops_categories_shops_id_foreign"
		}).onDelete("set null"),
]);

export const shopsComments = pgTable("shops_comments", {
	id: serial().primaryKey().notNull(),
	shopsId: integer("shops_id"),
	commentsId: integer("comments_id"),
}, (table) => [
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "shops_comments_comments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shops_comments_shops_id_foreign"
		}).onDelete("set null"),
]);

export const shopsCountries = pgTable("shops_countries", {
	id: serial().primaryKey().notNull(),
	shopsId: integer("shops_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "shops_countries_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shops_countries_shops_id_foreign"
		}).onDelete("set null"),
]);

export const shopsDepartments = pgTable("shops_departments", {
	id: serial().primaryKey().notNull(),
	shopsId: integer("shops_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "shops_departments_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shops_departments_shops_id_foreign"
		}).onDelete("set null"),
]);

export const shopsDirectusUsers = pgTable("shops_directus_users", {
	id: serial().primaryKey().notNull(),
	shopsId: integer("shops_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shops_directus_users_shops_id_foreign"
		}).onDelete("set null"),
]);

export const shops = pgTable("shops", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	content: text(),
	website: varchar({ length: 255 }),
	type: json(),
	address: text(),
	rating: integer(),
	image: uuid(),
	description: text(),
	slug: varchar({ length: 255 }),
	phone: varchar({ length: 255 }),
	shippingPolicy: text("shipping_policy"),
	policies: json(),
	foodOffered: varchar("food_offered", { length: 255 }),
	customDomain: varchar("custom_domain", { length: 255 }),
	theme: json(),
	trustedScore: json("trusted_score"),
});

export const taxesCountries = pgTable("taxes_countries", {
	id: serial().primaryKey().notNull(),
	taxesId: integer("taxes_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "taxes_countries_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.taxesId],
			foreignColumns: [taxes.id],
			name: "taxes_countries_taxes_id_foreign"
		}).onDelete("set null"),
]);

export const taxesStates = pgTable("taxes_states", {
	id: serial().primaryKey().notNull(),
	taxesId: integer("taxes_id"),
	statesId: integer("states_id"),
}, (table) => [
	foreignKey({
			columns: [table.statesId],
			foreignColumns: [states.id],
			name: "taxes_states_states_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.taxesId],
			foreignColumns: [taxes.id],
			name: "taxes_states_taxes_id_foreign"
		}).onDelete("set null"),
]);

export const userProfile = pgTable("user_profile", {
	id: serial().primaryKey().notNull(),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	user: uuid(),
	displayName: varchar("display_name", { length: 255 }),
	bio: text(),
	avatar: uuid(),
	location: varchar({ length: 255 }),
	socials: json(),
	store: varchar({ length: 255 }),
	age: integer(),
}, (table) => [
	foreignKey({
			columns: [table.avatar],
			foreignColumns: [directusFiles.id],
			name: "user_profile_avatar_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "user_profile_user_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "user_profile_user_updated_foreign"
		}),
]);

export const translationsPostgresstores = pgTable("translations_postgresstores", {
	id: serial().primaryKey().notNull(),
	translationsId: integer("translations_id"),
	postgresstoresId: integer("postgresstores_id"),
}, (table) => [
	foreignKey({
			columns: [table.postgresstoresId],
			foreignColumns: [postgresstores.id],
			name: "translations_postgresstores_postgresstores_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.translationsId],
			foreignColumns: [translations.id],
			name: "translations_postgresstores_translations_id_foreign"
		}).onDelete("set null"),
]);

export const userContentInteraction = pgTable("user_content_interaction", {
	id: serial().primaryKey().notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	interactionType: varchar("interaction_type", { length: 255 }),
});

export const tagsShorts = pgTable("tags_shorts", {
	id: serial().primaryKey().notNull(),
	tagsId: integer("tags_id"),
	shortsId: integer("shorts_id"),
}, (table) => [
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "tags_shorts_shorts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "tags_shorts_tags_id_foreign"
		}).onDelete("set null"),
]);

export const shopsFiles = pgTable("shops_files", {
	id: serial().primaryKey().notNull(),
	shopsId: integer("shops_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shops_files_shops_id_foreign"
		}).onDelete("set null"),
]);

export const shopsProducts = pgTable("shops_products", {
	id: serial().primaryKey().notNull(),
	shopsId: integer("shops_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "shops_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shops_products_shops_id_foreign"
		}).onDelete("set null"),
]);

export const videosManufacturer = pgTable("videos_manufacturer", {
	id: serial().primaryKey().notNull(),
	videosId: integer("videos_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	manufacturerId: bigint("manufacturer_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.manufacturerId],
			foreignColumns: [manufacturer.id],
			name: "videos_manufacturer_manufacturer_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videosId],
			foreignColumns: [videos.id],
			name: "videos_manufacturer_videos_id_foreign"
		}).onDelete("set null"),
]);

export const videosProducts = pgTable("videos_products", {
	id: serial().primaryKey().notNull(),
	videosId: integer("videos_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "videos_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videosId],
			foreignColumns: [videos.id],
			name: "videos_products_videos_id_foreign"
		}).onDelete("set null"),
]);

export const shortsDirectusUsers = pgTable("shorts_directus_users", {
	id: serial().primaryKey().notNull(),
	shortsId: integer("shorts_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "shorts_directus_users_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const tags = pgTable("tags", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
	slug: varchar({ length: 255 }),
});

export const spacesTags = pgTable("spaces_tags", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	tagsId: integer("tags_id"),
}, (table) => [
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_tags_spaces_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "spaces_tags_tags_id_foreign"
		}).onDelete("set null"),
]);

export const spacesMetaSpace = pgTable("spaces_meta_Space", {
	id: serial().primaryKey().notNull(),
});

export const spacesPosts = pgTable("spaces_posts", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	postsId: integer("posts_id"),
}, (table) => [
	foreignKey({
			columns: [table.postsId],
			foreignColumns: [posts.id],
			name: "spaces_posts_posts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_posts_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const states = pgTable("states", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }),
	countryCode: varchar("country_code", { length: 255 }),
	fipsCode: varchar("fips_code", { length: 255 }),
	iso2: varchar({ length: 255 }),
	latitude: numeric({ precision: 10, scale:  5 }),
	longitude: numeric({ precision: 10, scale:  5 }),
	flag: integer(),
	wikiDataId: varchar({ length: 255 }),
	countryId: varchar("country_id", { length: 255 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
});

export const streams = pgTable("streams", {
	id: serial().primaryKey().notNull(),
	streamId: integer("stream_id"),
	streamDate: timestamp("stream_date", { withTimezone: true, mode: 'string' }),
	streamDuration: varchar("stream_duration", { length: 255 }),
	streamTime: varchar("stream_time", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.streamId],
			foreignColumns: [videos.id],
			name: "streams_stream_id_foreign"
		}).onDelete("set null"),
]);

export const statesCountries = pgTable("states_countries", {
	id: serial().primaryKey().notNull(),
	countriesId: integer("countries_id"),
});

export const tagsCategories = pgTable("tags_categories", {
	id: serial().primaryKey().notNull(),
	tagsId: integer("tags_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "tags_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "tags_categories_tags_id_foreign"
		}).onDelete("set null"),
]);

export const tagsDepartments = pgTable("tags_departments", {
	id: serial().primaryKey().notNull(),
	tagsId: integer("tags_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "tags_departments_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "tags_departments_tags_id_foreign"
		}).onDelete("set null"),
]);

export const spacesFiles = pgTable("spaces_files", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusFilesId],
			foreignColumns: [directusFiles.id],
			name: "spaces_files_directus_files_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_files_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const brands = pgTable("brands", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	code: text(),
	name: text(),
	description: text(),
	image: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "brands_image_foreign"
		}).onDelete("set null"),
]);

export const cartProducts = pgTable("cart_products", {
	id: serial().primaryKey().notNull(),
	cartId: integer("cart_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.cartId],
			foreignColumns: [cart.id],
			name: "cart_products_cart_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "cart_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const brandsCategories = pgTable("brands_categories", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	brandsId: bigint("brands_id", { mode: "number" }),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.brandsId],
			foreignColumns: [brands.id],
			name: "brands_categories_brands_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "brands_categories_categories_id_foreign"
		}).onDelete("set null"),
]);

export const brandsDepartments = pgTable("brands_departments", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	brandsId: bigint("brands_id", { mode: "number" }),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.brandsId],
			foreignColumns: [brands.id],
			name: "brands_departments_brands_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "brands_departments_departments_id_foreign"
		}).onDelete("set null"),
]);

export const brandsManufacturer = pgTable("brands_manufacturer", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	brandsId: bigint("brands_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	manufacturerId: bigint("manufacturer_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.brandsId],
			foreignColumns: [brands.id],
			name: "brands_manufacturer_brands_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.manufacturerId],
			foreignColumns: [manufacturer.id],
			name: "brands_manufacturer_manufacturer_id_foreign"
		}).onDelete("set null"),
]);

export const brandsShorts = pgTable("brands_shorts", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	brandsId: bigint("brands_id", { mode: "number" }),
	shortsId: integer("shorts_id"),
}, (table) => [
	foreignKey({
			columns: [table.brandsId],
			foreignColumns: [brands.id],
			name: "brands_shorts_brands_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "brands_shorts_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const categoriesDepartments = pgTable("categories_departments", {
	id: serial().primaryKey().notNull(),
	categoriesId: integer("categories_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "categories_departments_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "categories_departments_departments_id_foreign"
		}).onDelete("set null"),
]);

export const categories = pgTable("categories", {
	id: serial().primaryKey().notNull(),
	name: text(),
	description: text(),
	content: text(),
	image: uuid(),
	menus: json(),
	uid: varchar({ length: 255 }),
	color: varchar({ length: 255 }),
	colortext: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
});

export const collectionsProducts = pgTable("collections_products", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	collectionsId: bigint("collections_id", { mode: "number" }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.collectionsId],
			foreignColumns: [collections.id],
			name: "collections_products_collections_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "collections_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const comments = pgTable("comments", {
	id: serial().primaryKey().notNull(),
	response: text(),
	media: uuid(),
	name: varchar({ length: 255 }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	helpful: boolean(),
	type: varchar({ length: 255 }),
	ratingsBreakdown: varchar("ratings_breakdown", { length: 255 }),
	averageRating: varchar("average_rating", { length: 255 }),
	nickname: varchar({ length: 255 }),
	summary: text(),
	reviewCount: integer("review_count"),
	contextType: varchar("context_type", { length: 255 }),
	messageType: varchar("message_type", { length: 255 }),
	isLive: boolean("is_live"),
	user: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "comments_user_foreign"
		}).onDelete("set null"),
]);

export const meilisearchSettings = pgTable("meilisearch_settings", {
	id: serial().primaryKey().notNull(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	host: varchar({ length: 255 }).default(sql`NULL`),
	apiKey: varchar("api_key", { length: 255 }).default(sql`NULL`),
	collectionsConfiguration: json("collections_configuration").default([]),
});

export const commentsReactions = pgTable("comments_reactions", {
	id: serial().primaryKey().notNull(),
	commentsId: integer("comments_id"),
	reactionsId: integer("reactions_id"),
}, (table) => [
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "comments_reactions_comments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.reactionsId],
			foreignColumns: [reactions.id],
			name: "comments_reactions_reactions_id_foreign"
		}).onDelete("set null"),
]);

export const collections = pgTable("collections", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	name: text(),
	description: text(),
	image: uuid(),
	type: json(),
});

export const connections = pgTable("connections", {
	id: serial().primaryKey().notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: varchar({ length: 255 }),
	connectionType: varchar("connection_type", { length: 255 }),
	userA: varchar("user_a", { length: 255 }),
	recipient: varchar({ length: 255 }),
});

export const directusExtensions = pgTable("directus_extensions", {
	enabled: boolean().default(true).notNull(),
	id: uuid().primaryKey().notNull(),
	folder: varchar({ length: 255 }).notNull(),
	source: varchar({ length: 255 }).notNull(),
	bundle: uuid(),
});

export const directusRevisions = pgTable("directus_revisions", {
	id: serial().primaryKey().notNull(),
	activity: integer().notNull(),
	collection: varchar({ length: 64 }).notNull(),
	item: varchar({ length: 255 }).notNull(),
	data: json(),
	delta: json(),
	parent: integer(),
	version: uuid(),
}, (table) => [
	index().using("btree", table.parent.asc().nullsLast().op("int4_ops")),
	foreignKey({
			columns: [table.activity],
			foreignColumns: [directusActivity.id],
			name: "directus_revisions_activity_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.parent],
			foreignColumns: [table.id],
			name: "directus_revisions_parent_foreign"
		}),
	foreignKey({
			columns: [table.version],
			foreignColumns: [directusVersions.id],
			name: "directus_revisions_version_foreign"
		}).onDelete("cascade"),
]);

export const directusPresets = pgTable("directus_presets", {
	id: serial().primaryKey().notNull(),
	bookmark: varchar({ length: 255 }),
	user: uuid(),
	role: uuid(),
	collection: varchar({ length: 64 }),
	search: varchar({ length: 100 }),
	layout: varchar({ length: 100 }).default('tabular'),
	layoutQuery: json("layout_query"),
	layoutOptions: json("layout_options"),
	refreshInterval: integer("refresh_interval"),
	filter: json(),
	icon: varchar({ length: 64 }).default('bookmark'),
	color: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.role],
			foreignColumns: [directusRoles.id],
			name: "directus_presets_role_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "directus_presets_user_foreign"
		}).onDelete("cascade"),
]);

export const directusSessions = pgTable("directus_sessions", {
	token: varchar({ length: 64 }).primaryKey().notNull(),
	user: uuid(),
	expires: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	ip: varchar({ length: 255 }),
	userAgent: text("user_agent"),
	share: uuid(),
	origin: varchar({ length: 255 }),
	nextToken: varchar("next_token", { length: 64 }),
}, (table) => [
	foreignKey({
			columns: [table.share],
			foreignColumns: [directusShares.id],
			name: "directus_sessions_share_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "directus_sessions_user_foreign"
		}).onDelete("cascade"),
]);

export const directusRoles = pgTable("directus_roles", {
	id: uuid().primaryKey().notNull(),
	name: varchar({ length: 100 }).notNull(),
	icon: varchar({ length: 64 }).default('supervised_user_circle').notNull(),
	description: text(),
	parent: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.parent],
			foreignColumns: [table.id],
			name: "directus_roles_parent_foreign"
		}),
]);

export const events = pgTable("events", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	eventCalendar: timestamp("event_calendar", { mode: 'string' }),
	image: uuid(),
	location: varchar({ length: 255 }),
	startTime: time("start_time"),
	endTime: time("end_time"),
	url: varchar({ length: 255 }),
	postalcode: varchar({ length: 255 }),
	type: varchar({ length: 255 }),
	qrCode: varchar("qr_code", { length: 255 }),
	checkIn: varchar("check_in", { length: 255 }),
	rsvpStatus: varchar("rsvp_status", { length: 255 }),
	rsvpPolicies: json("rsvp_policies"),
	date: timestamp({ mode: 'string' }),
	slug: varchar({ length: 255 }),
	ticketsUrl: varchar("tickets_url", { length: 255 }),
	address: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "events_image_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "events_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "events_user_updated_foreign"
		}),
]);

export const eventsCountries = pgTable("events_countries", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "events_countries_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_countries_events_id_foreign"
		}).onDelete("set null"),
]);

export const directusUsers = pgTable("directus_users", {
	id: uuid().primaryKey().notNull(),
	firstName: varchar("first_name", { length: 50 }),
	lastName: varchar("last_name", { length: 50 }),
	email: varchar({ length: 128 }),
	password: varchar({ length: 255 }),
	location: varchar({ length: 255 }),
	title: varchar({ length: 50 }),
	description: text(),
	tags: json(),
	avatar: uuid(),
	language: varchar({ length: 255 }).default(sql`NULL`),
	tfaSecret: varchar("tfa_secret", { length: 255 }),
	status: varchar({ length: 16 }).default('active').notNull(),
	role: uuid(),
	token: varchar({ length: 255 }),
	lastAccess: timestamp("last_access", { withTimezone: true, mode: 'string' }),
	lastPage: varchar("last_page", { length: 255 }),
	provider: varchar({ length: 128 }).default('default').notNull(),
	externalIdentifier: varchar("external_identifier", { length: 255 }),
	authData: json("auth_data"),
	emailNotifications: boolean("email_notifications").default(true),
	appearance: varchar({ length: 255 }),
	themeDark: varchar("theme_dark", { length: 255 }),
	themeLight: varchar("theme_light", { length: 255 }),
	themeLightOverrides: json("theme_light_overrides"),
	themeDarkOverrides: json("theme_dark_overrides"),
	newsletter: boolean().default(true),
	textDirection: varchar("text_direction", { length: 255 }).default('auto').notNull(),
}, (table) => [
	foreignKey({
			columns: [table.role],
			foreignColumns: [directusRoles.id],
			name: "directus_users_role_foreign"
		}).onDelete("set null"),
	unique("directus_users_email_unique").on(table.email),
	unique("directus_users_token_unique").on(table.token),
	unique("directus_users_external_identifier_unique").on(table.externalIdentifier),
]);

export const eventsFiles = pgTable("events_files", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusFilesId],
			foreignColumns: [directusFiles.id],
			name: "events_files_directus_files_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_files_events_id_foreign"
		}).onDelete("set null"),
]);

export const eventsProducts = pgTable("events_products", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_products_events_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "events_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const faqs = pgTable("faqs", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	userUpdated: uuid("user_updated"),
	question: varchar({ length: 255 }),
	answer: text(),
	creator: varchar({ length: 255 }),
});

export const gamificationDirectusUsers = pgTable("gamification_directus_users", {
	id: serial().primaryKey().notNull(),
	gamificationId: integer("gamification_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "gamification_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.gamificationId],
			foreignColumns: [gamification.id],
			name: "gamification_directus_users_gamification_id_foreign"
		}).onDelete("set null"),
]);

export const gamificationNotifications = pgTable("gamification_notifications", {
	id: serial().primaryKey().notNull(),
	gamificationId: integer("gamification_id"),
	notificationsId: integer("notifications_id"),
}, (table) => [
	foreignKey({
			columns: [table.gamificationId],
			foreignColumns: [gamification.id],
			name: "gamification_notifications_gamification_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.notificationsId],
			foreignColumns: [notifications.id],
			name: "gamification_notifications_notifications_id_foreign"
		}).onDelete("set null"),
]);

export const gamificationProducts = pgTable("gamification_products", {
	id: serial().primaryKey().notNull(),
	gamificationId: integer("gamification_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.gamificationId],
			foreignColumns: [gamification.id],
			name: "gamification_products_gamification_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "gamification_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const invoicesShippingAddress = pgTable("invoices_shipping_address", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	invoiceId: bigint("invoice_id", { mode: "number" }),
	shippingAddressId: integer("shipping_address_id"),
}, (table) => [
	foreignKey({
			columns: [table.invoiceId],
			foreignColumns: [invoices.id],
			name: "invoices_shipping_address_invoice_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shippingAddressId],
			foreignColumns: [shippingAddress.id],
			name: "invoices_shipping_address_shipping_address_id_foreign"
		}).onDelete("set null"),
]);

export const projectsRegion = pgTable("projects_region", {
	id: serial().primaryKey().notNull(),
	projectsId: integer("projects_id"),
	regionId: integer("region_id"),
}, (table) => [
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "projects_region_projects_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.regionId],
			foreignColumns: [region.id],
			name: "projects_region_region_id_foreign"
		}).onDelete("set null"),
]);

export const projectsFiles = pgTable("projects_files", {
	id: serial().primaryKey().notNull(),
	projectsId: integer("projects_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusFilesId],
			foreignColumns: [directusFiles.id],
			name: "projects_files_directus_files_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "projects_files_projects_id_foreign"
		}).onDelete("set null"),
]);

export const musicchart = pgTable("musicchart", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
	thisWeek: varchar("this_week", { length: 255 }),
	lastWeek: varchar("last_week", { length: 255 }),
	peakPosition: varchar("peak_position", { length: 255 }),
	weeksOnChart: varchar("weeks_on_chart", { length: 255 }),
	award: varchar({ length: 255 }),
	color: varchar({ length: 255 }),
	type: varchar({ length: 255 }),
	creator: varchar({ length: 255 }),
	previousPosition: varchar("previous_position", { length: 255 }),
	firstAppearance: varchar("first_appearance", { length: 255 }),
	currentSales: varchar("current_sales", { length: 255 }),
	previousSales: varchar("previous_sales", { length: 255 }),
	trend: varchar({ length: 255 }),
	seller: varchar({ length: 255 }),
});

export const regionCountries = pgTable("region_countries", {
	id: serial().primaryKey().notNull(),
	regionId: integer("region_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "region_countries_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.regionId],
			foreignColumns: [region.id],
			name: "region_countries_region_id_foreign"
		}).onDelete("set null"),
]);

export const projectTimeline = pgTable("project_timeline", {
	id: serial().primaryKey().notNull(),
	stage: json(),
});

export const addressCountries = pgTable("address_countries", {
	id: serial().primaryKey().notNull(),
	addressId: integer("address_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.addressId],
			foreignColumns: [address.id],
			name: "address_countries_address_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "address_countries_countries_id_foreign"
		}).onDelete("set null"),
]);

export const agreementsProducts = pgTable("agreements_products", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "agreements_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const articlesCategories = pgTable("articles_categories", {
	id: serial().primaryKey().notNull(),
	articlesId: integer("articles_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.articlesId],
			foreignColumns: [articles.id],
			name: "articles_categories_articles_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "articles_categories_categories_id_foreign"
		}).onDelete("set null"),
]);

export const articlesDepartments = pgTable("articles_departments", {
	id: serial().primaryKey().notNull(),
	articlesId: integer("articles_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.articlesId],
			foreignColumns: [articles.id],
			name: "articles_departments_articles_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "articles_departments_departments_id_foreign"
		}).onDelete("set null"),
]);

export const productTypesProducts = pgTable("product_types_products", {
	id: serial().primaryKey().notNull(),
	productTypesId: integer("product_types_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productTypesId],
			foreignColumns: [productTypes.id],
			name: "product_types_products_product_types_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "product_types_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const circlesDirectusUsers = pgTable("circles_directus_users", {
	id: serial().primaryKey().notNull(),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "circles_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
]);

export const connectionsDirectusUsers = pgTable("connections_directus_users", {
	id: serial().primaryKey().notNull(),
	connectionsId: integer("connections_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.connectionsId],
			foreignColumns: [connections.id],
			name: "connections_directus_users_connections_id_foreign"
		}).onDelete("set null"),
]);

export const navigationPages = pgTable("navigation_pages", {
	id: serial().primaryKey().notNull(),
	navigationId: integer("navigation_id"),
	pagesId: integer("pages_id"),
}, (table) => [
	foreignKey({
			columns: [table.navigationId],
			foreignColumns: [navigation.id],
			name: "navigation_pages_navigation_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.pagesId],
			foreignColumns: [pages.id],
			name: "navigation_pages_pages_id_foreign"
		}).onDelete("set null"),
]);

export const subscriptionsDirectusUsers = pgTable("subscriptions_directus_users", {
	id: serial().primaryKey().notNull(),
	subscriptionsId: integer("subscriptions_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.subscriptionsId],
			foreignColumns: [subscriptions.id],
			name: "subscriptions_directus_users_subscriptions_id_foreign"
		}).onDelete("set null"),
]);

export const cart = pgTable("cart", {
	id: serial().primaryKey().notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	sessionId: uuid("session_id"),
	totalPrice: real("total_price"),
	user: uuid(),
	status: varchar({ length: 255 }),
	subtotal: integer(),
	taxAmount: integer("tax_amount"),
	shippingAmount: integer("shipping_amount"),
	discountAmount: integer("discount_amount"),
	total: integer(),
	currency: varchar({ length: 255 }),
	couponCode: varchar("coupon_code", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "cart_user_foreign"
		}).onDelete("set null"),
]);

export const attributes = pgTable("attributes", {
	id: serial().primaryKey().notNull(),
	defaultLabel: text("default_label"),
	isPublic: boolean(),
	options: json(),
	attributeCode: varchar("attribute_code", { length: 255 }),
});

export const attributesProducts = pgTable("attributes_products", {
	id: serial().primaryKey().notNull(),
	attributesId: integer("attributes_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.attributesId],
			foreignColumns: [attributes.id],
			name: "attributes_products_attributes_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "attributes_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const pageBlocks = pgTable("page_blocks", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	content: json(),
	menus: json(),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "page_blocks_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "page_blocks_user_updated_foreign"
		}),
]);

export const notifications = pgTable("notifications", {
	id: serial().primaryKey().notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	content: text(),
	isRead: boolean("is_read"),
	image: uuid(),
	payload: json(),
	type: varchar({ length: 255 }),
	recipient: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.recipient],
			foreignColumns: [directusUsers.id],
			name: "notifications_recipient_foreign"
		}).onDelete("set null"),
]);

export const orderItemsOrders = pgTable("order_items_orders", {
	id: serial().primaryKey().notNull(),
	orderItemsId: integer("order_items_id"),
	ordersId: integer("orders_id"),
}, (table) => [
	foreignKey({
			columns: [table.orderItemsId],
			foreignColumns: [orderItems.id],
			name: "order_items_orders_order_items_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.ordersId],
			foreignColumns: [orders.id],
			name: "order_items_orders_orders_id_foreign"
		}).onDelete("set null"),
]);

export const paymentsOrders = pgTable("payments_orders", {
	id: serial().primaryKey().notNull(),
	paymentsId: integer("payments_id"),
	ordersId: integer("orders_id"),
}, (table) => [
	foreignKey({
			columns: [table.ordersId],
			foreignColumns: [orders.id],
			name: "payments_orders_orders_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.paymentsId],
			foreignColumns: [payments.id],
			name: "payments_orders_payments_id_foreign"
		}).onDelete("set null"),
]);

export const redirects = pgTable("redirects", {
	id: serial().primaryKey().notNull(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	responseCode: integer("response_code"),
	urlNew: varchar("url_new", { length: 255 }),
	urlOld: varchar("url_old", { length: 255 }),
	noticeRedirects: varchar("notice_redirects", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "redirects_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "redirects_user_updated_foreign"
		}),
]);

export const postgresstoresProducts = pgTable("postgresstores_products", {
	id: serial().primaryKey().notNull(),
	postgresstoresId: integer("postgresstores_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.postgresstoresId],
			foreignColumns: [postgresstores.id],
			name: "postgresstores_products_postgresstores_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "postgresstores_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const productsAttributes = pgTable("products_attributes", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	attributesId: integer("attributes_id"),
}, (table) => [
	foreignKey({
			columns: [table.attributesId],
			foreignColumns: [attributes.id],
			name: "products_attributes_attributes_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_attributes_products_id_foreign"
		}).onDelete("set null"),
]);

export const profilesFollowers = pgTable("profiles_followers", {
	id: serial().primaryKey().notNull(),
	profilesId: uuid("profiles_id"),
	followersId: integer("followers_id"),
}, (table) => [
	foreignKey({
			columns: [table.followersId],
			foreignColumns: [followers.id],
			name: "profiles_followers_followers_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.profilesId],
			foreignColumns: [profiles.id],
			name: "profiles_followers_profiles_id_foreign"
		}).onDelete("set null"),
]);

export const productsSpaces = pgTable("products_spaces", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_spaces_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "products_spaces_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const productsTags = pgTable("products_tags", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
	tagsId: integer("tags_id"),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "products_tags_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "products_tags_tags_id_foreign"
		}).onDelete("set null"),
]);

export const radiosCategories = pgTable("radios_categories", {
	id: serial().primaryKey().notNull(),
	radiosId: integer("radios_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "radios_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.radiosId],
			foreignColumns: [radios.id],
			name: "radios_categories_radios_id_foreign"
		}).onDelete("set null"),
]);

export const ratings = pgTable("ratings", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "ratings_image_foreign"
		}).onDelete("set null"),
]);

export const relatedProducts = pgTable("related_products", {
	id: serial().primaryKey().notNull(),
	sort: integer(),
	user: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "related_products_user_foreign"
		}).onDelete("set null"),
]);

export const reactions = pgTable("reactions", {
	id: serial().primaryKey().notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	contentId: varchar("content_id", { length: 255 }),
	contentType: varchar("content_type", { length: 255 }),
	posts: integer(),
	userId: uuid("user_id"),
	listId: integer("list_id"),
	spaceId: integer("space_id"),
	videoId: integer("video_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	product: bigint({ mode: "number" }),
	user: uuid(),
	counter: integer(),
	image: uuid(),
	name: varchar({ length: 255 }),
	icon: varchar({ length: 255 }),
	targetType: varchar("target_type", { length: 255 }),
	interactionType: varchar("interaction_type", { length: 255 }),
	reactionType: varchar("reaction_type", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "reactions_image_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listId],
			foreignColumns: [lists.id],
			name: "reactions_list_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.posts],
			foreignColumns: [posts.id],
			name: "reactions_posts_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.product],
			foreignColumns: [products.id],
			name: "reactions_product_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spaceId],
			foreignColumns: [spaces.id],
			name: "reactions_space_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "reactions_user_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [directusUsers.id],
			name: "reactions_user_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videoId],
			foreignColumns: [videos.id],
			name: "reactions_video_id_foreign"
		}).onDelete("set null"),
]);

export const creditMemos = pgTable("credit_memos", {
	id: serial().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	adjustment: integer(),
	adjustmentNegative: integer("adjustment_negative"),
	adjustmentPositive: integer("adjustment_positive"),
	baseAdjustment: integer("base_adjustment"),
	baseAdjustmentNegative: integer("base_adjustment_negative"),
	baseAdjustmentPositive: integer("base_adjustment_positive"),
	baseCurrencyCode: text("base_currency_code"),
	baseDiscountAmount: integer("base_discount_amount"),
	baseGrandTotal: integer("base_grand_total"),
	baseDiscountTaxCompensationAmount: integer("base_discount_tax_compensation_amount"),
	baseShippingAmount: integer("base_shipping_amount"),
	baseShippingDiscountTaxCompensationAmnt: integer("base_shipping_discount_tax_compensation_amnt"),
	baseShippingInclTax: integer("base_shipping_incl_tax"),
	baseShippingTaxAmount: integer("base_shipping_tax_amount"),
	baseSubtotal: integer("base_subtotal"),
	baseSubtotalInclTax: integer("base_subtotal_incl_tax"),
	baseTaxAmount: integer("base_tax_amount"),
	baseToGlobalRate: integer("base_to_global_rate"),
	baseToOrderRate: integer("base_to_order_rate"),
	creditmemoStatus: integer("creditmemo_status"),
	discountAmount: integer("discount_amount"),
	discountDescription: text("discount_description"),
	emailSent: integer("email_sent"),
	entityId: integer("entity_id"),
	globalCurrencyCode: text("global_currency_code"),
	grandTotal: integer("grand_total"),
	discountTaxCompensationAmount: integer("discount_tax_compensation_amount"),
	incrementId: text("increment_id"),
	invoiceId: integer("invoice_id"),
	orderCurrencyCode: text("order_currency_code"),
	shippingAmount: integer("shipping_amount"),
	shippingDiscountTaxCompensationAmount: integer("shipping_discount_tax_compensation_amount"),
	shippingInclTax: integer("shipping_incl_tax"),
	shippingTaxAmount: integer("shipping_tax_amount"),
	state: integer(),
	storeCurrencyCode: text("store_currency_code"),
	storeId: integer("store_id"),
	storeToBaseRate: integer("store_to_base_rate"),
	storeToOrderRate: integer("store_to_order_rate"),
	subtotal: integer(),
	subtotalInclTax: integer("subtotal_incl_tax"),
	taxAmount: integer("tax_amount"),
	user: uuid(),
});

export const directusFlows = pgTable("directus_flows", {
	id: uuid().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	icon: varchar({ length: 64 }),
	color: varchar({ length: 255 }),
	description: text(),
	status: varchar({ length: 255 }).default('active').notNull(),
	trigger: varchar({ length: 255 }),
	accountability: varchar({ length: 255 }).default('all'),
	options: json(),
	operation: uuid(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	userCreated: uuid("user_created"),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "directus_flows_user_created_foreign"
		}).onDelete("set null"),
	unique("directus_flows_operation_unique").on(table.operation),
]);

export const crossSellProductsProducts = pgTable("cross_sell_products_products", {
	id: serial().primaryKey().notNull(),
	crossSellProductsId: integer("cross_sell_products_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.crossSellProductsId],
			foreignColumns: [crossSellProducts.id],
			name: "cross_sell_products_products_cross_sell_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "cross_sell_products_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const directusNotifications = pgTable("directus_notifications", {
	id: serial().primaryKey().notNull(),
	timestamp: timestamp({ withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	status: varchar({ length: 255 }).default('inbox'),
	recipient: uuid().notNull(),
	sender: uuid(),
	subject: varchar({ length: 255 }).notNull(),
	message: text(),
	collection: varchar({ length: 64 }),
	item: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.recipient],
			foreignColumns: [directusUsers.id],
			name: "directus_notifications_recipient_foreign"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.sender],
			foreignColumns: [directusUsers.id],
			name: "directus_notifications_sender_foreign"
		}),
]);

export const directusDashboards = pgTable("directus_dashboards", {
	id: uuid().primaryKey().notNull(),
	name: varchar({ length: 255 }).notNull(),
	icon: varchar({ length: 64 }).default('dashboard').notNull(),
	note: text(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	userCreated: uuid("user_created"),
	color: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "directus_dashboards_user_created_foreign"
		}).onDelete("set null"),
]);

export const regionAddress = pgTable("region_address", {
	id: serial().primaryKey().notNull(),
	regionId: integer("region_id"),
	addressId: integer("address_id"),
}, (table) => [
	foreignKey({
			columns: [table.addressId],
			foreignColumns: [address.id],
			name: "region_address_address_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.regionId],
			foreignColumns: [region.id],
			name: "region_address_region_id_foreign"
		}).onDelete("set null"),
]);

export const products = pgTable("products", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	sku: bigint({ mode: "number" }),
	name: text(),
	taxClass: text("tax_class"),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	content: text(),
	partNumber: text("part_number"),
	file: uuid(),
	image: uuid(),
	visibility: boolean(),
	stock: integer(),
	rating: integer(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	salableQuantity: bigint("salable_quantity", { mode: "number" }),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	status: varchar({ length: 255 }),
	price: numeric({ precision: 10, scale:  5 }),
	ratings: varchar({ length: 255 }).default('0'),
});

export const report = pgTable("report", {
	id: serial().primaryKey().notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	title: varchar({ length: 255 }),
	content: text(),
});

export const shipmentAddress = pgTable("shipment_address", {
	id: serial().primaryKey().notNull(),
	shipmentId: integer("shipment_id"),
	addressId: integer("address_id"),
}, (table) => [
	foreignKey({
			columns: [table.addressId],
			foreignColumns: [address.id],
			name: "shipment_address_address_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shipmentId],
			foreignColumns: [shipment.id],
			name: "shipment_address_shipment_id_foreign"
		}).onDelete("set null"),
]);

export const returns = pgTable("returns", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	returnNumber: uuid("return_number"),
	reason: text(),
});

export const returnsProducts = pgTable("returns_products", {
	id: serial().primaryKey().notNull(),
	returnsId: integer("returns_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "returns_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.returnsId],
			foreignColumns: [returns.id],
			name: "returns_products_returns_id_foreign"
		}).onDelete("set null"),
]);

export const seasons = pgTable("seasons", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	description: text(),
	releaseDate: timestamp("release_date", { mode: 'string' }),
	number: integer(),
	name: integer(),
}, (table) => [
	foreignKey({
			columns: [table.name],
			foreignColumns: [videos.id],
			name: "seasons_name_foreign"
		}).onDelete("set null"),
]);

export const shippingAddresses = pgTable("shipping_addresses", {
	id: serial().primaryKey().notNull(),
	street: varchar({ length: 255 }),
	zipcode: varchar({ length: 255 }),
	phone: varchar({ length: 255 }),
});

export const eventsDirectusUsers = pgTable("events_directus_users", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "events_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_directus_users_events_id_foreign"
		}).onDelete("set null"),
]);

export const shippingAddressesCities = pgTable("shipping_addresses_cities", {
	id: serial().primaryKey().notNull(),
	shippingAddressesId: integer("shipping_addresses_id"),
	citiesId: integer("cities_id"),
}, (table) => [
	foreignKey({
			columns: [table.citiesId],
			foreignColumns: [cities.id],
			name: "shipping_addresses_cities_cities_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shippingAddressesId],
			foreignColumns: [shippingAddresses.id],
			name: "shipping_addresses_cities_shipping_addresses_id_foreign"
		}).onDelete("set null"),
]);

export const shippingAddressesCountries = pgTable("shipping_addresses_countries", {
	id: serial().primaryKey().notNull(),
	shippingAddressesId: integer("shipping_addresses_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "shipping_addresses_countries_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shippingAddressesId],
			foreignColumns: [shippingAddresses.id],
			name: "shipping_addresses_countries_shipping_addresses_id_foreign"
		}).onDelete("set null"),
]);

export const shopsAgreements = pgTable("shops_agreements", {
	id: serial().primaryKey().notNull(),
	shopsId: integer("shops_id"),
}, (table) => [
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shops_agreements_shops_id_foreign"
		}).onDelete("set null"),
]);

export const shopsShowcases = pgTable("shops_showcases", {
	id: serial().primaryKey().notNull(),
	shopsId: integer("shops_id"),
	showcasesId: integer("showcases_id"),
}, (table) => [
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shops_showcases_shops_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.showcasesId],
			foreignColumns: [showcases.id],
			name: "shops_showcases_showcases_id_foreign"
		}).onDelete("set null"),
]);

export const shortsFiles = pgTable("shorts_files", {
	id: serial().primaryKey().notNull(),
	shortsId: integer("shorts_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusFilesId],
			foreignColumns: [directusFiles.id],
			name: "shorts_files_directus_files_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "shorts_files_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const federatedSpaces = pgTable("federated_spaces", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	activitypubUrl: varchar("activitypub_url", { length: 255 }),
	syndicationType: varchar("syndication_type", { length: 255 }),
	lastSynced: timestamp("last_synced", { withTimezone: true, mode: 'string' }),
});

export const sitePreferenceCategories = pgTable("site_preference_categories", {
	id: serial().primaryKey().notNull(),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "site_preference_categories_categories_id_foreign"
		}).onDelete("set null"),
]);

export const sitePreferenceProducts = pgTable("site_preference_products", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "site_preference_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const transactions = pgTable("transactions", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	status: varchar({ length: 255 }).default('open'),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	order: integer(),
	paymentMethod: varchar("payment_method", { length: 255 }),
	transactionsParentId: varchar("transactions_parent_id", { length: 255 }),
	type: varchar({ length: 255 }),
	amount: numeric({ precision: 10, scale:  5 }),
}, (table) => [
	foreignKey({
			columns: [table.order],
			foreignColumns: [orders.id],
			name: "transactions_order_foreign"
		}).onDelete("set null"),
]);

export const listProductsLists = pgTable("list_products_lists", {
	id: serial().primaryKey().notNull(),
	listProductsId: integer("list_products_id"),
	listsId: integer("lists_id"),
}, (table) => [
	foreignKey({
			columns: [table.listProductsId],
			foreignColumns: [listProducts.id],
			name: "list_products_lists_list_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "list_products_lists_lists_id_foreign"
		}).onDelete("set null"),
]);

export const paymentsCountries = pgTable("payments_countries", {
	id: serial().primaryKey().notNull(),
	paymentId: integer("payment_id"),
	countryId: integer("country_id"),
}, (table) => [
	foreignKey({
			columns: [table.countryId],
			foreignColumns: [countries.id],
			name: "payments_countries_country_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.paymentId],
			foreignColumns: [payments.id],
			name: "payments_countries_payment_id_foreign"
		}).onDelete("set null"),
]);

export const musicchartDepartments = pgTable("musicchart_departments", {
	id: serial().primaryKey().notNull(),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "musicchart_departments_departments_id_foreign"
		}).onDelete("set null"),
]);

export const listsProducts = pgTable("lists_products", {
	id: serial().primaryKey().notNull(),
	listsId: integer("lists_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "lists_products_lists_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "lists_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const meeovistores = pgTable("meeovistores", {
	id: serial().primaryKey().notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	content: text(),
	color: varchar({ length: 255 }),
	colortext: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
});

export const navigation = pgTable("navigation", {
	id: serial().primaryKey().notNull(),
	type: varchar({ length: 255 }),
	name: varchar({ length: 255 }),
	url: varchar({ length: 255 }),
	image: uuid(),
	submenus: json(),
	menus: json(),
	description: text(),
	color: varchar({ length: 255 }),
	colortext: varchar({ length: 255 }),
	customTabs: json("custom_tabs"),
});

export const subscriptions = pgTable("subscriptions", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	subscriptionNumber: uuid("subscription_number"),
	startDate: date("start_date"),
	endDate: date("end_date"),
});

export const showcases = pgTable("showcases", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('published'),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	color: varchar({ length: 255 }),
	colortext: varchar({ length: 255 }),
	image: uuid(),
	thumbnail: uuid(),
	rating: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
	owner: uuid(),
	type: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.owner],
			foreignColumns: [directusUsers.id],
			name: "showcases_owner_foreign"
		}).onDelete("set null"),
]);

export const spacesDepartments = pgTable("spaces_departments", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "spaces_departments_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_departments_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const subscriptionsProducts = pgTable("subscriptions_products", {
	id: serial().primaryKey().notNull(),
	subscriptionsId: integer("subscriptions_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "subscriptions_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.subscriptionsId],
			foreignColumns: [subscriptions.id],
			name: "subscriptions_products_subscriptions_id_foreign"
		}).onDelete("set null"),
]);

export const statesCities = pgTable("states_cities", {
	id: serial().primaryKey().notNull(),
	statesId: integer("states_id"),
	citiesId: integer("cities_id"),
}, (table) => [
	foreignKey({
			columns: [table.citiesId],
			foreignColumns: [cities.id],
			name: "states_cities_cities_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.statesId],
			foreignColumns: [states.id],
			name: "states_cities_states_id_foreign"
		}).onDelete("set null"),
]);

export const postgresstores = pgTable("postgresstores", {
	id: serial().primaryKey().notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	content: text(),
	image: uuid(),
	color: varchar({ length: 255 }),
	colortext: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
});

export const streamsRatings = pgTable("streams_ratings", {
	id: serial().primaryKey().notNull(),
	streamsId: integer("streams_id"),
	ratingsId: integer("ratings_id"),
}, (table) => [
	foreignKey({
			columns: [table.ratingsId],
			foreignColumns: [ratings.id],
			name: "streams_ratings_ratings_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.streamsId],
			foreignColumns: [streams.id],
			name: "streams_ratings_streams_id_foreign"
		}).onDelete("set null"),
]);

export const tagsArticles = pgTable("tags_articles", {
	id: serial().primaryKey().notNull(),
	tagsId: integer("tags_id"),
	articlesId: integer("articles_id"),
}, (table) => [
	foreignKey({
			columns: [table.articlesId],
			foreignColumns: [articles.id],
			name: "tags_articles_articles_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "tags_articles_tags_id_foreign"
		}).onDelete("set null"),
]);

export const tagsProducts = pgTable("tags_products", {
	id: serial().primaryKey().notNull(),
	tagsId: integer("tags_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "tags_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "tags_products_tags_id_foreign"
		}).onDelete("set null"),
]);

export const taxes = pgTable("taxes", {
	id: serial().primaryKey().notNull(),
	rate: numeric({ precision: 10, scale:  5 }),
	taxClass: varchar("tax_class", { length: 255 }),
	certifications: json(),
	ageGating: varchar("age_gating", { length: 255 }),
});

export const translations = pgTable("translations", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	url: varchar({ length: 255 }),
	image: uuid(),
	code: varchar({ length: 255 }),
});

export const calendarLists = pgTable("calendar_lists", {
	id: serial().primaryKey().notNull(),
	calendarId: integer("calendar_id"),
	listsId: integer("lists_id"),
}, (table) => [
	foreignKey({
			columns: [table.calendarId],
			foreignColumns: [calendar.id],
			name: "calendar_lists_calendar_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "calendar_lists_lists_id_foreign"
		}).onDelete("set null"),
]);

export const listsFiles = pgTable("lists_files", {
	id: serial().primaryKey().notNull(),
	listsId: integer("lists_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusFilesId],
			foreignColumns: [directusFiles.id],
			name: "lists_files_directus_files_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "lists_files_lists_id_foreign"
		}).onDelete("set null"),
]);

export const projectsLists = pgTable("projects_lists", {
	id: serial().primaryKey().notNull(),
	projectsId: integer("projects_id"),
	listsId: integer("lists_id"),
}, (table) => [
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "projects_lists_lists_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "projects_lists_projects_id_foreign"
		}).onDelete("set null"),
]);

export const videosComments = pgTable("videos_comments", {
	id: serial().primaryKey().notNull(),
	videosId: integer("videos_id"),
	commentsId: integer("comments_id"),
}, (table) => [
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "videos_comments_comments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videosId],
			foreignColumns: [videos.id],
			name: "videos_comments_videos_id_foreign"
		}).onDelete("set null"),
]);

export const departmentsShowcases = pgTable("departments_showcases", {
	id: serial().primaryKey().notNull(),
	departmentsId: integer("departments_id"),
	showcasesId: integer("showcases_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "departments_showcases_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.showcasesId],
			foreignColumns: [showcases.id],
			name: "departments_showcases_showcases_id_foreign"
		}).onDelete("set null"),
]);

export const chat = pgTable("chat", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	image: uuid(),
	message: text(),
}, (table) => [
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "chat_image_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "chat_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "chat_user_updated_foreign"
		}),
]);

export const aboutDepartmentsPlatform = pgTable("about_departments_platform", {
	id: serial().primaryKey().notNull(),
	platformId: integer("platform_id"),
}, (table) => [
	foreignKey({
			columns: [table.platformId],
			foreignColumns: [platform.id],
			name: "about_departments_platform_platform_id_foreign"
		}).onDelete("set null"),
]);

export const profilesCountries = pgTable("profiles_countries", {
	id: serial().primaryKey().notNull(),
	profilesId: uuid("profiles_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "profiles_countries_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.profilesId],
			foreignColumns: [profiles.id],
			name: "profiles_countries_profiles_id_foreign"
		}).onDelete("set null"),
]);

export const profilesStates = pgTable("profiles_states", {
	id: serial().primaryKey().notNull(),
	profilesId: uuid("profiles_id"),
	statesId: integer("states_id"),
}, (table) => [
	foreignKey({
			columns: [table.profilesId],
			foreignColumns: [profiles.id],
			name: "profiles_states_profiles_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.statesId],
			foreignColumns: [states.id],
			name: "profiles_states_states_id_foreign"
		}).onDelete("set null"),
]);

export const projectBoard = pgTable("project_board", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	cards: json(),
	progress: integer(),
	customFields: json("custom_fields"),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "project_board_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "project_board_user_updated_foreign"
		}),
]);

export const collectionsSpaces = pgTable("collections_spaces", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	collectionsId: bigint("collections_id", { mode: "number" }),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.collectionsId],
			foreignColumns: [collections.id],
			name: "collections_spaces_collections_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "collections_spaces_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const listsTemplate = pgTable("lists_template", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	title: varchar({ length: 255 }),
	visibility: varchar({ length: 255 }),
	icon: varchar({ length: 255 }),
	theme: varchar({ length: 255 }),
	description: text(),
	type: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "lists_template_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "lists_template_user_updated_foreign"
		}),
]);

export const templates = pgTable("templates", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	title: varchar({ length: 255 }),
	description: text(),
	defaultTabs: varchar("default_tabs", { length: 255 }),
	defaultTypes: varchar("default_types", { length: 255 }),
	defaultRoles: varchar("default_roles", { length: 255 }),
	defaultContent: varchar("default_content", { length: 255 }),
	theme: json(),
	templateType: varchar("template_type", { length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "templates_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "templates_user_updated_foreign"
		}),
]);

export const projectBoardComments = pgTable("project_board_comments", {
	id: serial().primaryKey().notNull(),
	projectBoardId: integer("project_board_id"),
	commentsId: integer("comments_id"),
}, (table) => [
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "project_board_comments_comments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectBoardId],
			foreignColumns: [projectBoard.id],
			name: "project_board_comments_project_board_id_foreign"
		}).onDelete("set null"),
]);

export const chartEntries = pgTable("chart_entries", {
	id: serial().primaryKey().notNull(),
	chartId: integer("chart_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productId: bigint("product_id", { mode: "number" }),
	position: integer(),
	lastPosition: integer("last_position"),
	streams: integer(),
	sales: integer(),
	score: real(),
	thisWeek: varchar("this_week", { length: 255 }),
	lastWeek: varchar("last_week", { length: 255 }),
	peakPosition: varchar("peak_position", { length: 255 }),
	weeksOnChart: varchar("weeks_on_chart", { length: 255 }),
	award: varchar({ length: 255 }),
	color: varchar({ length: 255 }),
	trend: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.chartId],
			foreignColumns: [charts.id],
			name: "chart_entries_chart_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "chart_entries_product_id_foreign"
		}).onDelete("set null"),
]);

export const merchRecipes = pgTable("merch_recipes", {
	id: serial().primaryKey().notNull(),
	departmentId: integer("department_id"),
	inputsJson: jsonb("inputs_json"),
	constraintsJson: jsonb("constraints_json"),
	outputSlots: jsonb("output_slots"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const mediaFoldersDirectusUsers = pgTable("media_folders_directus_users", {
	id: serial().primaryKey().notNull(),
	mediaFoldersId: integer("media_folders_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "media_folders_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.mediaFoldersId],
			foreignColumns: [mediaFolders.id],
			name: "media_folders_directus_users_media_folders_id_foreign"
		}).onDelete("set null"),
]);

export const shortsProducts = pgTable("shorts_products", {
	id: serial().primaryKey().notNull(),
	shortsId: integer("shorts_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "shorts_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "shorts_products_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const integrationsPlatform = pgTable("integrations_platform", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	platformId: integer("platform_id"),
}, (table) => [
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_platform_integrations_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.platformId],
			foreignColumns: [platform.id],
			name: "integrations_platform_platform_id_foreign"
		}).onDelete("set null"),
]);

export const geoRegionsCities = pgTable("geo_regions_cities", {
	id: serial().primaryKey().notNull(),
	geoRegionsId: integer("geo_regions_id"),
	citiesId: integer("cities_id"),
}, (table) => [
	foreignKey({
			columns: [table.citiesId],
			foreignColumns: [cities.id],
			name: "geo_regions_cities_cities_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.geoRegionsId],
			foreignColumns: [geoRegions.id],
			name: "geo_regions_cities_geo_regions_id_foreign"
		}).onDelete("set null"),
]);

export const geoRegionsStates = pgTable("geo_regions_states", {
	id: serial().primaryKey().notNull(),
	geoRegionsId: integer("geo_regions_id"),
	statesId: integer("states_id"),
}, (table) => [
	foreignKey({
			columns: [table.geoRegionsId],
			foreignColumns: [geoRegions.id],
			name: "geo_regions_states_geo_regions_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.statesId],
			foreignColumns: [states.id],
			name: "geo_regions_states_states_id_foreign"
		}).onDelete("set null"),
]);

export const userFriends = pgTable("user_friends", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	user: uuid(),
	friend: uuid(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	relation: json(),
}, (table) => [
	foreignKey({
			columns: [table.friend],
			foreignColumns: [directusUsers.id],
			name: "user_friends_friend_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "user_friends_user_foreign"
		}).onDelete("set null"),
]);

export const websites = pgTable("websites", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	name: text(),
	url: text(),
	image: uuid(),
	type: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
	icon: varchar({ length: 255 }),
	status: varchar({ length: 255 }),
	note: text(),
	username: varchar({ length: 255 }),
	description: text(),
	creator: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.creator],
			foreignColumns: [directusUsers.id],
			name: "websites_creator_foreign"
		}).onDelete("set null"),
]);

export const projectsComments = pgTable("projects_comments", {
	id: serial().primaryKey().notNull(),
	projectsId: integer("projects_id"),
	commentsId: integer("comments_id"),
}, (table) => [
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "projects_comments_comments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "projects_comments_projects_id_foreign"
		}).onDelete("set null"),
]);

export const listsTemplates = pgTable("lists_templates", {
	id: serial().primaryKey().notNull(),
	listsId: integer("lists_id"),
	templatesId: integer("templates_id"),
}, (table) => [
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "lists_templates_lists_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.templatesId],
			foreignColumns: [templates.id],
			name: "lists_templates_templates_id_foreign"
		}).onDelete("set null"),
]);

export const videosTags = pgTable("videos_tags", {
	id: serial().primaryKey().notNull(),
	videosId: integer("videos_id"),
	tagsId: integer("tags_id"),
}, (table) => [
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "videos_tags_tags_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videosId],
			foreignColumns: [videos.id],
			name: "videos_tags_videos_id_foreign"
		}).onDelete("set null"),
]);

export const geoRegionsCountries = pgTable("geo_regions_countries", {
	id: serial().primaryKey().notNull(),
	geoRegionsId: integer("geo_regions_id"),
	countriesId: integer("countries_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "geo_regions_countries_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.geoRegionsId],
			foreignColumns: [geoRegions.id],
			name: "geo_regions_countries_geo_regions_id_foreign"
		}).onDelete("set null"),
]);

export const videos = pgTable("videos", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	type: varchar({ length: 255 }),
	description: text(),
	ratings: integer(),
	name: varchar({ length: 255 }),
	media: uuid(),
	thumbnail: uuid(),
	videoUrl: varchar("video_url", { length: 255 }),
	user: uuid(),
	minioKey: varchar("minio_key", { length: 255 }),
	duration: varchar({ length: 255 }),
	visibility: varchar({ length: 255 }),
	viewCount: integer("view_count"),
	distributor: integer(),
}, (table) => [
	foreignKey({
			columns: [table.distributor],
			foreignColumns: [attributes.id],
			name: "videos_distributor_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.media],
			foreignColumns: [directusFiles.id],
			name: "videos_media_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.ratings],
			foreignColumns: [ratings.id],
			name: "videos_ratings_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.thumbnail],
			foreignColumns: [directusFiles.id],
			name: "videos_thumbnail_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "videos_user_created_foreign"
		}),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "videos_user_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "videos_user_updated_foreign"
		}),
]);

export const countriesCurrency = pgTable("countries_currency", {
	id: serial().primaryKey().notNull(),
	countriesId: integer("countries_id"),
	currencyId: integer("currency_id"),
}, (table) => [
	foreignKey({
			columns: [table.countriesId],
			foreignColumns: [countries.id],
			name: "countries_currency_countries_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.currencyId],
			foreignColumns: [currency.id],
			name: "countries_currency_currency_id_foreign"
		}).onDelete("set null"),
]);

export const timezones = pgTable("timezones", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }),
	code: varchar({ length: 255 }),
	description: text(),
});

export const projectsCalendar = pgTable("projects_calendar", {
	id: serial().primaryKey().notNull(),
	projectsId: integer("projects_id"),
	calendarId: integer("calendar_id"),
}, (table) => [
	foreignKey({
			columns: [table.calendarId],
			foreignColumns: [calendar.id],
			name: "projects_calendar_calendar_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "projects_calendar_projects_id_foreign"
		}).onDelete("set null"),
]);

export const integrationsTags = pgTable("integrations_tags", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	tagsId: integer("tags_id"),
}, (table) => [
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_tags_integrations_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "integrations_tags_tags_id_foreign"
		}).onDelete("set null"),
]);

export const integrationsCategories = pgTable("integrations_categories", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "integrations_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_categories_integrations_id_foreign"
		}).onDelete("set null"),
]);

export const listsTemplateTags = pgTable("lists_template_tags", {
	id: serial().primaryKey().notNull(),
	listsTemplateId: integer("lists_template_id"),
	tagsId: integer("tags_id"),
}, (table) => [
	foreignKey({
			columns: [table.listsTemplateId],
			foreignColumns: [listsTemplate.id],
			name: "lists_template_tags_lists_template_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "lists_template_tags_tags_id_foreign"
		}).onDelete("set null"),
]);

export const aboutDepartmentsPages = pgTable("about_departments_pages", {
	id: serial().primaryKey().notNull(),
	pagesId: integer("pages_id"),
}, (table) => [
	foreignKey({
			columns: [table.pagesId],
			foreignColumns: [pages.id],
			name: "about_departments_pages_pages_id_foreign"
		}).onDelete("set null"),
]);

export const aboutDepartmentsArticles = pgTable("about_departments_articles", {
	id: serial().primaryKey().notNull(),
	articlesId: integer("articles_id"),
}, (table) => [
	foreignKey({
			columns: [table.articlesId],
			foreignColumns: [articles.id],
			name: "about_departments_articles_articles_id_foreign"
		}).onDelete("set null"),
]);

export const tagsPosts = pgTable("tags_posts", {
	id: serial().primaryKey().notNull(),
	tagsId: integer("tags_id"),
	postsId: integer("posts_id"),
}, (table) => [
	foreignKey({
			columns: [table.postsId],
			foreignColumns: [posts.id],
			name: "tags_posts_posts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.tagsId],
			foreignColumns: [tags.id],
			name: "tags_posts_tags_id_foreign"
		}).onDelete("set null"),
]);

export const integrationsAttributes = pgTable("integrations_attributes", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	attributesId: integer("attributes_id"),
}, (table) => [
	foreignKey({
			columns: [table.attributesId],
			foreignColumns: [attributes.id],
			name: "integrations_attributes_attributes_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_attributes_integrations_id_foreign"
		}).onDelete("set null"),
]);

export const profilesCities = pgTable("profiles_cities", {
	id: serial().primaryKey().notNull(),
	profilesId: uuid("profiles_id"),
	citiesId: integer("cities_id"),
}, (table) => [
	foreignKey({
			columns: [table.citiesId],
			foreignColumns: [cities.id],
			name: "profiles_cities_cities_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.profilesId],
			foreignColumns: [profiles.id],
			name: "profiles_cities_profiles_id_foreign"
		}).onDelete("set null"),
]);

export const integrationsProductTypes = pgTable("integrations_product_types", {
	id: serial().primaryKey().notNull(),
	integrationsId: integer("integrations_id"),
	productTypesId: integer("product_types_id"),
}, (table) => [
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "integrations_product_types_integrations_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productTypesId],
			foreignColumns: [productTypes.id],
			name: "integrations_product_types_product_types_id_foreign"
		}).onDelete("set null"),
]);

export const eventsPosts = pgTable("events_posts", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
	postsId: integer("posts_id"),
}, (table) => [
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "events_posts_events_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.postsId],
			foreignColumns: [posts.id],
			name: "events_posts_posts_id_foreign"
		}).onDelete("set null"),
]);

export const spacesLists = pgTable("spaces_lists", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	listsId: integer("lists_id"),
}, (table) => [
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "spaces_lists_lists_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_lists_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const pollsSpaces = pgTable("polls_spaces", {
	id: serial().primaryKey().notNull(),
	pollsId: integer("polls_id"),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.pollsId],
			foreignColumns: [polls.id],
			name: "polls_spaces_polls_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "polls_spaces_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const polls = pgTable("polls", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	slug: varchar({ length: 255 }),
	isPublic: boolean(),
	content: json(),
	image: uuid(),
	author: uuid(),
}, (table) => [
	foreignKey({
			columns: [table.author],
			foreignColumns: [directusUsers.id],
			name: "polls_author_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "polls_image_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "polls_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "polls_user_updated_foreign"
		}),
]);

export const memberGroupsSpaceMembers = pgTable("member_groups_space_members", {
	id: serial().primaryKey().notNull(),
});

export const spacesLiveRooms = pgTable("spaces_live_rooms", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_live_rooms_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const listItemsDirectusUsers = pgTable("list_items_directus_users", {
	id: serial().primaryKey().notNull(),
	listItemsId: integer("list_items_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "list_items_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listItemsId],
			foreignColumns: [listItems.id],
			name: "list_items_directus_users_list_items_id_foreign"
		}).onDelete("set null"),
]);

export const calendarIntegrations = pgTable("calendar_integrations", {
	id: serial().primaryKey().notNull(),
	calendarId: integer("calendar_id"),
	integrationsId: integer("integrations_id"),
}, (table) => [
	foreignKey({
			columns: [table.calendarId],
			foreignColumns: [calendar.id],
			name: "calendar_integrations_calendar_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "calendar_integrations_integrations_id_foreign"
		}).onDelete("set null"),
]);

export const projectsIntegrations = pgTable("projects_integrations", {
	id: serial().primaryKey().notNull(),
	projectsId: integer("projects_id"),
	integrationsId: integer("integrations_id"),
}, (table) => [
	foreignKey({
			columns: [table.integrationsId],
			foreignColumns: [integrations.id],
			name: "projects_integrations_integrations_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "projects_integrations_projects_id_foreign"
		}).onDelete("set null"),
]);

export const projectsProducts = pgTable("projects_products", {
	id: serial().primaryKey().notNull(),
	projectsId: integer("projects_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "projects_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.projectsId],
			foreignColumns: [projects.id],
			name: "projects_products_projects_id_foreign"
		}).onDelete("set null"),
]);

export const calendarComments = pgTable("calendar_comments", {
	id: serial().primaryKey().notNull(),
	calendarId: integer("calendar_id"),
	commentsId: integer("comments_id"),
}, (table) => [
	foreignKey({
			columns: [table.calendarId],
			foreignColumns: [calendar.id],
			name: "calendar_comments_calendar_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.commentsId],
			foreignColumns: [comments.id],
			name: "calendar_comments_comments_id_foreign"
		}).onDelete("set null"),
]);

export const calendar = pgTable("calendar", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }),
	day: integer(),
	month: json(),
	year: integer(),
	image: uuid(),
	status: boolean(),
	description: text(),
	favorite: boolean(),
	facebookId: varchar("facebook_id", { length: 255 }),
	googleId: varchar("google_id", { length: 255 }),
	appointment: json(),
}, (table) => [
	foreignKey({
			columns: [table.image],
			foreignColumns: [directusFiles.id],
			name: "calendar_image_foreign"
		}).onDelete("set null"),
]);

export const calendarEvents = pgTable("calendar_events", {
	id: serial().primaryKey().notNull(),
	calendarId: integer("calendar_id"),
	eventsId: integer("events_id"),
}, (table) => [
	foreignKey({
			columns: [table.calendarId],
			foreignColumns: [calendar.id],
			name: "calendar_events_calendar_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "calendar_events_events_id_foreign"
		}).onDelete("set null"),
]);

export const memberGroupsPosts = pgTable("member_groups_posts", {
	id: serial().primaryKey().notNull(),
	postsId: integer("posts_id"),
}, (table) => [
	foreignKey({
			columns: [table.postsId],
			foreignColumns: [posts.id],
			name: "member_groups_posts_posts_id_foreign"
		}).onDelete("set null"),
]);

export const memberGroupsPolls = pgTable("member_groups_polls", {
	id: serial().primaryKey().notNull(),
	pollsId: integer("polls_id"),
}, (table) => [
	foreignKey({
			columns: [table.pollsId],
			foreignColumns: [polls.id],
			name: "member_groups_polls_polls_id_foreign"
		}).onDelete("set null"),
]);

export const memberGroupsEvents = pgTable("member_groups_events", {
	id: serial().primaryKey().notNull(),
	eventsId: integer("events_id"),
}, (table) => [
	foreignKey({
			columns: [table.eventsId],
			foreignColumns: [events.id],
			name: "member_groups_events_events_id_foreign"
		}).onDelete("set null"),
]);

export const memberGroupsProducts = pgTable("member_groups_products", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "member_groups_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const integrations = pgTable("integrations", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	url: varchar({ length: 255 }),
	commands: varchar({ length: 255 }),
	description: text(),
	version: varchar({ length: 255 }),
	developer: varchar({ length: 255 }),
	isCost: varchar("is_cost", { length: 255 }),
	systemRequirements: json("system_requirements"),
	publisherInfo: text("publisher_info"),
	warnings: text(),
	disclaimers: text(),
	terms: text(),
	permissions: text(),
	type: varchar({ length: 255 }),
	ratings: varchar({ length: 255 }),
	price: real(),
	features: json(),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "integrations_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "integrations_user_updated_foreign"
		}),
]);

export const showcasesSpaces = pgTable("showcases_spaces", {
	id: serial().primaryKey().notNull(),
	showcasesId: integer("showcases_id"),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.showcasesId],
			foreignColumns: [showcases.id],
			name: "showcases_spaces_showcases_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "showcases_spaces_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const productTypes = pgTable("product_types", {
	id: serial().primaryKey().notNull(),
	name: varchar({ length: 255 }),
	isShippable: boolean(),
	options: json(),
});

export const attributesProductTypes = pgTable("attributes_product_types", {
	id: serial().primaryKey().notNull(),
	attributesId: integer("attributes_id"),
	productTypesId: integer("product_types_id"),
}, (table) => [
	foreignKey({
			columns: [table.attributesId],
			foreignColumns: [attributes.id],
			name: "attributes_product_types_attributes_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productTypesId],
			foreignColumns: [productTypes.id],
			name: "attributes_product_types_product_types_id_foreign"
		}).onDelete("set null"),
]);

export const productAttributes = pgTable("product_attributes", {
	id: serial().primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productId: bigint("product_id", { mode: "number" }),
	attributeId: integer("attribute_id"),
	value: json(),
}, (table) => [
	foreignKey({
			columns: [table.attributeId],
			foreignColumns: [attributes.id],
			name: "product_attributes_attribute_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "product_attributes_product_id_foreign"
		}).onDelete("set null"),
]);

export const listsTypeLists = pgTable("lists_type_lists", {
	id: serial().primaryKey().notNull(),
	listsTypeId: integer("lists_type_id"),
	listsId: integer("lists_id"),
}, (table) => [
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "lists_type_lists_lists_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsTypeId],
			foreignColumns: [listsType.id],
			name: "lists_type_lists_lists_type_id_foreign"
		}).onDelete("set null"),
]);

export const listsType = pgTable("lists_type", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	visibility: varchar({ length: 255 }),
	category: varchar({ length: 255 }),
}, (table) => [
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "lists_type_user_created_foreign"
		}),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "lists_type_user_updated_foreign"
		}),
]);

export const listsTypeCategories = pgTable("lists_type_categories", {
	id: serial().primaryKey().notNull(),
	listsTypeId: integer("lists_type_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "lists_type_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsTypeId],
			foreignColumns: [listsType.id],
			name: "lists_type_categories_lists_type_id_foreign"
		}).onDelete("set null"),
]);

export const chartsDepartments = pgTable("charts_departments", {
	id: serial().primaryKey().notNull(),
	chartsId: integer("charts_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.chartsId],
			foreignColumns: [charts.id],
			name: "charts_departments_charts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "charts_departments_departments_id_foreign"
		}).onDelete("set null"),
]);

export const chartsProducts = pgTable("charts_products", {
	id: serial().primaryKey().notNull(),
	chartsId: integer("charts_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.chartsId],
			foreignColumns: [charts.id],
			name: "charts_products_charts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "charts_products_products_id_foreign"
		}).onDelete("set null"),
]);

export const listsDepartments = pgTable("lists_departments", {
	id: serial().primaryKey().notNull(),
	listsId: integer("lists_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "lists_departments_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "lists_departments_lists_id_foreign"
		}).onDelete("set null"),
]);

export const chartsRadios = pgTable("charts_radios", {
	id: serial().primaryKey().notNull(),
	chartsId: integer("charts_id"),
	radiosId: integer("radios_id"),
}, (table) => [
	foreignKey({
			columns: [table.chartsId],
			foreignColumns: [charts.id],
			name: "charts_radios_charts_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.radiosId],
			foreignColumns: [radios.id],
			name: "charts_radios_radios_id_foreign"
		}).onDelete("set null"),
]);

export const charts = pgTable("charts", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
	type: varchar({ length: 255 }),
	icon: uuid(),
	date: date(),
}, (table) => [
	foreignKey({
			columns: [table.icon],
			foreignColumns: [directusFiles.id],
			name: "charts_icon_foreign"
		}).onDelete("set null"),
]);

export const listsCategories = pgTable("lists_categories", {
	id: serial().primaryKey().notNull(),
	listsId: integer("lists_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "lists_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "lists_categories_lists_id_foreign"
		}).onDelete("set null"),
]);

export const listsShorts = pgTable("lists_shorts", {
	id: serial().primaryKey().notNull(),
	listsId: integer("lists_id"),
	shortsId: integer("shorts_id"),
}, (table) => [
	foreignKey({
			columns: [table.listsId],
			foreignColumns: [lists.id],
			name: "lists_shorts_lists_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shortsId],
			foreignColumns: [shorts.id],
			name: "lists_shorts_shorts_id_foreign"
		}).onDelete("set null"),
]);

export const videosCategories = pgTable("videos_categories", {
	id: serial().primaryKey().notNull(),
	videosId: integer("videos_id"),
	categoriesId: integer("categories_id"),
}, (table) => [
	foreignKey({
			columns: [table.categoriesId],
			foreignColumns: [categories.id],
			name: "videos_categories_categories_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videosId],
			foreignColumns: [videos.id],
			name: "videos_categories_videos_id_foreign"
		}).onDelete("set null"),
]);

export const spacesDirectusUsers = pgTable("spaces_directus_users", {
	id: serial().primaryKey().notNull(),
	spacesId: integer("spaces_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "spaces_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "spaces_directus_users_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const videosDepartments = pgTable("videos_departments", {
	id: serial().primaryKey().notNull(),
	videosId: integer("videos_id"),
	departmentsId: integer("departments_id"),
}, (table) => [
	foreignKey({
			columns: [table.departmentsId],
			foreignColumns: [departments.id],
			name: "videos_departments_departments_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videosId],
			foreignColumns: [videos.id],
			name: "videos_departments_videos_id_foreign"
		}).onDelete("set null"),
]);

export const videosProductTypes = pgTable("videos_product_types", {
	id: serial().primaryKey().notNull(),
	videosId: integer("videos_id"),
	productTypesId: integer("product_types_id"),
}, (table) => [
	foreignKey({
			columns: [table.productTypesId],
			foreignColumns: [productTypes.id],
			name: "videos_product_types_product_types_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.videosId],
			foreignColumns: [videos.id],
			name: "videos_product_types_videos_id_foreign"
		}).onDelete("set null"),
]);

export const shopTypeShops = pgTable("shop_type_shops", {
	id: serial().primaryKey().notNull(),
	shopTypeId: integer("shop_type_id"),
	shopsId: integer("shops_id"),
}, (table) => [
	foreignKey({
			columns: [table.shopTypeId],
			foreignColumns: [shopType.id],
			name: "shop_type_shops_shop_type_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.shopsId],
			foreignColumns: [shops.id],
			name: "shop_type_shops_shops_id_foreign"
		}).onDelete("set null"),
]);

export const shopType = pgTable("shop_type", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
});

export const auctionLots = pgTable("auction_lots", {
	id: bigserial({ mode: "bigint" }).primaryKey().notNull(),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productId: bigint("product_id", { mode: "number" }),
	reservePrice: numeric("reserve_price"),
	startAt: timestamp("start_at", { withTimezone: true, mode: 'string' }),
	endAt: timestamp("end_at", { withTimezone: true, mode: 'string' }),
	antiSnipeSec: integer("anti_snipe_sec"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "auction_lots_product_id_fkey"
		}),
]);

export const variants = pgTable("variants", {
	id: serial().primaryKey().notNull(),
	productId: integer("product_id"),
	sku: text(),
	optionsJson: jsonb("options_json"),
	price: numeric(),
	cost: numeric(),
	barcode: text(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
}, (table) => [
	foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "variants_product_id_fkey"
		}).onDelete("cascade"),
]);

export const inventoryLots = pgTable("inventory_lots", {
	id: serial().primaryKey().notNull(),
	locationId: integer("location_id"),
	qty: integer(),
	batch: text(),
	expiresAt: timestamp("expires_at", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const vibezClips = pgTable("vibez_clips", {
	id: serial().primaryKey().notNull(),
	creatorId: integer("creator_id"),
	mediaUrl: text("media_url"),
	duration: integer(),
	captions: text(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const engagementSignals = pgTable("engagement_signals", {
	id: serial().primaryKey().notNull(),
	entityType: text("entity_type"),
	entityId: integer("entity_id"),
	signalType: text("signal_type"),
	weight: numeric(),
	ts: timestamp({ withTimezone: true, mode: 'string' }).defaultNow(),
});

export const showcasesProducts = pgTable("showcases_products", {
	id: serial().primaryKey().notNull(),
	showcasesId: integer("showcases_id"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	productsId: bigint("products_id", { mode: "number" }),
}, (table) => [
	foreignKey({
			columns: [table.productsId],
			foreignColumns: [products.id],
			name: "showcases_products_products_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.showcasesId],
			foreignColumns: [showcases.id],
			name: "showcases_products_showcases_id_foreign"
		}).onDelete("set null"),
]);

export const directusSettings = pgTable("directus_settings", {
	id: serial().primaryKey().notNull(),
	projectName: varchar("project_name", { length: 100 }).default('Directus').notNull(),
	projectUrl: varchar("project_url", { length: 255 }),
	projectColor: varchar("project_color", { length: 255 }).default('#6644FF').notNull(),
	projectLogo: uuid("project_logo"),
	publicForeground: uuid("public_foreground"),
	publicBackground: uuid("public_background"),
	publicNote: text("public_note"),
	authLoginAttempts: integer("auth_login_attempts").default(25),
	authPasswordPolicy: varchar("auth_password_policy", { length: 100 }),
	storageAssetTransform: varchar("storage_asset_transform", { length: 7 }).default('all'),
	storageAssetPresets: json("storage_asset_presets"),
	customCss: text("custom_css"),
	storageDefaultFolder: uuid("storage_default_folder"),
	basemaps: json(),
	mapboxKey: varchar("mapbox_key", { length: 255 }),
	moduleBar: json("module_bar"),
	projectDescriptor: varchar("project_descriptor", { length: 100 }),
	defaultLanguage: varchar("default_language", { length: 255 }).default('en-US').notNull(),
	customAspectRatios: json("custom_aspect_ratios"),
	publicFavicon: uuid("public_favicon"),
	defaultAppearance: varchar("default_appearance", { length: 255 }).default('auto').notNull(),
	defaultThemeLight: varchar("default_theme_light", { length: 255 }),
	themeLightOverrides: json("theme_light_overrides"),
	defaultThemeDark: varchar("default_theme_dark", { length: 255 }),
	themeDarkOverrides: json("theme_dark_overrides"),
	reportErrorUrl: varchar("report_error_url", { length: 255 }),
	reportBugUrl: varchar("report_bug_url", { length: 255 }),
	reportFeatureUrl: varchar("report_feature_url", { length: 255 }),
	publicRegistration: boolean("public_registration").default(false).notNull(),
	publicRegistrationVerifyEmail: boolean("public_registration_verify_email").default(true).notNull(),
	publicRegistrationRole: uuid("public_registration_role"),
	publicRegistrationEmailFilter: json("public_registration_email_filter"),
	visualEditorUrls: json("visual_editor_urls"),
	projectId: uuid("project_id"),
	mcpEnabled: boolean("mcp_enabled").default(false).notNull(),
	mcpAllowDeletes: boolean("mcp_allow_deletes").default(false).notNull(),
	mcpPromptsCollection: varchar("mcp_prompts_collection", { length: 255 }).default(sql`NULL`),
	mcpSystemPromptEnabled: boolean("mcp_system_prompt_enabled").default(true).notNull(),
	mcpSystemPrompt: text("mcp_system_prompt"),
	projectOwner: varchar("project_owner", { length: 255 }),
	projectUsage: varchar("project_usage", { length: 255 }),
	orgName: varchar("org_name", { length: 255 }),
	productUpdates: boolean("product_updates"),
	projectStatus: varchar("project_status", { length: 255 }),
	aiOpenaiApiKey: text("ai_openai_api_key"),
	aiAnthropicApiKey: text("ai_anthropic_api_key"),
	aiSystemPrompt: text("ai_system_prompt"),
}, (table) => [
	foreignKey({
			columns: [table.projectLogo],
			foreignColumns: [directusFiles.id],
			name: "directus_settings_project_logo_foreign"
		}),
	foreignKey({
			columns: [table.publicBackground],
			foreignColumns: [directusFiles.id],
			name: "directus_settings_public_background_foreign"
		}),
	foreignKey({
			columns: [table.publicFavicon],
			foreignColumns: [directusFiles.id],
			name: "directus_settings_public_favicon_foreign"
		}),
	foreignKey({
			columns: [table.publicForeground],
			foreignColumns: [directusFiles.id],
			name: "directus_settings_public_foreground_foreign"
		}),
	foreignKey({
			columns: [table.publicRegistrationRole],
			foreignColumns: [directusRoles.id],
			name: "directus_settings_public_registration_role_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.storageDefaultFolder],
			foreignColumns: [directusFolders.id],
			name: "directus_settings_storage_default_folder_foreign"
		}).onDelete("set null"),
]);

export const listsTemplateDirectusUsers = pgTable("lists_template_directus_users", {
	id: serial().primaryKey().notNull(),
	listsTemplateId: integer("lists_template_id"),
	directusUsersId: uuid("directus_users_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusUsersId],
			foreignColumns: [directusUsers.id],
			name: "lists_template_directus_users_directus_users_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsTemplateId],
			foreignColumns: [listsTemplate.id],
			name: "lists_template_directus_users_lists_template_id_foreign"
		}).onDelete("set null"),
]);

export const listsTemplateListItems = pgTable("lists_template_list_items", {
	id: serial().primaryKey().notNull(),
	listsTemplateId: integer("lists_template_id"),
	listItemsId: integer("list_items_id"),
}, (table) => [
	foreignKey({
			columns: [table.listItemsId],
			foreignColumns: [listItems.id],
			name: "lists_template_list_items_list_items_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.listsTemplateId],
			foreignColumns: [listsTemplate.id],
			name: "lists_template_list_items_lists_template_id_foreign"
		}).onDelete("set null"),
]);

export const federatedSpacesSpaces = pgTable("federated_spaces_spaces", {
	id: serial().primaryKey().notNull(),
	federatedSpacesId: integer("federated_spaces_id"),
	spacesId: integer("spaces_id"),
}, (table) => [
	foreignKey({
			columns: [table.federatedSpacesId],
			foreignColumns: [federatedSpaces.id],
			name: "federated_spaces_spaces_federated_spaces_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.spacesId],
			foreignColumns: [spaces.id],
			name: "federated_spaces_spaces_spaces_id_foreign"
		}).onDelete("set null"),
]);

export const bids = pgTable("bids", {
	id: serial().primaryKey().notNull(),
	lotId: integer("lot_id"),
	bidderId: integer("bidder_id"),
	amount: numeric(),
	ts: timestamp({ withTimezone: true, mode: 'string' }).defaultNow(),
	status: text(),
}, (table) => [
	foreignKey({
			columns: [table.lotId],
			foreignColumns: [auctionLots.id],
			name: "bids_lot_id_fkey"
		}).onDelete("cascade"),
]);

export const departmentChannels = pgTable("department_channels", {
	id: serial().primaryKey().notNull(),
	departmentId: integer("department_id"),
	rulesJson: jsonb("rules_json"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});

export const geoRegions = pgTable("geo_regions", {
	id: serial().primaryKey().notNull(),
	deliverySla: text("delivery_sla"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
	name: varchar({ length: 255 }),
	slug: varchar({ length: 255 }),
});

export const media = pgTable("media", {
	id: serial().primaryKey().notNull(),
	status: varchar({ length: 255 }).default('draft').notNull(),
	sort: integer(),
	userCreated: uuid("user_created"),
	dateCreated: timestamp("date_created", { withTimezone: true, mode: 'string' }),
	userUpdated: uuid("user_updated"),
	dateUpdated: timestamp("date_updated", { withTimezone: true, mode: 'string' }),
	name: varchar({ length: 255 }),
	description: text(),
	user: uuid(),
	profileId: uuid("profile_id"),
}, (table) => [
	foreignKey({
			columns: [table.profileId],
			foreignColumns: [profiles.id],
			name: "media_profile_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userCreated],
			foreignColumns: [directusUsers.id],
			name: "media_user_created_foreign"
		}),
	foreignKey({
			columns: [table.user],
			foreignColumns: [directusUsers.id],
			name: "media_user_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.userUpdated],
			foreignColumns: [directusUsers.id],
			name: "media_user_updated_foreign"
		}),
]);

export const mediaFiles = pgTable("media_files", {
	id: serial().primaryKey().notNull(),
	mediaId: integer("media_id"),
	directusFilesId: uuid("directus_files_id"),
}, (table) => [
	foreignKey({
			columns: [table.directusFilesId],
			foreignColumns: [directusFiles.id],
			name: "media_files_directus_files_id_foreign"
		}).onDelete("set null"),
	foreignKey({
			columns: [table.mediaId],
			foreignColumns: [media.id],
			name: "media_files_media_id_foreign"
		}).onDelete("set null"),
]);

export const vibezProductMap = pgTable("vibez_product_map", {
	clipId: integer("clip_id").notNull(),
	productId: integer("product_id").notNull(),
}, (table) => [
	foreignKey({
			columns: [table.clipId],
			foreignColumns: [vibezClips.id],
			name: "vibez_product_map_clip_id_fkey"
		}).onDelete("cascade"),
	foreignKey({
			columns: [table.productId],
			foreignColumns: [products.id],
			name: "vibez_product_map_product_id_fkey"
		}).onDelete("cascade"),
	primaryKey({ columns: [table.clipId, table.productId], name: "vibez_product_map_pkey"}),
]);
