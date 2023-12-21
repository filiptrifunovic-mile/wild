/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ofmrqnvmjfnjxxmlznkc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9mbXJxbnZtamZuanh4bWx6bmtjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5ODQ3MjgsImV4cCI6MjAxODU2MDcyOH0.zhQI20h6eFpPfy2OCv1inw8HU2gqwe8fDJ5DGj2NuEQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
