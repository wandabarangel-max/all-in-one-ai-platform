import { getSupabaseClient } from './supabase';

export async function getStudyPlans(userId: string) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from('study_plans')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw new Error(`Failed to fetch study plans: ${error.message}`);
  return data;
}

export async function createStudyPlan(
  userId: string,
  title: string,
  description?: string,
  topic?: string,
  durationDays?: number
) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from('study_plans')
    .insert([{ user_id: userId, title, description, topic, duration_days: durationDays }])
    .select()
    .single();

  if (error) throw new Error(`Failed to create study plan: ${error.message}`);
  return data;
}

export async function getStudyNotes(userId: string) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from('study_notes')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw new Error(`Failed to fetch study notes: ${error.message}`);
  return data;
}

export async function createStudyNote(
  userId: string,
  title: string,
  content?: string,
  bookTitle?: string,
  studyPlanId?: string
) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from('study_notes')
    .insert([{ user_id: userId, title, content, book_title: bookTitle, study_plan_id: studyPlanId }])
    .select()
    .single();

  if (error) throw new Error(`Failed to create study note: ${error.message}`);
  return data;
}

export async function getIncomeStreams(userId: string) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from('income_streams')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw new Error(`Failed to fetch income streams: ${error.message}`);
  return data;
}

export async function createIncomeStream(
  userId: string,
  name: string,
  amount?: number,
  source?: string,
  description?: string
) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from('income_streams')
    .insert([{ user_id: userId, name, amount, source, description }])
    .select()
    .single();

  if (error) throw new Error(`Failed to create income stream: ${error.message}`);
  return data;
}

export async function getChatHistory(userId: string, sessionId?: string) {
  const supabase = getSupabaseClient();

  let query = supabase.from('ai_chat_history').select('*').eq('user_id', userId);

  if (sessionId) {
    query = query.eq('session_id', sessionId);
  }

  const { data, error } = await query.order('created_at', { ascending: true });

  if (error) throw new Error(`Failed to fetch chat history: ${error.message}`);
  return data;
}

export async function saveChatMessage(
  userId: string,
  role: 'user' | 'assistant',
  message: string,
  sessionId?: string,
  aiModel?: string
) {
  const supabase = getSupabaseClient();

  const { data, error } = await supabase
    .from('ai_chat_history')
    .insert([{ user_id: userId, role, message, session_id: sessionId, ai_model: aiModel }])
    .select()
    .single();

  if (error) throw new Error(`Failed to save chat message: ${error.message}`);
  return data;
}
