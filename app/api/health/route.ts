export const runtime = 'nodejs';

export async function GET() {
  return Response.json({
    ok: true,
    status: 'Database and auth layer initialized.',
    features: [
      'User authentication (email/password)',
      'User profiles and settings',
      'Study plans and notes',
      'Income streams tracking',
      'Connected accounts (Gmail, WhatsApp, etc.)',
      'Device management',
      'AI chat history storage',
    ],
  });
}
