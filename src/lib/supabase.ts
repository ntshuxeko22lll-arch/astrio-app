import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://llooewepqlkcpqzmiuzo.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxsb29ld2VwcWxrY3Bxem1pdXpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0MTQyOTIsImV4cCI6MjA1MTk5MDI5Mn0.vYhWHzf0GkDxch6hp9QmAA_kXkJEu6C';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// TypeScript types
export type User = {
  id: string;
  username: string;
  created_at: string;
};

export type Post = {
  id: string;
  user_id: string;
  media_url: string;
  caption: string;
  intent_tag: 'learn' | 'chill' | 'focus' | 'motivation';
  likes_count: number;
  created_at: string;
};

export type Comment = {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  created_at: string;
};

export type Like = {
  id: string;
  user_id: string;
  post_id: string;
};

export type Follower = {
  id: string;
  follower_id: string;
  following_id: string;
};

export type Message = {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  created_at: string;
};