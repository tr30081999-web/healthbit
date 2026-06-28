
// ── FLASHCARD SYSTEM ──
let fcCards = [];
let fcIndex = 0;
let fcFilter = 'done'; // 'done' | 'all'
let fcIsFlipped = false;

function initFlashcard() {
  buildDeck();
  renderFC();
}

function buildDeck() {
  const isDoneOnly = fcFilter === 'done';
  const pool = isDoneOnly
    ? LESSONS.filter(l => st.done.includes(l.d))
    : LESSONS;

  if (pool.length === 0) {
    fcCards = [];
    return;
  }
  fcCards = [...pool];
  fcIndex = 0;
  fcIsFlipped = false;
}

function fcSetFilter(f, btn) {
  fcFilter = f;
  document.querySelectorAll('.fc-mode-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildDeck();
  renderFC();
}

function fcShuffle() {
  for (let i = fcCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [fcCards[i], fcCards[j]] = [fcCards[j], fcCards[i]];
  }
  fcIndex = 0;
  fcIsFlipped = false;
  renderFC();
}

function fcFlip() {
  fcIsFlipped = !fcIsFlipped;
  const card = document.getElementById('fc-card');
  if (card) card.classList.toggle('flipped', fcIsFlipped);
}

function fcPrev() {
  if (fcIndex > 0) { fcIndex--; fcIsFlipped = false; renderFC(); }
}

function fcNext() {
  if (fcIndex < fcCards.length - 1) { fcIndex++; fcIsFlipped = false; renderFC(); }
}

function renderFC() {
  const wrap = document.getElementById('fc-content');
  if (!wrap) return;

  if (fcCards.length === 0) {
    wrap.innerHTML = `
      <div class="fc-empty">
        <div class="icon">📚</div>
        <p>Chưa có bài nào để ôn.<br>Hãy hoàn thành ít nhất 1 bài học trước!</p>
      </div>`;
    document.getElementById('fc-count').textContent = '0 / 0';
    return;
  }

  const l = fcCards[fcIndex];
  const src = SRC[l.s];
  const c = src.color;
  const pct = ((fcIndex + 1) / fcCards.length * 100).toFixed(0);

  // Update count & progress
  document.getElementById('fc-count').textContent = `${fcIndex + 1} / ${fcCards.length}`;
  const pf = document.getElementById('fc-prog-fill');
  if (pf) pf.style.width = pct + '%';

  wrap.innerHTML = `
    <div class="fc-progress"><div class="fc-prog-fill" id="fc-prog-fill" style="width:${pct}%"></div></div>

    <div class="fc-scene" onclick="fcFlip()">
      <div class="fc-card ${fcIsFlipped ? 'flipped' : ''}" id="fc-card">

        <!-- MẶT TRƯỚC: Câu hỏi -->
        <div class="fc-front">
          <div class="fc-day-badge" style="background:${c}22;color:${c}">${src.emoji} ${src.label} · Ngày ${l.d}</div>
          <div class="fc-visual" aria-hidden="true">${l.svg || ''}</div>
          <div class="fc-question">${l.t}</div>
          <div class="fc-desc">${l.desc}</div>
          <div class="fc-hint">👆 Bấm để xem câu trả lời</div>
        </div>

        <!-- MẶT SAU: Nội dung + Keypoint -->
        <div class="fc-back">
          <div class="fc-day-badge" style="background:${c}22;color:${c}">${src.emoji} ${src.label} · Ngày ${l.d}</div>
          <div class="fc-answer">${l.b}</div>
          <div class="fc-key">${l.k}</div>
        </div>
      </div>
    </div>

    <div class="fc-nav">
      <button class="fc-btn" onclick="fcPrev()" ${fcIndex === 0 ? 'disabled' : ''}>← Trước</button>
      <button class="fc-btn-flip" onclick="fcFlip()">🔄 Lật thẻ</button>
      <button class="fc-btn" onclick="fcNext()" ${fcIndex === fcCards.length - 1 ? 'disabled' : ''}>Sau →</button>
    </div>`;
}
