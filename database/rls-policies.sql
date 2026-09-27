-- Enable RLS on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE study_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_ideas ENABLE ROW LEVEL SECURITY;
ALTER TABLE income_streams ENABLE ROW LEVEL SECURITY;
ALTER TABLE connected_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_chat_history ENABLE ROW LEVEL SECURITY;

-- Users can only read their own profile
CREATE POLICY "Users can read own profile" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

-- Users can only read their own study plans
CREATE POLICY "Users can read own study plans" ON study_plans
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can create study plans" ON study_plans
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Users can only read their own study notes
CREATE POLICY "Users can read own study notes" ON study_notes
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can create study notes" ON study_notes
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Users can only read their own content ideas
CREATE POLICY "Users can read own content ideas" ON content_ideas
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can create content ideas" ON content_ideas
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Users can only read their own income streams
CREATE POLICY "Users can read own income streams" ON income_streams
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can create income streams" ON income_streams
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Users can only read their own connected accounts
CREATE POLICY "Users can read own connected accounts" ON connected_accounts
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can create connected accounts" ON connected_accounts
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Users can only read their own devices
CREATE POLICY "Users can read own devices" ON devices
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can create devices" ON devices
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);

-- Users can only read their own chat history
CREATE POLICY "Users can read own chat history" ON ai_chat_history
  FOR SELECT USING (auth.uid()::text = user_id::text);

CREATE POLICY "Users can create chat messages" ON ai_chat_history
  FOR INSERT WITH CHECK (auth.uid()::text = user_id::text);
