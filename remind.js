
// ── REMIND SYSTEM ──
// Dùng localStorage để lưu giờ nhắc + setTimeout để check khi mở app

const REMIND_KEY = 'hb_remind';

function openRemind() {
  const saved = getSavedRemind();
  if (saved) document.getElementById('remind-time').value = saved;
  updateRemindStatus();
  document.getElementById('modal-bg').classList.add('show');
  document.getElementById('modal-remind').classList.add('show');
}
function closeRemind() {
  document.getElementById('modal-bg').classList.remove('show');
  document.getElementById('modal-remind').classList.remove('show');
}

function getSavedRemind() {
  try { return localStorage.getItem(REMIND_KEY); } catch(e){ return null; }
}

function updateRemindStatus() {
  const saved = getSavedRemind();
  const el = document.getElementById('remind-status');
  const bell = document.getElementById('btn-bell');
  if (saved) {
    el.textContent = `✅ Đang nhắc lúc ${saved} mỗi ngày`;
    bell.classList.add('on');
  } else {
    el.textContent = '';
    bell.classList.remove('on');
  }
}

async function saveRemind() {
  const time = document.getElementById('remind-time').value;
  if (!time) return;

  // Xin quyền notification
  if ('Notification' in window) {
    const perm = await Notification.requestPermission();
    if (perm === 'denied') {
      document.getElementById('remind-status').textContent =
        '❌ Trình duyệt chặn thông báo. Vào cài đặt trình duyệt để cho phép.';
      document.getElementById('remind-status').style.color = 'var(--red)';
      return;
    }
  }

  try {
    localStorage.setItem(REMIND_KEY, time);
  } catch(e){}

  document.getElementById('remind-status').textContent = `✅ Đã bật nhắc nhở lúc ${time}`;
  document.getElementById('remind-status').style.color = 'var(--green)';
  document.getElementById('btn-bell').classList.add('on');

  // Schedule ngay nếu giờ đó chưa qua hôm nay
  scheduleRemind(time);

  setTimeout(closeRemind, 1200);
}

function offRemind() {
  try { localStorage.removeItem(REMIND_KEY); } catch(e){}
  document.getElementById('remind-status').textContent = '🔕 Đã tắt nhắc nhở';
  document.getElementById('remind-status').style.color = 'var(--muted)';
  document.getElementById('btn-bell').classList.remove('on');
  setTimeout(closeRemind, 1000);
}

function scheduleRemind(timeStr) {
  if (!('Notification' in window)) return;
  if (Notification.permission !== 'granted') return;

  const [h, m] = timeStr.split(':').map(Number);
  const now = new Date();
  const target = new Date();
  target.setHours(h, m, 0, 0);

  // Nếu giờ đó đã qua hôm nay → schedule cho ngày mai
  if (target <= now) target.setDate(target.getDate() + 1);

  const delay = target - now;

  setTimeout(() => {
    // Kiểm tra hôm nay đã học chưa
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) {
        const state = JSON.parse(saved);
        const todayDay = Math.min(state.done.length + 1, 30);
        if (state.done.includes(todayDay)) return; // Đã học rồi, không nhắc
      }
    } catch(e){}

    new Notification('HealthBit 💡', {
      body: 'Đến giờ học kiến thức sức khỏe hàng ngày rồi! Mở app để không đứt chuỗi nhé 🔥',
      icon: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.png',
      badge: 'https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a1/512.png',
      tag: 'healthbit-daily',
      requireInteraction: false
    });

    // Schedule lại cho ngày mai
    scheduleRemind(timeStr);
  }, delay);
}

// ── AUTO-SCHEDULE khi load app ──
(function initRemind() {
  const saved = getSavedRemind();
  if (saved) {
    updateRemindStatus();
    // Chỉ schedule nếu đã được cấp quyền
    if ('Notification' in window && Notification.permission === 'granted') {
      scheduleRemind(saved);
    }
  }
})();
