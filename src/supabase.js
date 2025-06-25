import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xkgiskqnozwzfumrnkkr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrZ2lza3Fub3p3emZ1bXJua2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjg2OTksImV4cCI6MjA2Mzg0NDY5OX0.eHHmL9sJygtgO8SAjoSekSmkXIxZXswteBHgZEBleEI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;