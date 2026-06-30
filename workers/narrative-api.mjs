/**
 * オプション: Cloudflare Workers 等にデプロイする統合ナラティブ API。
 * 環境変数 OPENAI_API_KEY を設定し、フロントの VITE_NARRATIVE_API_URL に Worker URL を渡す。
 *
 * レスポンス形式: { hook: string, paragraphs: string[], caption?: string }
 */
export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    }
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }
    if (!env.OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'OPENAI_API_KEY not set' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const profile = await request.json();
    const locale = profile.locale === 'ja' ? 'ja' : 'en';
    const system = locale === 'ja'
      ? 'あなたは神秘的だが押しつけがましくないスピリチュアルライター。断定せず「〜とされます」「〜かもしれません」を使う。医療・法律・財務の助言はしない。JSONのみ返す。'
      : 'You are a mystical but non-prescriptive spiritual writer. Use "may" and "tends to" — never medical, legal, or financial advice. Return JSON only.';

    const user = locale === 'ja'
      ? `次の占術プロフィールから、8段落の統合ナラティブを書いて。hookは1文のキャッチコピー。\n${JSON.stringify(profile)}\n\nJSON: {"hook":"...","paragraphs":["..."],"caption":"Instagram用短いキャプション"}`
      : `Write an 8-paragraph unified narrative from this profile. hook is a one-line tagline.\n${JSON.stringify(profile)}\n\nJSON: {"hook":"...","paragraphs":["..."],"caption":"short Instagram caption"}`;

    const openaiRes = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        temperature: 0.85,
        response_format: { type: 'json_object' },
        messages: [
          { role: 'system', content: system },
          { role: 'user', content: user }
        ]
      })
    });

    if (!openaiRes.ok) {
      return new Response(await openaiRes.text(), { status: 502 });
    }

    const completion = await openaiRes.json();
    const raw = completion.choices?.[0]?.message?.content ?? '{}';
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid model JSON' }), { status: 502 });
    }

    return new Response(JSON.stringify(parsed), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};
