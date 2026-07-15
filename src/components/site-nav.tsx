import { useState } from "react";

const navCss = `
.cbx-nav-root{--cbx-bg:#ffffff;--cbx-surface:#ffffff;--cbx-surface-muted:#f4f4f5;--cbx-border:rgba(0,0,0,.08);--cbx-border-strong:rgba(0,0,0,.14);--cbx-fg:#0a0a0a;--cbx-muted:#6b6b70;--cbx-chili-400:#3b82f6;--cbx-chili-500:#2563eb;--cbx-chili-600:#1d4ed8;position:sticky;top:0;z-index:50;width:100%;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:var(--cbx-fg);}
.cbx-nav-wrap{position:relative;height:54px;width:100%;}
.cbx-nav-bg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;filter:drop-shadow(0 2px 4px rgba(0,0,0,.05)) drop-shadow(0 12px 24px rgba(0,0,0,.06));}
.cbx-nav-glow-blur{position:absolute;bottom:0;left:50%;transform:translateX(-50%);z-index:2;height:20px;width:min(55vw,208px);background:radial-gradient(ellipse at bottom, rgba(0,0,0,.06), transparent 72%);filter:blur(4px);pointer-events:none;animation:cbx-glow-pulse 3.5s ease-in-out infinite;}
.cbx-nav-glow-line{position:absolute;bottom:0;left:50%;transform:translateX(-50%);z-index:3;height:1px;width:min(46vw,176px);background:linear-gradient(90deg,transparent,var(--cbx-border-strong),transparent);pointer-events:none;}
@keyframes cbx-glow-pulse{0%,100%{opacity:.75;}50%{opacity:1;}}
.cbx-nav{position:absolute;inset:0;z-index:3;display:flex;align-items:flex-end;justify-content:center;padding:0 clamp(.75rem,3vw,1.5rem) 10px;}
.cbx-nav-inner{display:flex;align-items:center;justify-content:center;gap:clamp(.5rem,1.6vw,.75rem);flex-wrap:wrap;}
.cbx-logo{display:flex;align-items:center;gap:.5rem;font-weight:600;font-size:17px;color:var(--cbx-fg);text-decoration:none;letter-spacing:-0.01em;}
.cbx-logo-mark{width:30px;height:30px;flex-shrink:0;display:block;}
.cbx-divider{width:1px;height:24px;background:linear-gradient(180deg,transparent,var(--cbx-border-strong),transparent);}
.cbx-nav-links{display:flex;align-items:center;gap:clamp(1rem,2.5vw,1.75rem);}
.cbx-nav-links a{font-size:14px;font-weight:500;color:var(--cbx-muted);text-decoration:none;white-space:nowrap;transition:color .15s ease;}
.cbx-nav-links a:hover{color:var(--cbx-fg);}
.cbx-cta{display:inline-flex;align-items:center;justify-content:center;font-weight:600;font-size:13px;color:#fff;background:linear-gradient(180deg,var(--cbx-chili-400),var(--cbx-chili-600));border:1px solid rgba(205,28,24,.3);border-radius:.65rem;padding:8px 14px;cursor:pointer;box-shadow:0 2px 8px -2px rgba(205,28,24,.35);transition:filter .2s ease, transform .1s ease;}
.cbx-cta:hover{filter:brightness(1.05);}
.cbx-burger{display:none;flex-direction:column;align-items:center;justify-content:center;width:34px;height:34px;border:none;background:transparent;cursor:pointer;border-radius:.6rem;}
.cbx-burger span{display:block;width:16px;height:2px;background:var(--cbx-muted);margin:2px 0;border-radius:2px;}
.cbx-mobile-menu{display:none;flex-direction:column;background:var(--cbx-surface);border-bottom:1px solid var(--cbx-border);padding:.5rem 1rem 1rem;}
.cbx-mobile-menu a{padding:.75rem .25rem;font-size:15px;font-weight:500;color:var(--cbx-fg);text-decoration:none;border-bottom:1px solid var(--cbx-border);}
.cbx-mobile-menu.open{display:flex;}
@media (max-width:900px) and (min-width:640px){.cbx-nav-inner{gap:.5rem;}.cbx-nav-links{gap:1rem;}.cbx-cta{padding:7px 11px;font-size:12.5px;}}
@media (max-width:639px){.cbx-nav-wrap{height:auto;}.cbx-nav-root{border-bottom:1px solid var(--cbx-border);background:var(--cbx-surface);box-shadow:0 2px 8px rgba(0,0,0,.04);}.cbx-nav-bg,.cbx-nav-glow-blur,.cbx-nav-glow-line{display:none;}.cbx-nav{position:relative;height:56px;align-items:center;justify-content:space-between;padding:0 1rem;}.cbx-nav-inner{width:100%;justify-content:space-between;flex-wrap:nowrap;}.cbx-divider,.cbx-nav-links,.cbx-cta{display:none;}.cbx-burger{display:flex;}}
`;

const LogoPath = "M507.56 219.2C520.84 217.1 532.72 226.69 543.65 232.85C568.57 246.9 593.44 261.06 618.36 275.12C629.8 281.58 643.47 286.92 645.83 301.56C647.41 311.3 646.02 323.5 646.03 333.5C646.04 355.17 646.07 376.83 646.05 398.5C646.04 406.5 646.07 414.5 646.06 422.5C646.06 427.2 645.72 431.89 648.54 435.96C650.73 439.12 654.71 440.75 657.95 442.55C664.79 446.35 671.61 450.18 678.43 454.03C702.3 467.53 726.34 480.71 750.1 494.41C758.21 499.08 774.91 506.18 780.41 513.11C787 521.38 786.14 531.52 786.15 541.5C786.16 556.83 786.15 572.17 786.14 587.5C786.12 607.5 786.19 627.5 786.25 647.5C786.28 657.5 788.09 669.58 784.55 679.09C779.98 691.37 761.84 698.24 751.17 704.63C728.56 718.17 705.54 731.04 682.77 744.3C672.93 750.04 662.4 757.82 651.25 760.69C636.27 764.55 624.23 755.91 611.92 748.58C588.48 734.61 564.79 720.9 541.02 707.47C533.38 703.16 521.05 693.05 512.5 692.83C502.93 692.57 486.53 704.33 477.94 709.44C456.34 722.29 434.41 734.57 412.71 747.23C403.28 752.73 392.75 761.12 381.46 761.74C369.23 762.42 356.81 752.61 346.84 746.63C322.19 731.84 297.1 717.75 272.3 703.22C261.84 697.09 246 691.41 241.17 679.32C237.39 669.83 239.03 658.5 239 648.5C238.93 627.83 239.01 607.17 238.99 586.5C238.97 571.5 238.98 556.5 238.99 541.5C238.99 532.44 238.05 522.9 243.56 515.07C249.58 506.49 263.88 500.58 272.95 495.44C296.73 481.95 320.6 468.51 344.15 454.62C350.24 451.03 356.42 447.48 362.66 444.15C366.75 441.97 371.84 439.95 374.33 435.79C376.73 431.78 376.28 426.99 376.28 422.5C376.28 414.5 376.25 406.5 376.25 398.5C376.25 376.83 376.26 355.17 376.27 333.5C376.27 322.5 374.71 310.39 377.19 299.62C380.3 286.12 395.71 281.1 406.27 274.74C427.81 261.75 450.14 250.07 471.85 237.38C481.22 231.9 497.25 220.83 507.56 219.2ZM620.5 303.01C611.46 306.4 600.34 314.24 591.88 319.41C576.9 328.54 561.38 336.84 546.28 345.77C538.51 350.37 530.63 354.79 522.85 359.38C520.05 361.04 515.53 362.38 513.57 365.08C511.52 367.91 512.17 372.24 512.18 375.5C512.22 382.83 512.22 390.17 512.21 397.5C512.19 420.83 512.27 444.17 512.26 467.5C512.26 475.12 510.57 492.17 513.09 498.5C519.72 496.23 532.25 487.51 539.07 483.57C557.24 473.07 575.3 462.33 593.63 452.1C599.91 448.6 617.97 440.08 620.49 433.99C623.42 426.9 621.71 417.05 621.72 409.5C621.74 391.83 621.74 374.17 621.73 356.5C621.72 344.17 621.77 331.83 621.74 319.5C621.73 314.26 622.73 307.8 620.5 303.01ZM760.5 528.33C751.25 532.37 742.8 538.54 734.01 543.49C715.53 553.9 697.58 565.29 678.99 575.49C671.51 579.59 664.25 584.07 656.92 588.43C653.7 590.34 649.65 591.7 647.52 595.01C645.38 598.34 646.05 602.73 646.07 606.5C646.1 614.83 646.1 623.17 646.09 631.5C646.05 653.83 646.12 676.17 646.09 698.5C646.08 709.76 644.76 722.07 646.5 733.15C655.57 729.46 664.23 723.19 672.68 718.18C691.16 707.22 709.95 696.73 728.63 686.11C735.64 682.13 742.58 678 749.66 674.14C753.11 672.25 757.34 670.47 759.46 666.98C761.72 663.27 761.01 658.67 761 654.5C760.98 646.5 760.99 638.5 760.99 630.5C760.98 607.83 760.97 585.17 760.98 562.5C760.99 552.43 762.52 537.81 760.5 528.33ZM488.5 528.74C461.45 544.86 434.08 560.47 406.92 576.43C400.41 580.26 393.88 584.07 387.36 587.89C384.15 589.78 379.21 591.46 377.09 594.64C375.16 597.55 376.01 602.18 376.01 605.5C376.01 613.83 376.01 622.17 376.01 630.5C376.01 653.17 376 675.83 376.01 698.5C376.01 709.08 374.42 722.6 376.5 732.77C388.01 727.07 398.92 719.98 410.02 713.53C426.06 704.22 442.29 695.17 458.22 685.67C465.14 681.54 472.34 677.87 479.2 673.65C482.58 671.58 486.95 670.1 488.85 666.35C491.42 661.3 489.82 648.47 489.8 642.5C489.75 623.5 489.76 604.5 489.76 585.5C489.76 572.17 489.78 558.83 489.78 545.5C489.77 540.49 491.18 532.82 488.5 528.74Z";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="cbx-nav-root">
      <style>{navCss}</style>
      <div className="cbx-nav-wrap">
        <svg className="cbx-nav-bg" viewBox="0 0 1200 54" preserveAspectRatio="none" aria-hidden="true">
          <path d="M 0 0 H 1200 V 20 H 840 L 804 54 H 396 L 360 20 H 0 Z" fill="#f4f4f5" />
          <path d="M 0 0 H 1200 V 20 H 838 L 802 52 H 398 L 362 20 H 0 Z" fill="#ffffff" />
          <line x1="0" y1="0.5" x2="1200" y2="0.5" stroke="rgba(0,0,0,.14)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M 0 20 H 360 L 396 54 H 804 L 840 20 H 1200" fill="none" stroke="rgba(0,0,0,.08)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="cbx-nav-glow-blur" aria-hidden="true" />
        <div className="cbx-nav-glow-line" aria-hidden="true" />
        <nav className="cbx-nav" aria-label="Main">
          <div className="cbx-nav-inner">
            <a href="#home" className="cbx-logo" aria-label="CUBIX home">
              <svg className="cbx-logo-mark" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path d={LogoPath} fill="#080909" fillRule="evenodd" stroke="#080909" strokeWidth="0.25" strokeLinejoin="round" />
              </svg>
              <span>CUBIX</span>
            </a>
            <span className="cbx-divider" />
            <div className="cbx-nav-links">
              <a href="#services">Services</a>
              <a href="#pricing">Pricing</a>
            </div>
            <span className="cbx-divider" />
            <button className="cbx-cta" type="button">Get started</button>
            <button className="cbx-burger" aria-label="Open menu" onClick={() => setOpen(o => !o)}>
              <span /><span /><span />
            </button>
          </div>
        </nav>
      </div>
      <div className={`cbx-mobile-menu ${open ? "open" : ""}`}>
        <a href="#services" onClick={() => setOpen(false)}>Services</a>
        <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
        <a href="#home" style={{ borderBottom: "none" }} onClick={() => setOpen(false)}>Get started</a>
      </div>
    </header>
  );
}
