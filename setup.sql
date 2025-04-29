CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS prompts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  text TEXT NOT NULL,
  folder TEXT,
  tags TEXT[],
  xp INTEGER DEFAULT 0,
  favorite BOOLEAN DEFAULT false,
  versions JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
