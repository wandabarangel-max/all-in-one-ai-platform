export const runtime = 'nodejs';

export async function GET() {
  return Response.json({
    ok: true,
    message: 'AI platform backend is ready.',
    services: ['study-engine', 'money-dashboard', 'content-studio', 'device-hub'],
  });
}

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  return Response.json({
    ok: true,
    input: body,
    summary: 'AI workflow received and queued for processing.',
  });
}
