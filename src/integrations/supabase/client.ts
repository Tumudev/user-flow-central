
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://sdgdshwwvkstqxmwkmyp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZ2RzaHd3dmtzdHF4bXdrbXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3ODcyMTYsImV4cCI6MjA1OTM2MzIxNn0.-1OOLcBcJwLPRMBefaRyQAs-sGMTEYKw2z0FSFhdeBI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: localStorage
  }
});
