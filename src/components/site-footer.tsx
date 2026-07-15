const footerCss = `
.cbx-footer{--cbx-bg:#ffffff;--cbx-border:rgba(0,0,0,.08);--cbx-border-strong:rgba(0,0,0,.14);--cbx-fg:#0a0a0a;--cbx-muted:#6b6b70;--cbx-chili-500:#2563eb;position:relative;isolation:isolate;margin-top:2.5rem;overflow:hidden;background:radial-gradient(ellipse 90% 70% at 50% -10%, #ffffff 0%, #f4f4f5 72%);box-shadow:0 -1px 0 var(--cbx-border-strong),0 -8px 24px -12px rgba(0,0,0,.10),0 2px 4px rgba(0,0,0,.04),0 16px 32px -20px rgba(0,0,0,.10);color:var(--cbx-fg);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;}
.cbx-footer::after{content:'';position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(to bottom, rgba(0,0,0,.035) 0%, transparent 30%, transparent 72%, rgba(0,0,0,.055) 100%);}
.cbx-footer-arch{pointer-events:none;position:absolute;inset-inline:0;top:0;z-index:10;height:64px;overflow:hidden;}
.cbx-arch-shape{position:absolute;left:-4rem;right:-4rem;top:0;height:900px;border:1px solid var(--cbx-border-strong);padding:3px;box-shadow:0 0 0 1px rgba(0,0,0,.05),0 2px 6px rgba(0,0,0,.08),0 24px 48px -24px rgba(0,0,0,.35),0 0 40px -6px rgba(0,0,0,.28);animation:cbx-arch 4s ease-in-out infinite;}
@keyframes cbx-arch{0%,100%{box-shadow:0 0 0 1px rgba(0,0,0,.05),0 2px 6px rgba(0,0,0,.08),0 24px 48px -24px rgba(0,0,0,.32),0 0 34px -6px rgba(0,0,0,.22);}50%{box-shadow:0 0 0 1px rgba(0,0,0,.07),0 2px 6px rgba(0,0,0,.10),0 24px 48px -24px rgba(0,0,0,.42),0 0 46px -4px rgba(0,0,0,.32);}}
.cbx-arch-inner{position:relative;height:100%;border:1px solid var(--cbx-border);}
.cbx-arch-inner::before{content:'';position:absolute;inset-inline:0;top:0;height:1px;background:linear-gradient(90deg,transparent,var(--cbx-border-strong),transparent);}
.cbx-arch-inner::after{content:'';position:absolute;left:50%;top:0;transform:translateX(-50%);height:1px;width:14rem;background:linear-gradient(90deg,transparent,rgba(0,0,0,.35),transparent);}
.cbx-edge-fade{pointer-events:none;position:absolute;inset-block:0;z-index:1;width:6rem;}
.cbx-edge-fade.left{left:0;background:linear-gradient(to right, rgba(255,255,255,.72), transparent);}
.cbx-edge-fade.right{right:0;background:linear-gradient(to left, rgba(255,255,255,.72), transparent);}
.cbx-footer-content{position:relative;z-index:10;display:flex;flex-direction:column;gap:2rem;padding:1.75rem 2rem;}
@media (min-width:1024px){.cbx-footer-content{flex-direction:row;align-items:flex-start;padding:1.75rem 3.5rem;justify-content:space-between;}}
.cbx-brand-col{max-width:28rem;}
.cbx-brand-logo{display:inline-flex;align-items:center;gap:.5rem;font-size:2rem;font-weight:800;color:var(--cbx-fg);text-decoration:none;letter-spacing:-.01em;}
.cbx-brand-desc{margin-top:1.25rem;max-width:24rem;font-size:1rem;line-height:1.65;color:var(--cbx-muted);}
.cbx-brand-meta{margin-top:1.25rem;display:flex;flex-direction:column;gap:.6rem;font-size:13.5px;color:var(--cbx-muted);}
.cbx-brand-meta a{font-weight:500;color:var(--cbx-fg);text-decoration:underline;text-decoration-color:rgba(37,99,235,.45);text-underline-offset:4px;}
.cbx-brand-meta a:hover{color:var(--cbx-chili-500);}
.cbx-link-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:2rem;}
@media (min-width:640px){.cbx-link-grid{grid-template-columns:repeat(3,1fr);}}
@media (min-width:1024px){.cbx-link-grid{grid-template-columns:repeat(4,1fr);gap:2.5rem;}}
.cbx-link-col p.heading{margin:0;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.12em;color:var(--cbx-muted);}
.cbx-link-col ul{list-style:none;margin:1rem 0 0;padding:0;display:flex;flex-direction:column;gap:.6rem;}
.cbx-link-col a{display:inline-flex;align-items:center;height:2rem;padding:0 .6rem;margin:0 -.6rem;font-size:14px;font-weight:500;color:var(--cbx-muted);text-decoration:none;transition:color .2s ease;}
.cbx-link-col a:hover{color:var(--cbx-fg);}
.cbx-wordmark-strip{position:relative;z-index:10;overflow:hidden;}
.cbx-wordmark-inner{display:flex;flex-direction:column;gap:1rem;padding:.75rem 2rem 1.25rem;}
@media (min-width:1024px){.cbx-wordmark-inner{padding:.75rem 3.5rem 1.25rem;flex-direction:row;align-items:flex-end;justify-content:space-between;}}
.cbx-wordmark-row{display:flex;min-width:0;align-items:flex-end;gap:1.2vw;}
.cbx-wordmark{user-select:none;background:linear-gradient(to bottom, rgba(10,10,10,.12), transparent);-webkit-background-clip:text;background-clip:text;color:transparent;font-size:16vw;font-weight:800;line-height:.85;letter-spacing:-.02em;white-space:nowrap;}
.cbx-wordmark-dot{margin-bottom:1.5vw;height:3.5vw;width:3.5vw;background:var(--cbx-chili-500);}
.cbx-copy-block{font-size:14px;}
@media (min-width:1024px){.cbx-copy-block{text-align:right;}}
.cbx-copy-block p{margin:0;}
.cbx-copy-block .crafted{font-weight:500;color:var(--cbx-fg);}
.cbx-copy-block .rights{margin-top:.25rem;color:var(--cbx-muted);}
`;

export function SiteFooter() {
  return (
    <footer className="cbx-footer">
      <style>{footerCss}</style>
      <div className="cbx-footer-arch" aria-hidden="true">
        <div className="cbx-arch-shape"><div className="cbx-arch-inner" /></div>
      </div>
      <div className="cbx-edge-fade left" aria-hidden="true" />
      <div className="cbx-edge-fade right" aria-hidden="true" />

      <div className="cbx-footer-content">
        <div className="cbx-brand-col">
          <a href="#" className="cbx-brand-logo">CUBIX</a>
          <p className="cbx-brand-desc">
            Emergency, backup access to your important Google Drive files — even
            when you lose or forget your phone.
          </p>
          <div className="cbx-brand-meta">
            <p>Contact us at <a href="mailto:hello@cubix.app">hello@cubix.app</a></p>
          </div>
        </div>

        <div className="cbx-link-grid">
          <div className="cbx-link-col">
            <p className="heading">Product</p>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faqs">FAQs</a></li>
            </ul>
          </div>
          <div className="cbx-link-col">
            <p className="heading">Company</p>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="cbx-link-col">
            <p className="heading">Legal</p>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
          <div className="cbx-link-col">
            <p className="heading">Contact</p>
            <ul>
              <li><a href="mailto:hello@cubix.app">Email</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="cbx-wordmark-strip">
        <div className="cbx-wordmark-inner">
          <div className="cbx-wordmark-row">
            <div className="cbx-wordmark" aria-hidden="true">CUBIX</div>
            <span className="cbx-wordmark-dot" aria-hidden="true" />
          </div>
          <div className="cbx-copy-block">
            <p className="crafted">Crafted in 2026</p>
            <p className="rights">© 2026 CUBIX. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
