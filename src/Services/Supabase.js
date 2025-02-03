//

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lnirntyioaoxkntnmxgt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxuaXJudHlpb2FveGtudG5teGd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg1NzQyMTIsImV4cCI6MjA1NDE1MDIxMn0.MLX_sF5HYMucFFqBZu7W2x02F_tqw7gvgdjXQb4s2_U";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
