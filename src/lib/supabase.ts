
import { createClient } from "@supabase/supabase-js";

// This is safe to expose as it requires server-side RLS policies to access data
const supabaseUrl = "https://placeholder-url.supabase.co";
const supabaseAnonKey = "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          user_id: string;
          email: string;
          is_verified: boolean;
          created_at: string;
          updated_at: string;
          tier: string;
          usage_counter: number;
        };
        Insert: {
          user_id?: string;
          email: string;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
          tier?: string;
          usage_counter?: number;
        };
        Update: {
          user_id?: string;
          email?: string;
          is_verified?: boolean;
          created_at?: string;
          updated_at?: string;
          tier?: string;
          usage_counter?: number;
        };
      };
    };
  };
};
