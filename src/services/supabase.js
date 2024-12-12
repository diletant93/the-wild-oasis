
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://lfijklzpszkjdjzyuoco.supabase.co'
// eslint-disable-next-line no-undef
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmaWprbHpwc3pramRqenl1b2NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1MDg5MjYsImV4cCI6MjA0OTA4NDkyNn0.0ojfnRaDM9Fh60Ys4AZMURux6e5AWEjNclcplLPwijo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
export {supabaseUrl}