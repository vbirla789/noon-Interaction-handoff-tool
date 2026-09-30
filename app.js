/* noon Home — rails are data; everything else is static markup. */
(() => {
  const A = 'assets/';

  /* ── SKU cards (912:11004 et al.) ─────────────────────────────────── */
  const P = {
    airpods:  { img: '00ff6.png', size: 122, title: 'Apple Airpods Pro 2 Wireless Earbuds' },
    washer:   { img: '1a4eb.png', size: 142, title: 'Whirlpool 7 kg Magic Clean ' },
    maynos:   { img: '6648e.png', size: 122, title: 'MAYNOS Suction Phone Case Mount', spacer: true },
  };
  // badge: [svg, right inset %] — Group 1686556680/1 ("express" / "express Today")
  const rails = {
    reco: [
      { id: '912:11004', p: P.airpods, heart: 'b4444.svg', add: [94, 8], best: true, badge: ['818b4.svg', 2.06] },
      { id: '912:11085', p: P.washer,  heart: 'b4444.svg', add: [96, 8], ad: true,   badge: ['9b14c.svg', 3.29] },
      { id: '912:11153', p: P.maynos,  heart: '6478e.svg', add: [96, 6],             badge: ['818b4.svg', 2.06] },
    ],
    best: [
      { id: '912:11323', p: P.airpods, heart: '7209f.svg', add: [94, 8], best: true, badge: ['45c98.svg', 2.06] },
      { id: '912:11404', p: P.washer,  heart: '7209f.svg', add: [96, 8], ad: true,   badge: ['9e712.svg', 3.29] },
      { id: '912:11472', p: P.maynos,  heart: '6478e.svg', add: [96, 6],             badge: ['45c98.svg', 2.06] },
    ],
    summer: [
      { id: '912:11867', p: P.airpods, heart: '6478e.svg', add: [96, 8], flat: true, badge: ['9f1a6.svg', 2.06] },
      { id: '912:11947', p: P.washer,  heart: '6478e.svg', add: [96, 6], flat: true, badge: ['86b82.svg', 3.29] },
      { id: '912:12014', p: P.maynos,  heart: '6478e.svg', add: [96, 6], ad: true,   badge: ['9f1a6.svg', 2.06] },
    ],
    selling: [
      { id: '912:12100', p: P.airpods, heart: '7209f.svg', add: [94, 8], best: true, badge: ['9bd07.svg', 2.06] },
      { id: '912:12181', p: P.washer,  heart: '7209f.svg', add: [96, 8], ad: true,   badge: ['9e712.svg', 3.29] },
      { id: '912:12249', p: P.maynos,  heart: '6478e.svg', add: [96, 6],             badge: ['9bd07.svg', 2.06] },
    ],
  };

  const sku = (c) => `
    <article class="sku${c.flat ? ' sku--flat' : ''}" data-node-id="${c.id}">
      <div class="sku__img">
        <div class="sku__photo" style="width:${c.p.size}px;height:${c.p.size}px"><img src="${A}${c.p.img}" alt="${c.p.title.trim()}" /></div>
        <button class="sku__wish" aria-label="Add to wishlist"><img src="${A}${c.heart}" alt="" /></button>
        <button class="sku__add sk" style="left:${c.add[0]}px;border-radius:${c.add[1]}px" aria-label="Add to cart"><img src="${A}e4d22.svg" alt="" /></button>
        ${c.best ? '<span class="sku__best"><span>Best Seller</span></span>' : ''}
        ${c.ad ? '<span class="ad">Ad</span>' : ''}
      </div>
      <div class="sku__info">
        <div class="sku__top">
          <p class="sku__title">${c.p.title}</p>
          <div class="sku__rate"><span class="chip-r"><span class="star"><img src="${A}98426.svg" alt="" /></span><span>4.3</span></span>${c.p.spacer ? '<i></i>' : ''}</div>
        </div>
        <div class="sku__price">
          <p class="sku__prow"><b>&#xE001;899</b><s>1399</s><em>33%</em></p>
          <p class="sku__del"><img src="${A}be986.svg" alt="" /><span>Free Delivery</span></p>
        </div>
        <div class="sku__badge"><img style="width:${100 - c.badge[1]}%" src="${A}${c.badge[0]}" alt="express" /></div>
      </div>
    </article>`;

  /* ── Keep shopping for (912:11555) ───────────────────────────────── */
  const IMG1234 = '<span class="ly clip" style="left:50%;top:calc(50% + 7.5px);width:86px;height:75px;transform:translate(-50%,-50%)"><img class="ab" style="left:-27.91%;top:-333.33%;width:393.02%;height:977.02%;object-fit:fill" src="' + A + 'e67d6.png" alt="" /></span>';
  const big = { w: 114, h: 130, bg: '#f9f9fb', sc: '#f1f7fd' };
  const sm  = { w: 100, h: 114, bg: '#ebedff', sc: 'rgba(26,26,26,.09)' };
  const chipViewed  = { bg: '#f1f7fd', pad: '2px 2px 2px 4px', color: '#0076ff', icon: 'ef851.svg' };
  const chipSmBlue  = { bg: '#eef5fd', pad: '2px 4px', color: '#0076ff', icon: 'e3e04.svg', w: 69 };
  const chipSmPlain = { bg: 'transparent', pad: '0', color: '#0076ff', icon: 'e3e04.svg', w: 96 };
  const keep = [
    { id: '912:11556', box: big, search: true, name: 'Playstation 5', chip: [chipViewed, '2 Viewed'],
      photo: `<span class="ly" style="left:calc(50% - 2.5px);top:calc(50% + 7.1px);width:129px;height:67px;transform:translate(-50%,-50%)"><img src="${A}5c6a4.png" alt="" /></span>` },
    { id: '912:11581', box: big, search: true, name: 'Adidas Rivalry', chip: [chipViewed, '5 Viewed'],
      photo: `<span class="ly" style="left:9px;top:16.6px;width:100px;height:100px"><img src="${A}89c98.png" alt="" /></span>` },
    { id: '912:11606', box: big, search: true, name: 'Body serum', chip: [chipViewed, '1 Viewed'],
      photo: `<span class="ly" style="left:calc(50% - 2.78px);top:calc(50% + 3.53px);width:80px;height:82px;transform:translate(-50%,-50%)"><img src="${A}b27a1.png" alt="" /></span>` },
    { id: '912:11631', box: { w: 107, h: 122, bg: '#f9f9fb', sc: 'rgba(14,14,14,.04)' }, name: 'Evo Sl', tag: '#fff',
      chip: [{ bg: '#fff', pad: '2px 4px', color: '#af33d9', icon: '40a61.svg' }, '10 Products'],
      photo: `<span class="ly" style="left:-1px;top:11.5px;width:100px;height:100px"><img src="${A}6b4ee.png" alt="" /></span>` },
    { id: '912:11656', box: sm, small: true, name: 'Playstation 5', tag: 'rgba(255,255,255,.55)', chip: [chipSmBlue, '2 Products'], photo: IMG1234 },
    { id: '912:11681', box: sm, small: true, name: 'Playstation 5', tag: 'rgba(255,255,255,.55)', chip: [chipSmBlue, '2 Products'], photo: IMG1234 },
    { id: '912:11706', box: sm, small: true, name: 'Playstation 5', tag: 'rgba(255,255,255,.55)', chip: [chipSmPlain, '2 Products'], photo: IMG1234 },
    { id: '912:11731', box: sm, small: true, name: 'Playstation 5', tag: 'rgba(255,255,255,.55)', chip: [chipSmPlain, '2 Products'], photo: IMG1234 },
    { id: '912:11756', box: sm, small: true, name: 'Playstation 5', tag: 'rgba(255,255,255,.55)', chip: [chipSmPlain, '2 Products'], photo: IMG1234 },
    { id: '912:11781', box: sm, small: true, name: 'Playstation 5', chip: [chipSmPlain, '4 Products'], photo: IMG1234 },
    { id: '912:11804', box: sm, small: true, name: 'Playstation 5', chip: [chipSmPlain, '4 Products'], photo: IMG1234 },
    { id: '912:11827', box: sm, small: true, name: 'Playstation 5', chip: [chipSmPlain, '4 Products'], photo: IMG1234 },
  ];
  const kc = (k) => {
    const [ch, label] = k.chip;
    return `
    <a class="kc${k.small ? ' kc--sm' : ''}" style="width:${k.box.w}px" data-node-id="${k.id}">
      <div class="kc__box stroke" style="width:${k.box.w}px;height:${k.box.h}px;background:${k.box.bg};--sc:${k.box.sc}">
        ${k.photo}
        ${k.tag ? `<span class="kc__tag" style="background:${k.tag}">2 days ago</span>` : ''}
      </div>
      <div class="kc__txt" style="padding:0 ${k.small ? 0 : 2}px">
        <div class="kc__name">${k.search ? `<img src="${A}61845.svg" alt="" />` : ''}<p>${k.name}</p></div>
        <span class="kc__chip" style="background:${ch.bg};padding:${ch.pad};color:${ch.color}${ch.w ? `;width:${ch.w}px` : ''}"><span>${label}</span><i><img src="${A}${ch.icon}" alt="" /></i></span>
      </div>
    </a>`;
  };

  for (const [name, cards] of Object.entries(rails)) {
    const el = document.querySelector(`[data-rail="${name}"]`);
    if (el) el.innerHTML = cards.map(sku).join('');
  }
  const keepEl = document.querySelector('[data-rail="keep"]');
  if (keepEl) keepEl.innerHTML = keep.map(kc).join('');

  /* ── Recommended tabs ────────────────────────────────────────────── */
  const tabs = document.getElementById('tabs');
  tabs.addEventListener('click', (e) => {
    const t = e.target.closest('.tab');
    if (!t) return;
    for (const b of tabs.children) {
      const on = b === t;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-selected', on);
    }
  });

  /* Tab Bar 912:10983 is sticky; its (hidden) white fill shows once stuck */
  const scroll = document.getElementById('scroll');
  const sbar = document.getElementById('sbar'), SBAR_H = 42.565;
  const onScroll = () => {
    const top = tabs.getBoundingClientRect().top - scroll.getBoundingClientRect().top;
    tabs.classList.toggle('is-stuck', top <= SBAR_H + 0.5 && scroll.scrollTop > 0);
    sbar.classList.toggle('is-solid', scroll.scrollTop > 2);        // content now passes under the status bar
  };
  scroll.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ══ Motion tokens — the ProtoPie Dev Handoff ═════════════════════════════
   cloud.protopie.io/p/041e0f998b5182ed0ca8ce6d/r/8e30fe8e ("noon X supermall",
   scenario Test01). Read from its recorded property tracks (≈120Hz), not
   eyeballed:
   · SPRING  every movement — stiffness 280.6, damping 27.14, mass 1
             (ω 16.75 rad/s, ζ 0.81, 1.3% overshoot, settled ≈0.5s).
             Fits the push, row-reveal and row-hide tracks to ≤0.08% RMS.
   · EASE_OUT fades in (rows, trending, cards): fast-start ease-out, 183ms;
             276ms for the widget.
   · EASE_IO  fades out, chips in, skeleton: S-curve, 189ms; 388ms for the
             skeleton fading in.
   · STAGGER 60ms in (top → bottom), 40ms out (bottom → top).
   · Push parallax: page 382 → 0 while the page under it goes 0 → −200.   */
const PP = (() => {
  const W = 16.75, Z = 0.81, WD = W * Math.sqrt(1 - Z * Z);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)');
  // displacement / velocity of the spring released from x0 with velocity v0
  const disp = (x0, v0 = 0) => (t) => Math.exp(-Z * W * t) * (x0 * Math.cos(WD * t) + ((v0 + Z * W * x0) / WD) * Math.sin(WD * t));
  const vel  = (x0, v0 = 0) => (t) => Math.exp(-Z * W * t) * (v0 * Math.cos(WD * t) - ((Z * W * v0 + W * W * x0) / WD) * Math.sin(WD * t));
  const settleTime = (dist) => Math.max(0.2, Math.log(Math.max(Math.abs(dist), 0.02) / 0.02) / (Z * W) + 0.05);
  const EASE_OUT = 'linear(0, 0.2363, 0.3453, 0.4424, 0.5291, 0.607, 0.6754, 0.7351, 0.7873, 0.8322, 0.8702, 0.9019, 0.9278, 0.9489, 0.9654, 0.9779, 0.9871, 0.9933, 0.9971, 0.9991, 1)';
  const EASE_IO  = 'linear(0, 0.009, 0.0207, 0.0384, 0.0644, 0.1004, 0.1507, 0.2205, 0.3141, 0.4332, 0.5641, 0.6834, 0.7786, 0.8477, 0.8976, 0.9344, 0.9605, 0.9789, 0.9908, 0.9976, 1)';
  const OUT_MS = 183, OUT_LONG_MS = 276, IO_MS = 189, IO_LONG_MS = 388;

  /* spring-driven property as sampled WAAPI keyframes */
  function spring(el, from, to, fmt, { delay = 0, v0 = 0 } = {}) {
    if (reduce.matches) return el.animate([fmt(to), fmt(to)], { duration: 1, delay, fill: 'both' });
    const d = from - to, dur = settleTime(d), N = Math.max(12, Math.round(dur * 60)), f = disp(d, v0);
    const frames = Array.from({ length: N + 1 }, (_, k) => ({ offset: k / N, ...fmt(k === N ? to : to + f((k / N) * dur)) }));
    return el.animate(frames, { duration: dur * 1000, delay, fill: 'both' });
  }
  const moveY = (el, from, to, o) => spring(el, from, to, (v) => ({ transform: `translateY(${(+v).toFixed(2)}px)` }), o);
  function fade(el, from, to, { curve = 'out', ms, delay = 0 } = {}) {
    const duration = ms ?? (curve === 'out' ? OUT_MS : IO_MS);
    return el.animate([{ opacity: from }, { opacity: to }], { duration, delay, easing: curve === 'out' ? EASE_OUT : EASE_IO, fill: 'both' });
  }
  /* bake the end state once every animation has finished (a cancel skips it) */
  const commit = (el, anims, styles) => Promise.all(anims.map((a) => a.finished))
    .then(() => { Object.assign(el.style, styles); anims.forEach((a) => a.cancel()); }).catch(() => {});
  const cur = (el) => { const cs = getComputedStyle(el); return { op: +cs.opacity, y: cs.transform === 'none' ? 0 : new DOMMatrix(cs.transform).m42 }; };
  const stop = (el) => { const c = cur(el); el.getAnimations().forEach((a) => a.cancel()); el.style.opacity = c.op; el.style.transform = c.y ? `translateY(${c.y}px)` : ''; return c; };

  return { W, Z, disp, vel, settleTime, spring, moveY, fade, commit, cur, stop, reduce,
           EASE_OUT, EASE_IO, OUT_MS, OUT_LONG_MS, IO_MS, IO_LONG_MS, IN_STAGGER: 60, OUT_STAGGER: 40, PARALLAX: 200 / 382 };
})();

/* ══ Home ⇄ Search navigation — push on the ProtoPie spring ═══════════════
   One progress value p (0 = home, 1 = search) drives everything:
     search page   x = (1 − p) · W          slides in from the right
     home page     x = −(200/382) · W · p   parallax, as in the handoff
   Taps release the spring from rest (the handoff starts it on touch-up);
   an edge-swipe hands the finger's velocity to the same spring, so a push
   can be caught and reversed at any point without a jump.                */
(() => {
  const screen = document.getElementById('screen');
  const home   = document.getElementById('home');
  const dim    = document.getElementById('homeDim');
  const search = document.getElementById('search');
  const entry  = document.getElementById('searchEntry');
  const back   = document.getElementById('searchBack');
  const input  = document.getElementById('searchInput');
  const edge   = document.getElementById('searchEdge');
  const reduce = PP.reduce;

  let p = 0, v = 0;                // progress and its velocity (per second)
  let anim = null;                 // { target, t0, x0, v0 }
  let dragging = null;

  const W = () => screen.clientWidth || 375;

  function render() {
    const w = W();
    if (reduce.matches) {          // no travel: a cross-fade instead
      search.style.transform = 'none';
      search.style.opacity = Math.min(1, Math.max(0, p));
      home.style.transform = 'none';
    } else {
      search.style.opacity = '';
      search.style.transform = `translate3d(${((1 - p) * w).toFixed(2)}px,0,0)`;
      home.style.transform = p > 0 ? `translate3d(${(-PP.PARALLAX * w * p).toFixed(2)}px,0,0)` : '';
    }
    dim.style.opacity = 0;         // the handoff does not dim the page underneath
    search.style.visibility = p > 0.0005 ? 'visible' : 'hidden';
  }

  function settle(target) {
    p = target; v = 0; anim = null; render();
    const onSearch = target === 1;
    search.inert = !onSearch;
    home.inert = onSearch;
    home.style.willChange = search.style.willChange = '';
    if (!onSearch) { input.blur(); search.dispatchEvent(new CustomEvent('search:closed')); }
  }

  function step(now) {
    if (!anim) return;
    const t = (now - anim.t0) / 1000;
    const x = PP.disp(anim.x0, anim.v0)(t);
    v = PP.vel(anim.x0, anim.v0)(t);
    p = anim.target + x;
    if (Math.abs(x) < 0.0004 && Math.abs(v) < 0.02) return settle(anim.target);
    render();
    requestAnimationFrame(step);
  }

  function animateTo(target, v0 = v) {
    search.inert = false;          // reachable while travelling (interruptible)
    if (target > 0) search.style.visibility = 'visible';   // focusable from the first frame
    home.style.willChange = search.style.willChange = 'transform';
    const running = !!anim;
    anim = { target, t0: performance.now(), x0: p - target, v0 };
    if (!running) requestAnimationFrame(step);
  }
  const springTo = animateTo;

  /* History: the browser back button pops the search page too */
  let ignorePop = false;
  const onSearchState = () => history.state && history.state.view === 'search';
  function openSearch() {
    if (!onSearchState()) history.pushState({ view: 'search' }, '', '#search');
    animateTo(1, 0);               // un-inerts the page first, so it can take focus
    search.dispatchEvent(new CustomEvent('search:push'));
    // Focus in the tap itself so a real phone raises its keyboard with the push;
    // preventScroll stops the off-screen input from scrolling the device frame.
    input.focus({ preventScroll: true });
  }
  function closeSearch(v0) {
    animateTo(0, v0 === undefined ? 0 : v0);
    if (onSearchState()) { ignorePop = true; history.back(); }
  }
  addEventListener('popstate', () => {
    if (ignorePop) { ignorePop = false; return; }
    const toSearch = location.hash === '#search' || location.hash === '#results';
    // A typed/linked #search arrives with no state — tag it so Back can pop it
    if (toSearch && !onSearchState()) history.replaceState({ view: 'search' }, '', location.href);
    animateTo(toSearch ? 1 : 0, 0);
  });

  entry.addEventListener('click', openSearch);
  entry.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openSearch(); }
  });
  back.addEventListener('click', () => closeSearch());
  search.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeSearch(); });

  /* Edge swipe back (left 24px strip): follows the finger 1:1, then the
     release velocity is projected forward to decide pop vs. stay. */
  edge.addEventListener('pointerdown', (e) => {
    if (p < 0.5 && !anim) return;
    try { edge.setPointerCapture(e.pointerId); } catch (_) { /* synthetic / already released */ }
    anim = null;                               // catch it mid-flight
    dragging = { x: e.clientX, p0: p, samples: [[performance.now(), e.clientX]] };
    home.style.willChange = search.style.willChange = 'transform';
    input.blur();
  });
  edge.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const w = W();
    let next = dragging.p0 - (e.clientX - dragging.x) / w;
    if (next > 1) next = 1 + (next - 1) * 0.12;  // rubber-band past fully open
    p = Math.max(0, next);
    const s = dragging.samples; s.push([performance.now(), e.clientX]);
    while (s.length > 2 && s[s.length - 1][0] - s[0][0] > 90) s.shift();
    render();
  });
  const endDrag = (e) => {
    if (!dragging) return;
    const s = dragging.samples, a = s[0], b = s[s.length - 1];
    const vx = b[0] > a[0] ? (b[1] - a[1]) / (b[0] - a[0]) : 0;   // px/ms, + = rightwards
    const vp = (-vx * 1000) / W();                                 // progress per second
    dragging = null;
    const projected = p + vp * 0.18;                               // UIKit-style projection
    if (projected < 0.5) closeSearch(vp); else springTo(1, vp);
  };
  edge.addEventListener('pointerup', endDrag);
  edge.addEventListener('pointercancel', endDrag);

  // The scene always starts on Home: a reload on #search / #results (or any
  // restored hash) is cleaned back to the bare page instead of deep-linking.
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  history.replaceState({ view: 'home' }, '', location.pathname + location.search);
  settle(0);
})();

/* ══ Search suggestions — ProtoPie handoff motion ═════════════════════════
   From the recording (typing "iphone"):
   · push: trending + banners rise 20px while fading in, 124ms after touch-up
   · first keystroke: they drop 20px while fading out (S-curve)
   · query becomes "iphone": 110ms later the rows arrive TOP→BOTTOM
     60ms apart, each falling 20px on the spring with the ease-out fade
   · query stops matching: rows leave BOTTOM→TOP 40ms apart, lifting 20px
     on the spring with the S-curve fade
   Every animation starts from the element's current opacity/position.   */
(() => {
  const search  = document.getElementById('search');
  const input   = document.getElementById('searchInput');
  const art     = document.querySelector('.srch__art');
  const box     = document.getElementById('suggest');
  const rows    = [...box.querySelectorAll('.sug')];

  const MATCH = 'iphone', REVEAL_DELAY = 110, ART_PUSH_DELAY = 124, TRAVEL = 20;

  function revealRow(el, delay) {
    const c = PP.stop(el), fresh = c.op < 0.02;
    const a = [PP.moveY(el, fresh ? -TRAVEL : c.y, 0, { delay }), PP.fade(el, fresh ? 0 : c.op, 1, { curve: 'out', delay })];
    PP.commit(el, a, { opacity: 1, transform: '' });
  }
  // fast = the exit into results: quicker and shorter, so it can finish before the page arrives
  const FAST = { STAGGER: 25, FADE_MS: 130, MOVE_MS: 150, TRAVEL: 12 };
  function hideRow(el, delay, fast = false) {
    const c = PP.stop(el);
    if (c.op < 0.02) { el.style.opacity = 0; el.style.transform = ''; return; }
    const a = fast
      ? [el.animate([{ transform: `translateY(${c.y}px)` }, { transform: `translateY(${-FAST.TRAVEL}px)` }], { duration: FAST.MOVE_MS, delay, easing: PP.EASE_IO, fill: 'both' }),
         PP.fade(el, c.op, 0, { curve: 'io', ms: FAST.FADE_MS, delay })]
      : [PP.moveY(el, c.y, -TRAVEL, { delay }), PP.fade(el, c.op, 0, { curve: 'io', delay })];
    PP.commit(el, a, { opacity: 0, transform: '' });
  }
  function artTo(show, delay = 0) {
    const c = PP.stop(art);
    const a = show
      ? [PP.moveY(art, c.op < 0.02 ? TRAVEL : c.y, 0, { delay }), PP.fade(art, c.op, 1, { curve: 'out', delay })]
      : [PP.moveY(art, c.y, TRAVEL, { delay }), PP.fade(art, c.op, 0, { curve: 'io', delay })];
    PP.commit(art, a, show ? { opacity: 1, transform: '' } : { opacity: 0, transform: `translateY(${TRAVEL}px)` });
  }

  let state = 'hidden';            // hidden | showing | hiding
  let revealTimer = 0;
  function show() {
    state = 'showing';
    box.classList.add('is-on'); box.setAttribute('aria-hidden', 'false');
    rows.forEach((r, i) => revealRow(r, PP.reduce.matches ? 0 : i * PP.IN_STAGGER));
  }
  function hide(fast = false) {
    state = 'hiding';
    box.classList.remove('is-on'); box.setAttribute('aria-hidden', 'true');
    const live = rows.filter((r) => PP.cur(r).op > 0.02).reverse();   // lowest first
    const stagger = PP.reduce.matches ? 0 : fast ? FAST.STAGGER : PP.OUT_STAGGER;
    rows.forEach((r) => { if (!live.includes(r)) hideRow(r, 0, fast); });
    live.forEach((r, j) => hideRow(r, j * stagger, fast));
    // when the last row is gone (ms) — the results page waits for this
    return live.length ? (live.length - 1) * stagger + (fast ? FAST.MOVE_MS : PP.IO_MS) : 0;
  }

  let artShown = true;
  function update() {
    const q = input.value.trim().toLowerCase();
    if ((q === '') !== artShown) { artShown = q === ''; artTo(artShown); }
    clearTimeout(revealTimer);
    if (q === MATCH) {
      if (state !== 'showing') revealTimer = setTimeout(show, REVEAL_DELAY);
    } else if (state === 'showing') {
      hide();
    }
  }
  input.addEventListener('input', update);

  // The push brings the trending block in on its own beat
  search.addEventListener('search:push', () => {
    if (input.value.trim()) return;
    PP.stop(art); art.style.opacity = 0; art.style.transform = `translateY(${TRAVEL}px)`;
    artShown = true; artTo(true, ART_PUSH_DELAY);
  });

  // Tapping a suggestion opens results; its ↖ arrow puts it in the field
  box.addEventListener('click', (e) => {
    const row = e.target.closest('.sug');
    if (!row) return;
    if (e.target.closest('.sug__fill')) {
      input.value = row.dataset.q;
      input.focus({ preventScroll: true });
      update();
      return;
    }
    search.dispatchEvent(new CustomEvent('plp:open', { detail: { q: row.dataset.q } }));
  });

  // Results page hands the list back and forth
  search.suggest = {
    hideForResults() { clearTimeout(revealTimer); return hide(true); },   // quicker exit; returns its length (ms)
    restore() { update(); },                                   // back from results: rows return
  };

  // Leaving the page resets it, so the next visit starts from trending
  search.addEventListener('search:closed', () => {
    clearTimeout(revealTimer);
    [art, ...rows].forEach(PP.stop);
    input.value = '';
    art.style.opacity = 1; art.style.transform = ''; artShown = true;
    rows.forEach((r) => { r.style.opacity = 0; r.style.transform = ''; });
    state = 'hidden'; box.classList.remove('is-on'); box.setAttribute('aria-hidden', 'true');
  });
})();

/* ══ Results (PLP 920:18788) — ProtoPie handoff motion ═══════════════════
   t = 0 is touch-up on a suggestion:
     +0      suggestion rows leave, bottom→top 25ms apart, 130ms fade + 12px
             lift — a quicker version of the backspace exit (~250ms for 5)
   then, from the moment the last row is gone (+10ms, no overlap):
     +0      the page layer fades in — S-curve, 300ms; the search bar never moves
     +224ms  bottom nav rises 88px on the spring
     +200ms  first shimmer pass (every 1.867s — .skel::after)
     +480ms  chips drop 20px into place, 60ms apart (spring + S-curve fade)
     +680ms  cards rise 16px into place, 60ms apart (spring + ease-out fade);
             each card's skeleton fades out 353ms after it starts (S-curve)
   The hand-off's own wait is ~5s; it stays shortened on request.         */
(() => {
  const search = document.getElementById('search');
  const input  = document.getElementById('searchInput');
  const back   = document.getElementById('searchBack');
  const plp    = document.getElementById('plp');
  const grid   = document.getElementById('plpGrid');
  const scroll = document.getElementById('plpScroll');
  const nav    = document.getElementById('plpNav');
  const tags   = document.getElementById('plpTags');
  const chips  = [...plp.querySelectorAll('.chip')];
  const A = 'assets/';

  // times are from the end of the suggestions' exit (nothing overlaps it); SKEL_MS is the layer fade
  const T = { SKEL_AT: 0, SKEL_MS: 300, NAV_AT: 224, CHIPS_AT: 480, CARDS_AT: 680, CHIP_DROP: 20, CARD_RISE: 16, SKEL_OUT_AFTER: 353 };

  /* Cards — Figma repeats one pair in all four rows */
  const PRODUCTS = [
    { id: '958:54228', best: true, img: `<img class="pcard__img" src="${A}ad33a.png" alt="" />`,
      title: 'Apple iPhone 18 Pro 256GB (eSIM only) Burgundy 5G With FaceTime - International Version', reviews: 130, price: '5396' },
    { id: '958:54318', best: false, img: `<span class="pcard__imgbox"><img src="${A}ee989.png" alt="" /></span>`,
      title: 'Apple iPhone 18 Pro Max 256GB (eSIM only) Black 5G With FaceTime - International VersionDeck,and More Black', reviews: 12, price: '6799' },
  ];
  const card = (p) => `
    <article class="pcard stroke" data-node-id="${p.id}">
      <div class="pcard__media">
        <div class="pcard__clip">
          ${p.img}
          <button class="pcard__wish" aria-label="Add to wishlist"><img src="${A}6478e.svg" alt="" /></button>
          <button class="pcard__add sk" aria-label="Add to cart"><img src="${A}ebb99.svg" alt="" /></button>
          <span class="pcard__dots"><i></i><i></i><i></i><i></i></span>
        </div>
      </div>
      ${p.best ? '<span class="pcard__best">Best Seller</span>' : ''}
      <div class="pcard__info">
        <p class="pcard__title" data-full="${p.title}">${p.title}</p>
        <p class="pcard__rate"><span class="star"><img src="${A}693b5.svg" alt="" /></span><b>4.7&nbsp;</b><span>(${p.reviews})</span></p>
        <p class="pcard__price">&#xE001;${p.price}</p>
        <p class="pcard__low"><img src="${A}f57c7.svg" alt="" />Lowest Price in 30 days</p>
        <div class="pcard__offers"><span class="offer">Extra 10%  Off </span><span class="offer">+3</span></div>
        <img class="pcard__badge" src="${A}7503a.svg" alt="express Today" />
      </div>
    </article>`;
  const slots = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 2; c++) {
    const el = document.createElement('div');
    el.className = 'pslot';
    el.innerHTML = `<div class="skel"></div>${card(PRODUCTS[c])}`;
    grid.appendChild(el);
    slots.push({ el, r, c, skel: el.firstElementChild, card: el.querySelector('.pcard') });
  }
  // chip skeletons are separate pills in the row, so a chip can drop in over its own
  const chipSkels = chips.map(() => { const s = document.createElement('span'); s.className = 'skel skel--chip'; tags.appendChild(s); return s; });
  const placeChipSkels = () => chips.forEach((ch, i) => { const k = chipSkels[i]; k.style.left = ch.offsetLeft + 'px'; k.style.width = ch.offsetWidth + 'px'; });

  /* Figma truncates the 2-line title mid-word ("…(eSIM only) Bur…"); a CSS
     line-clamp would stop at the last whole word. Measure where line 1 ends,
     then render line 2 as a single ellipsised line. */
  function clampTitles() {
    plp.querySelectorAll('.pcard__title').forEach((el) => {
      const full = el.dataset.full;
      el.textContent = full;
      const node = el.firstChild, range = document.createRange();
      const topOf = (i) => { range.setStart(node, i); range.setEnd(node, i + 1); return range.getBoundingClientRect().top; };
      const top0 = topOf(0);
      let lo = 0, hi = full.length - 1;
      while (lo < hi) { const mid = (lo + hi + 1) >> 1; if (topOf(mid) - top0 < 4) lo = mid; else hi = mid - 1; }
      const cut = lo + 1;
      el.innerHTML = '';
      const a = document.createElement('span'), b = document.createElement('span');
      a.textContent = full.slice(0, cut); b.textContent = full.slice(cut).replace(/^\s+/, '');
      el.append(a, b);
    });
  }

  let timers = [], open = false;
  const later = (ms, fn) => timers.push(setTimeout(fn, ms));
  const clearAll = () => { timers.forEach(clearTimeout); timers = []; };

  function reset() {
    clearAll();
    plp.getAnimations({ subtree: true }).forEach((a) => { if (a.effect && a.effect.getComputedTiming().endTime !== Infinity) a.cancel(); });
    slots.forEach((s) => { s.card.style.opacity = 0; s.card.style.transform = ''; s.skel.style.opacity = 1; });
    chips.forEach((c) => { c.style.opacity = 0; c.style.transform = ''; });
    chipSkels.forEach((k) => { k.style.opacity = 1; });
    nav.style.transform = '';
    plp.classList.remove('is-open', 'is-loading');
    plp.style.opacity = 0;
    plp.inert = true; plp.setAttribute('aria-hidden', 'true');
    scroll.scrollTop = 0;
    open = false;
  }

  function openPLP() {
    if (open) return;
    reset();
    open = true;
    void plp.offsetWidth;                            // flush the reset so the shimmer restarts
    input.blur();                                    // the keyboard drops as the rows leave
    plp.classList.add('is-open', 'is-loading');      // restarts the shimmer clock at t = 0
    plp.inert = false; plp.setAttribute('aria-hidden', 'false');
    clampTitles(); placeChipSkels();
    const off = search.suggest.hideForResults() + 10;        // the rows finish leaving first
    plp.style.setProperty('--shimmer-at', `${off + 120}ms`);  // first sweep once the skeleton is showing
    PP.commit(plp, [PP.fade(plp, 0, 1, { curve: 'io', ms: T.SKEL_MS, delay: off + T.SKEL_AT })], { opacity: 1 });
    PP.commit(nav, [PP.moveY(nav, 88, 0, { delay: off + T.NAV_AT })], { transform: 'none' });

    later(off + T.CHIPS_AT, () => chips.forEach((c, i) => {
      const delay = i * PP.IN_STAGGER;
      PP.commit(c, [PP.moveY(c, -T.CHIP_DROP, 0, { delay }), PP.fade(c, 0, 1, { curve: 'io', delay })], { opacity: 1, transform: '' });
      PP.commit(chipSkels[i], [PP.fade(chipSkels[i], 1, 0, { curve: 'io', delay })], { opacity: 0 });
    }));
    later(off + T.CARDS_AT, () => {
      const anims = slots.flatMap((s, k) => {
        const delay = k * PP.IN_STAGGER;
        const m = PP.moveY(s.card, T.CARD_RISE, 0, { delay }), f = PP.fade(s.card, 0, 1, { curve: 'out', delay });
        const sk = PP.fade(s.skel, 1, 0, { curve: 'io', delay: delay + T.SKEL_OUT_AFTER });
        PP.commit(s.card, [m, f], { opacity: 1, transform: '' });
        PP.commit(s.skel, [sk], { opacity: 0 });
        return [m, f, sk];
      });
      // "settled" = every card has landed and every skeleton has faded (the widget keys off this)
      Promise.all(anims.map((a) => a.finished)).then(() => { if (open) plp.classList.remove('is-loading'); }).catch(() => {});
    });
  }

  /* Refresh — the slider settled on a different model: the cards dissolve back
     into the same shimmer skeletons, hold for about one shimmer pass, then
     reveal with the first load's stagger (60ms, 16px rise on the spring, card
     skeleton fading 353ms behind each card). A new refresh mid-way picks up
     from whatever state the cards are in.                               */
  const R = { OUT_MS: 160, REVEAL_AT: 720 };
  let rTimers = [];
  function refreshCards() {
    if (!open || plp.classList.contains('is-loading')) return;     // the first load is still running
    rTimers.forEach(clearTimeout); rTimers = [];
    const now = slots.map((s) => ({ c: +getComputedStyle(s.card).opacity, k: +getComputedStyle(s.skel).opacity }));
    slots.forEach((s) => [s.card, s.skel].forEach((e) => e.getAnimations().forEach((a) => a.cancel())));
    plp.classList.remove('is-reloading'); void plp.offsetWidth; plp.classList.add('is-reloading');   // shimmer from t = 0
    slots.forEach((s, k) => {
      s.card.style.transform = '';
      PP.commit(s.card, [PP.fade(s.card, now[k].c, 0, { curve: 'io', ms: R.OUT_MS })], { opacity: 0 });
      PP.commit(s.skel, [PP.fade(s.skel, now[k].k, 1, { curve: 'out', ms: PP.OUT_MS })], { opacity: 1 });
    });
    rTimers.push(setTimeout(() => {
      const anims = slots.flatMap((s, k) => {
        const delay = k * PP.IN_STAGGER;
        const m = PP.moveY(s.card, T.CARD_RISE, 0, { delay }), f = PP.fade(s.card, 0, 1, { curve: 'out', delay });
        const sk = PP.fade(s.skel, 1, 0, { curve: 'io', delay: delay + T.SKEL_OUT_AFTER });
        PP.commit(s.card, [m, f], { opacity: 1, transform: '' });
        PP.commit(s.skel, [sk], { opacity: 0 });
        return [m, f, sk];
      });
      Promise.all(anims.map((a) => a.finished)).then(() => plp.classList.remove('is-reloading')).catch(() => {});
    }, R.REVEAL_AT));
  }
  plp.addEventListener('plp:refresh', refreshCards);

  function closePLP() {
    if (!open) return;
    rTimers.forEach(clearTimeout); rTimers = []; plp.classList.remove('is-reloading');
    clearAll();
    open = false;
    const a = PP.fade(plp, +getComputedStyle(plp).opacity, 0, { curve: 'io' });
    a.finished.then(() => { if (!open) reset(); }).catch(() => {});
    search.suggest.restore();                      // suggestions spring back in
  }

  /* History: results get their own entry, so Back returns to the suggestions */
  search.addEventListener('plp:open', () => {
    if (!(history.state && history.state.view === 'results')) history.pushState({ view: 'results' }, '', '#results');
    openPLP();
  });
  addEventListener('popstate', () => { if (location.hash !== '#results' && open) closePLP(); });
  const leave = () => { if (history.state && history.state.view === 'results') history.back(); else closePLP(); };
  // While results are up, the back arrow and Escape step back to the suggestions
  // (capture phase, ahead of the page-level handlers that would pop the search page).
  back.addEventListener('click', (e) => { if (open) { e.stopImmediatePropagation(); leave(); } }, true);
  search.addEventListener('keydown', (e) => { if (open && e.key === 'Escape') { e.stopImmediatePropagation(); leave(); } }, true);
  input.addEventListener('focus', () => { if (open) leave(); });   // tapping the field goes back to editing
  search.addEventListener('search:closed', reset);
  reset();
})();


/* ══ Roster widget (926:26273) — revealed from behind the grid ════════════
   0.05s after the last product card has finished revealing, the grid moves down 286px on the ProtoPie
   spring and uncovers the widget, which already sits in its place under it
   (the widget's box grows with overflow clipped, so the grid's top edge is
   the reveal line). The widget itself drifts only a quarter of that
   distance, on the same spring, which gives the layered, parallax depth;
   the heading lines rise in one after the other (see LINE), the rail
   fades up with the handoff's 276ms ease-out.                          */
(() => {
  const search = document.getElementById('search');
  const plp    = document.getElementById('plp');
  const roster = document.getElementById('roster');
  const inner  = document.getElementById('rosterIn');
  const head   = document.getElementById('rosterHead');
  const rail   = document.getElementById('rosterRail');
  const lines  = [...head.querySelectorAll('.roster__kicker, .roster__title')];

  const H = 286, WAIT = 50;           // after the last product card has finished revealing
  let timer = 0, running = false;
  const els = [roster, inner, head, rail, ...lines];
  function reset() {
    clearTimeout(timer); running = false;
    els.forEach((el) => el.getAnimations().forEach((a) => a.cancel()));
    roster.style.height = '0px'; inner.style.transform = '';
    head.style.opacity = 1; rail.style.opacity = 0; head.style.transform = rail.style.transform = '';
    lines.forEach((l) => { l.style.opacity = 0; l.style.transform = ''; });
    rail.scrollLeft = 0;
  }

  /* Heading lines — measured per line from ref_widget.mp4 (60fps, fitted
     frame by frame against each line's settled profile): each line rises
     from ~14px below on a livelier spring than the handoff's (ω 11.5, ζ 0.6
     ≈ stiffness 132 / damping 13.8, launched at −85px/s), overshoots ~1.6px
     above and eases back; it fades in 20ms after it starts moving, over
     152ms on the recorded curve. The title runs the same track exactly two
     frames (33ms) behind the kicker.                                   */
  const LINE = { from: 14, v0: -85, w: 11.5, z: 0.6, stagger: 33, fadeAt: 20, fadeMs: 152,
    fadeEase: 'linear(0, 0.12 11.5%, 0.25 22.4%, 0.4 33.6%, 0.55 44.4%, 0.69 55.3%, 0.81 66.4%, 0.91 77.2%, 0.97 88.2%, 1)' };
  function riseLine(el, k) {
    const { from, v0, w, z } = LINE, wd = w * Math.sqrt(1 - z * z);
    const x = (t) => Math.exp(-z * w * t) * (from * Math.cos(wd * t) + ((v0 + z * w * from) / wd) * Math.sin(wd * t));
    const dur = Math.log(from / 0.02) / (z * w), N = Math.round(dur * 60);
    const frames = Array.from({ length: N + 1 }, (_, i) =>
      ({ offset: i / N, transform: `translateY(${(i === N ? 0 : x((i / N) * dur)).toFixed(2)}px)` }));
    const move = PP.reduce.matches
      ? el.animate([{ transform: 'none' }, { transform: 'none' }], { duration: 1, fill: 'both' })
      : el.animate(frames, { duration: dur * 1000, delay: k * LINE.stagger, fill: 'both' });
    const fade = el.animate([{ opacity: 0 }, { opacity: 1 }],
      { duration: LINE.fadeMs, delay: LINE.fadeAt + k * LINE.stagger, easing: LINE.fadeEase, fill: 'both' });
    PP.commit(el, [move, fade], { opacity: 1, transform: '' });
  }

  const PARALLAX = 0.25;              // widget travel ÷ grid travel
  function open() {
    running = true;
    // grid edge: the box grows 0 → 286 and the grid below rides on it
    PP.commit(roster, [PP.spring(roster, 0, H, (v) => ({ height: `${(+v).toFixed(2)}px` }))], { height: H + 'px' });
    // the widget behind it: same spring, a quarter of the travel
    PP.commit(inner, [PP.moveY(inner, -H * PARALLAX, 0)], { transform: '' });
    lines.forEach(riseLine);          // the heading rises in from below with a soft spring
    PP.commit(rail, [PP.fade(rail, 0, 1, { curve: 'out', ms: PP.OUT_LONG_MS, delay: 25 })], { opacity: 1 });
    roster.dispatchEvent(new CustomEvent('roster:reveal'));   // the slider runs its first-time hint
  }

  // "Page settled" = the last card of the reveal has landed
  const obs = new MutationObserver(() => {
    const settled = plp.classList.contains('is-open') && !plp.classList.contains('is-loading');
    clearTimeout(timer);
    if (settled && roster.style.height === '0px' && !running) timer = setTimeout(open, WAIT);
    if (!plp.classList.contains('is-open')) reset();
  });
  obs.observe(plp, { attributes: true, attributeFilter: ['class'] });
  search.addEventListener('search:closed', reset);
  reset();
})();

/* ══ Sound — synthesized picker clicks (no audio files) ═══════════════════
   Measured from the slider reference: a crisp ~5ms click with a faint tail,
   energy at 2.4–3.2kHz, one per ruler step, never closer than ~106ms.
   Tick = noise burst through a 2.9kHz band-pass; snap = a slightly deeper,
   fuller click for the product that lands in the selected slot.         */
const Sfx = (() => {
  let ctx = null;
  const ensure = () => {
    if (!ctx) { const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null; ctx = new AC(); }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  };
  function click(freq, q, ms, gain, body = 0) {
    const c = ensure(); if (!c || c.state !== 'running') return;
    const t = c.currentTime, len = Math.max(1, Math.floor(c.sampleRate * ms / 1000));
    const buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.exp(-i / (len * 0.22));
    const src = c.createBufferSource(); src.buffer = buf;
    const bp = c.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = freq; bp.Q.value = q;
    const g = c.createGain(); g.gain.value = gain;
    src.connect(bp).connect(g).connect(c.destination); src.start(t);
    if (body) {                                  // a short sine "tock" gives the snap some weight
      const o = c.createOscillator(), og = c.createGain();
      o.frequency.setValueAtTime(freq * 0.62, t); o.frequency.exponentialRampToValueAtTime(freq * 0.45, t + 0.03);
      og.gain.setValueAtTime(body, t); og.gain.exponentialRampToValueAtTime(0.0001, t + 0.035);
      o.connect(og).connect(c.destination); o.start(t); o.stop(t + 0.04);
    }
  }
  return {
    unlock: ensure,
    tick: () => click(2900, 4, 14, 0.07),
    snap: () => click(2400, 3, 22, 0.12, 0.05),
  };
})();

/* ══ Roster slider — ten products, snapping one by one into the slot ══════
   The pink selection (circle, indicator tick) stays fixed at the left; the
   products and the tick ruler slide underneath it:
   · a bounded list of 10 (no looping): the iPhone Duo is the start and the
     10th product the end — past either end the rail rubber-bands and springs
     back; the ruler begins at the first product's tick and ends at the last
   · each product sits at i·144 + x; the ruler strip repeats every 144px
     (18 ticks, a darker mark under each product) and scrolls modulo that
     period, masked to the start/end ticks
   · drag / trackpad swipe follows 1:1; release snaps ONE product in the
     flick direction (or the nearest after a long drag) on the ProtoPie
     spring, carrying the release velocity; tap a product to bring it in
   · unselected products sit at 90%, easing to full size as they reach the
     slot (a continuous function of position, so it tracks every drag/snap)
   · the pink dot scales to 0 as soon as the rail moves and springs back
     when it settles on a product
   · while it moves, the ruler swells in a wave around the indicator and
     the pink line reaches up; both ease back once it settles
   · first time in: it rests on the 3rd product, then glides to the Duo and
     the Notify pill pops up (see FTUX)
   · a tick sounds as each ruler tick crosses the indicator (≥100ms apart,
     as in the reference); a snap sounds when a new product takes the slot */
(() => {
  const plp   = document.getElementById('plp');
  const rail  = document.getElementById('rosterRail');
  const group = rail.querySelector('.roster__group');
  const prods = group.querySelector('.roster__prods');
  const ticks = group.querySelector('.roster__ticks');
  const dot   = group.querySelector('.roster__dot');
  const selC  = group.querySelector('.roster__sel');         // the pink circle behind the selected product
  const pill  = prods.querySelector('.rp__notify');
  const items = [...prods.querySelectorAll('.rp')];
  // the Notify pill lives inside the Duo card (same origin: the Duo sits at 0,0),
  // so it inherits the card's travel and scale without being kept in sync
  items[0].appendChild(pill);

  const PITCH = 144, TICK = 8, N = items.length, X_MIN = -(N - 1) * PITCH;   // x runs from 0 (first) to X_MIN (last)
  const UNSEL_SHRINK = 0.1;                                 // unselected products: −10%
  // each card scales about its image centre, so the image shrinks in place and the text follows
  /* One layout for every card, taken from the selected iPhone 18: images sit on a common bottom line
     (IMG_LINE px down the card, whatever their Figma height), the name 12px below it. Unselected cards
     scale about the top of that text row, so names and prices stay on one line at any scale.
     (Inline Figma image sizes are used — the PLP may not be laid out yet.)                          */
  // The Duo keeps its own Figma layout (937:30005: 98px image at the top, name 14px below → y 406, Notify
  // pill under it), so the pill sits 9px clear of the ruler's dot; it scales about its own text-row top.
  /* Colourway mix: every load shuffles black and burgundy across the nine iPhone slots (4 or 5 of each,
     never three of one colour in a row). Burgundy keeps its original cover framing; black keeps Figma's
     116% crop (that shot sits smaller in its 660×900 canvas), so both read at the same size in a slot. */
  (function mixColourways() {
    const phones = items.slice(1).map((el) => el.querySelector('.rp__img img'));
    const n = phones.length;
    let pick;
    do { pick = phones.map(() => Math.random() < 0.5); }
    while (Math.abs(pick.filter(Boolean).length * 2 - n) > 1 || pick.some((v, i) => i > 1 && v === pick[i - 1] && v === pick[i - 2]));
    phones.forEach((im, i) => {
      if (!pick[i]) return;
      im.src = im.src.replace(/ee989\.png$/, 'ad33a.png');
      im.className = 'cover'; im.removeAttribute('style');
    });
  })();
  /* Pricing mix: every load re-rolls each iPhone's "Starting" price inside its slot's band (bases
     500 apart, ±200 in steps of 100, always ending in 99), so newer models always cost more and the
     4-digit "Starting Đ####" format and layout never change. */
  (function mixPrices() {
    const BASE = [5799, 5299, 4799, 4299, 3799, 3299, 2799, 2299, 1799];   // one band per iPhone slot, newest first
    items.slice(1).forEach((el, i) => {
      const base = BASE[i], price = el.querySelector('.rp__price');
      if (!base || !price) return;
      price.textContent = `Starting \uE001${base + 100 * (Math.floor(Math.random() * 5) - 2)}`;
    });
  })();
  const IMG_LINE = 109, TEXT_GAP = 12, DUO_ROW = 98 + 14;   // 952:47231: iPhone names at y 410 (rail 265 + 24 + 109 + 12)
  items.forEach((el, i) => {
    const img = el.querySelector('.rp__img');
    if (i === 0) { el.style.transformOrigin = `50% ${DUO_ROW}px`; return; }
    img.style.marginTop = `${IMG_LINE - parseFloat(img.style.height)}px`;
    el.style.transformOrigin = `50% ${IMG_LINE + TEXT_GAP}px`;
  });
  const TICKS_PER_ITEM = PITCH / TICK;                      // 18
  const mod = (a, n) => ((a % n) + n) % n;
  const slotPos = (i) => i * PITCH + x;                      // 0 = in the selected slot
  const clampSlot = (k) => Math.max(0, Math.min(N - 1, k));
  const RUBBER = 150;                                       // iOS-style overscroll resistance
  const rubber = (d) => (1 - 1 / ((d * 0.55) / RUBBER + 1)) * RUBBER;
  // rubber-band a raw rail position past either end
  const bound = (raw) => (raw > 0 ? rubber(raw) : raw < X_MIN ? X_MIN - rubber(X_MIN - raw) : raw);

  /* ruler: one periodic strip, starting two periods left of the indicator */
  const RULER_LEFT = 68 - 2 * PITCH;
  const ruler = document.createElement('div'); ruler.className = 'roster__ruler';   // fixed, masked frame (styles.css)
  const IND_RULER_X = 74;                                    // the red indicator, in ruler-frame coordinates
  group.insertBefore(ruler, ticks); ruler.appendChild(ticks);
  ticks.style.left = RULER_LEFT + 6 + 'px';                  // the frame starts 6px left of the group
  ticks.innerHTML = Array.from({ length: 84 }, (_, i) =>
    i % TICKS_PER_ITEM === 0 ? '<i class="tick tick--mark"></i>' : '<i class="tick"><img src="assets/02f08.svg" alt="" /></i>').join('');
  const ind = document.createElement('i'); ind.className = 'roster__ind'; ind.setAttribute('aria-hidden', 'true');
  group.insertBefore(ind, dot);
  rail.classList.remove('hscroll'); rail.classList.add('is-slider');
  rail.tabIndex = 0; rail.setAttribute('role', 'listbox'); rail.setAttribute('aria-label', 'iPhone models');
  items.forEach((el, i) => { el.setAttribute('role', 'option'); el.dataset.i = i; });
  dot.style.transformOrigin = '50% 50%';

  let x = 0, v = 0, sel = -1, anim = null, drag = null, lastTick = 0, lastTickAt = 0, wheelT = 0, wheel = null;

  function select(i, sound) {
    if (i === sel) return;
    sel = i;
    items.forEach((el, k) => { el.classList.toggle('is-sel', k === i); el.setAttribute('aria-selected', k === i); });
    if (sound) {
      Sfx.snap(); lastTickAt = performance.now();
      // haptic tap where supported — only after a real user gesture (browsers block it otherwise)
      if (navigator.vibrate && navigator.userActivation && navigator.userActivation.hasBeenActive) navigator.vibrate(6);
    }
  }
  function render(sound = true) {
    items.forEach((el, i) => {
      const p = slotPos(i);                                      // 0 = in the selected slot
      // unselected products sit at 90%; the scale follows the scroll position
      // continuously, eased so it rests near the slot and near the others.
      // (scale goes inside transform, AFTER the translate — the separate `scale`
      // property would be applied outside it and scale the travel too)
      const t = Math.min(1, Math.abs(p) / PITCH), e = t * t * (3 - 2 * t);
      el.style.transform = `translate3d(${(p - i * PITCH).toFixed(2)}px,0,0) scale(${(1 - UNSEL_SHRINK * e).toFixed(4)})`;
    });
    ticks.style.transform = `translate3d(${mod(x, PITCH).toFixed(2)}px,0,0)`;
    // the red line stands in for the tick under it (as in Figma): hide that one tick so a darker product
    // mark can't peek out above the 14px line
    const under = Math.round((IND_X - 1 - RULER_LEFT - mod(x, PITCH)) / TICK);
    if (under !== hiddenTick) { if (tickEls[hiddenTick]) tickEls[hiddenTick].style.visibility = ''; if (tickEls[under]) tickEls[under].style.visibility = 'hidden'; hiddenTick = under; }
    ruler.style.setProperty('--start', `${(IND_RULER_X + x).toFixed(2)}px`);   // the ruler begins at the first product's tick
    ruler.style.setProperty('--end', `${(IND_RULER_X + x - X_MIN).toFixed(2)}px`);   // …and ends at the last product's tick
    const ti = Math.round(-x / TICK);
    if (ti !== lastTick) {
      lastTick = ti;
      const now = performance.now();
      if (sound && now - lastTickAt >= 100) { lastTickAt = now; Sfx.tick(); }
    }
    select(clampSlot(Math.round(-x / PITCH)), sound);
    waveKick();
  }

  /* ruler wave — measured from the user's screen recording (8.00.23 PM):
     while the rail moves, each tick grows by a bell curve of its distance
     from the indicator (×1.43 beside it, σ ≈ 17.5px, flat ~3 ticks out),
     so the swell travels with the ruler as ticks slide past; the pink line
     reaches up by the same amount (into the space the dot vacates). It is
     full-strength from the first moving frame, holds ~50ms after motion
     stops, then eases back over ~100ms.                                  */
  const WAVE = { A: 0.43, SIGMA: 17.5, ATTACK: 0.02, HOLD: 50, DECAY: 100, V_MIN: 20 };
  const tickEls = [...ticks.children], swelled = new Set();
  let hiddenTick = -1;
  const IND_X = 69;                                          // indicator centre, group coords
  let E = 0, wx = 0, wt = 0, lastActive = -1e9, relFrom = null, waveRaf = 0;
  let armed = false;   // only real input (drag, wheel, tap, keys) can swell the ruler — the snap spring's
                       // tiny overshoot must not re-trigger it once it has started easing back
  /* red spill — the swelling ticks take on the red line's colour (a pink
     overlay, .tick::after, opacity --tint), strongest beside it. While the
     rail moves the colour smears to the side the ticks are travelling to —
     ticks that have just passed the line stay tinted longer (σ up to 26px)
     and ticks still approaching only catch it at the last moment (σ 9px),
     so the red reads as spilling out of the line along the scroll.       */
  const TINT = { MAX: 0.92, SIGMA: 12, TRAIL: 14, LEAD: 3, V_FULL: 900 };
  let vS = 0;                                                // smoothed signed rail velocity, px/s
  function waveApply() {
    const off = mod(x, PITCH), reach = WAVE.SIGMA * 3;
    const k = Math.min(1, Math.abs(vS) / TINT.V_FULL);
    const sTrail = TINT.SIGMA + TINT.TRAIL * k, sLead = TINT.SIGMA - TINT.LEAD * k;
    tickEls.forEach((el, i) => {
      const d = RULER_LEFT + i * TICK + 1 + off - IND_X;
      if (E > 0 && Math.abs(d) < reach) {
        el.style.transform = `scaleY(${(1 + WAVE.A * E * Math.exp(-((d / WAVE.SIGMA) ** 2))).toFixed(4)})`;
        const sc = d * vS > 0 ? sTrail : sLead;                // passed the line → trailing side
        el.style.setProperty('--tint', (TINT.MAX * E * Math.exp(-((d / sc) ** 2))).toFixed(3));
        swelled.add(i);
      } else if (swelled.has(i)) { el.style.transform = ''; el.style.removeProperty('--tint'); swelled.delete(i); }
    });
    ind.style.transform = E > 0 ? `scaleY(${(1 + WAVE.A * E).toFixed(4)})` : '';
  }
  function waveKick() {
    if (PP.reduce.matches || waveRaf) return;
    if (!armed && E === 0) { wx = x; return; }                // at rest and no new input: nothing to animate
    wt = 0; waveRaf = requestAnimationFrame(waveStep);          // wx still holds the last settled x
  }
  function waveStep(now) {
    const dt = wt ? Math.min(0.05, (now - wt) / 1000) : 0;
    const speed = dt ? Math.abs(x - wx) / dt : (x !== wx ? Infinity : 0);
    if (dt) vS += ((x - wx) / dt - vS) * (1 - Math.exp(-dt / 0.06));   // for the tint's trailing smear
    wx = x; wt = now;
    if (armed && speed > WAVE.V_MIN) {                       // moving: swell in almost at once
      lastActive = now; relFrom = null;
      E += (1 - E) * (1 - Math.exp(-(dt || 1 / 60) / WAVE.ATTACK));
    } else if (now - lastActive > WAVE.HOLD) {               // settled: ease back out
      if (!relFrom) { relFrom = { t: now, E }; armed = false; }
      const u = Math.min(1, (now - relFrom.t) / WAVE.DECAY);
      E = relFrom.E * (1 - u) ** 1.6;
    }
    waveApply();
    if (E > 0.0005 || now - lastActive <= WAVE.HOLD) waveRaf = requestAnimationFrame(waveStep);
    else { E = 0; relFrom = null; waveApply(); waveRaf = 0; dotWhenSettled(); }
  }

  /* the pink dot: out while moving, back once settled */
  let dotOut = false;
  const dotScale = () => { const t = getComputedStyle(dot).transform; return t === 'none' ? 1 : new DOMMatrix(t).a; };
  /* the dot pops back only once the rail has stopped AND the ruler has
     finished easing back, then after a short beat — never over moving lines */
  const DOT_DELAY = 90;
  let dotPending = false, dotT = 0;
  function dotSettle() { if (dotPending || !dotOut) return; dotPending = true; selShow(); ftuxLanded(); dotWhenSettled(); }

  /* landing on a different product than last time refreshes the grid
     (the first-time glide only records where it lands)                  */
  let lastSettled = 0;
  function settledOn(quiet) {
    if (sel === lastSettled) return;
    lastSettled = sel;
    if (!quiet) plp.dispatchEvent(new CustomEvent('plp:refresh'));
  }

  /* the selection circle: eases down 6% (to 94%) the moment the rail moves (240ms,
     the handoff's S-curve, from wherever it is), and grows back as the rail
     lands on a product on a soft spring (ω 13, ζ 0.8 — a hint of settle),
     ahead of the ruler settling and the dot popping in.                  */
  const SEL = { MIN: 0.94, OUT_MS: 240, W: 13, Z: 0.8 };
  let selOut = false;
  const selScale = () => { const t = getComputedStyle(selC).transform; return t === 'none' ? 1 : new DOMMatrix(t).a; };
  function selHide() {
    if (selOut) return; selOut = true;
    const s0 = selScale(); selC.getAnimations().forEach((a) => a.cancel());
    const a = selC.animate([{ transform: `scale(${s0})` }, { transform: `scale(${SEL.MIN})` }], { duration: SEL.OUT_MS, easing: PP.EASE_IO, fill: 'forwards' });
    PP.commit(selC, [a], { transform: `scale(${SEL.MIN})` });
  }
  function selShow() {
    if (!selOut) return; selOut = false;
    const s0 = selScale(); selC.getAnimations().forEach((a) => a.cancel());
    if (PP.reduce.matches) { selC.style.transform = ''; return; }
    const f = springFn(SEL.W, SEL.Z, s0 - 1, 0), dur = 0.8, N = 48;
    const frames = Array.from({ length: N + 1 }, (_, k) => ({ offset: k / N, transform: `scale(${(k === N ? 1 : 1 + f.d((k / N) * dur)).toFixed(4)})` }));
    PP.commit(selC, [selC.animate(frames, { duration: dur * 1000, fill: 'both' })], { transform: '' });
  }
  function dotWhenSettled() {
    const busy = () => drag || waveRaf || (anim && Math.abs(x - anim.target) >= 0.5);   // <0.5px left = visually still
    if (!dotPending || busy()) return;                          // the wave loop calls back when it ends
    clearTimeout(dotT);
    dotT = setTimeout(() => { if (dotPending && !busy()) { dotPending = false; dotShow(); } }, DOT_DELAY);
  }
  function dotHide() {
    selHide();
    armed = true; dotPending = false; clearTimeout(dotT);   // new input: re-arm the wave, drop a pending pop
    if (dotOut) return; dotOut = true;
    const s = dotScale(); dot.getAnimations().forEach((a) => a.cancel());
    const a = dot.animate([{ transform: `scale(${s})` }, { transform: 'scale(0)' }], { duration: 160, easing: PP.EASE_IO, fill: 'forwards' });
    PP.commit(dot, [a], { transform: 'scale(0)' });
  }
  function dotShow() {
    if (!dotOut) return; dotOut = false;
    const s = dotScale(); dot.getAnimations().forEach((a) => a.cancel());
    PP.commit(dot, [PP.spring(dot, s, 1, (k) => ({ transform: `scale(${Math.max(0, +k).toFixed(3)})` }))], { transform: '' });
  }

  /* spring to a rail position, keeping the current velocity (px/s) */
  /* damped spring (ω, ζ < 1) released from x0 with velocity v0 */
  function springFn(w, z, x0, v0) {
    const wd = w * Math.sqrt(1 - z * z), e = (t) => Math.exp(-z * w * t);
    return {
      d: (t) => e(t) * (x0 * Math.cos(wd * t) + ((v0 + z * w * x0) / wd) * Math.sin(wd * t)),
      v: (t) => e(t) * (v0 * Math.cos(wd * t) - ((z * w * v0 + w * w * x0) / wd) * Math.sin(wd * t)),
    };
  }
  /* Snap spring — softer and more fluid than the handoff's (ω 12, ζ 0.92:
     ~0.45s of visible travel, 0.2% overshoot from rest). The carried
     velocity is capped so a hard flick glides in instead of overshooting
     the slot and swinging back: toward the slot ≤ 1.2·ω·distance (≤ ~3px
     of overshoot — a soft "snap", no visible bounce), away ≤ 600px/s.    */
  const SNAP = { W: 12, Z: 0.92 };
  function goToX(target, v0 = v, { w = SNAP.W, z = SNAP.Z, quiet = false } = {}) {
    if (Math.abs(target - x) > 0.05) dotHide();
    const running = !!anim, x0 = x - target;
    if (v0 * -x0 > 0) v0 = Math.sign(v0) * Math.min(Math.abs(v0), w * Math.abs(x0) * 1.2);
    else v0 = Math.sign(v0) * Math.min(Math.abs(v0), 600);
    const f = springFn(w, z, x0, v0);
    anim = { target, t0: performance.now(), x0, v0, f, quiet };
    if (!running) requestAnimationFrame(step);
  }
  const goTo = (k, v0) => goToX(-k * PITCH, v0);             // k: unbounded slot number
  function step(now) {
    if (!anim) return;
    const t = (now - anim.t0) / 1000;
    const d = anim.f.d(t), quiet = anim.quiet;
    v = anim.f.v(t);
    x = anim.target + d;
    if (!drag && Math.abs(d) < 4 && Math.abs(v) < 80) selShow();       // arriving: the circle starts growing back
    if (!drag && Math.abs(d) < 0.5 && Math.abs(v) < 15) { dotSettle(); settledOn(quiet); }   // visually landed
    if (Math.abs(d) < 0.05 && Math.abs(v) < 5) { x = anim.target; v = 0; anim = null; render(!quiet); if (!drag) dotSettle(); return; }
    render(!quiet);
    requestAnimationFrame(step);
  }
  function release(vel) {
    // one by one: from the nearest slot, step at most one product in the flick direction
    if (x > 0) return goToX(0, vel);                            // pulled past the start: spring back
    if (x < X_MIN) return goToX(X_MIN, vel);                    // …or past the last product
    const nearest = Math.round(-x / PITCH);
    const proj = Math.round(-(x + vel * 0.2) / PITCH);
    goTo(clampSlot(nearest + Math.sign(proj - nearest) * Math.min(1, Math.abs(proj - nearest))), vel);
  }

  /* pointer: drag with direction lock (vertical pans stay with the page) */
  function lock(e) {
    anim = null; drag.locked = true; drag.x0 = x; drag.sx = e.clientX;
    try { rail.setPointerCapture(e.pointerId); } catch (_) {}
    rail.classList.add('is-drag');
  }
  rail.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    ftuxCancel();
    Sfx.unlock();
    drag = { id: e.pointerId, sx: e.clientX, sy: e.clientY, x0: x, locked: false, moved: 0, t: performance.now(), samples: [[performance.now(), x]], wasAnim: !!anim };
    if (e.pointerType === 'mouse') lock(e);
  });
  rail.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    drag.moved = Math.max(drag.moved, Math.hypot(dx, dy));
    if (!drag.locked) {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      if (Math.abs(dy) > Math.abs(dx)) { drag = null; return; }   // vertical: let the page scroll
      lock(e);
    }
    if (Math.abs(e.clientX - drag.sx) > 2) dotHide();
    const raw = drag.x0 + (e.clientX - drag.sx);
    x = bound(raw);                                              // resist past either end
    const s = drag.samples; s.push([performance.now(), x]); while (s.length > 2 && s[s.length - 1][0] - s[0][0] > 80) s.shift();
    render();
  });
  const endDrag = (e) => {
    if (!drag || e.pointerId !== drag.id) return;
    const d = drag; drag = null; rail.classList.remove('is-drag');
    if (d.moved < 6 && performance.now() - d.t < 400) {          // a tap: bring that product in
      const hits = document.elementsFromPoint(e.clientX, e.clientY);
      if (hits.some((el) => el.closest && el.closest('.rp__notify'))) { notifyMe(); return; }   // the Notify pill
      const hit = hits.find((el) => el.closest && el.closest('.rp'));
      const rp = hit && hit.closest('.rp');
      if (rp && rp.dataset.i !== undefined) { const i = +rp.dataset.i; goToX(-clampSlot(i) * PITCH, 0); return; }
      if (d.wasAnim || Math.abs(x - Math.round(x / PITCH) * PITCH) > 0.05) release(0); else dotSettle();
      return;
    }
    if (!d.locked) return;
    const s = d.samples, a = s[0], b = s[s.length - 1];
    const vel = b[0] > a[0] ? ((b[1] - a[1]) / (b[0] - a[0])) * 1000 : 0;    // px/s
    release(e.type === 'pointercancel' ? 0 : vel);
  };
  rail.addEventListener('pointerup', endDrag);
  rail.addEventListener('pointercancel', endDrag);

  /* trackpad / shift-wheel: horizontal deltas drive the rail, idle → snap */
  rail.addEventListener('wheel', (e) => {
    const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : (e.shiftKey ? e.deltaY : 0);
    if (!dx) return;
    e.preventDefault(); Sfx.unlock(); ftuxCancel();
    anim = null; dotHide();
    const now = performance.now();
    if (!wheel || now - wheel.t > 120) wheel = { samples: [] };
    wheel.t = now;
    const over = x > 0 ? x : x < X_MIN ? X_MIN - x : 0, outward = (x - dx > 0 && dx < 0) || (x - dx < X_MIN && dx > 0);
    x -= outward ? dx * (0.35 / (1 + over / 30)) : dx;           // resist past either end
    wheel.samples.push([now, x]); while (wheel.samples.length > 2 && now - wheel.samples[0][0] > 80) wheel.samples.shift();
    render();
    clearTimeout(wheelT);
    wheelT = setTimeout(() => {
      const s = wheel.samples, a = s[0], b = s[s.length - 1];
      release(b[0] > a[0] ? ((b[1] - a[1]) / (b[0] - a[0])) * 1000 * 0.6 : 0);
      wheel = null;
    }, 90);
  }, { passive: false });

  /* keyboard: step from where the rail is already heading, so presses queue */
  rail.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') ftuxCancel();
    const from = anim ? Math.round(-anim.target / PITCH) : Math.round(-x / PITCH);
    if (e.key === 'ArrowRight') { e.preventDefault(); Sfx.unlock(); goTo(clampSlot(from + 1)); }
    if (e.key === 'ArrowLeft')  { e.preventDefault(); Sfx.unlock(); goTo(Math.max(0, from - 1)); }
  });

  /* First-time hint — the widget reveals resting on the 3rd product with the
     Notify pill tucked away; once the reveal has played out, the rail glides
     back two products to the iPhone Duo on a softer, slower spring than a
     snap (ω 10.5, ζ 0.92 — no bounce, ~0.6s of visible travel), the ruler
     wave and dot play as usual, and as it lands on the Duo the Notify pill
     springs up. Silent (no user gesture yet). Any touch, swipe or key hands
     control over at once and brings the pill in.                          */
  const FTUX = { FROM: 2, AT: 700, W: 10.5, Z: 0.92, PILL_AFTER: 60 };   // pill: 60ms after the rail lands on the Duo
  let ftux = null;                           // { t: timer, glided: bool }
  let pillT = 0;
  /* Notify pill: pops in as a circle holding the bell, then morphs into the
     full pill. The circle springs up (ω 15, ζ 0.7, ~4.5% overshoot); 200ms
     in, the box widens symmetrically on a smooth spring (ω 14, ζ 0.86) while
     the bell glides from the circle's centre to its place and the label is
     uncovered in place by the widening edges, fading up out of a slight blur. */
  const PILL = { MORPH_AT: 200, TEXT_AT: 285, TEXT_MS: 240 };
  const pillTxt = pill.querySelector('span'), pillBell = pill.querySelector('img');
  const pillDone = pill.querySelector('.rp__done'), pillCheck = pillDone.querySelector('img');
  const pillParts = [pill, pillTxt, pillBell, pillDone, pillCheck];
  function pillClear() {
    pillParts.forEach((el) => el.getAnimations().forEach((a) => a.cancel()));
    pill.style.width = pill.style.left = pill.style.top = pill.style.height = pill.style.overflow = '';
    pillTxt.style.transform = pillTxt.style.opacity = pillTxt.style.filter = '';
    pillBell.style.transform = pillBell.style.opacity = pillBell.style.filter = '';
    pillDone.style.opacity = pillDone.style.filter = ''; pillCheck.style.scale = '';
  }

  /* Tap "Notify me" → 82:18241 "You are on the list ✓". The pill dips a touch
     under the finger (to 95%, 70ms) and springs back while its box morphs
     (ω 14, ζ 0.86 — the same spring as its entrance) from 89×28 into the
     133×30 selected pill centred under the Duo. The old label and bell blur
     out fast (140ms); the new label is uncovered from the centre by the
     widening box and fades up out of a slight blur; the check-circle pops
     in last (ω 16, ζ 0.6). A soft click + haptic where available.       */
  const DONE = { TO: { l: -15, t: 138, w: 133, h: 30 }, W: 14, Z: 0.86, DUR: 0.62, OUT_MS: 140, IN_AT: 110, IN_MS: 260, CHECK_AT: 210 };
  let notifying = false;
  function notifyMe() {
    if (notifying || pill.classList.contains('is-done') || pill.style.opacity === '0') return;
    notifying = true;
    pillClear(); pill.style.scale = '';
    const F = { l: pill.offsetLeft, t: pill.offsetTop, w: pill.offsetWidth, h: pill.offsetHeight }, T = DONE.TO;
    const anims = [];
    if (PP.reduce.matches) {
      anims.push(pill.animate([{ opacity: 0.4 }, { opacity: 1 }], { duration: 200, easing: PP.EASE_OUT }));
    } else {
      const N = 40, pr = sampled(DONE.W, DONE.Z, DONE.DUR, N), L = (a, b, p) => (a + (b - a) * p).toFixed(2) + 'px';
      pill.style.overflow = 'hidden';
      anims.push(pill.animate(pr.map((p, k) => ({ offset: k / N, left: L(F.l, T.l, p), top: L(F.t, T.t, p), width: L(F.w, T.w, p), height: L(F.h, T.h, p) })),
        { duration: DONE.DUR * 1000, fill: 'both' }));
      // press: a quick dip, then the spring carries it back to full size
      const dip = 0.07, total = 0.6, sp = springFn(15, 0.7, -0.05, 0), M = 36;
      const press = [{ offset: 0, scale: '1' }, { offset: dip / total, scale: '0.95' }];
      for (let k = 1; k <= M; k++) { const t = (k / M) * (total - dip); press.push({ offset: Math.min(1, (dip + t) / total), scale: String(k === M ? 1 : (1 + sp.d(t)).toFixed(4)) }); }
      anims.push(pill.animate(press, { duration: total * 1000, fill: 'both' }));
      const out = [{ opacity: 1, filter: 'blur(0px)' }, { opacity: 0, filter: 'blur(2px)' }];
      anims.push(pillTxt.animate(out, { duration: DONE.OUT_MS, easing: PP.EASE_IO, fill: 'both' }),
                 pillBell.animate(out, { duration: DONE.OUT_MS, easing: PP.EASE_IO, fill: 'both' }));
      anims.push(pillDone.animate([{ opacity: 0, filter: 'blur(3px)' }, { opacity: 1, filter: 'blur(0px)' }],
        { duration: DONE.IN_MS, delay: DONE.IN_AT, easing: PP.EASE_OUT, fill: 'both' }));
      const cf = springFn(16, 0.6, -0.65, 0), cd = 0.6, CN = 36;
      anims.push(pillCheck.animate(Array.from({ length: CN + 1 }, (_, k) => ({ offset: k / CN, scale: String(k === CN ? 1 : Math.max(0, 1 + cf.d((k / CN) * cd)).toFixed(4)) })),
        { duration: cd * 1000, delay: DONE.CHECK_AT, fill: 'both' }));
    }
    Sfx.unlock(); Sfx.snap();
    if (navigator.vibrate && navigator.userActivation && navigator.userActivation.hasBeenActive) navigator.vibrate(8);
    Promise.all(anims.map((a) => a.finished)).then(() => {
      pill.classList.add('is-done'); pill.setAttribute('aria-label', 'You are on the list for iPhone Duo');
      pillClear(); pill.style.scale = ''; notifying = false;
    }).catch(() => { notifying = false; });
  }
  pill.addEventListener('click', (e) => { e.stopPropagation(); notifyMe(); });
  function pillHide() {
    clearTimeout(pillT); pillClear();
    pill.style.scale = '0'; pill.style.opacity = '0';
  }
  function sampled(w, z, dur, N) {                             // spring progress 0 → 1, N+1 samples
    const f = springFn(w, z, -1, 0);
    return Array.from({ length: N + 1 }, (_, k) => (k === N ? 1 : 1 + f.d((k / N) * dur)));
  }
  function pillShow() {
    clearTimeout(pillT);
    if (pill.style.opacity === '') return;                     // already shown
    pillClear();
    // final geometry, measured in place (the pill is laid out, just transparent)
    const W = pill.offsetWidth, H = pill.offsetHeight, L0 = pill.offsetLeft;
    const bellC = pillBell.offsetLeft + pillBell.offsetWidth / 2;
    const anims = [];
    const fade = pill.animate([{ opacity: 0 }, { opacity: 1 }], { duration: PP.OUT_MS, easing: PP.EASE_OUT, fill: 'both' });
    anims.push(fade);
    if (!PP.reduce.matches) {
      // 1 · the circle pops
      const popDur = 0.7, popN = 42, pf = springFn(15, 0.7, -1, 0);
      anims.push(pill.animate(Array.from({ length: popN + 1 }, (_, k) =>
        ({ offset: k / popN, scale: String(k === popN ? 1 : Math.max(0, 1 + pf.d((k / popN) * popDur)).toFixed(4)) })),
        { duration: popDur * 1000, fill: 'both' }));
      // 2 · …and morphs into the pill
      const mDur = 0.62, mN = 40, pr = sampled(14, 0.86, mDur, mN);
      const box = [], bell = [], txt = [];
      pr.forEach((p, k) => {
        const w = H + (W - H) * p, off = k / mN, shift = (W - w) / 2;        // box grows about its centre
        box.push({ offset: off, width: `${w.toFixed(2)}px`, left: `${(L0 + shift).toFixed(2)}px` });
        // bell: from the circle's centre (W/2) to its own spot, minus the box's shift
        bell.push({ offset: off, transform: `translateX(${(W / 2 + (bellC - W / 2) * p - shift - bellC).toFixed(2)}px)` });
        txt.push({ offset: off, transform: `translateX(${(-shift).toFixed(2)}px)` });  // label stays put; the edges uncover it
      });
      pill.style.overflow = 'hidden';
      const o = { duration: mDur * 1000, delay: PILL.MORPH_AT, fill: 'both' };
      anims.push(pill.animate(box, o), pillBell.animate(bell, o), pillTxt.animate(txt, o));
      anims.push(pillTxt.animate([{ opacity: 0, filter: 'blur(3px)' }, { opacity: 1, filter: 'blur(0px)' }],
        { duration: PILL.TEXT_MS, delay: PILL.TEXT_AT, easing: PP.EASE_OUT, fill: 'both' }));
    }
    Promise.all(anims.map((a) => a.finished)).then(() => { pillClear(); pill.style.scale = pill.style.opacity = ''; }).catch(() => {});
  }
  function ftuxStart() {
    ftuxCancel(false);
    if (PP.reduce.matches) return;                             // reduced motion: just rest on the Duo
    anim = null; x = -FTUX.FROM * PITCH; wx = x; render(false); lastSettled = sel;
    pillHide();
    ftux = { glided: false, t: setTimeout(() => {
      ftux.t = 0; ftux.glided = true;
      goToX(0, 0, { w: FTUX.W, z: FTUX.Z, quiet: true });      // two products back, to the Duo
    }, FTUX.AT) };
  }
  function ftuxLanded() {                                      // called as the rail lands (before the ruler/dot settle)
    if (!ftux || !ftux.glided) return;
    ftux = null; pillT = setTimeout(pillShow, FTUX.PILL_AFTER);
  }
  function ftuxCancel(showPill = true) {
    if (!ftux) return;
    clearTimeout(ftux.t); ftux = null;
    if (showPill) pillShow();
  }
  document.getElementById('roster').addEventListener('roster:reveal', ftuxStart);

  /* back to the first product whenever the results page closes */
  function reset() {
    ftuxCancel(false); clearTimeout(pillT); pillClear(); notifying = false;
    pill.classList.remove('is-done'); pill.setAttribute('aria-label', 'Notify me when iPhone Duo is available');
    pill.style.scale = ''; pill.style.opacity = '';
    anim = null; drag = null; x = 0; v = 0; lastTick = 0; lastSettled = 0;
    cancelAnimationFrame(waveRaf); waveRaf = 0; E = 0; vS = 0; relFrom = null; lastActive = -1e9; wx = 0;
    dot.getAnimations().forEach((a) => a.cancel()); dot.style.transform = ''; dotOut = false;
    selC.getAnimations().forEach((a) => a.cancel()); selC.style.transform = ''; selOut = false; dotPending = false; clearTimeout(dotT); armed = false;
    render(false);
  }
  new MutationObserver(() => { if (!plp.classList.contains('is-open')) reset(); })
    .observe(plp, { attributes: true, attributeFilter: ['class'] });
  reset();
})();

/* ══ Warm the image decoder ════════════════════════════════════════════════
   Images inside collapsed or off-screen layers (the roster widget grows from
   height 0, the looping products, the PLP cards, below-the-fold Home rows)
   are fetched but only decoded on first paint — which lands mid-animation as
   a 100–250ms hitch. Decode everything up front, once the page is idle.     */
(() => {
  const warm = () => document.querySelectorAll('img').forEach((img) => {
    if (img.decode) img.decode().catch(() => {});
  });
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 200));
  if (document.readyState === 'complete') idle(warm); else addEventListener('load', () => idle(warm), { once: true });
})();

/* ══ Variant switcher (prototype tool) ═════════════════════════════════════
   1–4 beside the phone. Each option is its OWN copy of the flow, so they can
   be iterated independently: 1 = / (this folder), 2 = /v2/, 3 = /v3/,
   4 = /v4/ — each with its own index.html, styles.css and app.js, sharing
   /assets and /fonts. The page's option is <html data-variant="n">; picking
   another number opens that copy. /?v=n still jumps straight to option n. */
(() => {
  const nav = document.getElementById('vswitch'); if (!nav) return;
  const PATHS = { 1: '/', 2: '/v2/', 3: '/v3/', 4: '/v4/' };
  const here = document.documentElement.dataset.variant || '1';
  const want = new URLSearchParams(location.search).get('v');
  if (want && PATHS[want] && want !== here) { location.replace(PATHS[want]); return; }
  // Reset: restart the whole flow on this option — a clean reload back to Home
  // (search, results, widget, first-time hint and Notify state all start fresh)
  const reset = document.getElementById('vreset');
  if (reset) reset.addEventListener('click', () => {
    reset.classList.add('is-spinning');
    setTimeout(() => location.replace(PATHS[here]), 260);   // let the icon turn before the page restarts
  });
  nav.querySelectorAll('.vswitch__b[data-v]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.v === here));
    b.addEventListener('click', () => { if (b.dataset.v !== here) location.href = PATHS[b.dataset.v]; });
  });
})();

