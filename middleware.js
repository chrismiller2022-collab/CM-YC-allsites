// Vercel Routing Middleware: password-protects /admin and everything under it
// (including admin/private.js) with HTTP Basic auth. The browser asks once and
// remembers it for the session; any username works.
//
// Set ADMIN_PASSWORD in Vercel → Project → Settings → Environment Variables.
// If it's missing, /admin stays locked rather than open.

export const config = { matcher: ["/admin", "/admin/:path*"] };

export default function middleware(request) {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    return new Response("Admin is locked: set ADMIN_PASSWORD in the Vercel project settings.", { status: 503 });
  }

  const [scheme, encoded] = (request.headers.get("authorization") || "").split(" ");
  if (scheme === "Basic" && encoded) {
    let decoded = "";
    try { decoded = atob(encoded); } catch {}
    const given = decoded.slice(decoded.indexOf(":") + 1);
    if (decoded.includes(":") && safeEqual(given, password)) {
      // Same signal as next() from @vercel/functions: continue to the static file.
      return new Response(null, { headers: { "x-middleware-next": "1" } });
    }
  }

  return new Response("Authentication required.", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin Hub", charset="UTF-8"', "Cache-Control": "no-store" },
  });
}

// Constant-time comparison so response timing doesn't leak the password.
function safeEqual(a, b) {
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
}
