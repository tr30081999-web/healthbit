# HealthBit 💡
> Mỗi ngày một kiến thức sức khỏe — 30 ngày lộ trình từ 4 cuốn sách

## 📱 Demo
Deploy lên GitHub Pages để dùng ngay trên điện thoại như một app.

## 📚 Nội dung (30 bài học)
| Ngày | Cuốn sách | Chủ đề |
|------|-----------|--------|
| 1-6  | 🔴 Atomic Habits | 1% mỗi ngày, Hệ thống > Mục tiêu, Identity, Habit Loop, Habit Stacking, 2-Minute Rule |
| 7-14 | 🔵 The Obesity Code | 1977, Máy Điều Nhiệt, Insulin, Insulin Spike, Ví tiền/Ngân hàng, 3 bữa vs ăn vặt, Cortisol, Giải pháp |
| 15-22 | 🟢 Burn | Hadza, TDEE cố định, 3 khối tài sản, Yo-yo, Loài vượn béo, Tại sao phải tập, Volume Eating, Hệ chuẩn mới |
| 23-30 | 🟣 Beyond BLS | Nghịch lý Runner, Protein 1.8-2.2g/kg, Sức mạnh = Tốc độ, 3 pha bắt đầu, Lịch tạ+chạy, IF timeline, Zero-Friction IF, Công thức Bất bại |

## 🗂 Cấu trúc file
```
healthbit/
├── index.html          # App chính
├── manifest.json       # PWA manifest (cài app trên điện thoại)
├── sw.js               # Service Worker (offline + push notification)
├── css/
│   └── style.css       # Toàn bộ styles
├── js/
│   ├── app.js          # Logic chính (tabs, quiz, streak, progress)
│   └── remind.js       # Hệ thống nhắc nhở hàng ngày
└── data/
    └── lessons.js      # 30 bài học (thêm bài mới ở đây)
```

## 🚀 Deploy lên GitHub Pages
1. Fork hoặc upload repo này lên GitHub
2. Vào **Settings → Pages → Source: main branch / root**
3. GitHub tự deploy → truy cập tại `https://[username].github.io/[repo-name]`

## 📲 Cài như app trên điện thoại
- **iPhone (Safari):** Mở link → Share → Add to Home Screen
- **Android (Chrome):** Mở link → Menu → Add to Home Screen

## 🔔 Hệ thống nhắc nhở
App dùng **Web Notification API** để nhắc nhở hàng ngày:
- Bấm nút 🔔 ở góc trên phải
- Chọn giờ muốn được nhắc
- Cấp quyền thông báo cho trình duyệt
- **Lưu ý:** Phải mở app ít nhất 1 lần/ngày để nhắc nhở hoạt động (giới hạn của web browser)

## ➕ Thêm bài học mới
Mở file `data/lessons.js` và thêm object theo cấu trúc:
```js
{
  d: 31,          // ngày
  s: 'oc',        // nguồn: ah / oc / bn / bb
  t: 'Tiêu đề',
  desc: 'Mô tả ngắn',
  b: `Nội dung HTML...`,
  k: '💡 Keypoint...',
  q: 'Câu hỏi quiz?',
  o: ['Đáp án A', 'Đáp án B', 'Đáp án C'],
  a: 1,           // index đáp án đúng (0, 1, hoặc 2)
  ok: '✅ Phản hồi khi đúng',
  no: '❌ Phản hồi khi sai',
  svg: `<svg>...</svg>`
}
```

## 🛠 Tính năng
- ✅ 30 bài học thật từ 4 cuốn sách với hình minh họa SVG
- ✅ Quiz sau mỗi bài + tracking độ chính xác
- ✅ Streak counter + lưới 30 ngày
- ✅ Thư viện — lọc theo từng cuốn sách
- ✅ Trang tiến độ — calendar heatmap + breakdown theo cuốn
- ✅ Nhắc nhở hàng ngày (Web Notification)
- ✅ PWA — cài được trên điện thoại như native app
- ✅ Offline support (Service Worker)
- ✅ Dark mode mặc định
- ✅ Lưu dữ liệu local (localStorage)

## 📖 Nguồn sách
- **Atomic Habits** — James Clear
- **The Obesity Code** — Jason Fung
- **Burn: The Science of Human Metabolism** — Herman Pontzer
- **Beyond Bigger Leaner Stronger** — Michael Matthews
