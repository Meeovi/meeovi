 
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      about_departments_articles: {
        Row: {
          articles_id: number | null
          id: number
        }
        Insert: {
          articles_id?: number | null
          id?: number
        }
        Update: {
          articles_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "about_departments_articles_articles_id_foreign"
            columns: ["articles_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
        ]
      }
      about_departments_pages: {
        Row: {
          id: number
          pages_id: number | null
        }
        Insert: {
          id?: number
          pages_id?: number | null
        }
        Update: {
          id?: number
          pages_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "about_departments_pages_pages_id_foreign"
            columns: ["pages_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      about_departments_platform: {
        Row: {
          id: number
          platform_id: number | null
        }
        Insert: {
          id?: number
          platform_id?: number | null
        }
        Update: {
          id?: number
          platform_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "about_departments_platform_platform_id_foreign"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
        ]
      }
      address: {
        Row: {
          address: string | null
          address2: string | null
          company: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          email: string | null
          firstName: string | null
          format: string | null
          id: number
          lastName: string | null
          name: string | null
          postalcode: string | null
          sort: number | null
          status: string
          telephone: string | null
          type: Json | null
          user: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          address?: string | null
          address2?: string | null
          company?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          email?: string | null
          firstName?: string | null
          format?: string | null
          id?: number
          lastName?: string | null
          name?: string | null
          postalcode?: string | null
          sort?: number | null
          status?: string
          telephone?: string | null
          type?: Json | null
          user?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          address?: string | null
          address2?: string | null
          company?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          email?: string | null
          firstName?: string | null
          format?: string | null
          id?: number
          lastName?: string | null
          name?: string | null
          postalcode?: string | null
          sort?: number | null
          status?: string
          telephone?: string | null
          type?: Json | null
          user?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: []
      }
      address_cart: {
        Row: {
          address_id: number | null
          cart_id: number | null
          id: number
        }
        Insert: {
          address_id?: number | null
          cart_id?: number | null
          id?: number
        }
        Update: {
          address_id?: number | null
          cart_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "address_cart_address_id_foreign"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "address_cart_cart_id_foreign"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
        ]
      }
      address_cities: {
        Row: {
          address_id: number | null
          cities_id: number | null
          id: number
        }
        Insert: {
          address_id?: number | null
          cities_id?: number | null
          id?: number
        }
        Update: {
          address_id?: number | null
          cities_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "address_cities_address_id_foreign"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "address_cities_cities_id_foreign"
            columns: ["cities_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
        ]
      }
      address_countries: {
        Row: {
          address_id: number | null
          countries_id: number | null
          id: number
        }
        Insert: {
          address_id?: number | null
          countries_id?: number | null
          id?: number
        }
        Update: {
          address_id?: number | null
          countries_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "address_countries_address_id_foreign"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "address_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      address_directus_users: {
        Row: {
          address_id: number | null
          directus_users_id: string | null
          id: number
        }
        Insert: {
          address_id?: number | null
          directus_users_id?: string | null
          id?: number
        }
        Update: {
          address_id?: number | null
          directus_users_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "address_directus_users_address_id_foreign"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
        ]
      }
      advertising: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          end_time: string | null
          id: number
          link: string | null
          name: string | null
          sort: number | null
          start_date: string | null
          status: string
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          end_time?: string | null
          id?: number
          link?: string | null
          name?: string | null
          sort?: number | null
          start_date?: string | null
          status?: string
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          end_time?: string | null
          id?: number
          link?: string | null
          name?: string | null
          sort?: number | null
          start_date?: string | null
          status?: string
        }
        Relationships: []
      }
      advertising_files: {
        Row: {
          directus_files_id: string | null
          id: number
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
        }
        Update: {
          directus_files_id?: string | null
          id?: number
        }
        Relationships: []
      }
      agreements: {
        Row: {
          content: string | null
          created: string | null
          excerpt: string | null
          id: number
          name: string | null
          reference_id: number | null
          status: string | null
          type: Json | null
          updated: string | null
        }
        Insert: {
          content?: string | null
          created?: string | null
          excerpt?: string | null
          id?: number
          name?: string | null
          reference_id?: number | null
          status?: string | null
          type?: Json | null
          updated?: string | null
        }
        Update: {
          content?: string | null
          created?: string | null
          excerpt?: string | null
          id?: number
          name?: string | null
          reference_id?: number | null
          status?: string | null
          type?: Json | null
          updated?: string | null
        }
        Relationships: []
      }
      agreements_directus_users: {
        Row: {
          id: number
          user_id: string | null
        }
        Insert: {
          id?: number
          user_id?: string | null
        }
        Update: {
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      agreements_products: {
        Row: {
          id: number
          products_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "agreements_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      ai_prompts: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: string
          messages: Json | null
          name: string | null
          sort: number | null
          status: string | null
          system_prompt: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id: string
          messages?: Json | null
          name?: string | null
          sort?: number | null
          status?: string | null
          system_prompt?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: string
          messages?: Json | null
          name?: string | null
          sort?: number | null
          status?: string | null
          system_prompt?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ai_prompts_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ai_prompts_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      announcements: {
        Row: {
          border_color: string | null
          color: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          icon: string | null
          id: number
          image: string | null
          location: Json | null
          name: string | null
          sort: number | null
          status: string
          subject: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          border_color?: string | null
          color?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          location?: Json | null
          name?: string | null
          sort?: number | null
          status?: string
          subject?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          border_color?: string | null
          color?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          location?: Json | null
          name?: string | null
          sort?: number | null
          status?: string
          subject?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "announcements_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "announcements_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "announcements_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      applications: {
        Row: {
          description: string | null
          id: number
          image: string | null
          name: string | null
          operating_systems: Json | null
          slug: string | null
          status: string
          url: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          operating_systems?: Json | null
          slug?: string | null
          status?: string
          url?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          operating_systems?: Json | null
          slug?: string | null
          status?: string
          url?: string | null
        }
        Relationships: []
      }
      articles: {
        Row: {
          author: string | null
          content: string | null
          created_at: string | null
          excerpt: string | null
          id: number
          image: string | null
          isPublic: boolean | null
          name: string | null
          slug: string | null
          stamp: number | null
          type: Json | null
        }
        Insert: {
          author?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: number
          image?: string | null
          isPublic?: boolean | null
          name?: string | null
          slug?: string | null
          stamp?: number | null
          type?: Json | null
        }
        Update: {
          author?: string | null
          content?: string | null
          created_at?: string | null
          excerpt?: string | null
          id?: number
          image?: string | null
          isPublic?: boolean | null
          name?: string | null
          slug?: string | null
          stamp?: number | null
          type?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "articles_author_foreign"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      articles_categories: {
        Row: {
          articles_id: number | null
          categories_id: number | null
          id: number
        }
        Insert: {
          articles_id?: number | null
          categories_id?: number | null
          id?: number
        }
        Update: {
          articles_id?: number | null
          categories_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "articles_categories_articles_id_foreign"
            columns: ["articles_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      articles_comments: {
        Row: {
          articles_id: number | null
          comments_id: number | null
          id: number
        }
        Insert: {
          articles_id?: number | null
          comments_id?: number | null
          id?: number
        }
        Update: {
          articles_id?: number | null
          comments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "articles_comments_articles_id_foreign"
            columns: ["articles_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_comments_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      articles_departments: {
        Row: {
          articles_id: number | null
          departments_id: number | null
          id: number
        }
        Insert: {
          articles_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Update: {
          articles_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "articles_departments_articles_id_foreign"
            columns: ["articles_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "articles_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      attributes: {
        Row: {
          attribute_code: string | null
          default_label: string | null
          id: number
          isPublic: boolean | null
          options: Json | null
        }
        Insert: {
          attribute_code?: string | null
          default_label?: string | null
          id?: number
          isPublic?: boolean | null
          options?: Json | null
        }
        Update: {
          attribute_code?: string | null
          default_label?: string | null
          id?: number
          isPublic?: boolean | null
          options?: Json | null
        }
        Relationships: []
      }
      attributes_product_types: {
        Row: {
          attributes_id: number | null
          id: number
          product_types_id: number | null
        }
        Insert: {
          attributes_id?: number | null
          id?: number
          product_types_id?: number | null
        }
        Update: {
          attributes_id?: number | null
          id?: number
          product_types_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "attributes_product_types_attributes_id_foreign"
            columns: ["attributes_id"]
            isOneToOne: false
            referencedRelation: "attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attributes_product_types_product_types_id_foreign"
            columns: ["product_types_id"]
            isOneToOne: false
            referencedRelation: "product_types"
            referencedColumns: ["id"]
          },
        ]
      }
      attributes_products: {
        Row: {
          attributes_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          attributes_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          attributes_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "attributes_products_attributes_id_foreign"
            columns: ["attributes_id"]
            isOneToOne: false
            referencedRelation: "attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attributes_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      auction_lots: {
        Row: {
          anti_snipe_sec: number | null
          created_at: string | null
          end_at: string | null
          id: number
          product_id: number | null
          reserve_price: number | null
          start_at: string | null
        }
        Insert: {
          anti_snipe_sec?: number | null
          created_at?: string | null
          end_at?: string | null
          id?: number
          product_id?: number | null
          reserve_price?: number | null
          start_at?: string | null
        }
        Update: {
          anti_snipe_sec?: number | null
          created_at?: string | null
          end_at?: string | null
          id?: number
          product_id?: number | null
          reserve_price?: number | null
          start_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "auction_lots_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      bids: {
        Row: {
          amount: number | null
          bidder_id: number | null
          id: number
          lot_id: number | null
          status: string | null
          ts: string | null
        }
        Insert: {
          amount?: number | null
          bidder_id?: number | null
          id?: number
          lot_id?: number | null
          status?: string | null
          ts?: string | null
        }
        Update: {
          amount?: number | null
          bidder_id?: number | null
          id?: number
          lot_id?: number | null
          status?: string | null
          ts?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bids_lot_id_fkey"
            columns: ["lot_id"]
            isOneToOne: false
            referencedRelation: "auction_lots"
            referencedColumns: ["id"]
          },
        ]
      }
      brands: {
        Row: {
          code: string | null
          created_at: string | null
          description: string | null
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brands_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
        ]
      }
      brands_categories: {
        Row: {
          brands_id: number | null
          categories_id: number | null
          id: number
        }
        Insert: {
          brands_id?: number | null
          categories_id?: number | null
          id?: number
        }
        Update: {
          brands_id?: number | null
          categories_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "brands_categories_brands_id_foreign"
            columns: ["brands_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brands_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      brands_departments: {
        Row: {
          brands_id: number | null
          departments_id: number | null
          id: number
        }
        Insert: {
          brands_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Update: {
          brands_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "brands_departments_brands_id_foreign"
            columns: ["brands_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brands_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      brands_manufacturer: {
        Row: {
          brands_id: number | null
          id: number
          manufacturer_id: number | null
        }
        Insert: {
          brands_id?: number | null
          id?: number
          manufacturer_id?: number | null
        }
        Update: {
          brands_id?: number | null
          id?: number
          manufacturer_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "brands_manufacturer_brands_id_foreign"
            columns: ["brands_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brands_manufacturer_manufacturer_id_foreign"
            columns: ["manufacturer_id"]
            isOneToOne: false
            referencedRelation: "manufacturer"
            referencedColumns: ["id"]
          },
        ]
      }
      brands_products: {
        Row: {
          brands_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          brands_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          brands_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "brands_products_brands_id_foreign"
            columns: ["brands_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brands_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      brands_shorts: {
        Row: {
          brands_id: number | null
          id: number
          shorts_id: number | null
        }
        Insert: {
          brands_id?: number | null
          id?: number
          shorts_id?: number | null
        }
        Update: {
          brands_id?: number | null
          id?: number
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "brands_shorts_brands_id_foreign"
            columns: ["brands_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brands_shorts_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      buyagain: {
        Row: {
          date_created: string | null
          id: number
        }
        Insert: {
          date_created?: string | null
          id?: number
        }
        Update: {
          date_created?: string | null
          id?: number
        }
        Relationships: []
      }
      calendar: {
        Row: {
          appointment: Json | null
          day: number | null
          description: string | null
          facebook_id: string | null
          favorite: boolean | null
          google_id: string | null
          id: number
          image: string | null
          month: Json | null
          name: string | null
          status: boolean | null
          year: number | null
        }
        Insert: {
          appointment?: Json | null
          day?: number | null
          description?: string | null
          facebook_id?: string | null
          favorite?: boolean | null
          google_id?: string | null
          id?: number
          image?: string | null
          month?: Json | null
          name?: string | null
          status?: boolean | null
          year?: number | null
        }
        Update: {
          appointment?: Json | null
          day?: number | null
          description?: string | null
          facebook_id?: string | null
          favorite?: boolean | null
          google_id?: string | null
          id?: number
          image?: string | null
          month?: Json | null
          name?: string | null
          status?: boolean | null
          year?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "calendar_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_comments: {
        Row: {
          calendar_id: number | null
          comments_id: number | null
          id: number
        }
        Insert: {
          calendar_id?: number | null
          comments_id?: number | null
          id?: number
        }
        Update: {
          calendar_id?: number | null
          comments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "calendar_comments_calendar_id_foreign"
            columns: ["calendar_id"]
            isOneToOne: false
            referencedRelation: "calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_comments_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_directus_users: {
        Row: {
          calendar_id: number | null
          directus_users_id: string | null
          id: number
        }
        Insert: {
          calendar_id?: number | null
          directus_users_id?: string | null
          id?: number
        }
        Update: {
          calendar_id?: number | null
          directus_users_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "calendar_directus_users_calendar_id_foreign"
            columns: ["calendar_id"]
            isOneToOne: false
            referencedRelation: "calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_events: {
        Row: {
          calendar_id: number | null
          events_id: number | null
          id: number
        }
        Insert: {
          calendar_id?: number | null
          events_id?: number | null
          id?: number
        }
        Update: {
          calendar_id?: number | null
          events_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "calendar_events_calendar_id_foreign"
            columns: ["calendar_id"]
            isOneToOne: false
            referencedRelation: "calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_events_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_integrations: {
        Row: {
          calendar_id: number | null
          id: number
          integrations_id: number | null
        }
        Insert: {
          calendar_id?: number | null
          id?: number
          integrations_id?: number | null
        }
        Update: {
          calendar_id?: number | null
          id?: number
          integrations_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "calendar_integrations_calendar_id_foreign"
            columns: ["calendar_id"]
            isOneToOne: false
            referencedRelation: "calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_integrations_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_lists: {
        Row: {
          calendar_id: number | null
          id: number
          lists_id: number | null
        }
        Insert: {
          calendar_id?: number | null
          id?: number
          lists_id?: number | null
        }
        Update: {
          calendar_id?: number | null
          id?: number
          lists_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "calendar_lists_calendar_id_foreign"
            columns: ["calendar_id"]
            isOneToOne: false
            referencedRelation: "calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_lists_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
        ]
      }
      careers: {
        Row: {
          date_created: string | null
          date_updated: string | null
          degree_level: string | null
          description: string | null
          experience: string | null
          id: number
          image: string | null
          name: string | null
          sort: number | null
          status: string
          type: string | null
          url: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          degree_level?: string | null
          description?: string | null
          experience?: string | null
          id?: number
          image?: string | null
          name?: string | null
          sort?: number | null
          status?: string
          type?: string | null
          url?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          degree_level?: string | null
          description?: string | null
          experience?: string | null
          id?: number
          image?: string | null
          name?: string | null
          sort?: number | null
          status?: string
          type?: string | null
          url?: string | null
        }
        Relationships: []
      }
      cart: {
        Row: {
          coupon_code: string | null
          currency: string | null
          date_created: string | null
          date_updated: string | null
          discount_amount: number | null
          id: number
          session_id: string | null
          shipping_amount: number | null
          status: string | null
          subtotal: number | null
          tax_amount: number | null
          total: number | null
          total_price: number | null
          user: string | null
          user_updated: string | null
        }
        Insert: {
          coupon_code?: string | null
          currency?: string | null
          date_created?: string | null
          date_updated?: string | null
          discount_amount?: number | null
          id?: number
          session_id?: string | null
          shipping_amount?: number | null
          status?: string | null
          subtotal?: number | null
          tax_amount?: number | null
          total?: number | null
          total_price?: number | null
          user?: string | null
          user_updated?: string | null
        }
        Update: {
          coupon_code?: string | null
          currency?: string | null
          date_created?: string | null
          date_updated?: string | null
          discount_amount?: number | null
          id?: number
          session_id?: string | null
          shipping_amount?: number | null
          status?: string | null
          subtotal?: number | null
          tax_amount?: number | null
          total?: number | null
          total_price?: number | null
          user?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      cart_cart_items: {
        Row: {
          cart_id: number | null
          cart_items_id: number | null
          id: number
        }
        Insert: {
          cart_id?: number | null
          cart_items_id?: number | null
          id?: number
        }
        Update: {
          cart_id?: number | null
          cart_items_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "cart_cart_items_cart_id_foreign"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_cart_items_cart_items_id_foreign"
            columns: ["cart_items_id"]
            isOneToOne: false
            referencedRelation: "cart_items"
            referencedColumns: ["id"]
          },
        ]
      }
      cart_items: {
        Row: {
          cart: number | null
          id: number
          metadata: Json | null
          price: number | null
          product_id: string | null
          products: number | null
          quantity: number | null
          total: number | null
          variant: string | null
          variant_id: string | null
        }
        Insert: {
          cart?: number | null
          id?: number
          metadata?: Json | null
          price?: number | null
          product_id?: string | null
          products?: number | null
          quantity?: number | null
          total?: number | null
          variant?: string | null
          variant_id?: string | null
        }
        Update: {
          cart?: number | null
          id?: number
          metadata?: Json | null
          price?: number | null
          product_id?: string | null
          products?: number | null
          quantity?: number | null
          total?: number | null
          variant?: string | null
          variant_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_cart_foreign"
            columns: ["cart"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_items_products_foreign"
            columns: ["products"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      cart_products: {
        Row: {
          cart_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          cart_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          cart_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_products_cart_id_foreign"
            columns: ["cart_id"]
            isOneToOne: false
            referencedRelation: "cart"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cart_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          color: string | null
          colortext: string | null
          content: string | null
          description: string | null
          id: number
          image: string | null
          menus: Json | null
          name: string | null
          slug: string | null
          uid: string | null
        }
        Insert: {
          color?: string | null
          colortext?: string | null
          content?: string | null
          description?: string | null
          id?: number
          image?: string | null
          menus?: Json | null
          name?: string | null
          slug?: string | null
          uid?: string | null
        }
        Update: {
          color?: string | null
          colortext?: string | null
          content?: string | null
          description?: string | null
          id?: number
          image?: string | null
          menus?: Json | null
          name?: string | null
          slug?: string | null
          uid?: string | null
        }
        Relationships: []
      }
      categories_departments: {
        Row: {
          categories_id: number | null
          departments_id: number | null
          id: number
        }
        Insert: {
          categories_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Update: {
          categories_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "categories_departments_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      categories_postgresstores: {
        Row: {
          categories_id: number | null
          id: number
          postgresstores_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          postgresstores_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          postgresstores_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_postgresstores_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_postgresstores_postgresstores_id_foreign"
            columns: ["postgresstores_id"]
            isOneToOne: false
            referencedRelation: "postgresstores"
            referencedColumns: ["id"]
          },
        ]
      }
      categories_shorts: {
        Row: {
          categories_id: number | null
          id: number
          shorts_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          shorts_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "categories_shorts_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "categories_shorts_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      chart_entries: {
        Row: {
          award: string | null
          chart_id: number | null
          color: string | null
          id: number
          last_position: number | null
          last_week: string | null
          peak_position: string | null
          position: number | null
          product_id: number | null
          sales: number | null
          score: number | null
          streams: number | null
          this_week: string | null
          trend: string | null
          weeks_on_chart: string | null
        }
        Insert: {
          award?: string | null
          chart_id?: number | null
          color?: string | null
          id?: number
          last_position?: number | null
          last_week?: string | null
          peak_position?: string | null
          position?: number | null
          product_id?: number | null
          sales?: number | null
          score?: number | null
          streams?: number | null
          this_week?: string | null
          trend?: string | null
          weeks_on_chart?: string | null
        }
        Update: {
          award?: string | null
          chart_id?: number | null
          color?: string | null
          id?: number
          last_position?: number | null
          last_week?: string | null
          peak_position?: string | null
          position?: number | null
          product_id?: number | null
          sales?: number | null
          score?: number | null
          streams?: number | null
          this_week?: string | null
          trend?: string | null
          weeks_on_chart?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chart_entries_chart_id_foreign"
            columns: ["chart_id"]
            isOneToOne: false
            referencedRelation: "charts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chart_entries_product_id_foreign"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      charts: {
        Row: {
          date: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          icon: string | null
          id: number
          name: string | null
          slug: string | null
          sort: number | null
          status: string
          type: string | null
        }
        Insert: {
          date?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          icon?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          type?: string | null
        }
        Update: {
          date?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          icon?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "charts_icon_foreign"
            columns: ["icon"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
        ]
      }
      charts_departments: {
        Row: {
          charts_id: number | null
          departments_id: number | null
          id: number
        }
        Insert: {
          charts_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Update: {
          charts_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "charts_departments_charts_id_foreign"
            columns: ["charts_id"]
            isOneToOne: false
            referencedRelation: "charts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "charts_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      charts_products: {
        Row: {
          charts_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          charts_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          charts_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "charts_products_charts_id_foreign"
            columns: ["charts_id"]
            isOneToOne: false
            referencedRelation: "charts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "charts_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      charts_radios: {
        Row: {
          charts_id: number | null
          id: number
          radios_id: number | null
        }
        Insert: {
          charts_id?: number | null
          id?: number
          radios_id?: number | null
        }
        Update: {
          charts_id?: number | null
          id?: number
          radios_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "charts_radios_charts_id_foreign"
            columns: ["charts_id"]
            isOneToOne: false
            referencedRelation: "charts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "charts_radios_radios_id_foreign"
            columns: ["radios_id"]
            isOneToOne: false
            referencedRelation: "radios"
            referencedColumns: ["id"]
          },
        ]
      }
      chat: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          image: string | null
          message: string | null
          name: string | null
          sort: number | null
          status: string
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          message?: string | null
          name?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          message?: string | null
          name?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      circles_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
        }
        Update: {
          directus_users_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "circles_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      circles_posts: {
        Row: {
          id: number
          posts_id: number | null
        }
        Insert: {
          id?: number
          posts_id?: number | null
        }
        Update: {
          id?: number
          posts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "circles_posts_posts_id_foreign"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      circles_products: {
        Row: {
          id: number
          products_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "circles_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      cities: {
        Row: {
          description: string | null
          id: number
          image: string | null
          languagenames: string | null
          latitude: string | null
          longitude: string | null
          name: string
          postalCode: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          image?: string | null
          languagenames?: string | null
          latitude?: string | null
          longitude?: string | null
          name: string
          postalCode?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          image?: string | null
          languagenames?: string | null
          latitude?: string | null
          longitude?: string | null
          name?: string
          postalCode?: string | null
        }
        Relationships: []
      }
      cities_countries: {
        Row: {
          cities_id: number | null
          countries_id: number | null
          id: number
        }
        Insert: {
          cities_id?: number | null
          countries_id?: number | null
          id?: number
        }
        Update: {
          cities_id?: number | null
          countries_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "cities_countries_cities_id_foreign"
            columns: ["cities_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
        ]
      }
      cities_states: {
        Row: {
          cities_id: number | null
          id: number
        }
        Insert: {
          cities_id?: number | null
          id?: number
        }
        Update: {
          cities_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "cities_states_cities_id_foreign"
            columns: ["cities_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
        ]
      }
      collections: {
        Row: {
          created_at: string | null
          description: string | null
          id: number
          image: string | null
          name: string | null
          type: Json | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          type?: Json | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          type?: Json | null
        }
        Relationships: []
      }
      collections_brands: {
        Row: {
          brands_id: number | null
          collections_id: number | null
          id: number
        }
        Insert: {
          brands_id?: number | null
          collections_id?: number | null
          id?: number
        }
        Update: {
          brands_id?: number | null
          collections_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "collections_brands_brands_id_foreign"
            columns: ["brands_id"]
            isOneToOne: false
            referencedRelation: "brands"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collections_brands_collections_id_foreign"
            columns: ["collections_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
        ]
      }
      collections_products: {
        Row: {
          collections_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          collections_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          collections_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "collections_products_collections_id_foreign"
            columns: ["collections_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collections_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      collections_spaces: {
        Row: {
          collections_id: number | null
          id: number
          spaces_id: number | null
        }
        Insert: {
          collections_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Update: {
          collections_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "collections_spaces_collections_id_foreign"
            columns: ["collections_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "collections_spaces_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      colors: {
        Row: {
          blue: number | null
          green: number | null
          hex: string
          hue: number | null
          id: number
          light_hsl: number | null
          name: string | null
          red: number | null
          sat_hsl: number | null
          sat_hsv: number | null
          source: Database["public"]["Enums"]["color_source"] | null
          val_hsv: number | null
        }
        Insert: {
          blue?: number | null
          green?: number | null
          hex: string
          hue?: number | null
          id?: number
          light_hsl?: number | null
          name?: string | null
          red?: number | null
          sat_hsl?: number | null
          sat_hsv?: number | null
          source?: Database["public"]["Enums"]["color_source"] | null
          val_hsv?: number | null
        }
        Update: {
          blue?: number | null
          green?: number | null
          hex?: string
          hue?: number | null
          id?: number
          light_hsl?: number | null
          name?: string | null
          red?: number | null
          sat_hsl?: number | null
          sat_hsv?: number | null
          source?: Database["public"]["Enums"]["color_source"] | null
          val_hsv?: number | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          average_rating: string | null
          context_type: string | null
          created_at: string | null
          helpful: boolean | null
          id: number
          is_live: boolean | null
          media: string | null
          message_type: string | null
          name: string | null
          nickname: string | null
          ratings_breakdown: string | null
          response: string | null
          review_count: number | null
          summary: string | null
          type: string | null
          updated_at: string | null
          user: string | null
        }
        Insert: {
          average_rating?: string | null
          context_type?: string | null
          created_at?: string | null
          helpful?: boolean | null
          id?: number
          is_live?: boolean | null
          media?: string | null
          message_type?: string | null
          name?: string | null
          nickname?: string | null
          ratings_breakdown?: string | null
          response?: string | null
          review_count?: number | null
          summary?: string | null
          type?: string | null
          updated_at?: string | null
          user?: string | null
        }
        Update: {
          average_rating?: string | null
          context_type?: string | null
          created_at?: string | null
          helpful?: boolean | null
          id?: number
          is_live?: boolean | null
          media?: string | null
          message_type?: string | null
          name?: string | null
          nickname?: string | null
          ratings_breakdown?: string | null
          response?: string | null
          review_count?: number | null
          summary?: string | null
          type?: string | null
          updated_at?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      comments_directus_users: {
        Row: {
          comment_id: number | null
          id: number
          user_id: string | null
        }
        Insert: {
          comment_id?: number | null
          id?: number
          user_id?: string | null
        }
        Update: {
          comment_id?: number | null
          id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_directus_users_comment_id_foreign"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
        ]
      }
      comments_products: {
        Row: {
          comments_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          comments_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          comments_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_products_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      comments_reactions: {
        Row: {
          comments_id: number | null
          id: number
          reactions_id: number | null
        }
        Insert: {
          comments_id?: number | null
          id?: number
          reactions_id?: number | null
        }
        Update: {
          comments_id?: number | null
          id?: number
          reactions_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_reactions_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_reactions_reactions_id_foreign"
            columns: ["reactions_id"]
            isOneToOne: false
            referencedRelation: "reactions"
            referencedColumns: ["id"]
          },
        ]
      }
      comments_shorts: {
        Row: {
          comments_id: number | null
          id: number
          shorts_id: number | null
        }
        Insert: {
          comments_id?: number | null
          id?: number
          shorts_id?: number | null
        }
        Update: {
          comments_id?: number | null
          id?: number
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_shorts_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_shorts_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      connections: {
        Row: {
          connection_type: string | null
          date_created: string | null
          description: string | null
          id: number
          name: string | null
          recipient: string | null
          user_a: string | null
        }
        Insert: {
          connection_type?: string | null
          date_created?: string | null
          description?: string | null
          id?: number
          name?: string | null
          recipient?: string | null
          user_a?: string | null
        }
        Update: {
          connection_type?: string | null
          date_created?: string | null
          description?: string | null
          id?: number
          name?: string | null
          recipient?: string | null
          user_a?: string | null
        }
        Relationships: []
      }
      connections_directus_users: {
        Row: {
          connections_id: number | null
          directus_users_id: string | null
          id: number
        }
        Insert: {
          connections_id?: number | null
          directus_users_id?: string | null
          id?: number
        }
        Update: {
          connections_id?: number | null
          directus_users_id?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "connections_directus_users_connections_id_foreign"
            columns: ["connections_id"]
            isOneToOne: false
            referencedRelation: "connections"
            referencedColumns: ["id"]
          },
        ]
      }
      countries: {
        Row: {
          capital: string | null
          created_at: string | null
          emoji: string | null
          emojiU: string | null
          flag: number
          id: number
          iso2: string | null
          iso3: string | null
          latitude: number | null
          longitude: number | null
          name: string | null
          native: string | null
          phonecode: string | null
          region: Json | null
          tld: string | null
          translations: string | null
          updated_at: string | null
          wikiDataId: string | null
        }
        Insert: {
          capital?: string | null
          created_at?: string | null
          emoji?: string | null
          emojiU?: string | null
          flag?: number
          id: number
          iso2?: string | null
          iso3?: string | null
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          native?: string | null
          phonecode?: string | null
          region?: Json | null
          tld?: string | null
          translations?: string | null
          updated_at?: string | null
          wikiDataId?: string | null
        }
        Update: {
          capital?: string | null
          created_at?: string | null
          emoji?: string | null
          emojiU?: string | null
          flag?: number
          id?: number
          iso2?: string | null
          iso3?: string | null
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          native?: string | null
          phonecode?: string | null
          region?: Json | null
          tld?: string | null
          translations?: string | null
          updated_at?: string | null
          wikiDataId?: string | null
        }
        Relationships: []
      }
      countries_currency: {
        Row: {
          countries_id: number | null
          currency_id: number | null
          id: number
        }
        Insert: {
          countries_id?: number | null
          currency_id?: number | null
          id?: number
        }
        Update: {
          countries_id?: number | null
          currency_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "countries_currency_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "countries_currency_currency_id_foreign"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["id"]
          },
        ]
      }
      countries_timezones: {
        Row: {
          countries_id: number | null
          id: number
          timezones_id: number | null
        }
        Insert: {
          countries_id?: number | null
          id?: number
          timezones_id?: number | null
        }
        Update: {
          countries_id?: number | null
          id?: number
          timezones_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "countries_timezones_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "countries_timezones_timezones_id_foreign"
            columns: ["timezones_id"]
            isOneToOne: false
            referencedRelation: "timezones"
            referencedColumns: ["id"]
          },
        ]
      }
      coupons_products: {
        Row: {
          id: number
          products_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "coupons_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_memos: {
        Row: {
          adjustment: number | null
          adjustment_negative: number | null
          adjustment_positive: number | null
          base_adjustment: number | null
          base_adjustment_negative: number | null
          base_adjustment_positive: number | null
          base_currency_code: string | null
          base_discount_amount: number | null
          base_discount_tax_compensation_amount: number | null
          base_grand_total: number | null
          base_shipping_amount: number | null
          base_shipping_discount_tax_compensation_amnt: number | null
          base_shipping_incl_tax: number | null
          base_shipping_tax_amount: number | null
          base_subtotal: number | null
          base_subtotal_incl_tax: number | null
          base_tax_amount: number | null
          base_to_global_rate: number | null
          base_to_order_rate: number | null
          created_at: string | null
          creditmemo_status: number | null
          discount_amount: number | null
          discount_description: string | null
          discount_tax_compensation_amount: number | null
          email_sent: number | null
          entity_id: number | null
          global_currency_code: string | null
          grand_total: number | null
          id: number
          increment_id: string | null
          invoice_id: number | null
          order_currency_code: string | null
          shipping_amount: number | null
          shipping_discount_tax_compensation_amount: number | null
          shipping_incl_tax: number | null
          shipping_tax_amount: number | null
          state: number | null
          store_currency_code: string | null
          store_id: number | null
          store_to_base_rate: number | null
          store_to_order_rate: number | null
          subtotal: number | null
          subtotal_incl_tax: number | null
          tax_amount: number | null
          updated_at: string | null
          user: string | null
        }
        Insert: {
          adjustment?: number | null
          adjustment_negative?: number | null
          adjustment_positive?: number | null
          base_adjustment?: number | null
          base_adjustment_negative?: number | null
          base_adjustment_positive?: number | null
          base_currency_code?: string | null
          base_discount_amount?: number | null
          base_discount_tax_compensation_amount?: number | null
          base_grand_total?: number | null
          base_shipping_amount?: number | null
          base_shipping_discount_tax_compensation_amnt?: number | null
          base_shipping_incl_tax?: number | null
          base_shipping_tax_amount?: number | null
          base_subtotal?: number | null
          base_subtotal_incl_tax?: number | null
          base_tax_amount?: number | null
          base_to_global_rate?: number | null
          base_to_order_rate?: number | null
          created_at?: string | null
          creditmemo_status?: number | null
          discount_amount?: number | null
          discount_description?: string | null
          discount_tax_compensation_amount?: number | null
          email_sent?: number | null
          entity_id?: number | null
          global_currency_code?: string | null
          grand_total?: number | null
          id?: number
          increment_id?: string | null
          invoice_id?: number | null
          order_currency_code?: string | null
          shipping_amount?: number | null
          shipping_discount_tax_compensation_amount?: number | null
          shipping_incl_tax?: number | null
          shipping_tax_amount?: number | null
          state?: number | null
          store_currency_code?: string | null
          store_id?: number | null
          store_to_base_rate?: number | null
          store_to_order_rate?: number | null
          subtotal?: number | null
          subtotal_incl_tax?: number | null
          tax_amount?: number | null
          updated_at?: string | null
          user?: string | null
        }
        Update: {
          adjustment?: number | null
          adjustment_negative?: number | null
          adjustment_positive?: number | null
          base_adjustment?: number | null
          base_adjustment_negative?: number | null
          base_adjustment_positive?: number | null
          base_currency_code?: string | null
          base_discount_amount?: number | null
          base_discount_tax_compensation_amount?: number | null
          base_grand_total?: number | null
          base_shipping_amount?: number | null
          base_shipping_discount_tax_compensation_amnt?: number | null
          base_shipping_incl_tax?: number | null
          base_shipping_tax_amount?: number | null
          base_subtotal?: number | null
          base_subtotal_incl_tax?: number | null
          base_tax_amount?: number | null
          base_to_global_rate?: number | null
          base_to_order_rate?: number | null
          created_at?: string | null
          creditmemo_status?: number | null
          discount_amount?: number | null
          discount_description?: string | null
          discount_tax_compensation_amount?: number | null
          email_sent?: number | null
          entity_id?: number | null
          global_currency_code?: string | null
          grand_total?: number | null
          id?: number
          increment_id?: string | null
          invoice_id?: number | null
          order_currency_code?: string | null
          shipping_amount?: number | null
          shipping_discount_tax_compensation_amount?: number | null
          shipping_incl_tax?: number | null
          shipping_tax_amount?: number | null
          state?: number | null
          store_currency_code?: string | null
          store_id?: number | null
          store_to_base_rate?: number | null
          store_to_order_rate?: number | null
          subtotal?: number | null
          subtotal_incl_tax?: number | null
          tax_amount?: number | null
          updated_at?: string | null
          user?: string | null
        }
        Relationships: []
      }
      cross_sell_products: {
        Row: {
          id: number
          sort: number | null
          user: string | null
        }
        Insert: {
          id?: number
          sort?: number | null
          user?: string | null
        }
        Update: {
          id?: number
          sort?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cross_sell_products_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      cross_sell_products_products: {
        Row: {
          cross_sell_products_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          cross_sell_products_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          cross_sell_products_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cross_sell_products_products_cross_sell_products_id_foreign"
            columns: ["cross_sell_products_id"]
            isOneToOne: false
            referencedRelation: "cross_sell_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cross_sell_products_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      currencies_countries: {
        Row: {
          countries_id: number | null
          id: number
        }
        Insert: {
          countries_id?: number | null
          id?: number
        }
        Update: {
          countries_id?: number | null
          id?: number
        }
        Relationships: []
      }
      currency: {
        Row: {
          code: string | null
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
          sort: number | null
          symbol: string | null
        }
        Insert: {
          code?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          sort?: number | null
          symbol?: string | null
        }
        Update: {
          code?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          sort?: number | null
          symbol?: string | null
        }
        Relationships: []
      }
      currency_departments: {
        Row: {
          currency_id: number | null
          departments_id: number | null
          id: number
        }
        Insert: {
          currency_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Update: {
          currency_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "currency_departments_currency_id_foreign"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "currency_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      department_channels: {
        Row: {
          created_at: string | null
          department_id: number | null
          id: number
          rules_json: Json | null
        }
        Insert: {
          created_at?: string | null
          department_id?: number | null
          id?: number
          rules_json?: Json | null
        }
        Update: {
          created_at?: string | null
          department_id?: number | null
          id?: number
          rules_json?: Json | null
        }
        Relationships: []
      }
      departments: {
        Row: {
          active: string | null
          callouts: Json | null
          color: string | null
          colortext: string | null
          content: string | null
          custom_domain: string | null
          description: string | null
          id: number
          image: string | null
          menus: Json | null
          name: string
          relative_id: string | null
          slug: string | null
          type: string | null
        }
        Insert: {
          active?: string | null
          callouts?: Json | null
          color?: string | null
          colortext?: string | null
          content?: string | null
          custom_domain?: string | null
          description?: string | null
          id?: number
          image?: string | null
          menus?: Json | null
          name: string
          relative_id?: string | null
          slug?: string | null
          type?: string | null
        }
        Update: {
          active?: string | null
          callouts?: Json | null
          color?: string | null
          colortext?: string | null
          content?: string | null
          custom_domain?: string | null
          description?: string | null
          id?: number
          image?: string | null
          menus?: Json | null
          name?: string
          relative_id?: string | null
          slug?: string | null
          type?: string | null
        }
        Relationships: []
      }
      departments_categories: {
        Row: {
          categories_id: number | null
          departments_id: number | null
          id: number
        }
        Insert: {
          categories_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Update: {
          categories_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "departments_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_categories_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      departments_collections: {
        Row: {
          collections_id: number | null
          departments_id: number | null
          id: number
        }
        Insert: {
          collections_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Update: {
          collections_id?: number | null
          departments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "departments_collections_collections_id_foreign"
            columns: ["collections_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_collections_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      departments_products: {
        Row: {
          departments_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "departments_products_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      departments_shorts: {
        Row: {
          departments_id: number | null
          id: number
          shorts_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          shorts_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "departments_shorts_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_shorts_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      departments_showcases: {
        Row: {
          departments_id: number | null
          id: number
          showcases_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          showcases_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          showcases_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "departments_showcases_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "departments_showcases_showcases_id_foreign"
            columns: ["showcases_id"]
            isOneToOne: false
            referencedRelation: "showcases"
            referencedColumns: ["id"]
          },
        ]
      }
      digiboard: {
        Row: {
          board: string | null
          created_at: string
          id: number
          image: string | null
          name: string
        }
        Insert: {
          board?: string | null
          created_at?: string
          id?: number
          image?: string | null
          name: string
        }
        Update: {
          board?: string | null
          created_at?: string
          id?: number
          image?: string | null
          name?: string
        }
        Relationships: []
      }
      digiboard_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
        }
        Update: {
          directus_users_id?: string | null
          id?: number
        }
        Relationships: []
      }
      directus_access: {
        Row: {
          id: string
          policy: string
          role: string | null
          sort: number | null
          user: string | null
        }
        Insert: {
          id: string
          policy: string
          role?: string | null
          sort?: number | null
          user?: string | null
        }
        Update: {
          id?: string
          policy?: string
          role?: string | null
          sort?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_access_policy_foreign"
            columns: ["policy"]
            isOneToOne: false
            referencedRelation: "directus_policies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_access_role_foreign"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_access_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_activity: {
        Row: {
          action: string
          collection: string
          id: number
          ip: string | null
          item: string
          origin: string | null
          timestamp: string
          user: string | null
          user_agent: string | null
        }
        Insert: {
          action: string
          collection: string
          id?: number
          ip?: string | null
          item: string
          origin?: string | null
          timestamp?: string
          user?: string | null
          user_agent?: string | null
        }
        Update: {
          action?: string
          collection?: string
          id?: number
          ip?: string | null
          item?: string
          origin?: string | null
          timestamp?: string
          user?: string | null
          user_agent?: string | null
        }
        Relationships: []
      }
      directus_collections: {
        Row: {
          accountability: string | null
          archive_app_filter: boolean
          archive_field: string | null
          archive_value: string | null
          collapse: string
          collection: string
          color: string | null
          display_template: string | null
          group: string | null
          hidden: boolean
          icon: string | null
          item_duplication_fields: Json | null
          note: string | null
          preview_url: string | null
          singleton: boolean
          sort: number | null
          sort_field: string | null
          translations: Json | null
          unarchive_value: string | null
          versioning: boolean
        }
        Insert: {
          accountability?: string | null
          archive_app_filter?: boolean
          archive_field?: string | null
          archive_value?: string | null
          collapse?: string
          collection: string
          color?: string | null
          display_template?: string | null
          group?: string | null
          hidden?: boolean
          icon?: string | null
          item_duplication_fields?: Json | null
          note?: string | null
          preview_url?: string | null
          singleton?: boolean
          sort?: number | null
          sort_field?: string | null
          translations?: Json | null
          unarchive_value?: string | null
          versioning?: boolean
        }
        Update: {
          accountability?: string | null
          archive_app_filter?: boolean
          archive_field?: string | null
          archive_value?: string | null
          collapse?: string
          collection?: string
          color?: string | null
          display_template?: string | null
          group?: string | null
          hidden?: boolean
          icon?: string | null
          item_duplication_fields?: Json | null
          note?: string | null
          preview_url?: string | null
          singleton?: boolean
          sort?: number | null
          sort_field?: string | null
          translations?: Json | null
          unarchive_value?: string | null
          versioning?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "directus_collections_group_foreign"
            columns: ["group"]
            isOneToOne: false
            referencedRelation: "directus_collections"
            referencedColumns: ["collection"]
          },
        ]
      }
      directus_comments: {
        Row: {
          collection: string
          comment: string
          date_created: string | null
          date_updated: string | null
          id: string
          item: string
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          collection: string
          comment: string
          date_created?: string | null
          date_updated?: string | null
          id: string
          item: string
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          collection?: string
          comment?: string
          date_created?: string | null
          date_updated?: string | null
          id?: string
          item?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_comments_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_comments_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_dashboards: {
        Row: {
          color: string | null
          date_created: string | null
          icon: string
          id: string
          name: string
          note: string | null
          user_created: string | null
        }
        Insert: {
          color?: string | null
          date_created?: string | null
          icon?: string
          id: string
          name: string
          note?: string | null
          user_created?: string | null
        }
        Update: {
          color?: string | null
          date_created?: string | null
          icon?: string
          id?: string
          name?: string
          note?: string | null
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_dashboards_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_extensions: {
        Row: {
          bundle: string | null
          enabled: boolean
          folder: string
          id: string
          source: string
        }
        Insert: {
          bundle?: string | null
          enabled?: boolean
          folder: string
          id: string
          source: string
        }
        Update: {
          bundle?: string | null
          enabled?: boolean
          folder?: string
          id?: string
          source?: string
        }
        Relationships: []
      }
      directus_fields: {
        Row: {
          collection: string
          conditions: Json | null
          display: string | null
          display_options: Json | null
          field: string
          group: string | null
          hidden: boolean
          id: number
          interface: string | null
          note: string | null
          options: Json | null
          readonly: boolean
          required: boolean | null
          searchable: boolean
          sort: number | null
          special: string | null
          translations: Json | null
          validation: Json | null
          validation_message: string | null
          width: string | null
        }
        Insert: {
          collection: string
          conditions?: Json | null
          display?: string | null
          display_options?: Json | null
          field: string
          group?: string | null
          hidden?: boolean
          id?: number
          interface?: string | null
          note?: string | null
          options?: Json | null
          readonly?: boolean
          required?: boolean | null
          searchable?: boolean
          sort?: number | null
          special?: string | null
          translations?: Json | null
          validation?: Json | null
          validation_message?: string | null
          width?: string | null
        }
        Update: {
          collection?: string
          conditions?: Json | null
          display?: string | null
          display_options?: Json | null
          field?: string
          group?: string | null
          hidden?: boolean
          id?: number
          interface?: string | null
          note?: string | null
          options?: Json | null
          readonly?: boolean
          required?: boolean | null
          searchable?: boolean
          sort?: number | null
          special?: string | null
          translations?: Json | null
          validation?: Json | null
          validation_message?: string | null
          width?: string | null
        }
        Relationships: []
      }
      directus_files: {
        Row: {
          charset: string | null
          created_on: string
          description: string | null
          duration: number | null
          embed: string | null
          filename_disk: string | null
          filename_download: string
          filesize: number | null
          focal_point_x: number | null
          focal_point_y: number | null
          folder: string | null
          height: number | null
          id: string
          location: string | null
          metadata: Json | null
          modified_by: string | null
          modified_on: string
          storage: string
          tags: string | null
          title: string | null
          tus_data: Json | null
          tus_id: string | null
          type: string | null
          uploaded_by: string | null
          uploaded_on: string | null
          width: number | null
        }
        Insert: {
          charset?: string | null
          created_on?: string
          description?: string | null
          duration?: number | null
          embed?: string | null
          filename_disk?: string | null
          filename_download: string
          filesize?: number | null
          focal_point_x?: number | null
          focal_point_y?: number | null
          folder?: string | null
          height?: number | null
          id: string
          location?: string | null
          metadata?: Json | null
          modified_by?: string | null
          modified_on?: string
          storage: string
          tags?: string | null
          title?: string | null
          tus_data?: Json | null
          tus_id?: string | null
          type?: string | null
          uploaded_by?: string | null
          uploaded_on?: string | null
          width?: number | null
        }
        Update: {
          charset?: string | null
          created_on?: string
          description?: string | null
          duration?: number | null
          embed?: string | null
          filename_disk?: string | null
          filename_download?: string
          filesize?: number | null
          focal_point_x?: number | null
          focal_point_y?: number | null
          folder?: string | null
          height?: number | null
          id?: string
          location?: string | null
          metadata?: Json | null
          modified_by?: string | null
          modified_on?: string
          storage?: string
          tags?: string | null
          title?: string | null
          tus_data?: Json | null
          tus_id?: string | null
          type?: string | null
          uploaded_by?: string | null
          uploaded_on?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_files_folder_foreign"
            columns: ["folder"]
            isOneToOne: false
            referencedRelation: "directus_folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_files_modified_by_foreign"
            columns: ["modified_by"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_files_uploaded_by_foreign"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_flows: {
        Row: {
          accountability: string | null
          color: string | null
          date_created: string | null
          description: string | null
          icon: string | null
          id: string
          name: string
          operation: string | null
          options: Json | null
          status: string
          trigger: string | null
          user_created: string | null
        }
        Insert: {
          accountability?: string | null
          color?: string | null
          date_created?: string | null
          description?: string | null
          icon?: string | null
          id: string
          name: string
          operation?: string | null
          options?: Json | null
          status?: string
          trigger?: string | null
          user_created?: string | null
        }
        Update: {
          accountability?: string | null
          color?: string | null
          date_created?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          operation?: string | null
          options?: Json | null
          status?: string
          trigger?: string | null
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_flows_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_folders: {
        Row: {
          id: string
          name: string
          parent: string | null
        }
        Insert: {
          id: string
          name: string
          parent?: string | null
        }
        Update: {
          id?: string
          name?: string
          parent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_folders_parent_foreign"
            columns: ["parent"]
            isOneToOne: false
            referencedRelation: "directus_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_migrations: {
        Row: {
          name: string
          timestamp: string | null
          version: string
        }
        Insert: {
          name: string
          timestamp?: string | null
          version: string
        }
        Update: {
          name?: string
          timestamp?: string | null
          version?: string
        }
        Relationships: []
      }
      directus_notifications: {
        Row: {
          collection: string | null
          id: number
          item: string | null
          message: string | null
          recipient: string
          sender: string | null
          status: string | null
          subject: string
          timestamp: string | null
        }
        Insert: {
          collection?: string | null
          id?: number
          item?: string | null
          message?: string | null
          recipient: string
          sender?: string | null
          status?: string | null
          subject: string
          timestamp?: string | null
        }
        Update: {
          collection?: string | null
          id?: number
          item?: string | null
          message?: string | null
          recipient?: string
          sender?: string | null
          status?: string | null
          subject?: string
          timestamp?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_notifications_recipient_foreign"
            columns: ["recipient"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_notifications_sender_foreign"
            columns: ["sender"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_operations: {
        Row: {
          date_created: string | null
          flow: string
          id: string
          key: string
          name: string | null
          options: Json | null
          position_x: number
          position_y: number
          reject: string | null
          resolve: string | null
          type: string
          user_created: string | null
        }
        Insert: {
          date_created?: string | null
          flow: string
          id: string
          key: string
          name?: string | null
          options?: Json | null
          position_x: number
          position_y: number
          reject?: string | null
          resolve?: string | null
          type: string
          user_created?: string | null
        }
        Update: {
          date_created?: string | null
          flow?: string
          id?: string
          key?: string
          name?: string | null
          options?: Json | null
          position_x?: number
          position_y?: number
          reject?: string | null
          resolve?: string | null
          type?: string
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_operations_flow_foreign"
            columns: ["flow"]
            isOneToOne: false
            referencedRelation: "directus_flows"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_operations_reject_foreign"
            columns: ["reject"]
            isOneToOne: true
            referencedRelation: "directus_operations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_operations_resolve_foreign"
            columns: ["resolve"]
            isOneToOne: true
            referencedRelation: "directus_operations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_operations_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_panels: {
        Row: {
          color: string | null
          dashboard: string
          date_created: string | null
          height: number
          icon: string | null
          id: string
          name: string | null
          note: string | null
          options: Json | null
          position_x: number
          position_y: number
          show_header: boolean
          type: string
          user_created: string | null
          width: number
        }
        Insert: {
          color?: string | null
          dashboard: string
          date_created?: string | null
          height: number
          icon?: string | null
          id: string
          name?: string | null
          note?: string | null
          options?: Json | null
          position_x: number
          position_y: number
          show_header?: boolean
          type: string
          user_created?: string | null
          width: number
        }
        Update: {
          color?: string | null
          dashboard?: string
          date_created?: string | null
          height?: number
          icon?: string | null
          id?: string
          name?: string | null
          note?: string | null
          options?: Json | null
          position_x?: number
          position_y?: number
          show_header?: boolean
          type?: string
          user_created?: string | null
          width?: number
        }
        Relationships: [
          {
            foreignKeyName: "directus_panels_dashboard_foreign"
            columns: ["dashboard"]
            isOneToOne: false
            referencedRelation: "directus_dashboards"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_panels_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_permissions: {
        Row: {
          action: string
          collection: string
          fields: string | null
          id: number
          permissions: Json | null
          policy: string
          presets: Json | null
          validation: Json | null
        }
        Insert: {
          action: string
          collection: string
          fields?: string | null
          id?: number
          permissions?: Json | null
          policy: string
          presets?: Json | null
          validation?: Json | null
        }
        Update: {
          action?: string
          collection?: string
          fields?: string | null
          id?: number
          permissions?: Json | null
          policy?: string
          presets?: Json | null
          validation?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_permissions_policy_foreign"
            columns: ["policy"]
            isOneToOne: false
            referencedRelation: "directus_policies"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_policies: {
        Row: {
          admin_access: boolean
          app_access: boolean
          description: string | null
          enforce_tfa: boolean
          icon: string
          id: string
          ip_access: string | null
          name: string
        }
        Insert: {
          admin_access?: boolean
          app_access?: boolean
          description?: string | null
          enforce_tfa?: boolean
          icon?: string
          id: string
          ip_access?: string | null
          name: string
        }
        Update: {
          admin_access?: boolean
          app_access?: boolean
          description?: string | null
          enforce_tfa?: boolean
          icon?: string
          id?: string
          ip_access?: string | null
          name?: string
        }
        Relationships: []
      }
      directus_presets: {
        Row: {
          bookmark: string | null
          collection: string | null
          color: string | null
          filter: Json | null
          icon: string | null
          id: number
          layout: string | null
          layout_options: Json | null
          layout_query: Json | null
          refresh_interval: number | null
          role: string | null
          search: string | null
          user: string | null
        }
        Insert: {
          bookmark?: string | null
          collection?: string | null
          color?: string | null
          filter?: Json | null
          icon?: string | null
          id?: number
          layout?: string | null
          layout_options?: Json | null
          layout_query?: Json | null
          refresh_interval?: number | null
          role?: string | null
          search?: string | null
          user?: string | null
        }
        Update: {
          bookmark?: string | null
          collection?: string | null
          color?: string | null
          filter?: Json | null
          icon?: string | null
          id?: number
          layout?: string | null
          layout_options?: Json | null
          layout_query?: Json | null
          refresh_interval?: number | null
          role?: string | null
          search?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_presets_role_foreign"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_presets_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_relations: {
        Row: {
          id: number
          junction_field: string | null
          many_collection: string
          many_field: string
          one_allowed_collections: string | null
          one_collection: string | null
          one_collection_field: string | null
          one_deselect_action: string
          one_field: string | null
          sort_field: string | null
        }
        Insert: {
          id?: number
          junction_field?: string | null
          many_collection: string
          many_field: string
          one_allowed_collections?: string | null
          one_collection?: string | null
          one_collection_field?: string | null
          one_deselect_action?: string
          one_field?: string | null
          sort_field?: string | null
        }
        Update: {
          id?: number
          junction_field?: string | null
          many_collection?: string
          many_field?: string
          one_allowed_collections?: string | null
          one_collection?: string | null
          one_collection_field?: string | null
          one_deselect_action?: string
          one_field?: string | null
          sort_field?: string | null
        }
        Relationships: []
      }
      directus_revisions: {
        Row: {
          activity: number
          collection: string
          data: Json | null
          delta: Json | null
          id: number
          item: string
          parent: number | null
          version: string | null
        }
        Insert: {
          activity: number
          collection: string
          data?: Json | null
          delta?: Json | null
          id?: number
          item: string
          parent?: number | null
          version?: string | null
        }
        Update: {
          activity?: number
          collection?: string
          data?: Json | null
          delta?: Json | null
          id?: number
          item?: string
          parent?: number | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_revisions_activity_foreign"
            columns: ["activity"]
            isOneToOne: false
            referencedRelation: "directus_activity"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_revisions_parent_foreign"
            columns: ["parent"]
            isOneToOne: false
            referencedRelation: "directus_revisions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_revisions_version_foreign"
            columns: ["version"]
            isOneToOne: false
            referencedRelation: "directus_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_roles: {
        Row: {
          description: string | null
          icon: string
          id: string
          name: string
          parent: string | null
        }
        Insert: {
          description?: string | null
          icon?: string
          id: string
          name: string
          parent?: string | null
        }
        Update: {
          description?: string | null
          icon?: string
          id?: string
          name?: string
          parent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_roles_parent_foreign"
            columns: ["parent"]
            isOneToOne: false
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_sessions: {
        Row: {
          expires: string
          ip: string | null
          next_token: string | null
          origin: string | null
          share: string | null
          token: string
          user: string | null
          user_agent: string | null
        }
        Insert: {
          expires: string
          ip?: string | null
          next_token?: string | null
          origin?: string | null
          share?: string | null
          token: string
          user?: string | null
          user_agent?: string | null
        }
        Update: {
          expires?: string
          ip?: string | null
          next_token?: string | null
          origin?: string | null
          share?: string | null
          token?: string
          user?: string | null
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_sessions_share_foreign"
            columns: ["share"]
            isOneToOne: false
            referencedRelation: "directus_shares"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_sessions_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_settings: {
        Row: {
          ai_anthropic_api_key: string | null
          ai_openai_api_key: string | null
          ai_system_prompt: string | null
          auth_login_attempts: number | null
          auth_password_policy: string | null
          basemaps: Json | null
          custom_aspect_ratios: Json | null
          custom_css: string | null
          default_appearance: string
          default_language: string
          default_theme_dark: string | null
          default_theme_light: string | null
          id: number
          mapbox_key: string | null
          mcp_allow_deletes: boolean
          mcp_enabled: boolean
          mcp_prompts_collection: string | null
          mcp_system_prompt: string | null
          mcp_system_prompt_enabled: boolean
          module_bar: Json | null
          org_name: string | null
          product_updates: boolean | null
          project_color: string
          project_descriptor: string | null
          project_id: string | null
          project_logo: string | null
          project_name: string
          project_owner: string | null
          project_status: string | null
          project_url: string | null
          project_usage: string | null
          public_background: string | null
          public_favicon: string | null
          public_foreground: string | null
          public_note: string | null
          public_registration: boolean
          public_registration_email_filter: Json | null
          public_registration_role: string | null
          public_registration_verify_email: boolean
          report_bug_url: string | null
          report_error_url: string | null
          report_feature_url: string | null
          storage_asset_presets: Json | null
          storage_asset_transform: string | null
          storage_default_folder: string | null
          theme_dark_overrides: Json | null
          theme_light_overrides: Json | null
          visual_editor_urls: Json | null
        }
        Insert: {
          ai_anthropic_api_key?: string | null
          ai_openai_api_key?: string | null
          ai_system_prompt?: string | null
          auth_login_attempts?: number | null
          auth_password_policy?: string | null
          basemaps?: Json | null
          custom_aspect_ratios?: Json | null
          custom_css?: string | null
          default_appearance?: string
          default_language?: string
          default_theme_dark?: string | null
          default_theme_light?: string | null
          id?: number
          mapbox_key?: string | null
          mcp_allow_deletes?: boolean
          mcp_enabled?: boolean
          mcp_prompts_collection?: string | null
          mcp_system_prompt?: string | null
          mcp_system_prompt_enabled?: boolean
          module_bar?: Json | null
          org_name?: string | null
          product_updates?: boolean | null
          project_color?: string
          project_descriptor?: string | null
          project_id?: string | null
          project_logo?: string | null
          project_name?: string
          project_owner?: string | null
          project_status?: string | null
          project_url?: string | null
          project_usage?: string | null
          public_background?: string | null
          public_favicon?: string | null
          public_foreground?: string | null
          public_note?: string | null
          public_registration?: boolean
          public_registration_email_filter?: Json | null
          public_registration_role?: string | null
          public_registration_verify_email?: boolean
          report_bug_url?: string | null
          report_error_url?: string | null
          report_feature_url?: string | null
          storage_asset_presets?: Json | null
          storage_asset_transform?: string | null
          storage_default_folder?: string | null
          theme_dark_overrides?: Json | null
          theme_light_overrides?: Json | null
          visual_editor_urls?: Json | null
        }
        Update: {
          ai_anthropic_api_key?: string | null
          ai_openai_api_key?: string | null
          ai_system_prompt?: string | null
          auth_login_attempts?: number | null
          auth_password_policy?: string | null
          basemaps?: Json | null
          custom_aspect_ratios?: Json | null
          custom_css?: string | null
          default_appearance?: string
          default_language?: string
          default_theme_dark?: string | null
          default_theme_light?: string | null
          id?: number
          mapbox_key?: string | null
          mcp_allow_deletes?: boolean
          mcp_enabled?: boolean
          mcp_prompts_collection?: string | null
          mcp_system_prompt?: string | null
          mcp_system_prompt_enabled?: boolean
          module_bar?: Json | null
          org_name?: string | null
          product_updates?: boolean | null
          project_color?: string
          project_descriptor?: string | null
          project_id?: string | null
          project_logo?: string | null
          project_name?: string
          project_owner?: string | null
          project_status?: string | null
          project_url?: string | null
          project_usage?: string | null
          public_background?: string | null
          public_favicon?: string | null
          public_foreground?: string | null
          public_note?: string | null
          public_registration?: boolean
          public_registration_email_filter?: Json | null
          public_registration_role?: string | null
          public_registration_verify_email?: boolean
          report_bug_url?: string | null
          report_error_url?: string | null
          report_feature_url?: string | null
          storage_asset_presets?: Json | null
          storage_asset_transform?: string | null
          storage_default_folder?: string | null
          theme_dark_overrides?: Json | null
          theme_light_overrides?: Json | null
          visual_editor_urls?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_settings_project_logo_foreign"
            columns: ["project_logo"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_settings_public_background_foreign"
            columns: ["public_background"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_settings_public_favicon_foreign"
            columns: ["public_favicon"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_settings_public_foreground_foreign"
            columns: ["public_foreground"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_settings_public_registration_role_foreign"
            columns: ["public_registration_role"]
            isOneToOne: false
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_settings_storage_default_folder_foreign"
            columns: ["storage_default_folder"]
            isOneToOne: false
            referencedRelation: "directus_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_shares: {
        Row: {
          collection: string
          date_created: string | null
          date_end: string | null
          date_start: string | null
          id: string
          item: string
          max_uses: number | null
          name: string | null
          password: string | null
          role: string | null
          times_used: number | null
          user_created: string | null
        }
        Insert: {
          collection: string
          date_created?: string | null
          date_end?: string | null
          date_start?: string | null
          id: string
          item: string
          max_uses?: number | null
          name?: string | null
          password?: string | null
          role?: string | null
          times_used?: number | null
          user_created?: string | null
        }
        Update: {
          collection?: string
          date_created?: string | null
          date_end?: string | null
          date_start?: string | null
          id?: string
          item?: string
          max_uses?: number | null
          name?: string | null
          password?: string | null
          role?: string | null
          times_used?: number | null
          user_created?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_shares_collection_foreign"
            columns: ["collection"]
            isOneToOne: false
            referencedRelation: "directus_collections"
            referencedColumns: ["collection"]
          },
          {
            foreignKeyName: "directus_shares_role_foreign"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_shares_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_translations: {
        Row: {
          id: string
          key: string
          language: string
          value: string
        }
        Insert: {
          id: string
          key: string
          language: string
          value: string
        }
        Update: {
          id?: string
          key?: string
          language?: string
          value?: string
        }
        Relationships: []
      }
      directus_users: {
        Row: {
          appearance: string | null
          auth_data: Json | null
          avatar: string | null
          description: string | null
          email: string | null
          email_notifications: boolean | null
          external_identifier: string | null
          first_name: string | null
          id: string
          language: string | null
          last_access: string | null
          last_name: string | null
          last_page: string | null
          location: string | null
          newsletter: boolean | null
          password: string | null
          provider: string
          role: string | null
          status: string
          tags: Json | null
          text_direction: string
          tfa_secret: string | null
          theme_dark: string | null
          theme_dark_overrides: Json | null
          theme_light: string | null
          theme_light_overrides: Json | null
          title: string | null
          token: string | null
        }
        Insert: {
          appearance?: string | null
          auth_data?: Json | null
          avatar?: string | null
          description?: string | null
          email?: string | null
          email_notifications?: boolean | null
          external_identifier?: string | null
          first_name?: string | null
          id: string
          language?: string | null
          last_access?: string | null
          last_name?: string | null
          last_page?: string | null
          location?: string | null
          newsletter?: boolean | null
          password?: string | null
          provider?: string
          role?: string | null
          status?: string
          tags?: Json | null
          text_direction?: string
          tfa_secret?: string | null
          theme_dark?: string | null
          theme_dark_overrides?: Json | null
          theme_light?: string | null
          theme_light_overrides?: Json | null
          title?: string | null
          token?: string | null
        }
        Update: {
          appearance?: string | null
          auth_data?: Json | null
          avatar?: string | null
          description?: string | null
          email?: string | null
          email_notifications?: boolean | null
          external_identifier?: string | null
          first_name?: string | null
          id?: string
          language?: string | null
          last_access?: string | null
          last_name?: string | null
          last_page?: string | null
          location?: string | null
          newsletter?: boolean | null
          password?: string | null
          provider?: string
          role?: string | null
          status?: string
          tags?: Json | null
          text_direction?: string
          tfa_secret?: string | null
          theme_dark?: string | null
          theme_dark_overrides?: Json | null
          theme_light?: string | null
          theme_light_overrides?: Json | null
          title?: string | null
          token?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_users_role_foreign"
            columns: ["role"]
            isOneToOne: false
            referencedRelation: "directus_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_versions: {
        Row: {
          collection: string
          date_created: string | null
          date_updated: string | null
          delta: Json | null
          hash: string | null
          id: string
          item: string
          key: string
          name: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          collection: string
          date_created?: string | null
          date_updated?: string | null
          delta?: Json | null
          hash?: string | null
          id: string
          item: string
          key: string
          name?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          collection?: string
          date_created?: string | null
          date_updated?: string | null
          delta?: Json | null
          hash?: string | null
          id?: string
          item?: string
          key?: string
          name?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "directus_versions_collection_foreign"
            columns: ["collection"]
            isOneToOne: false
            referencedRelation: "directus_collections"
            referencedColumns: ["collection"]
          },
          {
            foreignKeyName: "directus_versions_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "directus_versions_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      directus_webhooks: {
        Row: {
          actions: string
          collections: string
          data: boolean
          headers: Json | null
          id: number
          method: string
          migrated_flow: string | null
          name: string
          status: string
          url: string
          was_active_before_deprecation: boolean
        }
        Insert: {
          actions: string
          collections: string
          data?: boolean
          headers?: Json | null
          id?: number
          method?: string
          migrated_flow?: string | null
          name: string
          status?: string
          url: string
          was_active_before_deprecation?: boolean
        }
        Update: {
          actions?: string
          collections?: string
          data?: boolean
          headers?: Json | null
          id?: number
          method?: string
          migrated_flow?: string | null
          name?: string
          status?: string
          url?: string
          was_active_before_deprecation?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "directus_webhooks_migrated_flow_foreign"
            columns: ["migrated_flow"]
            isOneToOne: false
            referencedRelation: "directus_flows"
            referencedColumns: ["id"]
          },
        ]
      }
      emoji_reactions: {
        Row: {
          created_at: string | null
          emoji: string
          id: string
          target_id: string
          target_type: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          emoji: string
          id?: string
          target_id: string
          target_type?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          emoji?: string
          id?: string
          target_id?: string
          target_type?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      engagement_signals: {
        Row: {
          entity_id: number | null
          entity_type: string | null
          id: number
          signal_type: string | null
          ts: string | null
          weight: number | null
        }
        Insert: {
          entity_id?: number | null
          entity_type?: string | null
          id?: number
          signal_type?: string | null
          ts?: string | null
          weight?: number | null
        }
        Update: {
          entity_id?: number | null
          entity_type?: string | null
          id?: number
          signal_type?: string | null
          ts?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      events: {
        Row: {
          address: string | null
          check_in: string | null
          date: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          end_time: string | null
          event_calendar: string | null
          id: number
          image: string | null
          location: string | null
          name: string | null
          postalcode: string | null
          qr_code: string | null
          rsvp_policies: Json | null
          rsvp_status: string | null
          slug: string | null
          sort: number | null
          start_time: string | null
          status: string
          tickets_url: string | null
          type: string | null
          url: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          address?: string | null
          check_in?: string | null
          date?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          end_time?: string | null
          event_calendar?: string | null
          id?: number
          image?: string | null
          location?: string | null
          name?: string | null
          postalcode?: string | null
          qr_code?: string | null
          rsvp_policies?: Json | null
          rsvp_status?: string | null
          slug?: string | null
          sort?: number | null
          start_time?: string | null
          status?: string
          tickets_url?: string | null
          type?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          address?: string | null
          check_in?: string | null
          date?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          end_time?: string | null
          event_calendar?: string | null
          id?: number
          image?: string | null
          location?: string | null
          name?: string | null
          postalcode?: string | null
          qr_code?: string | null
          rsvp_policies?: Json | null
          rsvp_status?: string | null
          slug?: string | null
          sort?: number | null
          start_time?: string | null
          status?: string
          tickets_url?: string | null
          type?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      events_cities: {
        Row: {
          cities_id: number | null
          events_id: number | null
          id: number
        }
        Insert: {
          cities_id?: number | null
          events_id?: number | null
          id?: number
        }
        Update: {
          cities_id?: number | null
          events_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "events_cities_cities_id_foreign"
            columns: ["cities_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_cities_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events_countries: {
        Row: {
          countries_id: number | null
          events_id: number | null
          id: number
        }
        Insert: {
          countries_id?: number | null
          events_id?: number | null
          id?: number
        }
        Update: {
          countries_id?: number | null
          events_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "events_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_countries_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events_coupons: {
        Row: {
          events_id: number | null
          id: number
        }
        Insert: {
          events_id?: number | null
          id?: number
        }
        Update: {
          events_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "events_coupons_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events_directus_users: {
        Row: {
          directus_users_id: string | null
          events_id: number | null
          id: number
        }
        Insert: {
          directus_users_id?: string | null
          events_id?: number | null
          id?: number
        }
        Update: {
          directus_users_id?: string | null
          events_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "events_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_directus_users_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events_files: {
        Row: {
          directus_files_id: string | null
          events_id: number | null
          id: number
        }
        Insert: {
          directus_files_id?: string | null
          events_id?: number | null
          id?: number
        }
        Update: {
          directus_files_id?: string | null
          events_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "events_files_directus_files_id_foreign"
            columns: ["directus_files_id"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_files_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      events_invoices: {
        Row: {
          events_id: number | null
          id: number
          invoices_id: number | null
        }
        Insert: {
          events_id?: number | null
          id?: number
          invoices_id?: number | null
        }
        Update: {
          events_id?: number | null
          id?: number
          invoices_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "events_invoices_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_invoices_invoices_id_foreign"
            columns: ["invoices_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      events_lists: {
        Row: {
          events_id: number | null
          id: number
          lists_id: number | null
        }
        Insert: {
          events_id?: number | null
          id?: number
          lists_id?: number | null
        }
        Update: {
          events_id?: number | null
          id?: number
          lists_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "events_lists_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_lists_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
        ]
      }
      events_posts: {
        Row: {
          events_id: number | null
          id: number
          posts_id: number | null
        }
        Insert: {
          events_id?: number | null
          id?: number
          posts_id?: number | null
        }
        Update: {
          events_id?: number | null
          id?: number
          posts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "events_posts_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_posts_posts_id_foreign"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      events_products: {
        Row: {
          events_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          events_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          events_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "events_products_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      events_states: {
        Row: {
          events_id: number | null
          id: number
          states_id: number | null
        }
        Insert: {
          events_id?: number | null
          id?: number
          states_id?: number | null
        }
        Update: {
          events_id?: number | null
          id?: number
          states_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "events_states_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "events_states_states_id_foreign"
            columns: ["states_id"]
            isOneToOne: false
            referencedRelation: "states"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs: {
        Row: {
          answer: string | null
          creator: string | null
          id: number
          question: string | null
          sort: number | null
          status: string
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          answer?: string | null
          creator?: string | null
          id?: number
          question?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          answer?: string | null
          creator?: string | null
          id?: number
          question?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: []
      }
      faqs_directus_users: {
        Row: {
          directus_users_id: string | null
          faqs_id: number | null
          id: number
        }
        Insert: {
          directus_users_id?: string | null
          faqs_id?: number | null
          id?: number
        }
        Update: {
          directus_users_id?: string | null
          faqs_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "faqs_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faqs_directus_users_faqs_id_foreign"
            columns: ["faqs_id"]
            isOneToOne: false
            referencedRelation: "faqs"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs_files: {
        Row: {
          directus_files_id: string | null
          faqs_id: number | null
          id: number
        }
        Insert: {
          directus_files_id?: string | null
          faqs_id?: number | null
          id?: number
        }
        Update: {
          directus_files_id?: string | null
          faqs_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "faqs_files_faqs_id_foreign"
            columns: ["faqs_id"]
            isOneToOne: false
            referencedRelation: "faqs"
            referencedColumns: ["id"]
          },
        ]
      }
      faqs_products: {
        Row: {
          faqs_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          faqs_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          faqs_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "faqs_products_faqs_id_foreign"
            columns: ["faqs_id"]
            isOneToOne: false
            referencedRelation: "faqs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "faqs_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      federated_spaces: {
        Row: {
          activitypub_url: string | null
          id: number
          last_synced: string | null
          status: string
          syndication_type: string | null
        }
        Insert: {
          activitypub_url?: string | null
          id?: number
          last_synced?: string | null
          status?: string
          syndication_type?: string | null
        }
        Update: {
          activitypub_url?: string | null
          id?: number
          last_synced?: string | null
          status?: string
          syndication_type?: string | null
        }
        Relationships: []
      }
      federated_spaces_spaces: {
        Row: {
          federated_spaces_id: number | null
          id: number
          spaces_id: number | null
        }
        Insert: {
          federated_spaces_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Update: {
          federated_spaces_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "federated_spaces_spaces_federated_spaces_id_foreign"
            columns: ["federated_spaces_id"]
            isOneToOne: false
            referencedRelation: "federated_spaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "federated_spaces_spaces_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      feeds: {
        Row: {
          context_id: string | null
          context_type: string | null
          id: number
          shop: number | null
          updated_at: string | null
          user: string | null
        }
        Insert: {
          context_id?: string | null
          context_type?: string | null
          id?: number
          shop?: number | null
          updated_at?: string | null
          user?: string | null
        }
        Update: {
          context_id?: string | null
          context_type?: string | null
          id?: number
          shop?: number | null
          updated_at?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feeds_shop_foreign"
            columns: ["shop"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      feeds_posts: {
        Row: {
          feed_id: number | null
          id: number
          post_id: number | null
        }
        Insert: {
          feed_id?: number | null
          id?: number
          post_id?: number | null
        }
        Update: {
          feed_id?: number | null
          id?: number
          post_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "feeds_posts_feed_id_foreign"
            columns: ["feed_id"]
            isOneToOne: false
            referencedRelation: "feeds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "feeds_posts_post_id_foreign"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      finance_index: {
        Row: {
          date_created: string | null
          date_updated: string | null
          day_range: string | null
          description: string | null
          id: number
          name: string | null
          previous_close: string | null
          slug: string | null
          sort: number | null
          status: string
          stock_exchange_name: string | null
          stock_up_down: boolean | null
          today_price: string | null
          year_range: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          day_range?: string | null
          description?: string | null
          id?: number
          name?: string | null
          previous_close?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          stock_exchange_name?: string | null
          stock_up_down?: boolean | null
          today_price?: string | null
          year_range?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          day_range?: string | null
          description?: string | null
          id?: number
          name?: string | null
          previous_close?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          stock_exchange_name?: string | null
          stock_up_down?: boolean | null
          today_price?: string | null
          year_range?: string | null
        }
        Relationships: []
      }
      finance_index_articles: {
        Row: {
          articles_id: number | null
          finance_index_id: number | null
          id: number
        }
        Insert: {
          articles_id?: number | null
          finance_index_id?: number | null
          id?: number
        }
        Update: {
          articles_id?: number | null
          finance_index_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "finance_index_articles_articles_id_foreign"
            columns: ["articles_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "finance_index_articles_finance_index_id_foreign"
            columns: ["finance_index_id"]
            isOneToOne: false
            referencedRelation: "finance_index"
            referencedColumns: ["id"]
          },
        ]
      }
      finance_index_currency: {
        Row: {
          currency_id: number | null
          finance_index_id: number | null
          id: number
        }
        Insert: {
          currency_id?: number | null
          finance_index_id?: number | null
          id?: number
        }
        Update: {
          currency_id?: number | null
          finance_index_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "finance_index_currency_currency_id_foreign"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "finance_index_currency_finance_index_id_foreign"
            columns: ["finance_index_id"]
            isOneToOne: false
            referencedRelation: "finance_index"
            referencedColumns: ["id"]
          },
        ]
      }
      finance_index_region: {
        Row: {
          finance_index_id: number | null
          id: number
          region_id: number | null
        }
        Insert: {
          finance_index_id?: number | null
          id?: number
          region_id?: number | null
        }
        Update: {
          finance_index_id?: number | null
          id?: number
          region_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "finance_index_region_finance_index_id_foreign"
            columns: ["finance_index_id"]
            isOneToOne: false
            referencedRelation: "finance_index"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "finance_index_region_region_id_foreign"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
        ]
      }
      followers: {
        Row: {
          follower_id: string | null
          following_id: string | null
          id: number
          profile_followers: string | null
          profile_following: string | null
        }
        Insert: {
          follower_id?: string | null
          following_id?: string | null
          id?: number
          profile_followers?: string | null
          profile_following?: string | null
        }
        Update: {
          follower_id?: string | null
          following_id?: string | null
          id?: number
          profile_followers?: string | null
          profile_following?: string | null
        }
        Relationships: []
      }
      gamification: {
        Row: {
          achievement_type: Json | null
          anniversaries: string | null
          birthdays: string | null
          daily_login_rewards: string | null
          id: number
          leaderboards: string | null
          name: string | null
          nomination_user: string | null
          open_badge_compatible: string | null
          points_type: Json | null
          progress: string | null
          ranks: Json | null
          referrals: string | null
          status: string
          time_based_awards: string | null
          time_limit: string | null
          user_created: string | null
          user_profile: number | null
          user_updated: string | null
        }
        Insert: {
          achievement_type?: Json | null
          anniversaries?: string | null
          birthdays?: string | null
          daily_login_rewards?: string | null
          id?: number
          leaderboards?: string | null
          name?: string | null
          nomination_user?: string | null
          open_badge_compatible?: string | null
          points_type?: Json | null
          progress?: string | null
          ranks?: Json | null
          referrals?: string | null
          status?: string
          time_based_awards?: string | null
          time_limit?: string | null
          user_created?: string | null
          user_profile?: number | null
          user_updated?: string | null
        }
        Update: {
          achievement_type?: Json | null
          anniversaries?: string | null
          birthdays?: string | null
          daily_login_rewards?: string | null
          id?: number
          leaderboards?: string | null
          name?: string | null
          nomination_user?: string | null
          open_badge_compatible?: string | null
          points_type?: Json | null
          progress?: string | null
          ranks?: Json | null
          referrals?: string | null
          status?: string
          time_based_awards?: string | null
          time_limit?: string | null
          user_created?: string | null
          user_profile?: number | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "gamification_anniversaries_foreign"
            columns: ["anniversaries"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_birthdays_foreign"
            columns: ["birthdays"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_leaderboards_foreign"
            columns: ["leaderboards"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_nomination_user_foreign"
            columns: ["nomination_user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_user_profile_foreign"
            columns: ["user_profile"]
            isOneToOne: false
            referencedRelation: "user_profile"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      gamification_directus_users: {
        Row: {
          directus_users_id: string | null
          gamification_id: number | null
          id: number
        }
        Insert: {
          directus_users_id?: string | null
          gamification_id?: number | null
          id?: number
        }
        Update: {
          directus_users_id?: string | null
          gamification_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "gamification_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_directus_users_gamification_id_foreign"
            columns: ["gamification_id"]
            isOneToOne: false
            referencedRelation: "gamification"
            referencedColumns: ["id"]
          },
        ]
      }
      gamification_events: {
        Row: {
          events_id: number | null
          gamification_id: number | null
          id: number
        }
        Insert: {
          events_id?: number | null
          gamification_id?: number | null
          id?: number
        }
        Update: {
          events_id?: number | null
          gamification_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "gamification_events_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_events_gamification_id_foreign"
            columns: ["gamification_id"]
            isOneToOne: false
            referencedRelation: "gamification"
            referencedColumns: ["id"]
          },
        ]
      }
      gamification_notifications: {
        Row: {
          gamification_id: number | null
          id: number
          notifications_id: number | null
        }
        Insert: {
          gamification_id?: number | null
          id?: number
          notifications_id?: number | null
        }
        Update: {
          gamification_id?: number | null
          id?: number
          notifications_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "gamification_notifications_gamification_id_foreign"
            columns: ["gamification_id"]
            isOneToOne: false
            referencedRelation: "gamification"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_notifications_notifications_id_foreign"
            columns: ["notifications_id"]
            isOneToOne: false
            referencedRelation: "notifications"
            referencedColumns: ["id"]
          },
        ]
      }
      gamification_products: {
        Row: {
          gamification_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          gamification_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          gamification_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "gamification_products_gamification_id_foreign"
            columns: ["gamification_id"]
            isOneToOne: false
            referencedRelation: "gamification"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      gamification_videos: {
        Row: {
          gamification_id: number | null
          id: number
          videos_id: number | null
        }
        Insert: {
          gamification_id?: number | null
          id?: number
          videos_id?: number | null
        }
        Update: {
          gamification_id?: number | null
          id?: number
          videos_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "gamification_videos_gamification_id_foreign"
            columns: ["gamification_id"]
            isOneToOne: false
            referencedRelation: "gamification"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "gamification_videos_videos_id_foreign"
            columns: ["videos_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      geo_regions: {
        Row: {
          created_at: string | null
          delivery_sla: string | null
          id: number
          name: string | null
          slug: string | null
        }
        Insert: {
          created_at?: string | null
          delivery_sla?: string | null
          id?: number
          name?: string | null
          slug?: string | null
        }
        Update: {
          created_at?: string | null
          delivery_sla?: string | null
          id?: number
          name?: string | null
          slug?: string | null
        }
        Relationships: []
      }
      geo_regions_cities: {
        Row: {
          cities_id: number | null
          geo_regions_id: number | null
          id: number
        }
        Insert: {
          cities_id?: number | null
          geo_regions_id?: number | null
          id?: number
        }
        Update: {
          cities_id?: number | null
          geo_regions_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "geo_regions_cities_cities_id_foreign"
            columns: ["cities_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "geo_regions_cities_geo_regions_id_foreign"
            columns: ["geo_regions_id"]
            isOneToOne: false
            referencedRelation: "geo_regions"
            referencedColumns: ["id"]
          },
        ]
      }
      geo_regions_countries: {
        Row: {
          countries_id: number | null
          geo_regions_id: number | null
          id: number
        }
        Insert: {
          countries_id?: number | null
          geo_regions_id?: number | null
          id?: number
        }
        Update: {
          countries_id?: number | null
          geo_regions_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "geo_regions_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "geo_regions_countries_geo_regions_id_foreign"
            columns: ["geo_regions_id"]
            isOneToOne: false
            referencedRelation: "geo_regions"
            referencedColumns: ["id"]
          },
        ]
      }
      geo_regions_states: {
        Row: {
          geo_regions_id: number | null
          id: number
          states_id: number | null
        }
        Insert: {
          geo_regions_id?: number | null
          id?: number
          states_id?: number | null
        }
        Update: {
          geo_regions_id?: number | null
          id?: number
          states_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "geo_regions_states_geo_regions_id_foreign"
            columns: ["geo_regions_id"]
            isOneToOne: false
            referencedRelation: "geo_regions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "geo_regions_states_states_id_foreign"
            columns: ["states_id"]
            isOneToOne: false
            referencedRelation: "states"
            referencedColumns: ["id"]
          },
        ]
      }
      incentives: {
        Row: {
          amount: number | null
          date_created: string | null
          date_updated: string | null
          expires_at: string | null
          id: number
          incentive_type: string | null
          metadata: Json | null
          sort: number | null
          status: string
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          date_created?: string | null
          date_updated?: string | null
          expires_at?: string | null
          id?: number
          incentive_type?: string | null
          metadata?: Json | null
          sort?: number | null
          status?: string
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          date_created?: string | null
          date_updated?: string | null
          expires_at?: string | null
          id?: number
          incentive_type?: string | null
          metadata?: Json | null
          sort?: number | null
          status?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "incentives_user_id_foreign"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      incentives_currency: {
        Row: {
          currency_id: number | null
          id: number
          incentives_id: number | null
        }
        Insert: {
          currency_id?: number | null
          id?: number
          incentives_id?: number | null
        }
        Update: {
          currency_id?: number | null
          id?: number
          incentives_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "incentives_currency_currency_id_foreign"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incentives_currency_incentives_id_foreign"
            columns: ["incentives_id"]
            isOneToOne: false
            referencedRelation: "incentives"
            referencedColumns: ["id"]
          },
        ]
      }
      incentives_orders: {
        Row: {
          id: number
          incentives_id: number | null
          orders_id: number | null
        }
        Insert: {
          id?: number
          incentives_id?: number | null
          orders_id?: number | null
        }
        Update: {
          id?: number
          incentives_id?: number | null
          orders_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "incentives_orders_incentives_id_foreign"
            columns: ["incentives_id"]
            isOneToOne: false
            referencedRelation: "incentives"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incentives_orders_orders_id_foreign"
            columns: ["orders_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      incentives_products: {
        Row: {
          id: number
          incentives_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          incentives_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          incentives_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "incentives_products_incentives_id_foreign"
            columns: ["incentives_id"]
            isOneToOne: false
            referencedRelation: "incentives"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incentives_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations: {
        Row: {
          commands: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          developer: string | null
          disclaimers: string | null
          features: Json | null
          id: number
          is_cost: string | null
          name: string | null
          permissions: string | null
          price: number | null
          publisher_info: string | null
          ratings: string | null
          sort: number | null
          status: string
          system_requirements: Json | null
          terms: string | null
          type: string | null
          url: string | null
          user_created: string | null
          user_updated: string | null
          version: string | null
          warnings: string | null
        }
        Insert: {
          commands?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          developer?: string | null
          disclaimers?: string | null
          features?: Json | null
          id?: number
          is_cost?: string | null
          name?: string | null
          permissions?: string | null
          price?: number | null
          publisher_info?: string | null
          ratings?: string | null
          sort?: number | null
          status?: string
          system_requirements?: Json | null
          terms?: string | null
          type?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
          version?: string | null
          warnings?: string | null
        }
        Update: {
          commands?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          developer?: string | null
          disclaimers?: string | null
          features?: Json | null
          id?: number
          is_cost?: string | null
          name?: string | null
          permissions?: string | null
          price?: number | null
          publisher_info?: string | null
          ratings?: string | null
          sort?: number | null
          status?: string
          system_requirements?: Json | null
          terms?: string | null
          type?: string | null
          url?: string | null
          user_created?: string | null
          user_updated?: string | null
          version?: string | null
          warnings?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_attributes: {
        Row: {
          attributes_id: number | null
          id: number
          integrations_id: number | null
        }
        Insert: {
          attributes_id?: number | null
          id?: number
          integrations_id?: number | null
        }
        Update: {
          attributes_id?: number | null
          id?: number
          integrations_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_attributes_attributes_id_foreign"
            columns: ["attributes_id"]
            isOneToOne: false
            referencedRelation: "attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_attributes_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_categories: {
        Row: {
          categories_id: number | null
          id: number
          integrations_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          integrations_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          integrations_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_categories_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_departments: {
        Row: {
          departments_id: number | null
          id: number
          integrations_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          integrations_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          integrations_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_departments_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_files: {
        Row: {
          directus_files_id: string | null
          id: number
          integrations_id: number | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          integrations_id?: number | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          integrations_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_files_directus_files_id_foreign"
            columns: ["directus_files_id"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_files_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_platform: {
        Row: {
          id: number
          integrations_id: number | null
          platform_id: number | null
        }
        Insert: {
          id?: number
          integrations_id?: number | null
          platform_id?: number | null
        }
        Update: {
          id?: number
          integrations_id?: number | null
          platform_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_platform_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_platform_platform_id_foreign"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_product_types: {
        Row: {
          id: number
          integrations_id: number | null
          product_types_id: number | null
        }
        Insert: {
          id?: number
          integrations_id?: number | null
          product_types_id?: number | null
        }
        Update: {
          id?: number
          integrations_id?: number | null
          product_types_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_product_types_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_product_types_product_types_id_foreign"
            columns: ["product_types_id"]
            isOneToOne: false
            referencedRelation: "product_types"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_ratings: {
        Row: {
          id: number
          integrations_id: number | null
          ratings_id: number | null
        }
        Insert: {
          id?: number
          integrations_id?: number | null
          ratings_id?: number | null
        }
        Update: {
          id?: number
          integrations_id?: number | null
          ratings_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_ratings_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_ratings_ratings_id_foreign"
            columns: ["ratings_id"]
            isOneToOne: false
            referencedRelation: "ratings"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_report: {
        Row: {
          id: number
          integrations_id: number | null
          report_id: number | null
        }
        Insert: {
          id?: number
          integrations_id?: number | null
          report_id?: number | null
        }
        Update: {
          id?: number
          integrations_id?: number | null
          report_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_report_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_report_report_id_foreign"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "report"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_spaces: {
        Row: {
          id: number
          integrations_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          integrations_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          integrations_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_spaces_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_spaces_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      integrations_tags: {
        Row: {
          id: number
          integrations_id: number | null
          tags_id: number | null
        }
        Insert: {
          id?: number
          integrations_id?: number | null
          tags_id?: number | null
        }
        Update: {
          id?: number
          integrations_id?: number | null
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "integrations_tags_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "integrations_tags_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory_lots: {
        Row: {
          batch: string | null
          created_at: string | null
          expires_at: string | null
          id: number
          location_id: number | null
          qty: number | null
        }
        Insert: {
          batch?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: number
          location_id?: number | null
          qty?: number | null
        }
        Update: {
          batch?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: number
          location_id?: number | null
          qty?: number | null
        }
        Relationships: []
      }
      invoices: {
        Row: {
          base_currency_code: string | null
          base_discount_amount: number | null
          base_discount_tax_compensation_amount: number | null
          base_grand_total: number | null
          base_shipping_amount: number | null
          base_shipping_discount_tax_compensation_amnt: number | null
          base_shipping_incl_tax: number | null
          base_shipping_tax_amount: number | null
          base_subtotal: number | null
          base_subtotal_incl_tax: number | null
          base_tax_amount: number | null
          base_to_global_rate: number | null
          base_to_order_rate: number | null
          base_total_refunded: number | null
          can_void_flag: number | null
          created_at: string | null
          discount_amount: number | null
          discount_description: string | null
          discount_tax_compensation_amount: number | null
          email_sent: number | null
          entity_id: number | null
          global_currency_code: string | null
          grand_total: number | null
          id: number
          increment_id: string | null
          is_used_for_refund: number | null
          order_currency_code: string | null
          payment_period: string | null
          plan: string | null
          service_period: string | null
          shipping_amount: number | null
          shipping_discount_tax_compensation_amount: number | null
          shipping_incl_tax: number | null
          shipping_tax_amount: number | null
          state: number | null
          store_currency_code: string | null
          store_id: number | null
          store_to_base_rate: number | null
          store_to_order_rate: number | null
          subtotal: number | null
          subtotal_incl_tax: number | null
          tax_amount: number | null
          total_qty: number | null
          updated_at: string | null
          user: string | null
        }
        Insert: {
          base_currency_code?: string | null
          base_discount_amount?: number | null
          base_discount_tax_compensation_amount?: number | null
          base_grand_total?: number | null
          base_shipping_amount?: number | null
          base_shipping_discount_tax_compensation_amnt?: number | null
          base_shipping_incl_tax?: number | null
          base_shipping_tax_amount?: number | null
          base_subtotal?: number | null
          base_subtotal_incl_tax?: number | null
          base_tax_amount?: number | null
          base_to_global_rate?: number | null
          base_to_order_rate?: number | null
          base_total_refunded?: number | null
          can_void_flag?: number | null
          created_at?: string | null
          discount_amount?: number | null
          discount_description?: string | null
          discount_tax_compensation_amount?: number | null
          email_sent?: number | null
          entity_id?: number | null
          global_currency_code?: string | null
          grand_total?: number | null
          id?: number
          increment_id?: string | null
          is_used_for_refund?: number | null
          order_currency_code?: string | null
          payment_period?: string | null
          plan?: string | null
          service_period?: string | null
          shipping_amount?: number | null
          shipping_discount_tax_compensation_amount?: number | null
          shipping_incl_tax?: number | null
          shipping_tax_amount?: number | null
          state?: number | null
          store_currency_code?: string | null
          store_id?: number | null
          store_to_base_rate?: number | null
          store_to_order_rate?: number | null
          subtotal?: number | null
          subtotal_incl_tax?: number | null
          tax_amount?: number | null
          total_qty?: number | null
          updated_at?: string | null
          user?: string | null
        }
        Update: {
          base_currency_code?: string | null
          base_discount_amount?: number | null
          base_discount_tax_compensation_amount?: number | null
          base_grand_total?: number | null
          base_shipping_amount?: number | null
          base_shipping_discount_tax_compensation_amnt?: number | null
          base_shipping_incl_tax?: number | null
          base_shipping_tax_amount?: number | null
          base_subtotal?: number | null
          base_subtotal_incl_tax?: number | null
          base_tax_amount?: number | null
          base_to_global_rate?: number | null
          base_to_order_rate?: number | null
          base_total_refunded?: number | null
          can_void_flag?: number | null
          created_at?: string | null
          discount_amount?: number | null
          discount_description?: string | null
          discount_tax_compensation_amount?: number | null
          email_sent?: number | null
          entity_id?: number | null
          global_currency_code?: string | null
          grand_total?: number | null
          id?: number
          increment_id?: string | null
          is_used_for_refund?: number | null
          order_currency_code?: string | null
          payment_period?: string | null
          plan?: string | null
          service_period?: string | null
          shipping_amount?: number | null
          shipping_discount_tax_compensation_amount?: number | null
          shipping_incl_tax?: number | null
          shipping_tax_amount?: number | null
          state?: number | null
          store_currency_code?: string | null
          store_id?: number | null
          store_to_base_rate?: number | null
          store_to_order_rate?: number | null
          subtotal?: number | null
          subtotal_incl_tax?: number | null
          tax_amount?: number | null
          total_qty?: number | null
          updated_at?: string | null
          user?: string | null
        }
        Relationships: []
      }
      invoices_address: {
        Row: {
          address_id: number | null
          id: number
          invoice_id: number | null
        }
        Insert: {
          address_id?: number | null
          id?: number
          invoice_id?: number | null
        }
        Update: {
          address_id?: number | null
          id?: number
          invoice_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_address_address_id_foreign"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_address_invoice_id_foreign"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices_orders: {
        Row: {
          id: number
          invoice_id: number | null
          order_id: number | null
        }
        Insert: {
          id?: number
          invoice_id?: number | null
          order_id?: number | null
        }
        Update: {
          id?: number
          invoice_id?: number | null
          order_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_orders_invoice_id_foreign"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_orders_order_id_foreign"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices_shipping_address: {
        Row: {
          id: number
          invoice_id: number | null
          shipping_address_id: number | null
        }
        Insert: {
          id?: number
          invoice_id?: number | null
          shipping_address_id?: number | null
        }
        Update: {
          id?: number
          invoice_id?: number | null
          shipping_address_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "invoices_shipping_address_invoice_id_foreign"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "invoices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_shipping_address_shipping_address_id_foreign"
            columns: ["shipping_address_id"]
            isOneToOne: false
            referencedRelation: "shipping_address"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices_transactions: {
        Row: {
          id: number
          invoice_id: number | null
          transaction_id: number | null
        }
        Insert: {
          id?: number
          invoice_id?: number | null
          transaction_id?: number | null
        }
        Update: {
          id?: number
          invoice_id?: number | null
          transaction_id?: number | null
        }
        Relationships: []
      }
      list_items: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          due_date: string | null
          id: number
          is_checked: boolean | null
          link: string | null
          list_id: number | null
          media: string | null
          position: number | null
          post_id: number | null
          priority: string | null
          slug: string | null
          status: string | null
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          is_checked?: boolean | null
          link?: string | null
          list_id?: number | null
          media?: string | null
          position?: number | null
          post_id?: number | null
          priority?: string | null
          slug?: string | null
          status?: string | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          due_date?: string | null
          id?: number
          is_checked?: boolean | null
          link?: string | null
          list_id?: number | null
          media?: string | null
          position?: number | null
          post_id?: number | null
          priority?: string | null
          slug?: string | null
          status?: string | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "list_items_list_id_foreign"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "list_items_media_foreign"
            columns: ["media"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "list_items_post_id_foreign"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "list_items_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "list_items_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      list_items_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          list_items_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          list_items_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          list_items_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "list_items_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "list_items_directus_users_list_items_id_foreign"
            columns: ["list_items_id"]
            isOneToOne: false
            referencedRelation: "list_items"
            referencedColumns: ["id"]
          },
        ]
      }
      list_items_products: {
        Row: {
          id: number
          list_items_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          list_items_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          list_items_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "list_items_products_list_items_id_foreign"
            columns: ["list_items_id"]
            isOneToOne: false
            referencedRelation: "list_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "list_items_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      list_products: {
        Row: {
          date_created: string | null
          id: number
          product_sku: string | null
          quantity: number | null
        }
        Insert: {
          date_created?: string | null
          id?: number
          product_sku?: string | null
          quantity?: number | null
        }
        Update: {
          date_created?: string | null
          id?: number
          product_sku?: string | null
          quantity?: number | null
        }
        Relationships: []
      }
      list_products_lists: {
        Row: {
          id: number
          list_products_id: number | null
          lists_id: number | null
        }
        Insert: {
          id?: number
          list_products_id?: number | null
          lists_id?: number | null
        }
        Update: {
          id?: number
          list_products_id?: number | null
          lists_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "list_products_lists_list_products_id_foreign"
            columns: ["list_products_id"]
            isOneToOne: false
            referencedRelation: "list_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "list_products_lists_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
        ]
      }
      lists: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          favorite: string | null
          id: number
          image: string | null
          name: string | null
          priority: string | null
          product_sku: Json | null
          progress: number | null
          slug: string | null
          sort: number | null
          status: string | null
          type: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          favorite?: string | null
          id?: number
          image?: string | null
          name?: string | null
          priority?: string | null
          product_sku?: Json | null
          progress?: number | null
          slug?: string | null
          sort?: number | null
          status?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          favorite?: string | null
          id?: number
          image?: string | null
          name?: string | null
          priority?: string | null
          product_sku?: Json | null
          progress?: number | null
          slug?: string | null
          sort?: number | null
          status?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: []
      }
      lists_categories: {
        Row: {
          categories_id: number | null
          id: number
          lists_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          lists_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          lists_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_categories_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_departments: {
        Row: {
          departments_id: number | null
          id: number
          lists_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          lists_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          lists_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_departments_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_directus_users: {
        Row: {
          id: number
          list_id: number | null
          user_id: string | null
        }
        Insert: {
          id?: number
          list_id?: number | null
          user_id?: string | null
        }
        Update: {
          id?: number
          list_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_directus_users_list_id_foreign"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_files: {
        Row: {
          directus_files_id: string | null
          id: number
          lists_id: number | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          lists_id?: number | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          lists_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_files_directus_files_id_foreign"
            columns: ["directus_files_id"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_files_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_products: {
        Row: {
          id: number
          lists_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          lists_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          lists_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_products_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_shorts: {
        Row: {
          id: number
          lists_id: number | null
          shorts_id: number | null
        }
        Insert: {
          id?: number
          lists_id?: number | null
          shorts_id?: number | null
        }
        Update: {
          id?: number
          lists_id?: number | null
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_shorts_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_shorts_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_template: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          icon: string | null
          id: number
          status: string
          theme: string | null
          title: string | null
          type: string | null
          user_created: string | null
          user_updated: string | null
          visibility: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          icon?: string | null
          id?: number
          status?: string
          theme?: string | null
          title?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
          visibility?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          icon?: string | null
          id?: number
          status?: string
          theme?: string | null
          title?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
          visibility?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_template_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_template_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_template_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          lists_template_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          lists_template_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          lists_template_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_template_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_template_directus_users_lists_template_id_foreign"
            columns: ["lists_template_id"]
            isOneToOne: false
            referencedRelation: "lists_template"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_template_list_items: {
        Row: {
          id: number
          list_items_id: number | null
          lists_template_id: number | null
        }
        Insert: {
          id?: number
          list_items_id?: number | null
          lists_template_id?: number | null
        }
        Update: {
          id?: number
          list_items_id?: number | null
          lists_template_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_template_list_items_list_items_id_foreign"
            columns: ["list_items_id"]
            isOneToOne: false
            referencedRelation: "list_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_template_list_items_lists_template_id_foreign"
            columns: ["lists_template_id"]
            isOneToOne: false
            referencedRelation: "lists_template"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_template_tags: {
        Row: {
          id: number
          lists_template_id: number | null
          tags_id: number | null
        }
        Insert: {
          id?: number
          lists_template_id?: number | null
          tags_id?: number | null
        }
        Update: {
          id?: number
          lists_template_id?: number | null
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_template_tags_lists_template_id_foreign"
            columns: ["lists_template_id"]
            isOneToOne: false
            referencedRelation: "lists_template"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_template_tags_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_templates: {
        Row: {
          id: number
          lists_id: number | null
          templates_id: number | null
        }
        Insert: {
          id?: number
          lists_id?: number | null
          templates_id?: number | null
        }
        Update: {
          id?: number
          lists_id?: number | null
          templates_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_templates_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_templates_templates_id_foreign"
            columns: ["templates_id"]
            isOneToOne: false
            referencedRelation: "templates"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_type: {
        Row: {
          category: string | null
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
          sort: number | null
          status: string
          user_created: string | null
          user_updated: string | null
          visibility: string | null
        }
        Insert: {
          category?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
          visibility?: string | null
        }
        Update: {
          category?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
          visibility?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_type_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_type_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_type_categories: {
        Row: {
          categories_id: number | null
          id: number
          lists_type_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          lists_type_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          lists_type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_type_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_type_categories_lists_type_id_foreign"
            columns: ["lists_type_id"]
            isOneToOne: false
            referencedRelation: "lists_type"
            referencedColumns: ["id"]
          },
        ]
      }
      lists_type_lists: {
        Row: {
          id: number
          lists_id: number | null
          lists_type_id: number | null
        }
        Insert: {
          id?: number
          lists_id?: number | null
          lists_type_id?: number | null
        }
        Update: {
          id?: number
          lists_id?: number | null
          lists_type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "lists_type_lists_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lists_type_lists_lists_type_id_foreign"
            columns: ["lists_type_id"]
            isOneToOne: false
            referencedRelation: "lists_type"
            referencedColumns: ["id"]
          },
        ]
      }
      manufacturer: {
        Row: {
          code: string | null
          created_at: string | null
          description: string | null
          id: number
          image: string | null
          isPublic: boolean | null
          name: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          isPublic?: boolean | null
          name?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          image?: string | null
          isPublic?: boolean | null
          name?: string | null
        }
        Relationships: []
      }
      manufacturer_countries: {
        Row: {
          countries_id: number | null
          id: number
          manufacturer_id: number | null
        }
        Insert: {
          countries_id?: number | null
          id?: number
          manufacturer_id?: number | null
        }
        Update: {
          countries_id?: number | null
          id?: number
          manufacturer_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "manufacturer_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "manufacturer_countries_manufacturer_id_foreign"
            columns: ["manufacturer_id"]
            isOneToOne: false
            referencedRelation: "manufacturer"
            referencedColumns: ["id"]
          },
        ]
      }
      media: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          name: string | null
          profile_id: string | null
          sort: number | null
          status: string
          user: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          name?: string | null
          profile_id?: string | null
          sort?: number | null
          status?: string
          user?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          name?: string | null
          profile_id?: string | null
          sort?: number | null
          status?: string
          user?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_profile_id_foreign"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      media_files: {
        Row: {
          directus_files_id: string | null
          id: number
          media_id: number | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          media_id?: number | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          media_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "media_files_directus_files_id_foreign"
            columns: ["directus_files_id"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_files_media_id_foreign"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
        ]
      }
      media_folders: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
          parent_folder: number | null
          sort: number | null
          status: string
          user: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          parent_folder?: number | null
          sort?: number | null
          status?: string
          user?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          parent_folder?: number | null
          sort?: number | null
          status?: string
          user?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_folders_parent_folder_foreign"
            columns: ["parent_folder"]
            isOneToOne: false
            referencedRelation: "media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_folders_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_folders_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_folders_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      media_folders_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          media_folders_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          media_folders_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          media_folders_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "media_folders_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_folders_directus_users_media_folders_id_foreign"
            columns: ["media_folders_id"]
            isOneToOne: false
            referencedRelation: "media_folders"
            referencedColumns: ["id"]
          },
        ]
      }
      meeovistores: {
        Row: {
          color: string | null
          colortext: string | null
          content: string | null
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
          slug: string | null
          sort: number | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          color?: string | null
          colortext?: string | null
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          sort?: number | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          color?: string | null
          colortext?: string | null
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          slug?: string | null
          sort?: number | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: []
      }
      meilisearch_settings: {
        Row: {
          api_key: string | null
          collections_configuration: Json | null
          date_created: string | null
          date_updated: string | null
          host: string | null
          id: number
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          api_key?: string | null
          collections_configuration?: Json | null
          date_created?: string | null
          date_updated?: string | null
          host?: string | null
          id?: number
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          api_key?: string | null
          collections_configuration?: Json | null
          date_created?: string | null
          date_updated?: string | null
          host?: string | null
          id?: number
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: []
      }
      member_groups_events: {
        Row: {
          events_id: number | null
          id: number
        }
        Insert: {
          events_id?: number | null
          id?: number
        }
        Update: {
          events_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "member_groups_events_events_id_foreign"
            columns: ["events_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
      }
      member_groups_polls: {
        Row: {
          id: number
          polls_id: number | null
        }
        Insert: {
          id?: number
          polls_id?: number | null
        }
        Update: {
          id?: number
          polls_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "member_groups_polls_polls_id_foreign"
            columns: ["polls_id"]
            isOneToOne: false
            referencedRelation: "polls"
            referencedColumns: ["id"]
          },
        ]
      }
      member_groups_posts: {
        Row: {
          id: number
          posts_id: number | null
        }
        Insert: {
          id?: number
          posts_id?: number | null
        }
        Update: {
          id?: number
          posts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "member_groups_posts_posts_id_foreign"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      member_groups_products: {
        Row: {
          id: number
          products_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "member_groups_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      member_groups_space_members: {
        Row: {
          id: number
        }
        Insert: {
          id?: number
        }
        Update: {
          id?: number
        }
        Relationships: []
      }
      merch_recipes: {
        Row: {
          constraints_json: Json | null
          created_at: string | null
          department_id: number | null
          id: number
          inputs_json: Json | null
          output_slots: Json | null
        }
        Insert: {
          constraints_json?: Json | null
          created_at?: string | null
          department_id?: number | null
          id?: number
          inputs_json?: Json | null
          output_slots?: Json | null
        }
        Update: {
          constraints_json?: Json | null
          created_at?: string | null
          department_id?: number | null
          id?: number
          inputs_json?: Json | null
          output_slots?: Json | null
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string | null
          date_created: string | null
          date_updated: string | null
          id: number
          sort: number | null
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          sort?: number | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          sort?: number | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: []
      }
      moments: {
        Row: {
          content: string | null
          date_created: string | null
          id: number
          status: string
          type: string | null
        }
        Insert: {
          content?: string | null
          date_created?: string | null
          id?: number
          status?: string
          type?: string | null
        }
        Update: {
          content?: string | null
          date_created?: string | null
          id?: number
          status?: string
          type?: string | null
        }
        Relationships: []
      }
      moments_products: {
        Row: {
          id: number
          moments_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          moments_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          moments_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "moments_products_moments_id_foreign"
            columns: ["moments_id"]
            isOneToOne: false
            referencedRelation: "moments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "moments_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      moments_spaces: {
        Row: {
          id: number
          moments_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          moments_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          moments_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "moments_spaces_moments_id_foreign"
            columns: ["moments_id"]
            isOneToOne: false
            referencedRelation: "moments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "moments_spaces_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      musicchart: {
        Row: {
          award: string | null
          color: string | null
          creator: string | null
          current_sales: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          first_appearance: string | null
          id: number
          image: string | null
          last_week: string | null
          name: string | null
          peak_position: string | null
          previous_position: string | null
          previous_sales: string | null
          seller: string | null
          sort: number | null
          status: string
          this_week: string | null
          trend: string | null
          type: string | null
          user_created: string | null
          user_updated: string | null
          weeks_on_chart: string | null
        }
        Insert: {
          award?: string | null
          color?: string | null
          creator?: string | null
          current_sales?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          first_appearance?: string | null
          id?: number
          image?: string | null
          last_week?: string | null
          name?: string | null
          peak_position?: string | null
          previous_position?: string | null
          previous_sales?: string | null
          seller?: string | null
          sort?: number | null
          status?: string
          this_week?: string | null
          trend?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
          weeks_on_chart?: string | null
        }
        Update: {
          award?: string | null
          color?: string | null
          creator?: string | null
          current_sales?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          first_appearance?: string | null
          id?: number
          image?: string | null
          last_week?: string | null
          name?: string | null
          peak_position?: string | null
          previous_position?: string | null
          previous_sales?: string | null
          seller?: string | null
          sort?: number | null
          status?: string
          this_week?: string | null
          trend?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
          weeks_on_chart?: string | null
        }
        Relationships: []
      }
      musicchart_departments: {
        Row: {
          departments_id: number | null
          id: number
        }
        Insert: {
          departments_id?: number | null
          id?: number
        }
        Update: {
          departments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "musicchart_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      navigation: {
        Row: {
          color: string | null
          colortext: string | null
          custom_tabs: Json | null
          description: string | null
          id: number
          image: string | null
          menus: Json | null
          name: string | null
          submenus: Json | null
          type: string | null
          url: string | null
        }
        Insert: {
          color?: string | null
          colortext?: string | null
          custom_tabs?: Json | null
          description?: string | null
          id?: number
          image?: string | null
          menus?: Json | null
          name?: string | null
          submenus?: Json | null
          type?: string | null
          url?: string | null
        }
        Update: {
          color?: string | null
          colortext?: string | null
          custom_tabs?: Json | null
          description?: string | null
          id?: number
          image?: string | null
          menus?: Json | null
          name?: string | null
          submenus?: Json | null
          type?: string | null
          url?: string | null
        }
        Relationships: []
      }
      navigation_pages: {
        Row: {
          id: number
          navigation_id: number | null
          pages_id: number | null
        }
        Insert: {
          id?: number
          navigation_id?: number | null
          pages_id?: number | null
        }
        Update: {
          id?: number
          navigation_id?: number | null
          pages_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "navigation_pages_navigation_id_foreign"
            columns: ["navigation_id"]
            isOneToOne: false
            referencedRelation: "navigation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "navigation_pages_pages_id_foreign"
            columns: ["pages_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      navigation_websites: {
        Row: {
          id: number
          navigation_id: number | null
          websites_id: number | null
        }
        Insert: {
          id?: number
          navigation_id?: number | null
          websites_id?: number | null
        }
        Update: {
          id?: number
          navigation_id?: number | null
          websites_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "navigation_websites_navigation_id_foreign"
            columns: ["navigation_id"]
            isOneToOne: false
            referencedRelation: "navigation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "navigation_websites_websites_id_foreign"
            columns: ["websites_id"]
            isOneToOne: false
            referencedRelation: "websites"
            referencedColumns: ["id"]
          },
        ]
      }
      newsletters: {
        Row: {
          created_at: string | null
          email: string
          first_name: string | null
          id: number
          last_name: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: number
          last_name?: string | null
          status?: string | null
        }
        Relationships: []
      }
      notifications: {
        Row: {
          content: string | null
          date_created: string | null
          date_updated: string | null
          id: number
          image: string | null
          is_read: boolean | null
          payload: Json | null
          recipient: string | null
          type: string | null
        }
        Insert: {
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          image?: string | null
          is_read?: boolean | null
          payload?: Json | null
          recipient?: string | null
          type?: string | null
        }
        Update: {
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          image?: string | null
          is_read?: boolean | null
          payload?: Json | null
          recipient?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notifications_recipient_foreign"
            columns: ["recipient"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items: {
        Row: {
          id: number
          price: number | null
          quantity: number | null
        }
        Insert: {
          id?: number
          price?: number | null
          quantity?: number | null
        }
        Update: {
          id?: number
          price?: number | null
          quantity?: number | null
        }
        Relationships: []
      }
      order_items_orders: {
        Row: {
          id: number
          order_items_id: number | null
          orders_id: number | null
        }
        Insert: {
          id?: number
          order_items_id?: number | null
          orders_id?: number | null
        }
        Update: {
          id?: number
          order_items_id?: number | null
          orders_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_orders_order_items_id_foreign"
            columns: ["order_items_id"]
            isOneToOne: false
            referencedRelation: "order_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_orders_orders_id_foreign"
            columns: ["orders_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      order_items_products: {
        Row: {
          id: number
          order_items_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          order_items_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          order_items_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "order_items_products_order_items_id_foreign"
            columns: ["order_items_id"]
            isOneToOne: false
            referencedRelation: "order_items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          adjustment_negative: number | null
          adjustment_positive: number | null
          applied_rule_ids: string | null
          base_adjustment_negative: number | null
          base_adjustment_positive: number | null
          base_currency_code: string | null
          base_discount_amount: number | null
          base_discount_canceled: number | null
          base_discount_invoiced: number | null
          base_discount_refunded: number | null
          base_discount_tax_compensation_amount: number | null
          base_discount_tax_compensation_invoiced: number | null
          base_discount_tax_compensation_refunded: number | null
          base_grand_total: number | null
          base_shipping_amount: number | null
          base_shipping_canceled: number | null
          base_shipping_discount_amount: number | null
          base_shipping_discount_tax_compensation_amnt: number | null
          base_shipping_incl_tax: number | null
          base_shipping_invoiced: number | null
          base_shipping_refunded: number | null
          base_shipping_tax_amount: number | null
          base_shipping_tax_refunded: number | null
          base_subtotal: number | null
          base_subtotal_canceled: number | null
          base_subtotal_incl_tax: number | null
          base_subtotal_invoiced: number | null
          base_subtotal_refunded: number | null
          base_tax_amount: number | null
          base_tax_canceled: number | null
          base_tax_invoiced: number | null
          base_tax_refunded: number | null
          base_to_global_rate: number | null
          base_to_order_rate: number | null
          base_total_canceled: number | null
          base_total_due: number | null
          base_total_invoiced: number | null
          base_total_invoiced_cost: number | null
          base_total_offline_refunded: number | null
          base_total_online_refunded: number | null
          base_total_paid: number | null
          base_total_qty_ordered: number | null
          base_total_refunded: number | null
          billing_address_id: number | null
          can_ship_partially: number | null
          can_ship_partially_item: number | null
          coupon_code: string | null
          customer_dob: string | null
          customer_email: string | null
          customer_firstname: string | null
          customer_gender: number | null
          customer_group_id: number | null
          customer_id: number | null
          customer_is_guest: number | null
          customer_lastname: string | null
          customer_middlename: string | null
          customer_note: string | null
          customer_note_notify: number | null
          customer_prefix: string | null
          customer_suffix: string | null
          customer_taxvat: string | null
          date_created: string | null
          date_updated: string | null
          discount_amount: number | null
          discount_canceled: number | null
          discount_description: string | null
          discount_invoiced: number | null
          discount_refunded: number | null
          discount_tax_compensation_amount: number | null
          discount_tax_compensation_invoiced: number | null
          discount_tax_compensation_refunded: number | null
          edit_increment: number | null
          email_sent: number | null
          entity_id: number | null
          ext_customer_id: string | null
          ext_order_id: string | null
          forced_shipment_with_invoice: number | null
          global_currency_code: string | null
          grand_total: number | null
          hold_before_state: string | null
          hold_before_status: string | null
          id: number
          increment_id: string | null
          is_virtual: number | null
          order_currency_code: string | null
          original_increment_id: string | null
          payment_auth_expiration: number | null
          payment_authorization_amount: number | null
          payment_status: string | null
          protect_code: string | null
          quote_address_id: number | null
          quote_id: number | null
          relation_child_id: string | null
          relation_child_real_id: string | null
          relation_parent_id: string | null
          relation_parent_real_id: string | null
          remote_ip: string | null
          shipping_amount: number | null
          shipping_canceled: number | null
          shipping_description: string | null
          shipping_discount_amount: number | null
          shipping_discount_tax_compensation_amount: number | null
          shipping_incl_tax: number | null
          shipping_invoiced: number | null
          shipping_refunded: number | null
          shipping_tax_amount: number | null
          shipping_tax_refunded: number | null
          state: string | null
          status: string
          store_currency_code: string | null
          store_id: number | null
          store_name: string | null
          store_to_base_rate: number | null
          store_to_order_rate: number | null
          subtotal: number | null
          subtotal_canceled: number | null
          subtotal_incl_tax: number | null
          subtotal_invoiced: number | null
          subtotal_refunded: number | null
          tax_amount: number | null
          tax_canceled: number | null
          tax_invoiced: number | null
          tax_refunded: number | null
          total_canceled: number | null
          total_due: number | null
          total_invoiced: number | null
          total_item_count: number | null
          total_offline_refunded: number | null
          total_online_refunded: number | null
          total_paid: number | null
          total_qty_ordered: number | null
          total_refunded: number | null
          type: string | null
          user_id: string | null
          weight: number | null
          x_forwarded_for: string | null
        }
        Insert: {
          adjustment_negative?: number | null
          adjustment_positive?: number | null
          applied_rule_ids?: string | null
          base_adjustment_negative?: number | null
          base_adjustment_positive?: number | null
          base_currency_code?: string | null
          base_discount_amount?: number | null
          base_discount_canceled?: number | null
          base_discount_invoiced?: number | null
          base_discount_refunded?: number | null
          base_discount_tax_compensation_amount?: number | null
          base_discount_tax_compensation_invoiced?: number | null
          base_discount_tax_compensation_refunded?: number | null
          base_grand_total?: number | null
          base_shipping_amount?: number | null
          base_shipping_canceled?: number | null
          base_shipping_discount_amount?: number | null
          base_shipping_discount_tax_compensation_amnt?: number | null
          base_shipping_incl_tax?: number | null
          base_shipping_invoiced?: number | null
          base_shipping_refunded?: number | null
          base_shipping_tax_amount?: number | null
          base_shipping_tax_refunded?: number | null
          base_subtotal?: number | null
          base_subtotal_canceled?: number | null
          base_subtotal_incl_tax?: number | null
          base_subtotal_invoiced?: number | null
          base_subtotal_refunded?: number | null
          base_tax_amount?: number | null
          base_tax_canceled?: number | null
          base_tax_invoiced?: number | null
          base_tax_refunded?: number | null
          base_to_global_rate?: number | null
          base_to_order_rate?: number | null
          base_total_canceled?: number | null
          base_total_due?: number | null
          base_total_invoiced?: number | null
          base_total_invoiced_cost?: number | null
          base_total_offline_refunded?: number | null
          base_total_online_refunded?: number | null
          base_total_paid?: number | null
          base_total_qty_ordered?: number | null
          base_total_refunded?: number | null
          billing_address_id?: number | null
          can_ship_partially?: number | null
          can_ship_partially_item?: number | null
          coupon_code?: string | null
          customer_dob?: string | null
          customer_email?: string | null
          customer_firstname?: string | null
          customer_gender?: number | null
          customer_group_id?: number | null
          customer_id?: number | null
          customer_is_guest?: number | null
          customer_lastname?: string | null
          customer_middlename?: string | null
          customer_note?: string | null
          customer_note_notify?: number | null
          customer_prefix?: string | null
          customer_suffix?: string | null
          customer_taxvat?: string | null
          date_created?: string | null
          date_updated?: string | null
          discount_amount?: number | null
          discount_canceled?: number | null
          discount_description?: string | null
          discount_invoiced?: number | null
          discount_refunded?: number | null
          discount_tax_compensation_amount?: number | null
          discount_tax_compensation_invoiced?: number | null
          discount_tax_compensation_refunded?: number | null
          edit_increment?: number | null
          email_sent?: number | null
          entity_id?: number | null
          ext_customer_id?: string | null
          ext_order_id?: string | null
          forced_shipment_with_invoice?: number | null
          global_currency_code?: string | null
          grand_total?: number | null
          hold_before_state?: string | null
          hold_before_status?: string | null
          id?: number
          increment_id?: string | null
          is_virtual?: number | null
          order_currency_code?: string | null
          original_increment_id?: string | null
          payment_auth_expiration?: number | null
          payment_authorization_amount?: number | null
          payment_status?: string | null
          protect_code?: string | null
          quote_address_id?: number | null
          quote_id?: number | null
          relation_child_id?: string | null
          relation_child_real_id?: string | null
          relation_parent_id?: string | null
          relation_parent_real_id?: string | null
          remote_ip?: string | null
          shipping_amount?: number | null
          shipping_canceled?: number | null
          shipping_description?: string | null
          shipping_discount_amount?: number | null
          shipping_discount_tax_compensation_amount?: number | null
          shipping_incl_tax?: number | null
          shipping_invoiced?: number | null
          shipping_refunded?: number | null
          shipping_tax_amount?: number | null
          shipping_tax_refunded?: number | null
          state?: string | null
          status?: string
          store_currency_code?: string | null
          store_id?: number | null
          store_name?: string | null
          store_to_base_rate?: number | null
          store_to_order_rate?: number | null
          subtotal?: number | null
          subtotal_canceled?: number | null
          subtotal_incl_tax?: number | null
          subtotal_invoiced?: number | null
          subtotal_refunded?: number | null
          tax_amount?: number | null
          tax_canceled?: number | null
          tax_invoiced?: number | null
          tax_refunded?: number | null
          total_canceled?: number | null
          total_due?: number | null
          total_invoiced?: number | null
          total_item_count?: number | null
          total_offline_refunded?: number | null
          total_online_refunded?: number | null
          total_paid?: number | null
          total_qty_ordered?: number | null
          total_refunded?: number | null
          type?: string | null
          user_id?: string | null
          weight?: number | null
          x_forwarded_for?: string | null
        }
        Update: {
          adjustment_negative?: number | null
          adjustment_positive?: number | null
          applied_rule_ids?: string | null
          base_adjustment_negative?: number | null
          base_adjustment_positive?: number | null
          base_currency_code?: string | null
          base_discount_amount?: number | null
          base_discount_canceled?: number | null
          base_discount_invoiced?: number | null
          base_discount_refunded?: number | null
          base_discount_tax_compensation_amount?: number | null
          base_discount_tax_compensation_invoiced?: number | null
          base_discount_tax_compensation_refunded?: number | null
          base_grand_total?: number | null
          base_shipping_amount?: number | null
          base_shipping_canceled?: number | null
          base_shipping_discount_amount?: number | null
          base_shipping_discount_tax_compensation_amnt?: number | null
          base_shipping_incl_tax?: number | null
          base_shipping_invoiced?: number | null
          base_shipping_refunded?: number | null
          base_shipping_tax_amount?: number | null
          base_shipping_tax_refunded?: number | null
          base_subtotal?: number | null
          base_subtotal_canceled?: number | null
          base_subtotal_incl_tax?: number | null
          base_subtotal_invoiced?: number | null
          base_subtotal_refunded?: number | null
          base_tax_amount?: number | null
          base_tax_canceled?: number | null
          base_tax_invoiced?: number | null
          base_tax_refunded?: number | null
          base_to_global_rate?: number | null
          base_to_order_rate?: number | null
          base_total_canceled?: number | null
          base_total_due?: number | null
          base_total_invoiced?: number | null
          base_total_invoiced_cost?: number | null
          base_total_offline_refunded?: number | null
          base_total_online_refunded?: number | null
          base_total_paid?: number | null
          base_total_qty_ordered?: number | null
          base_total_refunded?: number | null
          billing_address_id?: number | null
          can_ship_partially?: number | null
          can_ship_partially_item?: number | null
          coupon_code?: string | null
          customer_dob?: string | null
          customer_email?: string | null
          customer_firstname?: string | null
          customer_gender?: number | null
          customer_group_id?: number | null
          customer_id?: number | null
          customer_is_guest?: number | null
          customer_lastname?: string | null
          customer_middlename?: string | null
          customer_note?: string | null
          customer_note_notify?: number | null
          customer_prefix?: string | null
          customer_suffix?: string | null
          customer_taxvat?: string | null
          date_created?: string | null
          date_updated?: string | null
          discount_amount?: number | null
          discount_canceled?: number | null
          discount_description?: string | null
          discount_invoiced?: number | null
          discount_refunded?: number | null
          discount_tax_compensation_amount?: number | null
          discount_tax_compensation_invoiced?: number | null
          discount_tax_compensation_refunded?: number | null
          edit_increment?: number | null
          email_sent?: number | null
          entity_id?: number | null
          ext_customer_id?: string | null
          ext_order_id?: string | null
          forced_shipment_with_invoice?: number | null
          global_currency_code?: string | null
          grand_total?: number | null
          hold_before_state?: string | null
          hold_before_status?: string | null
          id?: number
          increment_id?: string | null
          is_virtual?: number | null
          order_currency_code?: string | null
          original_increment_id?: string | null
          payment_auth_expiration?: number | null
          payment_authorization_amount?: number | null
          payment_status?: string | null
          protect_code?: string | null
          quote_address_id?: number | null
          quote_id?: number | null
          relation_child_id?: string | null
          relation_child_real_id?: string | null
          relation_parent_id?: string | null
          relation_parent_real_id?: string | null
          remote_ip?: string | null
          shipping_amount?: number | null
          shipping_canceled?: number | null
          shipping_description?: string | null
          shipping_discount_amount?: number | null
          shipping_discount_tax_compensation_amount?: number | null
          shipping_incl_tax?: number | null
          shipping_invoiced?: number | null
          shipping_refunded?: number | null
          shipping_tax_amount?: number | null
          shipping_tax_refunded?: number | null
          state?: string | null
          status?: string
          store_currency_code?: string | null
          store_id?: number | null
          store_name?: string | null
          store_to_base_rate?: number | null
          store_to_order_rate?: number | null
          subtotal?: number | null
          subtotal_canceled?: number | null
          subtotal_incl_tax?: number | null
          subtotal_invoiced?: number | null
          subtotal_refunded?: number | null
          tax_amount?: number | null
          tax_canceled?: number | null
          tax_invoiced?: number | null
          tax_refunded?: number | null
          total_canceled?: number | null
          total_due?: number | null
          total_invoiced?: number | null
          total_item_count?: number | null
          total_offline_refunded?: number | null
          total_online_refunded?: number | null
          total_paid?: number | null
          total_qty_ordered?: number | null
          total_refunded?: number | null
          type?: string | null
          user_id?: string | null
          weight?: number | null
          x_forwarded_for?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_user_id_foreign"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      orders_products: {
        Row: {
          id: number
          orders_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          orders_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          orders_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_products_orders_id_foreign"
            columns: ["orders_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      outlets: {
        Row: {
          callouts: Json | null
          color: string | null
          colortext: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          image: string | null
          name: string | null
          slug: string | null
          sort: number | null
          status: string
          uid: string | null
        }
        Insert: {
          callouts?: Json | null
          color?: string | null
          colortext?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          uid?: string | null
        }
        Update: {
          callouts?: Json | null
          color?: string | null
          colortext?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          uid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "outlets_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
        ]
      }
      outlets_categories: {
        Row: {
          categories_id: number | null
          id: number
          outlets_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          outlets_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          outlets_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "outlets_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outlets_categories_outlets_id_foreign"
            columns: ["outlets_id"]
            isOneToOne: false
            referencedRelation: "outlets"
            referencedColumns: ["id"]
          },
        ]
      }
      outlets_shorts: {
        Row: {
          id: number
          outlets_id: number | null
          shorts_id: number | null
        }
        Insert: {
          id?: number
          outlets_id?: number | null
          shorts_id?: number | null
        }
        Update: {
          id?: number
          outlets_id?: number | null
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "outlets_shorts_outlets_id_foreign"
            columns: ["outlets_id"]
            isOneToOne: false
            referencedRelation: "outlets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "outlets_shorts_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      page_blocks: {
        Row: {
          content: Json | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          menus: Json | null
          name: string | null
          sort: number | null
          status: string
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          content?: Json | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          menus?: Json | null
          name?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          content?: Json | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          menus?: Json | null
          name?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "page_blocks_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "page_blocks_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      page_blocks_files: {
        Row: {
          directus_files_id: string | null
          id: number
          page_blocks_id: number | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          page_blocks_id?: number | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          page_blocks_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "page_blocks_files_directus_files_id_foreign"
            columns: ["directus_files_id"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "page_blocks_files_page_blocks_id_foreign"
            columns: ["page_blocks_id"]
            isOneToOne: false
            referencedRelation: "page_blocks"
            referencedColumns: ["id"]
          },
        ]
      }
      pages: {
        Row: {
          content: string | null
          date_created: string | null
          date_updated: string | null
          id: number
          image: string | null
          link: string | null
          list: Json | null
          name: string | null
          repeaterTextBox: Json | null
          slug: string | null
          sort: number | null
          status: string
          type: string | null
        }
        Insert: {
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          image?: string | null
          link?: string | null
          list?: Json | null
          name?: string | null
          repeaterTextBox?: Json | null
          slug?: string | null
          sort?: number | null
          status?: string
          type?: string | null
        }
        Update: {
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          image?: string | null
          link?: string | null
          list?: Json | null
          name?: string | null
          repeaterTextBox?: Json | null
          slug?: string | null
          sort?: number | null
          status?: string
          type?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          amount: number | null
          created_at: string | null
          description: string | null
          gateway: string | null
          id: number
          status: string
        }
        Insert: {
          amount?: number | null
          created_at?: string | null
          description?: string | null
          gateway?: string | null
          id?: number
          status?: string
        }
        Update: {
          amount?: number | null
          created_at?: string | null
          description?: string | null
          gateway?: string | null
          id?: number
          status?: string
        }
        Relationships: []
      }
      payments_countries: {
        Row: {
          country_id: number | null
          id: number
          payment_id: number | null
        }
        Insert: {
          country_id?: number | null
          id?: number
          payment_id?: number | null
        }
        Update: {
          country_id?: number | null
          id?: number
          payment_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_countries_country_id_foreign"
            columns: ["country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_countries_payment_id_foreign"
            columns: ["payment_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      payments_currency: {
        Row: {
          currency_id: number | null
          id: number
          payments_id: number | null
        }
        Insert: {
          currency_id?: number | null
          id?: number
          payments_id?: number | null
        }
        Update: {
          currency_id?: number | null
          id?: number
          payments_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_currency_currency_id_foreign"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_currency_payments_id_foreign"
            columns: ["payments_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      payments_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          payments_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          payments_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          payments_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_directus_users_payments_id_foreign"
            columns: ["payments_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      payments_orders: {
        Row: {
          id: number
          orders_id: number | null
          payments_id: number | null
        }
        Insert: {
          id?: number
          orders_id?: number | null
          payments_id?: number | null
        }
        Update: {
          id?: number
          orders_id?: number | null
          payments_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_orders_orders_id_foreign"
            columns: ["orders_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_orders_payments_id_foreign"
            columns: ["payments_id"]
            isOneToOne: false
            referencedRelation: "payments"
            referencedColumns: ["id"]
          },
        ]
      }
      pickup_locations: {
        Row: {
          address: string | null
          contact_name: string | null
          date_created: string | null
          date_updated: string | null
          email: string | null
          fax: string | null
          id: number
          latitude: string | null
          longitude: string | null
          name: string | null
          phone: number | null
          pickup_location_code: string | null
          postcode: string | null
          slug: string | null
          sort: number | null
          status: string
        }
        Insert: {
          address?: string | null
          contact_name?: string | null
          date_created?: string | null
          date_updated?: string | null
          email?: string | null
          fax?: string | null
          id?: number
          latitude?: string | null
          longitude?: string | null
          name?: string | null
          phone?: number | null
          pickup_location_code?: string | null
          postcode?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
        }
        Update: {
          address?: string | null
          contact_name?: string | null
          date_created?: string | null
          date_updated?: string | null
          email?: string | null
          fax?: string | null
          id?: number
          latitude?: string | null
          longitude?: string | null
          name?: string | null
          phone?: number | null
          pickup_location_code?: string | null
          postcode?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
        }
        Relationships: []
      }
      pickup_locations_city: {
        Row: {
          collection: string | null
          id: number
          item: string | null
          pickup_locations_id: number | null
        }
        Insert: {
          collection?: string | null
          id?: number
          item?: string | null
          pickup_locations_id?: number | null
        }
        Update: {
          collection?: string | null
          id?: number
          item?: string | null
          pickup_locations_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pickup_locations_city_pickup_locations_id_foreign"
            columns: ["pickup_locations_id"]
            isOneToOne: false
            referencedRelation: "pickup_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      pickup_locations_country: {
        Row: {
          collection: string | null
          id: number
          item: string | null
          pickup_locations_id: number | null
        }
        Insert: {
          collection?: string | null
          id?: number
          item?: string | null
          pickup_locations_id?: number | null
        }
        Update: {
          collection?: string | null
          id?: number
          item?: string | null
          pickup_locations_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pickup_locations_country_pickup_locations_id_foreign"
            columns: ["pickup_locations_id"]
            isOneToOne: false
            referencedRelation: "pickup_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      pickup_locations_state: {
        Row: {
          collection: string | null
          id: number
          item: string | null
          pickup_locations_id: number | null
        }
        Insert: {
          collection?: string | null
          id?: number
          item?: string | null
          pickup_locations_id?: number | null
        }
        Update: {
          collection?: string | null
          id?: number
          item?: string | null
          pickup_locations_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pickup_locations_state_pickup_locations_id_foreign"
            columns: ["pickup_locations_id"]
            isOneToOne: false
            referencedRelation: "pickup_locations"
            referencedColumns: ["id"]
          },
        ]
      }
      platform: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          image: string | null
          name: string | null
          sort: number | null
          status: string
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          sort?: number | null
          status?: string
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          sort?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "platform_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_articles: {
        Row: {
          articles_id: number | null
          id: number
          platform_id: number | null
        }
        Insert: {
          articles_id?: number | null
          id?: number
          platform_id?: number | null
        }
        Update: {
          articles_id?: number | null
          id?: number
          platform_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_articles_articles_id_foreign"
            columns: ["articles_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_articles_platform_id_foreign"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_categories: {
        Row: {
          categories_id: number | null
          id: number
          platform_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          platform_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          platform_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_categories_platform_id_foreign"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_lists: {
        Row: {
          id: number
          lists_id: number | null
          platform_id: number | null
        }
        Insert: {
          id?: number
          lists_id?: number | null
          platform_id?: number | null
        }
        Update: {
          id?: number
          lists_id?: number | null
          platform_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_lists_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_lists_platform_id_foreign"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_navigation: {
        Row: {
          id: number
          navigation_id: number | null
          platform_id: number | null
        }
        Insert: {
          id?: number
          navigation_id?: number | null
          platform_id?: number | null
        }
        Update: {
          id?: number
          navigation_id?: number | null
          platform_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_navigation_navigation_id_foreign"
            columns: ["navigation_id"]
            isOneToOne: false
            referencedRelation: "navigation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_navigation_platform_id_foreign"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_page_blocks: {
        Row: {
          id: number
          page_blocks_id: number | null
          platform_id: number | null
        }
        Insert: {
          id?: number
          page_blocks_id?: number | null
          platform_id?: number | null
        }
        Update: {
          id?: number
          page_blocks_id?: number | null
          platform_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_page_blocks_page_blocks_id_foreign"
            columns: ["page_blocks_id"]
            isOneToOne: false
            referencedRelation: "page_blocks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_page_blocks_platform_id_foreign"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_pages: {
        Row: {
          id: number
          pages_id: number | null
          platform_id: number | null
        }
        Insert: {
          id?: number
          pages_id?: number | null
          platform_id?: number | null
        }
        Update: {
          id?: number
          pages_id?: number | null
          platform_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_pages_pages_id_foreign"
            columns: ["pages_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_pages_platform_id_foreign"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_products: {
        Row: {
          id: number
          platform_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          platform_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          platform_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "platform_products_platform_id_foreign"
            columns: ["platform_id"]
            isOneToOne: false
            referencedRelation: "platform"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "platform_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      polls: {
        Row: {
          author: string | null
          content: Json | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          image: string | null
          isPublic: boolean | null
          name: string | null
          slug: string | null
          sort: number | null
          status: string
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          author?: string | null
          content?: Json | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          isPublic?: boolean | null
          name?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          author?: string | null
          content?: Json | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          isPublic?: boolean | null
          name?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "polls_author_foreign"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "polls_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "polls_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "polls_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      polls_spaces: {
        Row: {
          id: number
          polls_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          polls_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          polls_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "polls_spaces_polls_id_foreign"
            columns: ["polls_id"]
            isOneToOne: false
            referencedRelation: "polls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "polls_spaces_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      postgresstores: {
        Row: {
          color: string | null
          colortext: string | null
          content: string | null
          date_created: string | null
          date_updated: string | null
          id: number
          image: string | null
          name: string | null
          slug: string | null
          sort: number | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          color?: string | null
          colortext?: string | null
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          image?: string | null
          name?: string | null
          slug?: string | null
          sort?: number | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          color?: string | null
          colortext?: string | null
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          image?: string | null
          name?: string | null
          slug?: string | null
          sort?: number | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: []
      }
      postgresstores_collections: {
        Row: {
          collections_id: number | null
          id: number
          postgresstores_id: number | null
        }
        Insert: {
          collections_id?: number | null
          id?: number
          postgresstores_id?: number | null
        }
        Update: {
          collections_id?: number | null
          id?: number
          postgresstores_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "postgresstores_collections_collections_id_foreign"
            columns: ["collections_id"]
            isOneToOne: false
            referencedRelation: "collections"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "postgresstores_collections_postgresstores_id_foreign"
            columns: ["postgresstores_id"]
            isOneToOne: false
            referencedRelation: "postgresstores"
            referencedColumns: ["id"]
          },
        ]
      }
      postgresstores_products: {
        Row: {
          id: number
          postgresstores_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          postgresstores_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          postgresstores_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "postgresstores_products_postgresstores_id_foreign"
            columns: ["postgresstores_id"]
            isOneToOne: false
            referencedRelation: "postgresstores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "postgresstores_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      postgresstores_websites: {
        Row: {
          id: number
          postgresstores_id: number | null
          websites_id: number | null
        }
        Insert: {
          id?: number
          postgresstores_id?: number | null
          websites_id?: number | null
        }
        Update: {
          id?: number
          postgresstores_id?: number | null
          websites_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "postgresstores_websites_postgresstores_id_foreign"
            columns: ["postgresstores_id"]
            isOneToOne: false
            referencedRelation: "postgresstores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "postgresstores_websites_websites_id_foreign"
            columns: ["websites_id"]
            isOneToOne: false
            referencedRelation: "websites"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          audio: string | null
          author: string | null
          auto_publish: boolean | null
          blsky_id: string | null
          content: string | null
          content_type: string | null
          date_created: string | null
          file: string | null
          id: number
          image: string | null
          link_preview: Json | null
          mastodon_id: string | null
          pinned_post: boolean | null
          slug: string | null
          status: string | null
          target_audience: string | null
          title: string | null
          type: string | null
          user_avatar: string | null
          user_created: string | null
          username: string | null
          views: number | null
          visibility_scope: string | null
        }
        Insert: {
          audio?: string | null
          author?: string | null
          auto_publish?: boolean | null
          blsky_id?: string | null
          content?: string | null
          content_type?: string | null
          date_created?: string | null
          file?: string | null
          id?: number
          image?: string | null
          link_preview?: Json | null
          mastodon_id?: string | null
          pinned_post?: boolean | null
          slug?: string | null
          status?: string | null
          target_audience?: string | null
          title?: string | null
          type?: string | null
          user_avatar?: string | null
          user_created?: string | null
          username?: string | null
          views?: number | null
          visibility_scope?: string | null
        }
        Update: {
          audio?: string | null
          author?: string | null
          auto_publish?: boolean | null
          blsky_id?: string | null
          content?: string | null
          content_type?: string | null
          date_created?: string | null
          file?: string | null
          id?: number
          image?: string | null
          link_preview?: Json | null
          mastodon_id?: string | null
          pinned_post?: boolean | null
          slug?: string | null
          status?: string | null
          target_audience?: string | null
          title?: string | null
          type?: string | null
          user_avatar?: string | null
          user_created?: string | null
          username?: string | null
          views?: number | null
          visibility_scope?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_audio_foreign"
            columns: ["audio"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_author_foreign"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
        ]
      }
      posts_polls: {
        Row: {
          id: number
          polls_id: number | null
          posts_id: number | null
        }
        Insert: {
          id?: number
          polls_id?: number | null
          posts_id?: number | null
        }
        Update: {
          id?: number
          polls_id?: number | null
          posts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_polls_polls_id_foreign"
            columns: ["polls_id"]
            isOneToOne: false
            referencedRelation: "polls"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_polls_posts_id_foreign"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      product_attributes: {
        Row: {
          attribute_id: number | null
          id: number
          product_id: number | null
          value: Json | null
        }
        Insert: {
          attribute_id?: number | null
          id?: number
          product_id?: number | null
          value?: Json | null
        }
        Update: {
          attribute_id?: number | null
          id?: number
          product_id?: number | null
          value?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "product_attributes_attribute_id_foreign"
            columns: ["attribute_id"]
            isOneToOne: false
            referencedRelation: "attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_attributes_product_id_foreign"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      product_types: {
        Row: {
          id: number
          isShippable: boolean | null
          name: string | null
          options: Json | null
        }
        Insert: {
          id?: number
          isShippable?: boolean | null
          name?: string | null
          options?: Json | null
        }
        Update: {
          id?: number
          isShippable?: boolean | null
          name?: string | null
          options?: Json | null
        }
        Relationships: []
      }
      product_types_products: {
        Row: {
          id: number
          product_types_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          product_types_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          product_types_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "product_types_products_product_types_id_foreign"
            columns: ["product_types_id"]
            isOneToOne: false
            referencedRelation: "product_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "product_types_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products: {
        Row: {
          content: string | null
          created_at: string | null
          file: string | null
          id: number
          image: string | null
          name: string | null
          part_number: string | null
          price: number | null
          rating: number | null
          ratings: string | null
          salable_quantity: number | null
          sku: number | null
          status: string | null
          stock: number | null
          tax_class: string | null
          updated_at: string | null
          visibility: boolean | null
        }
        Insert: {
          content?: string | null
          created_at?: string | null
          file?: string | null
          id?: number
          image?: string | null
          name?: string | null
          part_number?: string | null
          price?: number | null
          rating?: number | null
          ratings?: string | null
          salable_quantity?: number | null
          sku?: number | null
          status?: string | null
          stock?: number | null
          tax_class?: string | null
          updated_at?: string | null
          visibility?: boolean | null
        }
        Update: {
          content?: string | null
          created_at?: string | null
          file?: string | null
          id?: number
          image?: string | null
          name?: string | null
          part_number?: string | null
          price?: number | null
          rating?: number | null
          ratings?: string | null
          salable_quantity?: number | null
          sku?: number | null
          status?: string | null
          stock?: number | null
          tax_class?: string | null
          updated_at?: string | null
          visibility?: boolean | null
        }
        Relationships: []
      }
      products_attributes: {
        Row: {
          attributes_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          attributes_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          attributes_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_attributes_attributes_id_foreign"
            columns: ["attributes_id"]
            isOneToOne: false
            referencedRelation: "attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_attributes_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products_categories: {
        Row: {
          categories_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_categories_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products_countries: {
        Row: {
          countries_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          countries_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          countries_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_countries_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products_currency: {
        Row: {
          currency_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          currency_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          currency_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_currency_currency_id_foreign"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_currency_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products_departments: {
        Row: {
          departments_id: number | null
          id: number
          products_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          products_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_departments_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products_directus_users: {
        Row: {
          id: number
          product_id: number | null
          user_id: string | null
        }
        Insert: {
          id?: number
          product_id?: number | null
          user_id?: string | null
        }
        Update: {
          id?: number
          product_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "products_directus_users_product_id_foreign"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products_manufacturer: {
        Row: {
          id: number
          manufacturer_id: number | null
          products_id: number | null
        }
        Insert: {
          id?: number
          manufacturer_id?: number | null
          products_id?: number | null
        }
        Update: {
          id?: number
          manufacturer_id?: number | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_manufacturer_manufacturer_id_foreign"
            columns: ["manufacturer_id"]
            isOneToOne: false
            referencedRelation: "manufacturer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_manufacturer_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products_product_designer: {
        Row: {
          collection: string | null
          id: number
          item: string | null
          products_id: number | null
        }
        Insert: {
          collection?: string | null
          id?: number
          item?: string | null
          products_id?: number | null
        }
        Update: {
          collection?: string | null
          id?: number
          item?: string | null
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_product_designer_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      products_spaces: {
        Row: {
          id: number
          products_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_spaces_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_spaces_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      products_tags: {
        Row: {
          id: number
          products_id: number | null
          tags_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          tags_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_tags_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_tags_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      products_websites: {
        Row: {
          id: number
          products_id: number | null
          websites_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          websites_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          websites_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "products_websites_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "products_websites_websites_id_foreign"
            columns: ["websites_id"]
            isOneToOne: false
            referencedRelation: "websites"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          activitypub_handle: string | null
          avatar: string | null
          birth_date: string | null
          cms_auth_id: string | null
          commerce_auth_id: string | null
          company: string | null
          description: string | null
          dropshipping_partner_id: string | null
          email: string | null
          first_name: string | null
          id: string
          is_seller: boolean | null
          keycloak_id: string | null
          last_name: string | null
          location: string | null
          postalcode: string | null
          slug: string | null
          title: string | null
          user: string | null
          username: string | null
        }
        Insert: {
          activitypub_handle?: string | null
          avatar?: string | null
          birth_date?: string | null
          cms_auth_id?: string | null
          commerce_auth_id?: string | null
          company?: string | null
          description?: string | null
          dropshipping_partner_id?: string | null
          email?: string | null
          first_name?: string | null
          id: string
          is_seller?: boolean | null
          keycloak_id?: string | null
          last_name?: string | null
          location?: string | null
          postalcode?: string | null
          slug?: string | null
          title?: string | null
          user?: string | null
          username?: string | null
        }
        Update: {
          activitypub_handle?: string | null
          avatar?: string | null
          birth_date?: string | null
          cms_auth_id?: string | null
          commerce_auth_id?: string | null
          company?: string | null
          description?: string | null
          dropshipping_partner_id?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          is_seller?: boolean | null
          keycloak_id?: string | null
          last_name?: string | null
          location?: string | null
          postalcode?: string | null
          slug?: string | null
          title?: string | null
          user?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_avatar_foreign"
            columns: ["avatar"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_user_foreign"
            columns: ["user"]
            isOneToOne: true
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles_cities: {
        Row: {
          cities_id: number | null
          id: number
          profiles_id: string | null
        }
        Insert: {
          cities_id?: number | null
          id?: number
          profiles_id?: string | null
        }
        Update: {
          cities_id?: number | null
          id?: number
          profiles_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_cities_cities_id_foreign"
            columns: ["cities_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_cities_profiles_id_foreign"
            columns: ["profiles_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles_countries: {
        Row: {
          countries_id: number | null
          id: number
          profiles_id: string | null
        }
        Insert: {
          countries_id?: number | null
          id?: number
          profiles_id?: string | null
        }
        Update: {
          countries_id?: number | null
          id?: number
          profiles_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_countries_profiles_id_foreign"
            columns: ["profiles_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles_followers: {
        Row: {
          followers_id: number | null
          id: number
          profiles_id: string | null
        }
        Insert: {
          followers_id?: number | null
          id?: number
          profiles_id?: string | null
        }
        Update: {
          followers_id?: number | null
          id?: number
          profiles_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_followers_followers_id_foreign"
            columns: ["followers_id"]
            isOneToOne: false
            referencedRelation: "followers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_followers_profiles_id_foreign"
            columns: ["profiles_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles_states: {
        Row: {
          id: number
          profiles_id: string | null
          states_id: number | null
        }
        Insert: {
          id?: number
          profiles_id?: string | null
          states_id?: number | null
        }
        Update: {
          id?: number
          profiles_id?: string | null
          states_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_states_profiles_id_foreign"
            columns: ["profiles_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_states_states_id_foreign"
            columns: ["states_id"]
            isOneToOne: false
            referencedRelation: "states"
            referencedColumns: ["id"]
          },
        ]
      }
      project_board: {
        Row: {
          cards: Json | null
          custom_fields: Json | null
          date_created: string | null
          date_updated: string | null
          id: number
          name: string | null
          progress: number | null
          sort: number | null
          status: string
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          cards?: Json | null
          custom_fields?: Json | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          progress?: number | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          cards?: Json | null
          custom_fields?: Json | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          name?: string | null
          progress?: number | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_board_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_board_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      project_board_comments: {
        Row: {
          comments_id: number | null
          id: number
          project_board_id: number | null
        }
        Insert: {
          comments_id?: number | null
          id?: number
          project_board_id?: number | null
        }
        Update: {
          comments_id?: number | null
          id?: number
          project_board_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "project_board_comments_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_board_comments_project_board_id_foreign"
            columns: ["project_board_id"]
            isOneToOne: false
            referencedRelation: "project_board"
            referencedColumns: ["id"]
          },
        ]
      }
      project_board_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          project_board_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          project_board_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          project_board_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "project_board_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_board_directus_users_project_board_id_foreign"
            columns: ["project_board_id"]
            isOneToOne: false
            referencedRelation: "project_board"
            referencedColumns: ["id"]
          },
        ]
      }
      project_board_files: {
        Row: {
          directus_files_id: string | null
          id: number
          project_board_id: number | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          project_board_id?: number | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          project_board_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "project_board_files_directus_files_id_foreign"
            columns: ["directus_files_id"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_board_files_project_board_id_foreign"
            columns: ["project_board_id"]
            isOneToOne: false
            referencedRelation: "project_board"
            referencedColumns: ["id"]
          },
        ]
      }
      project_board_projects: {
        Row: {
          id: number
          project_board_id: number | null
          projects_id: number | null
        }
        Insert: {
          id?: number
          project_board_id?: number | null
          projects_id?: number | null
        }
        Update: {
          id?: number
          project_board_id?: number | null
          projects_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "project_board_projects_project_board_id_foreign"
            columns: ["project_board_id"]
            isOneToOne: false
            referencedRelation: "project_board"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_board_projects_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_timeline: {
        Row: {
          id: number
          stage: Json | null
        }
        Insert: {
          id?: number
          stage?: Json | null
        }
        Update: {
          id?: number
          stage?: Json | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          budget: number | null
          custom_fields: Json | null
          date_created: string | null
          date_updated: string | null
          difference: number | null
          due_date: string | null
          estimated_time: string | null
          gantt: Json | null
          icon: string | null
          id: number
          name: string | null
          priority: string | null
          slug: string | null
          sort: number | null
          spend: number | null
          status: string
          task_name: Json | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          budget?: number | null
          custom_fields?: Json | null
          date_created?: string | null
          date_updated?: string | null
          difference?: number | null
          due_date?: string | null
          estimated_time?: string | null
          gantt?: Json | null
          icon?: string | null
          id?: number
          name?: string | null
          priority?: string | null
          slug?: string | null
          sort?: number | null
          spend?: number | null
          status?: string
          task_name?: Json | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          budget?: number | null
          custom_fields?: Json | null
          date_created?: string | null
          date_updated?: string | null
          difference?: number | null
          due_date?: string | null
          estimated_time?: string | null
          gantt?: Json | null
          icon?: string | null
          id?: number
          name?: string | null
          priority?: string | null
          slug?: string | null
          sort?: number | null
          spend?: number | null
          status?: string
          task_name?: Json | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_icon_foreign"
            columns: ["icon"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_calendar: {
        Row: {
          calendar_id: number | null
          id: number
          projects_id: number | null
        }
        Insert: {
          calendar_id?: number | null
          id?: number
          projects_id?: number | null
        }
        Update: {
          calendar_id?: number | null
          id?: number
          projects_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_calendar_calendar_id_foreign"
            columns: ["calendar_id"]
            isOneToOne: false
            referencedRelation: "calendar"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_calendar_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_comments: {
        Row: {
          comments_id: number | null
          id: number
          projects_id: number | null
        }
        Insert: {
          comments_id?: number | null
          id?: number
          projects_id?: number | null
        }
        Update: {
          comments_id?: number | null
          id?: number
          projects_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_comments_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_comments_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          projects_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          projects_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          projects_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_directus_users_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_files: {
        Row: {
          directus_files_id: string | null
          id: number
          projects_id: number | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          projects_id?: number | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          projects_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_files_directus_files_id_foreign"
            columns: ["directus_files_id"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_files_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_integrations: {
        Row: {
          id: number
          integrations_id: number | null
          projects_id: number | null
        }
        Insert: {
          id?: number
          integrations_id?: number | null
          projects_id?: number | null
        }
        Update: {
          id?: number
          integrations_id?: number | null
          projects_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_integrations_integrations_id_foreign"
            columns: ["integrations_id"]
            isOneToOne: false
            referencedRelation: "integrations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_integrations_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_lists: {
        Row: {
          id: number
          lists_id: number | null
          projects_id: number | null
        }
        Insert: {
          id?: number
          lists_id?: number | null
          projects_id?: number | null
        }
        Update: {
          id?: number
          lists_id?: number | null
          projects_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_lists_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_lists_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_products: {
        Row: {
          id: number
          products_id: number | null
          projects_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          projects_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          projects_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_products_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_project_timeline: {
        Row: {
          id: number
          project_timeline_id: number | null
          projects_id: number | null
        }
        Insert: {
          id?: number
          project_timeline_id?: number | null
          projects_id?: number | null
        }
        Update: {
          id?: number
          project_timeline_id?: number | null
          projects_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_project_timeline_project_timeline_id_foreign"
            columns: ["project_timeline_id"]
            isOneToOne: false
            referencedRelation: "project_timeline"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_project_timeline_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects_region: {
        Row: {
          id: number
          projects_id: number | null
          region_id: number | null
        }
        Insert: {
          id?: number
          projects_id?: number | null
          region_id?: number | null
        }
        Update: {
          id?: number
          projects_id?: number | null
          region_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_region_projects_id_foreign"
            columns: ["projects_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_region_region_id_foreign"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
        ]
      }
      radios: {
        Row: {
          creator: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          file: string | null
          format: string | null
          id: number
          image: string | null
          internet: string | null
          name: string | null
          satellite: string | null
          sort: number | null
          status: string
          type: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          creator?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          file?: string | null
          format?: string | null
          id?: number
          image?: string | null
          internet?: string | null
          name?: string | null
          satellite?: string | null
          sort?: number | null
          status?: string
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          creator?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          file?: string | null
          format?: string | null
          id?: number
          image?: string | null
          internet?: string | null
          name?: string | null
          satellite?: string | null
          sort?: number | null
          status?: string
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "radios_file_foreign"
            columns: ["file"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "radios_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "radios_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "radios_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      radios_categories: {
        Row: {
          categories_id: number | null
          id: number
          radios_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          radios_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          radios_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "radios_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "radios_categories_radios_id_foreign"
            columns: ["radios_id"]
            isOneToOne: false
            referencedRelation: "radios"
            referencedColumns: ["id"]
          },
        ]
      }
      radios_departments: {
        Row: {
          departments_id: number | null
          id: number
          radios_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          radios_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          radios_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "radios_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "radios_departments_radios_id_foreign"
            columns: ["radios_id"]
            isOneToOne: false
            referencedRelation: "radios"
            referencedColumns: ["id"]
          },
        ]
      }
      radios_musicchart: {
        Row: {
          id: number
          radios_id: number | null
        }
        Insert: {
          id?: number
          radios_id?: number | null
        }
        Update: {
          id?: number
          radios_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "radios_musicchart_radios_id_foreign"
            columns: ["radios_id"]
            isOneToOne: false
            referencedRelation: "radios"
            referencedColumns: ["id"]
          },
        ]
      }
      ratings: {
        Row: {
          description: string | null
          id: number
          image: string | null
          name: string | null
        }
        Insert: {
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Update: {
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ratings_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
        ]
      }
      ratings_products: {
        Row: {
          id: number
          products_id: number | null
          ratings_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          ratings_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          ratings_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ratings_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ratings_products_ratings_id_foreign"
            columns: ["ratings_id"]
            isOneToOne: false
            referencedRelation: "ratings"
            referencedColumns: ["id"]
          },
        ]
      }
      reactions: {
        Row: {
          content_id: string | null
          content_type: string | null
          counter: number | null
          date_created: string | null
          date_updated: string | null
          icon: string | null
          id: number
          image: string | null
          interaction_type: string | null
          list_id: number | null
          name: string | null
          posts: number | null
          product: number | null
          reaction_type: string | null
          space_id: number | null
          target_type: string | null
          user: string | null
          user_id: string | null
          video_id: number | null
        }
        Insert: {
          content_id?: string | null
          content_type?: string | null
          counter?: number | null
          date_created?: string | null
          date_updated?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          interaction_type?: string | null
          list_id?: number | null
          name?: string | null
          posts?: number | null
          product?: number | null
          reaction_type?: string | null
          space_id?: number | null
          target_type?: string | null
          user?: string | null
          user_id?: string | null
          video_id?: number | null
        }
        Update: {
          content_id?: string | null
          content_type?: string | null
          counter?: number | null
          date_created?: string | null
          date_updated?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          interaction_type?: string | null
          list_id?: number | null
          name?: string | null
          posts?: number | null
          product?: number | null
          reaction_type?: string | null
          space_id?: number | null
          target_type?: string | null
          user?: string | null
          user_id?: string | null
          video_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reactions_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_list_id_foreign"
            columns: ["list_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_posts_foreign"
            columns: ["posts"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_product_foreign"
            columns: ["product"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_space_id_foreign"
            columns: ["space_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_user_id_foreign"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_video_id_foreign"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      reactions_comments: {
        Row: {
          comments_id: number | null
          id: number
          reactions_id: number | null
        }
        Insert: {
          comments_id?: number | null
          id?: number
          reactions_id?: number | null
        }
        Update: {
          comments_id?: number | null
          id?: number
          reactions_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reactions_comments_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_comments_reactions_id_foreign"
            columns: ["reactions_id"]
            isOneToOne: false
            referencedRelation: "reactions"
            referencedColumns: ["id"]
          },
        ]
      }
      reactions_directus_users: {
        Row: {
          id: number
          reaction_id: number | null
          user_id: string | null
        }
        Insert: {
          id?: number
          reaction_id?: number | null
          user_id?: string | null
        }
        Update: {
          id?: number
          reaction_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "reactions_directus_users_reaction_id_foreign"
            columns: ["reaction_id"]
            isOneToOne: false
            referencedRelation: "reactions"
            referencedColumns: ["id"]
          },
        ]
      }
      reactions_lists: {
        Row: {
          id: number
          lists_id: number | null
          reactions_id: number | null
        }
        Insert: {
          id?: number
          lists_id?: number | null
          reactions_id?: number | null
        }
        Update: {
          id?: number
          lists_id?: number | null
          reactions_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reactions_lists_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_lists_reactions_id_foreign"
            columns: ["reactions_id"]
            isOneToOne: false
            referencedRelation: "reactions"
            referencedColumns: ["id"]
          },
        ]
      }
      reactions_posts: {
        Row: {
          id: number
          posts_id: number | null
          reactions_id: number | null
        }
        Insert: {
          id?: number
          posts_id?: number | null
          reactions_id?: number | null
        }
        Update: {
          id?: number
          posts_id?: number | null
          reactions_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reactions_posts_posts_id_foreign"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_posts_reactions_id_foreign"
            columns: ["reactions_id"]
            isOneToOne: false
            referencedRelation: "reactions"
            referencedColumns: ["id"]
          },
        ]
      }
      reactions_shorts: {
        Row: {
          id: number
          reactions_id: number | null
          shorts_id: number | null
        }
        Insert: {
          id?: number
          reactions_id?: number | null
          shorts_id?: number | null
        }
        Update: {
          id?: number
          reactions_id?: number | null
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reactions_shorts_reactions_id_foreign"
            columns: ["reactions_id"]
            isOneToOne: false
            referencedRelation: "reactions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reactions_shorts_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      redirects: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          notice_redirects: string | null
          response_code: number | null
          url_new: string | null
          url_old: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          notice_redirects?: string | null
          response_code?: number | null
          url_new?: string | null
          url_old?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          notice_redirects?: string | null
          response_code?: number | null
          url_new?: string | null
          url_old?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "redirects_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "redirects_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      region: {
        Row: {
          code: string | null
          created_at: string | null
          description: string | null
          id: number
          name: string | null
          region_id: number | null
          slug: string | null
        }
        Insert: {
          code?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          region_id?: number | null
          slug?: string | null
        }
        Update: {
          code?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string | null
          region_id?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      region_address: {
        Row: {
          address_id: number | null
          id: number
          region_id: number | null
        }
        Insert: {
          address_id?: number | null
          id?: number
          region_id?: number | null
        }
        Update: {
          address_id?: number | null
          id?: number
          region_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "region_address_address_id_foreign"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "region_address_region_id_foreign"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
        ]
      }
      region_countries: {
        Row: {
          countries_id: number | null
          id: number
          region_id: number | null
        }
        Insert: {
          countries_id?: number | null
          id?: number
          region_id?: number | null
        }
        Update: {
          countries_id?: number | null
          id?: number
          region_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "region_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "region_countries_region_id_foreign"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
        ]
      }
      region_shipping_address: {
        Row: {
          id: number
          region_id: number | null
          shipping_address_id: number | null
        }
        Insert: {
          id?: number
          region_id?: number | null
          shipping_address_id?: number | null
        }
        Update: {
          id?: number
          region_id?: number | null
          shipping_address_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "region_shipping_address_region_id_foreign"
            columns: ["region_id"]
            isOneToOne: false
            referencedRelation: "region"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "region_shipping_address_shipping_address_id_foreign"
            columns: ["shipping_address_id"]
            isOneToOne: false
            referencedRelation: "shipping_address"
            referencedColumns: ["id"]
          },
        ]
      }
      related_products: {
        Row: {
          id: number
          sort: number | null
          user: string | null
        }
        Insert: {
          id?: number
          sort?: number | null
          user?: string | null
        }
        Update: {
          id?: number
          sort?: number | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "related_products_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      related_products_products: {
        Row: {
          id: number
          products_id: number | null
          related_products_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          related_products_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          related_products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "related_products_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "related_products_products_related_products_id_foreign"
            columns: ["related_products_id"]
            isOneToOne: false
            referencedRelation: "related_products"
            referencedColumns: ["id"]
          },
        ]
      }
      report: {
        Row: {
          content: string | null
          date_created: string | null
          date_updated: string | null
          id: number
          sort: number | null
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          sort?: number | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          content?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          sort?: number | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: []
      }
      report_comments: {
        Row: {
          comments_id: number | null
          id: number
          report_id: number | null
        }
        Insert: {
          comments_id?: number | null
          id?: number
          report_id?: number | null
        }
        Update: {
          comments_id?: number | null
          id?: number
          report_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "report_comments_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_comments_report_id_foreign"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "report"
            referencedColumns: ["id"]
          },
        ]
      }
      report_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          report_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          report_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          report_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "report_directus_users_report_id_foreign"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "report"
            referencedColumns: ["id"]
          },
        ]
      }
      report_faqs: {
        Row: {
          faqs_id: number | null
          id: number
          report_id: number | null
        }
        Insert: {
          faqs_id?: number | null
          id?: number
          report_id?: number | null
        }
        Update: {
          faqs_id?: number | null
          id?: number
          report_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "report_faqs_faqs_id_foreign"
            columns: ["faqs_id"]
            isOneToOne: false
            referencedRelation: "faqs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_faqs_report_id_foreign"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "report"
            referencedColumns: ["id"]
          },
        ]
      }
      report_posts: {
        Row: {
          id: number
          posts_id: number | null
          report_id: number | null
        }
        Insert: {
          id?: number
          posts_id?: number | null
          report_id?: number | null
        }
        Update: {
          id?: number
          posts_id?: number | null
          report_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "report_posts_posts_id_foreign"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_posts_report_id_foreign"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "report"
            referencedColumns: ["id"]
          },
        ]
      }
      report_products: {
        Row: {
          id: number
          products_id: number | null
          report_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          report_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          report_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "report_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_products_report_id_foreign"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "report"
            referencedColumns: ["id"]
          },
        ]
      }
      report_spaces: {
        Row: {
          id: number
          report_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          report_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          report_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "report_spaces_report_id_foreign"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "report"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_spaces_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      returns: {
        Row: {
          date_created: string | null
          date_updated: string | null
          id: number
          reason: string | null
          return_number: string | null
          status: string
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          reason?: string | null
          return_number?: string | null
          status?: string
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          id?: number
          reason?: string | null
          return_number?: string | null
          status?: string
        }
        Relationships: []
      }
      returns_orders: {
        Row: {
          id: number
          orders_id: number | null
          returns_id: number | null
        }
        Insert: {
          id?: number
          orders_id?: number | null
          returns_id?: number | null
        }
        Update: {
          id?: number
          orders_id?: number | null
          returns_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "returns_orders_orders_id_foreign"
            columns: ["orders_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "returns_orders_returns_id_foreign"
            columns: ["returns_id"]
            isOneToOne: false
            referencedRelation: "returns"
            referencedColumns: ["id"]
          },
        ]
      }
      returns_products: {
        Row: {
          id: number
          products_id: number | null
          returns_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          returns_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          returns_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "returns_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "returns_products_returns_id_foreign"
            columns: ["returns_id"]
            isOneToOne: false
            referencedRelation: "returns"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews_products: {
        Row: {
          id: number
          products_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      seasons: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          name: number | null
          number: number | null
          release_date: string | null
          sort: number | null
          status: string
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          name?: number | null
          number?: number | null
          release_date?: string | null
          sort?: number | null
          status?: string
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          name?: number | null
          number?: number | null
          release_date?: string | null
          sort?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "seasons_name_foreign"
            columns: ["name"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      seasons_videos: {
        Row: {
          id: number
          seasons_id: number | null
          videos_id: number | null
        }
        Insert: {
          id?: number
          seasons_id?: number | null
          videos_id?: number | null
        }
        Update: {
          id?: number
          seasons_id?: number | null
          videos_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "seasons_videos_seasons_id_foreign"
            columns: ["seasons_id"]
            isOneToOne: false
            referencedRelation: "seasons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "seasons_videos_videos_id_foreign"
            columns: ["videos_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment: {
        Row: {
          carrier_matrix: Json | null
          code: string | null
          cost: number | null
          created_at: string | null
          delivery_time: string | null
          delivery_window: string | null
          email_sent: number | null
          id: number
          order: number | null
          shipment_status: string | null
          shipping_label: string | null
          store_id: number | null
          total_qty: number | null
          total_weight: number | null
          updated_at: string | null
          user: string | null
        }
        Insert: {
          carrier_matrix?: Json | null
          code?: string | null
          cost?: number | null
          created_at?: string | null
          delivery_time?: string | null
          delivery_window?: string | null
          email_sent?: number | null
          id?: number
          order?: number | null
          shipment_status?: string | null
          shipping_label?: string | null
          store_id?: number | null
          total_qty?: number | null
          total_weight?: number | null
          updated_at?: string | null
          user?: string | null
        }
        Update: {
          carrier_matrix?: Json | null
          code?: string | null
          cost?: number | null
          created_at?: string | null
          delivery_time?: string | null
          delivery_window?: string | null
          email_sent?: number | null
          id?: number
          order?: number | null
          shipment_status?: string | null
          shipping_label?: string | null
          store_id?: number | null
          total_qty?: number | null
          total_weight?: number | null
          updated_at?: string | null
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shipment_order_foreign"
            columns: ["order"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment_address: {
        Row: {
          address_id: number | null
          id: number
          shipment_id: number | null
        }
        Insert: {
          address_id?: number | null
          id?: number
          shipment_id?: number | null
        }
        Update: {
          address_id?: number | null
          id?: number
          shipment_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipment_address_address_id_foreign"
            columns: ["address_id"]
            isOneToOne: false
            referencedRelation: "address"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_address_shipment_id_foreign"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipment"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment_comments: {
        Row: {
          comment: string | null
          created_at: string | null
          entity_id: number | null
          id: number
          is_customer_notified: string | null
          parent_id: number | null
          status: string
        }
        Insert: {
          comment?: string | null
          created_at?: string | null
          entity_id?: number | null
          id?: number
          is_customer_notified?: string | null
          parent_id?: number | null
          status?: string
        }
        Update: {
          comment?: string | null
          created_at?: string | null
          entity_id?: number | null
          id?: number
          is_customer_notified?: string | null
          parent_id?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "shipment_comments_parent_id_foreign"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "shipment"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment_products: {
        Row: {
          id: number
          products_id: number | null
          shipment_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          shipment_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          shipment_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipment_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipment_products_shipment_id_foreign"
            columns: ["shipment_id"]
            isOneToOne: false
            referencedRelation: "shipment"
            referencedColumns: ["id"]
          },
        ]
      }
      shipment_tracking: {
        Row: {
          carrier_code: string | null
          created_at: string | null
          description: string | null
          entity_id: number | null
          id: number
          parent_id: number | null
          qty: number | null
          title: string | null
          track_number: number | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          carrier_code?: string | null
          created_at?: string | null
          description?: string | null
          entity_id?: number | null
          id?: number
          parent_id?: number | null
          qty?: number | null
          title?: string | null
          track_number?: number | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          carrier_code?: string | null
          created_at?: string | null
          description?: string | null
          entity_id?: number | null
          id?: number
          parent_id?: number | null
          qty?: number | null
          title?: string | null
          track_number?: number | null
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipment_tracking_parent_id_foreign"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "shipment"
            referencedColumns: ["id"]
          },
        ]
      }
      shipping_address: {
        Row: {
          city: string | null
          company: string | null
          country_id: string | null
          created_at: string | null
          customer_id: number | null
          date_updated: string | null
          default_billing: boolean | null
          default_shipping: boolean | null
          fax: string | null
          firstname: string | null
          id: number
          lastname: string | null
          middlename: string | null
          postcode: string | null
          prefix: string | null
          region_id: number | null
          street: string | null
          suffix: string | null
          telephone: string | null
          vat_id: string | null
        }
        Insert: {
          city?: string | null
          company?: string | null
          country_id?: string | null
          created_at?: string | null
          customer_id?: number | null
          date_updated?: string | null
          default_billing?: boolean | null
          default_shipping?: boolean | null
          fax?: string | null
          firstname?: string | null
          id?: number
          lastname?: string | null
          middlename?: string | null
          postcode?: string | null
          prefix?: string | null
          region_id?: number | null
          street?: string | null
          suffix?: string | null
          telephone?: string | null
          vat_id?: string | null
        }
        Update: {
          city?: string | null
          company?: string | null
          country_id?: string | null
          created_at?: string | null
          customer_id?: number | null
          date_updated?: string | null
          default_billing?: boolean | null
          default_shipping?: boolean | null
          fax?: string | null
          firstname?: string | null
          id?: number
          lastname?: string | null
          middlename?: string | null
          postcode?: string | null
          prefix?: string | null
          region_id?: number | null
          street?: string | null
          suffix?: string | null
          telephone?: string | null
          vat_id?: string | null
        }
        Relationships: []
      }
      shipping_addresses: {
        Row: {
          id: number
          phone: string | null
          street: string | null
          zipcode: string | null
        }
        Insert: {
          id?: number
          phone?: string | null
          street?: string | null
          zipcode?: string | null
        }
        Update: {
          id?: number
          phone?: string | null
          street?: string | null
          zipcode?: string | null
        }
        Relationships: []
      }
      shipping_addresses_cities: {
        Row: {
          cities_id: number | null
          id: number
          shipping_addresses_id: number | null
        }
        Insert: {
          cities_id?: number | null
          id?: number
          shipping_addresses_id?: number | null
        }
        Update: {
          cities_id?: number | null
          id?: number
          shipping_addresses_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipping_addresses_cities_cities_id_foreign"
            columns: ["cities_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_addresses_cities_shipping_addresses_id_foreign"
            columns: ["shipping_addresses_id"]
            isOneToOne: false
            referencedRelation: "shipping_addresses"
            referencedColumns: ["id"]
          },
        ]
      }
      shipping_addresses_countries: {
        Row: {
          countries_id: number | null
          id: number
          shipping_addresses_id: number | null
        }
        Insert: {
          countries_id?: number | null
          id?: number
          shipping_addresses_id?: number | null
        }
        Update: {
          countries_id?: number | null
          id?: number
          shipping_addresses_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipping_addresses_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_addresses_countries_shipping_addresses_id_foreign"
            columns: ["shipping_addresses_id"]
            isOneToOne: false
            referencedRelation: "shipping_addresses"
            referencedColumns: ["id"]
          },
        ]
      }
      shipping_addresses_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          shipping_addresses_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          shipping_addresses_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          shipping_addresses_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipping_addresses_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_addresses_directus_users_shipping__1c96539d_foreign"
            columns: ["shipping_addresses_id"]
            isOneToOne: false
            referencedRelation: "shipping_addresses"
            referencedColumns: ["id"]
          },
        ]
      }
      shipping_addresses_orders: {
        Row: {
          id: number
          orders_id: number | null
          shipping_addresses_id: number | null
        }
        Insert: {
          id?: number
          orders_id?: number | null
          shipping_addresses_id?: number | null
        }
        Update: {
          id?: number
          orders_id?: number | null
          shipping_addresses_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipping_addresses_orders_orders_id_foreign"
            columns: ["orders_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_addresses_orders_shipping_addresses_id_foreign"
            columns: ["shipping_addresses_id"]
            isOneToOne: false
            referencedRelation: "shipping_addresses"
            referencedColumns: ["id"]
          },
        ]
      }
      shipping_addresses_states: {
        Row: {
          id: number
          shipping_addresses_id: number | null
          states_id: number | null
        }
        Insert: {
          id?: number
          shipping_addresses_id?: number | null
          states_id?: number | null
        }
        Update: {
          id?: number
          shipping_addresses_id?: number | null
          states_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shipping_addresses_states_shipping_addresses_id_foreign"
            columns: ["shipping_addresses_id"]
            isOneToOne: false
            referencedRelation: "shipping_addresses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shipping_addresses_states_states_id_foreign"
            columns: ["states_id"]
            isOneToOne: false
            referencedRelation: "states"
            referencedColumns: ["id"]
          },
        ]
      }
      shop_type: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          name: string | null
          sort: number | null
          status: string
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          name?: string | null
          sort?: number | null
          status?: string
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          name?: string | null
          sort?: number | null
          status?: string
        }
        Relationships: []
      }
      shop_type_shops: {
        Row: {
          id: number
          shop_type_id: number | null
          shops_id: number | null
        }
        Insert: {
          id?: number
          shop_type_id?: number | null
          shops_id?: number | null
        }
        Update: {
          id?: number
          shop_type_id?: number | null
          shops_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shop_type_shops_shop_type_id_foreign"
            columns: ["shop_type_id"]
            isOneToOne: false
            referencedRelation: "shop_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shop_type_shops_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops: {
        Row: {
          address: string | null
          content: string | null
          custom_domain: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          food_offered: string | null
          id: number
          image: string | null
          name: string | null
          phone: string | null
          policies: Json | null
          rating: number | null
          shipping_policy: string | null
          slug: string | null
          sort: number | null
          status: string
          theme: Json | null
          trusted_score: Json | null
          type: Json | null
          user_created: string | null
          user_updated: string | null
          website: string | null
        }
        Insert: {
          address?: string | null
          content?: string | null
          custom_domain?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          food_offered?: string | null
          id?: number
          image?: string | null
          name?: string | null
          phone?: string | null
          policies?: Json | null
          rating?: number | null
          shipping_policy?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          theme?: Json | null
          trusted_score?: Json | null
          type?: Json | null
          user_created?: string | null
          user_updated?: string | null
          website?: string | null
        }
        Update: {
          address?: string | null
          content?: string | null
          custom_domain?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          food_offered?: string | null
          id?: number
          image?: string | null
          name?: string | null
          phone?: string | null
          policies?: Json | null
          rating?: number | null
          shipping_policy?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          theme?: Json | null
          trusted_score?: Json | null
          type?: Json | null
          user_created?: string | null
          user_updated?: string | null
          website?: string | null
        }
        Relationships: []
      }
      shops_agreements: {
        Row: {
          id: number
          shops_id: number | null
        }
        Insert: {
          id?: number
          shops_id?: number | null
        }
        Update: {
          id?: number
          shops_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_agreements_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops_categories: {
        Row: {
          categories_id: number | null
          id: number
          shops_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          shops_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          shops_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shops_categories_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops_comments: {
        Row: {
          comments_id: number | null
          id: number
          shops_id: number | null
        }
        Insert: {
          comments_id?: number | null
          id?: number
          shops_id?: number | null
        }
        Update: {
          comments_id?: number | null
          id?: number
          shops_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_comments_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shops_comments_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops_countries: {
        Row: {
          countries_id: number | null
          id: number
          shops_id: number | null
        }
        Insert: {
          countries_id?: number | null
          id?: number
          shops_id?: number | null
        }
        Update: {
          countries_id?: number | null
          id?: number
          shops_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shops_countries_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops_departments: {
        Row: {
          departments_id: number | null
          id: number
          shops_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          shops_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          shops_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shops_departments_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          shops_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          shops_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          shops_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_directus_users_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops_files: {
        Row: {
          directus_files_id: string | null
          id: number
          shops_id: number | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          shops_id?: number | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          shops_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_files_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops_products: {
        Row: {
          id: number
          products_id: number | null
          shops_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          shops_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          shops_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shops_products_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
        ]
      }
      shops_showcases: {
        Row: {
          id: number
          shops_id: number | null
          showcases_id: number | null
        }
        Insert: {
          id?: number
          shops_id?: number | null
          showcases_id?: number | null
        }
        Update: {
          id?: number
          shops_id?: number | null
          showcases_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shops_showcases_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shops_showcases_showcases_id_foreign"
            columns: ["showcases_id"]
            isOneToOne: false
            referencedRelation: "showcases"
            referencedColumns: ["id"]
          },
        ]
      }
      shorts: {
        Row: {
          age_gate: string | null
          age_requirement: string | null
          click_through_rate: string | null
          conversion: string | null
          creator: string | null
          date_created: string | null
          date_updated: string | null
          dateTime: string | null
          description: string | null
          duration: string | null
          favorite: boolean | null
          host: string | null
          id: number
          name: string | null
          region: string | null
          saves: string | null
          sort: number | null
          status: string
          thumbnail: string | null
          type: string | null
          user_created: string | null
          user_updated: string | null
          video: string | null
          video_url: string | null
          watch_time: string | null
        }
        Insert: {
          age_gate?: string | null
          age_requirement?: string | null
          click_through_rate?: string | null
          conversion?: string | null
          creator?: string | null
          date_created?: string | null
          date_updated?: string | null
          dateTime?: string | null
          description?: string | null
          duration?: string | null
          favorite?: boolean | null
          host?: string | null
          id?: number
          name?: string | null
          region?: string | null
          saves?: string | null
          sort?: number | null
          status?: string
          thumbnail?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
          video?: string | null
          video_url?: string | null
          watch_time?: string | null
        }
        Update: {
          age_gate?: string | null
          age_requirement?: string | null
          click_through_rate?: string | null
          conversion?: string | null
          creator?: string | null
          date_created?: string | null
          date_updated?: string | null
          dateTime?: string | null
          description?: string | null
          duration?: string | null
          favorite?: boolean | null
          host?: string | null
          id?: number
          name?: string | null
          region?: string | null
          saves?: string | null
          sort?: number | null
          status?: string
          thumbnail?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
          video?: string | null
          video_url?: string | null
          watch_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "shorts_video_foreign"
            columns: ["video"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
        ]
      }
      shorts_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          shorts_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          shorts_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shorts_directus_users_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      shorts_files: {
        Row: {
          directus_files_id: string | null
          id: number
          shorts_id: number | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          shorts_id?: number | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shorts_files_directus_files_id_foreign"
            columns: ["directus_files_id"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shorts_files_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      shorts_products: {
        Row: {
          id: number
          products_id: number | null
          shorts_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          shorts_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          shorts_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shorts_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shorts_products_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
        ]
      }
      shorts_spaces: {
        Row: {
          id: number
          shorts_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          shorts_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          shorts_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "shorts_spaces_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "shorts_spaces_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      showcases: {
        Row: {
          color: string | null
          colortext: string | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          id: number
          image: string | null
          name: string | null
          owner: string | null
          rating: string | null
          slug: string | null
          sort: number | null
          status: string | null
          thumbnail: string | null
          type: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          color?: string | null
          colortext?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          owner?: string | null
          rating?: string | null
          slug?: string | null
          sort?: number | null
          status?: string | null
          thumbnail?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          color?: string | null
          colortext?: string | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          owner?: string | null
          rating?: string | null
          slug?: string | null
          sort?: number | null
          status?: string | null
          thumbnail?: string | null
          type?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "showcases_owner_foreign"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      showcases_products: {
        Row: {
          id: number
          products_id: number | null
          showcases_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          showcases_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          showcases_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "showcases_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "showcases_products_showcases_id_foreign"
            columns: ["showcases_id"]
            isOneToOne: false
            referencedRelation: "showcases"
            referencedColumns: ["id"]
          },
        ]
      }
      showcases_shops: {
        Row: {
          id: number
          shops_id: number | null
          showcases_id: number | null
        }
        Insert: {
          id?: number
          shops_id?: number | null
          showcases_id?: number | null
        }
        Update: {
          id?: number
          shops_id?: number | null
          showcases_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "showcases_shops_shops_id_foreign"
            columns: ["shops_id"]
            isOneToOne: false
            referencedRelation: "shops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "showcases_shops_showcases_id_foreign"
            columns: ["showcases_id"]
            isOneToOne: false
            referencedRelation: "showcases"
            referencedColumns: ["id"]
          },
        ]
      }
      showcases_spaces: {
        Row: {
          id: number
          showcases_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          showcases_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          showcases_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "showcases_spaces_showcases_id_foreign"
            columns: ["showcases_id"]
            isOneToOne: false
            referencedRelation: "showcases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "showcases_spaces_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      site_preference_categories: {
        Row: {
          categories_id: number | null
          id: number
        }
        Insert: {
          categories_id?: number | null
          id?: number
        }
        Update: {
          categories_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "site_preference_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      site_preference_countries: {
        Row: {
          countries_id: number | null
          id: number
        }
        Insert: {
          countries_id?: number | null
          id?: number
        }
        Update: {
          countries_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "site_preference_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
        ]
      }
      site_preference_departments: {
        Row: {
          departments_id: number | null
          id: number
        }
        Insert: {
          departments_id?: number | null
          id?: number
        }
        Update: {
          departments_id?: number | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "site_preference_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
        ]
      }
      site_preference_products: {
        Row: {
          id: number
          products_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "site_preference_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      social_connections: {
        Row: {
          active: boolean | null
          credentials: Json | null
          id: number
          identifier: string | null
          platform: string | null
          status: string
          user: string | null
        }
        Insert: {
          active?: boolean | null
          credentials?: Json | null
          id?: number
          identifier?: string | null
          platform?: string | null
          status?: string
          user?: string | null
        }
        Update: {
          active?: boolean | null
          credentials?: Json | null
          id?: number
          identifier?: string | null
          platform?: string | null
          status?: string
          user?: string | null
        }
        Relationships: []
      }
      Space: {
        Row: {
          creator_id: number | null
          date_created: string | null
          date_updated: string | null
          description: string | null
          groupType: string | null
          id: number
          image: string | null
          media: string | null
          name: string | null
          numberOfMembers: string | null
          slug: string | null
          sort: number | null
          status: string
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          creator_id?: number | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          groupType?: string | null
          id?: number
          image?: string | null
          media?: string | null
          name?: string | null
          numberOfMembers?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          creator_id?: number | null
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          groupType?: string | null
          id?: number
          image?: string | null
          media?: string | null
          name?: string | null
          numberOfMembers?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: []
      }
      Space_products: {
        Row: {
          id: number
          products_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "space_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      space_types: {
        Row: {
          allowed_content_types: Json | null
          component_path: string | null
          custom_tabs: Json | null
          default_tabs: Json | null
          description: string | null
          enabled: boolean | null
          icon: string | null
          id: number
          layout_name: string | null
          name: string | null
          remote_url: string | null
          slug: string | null
        }
        Insert: {
          allowed_content_types?: Json | null
          component_path?: string | null
          custom_tabs?: Json | null
          default_tabs?: Json | null
          description?: string | null
          enabled?: boolean | null
          icon?: string | null
          id?: number
          layout_name?: string | null
          name?: string | null
          remote_url?: string | null
          slug?: string | null
        }
        Update: {
          allowed_content_types?: Json | null
          component_path?: string | null
          custom_tabs?: Json | null
          default_tabs?: Json | null
          description?: string | null
          enabled?: boolean | null
          icon?: string | null
          id?: number
          layout_name?: string | null
          name?: string | null
          remote_url?: string | null
          slug?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "space_types_icon_foreign"
            columns: ["icon"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces: {
        Row: {
          address: string | null
          badges_enabled: boolean | null
          cover_image: string | null
          custom_domain: string | null
          custom_tabs: Json | null
          date_created: string | null
          date_updated: string | null
          default_language: string | null
          description: string | null
          federation_enabled: boolean | null
          group_rules: Json | null
          id: number
          image: string | null
          invite_only: boolean | null
          is_shop: boolean | null
          name: string | null
          numberOfMembers: number | null
          owner: string | null
          products: string | null
          rating: number | null
          rss: Json | null
          shipping_policy: string | null
          slug: string | null
          sort: number | null
          space_analytics: boolean | null
          status: string
          theme: Json | null
          trusted_score: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          address?: string | null
          badges_enabled?: boolean | null
          cover_image?: string | null
          custom_domain?: string | null
          custom_tabs?: Json | null
          date_created?: string | null
          date_updated?: string | null
          default_language?: string | null
          description?: string | null
          federation_enabled?: boolean | null
          group_rules?: Json | null
          id?: number
          image?: string | null
          invite_only?: boolean | null
          is_shop?: boolean | null
          name?: string | null
          numberOfMembers?: number | null
          owner?: string | null
          products?: string | null
          rating?: number | null
          rss?: Json | null
          shipping_policy?: string | null
          slug?: string | null
          sort?: number | null
          space_analytics?: boolean | null
          status?: string
          theme?: Json | null
          trusted_score?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          address?: string | null
          badges_enabled?: boolean | null
          cover_image?: string | null
          custom_domain?: string | null
          custom_tabs?: Json | null
          date_created?: string | null
          date_updated?: string | null
          default_language?: string | null
          description?: string | null
          federation_enabled?: boolean | null
          group_rules?: Json | null
          id?: number
          image?: string | null
          invite_only?: boolean | null
          is_shop?: boolean | null
          name?: string | null
          numberOfMembers?: number | null
          owner?: string | null
          products?: string | null
          rating?: number | null
          rss?: Json | null
          shipping_policy?: string | null
          slug?: string | null
          sort?: number | null
          space_analytics?: boolean | null
          status?: string
          theme?: Json | null
          trusted_score?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_cover_image_foreign"
            columns: ["cover_image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_image_foreign"
            columns: ["image"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_owner_foreign"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_articles: {
        Row: {
          articles_id: number | null
          id: number
          spaces_id: number | null
        }
        Insert: {
          articles_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Update: {
          articles_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_articles_articles_id_foreign"
            columns: ["articles_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_articles_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_cities: {
        Row: {
          cities_id: number | null
          id: number
          spaces_id: number | null
        }
        Insert: {
          cities_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Update: {
          cities_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_cities_cities_id_foreign"
            columns: ["cities_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_cities_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_countries: {
        Row: {
          countries_id: number | null
          id: number
          spaces_id: number | null
        }
        Insert: {
          countries_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Update: {
          countries_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_countries_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_departments: {
        Row: {
          departments_id: number | null
          id: number
          spaces_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_departments_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          spaces_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          spaces_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_directus_users_directus_users_id_foreign"
            columns: ["directus_users_id"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_directus_users_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_files: {
        Row: {
          directus_files_id: string | null
          id: number
          spaces_id: number | null
        }
        Insert: {
          directus_files_id?: string | null
          id?: number
          spaces_id?: number | null
        }
        Update: {
          directus_files_id?: string | null
          id?: number
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_files_directus_files_id_foreign"
            columns: ["directus_files_id"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_files_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_lists: {
        Row: {
          id: number
          lists_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          lists_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          lists_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_lists_lists_id_foreign"
            columns: ["lists_id"]
            isOneToOne: false
            referencedRelation: "lists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_lists_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_live_rooms: {
        Row: {
          id: number
          spaces_id: number | null
        }
        Insert: {
          id?: number
          spaces_id?: number | null
        }
        Update: {
          id?: number
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_live_rooms_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_meta_Space: {
        Row: {
          id: number
        }
        Insert: {
          id?: number
        }
        Update: {
          id?: number
        }
        Relationships: []
      }
      spaces_posts: {
        Row: {
          id: number
          posts_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          posts_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          posts_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_posts_posts_id_foreign"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_posts_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_shop_type: {
        Row: {
          id: number
          shop_type_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          shop_type_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          shop_type_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_shop_type_shop_type_id_foreign"
            columns: ["shop_type_id"]
            isOneToOne: false
            referencedRelation: "shop_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_shop_type_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_space_types: {
        Row: {
          id: number
          space_types_id: number | null
          spaces_id: number | null
        }
        Insert: {
          id?: number
          space_types_id?: number | null
          spaces_id?: number | null
        }
        Update: {
          id?: number
          space_types_id?: number | null
          spaces_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_space_types_space_types_id_foreign"
            columns: ["space_types_id"]
            isOneToOne: false
            referencedRelation: "space_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_space_types_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_states: {
        Row: {
          id: number
          spaces_id: number | null
          states_id: number | null
        }
        Insert: {
          id?: number
          spaces_id?: number | null
          states_id?: number | null
        }
        Update: {
          id?: number
          spaces_id?: number | null
          states_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_states_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_states_states_id_foreign"
            columns: ["states_id"]
            isOneToOne: false
            referencedRelation: "states"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_tags: {
        Row: {
          id: number
          spaces_id: number | null
          tags_id: number | null
        }
        Insert: {
          id?: number
          spaces_id?: number | null
          tags_id?: number | null
        }
        Update: {
          id?: number
          spaces_id?: number | null
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_tags_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_tags_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      spaces_templates: {
        Row: {
          id: number
          spaces_id: number | null
          templates_id: number | null
        }
        Insert: {
          id?: number
          spaces_id?: number | null
          templates_id?: number | null
        }
        Update: {
          id?: number
          spaces_id?: number | null
          templates_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "spaces_templates_spaces_id_foreign"
            columns: ["spaces_id"]
            isOneToOne: false
            referencedRelation: "spaces"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "spaces_templates_templates_id_foreign"
            columns: ["templates_id"]
            isOneToOne: false
            referencedRelation: "templates"
            referencedColumns: ["id"]
          },
        ]
      }
      states: {
        Row: {
          country_code: string | null
          country_id: string | null
          created_at: string | null
          fips_code: string | null
          flag: number | null
          id: number
          iso2: string | null
          latitude: number | null
          longitude: number | null
          name: string | null
          updated_at: string | null
          wikiDataId: string | null
        }
        Insert: {
          country_code?: string | null
          country_id?: string | null
          created_at?: string | null
          fips_code?: string | null
          flag?: number | null
          id?: number
          iso2?: string | null
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          updated_at?: string | null
          wikiDataId?: string | null
        }
        Update: {
          country_code?: string | null
          country_id?: string | null
          created_at?: string | null
          fips_code?: string | null
          flag?: number | null
          id?: number
          iso2?: string | null
          latitude?: number | null
          longitude?: number | null
          name?: string | null
          updated_at?: string | null
          wikiDataId?: string | null
        }
        Relationships: []
      }
      states_cities: {
        Row: {
          cities_id: number | null
          id: number
          states_id: number | null
        }
        Insert: {
          cities_id?: number | null
          id?: number
          states_id?: number | null
        }
        Update: {
          cities_id?: number | null
          id?: number
          states_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "states_cities_cities_id_foreign"
            columns: ["cities_id"]
            isOneToOne: false
            referencedRelation: "cities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "states_cities_states_id_foreign"
            columns: ["states_id"]
            isOneToOne: false
            referencedRelation: "states"
            referencedColumns: ["id"]
          },
        ]
      }
      states_countries: {
        Row: {
          countries_id: number | null
          id: number
        }
        Insert: {
          countries_id?: number | null
          id?: number
        }
        Update: {
          countries_id?: number | null
          id?: number
        }
        Relationships: []
      }
      streams: {
        Row: {
          id: number
          stream_date: string | null
          stream_duration: string | null
          stream_id: number | null
          stream_time: string | null
        }
        Insert: {
          id?: number
          stream_date?: string | null
          stream_duration?: string | null
          stream_id?: number | null
          stream_time?: string | null
        }
        Update: {
          id?: number
          stream_date?: string | null
          stream_duration?: string | null
          stream_id?: number | null
          stream_time?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "streams_stream_id_foreign"
            columns: ["stream_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      streams_ratings: {
        Row: {
          id: number
          ratings_id: number | null
          streams_id: number | null
        }
        Insert: {
          id?: number
          ratings_id?: number | null
          streams_id?: number | null
        }
        Update: {
          id?: number
          ratings_id?: number | null
          streams_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "streams_ratings_ratings_id_foreign"
            columns: ["ratings_id"]
            isOneToOne: false
            referencedRelation: "ratings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "streams_ratings_streams_id_foreign"
            columns: ["streams_id"]
            isOneToOne: false
            referencedRelation: "streams"
            referencedColumns: ["id"]
          },
        ]
      }
      stripe_invoices: {
        Row: {
          attrs: Json | null
          currency: string | null
          customer: string | null
          id: string | null
          period_end: string | null
          period_start: string | null
          status: string | null
          subscription: string | null
          total: number | null
        }
        Insert: {
          attrs?: Json | null
          currency?: string | null
          customer?: string | null
          id?: string | null
          period_end?: string | null
          period_start?: string | null
          status?: string | null
          subscription?: string | null
          total?: number | null
        }
        Update: {
          attrs?: Json | null
          currency?: string | null
          customer?: string | null
          id?: string | null
          period_end?: string | null
          period_start?: string | null
          status?: string | null
          subscription?: string | null
          total?: number | null
        }
        Relationships: []
      }
      stripe_products: {
        Row: {
          active: boolean | null
          attrs: Json | null
          created: string | null
          default_price: string | null
          description: string | null
          id: string | null
          name: string | null
          updated: string | null
        }
        Insert: {
          active?: boolean | null
          attrs?: Json | null
          created?: string | null
          default_price?: string | null
          description?: string | null
          id?: string | null
          name?: string | null
          updated?: string | null
        }
        Update: {
          active?: boolean | null
          attrs?: Json | null
          created?: string | null
          default_price?: string | null
          description?: string | null
          id?: string | null
          name?: string | null
          updated?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          date_created: string | null
          date_updated: string | null
          end_date: string | null
          id: number
          start_date: string | null
          status: string
          subscription_number: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          end_date?: string | null
          id?: number
          start_date?: string | null
          status?: string
          subscription_number?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          end_date?: string | null
          id?: number
          start_date?: string | null
          status?: string
          subscription_number?: string | null
        }
        Relationships: []
      }
      subscriptions_directus_users: {
        Row: {
          directus_users_id: string | null
          id: number
          subscriptions_id: number | null
        }
        Insert: {
          directus_users_id?: string | null
          id?: number
          subscriptions_id?: number | null
        }
        Update: {
          directus_users_id?: string | null
          id?: number
          subscriptions_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_directus_users_subscriptions_id_foreign"
            columns: ["subscriptions_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      subscriptions_products: {
        Row: {
          id: number
          products_id: number | null
          subscriptions_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          subscriptions_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          subscriptions_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "subscriptions_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscriptions_products_subscriptions_id_foreign"
            columns: ["subscriptions_id"]
            isOneToOne: false
            referencedRelation: "subscriptions"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          date_created: string | null
          description: string | null
          id: number
          image: string | null
          name: string | null
          slug: string | null
          sort: number | null
          status: string
        }
        Insert: {
          date_created?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
        }
        Update: {
          date_created?: string | null
          description?: string | null
          id?: number
          image?: string | null
          name?: string | null
          slug?: string | null
          sort?: number | null
          status?: string
        }
        Relationships: []
      }
      tags_articles: {
        Row: {
          articles_id: number | null
          id: number
          tags_id: number | null
        }
        Insert: {
          articles_id?: number | null
          id?: number
          tags_id?: number | null
        }
        Update: {
          articles_id?: number | null
          id?: number
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tags_articles_articles_id_foreign"
            columns: ["articles_id"]
            isOneToOne: false
            referencedRelation: "articles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tags_articles_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      tags_categories: {
        Row: {
          categories_id: number | null
          id: number
          tags_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          tags_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tags_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tags_categories_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      tags_departments: {
        Row: {
          departments_id: number | null
          id: number
          tags_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          tags_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tags_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tags_departments_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      tags_posts: {
        Row: {
          id: number
          posts_id: number | null
          tags_id: number | null
        }
        Insert: {
          id?: number
          posts_id?: number | null
          tags_id?: number | null
        }
        Update: {
          id?: number
          posts_id?: number | null
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tags_posts_posts_id_foreign"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tags_posts_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      tags_products: {
        Row: {
          id: number
          products_id: number | null
          tags_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          tags_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tags_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tags_products_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      tags_shorts: {
        Row: {
          id: number
          shorts_id: number | null
          tags_id: number | null
        }
        Insert: {
          id?: number
          shorts_id?: number | null
          tags_id?: number | null
        }
        Update: {
          id?: number
          shorts_id?: number | null
          tags_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tags_shorts_shorts_id_foreign"
            columns: ["shorts_id"]
            isOneToOne: false
            referencedRelation: "shorts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tags_shorts_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      taxes: {
        Row: {
          age_gating: string | null
          certifications: Json | null
          id: number
          rate: number | null
          tax_class: string | null
        }
        Insert: {
          age_gating?: string | null
          certifications?: Json | null
          id?: number
          rate?: number | null
          tax_class?: string | null
        }
        Update: {
          age_gating?: string | null
          certifications?: Json | null
          id?: number
          rate?: number | null
          tax_class?: string | null
        }
        Relationships: []
      }
      taxes_countries: {
        Row: {
          countries_id: number | null
          id: number
          taxes_id: number | null
        }
        Insert: {
          countries_id?: number | null
          id?: number
          taxes_id?: number | null
        }
        Update: {
          countries_id?: number | null
          id?: number
          taxes_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "taxes_countries_countries_id_foreign"
            columns: ["countries_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "taxes_countries_taxes_id_foreign"
            columns: ["taxes_id"]
            isOneToOne: false
            referencedRelation: "taxes"
            referencedColumns: ["id"]
          },
        ]
      }
      taxes_states: {
        Row: {
          id: number
          states_id: number | null
          taxes_id: number | null
        }
        Insert: {
          id?: number
          states_id?: number | null
          taxes_id?: number | null
        }
        Update: {
          id?: number
          states_id?: number | null
          taxes_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "taxes_states_states_id_foreign"
            columns: ["states_id"]
            isOneToOne: false
            referencedRelation: "states"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "taxes_states_taxes_id_foreign"
            columns: ["taxes_id"]
            isOneToOne: false
            referencedRelation: "taxes"
            referencedColumns: ["id"]
          },
        ]
      }
      templates: {
        Row: {
          date_created: string | null
          date_updated: string | null
          default_content: string | null
          default_roles: string | null
          default_tabs: string | null
          default_types: string | null
          description: string | null
          id: number
          sort: number | null
          status: string
          template_type: string | null
          theme: Json | null
          title: string | null
          user_created: string | null
          user_updated: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          default_content?: string | null
          default_roles?: string | null
          default_tabs?: string | null
          default_types?: string | null
          description?: string | null
          id?: number
          sort?: number | null
          status?: string
          template_type?: string | null
          theme?: Json | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          default_content?: string | null
          default_roles?: string | null
          default_tabs?: string | null
          default_types?: string | null
          description?: string | null
          id?: number
          sort?: number | null
          status?: string
          template_type?: string | null
          theme?: Json | null
          title?: string | null
          user_created?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "templates_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "templates_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      templates_space_types: {
        Row: {
          id: number
          space_types_id: number | null
          templates_id: number | null
        }
        Insert: {
          id?: number
          space_types_id?: number | null
          templates_id?: number | null
        }
        Update: {
          id?: number
          space_types_id?: number | null
          templates_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "templates_space_types_space_types_id_foreign"
            columns: ["space_types_id"]
            isOneToOne: false
            referencedRelation: "space_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "templates_space_types_templates_id_foreign"
            columns: ["templates_id"]
            isOneToOne: false
            referencedRelation: "templates"
            referencedColumns: ["id"]
          },
        ]
      }
      timezones: {
        Row: {
          code: string | null
          description: string | null
          id: number
          name: string | null
        }
        Insert: {
          code?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Update: {
          code?: string | null
          description?: string | null
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          amount: number | null
          date_created: string | null
          date_updated: string | null
          id: number
          order: number | null
          payment_method: string | null
          status: string | null
          transactions_parent_id: string | null
          type: string | null
        }
        Insert: {
          amount?: number | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          order?: number | null
          payment_method?: string | null
          status?: string | null
          transactions_parent_id?: string | null
          type?: string | null
        }
        Update: {
          amount?: number | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          order?: number | null
          payment_method?: string | null
          status?: string | null
          transactions_parent_id?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_order_foreign"
            columns: ["order"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions_currency: {
        Row: {
          currency_id: number | null
          id: number
          transactions_id: number | null
        }
        Insert: {
          currency_id?: number | null
          id?: number
          transactions_id?: number | null
        }
        Update: {
          currency_id?: number | null
          id?: number
          transactions_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transactions_currency_currency_id_foreign"
            columns: ["currency_id"]
            isOneToOne: false
            referencedRelation: "currency"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_currency_transactions_id_foreign"
            columns: ["transactions_id"]
            isOneToOne: false
            referencedRelation: "transactions"
            referencedColumns: ["id"]
          },
        ]
      }
      translations: {
        Row: {
          code: string | null
          date_created: string | null
          date_updated: string | null
          id: number
          image: string | null
          name: string | null
          sort: number | null
          status: string
          url: string | null
        }
        Insert: {
          code?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          image?: string | null
          name?: string | null
          sort?: number | null
          status?: string
          url?: string | null
        }
        Update: {
          code?: string | null
          date_created?: string | null
          date_updated?: string | null
          id?: number
          image?: string | null
          name?: string | null
          sort?: number | null
          status?: string
          url?: string | null
        }
        Relationships: []
      }
      translations_postgresstores: {
        Row: {
          id: number
          postgresstores_id: number | null
          translations_id: number | null
        }
        Insert: {
          id?: number
          postgresstores_id?: number | null
          translations_id?: number | null
        }
        Update: {
          id?: number
          postgresstores_id?: number | null
          translations_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "translations_postgresstores_postgresstores_id_foreign"
            columns: ["postgresstores_id"]
            isOneToOne: false
            referencedRelation: "postgresstores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "translations_postgresstores_translations_id_foreign"
            columns: ["translations_id"]
            isOneToOne: false
            referencedRelation: "translations"
            referencedColumns: ["id"]
          },
        ]
      }
      user_content_interaction: {
        Row: {
          date_created: string | null
          id: number
          interaction_type: string | null
        }
        Insert: {
          date_created?: string | null
          id?: number
          interaction_type?: string | null
        }
        Update: {
          date_created?: string | null
          id?: number
          interaction_type?: string | null
        }
        Relationships: []
      }
      user_friends: {
        Row: {
          created_at: string | null
          friend: string | null
          id: number
          relation: Json | null
          status: string
          user: string | null
        }
        Insert: {
          created_at?: string | null
          friend?: string | null
          id?: number
          relation?: Json | null
          status?: string
          user?: string | null
        }
        Update: {
          created_at?: string | null
          friend?: string | null
          id?: number
          relation?: Json | null
          status?: string
          user?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_friends_friend_foreign"
            columns: ["friend"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_friends_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_friends_posts: {
        Row: {
          id: number
          posts_id: number | null
          user_friends_id: number | null
        }
        Insert: {
          id?: number
          posts_id?: number | null
          user_friends_id?: number | null
        }
        Update: {
          id?: number
          posts_id?: number | null
          user_friends_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_friends_posts_posts_id_foreign"
            columns: ["posts_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_friends_posts_user_friends_id_foreign"
            columns: ["user_friends_id"]
            isOneToOne: false
            referencedRelation: "user_friends"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profile: {
        Row: {
          age: number | null
          avatar: string | null
          bio: string | null
          date_updated: string | null
          display_name: string | null
          id: number
          location: string | null
          socials: Json | null
          store: string | null
          user: string | null
          user_updated: string | null
        }
        Insert: {
          age?: number | null
          avatar?: string | null
          bio?: string | null
          date_updated?: string | null
          display_name?: string | null
          id?: number
          location?: string | null
          socials?: Json | null
          store?: string | null
          user?: string | null
          user_updated?: string | null
        }
        Update: {
          age?: number | null
          avatar?: string | null
          bio?: string | null
          date_updated?: string | null
          display_name?: string | null
          id?: number
          location?: string | null
          socials?: Json | null
          store?: string | null
          user?: string | null
          user_updated?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_profile_avatar_foreign"
            columns: ["avatar"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_profile_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_profile_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      variants: {
        Row: {
          barcode: string | null
          cost: number | null
          created_at: string | null
          id: number
          options_json: Json | null
          price: number | null
          product_id: number | null
          sku: string | null
        }
        Insert: {
          barcode?: string | null
          cost?: number | null
          created_at?: string | null
          id?: number
          options_json?: Json | null
          price?: number | null
          product_id?: number | null
          sku?: string | null
        }
        Update: {
          barcode?: string | null
          cost?: number | null
          created_at?: string | null
          id?: number
          options_json?: Json | null
          price?: number | null
          product_id?: number | null
          sku?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "variants_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      vibez_clips: {
        Row: {
          captions: string | null
          created_at: string | null
          creator_id: number | null
          duration: number | null
          id: number
          media_url: string | null
        }
        Insert: {
          captions?: string | null
          created_at?: string | null
          creator_id?: number | null
          duration?: number | null
          id?: number
          media_url?: string | null
        }
        Update: {
          captions?: string | null
          created_at?: string | null
          creator_id?: number | null
          duration?: number | null
          id?: number
          media_url?: string | null
        }
        Relationships: []
      }
      vibez_product_map: {
        Row: {
          clip_id: number
          product_id: number
        }
        Insert: {
          clip_id: number
          product_id: number
        }
        Update: {
          clip_id?: number
          product_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "vibez_product_map_clip_id_fkey"
            columns: ["clip_id"]
            isOneToOne: false
            referencedRelation: "vibez_clips"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vibez_product_map_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
        ]
      }
      videos: {
        Row: {
          date_created: string | null
          date_updated: string | null
          description: string | null
          distributor: number | null
          duration: string | null
          id: number
          media: string | null
          minio_key: string | null
          name: string | null
          ratings: number | null
          sort: number | null
          status: string
          thumbnail: string | null
          type: string | null
          user: string | null
          user_created: string | null
          user_updated: string | null
          video_url: string | null
          view_count: number | null
          visibility: string | null
        }
        Insert: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          distributor?: number | null
          duration?: string | null
          id?: number
          media?: string | null
          minio_key?: string | null
          name?: string | null
          ratings?: number | null
          sort?: number | null
          status?: string
          thumbnail?: string | null
          type?: string | null
          user?: string | null
          user_created?: string | null
          user_updated?: string | null
          video_url?: string | null
          view_count?: number | null
          visibility?: string | null
        }
        Update: {
          date_created?: string | null
          date_updated?: string | null
          description?: string | null
          distributor?: number | null
          duration?: string | null
          id?: number
          media?: string | null
          minio_key?: string | null
          name?: string | null
          ratings?: number | null
          sort?: number | null
          status?: string
          thumbnail?: string | null
          type?: string | null
          user?: string | null
          user_created?: string | null
          user_updated?: string | null
          video_url?: string | null
          view_count?: number | null
          visibility?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_distributor_foreign"
            columns: ["distributor"]
            isOneToOne: false
            referencedRelation: "attributes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_media_foreign"
            columns: ["media"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_ratings_foreign"
            columns: ["ratings"]
            isOneToOne: false
            referencedRelation: "ratings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_thumbnail_foreign"
            columns: ["thumbnail"]
            isOneToOne: false
            referencedRelation: "directus_files"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_created_foreign"
            columns: ["user_created"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_foreign"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_user_updated_foreign"
            columns: ["user_updated"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
      videos_categories: {
        Row: {
          categories_id: number | null
          id: number
          videos_id: number | null
        }
        Insert: {
          categories_id?: number | null
          id?: number
          videos_id?: number | null
        }
        Update: {
          categories_id?: number | null
          id?: number
          videos_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_categories_categories_id_foreign"
            columns: ["categories_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_categories_videos_id_foreign"
            columns: ["videos_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos_comments: {
        Row: {
          comments_id: number | null
          id: number
          videos_id: number | null
        }
        Insert: {
          comments_id?: number | null
          id?: number
          videos_id?: number | null
        }
        Update: {
          comments_id?: number | null
          id?: number
          videos_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_comments_comments_id_foreign"
            columns: ["comments_id"]
            isOneToOne: false
            referencedRelation: "comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_comments_videos_id_foreign"
            columns: ["videos_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos_departments: {
        Row: {
          departments_id: number | null
          id: number
          videos_id: number | null
        }
        Insert: {
          departments_id?: number | null
          id?: number
          videos_id?: number | null
        }
        Update: {
          departments_id?: number | null
          id?: number
          videos_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_departments_departments_id_foreign"
            columns: ["departments_id"]
            isOneToOne: false
            referencedRelation: "departments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_departments_videos_id_foreign"
            columns: ["videos_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos_manufacturer: {
        Row: {
          id: number
          manufacturer_id: number | null
          videos_id: number | null
        }
        Insert: {
          id?: number
          manufacturer_id?: number | null
          videos_id?: number | null
        }
        Update: {
          id?: number
          manufacturer_id?: number | null
          videos_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_manufacturer_manufacturer_id_foreign"
            columns: ["manufacturer_id"]
            isOneToOne: false
            referencedRelation: "manufacturer"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_manufacturer_videos_id_foreign"
            columns: ["videos_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos_product_types: {
        Row: {
          id: number
          product_types_id: number | null
          videos_id: number | null
        }
        Insert: {
          id?: number
          product_types_id?: number | null
          videos_id?: number | null
        }
        Update: {
          id?: number
          product_types_id?: number | null
          videos_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_product_types_product_types_id_foreign"
            columns: ["product_types_id"]
            isOneToOne: false
            referencedRelation: "product_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_product_types_videos_id_foreign"
            columns: ["videos_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos_products: {
        Row: {
          id: number
          products_id: number | null
          videos_id: number | null
        }
        Insert: {
          id?: number
          products_id?: number | null
          videos_id?: number | null
        }
        Update: {
          id?: number
          products_id?: number | null
          videos_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_products_products_id_foreign"
            columns: ["products_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_products_videos_id_foreign"
            columns: ["videos_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos_tags: {
        Row: {
          id: number
          tags_id: number | null
          videos_id: number | null
        }
        Insert: {
          id?: number
          tags_id?: number | null
          videos_id?: number | null
        }
        Update: {
          id?: number
          tags_id?: number | null
          videos_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "videos_tags_tags_id_foreign"
            columns: ["tags_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "videos_tags_videos_id_foreign"
            columns: ["videos_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      websites: {
        Row: {
          created_at: string | null
          creator: string | null
          description: string | null
          icon: string | null
          id: number
          image: string | null
          name: string | null
          note: string | null
          slug: string | null
          status: string | null
          type: string | null
          url: string | null
          username: string | null
        }
        Insert: {
          created_at?: string | null
          creator?: string | null
          description?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          name?: string | null
          note?: string | null
          slug?: string | null
          status?: string | null
          type?: string | null
          url?: string | null
          username?: string | null
        }
        Update: {
          created_at?: string | null
          creator?: string | null
          description?: string | null
          icon?: string | null
          id?: number
          image?: string | null
          name?: string | null
          note?: string | null
          slug?: string | null
          status?: string | null
          type?: string | null
          url?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "websites_creator_foreign"
            columns: ["creator"]
            isOneToOne: false
            referencedRelation: "directus_users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_complete_schema: { Args: never; Returns: Json }
      increment_view_count: {
        Args: { video_id_input: string }
        Returns: undefined
      }
    }
    Enums: {
      color_source:
        | "99COLORS_NET"
        | "ART_PAINTS_YG07S"
        | "BYRNE"
        | "CRAYOLA"
        | "CMYK_COLOR_MODEL"
        | "COLORCODE_IS"
        | "COLORHEXA"
        | "COLORXS"
        | "CORNELL_UNIVERSITY"
        | "COLUMBIA_UNIVERSITY"
        | "DUKE_UNIVERSITY"
        | "ENCYCOLORPEDIA_COM"
        | "ETON_COLLEGE"
        | "FANTETTI_AND_PETRACCHI"
        | "FINDTHEDATA_COM"
        | "FERRARIO_1919"
        | "FEDERAL_STANDARD_595"
        | "FLAG_OF_INDIA"
        | "FLAG_OF_SOUTH_AFRICA"
        | "GLAZEBROOK_AND_BALDRY"
        | "GOOGLE"
        | "HEXCOLOR_CO"
        | "ISCC_NBS"
        | "KELLY_MOORE"
        | "MATTEL"
        | "MAERZ_AND_PAUL"
        | "MILK_PAINT"
        | "MUNSELL_COLOR_WHEEL"
        | "NATURAL_COLOR_SYSTEM"
        | "PANTONE"
        | "PLOCHERE"
        | "POURPRE_COM"
        | "RAL"
        | "RESENE"
        | "RGB_COLOR_MODEL"
        | "THOM_POOLE"
        | "UNIVERSITY_OF_ALABAMA"
        | "UNIVERSITY_OF_CALIFORNIA_DAVIS"
        | "UNIVERSITY_OF_CAMBRIDGE"
        | "UNIVERSITY_OF_NORTH_CAROLINA"
        | "UNIVERSITY_OF_TEXAS_AT_AUSTIN"
        | "X11_WEB"
        | "XONA_COM"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      color_source: [
        "99COLORS_NET",
        "ART_PAINTS_YG07S",
        "BYRNE",
        "CRAYOLA",
        "CMYK_COLOR_MODEL",
        "COLORCODE_IS",
        "COLORHEXA",
        "COLORXS",
        "CORNELL_UNIVERSITY",
        "COLUMBIA_UNIVERSITY",
        "DUKE_UNIVERSITY",
        "ENCYCOLORPEDIA_COM",
        "ETON_COLLEGE",
        "FANTETTI_AND_PETRACCHI",
        "FINDTHEDATA_COM",
        "FERRARIO_1919",
        "FEDERAL_STANDARD_595",
        "FLAG_OF_INDIA",
        "FLAG_OF_SOUTH_AFRICA",
        "GLAZEBROOK_AND_BALDRY",
        "GOOGLE",
        "HEXCOLOR_CO",
        "ISCC_NBS",
        "KELLY_MOORE",
        "MATTEL",
        "MAERZ_AND_PAUL",
        "MILK_PAINT",
        "MUNSELL_COLOR_WHEEL",
        "NATURAL_COLOR_SYSTEM",
        "PANTONE",
        "PLOCHERE",
        "POURPRE_COM",
        "RAL",
        "RESENE",
        "RGB_COLOR_MODEL",
        "THOM_POOLE",
        "UNIVERSITY_OF_ALABAMA",
        "UNIVERSITY_OF_CALIFORNIA_DAVIS",
        "UNIVERSITY_OF_CAMBRIDGE",
        "UNIVERSITY_OF_NORTH_CAROLINA",
        "UNIVERSITY_OF_TEXAS_AT_AUSTIN",
        "X11_WEB",
        "XONA_COM",
      ],
    },
  },
} as const
