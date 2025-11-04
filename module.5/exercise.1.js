const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/user/:userId", (req, res) => {
  const userId = req.params.userId;
  res.send(`User ID is: ${userId}`);
});

// return a json dog
app.get("/dog", (req, res) => {
  console.log(req.query);
  res.json({
    name: "Buddy",
    age: 3,
    breed: "Labrador",
  });
});

app.get("/about", (req, res) => {
  res.send(`
   <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>BrightLeaf — Small Pretty Page</title>
  <meta name="description" content="A small, modern, and pretty HTML landing page example." />
  <style>
    :root{
      --bg:#0f1724; /* deep navy */
      --card:#0f1724;
      --muted:rgba(255,255,255,0.65);
      --accent1:#7c5cff; /* purple */
      --accent2:#4ee1a5; /* mint */
      --glass: rgba(255,255,255,0.06);
      --radius:14px;
      --fw-regular: 400;
      --fw-strong: 700;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
      background: radial-gradient(1200px 600px at 10% 10%, rgba(124,92,255,0.12), transparent),
                  radial-gradient(900px 450px at 90% 90%, rgba(78,225,165,0.08), transparent),
                  var(--bg);
      color: #e6eef8;
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      padding:48px 24px;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    .container{
      width:100%;
      max-width:980px;
      background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius:calc(var(--radius) + 6px);
      padding:34px;
      box-shadow: 0 10px 30px rgba(2,6,23,0.6), inset 0 1px 0 rgba(255,255,255,0.02);
      backdrop-filter: blur(8px);
      border:1px solid rgba(255,255,255,0.03);
    }

    header{
      display:flex;
      gap:16px;
      align-items:center;
      margin-bottom:18px;
    }
    .logo{
      width:56px;height:56px;border-radius:12px;
      display:flex;align-items:center;justify-content:center;
      background: linear-gradient(135deg,var(--accent1),var(--accent2));
      box-shadow: 0 6px 18px rgba(76,0,255,0.18);
      font-weight:var(--fw-strong);
      font-size:18px;
    }
    h1{margin:0;font-size:24px;letter-spacing:-0.2px}
    p.lead{margin:4px 0 0;color:var(--muted);font-size:14px}

    .grid{
      display:grid;
      grid-template-columns: 1fr 340px;
      gap:22px;
      align-items:start;
      margin-top:18px;
    }

    .card{
      background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
      border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,0.03);
      box-shadow: 0 6px 18px rgba(2,6,23,0.45);
    }

    .hero-title{font-size:20px;margin:0 0 8px}
    .hero-text{color:var(--muted);line-height:1.5;margin:0 0 16px}

    .features{display:grid;grid-template-columns:repeat(2, minmax(0,1fr));gap:12px}
    .feature{background:var(--glass);padding:12px;border-radius:10px;font-size:13px}
    .feature b{display:block;margin-bottom:6px}

    .cta{display:flex;gap:10px;margin-top:14px}
    .btn{
      appearance:none;border:0;padding:10px 14px;border-radius:10px;font-weight:600;cursor:pointer;
      background: linear-gradient(90deg,var(--accent1),var(--accent2));
      color:#08101a;box-shadow:0 6px 14px rgba(74,0,255,0.14);
    }
    .btn.ghost{
      background:transparent;color:var(--muted);border:1px solid rgba(255,255,255,0.06);
    }

    .sidebar .stat{display:flex;justify-content:space-between;align-items:center;padding:12px 0;border-bottom:1px dashed rgba(255,255,255,0.03)}
    .stat strong{font-size:20px}
    .small{font-size:12px;color:var(--muted)}

    footer{margin-top:18px;color:var(--muted);font-size:13px;text-align:center}

    /* Responsive */
    @media (max-width:880px){
      .grid{grid-template-columns:1fr;}
      .sidebar{order:-1}
    }
  </style>
</head>
<body>
  <main class="container" role="main">
    <header>
      <div class="logo" aria-hidden>BL</div>
      <div>
        <h1>BrightLeaf</h1>
        <p class="lead">A tiny landing micro-page with a modern look — ready to copy &amp; paste.</p>
      </div>
    </header>

    <section class="grid">
      <div class="card">
        <h2 class="hero-title">Make small things feel delightful</h2>
        <p class="hero-text">This compact template shows how simple layout, soft gradients, and subtle glass effects make a tiny page look elevated. Use it as a starter or style reference.</p>

        <div class="features">
          <div class="feature"><b>Responsive</b> Works on phones and desktops.</div>
          <div class="feature"><b>Accessible</b> Semantic HTML and readable contrast.</div>
          <div class="feature"><b>Minimal</b> Small file-size, easy to edit.</div>
          <div class="feature"><b>Attractive</b> Modern colors and soft shadows.</div>
        </div>

        <div class="cta">
          <button class="btn">Get started</button>
          <button class="btn ghost">Learn more</button>
        </div>
      </div>

      <aside class="card sidebar">
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px">
          <div style="width:44px;height:44px;border-radius:10px;background:linear-gradient(135deg,var(--accent2),var(--accent1));display:flex;align-items:center;justify-content:center;font-weight:700;color:#051018">★</div>
          <div>
            <div style="font-weight:700">Tiny plan</div>
            <div class="small">Perfect for prototypes</div>
          </div>
        </div>

        <div class="stat"><span class="small">Uptime</span><strong>99.99%</strong></div>
        <div class="stat"><span class="small">Latency</span><strong>42 ms</strong></div>
        <div class="stat"><span class="small">Users</span><strong>1.2k</strong></div>

        <div style="margin-top:12px">
          <label class="small" for="email">Join our newsletter</label>
          <div style="display:flex;gap:8px;margin-top:8px">
            <input id="email" type="email" placeholder="you@domain.com" style="flex:1;padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit"/>
            <button class="btn" style="padding:10px 12px">Sign</button>
          </div>
        </div>
      </aside>
    </section>

    <footer>
      Crafted with ♥ · <span class="small">Copy this file and tweak it — stay tiny, ship fast.</span>
    </footer>
  </main>
</body>
</html>
    `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
