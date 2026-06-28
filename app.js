
// ── CONFIG ──
const SRC = {
  ah: { color:'#ff6c6c', emoji:'🔴', label:'Atomic Habits' },
  oc: { color:'#4fc4ff', emoji:'🔵', label:'The Obesity Code' },
  bn: { color:'#4fffb0', emoji:'🟢', label:'Burn' },
  bb: { color:'#7c6cff', emoji:'🟣', label:'Beyond BLS' }
};
const TOTAL = { ah:6, oc:8, bn:8, bb:8 };
const KEY = 'hb6';

// ── STATE ──
let st = load();
let quizDone = false;
let activeFilter = 'all';

function load() {
  try { const r = localStorage.getItem(KEY); if (r) return JSON.parse(r); } catch(e){}
  return { streak:0, best:0, done:[], correct:0, total:0 };
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(st)); } catch(e){}
}

// ── CURRENT LESSON ──
const currentDay = Math.min(st.done.length + 1, 30);
const TL = LESSONS.find(x => x.d === currentDay) || LESSONS[0];

// ── TABS ──
function goto(tab, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('pg-' + tab).classList.add('active');
  btn.classList.add('active');
  if (tab === 'lib') renderLib();
  if (tab === 'prog') renderProg();
}

// ── RENDER LESSON ──
function renderLesson() {
  const l = TL, c = SRC[l.s].color;
  document.getElementById('lesson-visual').innerHTML = l.svg;
  document.getElementById('lesson-body').innerHTML = `
    <div class="ltag" style="background:${c}22;color:${c};border-color:${c}55">
      ${SRC[l.s].emoji} ${SRC[l.s].label} · Ngày ${l.d}
    </div>
    <div class="ltitle">${l.t}</div>
    <div class="lbody">${l.b}</div>
    <div class="keypoint">${l.k}</div>
    <div class="quiz-box">
      <div class="qlabel">🧠 Kiểm tra nhanh</div>
      <div class="qq">${l.q}</div>
      <div class="qopts">
        ${l.o.map((o,i) => `<button class="qopt" onclick="ans(this,${i===l.a},${l.a})">${o}</button>`).join('')}
      </div>
      <div class="qfeedback" id="qfb"></div>
    </div>
    <button class="btn-done" id="btn-done" onclick="complete()">✅ Hoàn thành bài hôm nay</button>`;
}

// ── QUIZ ──
function ans(btn, correct, ci) {
  if (quizDone) return;
  quizDone = true;
  st.total++; if (correct) st.correct++; save();
  document.querySelectorAll('.qopt').forEach(b => b.style.pointerEvents = 'none');
  const fb = document.getElementById('qfb');
  if (correct) {
    btn.classList.add('ok');
    fb.className = 'qfeedback ok show';
    fb.textContent = TL.ok;
  } else {
    btn.classList.add('no');
    fb.className = 'qfeedback no show';
    fb.textContent = TL.no;
    document.querySelectorAll('.qopt')[ci].classList.add('ok');
  }
  document.getElementById('btn-done').classList.add('show');
}

// ── COMPLETE ──
function complete() {
  if (!st.done.includes(currentDay)) {
    st.done.push(currentDay);
    st.streak++;
    if (st.streak > st.best) st.best = st.streak;
    save();
  }
  document.getElementById('ov-n').textContent = st.streak;
  document.getElementById('overlay').classList.add('show');
  renderDots(); updateHeader();
}
function closeOv() { document.getElementById('overlay').classList.remove('show'); }

// ── DOTS & HEADER ──
function renderDots() {
  const g = document.getElementById('dots-grid'); g.innerHTML = '';
  for (let i = 1; i <= 30; i++) {
    const d = document.createElement('div'); d.className = 'dot'; d.textContent = i;
    if (st.done.includes(i)) d.classList.add('done');
    else if (i === currentDay) d.classList.add('today');
    else d.classList.add('locked');
    g.appendChild(d);
  }
}
function updateHeader() {
  document.getElementById('s-num').textContent = st.streak;
  document.getElementById('prog-text').textContent = `Ngày ${currentDay}/30`;
  document.getElementById('prog-fill').style.width = Math.max((currentDay-1)/30*100, 2) + '%';
}

// ── LIBRARY ──
function renderLib() {
  const list = document.getElementById('lib-list'); list.innerHTML = '';
  const items = activeFilter === 'all' ? LESSONS : LESSONS.filter(x => x.s === activeFilter);
  items.forEach(l => {
    const done = st.done.includes(l.d), today = l.d === currentDay, c = SRC[l.s].color;
    const el = document.createElement('div'); el.className = 'lib-item';
    el.innerHTML = `
      <div class="lib-icon" style="background:${c}18">${SRC[l.s].emoji}</div>
      <div class="lib-meta">
        <div class="lib-title">${l.t}</div>
        <div class="lib-source">Ngày ${l.d} · ${SRC[l.s].label}</div>
        <span class="lib-chip" style="background:${c}18;color:${c}">${SRC[l.s].label}</span>
      </div>
      <div class="lib-status ${done?'status-done':today?'status-today':'status-lock'}">
        ${done ? '✅' : today ? '▶' : '🔒'}
      </div>`;
    list.appendChild(el);
  });
}
function filter(src, btn) {
  activeFilter = src;
  document.querySelectorAll('.ftag').forEach(b => b.classList.remove('active'));
  btn.classList.add('active'); renderLib();
}

// ── PROGRESS ──
function renderProg() {
  document.getElementById('st-streak').textContent = st.streak;
  document.getElementById('st-done').textContent = st.done.length;
  document.getElementById('st-best').textContent = st.best;
  const pct = st.total > 0 ? Math.round(st.correct / st.total * 100) : 0;
  document.getElementById('st-acc').textContent = st.total > 0 ? pct + '%' : '—';
  document.getElementById('acc-pct').textContent = st.total > 0 ? pct + '%' : '—';
  document.getElementById('acc-fill').style.width = pct + '%';
  document.getElementById('acc-sub').textContent = st.total > 0
    ? `${st.correct} đúng / ${st.total} câu hỏi`
    : 'Chưa có dữ liệu. Hãy học bài đầu tiên!';
  const cg = document.getElementById('cal-grid'); cg.innerHTML = '';
  for (let i = 1; i <= 30; i++) {
    const c = document.createElement('div'); c.className = 'cal-cell';
    if (st.done.includes(i)) c.classList.add('done');
    else if (i === currentDay) c.classList.add('today');
    cg.appendChild(c);
  }
  const bd = {oc:0,bn:0,bb:0,ah:0};
  st.done.forEach(day => { const x = LESSONS.find(l => l.d === day); if (x) bd[x.s] = (bd[x.s]||0)+1; });
  [{k:'ah',t:6},{k:'oc',t:8},{k:'bn',t:8},{k:'bb',t:8}].forEach(({k,t}) => {
    const d = bd[k] || 0;
    document.getElementById('bp-'+k).textContent = `${d}/${t}`;
    document.getElementById('bpf-'+k).style.width = (d/t*100) + '%';
  });
}

// ── INIT ──
renderLesson(); renderDots(); updateHeader();
