// data/lessons.js
// Thêm bài học mới ở đây theo cấu trúc:
// { d: ngày, s: nguồn (ah/oc/bn/bb), t: tiêu đề, desc: mô tả ngắn,
//   b: nội dung HTML, k: keypoint, q: câu hỏi, o: [...đáp án],
//   a: index đáp án đúng, ok: msg đúng, no: msg sai, svg: hình minh họa }

const LESSONS = [
{d:1,s:'ah',t:'Sức Mạnh Của 1%',desc:'Tốt hơn 1%/ngày × 365 = giỏi hơn 37.78 lần.',
b:`Bạn nghĩ kết quả đến từ hành động lớn. Nhưng thực ra từ <strong>thay đổi nhỏ lặp lại</strong>.<br><br>
1.01^365 = <strong>37.78 lần</strong>. 0.99^365 → <strong>tiến về 0</strong>.<br><br>
Kết quả bị trì hoãn — đó là <strong>Thung lũng Thất vọng</strong>. Nhưng thay đổi đang xảy ra bên trong, chờ đến điểm bùng phát.`,
k:'💡 Mỗi 1% nhỏ hôm nay là nền tảng cho sự bùng phát ngày mai. Đừng đánh giá bằng kết quả ngắn hạn.',
q:'1.01^365 bằng bao nhiêu?',o:['Khoảng 3.65','Khoảng 37.78','Khoảng 365'],a:1,
ok:'✅ Đúng! 37.78 — sức mạnh lãi kép của thói quen nhỏ tích lũy mỗi ngày.',
no:'❌ 1.01^365 ≈ 37.78 lần — không phải cộng mà là nhân, tạo ra lãi kép.',
svg:`<svg viewBox="0 0 300 140" class="illus" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="120" x2="280" y2="120" stroke="#2a2f3d" stroke-width="1.5"/>
<line x1="30" y1="120" x2="30" y2="20" stroke="#2a2f3d" stroke-width="1.5"/>
<path d="M30 118 Q100 115 150 100 Q200 75 275 18" stroke="#4fffb0" stroke-width="2.5" fill="none"/>
<path d="M30 118 Q130 120 200 128 Q240 132 275 138" stroke="#ff6c6c" stroke-width="2" fill="none" stroke-dasharray="5 3"/>
<text x="278" y="16" font-size="9" fill="#4fffb0">37.78x</text>
<text x="278" y="140" font-size="9" fill="#ff6c6c">→0</text>
<text x="58" y="106" font-size="8.5" fill="#4fffb0">+1%/ngày</text>
<text x="58" y="137" font-size="8.5" fill="#ff6c6c">-1%/ngày</text>
<rect x="85" y="78" width="90" height="16" rx="4" fill="#252a38"/>
<text x="130" y="90" text-anchor="middle" font-size="8" fill="#6b7292">Thung lũng thất vọng</text>
</svg>`},

{d:2,s:'ah',t:'Hệ Thống Thắng Mục Tiêu',desc:'Bạn rơi xuống mức của hệ thống — không vươn lên mức của mục tiêu.',
b:`Cả người thắng lẫn người thua đều có cùng mục tiêu. Sự khác biệt nằm ở <strong>hệ thống</strong>.<br><br>
Mục tiêu thay đổi bạn <strong>trong khoảnh khắc</strong>. Hết động lực → dừng.<br><br>
Hệ thống (chế độ ăn + lịch tập hàng ngày) tạo ra tiến bộ liên tục và bền vững.`,
k:'💡 Thay vì "Mục tiêu của tôi là gì?", hãy hỏi "Hệ thống hàng ngày của tôi trông như thế nào?"',
q:'Điều gì quyết định kết quả dài hạn?',o:['Mục tiêu tham vọng','Hệ thống & thói quen hàng ngày','Ý chí mạnh mẽ'],a:1,
ok:'✅ Đúng! Hệ thống hàng ngày quan trọng hơn mục tiêu.',
no:'❌ Hệ thống thói quen mới quyết định dài hạn — không phải mục tiêu hay ý chí.',
svg:`<svg viewBox="0 0 300 130" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="15" y="20" width="120" height="90" rx="10" fill="#1e222d" stroke="#ff6c6c" stroke-width="1.5"/>
<text x="75" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#ff6c6c">🏆 Mục tiêu</text>
<text x="75" y="62" text-anchor="middle" font-size="8.5" fill="#bcc0d4">Kết quả bạn muốn đạt.</text>
<text x="75" y="78" text-anchor="middle" font-size="8.5" fill="#bcc0d4">Hết động lực → dừng.</text>
<text x="75" y="94" text-anchor="middle" font-size="8.5" fill="#6b7292">Ngắn hạn.</text>
<rect x="165" y="20" width="120" height="90" rx="10" fill="#1a2d24" stroke="#4fffb0" stroke-width="1.5"/>
<text x="225" y="44" text-anchor="middle" font-size="11" font-weight="700" fill="#4fffb0">⚙️ Hệ thống</text>
<text x="225" y="62" text-anchor="middle" font-size="8.5" fill="#bcc0d4">Quá trình dẫn đến đó.</text>
<text x="225" y="78" text-anchor="middle" font-size="8.5" fill="#bcc0d4">Tự động, liên tục.</text>
<text x="225" y="94" text-anchor="middle" font-size="8.5" fill="#4fffb0">Dài hạn.</text>
<text x="150" y="72" text-anchor="middle" font-size="14" font-weight="700" fill="#6b7292">VS</text>
</svg>`},

{d:3,s:'ah',t:'Identity-Based Habits',desc:'Thay đổi từ cốt lõi: tập trung vào người bạn muốn trở thành.',
b:`3 lớp: <strong>Kết quả</strong> → <strong>Quá trình</strong> → <strong>Bản sắc</strong>.<br><br>
Hầu hết bắt đầu từ ngoài vào. James Clear lập luận: đi ngược lại — <strong>bắt đầu từ Bản sắc</strong>.<br><br>
<em>"Tôi đang cố bỏ ăn vặt"</em> (bản sắc cũ) vs <strong>"Tôi không phải người ăn vặt lung tung"</strong> (bản sắc mới). Mỗi hành động nhỏ là một lá phiếu bầu cho bản sắc mới.`,
k:'💡 Đừng hỏi "Tôi muốn đạt được gì?" — hãy hỏi "Tôi muốn trở thành người như thế nào?"',
q:'Điểm bắt đầu đúng nhất để thay đổi bền vững?',o:['Đặt mục tiêu cụ thể (giảm 5kg)','Xây dựng bản sắc mới (tôi là người khỏe mạnh)','Tìm đúng phương pháp'],a:1,
ok:'✅ Đúng! Bắt đầu từ bản sắc — thay đổi từ bên trong ra ngoài.',
no:'❌ Kết quả và phương pháp quan trọng, nhưng không đổi bản sắc thì dễ quay lại thói quen cũ.',
svg:`<svg viewBox="0 0 300 145" class="illus" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="80" r="60" fill="none" stroke="#2a2f3d" stroke-width="1.5"/>
<circle cx="150" cy="80" r="42" fill="none" stroke="#2a2f3d" stroke-width="1.5"/>
<circle cx="150" cy="80" r="24" fill="#1a2d24" stroke="#4fffb0" stroke-width="2"/>
<text x="150" y="76" text-anchor="middle" font-size="9" font-weight="700" fill="#4fffb0">Bản sắc</text>
<text x="150" y="88" text-anchor="middle" font-size="8" fill="#4fffb0">Identity</text>
<text x="150" y="47" text-anchor="middle" font-size="9" fill="#7c6cff">Quá trình</text>
<text x="150" y="22" text-anchor="middle" font-size="9" fill="#6b7292">Kết quả</text>
<text x="150" y="138" text-anchor="middle" font-size="8" fill="#4fffb0">← Bắt đầu từ đây</text>
</svg>`},

{d:4,s:'ah',t:'Vòng Lặp Thói Quen (Habit Loop)',desc:'4 bước: Gợi ý → Thèm khát → Phản hồi → Phần thưởng.',
b:`<strong>Cue</strong> (điện thoại rung) → <strong>Craving</strong> (tò mò ai nhắn) → <strong>Response</strong> (cầm điện thoại lên) → <strong>Reward</strong> (đọc tin, thỏa mãn).<br><br>
Để xây thói quen tốt: làm cho nó <strong>rõ ràng, hấp dẫn, dễ dàng, thỏa mãn</strong>.<br>
Để phá thói quen xấu: <strong>đảo ngược cả 4</strong>.`,
k:'💡 Mọi thói quen có thể giải mã bằng Habit Loop. Thay đổi 1 trong 4 bước là đủ.',
q:'Thứ tự đúng của Habit Loop?',o:['Craving → Cue → Response → Reward','Cue → Craving → Response → Reward','Response → Cue → Reward → Craving'],a:1,
ok:'✅ Đúng! Cue → Craving → Response → Reward.',
no:'❌ Cue (gợi ý) luôn là điểm khởi đầu của mọi thói quen.',
svg:`<svg viewBox="0 0 300 145" class="illus" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#7c6cff"/></marker></defs>
<circle cx="75" cy="40" r="28" fill="#1e222d" stroke="#4fffb0" stroke-width="1.5"/>
<text x="75" y="36" text-anchor="middle" font-size="9" font-weight="700" fill="#4fffb0">Gợi ý</text>
<text x="75" y="49" text-anchor="middle" font-size="8" fill="#6b7292">Cue</text>
<circle cx="225" cy="40" r="28" fill="#1e222d" stroke="#7c6cff" stroke-width="1.5"/>
<text x="225" y="36" text-anchor="middle" font-size="9" font-weight="700" fill="#7c6cff">Thèm khát</text>
<text x="225" y="49" text-anchor="middle" font-size="8" fill="#6b7292">Craving</text>
<circle cx="225" cy="110" r="28" fill="#1e222d" stroke="#ffaa4c" stroke-width="1.5"/>
<text x="225" y="106" text-anchor="middle" font-size="9" font-weight="700" fill="#ffaa4c">Phản hồi</text>
<text x="225" y="119" text-anchor="middle" font-size="8" fill="#6b7292">Response</text>
<circle cx="75" cy="110" r="28" fill="#1e222d" stroke="#ff6c6c" stroke-width="1.5"/>
<text x="75" y="106" text-anchor="middle" font-size="9" font-weight="700" fill="#ff6c6c">Phần thưởng</text>
<text x="75" y="119" text-anchor="middle" font-size="8" fill="#6b7292">Reward</text>
<line x1="104" y1="40" x2="196" y2="40" stroke="#7c6cff" stroke-width="1.5" marker-end="url(#a)"/>
<line x1="225" y1="69" x2="225" y2="81" stroke="#7c6cff" stroke-width="1.5" marker-end="url(#a)"/>
<line x1="196" y1="110" x2="104" y2="110" stroke="#7c6cff" stroke-width="1.5" marker-end="url(#a)"/>
<line x1="75" y1="81" x2="75" y2="69" stroke="#7c6cff" stroke-width="1.5" marker-end="url(#a)"/>
</svg>`},

{d:5,s:'ah',t:'Habit Stacking + Thiết Kế Môi Trường',desc:'"Sau khi [X], tôi sẽ [Y]" — gắn thói quen mới vào thói quen cũ. Môi trường là đồng minh.',
b:`<strong>Habit Stacking:</strong> "Sau khi rót cà phê sáng, tôi sẽ uống 1 ly nước đầy." Não tự kích hoạt — không cần nhớ.<br><br>
<strong>Thiết kế môi trường:</strong> Đặt tạ trước mắt → dễ tập. Giấu snack → ít ăn.<br><br>
Nghiên cứu BV Massachusetts General: thêm nước lọc vào tủ lạnh → soda giảm <strong>11.4%</strong>, nước tăng <strong>25.8%</strong> — không cần ai thay đổi ý chí.`,
k:'💡 "Thiết kế thế giới của bạn sao cho lựa chọn tốt nhất là lựa chọn hiển nhiên nhất."',
q:'Công thức Habit Stacking đúng?',o:['"Tôi sẽ [mới] vào lúc [giờ]"','"Sau khi [thói quen cũ], tôi sẽ [thói quen mới]"','"Mỗi khi cảm thấy [cảm xúc], tôi sẽ [mới]"'],a:1,
ok:'✅ Đúng! Gắn cái mới vào cái cũ đã cố định.',
no:'❌ Habit Stacking gắn thói quen mới vào thói quen cũ — không phải thời gian hay cảm xúc.',
svg:`<svg viewBox="0 0 300 115" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="10" y="40" width="105" height="36" rx="8" fill="#252a38" stroke="#6b7292" stroke-width="1.5"/>
<text x="62" y="56" text-anchor="middle" font-size="9" font-weight="700" fill="#bcc0d4">Thói quen cũ</text>
<text x="62" y="70" text-anchor="middle" font-size="8" fill="#6b7292">Rót cà phê sáng</text>
<rect x="123" y="48" width="54" height="20" rx="5" fill="#1e222d" stroke="#7c6cff" stroke-width="1"/>
<text x="150" y="61" text-anchor="middle" font-size="8" font-weight="700" fill="#7c6cff">+ SAU ĐÓ</text>
<rect x="185" y="40" width="105" height="36" rx="8" fill="#1a2d24" stroke="#4fffb0" stroke-width="1.5"/>
<text x="237" y="56" text-anchor="middle" font-size="9" font-weight="700" fill="#4fffb0">Thói quen mới</text>
<text x="237" y="70" text-anchor="middle" font-size="8" fill="#4fffb0">Uống 1 ly nước</text>
<rect x="30" y="92" width="240" height="18" rx="6" fill="#1e222d" stroke="#2a2f3d"/>
<text x="150" y="104" text-anchor="middle" font-size="8.5" fill="#bcc0d4">Sau khi [X cũ], tôi sẽ [Y mới]</text>
</svg>`},

{d:6,s:'ah',t:'2-Minute Rule + Don\'t Break the Chain',desc:'Thu gọn thói quen xuống 2 phút. Đừng bao giờ bỏ 2 lần liên tiếp.',
b:`<strong>2-Minute Rule:</strong> Thu gọn mọi thói quen mới xuống dưới 2 phút. "Tập gym" → "Mặc đồ tập và ra khỏi nhà." Chuẩn hóa trước, tối ưu sau.<br><br>
<strong>Don't Break the Chain:</strong> Đánh dấu ✅ mỗi ngày tạo phần thưởng tức thì. Nếu lỡ 1 ngày: <strong>"Không bao giờ bỏ 2 lần liên tiếp."</strong>`,
k:'💡 1 ngày xấu không phá hủy tiến độ. 2 ngày liên tiếp mới là khởi đầu của thói quen xấu mới.',
q:'Mục đích chính của Quy tắc 2 Phút?',o:['Hoàn thành mọi việc trong 2 phút','Tạo điểm khởi động để bắt đầu hành động','Tiết kiệm thời gian tập luyện'],a:1,
ok:'✅ Đúng! 2 phút là điểm khởi động — chuẩn hóa hành vi trước khi tối ưu kết quả.',
no:'❌ 2 phút không phải để hoàn thành mọi việc mà để tạo điểm khởi động hành vi.',
svg:`<svg viewBox="0 0 300 95" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="16" y="18" width="38" height="38" rx="6" fill="#1a2d24" stroke="#4fffb0" stroke-width="1.5"/><text x="35" y="43" text-anchor="middle" font-size="20" fill="#4fffb0">✓</text>
<rect x="62" y="18" width="38" height="38" rx="6" fill="#1a2d24" stroke="#4fffb0" stroke-width="1.5"/><text x="81" y="43" text-anchor="middle" font-size="20" fill="#4fffb0">✓</text>
<rect x="108" y="18" width="38" height="38" rx="6" fill="#1a2d24" stroke="#4fffb0" stroke-width="1.5"/><text x="127" y="43" text-anchor="middle" font-size="20" fill="#4fffb0">✓</text>
<rect x="154" y="18" width="38" height="38" rx="6" fill="#1a2d24" stroke="#4fffb0" stroke-width="1.5"/><text x="173" y="43" text-anchor="middle" font-size="20" fill="#4fffb0">✓</text>
<rect x="200" y="18" width="38" height="38" rx="6" fill="#1a2d24" stroke="#4fffb0" stroke-width="1.5"/><text x="219" y="43" text-anchor="middle" font-size="20" fill="#4fffb0">✓</text>
<rect x="246" y="18" width="38" height="38" rx="6" fill="#1e222d" stroke="#2a2f3d" stroke-width="1.5" stroke-dasharray="4 2"/>
<text x="265" y="43" text-anchor="middle" font-size="18" fill="#6b7292">?</text>
<text x="150" y="78" text-anchor="middle" font-size="10" font-weight="700" fill="#e8eaf2">Đừng làm đứt chuỗi!</text>
<text x="150" y="92" text-anchor="middle" font-size="8.5" fill="#6b7292">Lỡ 1 ngày → không bao giờ bỏ 2 lần liên tiếp</text>
</svg>`},

{d:7,s:'oc',t:'Cột Mốc 1977 — Khi Lời Khuyên Gây Ra Dịch Béo Phì',desc:'Tỷ lệ béo phì bùng nổ đúng lúc hướng dẫn "giảm béo, tăng tinh bột" ra đời.',
b:`Trước 1977, béo phì ổn định ~15%. Năm 1977, Mỹ ban hành: <strong>"ăn ít chất béo, tăng tinh bột"</strong>. Tỷ lệ béo phì tăng lên ~40%.<br><br>
Khi chất béo bị demonize, ngành thực phẩm thay bằng <strong>đường và tinh bột tinh chế</strong>. Kết quả: insulin tăng vọt.<br><br>
Béo phì không phải đại dịch tự nhiên — đó là <strong>hậu quả của lời khuyên sai 50 năm</strong>.`,
k:'💡 Không phải lỗi của bạn khi ăn kiêng thất bại. Bạn đang làm theo mô hình khoa học sai.',
q:'Tỷ lệ béo phì bắt đầu bùng nổ khi nào và vì sao?',o:['1990s, do fast food phổ biến','1977, khi hướng dẫn giảm béo tăng tinh bột được áp dụng','2000s, do lười vận động'],a:1,
ok:'✅ Đúng! 1977 là bước ngoặt — hướng dẫn sai trực tiếp gây ra dịch béo phì.',
no:'❌ 1977 mới là bước ngoặt — trùng với hướng dẫn ăn uống quốc gia "giảm béo, tăng tinh bột".',
svg:`<svg viewBox="0 0 300 140" class="illus" xmlns="http://www.w3.org/2000/svg">
<line x1="40" y1="120" x2="270" y2="120" stroke="#2a2f3d" stroke-width="1.5"/>
<line x1="40" y1="120" x2="40" y2="20" stroke="#2a2f3d" stroke-width="1.5"/>
<path d="M40 100 Q80 98 110 96" stroke="#4fc4ff" stroke-width="2.5" fill="none"/>
<path d="M110 96 Q160 80 200 55 Q240 30 265 15" stroke="#ff6c6c" stroke-width="2.5" fill="none"/>
<line x1="110" y1="15" x2="110" y2="120" stroke="#ffaa4c" stroke-width="1" stroke-dasharray="4 3"/>
<text x="113" y="12" font-size="8" fill="#ffaa4c">1977</text>
<rect x="115" y="42" width="90" height="22" rx="4" fill="#2a1a00"/>
<text x="160" y="53" text-anchor="middle" font-size="7.5" fill="#ffaa4c">Giảm béo, tăng tinh bột</text>
<text x="160" y="63" text-anchor="middle" font-size="7.5" fill="#ff6c6c">→ Insulin tăng vọt</text>
<text x="50" y="102" font-size="8" fill="#4fc4ff">~15%</text>
<text x="255" y="18" font-size="8" fill="#ff6c6c">~40%</text>
</svg>`},

{d:8,s:'oc',t:'Cơ Thể Là Máy Điều Nhiệt',desc:'Body Set Weight — cơ thể tự bảo vệ mức cân nặng "cài đặt" của nó.',
b:`Bạn nghĩ cơ thể như chiếc cân: ăn ít → nhẹ hơn. Thực ra nó như <strong>máy điều nhiệt</strong> — có Body Set Weight.<br><br>
Khi nhịn đói, cơ thể kích thích cơn đói và giảm trao đổi chất để kéo về mức đó.<br><br>
Đây là lý do giảm cân bằng ý chí thường <strong>thất bại lâu dài</strong>. Bạn đang chiến đấu với sinh học, không phải bản thân.`,
k:'💡 Muốn giảm cân bền vững: hạ mức "cài đặt" của máy điều nhiệt — không phải chỉ ép bản thân ăn ít.',
q:'Tại sao nhịn đói thường dẫn đến tăng cân trở lại?',o:['Cơ thể hấp thụ tốt hơn sau khi nhịn','Cơ thể kích thích cơn đói và giảm trao đổi chất để giữ Body Set Weight','Nhịn đói làm tăng insulin đột ngột'],a:1,
ok:'✅ Đúng! Cơ thể bảo vệ Body Set Weight bằng cách kích thích đói và giảm BMR.',
no:'❌ Cơ thể kích thích cơn đói và giảm trao đổi chất để kéo về Body Set Weight.',
svg:`<svg viewBox="0 0 300 140" class="illus" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="70" r="52" stroke="#4fc4ff" stroke-width="2.5" fill="#1e222d"/>
<circle cx="150" cy="70" r="38" fill="#252a38"/>
<text x="150" y="64" text-anchor="middle" font-size="26" font-weight="700" fill="#4fffb0">75</text>
<text x="150" y="80" text-anchor="middle" font-size="8.5" fill="#6b7292">kg · SET POINT</text>
<rect x="8" y="56" width="80" height="22" rx="6" fill="#252a38" stroke="#2a2f3d"/>
<text x="48" y="70" text-anchor="middle" font-size="8" fill="#ff6c6c">Nhịn → đói hơn ↑</text>
<rect x="212" y="56" width="80" height="22" rx="6" fill="#252a38" stroke="#2a2f3d"/>
<text x="252" y="70" text-anchor="middle" font-size="8" fill="#4fffb0">Ăn nhiều → đốt thêm</text>
<text x="150" y="132" text-anchor="middle" font-size="8.5" fill="#4fc4ff">Cơ thể tự điều chỉnh về Set Point</text>
</svg>`},

{d:9,s:'oc',t:'Insulin — Kẻ Chủ Mưu',desc:'Béo phì là bệnh nội tiết. Insulin là hormone ra lệnh tích trữ mỡ — không phải calo.',
b:`Suốt 50 năm tin vào "calo vào - calo ra". Mô hình này thất bại ở 99% người ăn kiêng vì giả định sai: cơ thể là cỗ máy thụ động.<br><br>
<strong>Insulin là hormone trực tiếp ra lệnh tích trữ mỡ.</strong> Khi insulin cao, cơ thể không thể đốt mỡ. Insulin cao liên tục khóa "bộ điều nhiệt", đẩy Body Set Weight lên cao mãi.`,
k:'💡 Câu hỏi đúng không phải "Tôi ăn bao nhiêu calo?" mà là "Mức insulin của tôi đang ở đâu?"',
q:'Nguyên nhân cốt lõi của béo phì theo The Obesity Code?',o:['Ăn quá nhiều calo','Mức insulin cao mãn tính','Lười vận động'],a:1,
ok:'✅ Đúng! Insulin cao mãn tính là nguyên nhân cốt lõi — không phải calo.',
no:'❌ Mô hình calo thất bại ở 99% người. Insulin mới là kẻ chủ mưu.',
svg:`<svg viewBox="0 0 300 130" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="15" y="20" width="120" height="90" rx="8" fill="#1e222d" stroke="#ff6c6c" stroke-width="1.5"/>
<text x="75" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#ff6c6c">❌ Mô hình cũ</text>
<text x="75" y="62" text-anchor="middle" font-size="8.5" fill="#bcc0d4">Calo vào</text>
<text x="75" y="76" text-anchor="middle" font-size="12" fill="#ff6c6c">vs</text>
<text x="75" y="90" text-anchor="middle" font-size="8.5" fill="#bcc0d4">Calo ra</text>
<rect x="165" y="20" width="120" height="90" rx="8" fill="#1a2d24" stroke="#4fc4ff" stroke-width="1.5"/>
<text x="225" y="44" text-anchor="middle" font-size="10" font-weight="700" fill="#4fc4ff">✅ Mô hình mới</text>
<text x="225" y="62" text-anchor="middle" font-size="8.5" fill="#bcc0d4">Insulin cao</text>
<text x="225" y="76" text-anchor="middle" font-size="8.5" fill="#bcc0d4">→ Tích mỡ</text>
<text x="225" y="90" text-anchor="middle" font-size="8.5" fill="#bcc0d4">→ Set Weight ↑</text>
<text x="150" y="122" text-anchor="middle" font-size="8.5" fill="#4fc4ff">Béo phì = Bệnh nội tiết</text>
</svg>`},

{d:10,s:'oc',t:'Insulin Spike — 4 Bước Tích Mỡ',desc:'Tinh bột tinh chế → Đường huyết tăng → Insulin bơm → Cổng đốt mỡ bị KHÓA.',
b:`<strong>①</strong> Nạp tinh bột tinh chế → phân giải ngay thành glucose.<br>
<strong>②</strong> Đường huyết tăng vọt, phá cân bằng sinh lý.<br>
<strong>③</strong> Tuyến tụy bơm lượng lớn Insulin để dọn dẹp.<br>
<strong>④</strong> Insulin cao → <strong>lệnh tích mỡ + khóa cổng đốt mỡ hoàn toàn</strong>. Lặp lại → Kháng Insulin.`,
k:'💡 Tinh bột tinh chế tạo cả "Insulin Spike" (tích mỡ) lẫn "Dopamine Spike" (thèm khát) — vòng lặp kép.',
q:'Tại sao ăn tinh bột tinh chế khiến cơ thể không đốt được mỡ?',o:['Tinh bột chuyển thành mỡ trực tiếp','Insulin cao ra lệnh tích trữ và khóa cơ chế đốt mỡ','Tinh bột làm chậm trao đổi chất'],a:1,
ok:'✅ Đúng! Insulin cao = lệnh tích trữ + khóa cổng đốt mỡ cùng lúc.',
no:'❌ Insulin mới là thủ phạm — khi cao, cổng đốt mỡ bị khóa hoàn toàn.',
svg:`<svg viewBox="0 0 300 135" class="illus" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="b" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#4fc4ff"/></marker></defs>
<rect x="20" y="8" width="260" height="24" rx="6" fill="#1e222d" stroke="#ffaa4c" stroke-width="1"/>
<text x="150" y="23" text-anchor="middle" font-size="8.5" fill="#ffaa4c">① Nạp tinh bột tinh chế → glucose ngay</text>
<line x1="150" y1="32" x2="150" y2="42" stroke="#4fc4ff" stroke-width="1.5" marker-end="url(#b)"/>
<rect x="20" y="42" width="260" height="24" rx="6" fill="#1e222d" stroke="#ff6c6c" stroke-width="1"/>
<text x="150" y="57" text-anchor="middle" font-size="8.5" fill="#ff6c6c">② Đường huyết tăng vọt đột biến</text>
<line x1="150" y1="66" x2="150" y2="76" stroke="#4fc4ff" stroke-width="1.5" marker-end="url(#b)"/>
<rect x="20" y="76" width="260" height="24" rx="6" fill="#1e222d" stroke="#7c6cff" stroke-width="1"/>
<text x="150" y="91" text-anchor="middle" font-size="8.5" fill="#7c6cff">③ Tuyến tụy bơm lượng lớn Insulin</text>
<line x1="150" y1="100" x2="150" y2="110" stroke="#4fc4ff" stroke-width="1.5" marker-end="url(#b)"/>
<rect x="20" y="110" width="260" height="22" rx="6" fill="#2d1a1a" stroke="#ff6c6c" stroke-width="2"/>
<text x="150" y="124" text-anchor="middle" font-size="8.5" fill="#ff6c6c">④ 🔒 Cổng đốt mỡ KHÓA — cơ thể tích trữ</text>
</svg>`},

{d:11,s:'oc',t:'Ví Tiền & Tài Khoản Ngân Hàng',desc:'Glycogen = ví tiền. Mỡ = ngân hàng. Insulin là nhân viên điều phối.',
b:`<strong>Glycogen (Ví tiền)</strong> — dễ tiếp cận, ngắn hạn, giới hạn ~500g.<br>
<strong>Mỡ cơ thể (Ngân hàng)</strong> — khó rút, dài hạn, dung lượng vô hạn.<br><br>
Khi insulin cao, năng lượng thừa bị nạp vào "Ngân hàng". Cơ thể <strong>KHÔNG BAO GIỜ</strong> rút mỡ ra xài nếu "Ví tiền" lúc nào cũng đầy do ăn vặt liên tục.`,
k:'💡 Muốn đốt mỡ: làm trống Ví tiền (hết Glycogen) → cơ thể mới chịu mở Ngân hàng.',
q:'Cơ thể sẽ đốt mỡ khi nào?',o:['Khi tập luyện cường độ cao','Khi Glycogen cạn và Insulin thấp','Khi ăn dưới 1200 calo/ngày'],a:1,
ok:'✅ Đúng! Glycogen cạn + Insulin thấp = cơ thể buộc mở Ngân hàng mỡ.',
no:'❌ Tập cường độ cao vẫn đốt Glycogen trước. Chỉ khi Glycogen cạn và Insulin thấp, mỡ mới được đốt.',
svg:`<svg viewBox="0 0 300 120" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="15" y="15" width="118" height="90" rx="8" fill="#1e222d" stroke="#ffaa4c" stroke-width="1.5"/>
<text x="74" y="40" text-anchor="middle" font-size="20">👛</text>
<text x="74" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="#ffaa4c">Glycogen</text>
<text x="74" y="74" text-anchor="middle" font-size="8" fill="#6b7292">Dễ tiếp cận</text>
<text x="74" y="86" text-anchor="middle" font-size="8" fill="#6b7292">Giới hạn ~500g</text>
<text x="74" y="97" text-anchor="middle" font-size="8" fill="#ffaa4c">Ví tiền</text>
<text x="150" y="64" text-anchor="middle" font-size="18" fill="#4fc4ff">→</text>
<rect x="167" y="15" width="118" height="90" rx="8" fill="#1e222d" stroke="#4fc4ff" stroke-width="1.5"/>
<text x="226" y="40" text-anchor="middle" font-size="20">🏦</text>
<text x="226" y="60" text-anchor="middle" font-size="10" font-weight="700" fill="#4fc4ff">Mỡ cơ thể</text>
<text x="226" y="74" text-anchor="middle" font-size="8" fill="#6b7292">Khó rút ra</text>
<text x="226" y="86" text-anchor="middle" font-size="8" fill="#6b7292">Dung lượng vô hạn</text>
<text x="226" y="97" text-anchor="middle" font-size="8" fill="#4fc4ff">Ngân hàng</text>
</svg>`},

{d:12,s:'oc',t:'3 Bữa Cố Định vs Ăn Vặt Liên Tục',desc:'Tần suất ăn ảnh hưởng trực tiếp đến insulin nền. Ăn vặt = insulin không bao giờ chạm đáy.',
b:`<strong>3 bữa cố định:</strong> Insulin tăng sau bữa rồi hạ xuống thấp. Giữa các bữa có <strong>Cửa sổ Đốt Mỡ</strong>.<br><br>
<strong>6+ bữa/ngày:</strong> Insulin không bao giờ chạm đáy. Cửa sổ đốt mỡ biến mất.<br><br>
Lời khuyên "chia nhỏ bữa ăn để tăng trao đổi chất" là <strong>hoàn toàn ngược với sinh học</strong>.`,
k:'💡 Ít bữa hơn = nhiều thời gian insulin thấp hơn = nhiều cơ hội đốt mỡ hơn.',
q:'Tại sao ăn nhiều bữa nhỏ thường không giúp giảm cân?',o:['Tổng calo vẫn như cũ','Insulin không bao giờ hạ đủ thấp để mở cổng đốt mỡ','Dạ dày không tiêu hóa kịp'],a:1,
ok:'✅ Đúng! Ăn vặt liên tục giữ Insulin cao mãi — cổng đốt mỡ không bao giờ mở.',
no:'❌ Vấn đề là tần suất insulin. Ăn nhiều bữa = Insulin không chạm đáy.',
svg:`<svg viewBox="0 0 300 130" class="illus" xmlns="http://www.w3.org/2000/svg">
<text x="75" y="14" text-anchor="middle" font-size="9" font-weight="700" fill="#4fffb0">✅ 3 bữa cố định</text>
<path d="M15 55 Q22 55 26 32 Q30 12 34 55 Q68 55 72 32 Q76 12 80 55 Q114 55 118 32 Q122 12 126 55 L126 62 Q90 78 15 62 Z" fill="rgba(79,196,255,0.15)" stroke="#4fc4ff" stroke-width="1.2"/>
<text x="70" y="82" text-anchor="middle" font-size="8" fill="#4fc4ff">↓ Cửa sổ đốt mỡ ↓</text>
<text x="220" y="14" text-anchor="middle" font-size="9" font-weight="700" fill="#ff6c6c">❌ Ăn vặt liên tục</text>
<path d="M155 46 Q161 46 164 34 Q167 24 170 46 Q176 46 179 34 Q182 24 185 46 Q191 46 194 34 Q197 24 200 46 Q206 46 209 34 Q212 24 215 46 Q221 46 224 34 Q227 24 230 46 Q236 46 239 34 Q242 24 245 46 L245 52 Q200 62 155 52 Z" fill="rgba(255,108,108,0.15)" stroke="#ff6c6c" stroke-width="1.2"/>
<line x1="155" y1="56" x2="275" y2="56" stroke="#ff6c6c" stroke-width="1" stroke-dasharray="4 3"/>
<text x="220" y="78" text-anchor="middle" font-size="8" fill="#ff6c6c">Insulin không chạm đáy</text>
<text x="150" y="105" text-anchor="middle" font-size="9" font-weight="700" fill="#e8eaf2">Ít bữa = Nhiều thời gian đốt mỡ</text>
</svg>`},

{d:13,s:'oc',t:'Cortisol — Kẻ Tòng Phạm Vô Hình',desc:'Stress mãn tính + thiếu ngủ → Cortisol → Bơm đường vào máu → Insulin tăng → Tích mỡ.',
b:`Bạn có thể <strong>tăng cân dù ăn rất ít</strong> nếu luôn căng thẳng.<br><br>
Stress + thiếu ngủ → Cortisol → bơm glucose dự trữ vào máu → đường huyết tăng → Insulin tăng → tích mỡ.<br><br>
Ngồi văn phòng 12-14h/ngày, áp lực, ngủ ít — cơ thể đang trải qua <strong>báo động sinh tồn liên tục</strong> mà không có mối đe dọa thực sự.`,
k:'💡 Ngủ đủ giấc và quản lý stress không phải xa xỉ — đây là yếu tố sinh học để đốt mỡ.',
q:'Cortisol ảnh hưởng đến cân nặng thế nào?',o:['Trực tiếp đốt calo khi stress','Bơm đường vào máu → kích hoạt Insulin → tích mỡ','Làm chậm tiêu hóa'],a:1,
ok:'✅ Đúng! Cortisol → đường huyết ↑ → Insulin ↑ → tích mỡ. Stress trực tiếp gây béo.',
no:'❌ Cortisol bơm glucose vào máu → kích hoạt Insulin → lệnh tích mỡ.',
svg:`<svg viewBox="0 0 300 120" class="illus" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="c" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#ff6c6c"/></marker></defs>
<circle cx="70" cy="55" r="38" fill="#2d1a1a" stroke="#ff6c6c" stroke-width="1.5"/>
<text x="70" y="44" text-anchor="middle" font-size="18">🧠</text>
<text x="70" y="60" text-anchor="middle" font-size="8" fill="#ff6c6c">Stress + Thiếu ngủ</text>
<text x="70" y="72" text-anchor="middle" font-size="8" fill="#ff6c6c">→ Cortisol ↑</text>
<line x1="110" y1="55" x2="145" y2="55" stroke="#ff6c6c" stroke-width="1.5" marker-end="url(#c)"/>
<rect x="145" y="30" width="138" height="50" rx="8" fill="#1e222d" stroke="#ffaa4c" stroke-width="1"/>
<text x="214" y="50" text-anchor="middle" font-size="8.5" fill="#ffaa4c">Gan bơm đường vào máu</text>
<text x="214" y="64" text-anchor="middle" font-size="8.5" fill="#ffaa4c">→ Insulin ↑ → Tích mỡ 🔒</text>
<text x="150" y="108" text-anchor="middle" font-size="8.5" fill="#4fc4ff">Tăng cân dù ăn ít — nếu luôn căng thẳng</text>
</svg>`},

{d:14,s:'oc',t:'Giải Pháp: Ăn Gì + Khi Nào Ăn',desc:'2 bước lập trình lại Bộ Điều Nhiệt: chất lượng bữa ăn + nhịn ăn gián đoạn.',
b:`<strong>Bước 1 — Ăn gì:</strong> Bỏ đường bổ sung, bột mì, ngũ cốc tinh chế. Tăng chất béo tự nhiên (dầu olive, bơ, quả hạch) và rau xanh. Chất béo tự nhiên gần như <strong>KHÔNG làm tăng insulin</strong>.<br><br>
<strong>Bước 2 — Khi nào ăn:</strong> Nhịn ăn gián đoạn (IF) — hạ triệt để insulin, mở "Ngân hàng mỡ", ép cơ thể dùng mỡ thừa làm nhiên liệu.`,
k:'💡 Diet kiểm soát insulin ngắn hạn. IF phá vỡ kháng insulin dài hạn. Kết hợp cả hai = bền vững.',
q:'Giải pháp bền vững theo The Obesity Code?',o:['Đếm calo và tập nhiều hơn','Chất lượng thực phẩm + nhịn ăn gián đoạn để hạ insulin','Chỉ tập cardio đủ nhiều'],a:1,
ok:'✅ Đúng! Ăn đúng loại + IF để hạ insulin = lập trình lại Bộ Điều Nhiệt.',
no:'❌ Đếm calo và cardio không giải quyết vấn đề insulin.',
svg:`<svg viewBox="0 0 300 120" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="15" y="15" width="128" height="95" rx="10" fill="#1e222d" stroke="#4fffb0" stroke-width="1.5"/>
<text x="79" y="38" text-anchor="middle" font-size="10" font-weight="700" fill="#4fffb0">Bước 1: ĂN GÌ</text>
<text x="79" y="56" text-anchor="middle" font-size="16">🥩🥑🥦</text>
<text x="79" y="74" text-anchor="middle" font-size="8" fill="#bcc0d4">Bỏ: đường, tinh bột</text>
<text x="79" y="86" text-anchor="middle" font-size="8" fill="#bcc0d4">Tăng: chất béo tự nhiên</text>
<text x="79" y="98" text-anchor="middle" font-size="8" fill="#bcc0d4">+ chất xơ rau xanh</text>
<rect x="157" y="15" width="128" height="95" rx="10" fill="#1e222d" stroke="#4fc4ff" stroke-width="1.5"/>
<text x="221" y="38" text-anchor="middle" font-size="10" font-weight="700" fill="#4fc4ff">Bước 2: KHI NÀO</text>
<text x="221" y="56" text-anchor="middle" font-size="16">⏰🔓</text>
<text x="221" y="74" text-anchor="middle" font-size="8" fill="#bcc0d4">Nhịn ăn gián đoạn</text>
<text x="221" y="86" text-anchor="middle" font-size="8" fill="#bcc0d4">Hạ insulin triệt để</text>
<text x="221" y="98" text-anchor="middle" font-size="8" fill="#bcc0d4">Mở cổng đốt mỡ</text>
</svg>`},

{d:15,s:'bn',t:'Bí Ẩn Bộ Tộc Hadza',desc:'Người săn bắt-hái lượm đi 10km/ngày đốt CÙNG calo với dân văn phòng ngồi 8h.',
b:`Tiến sĩ Herman Pontzer nghiên cứu bộ tộc <strong>Hadza</strong> ở Tanzania. Kỳ vọng: họ đốt gấp 2-3 lần so với dân văn phòng.<br><br>
Kết quả đo bằng đồng vị phóng xạ:<br>
<strong>Người Hadza: ~2.600 kcal/ngày<br>
Dân văn phòng: ~2.600 kcal/ngày</strong><br><br>
Cơ thể người không hoạt động như máy chạy bộ cắm điện.`,
k:'💡 Tập luyện nhiều hơn không đốt nhiều hơn. Cơ thể thông minh hơn chúng ta nghĩ rất nhiều.',
q:'Phát hiện về bộ tộc Hadza cho thấy điều gì?',o:['Người vận động nhiều đốt gấp đôi calo','Hadza và dân văn phòng đốt CÙNG lượng calo ~2.600 kcal','Hadza đốt ít hơn vì thích nghi'],a:1,
ok:'✅ Đúng! ~2.600 kcal/ngày cho cả hai — phát hiện thay đổi lịch sử khoa học.',
no:'❌ Kết quả thực tế: Hadza và dân văn phòng đốt CÙNG lượng calo.',
svg:`<svg viewBox="0 0 300 130" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="25" y="20" width="108" height="100" rx="8" fill="#1e222d" stroke="#ffaa4c" stroke-width="1.5"/>
<text x="79" y="48" text-anchor="middle" font-size="24">🏃</text>
<text x="79" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#ffaa4c">Người Hadza</text>
<text x="79" y="82" text-anchor="middle" font-size="8" fill="#6b7292">10km/ngày</text>
<text x="79" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#4fffb0">2.600 kcal</text>
<rect x="167" y="20" width="108" height="100" rx="8" fill="#1e222d" stroke="#4fc4ff" stroke-width="1.5"/>
<text x="221" y="48" text-anchor="middle" font-size="24">💻</text>
<text x="221" y="68" text-anchor="middle" font-size="9" font-weight="700" fill="#4fc4ff">Dân văn phòng</text>
<text x="221" y="82" text-anchor="middle" font-size="8" fill="#6b7292">Ngồi 8h/ngày</text>
<text x="221" y="112" text-anchor="middle" font-size="12" font-weight="700" fill="#4fffb0">2.600 kcal</text>
<text x="150" y="130" text-anchor="middle" font-size="11" font-weight="700" fill="#ff6c6c">= BẰNG NHAU!</text>
</svg>`},

{d:16,s:'bn',t:'Constrained Energy Framework',desc:'TDEE bị giới hạn cố định. Tập nhiều hơn không đốt nhiều hơn — cơ thể tái phân bổ ngân sách.',
b:`Cơ thể giống <strong>Giám đốc Tài chính ki bo</strong> với ngân sách cố định ~2.500 kcal/ngày.<br><br>
Khi bạn tập gym, GĐ Tài chính <strong>cắt giảm chỗ khác</strong>: hệ miễn dịch, phản ứng viêm, sinh sản.<br><br>
<strong>Tập nhiều hơn không tăng tổng ngân sách — chỉ tái phân bổ nó.</strong> Đây là lý do tập điên cuồng mà không giảm cân.`,
k:'💡 Đừng dùng tập luyện như "hình phạt" để chuộc lỗi ăn. Ăn uống để quản lý cân nặng. Tập để khỏe.',
q:'Theo Constrained Energy Framework, điều gì xảy ra khi tập nhiều hơn?',o:['Tổng calo đốt tăng tỷ lệ thuận','Cơ thể tái phân bổ ngân sách — không tăng tổng calo đốt','Trao đổi chất tự động tăng tốc'],a:1,
ok:'✅ Đúng! TDEE cố định. Tập nhiều hơn chỉ làm cơ thể chi ít hơn ở chỗ khác.',
no:'❌ Tổng TDEE cố định. Tập nhiều chỉ làm cơ thể cắt giảm chỗ khác để bù.',
svg:`<svg viewBox="0 0 300 125" class="illus" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="62" r="52" fill="#1e222d" stroke="#4fffb0" stroke-width="2"/>
<text x="150" y="32" text-anchor="middle" font-size="11" font-weight="700" fill="#4fffb0">~2.500 kcal</text>
<text x="150" y="46" text-anchor="middle" font-size="8" fill="#6b7292">Ngân sách cố định</text>
<path d="M150 58 L150 115 A52 52 0 0 1 97 62 Z" fill="rgba(255,170,76,0.2)" stroke="#ffaa4c" stroke-width="1"/>
<text x="112" y="98" text-anchor="middle" font-size="7.5" fill="#ffaa4c">Vận động</text>
<path d="M150 58 L202 62 A52 52 0 0 1 150 115 Z" fill="rgba(124,108,255,0.2)" stroke="#7c6cff" stroke-width="1"/>
<text x="188" y="98" text-anchor="middle" font-size="7.5" fill="#7c6cff">Trao đổi chất</text>
<path d="M150 58 L150 10 A52 52 0 0 0 202 62 Z" fill="rgba(79,196,255,0.2)" stroke="#4fc4ff" stroke-width="1"/>
<text x="192" y="36" text-anchor="middle" font-size="7.5" fill="#4fc4ff">Miễn dịch...</text>
<text x="150" y="62" text-anchor="middle" font-size="8" font-weight="700" fill="#e8eaf2">Tái phân bổ</text>
</svg>`},

{d:17,s:'bn',t:'3 Khối Tài Sản: Carbs, Fats, Protein',desc:'Carbs = tiền mặt. Fats = tiết kiệm. Protein = vật liệu xây dựng — không đốt thường.',
b:`<strong>Carbs (Tiền mặt)</strong> — phân giải thành glucose ngay, lưu trữ giới hạn ~500g glycogen.<br><br>
<strong>Fats (Tài khoản tiết kiệm)</strong> — trữ lượng khổng lồ, cơ thể chỉ rút khi "tiền mặt" cạn.<br><br>
<strong>Protein (Vật liệu xây dựng)</strong> — xây đắp và sửa chữa cơ bắp/tế bào. Cơ thể rất hiếm khi đốt protein làm năng lượng.`,
k:'💡 Khi chạy bộ, cơ thể đốt Carbs trước. Chỉ khi hết Carbs mới mở Fats. Protein gần như không bị đốt.',
q:'Cơ thể dùng Protein chủ yếu để làm gì?',o:['Cung cấp năng lượng nhanh','Xây dựng và sửa chữa cơ bắp, tế bào','Dự trữ năng lượng dài hạn'],a:1,
ok:'✅ Đúng! Protein = vật liệu xây dựng — không phải nhiên liệu.',
no:'❌ Protein là vật liệu xây dựng tế bào. Cơ thể rất hiếm khi đốt protein làm năng lượng.',
svg:`<svg viewBox="0 0 300 115" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="18" width="88" height="88" rx="8" fill="#1e222d" stroke="#ffaa4c" stroke-width="1.5"/>
<text x="52" y="42" text-anchor="middle" font-size="18">💵</text>
<text x="52" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#ffaa4c">Carbs</text>
<text x="52" y="72" text-anchor="middle" font-size="8" fill="#6b7292">Tiền mặt</text>
<text x="52" y="84" text-anchor="middle" font-size="7.5" fill="#6b7292">Nhanh, giới hạn</text>
<rect x="106" y="18" width="88" height="88" rx="8" fill="#1e222d" stroke="#4fffb0" stroke-width="1.5"/>
<text x="150" y="42" text-anchor="middle" font-size="18">🏦</text>
<text x="150" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#4fffb0">Fats</text>
<text x="150" y="72" text-anchor="middle" font-size="8" fill="#6b7292">Tiết kiệm</text>
<text x="150" y="84" text-anchor="middle" font-size="7.5" fill="#6b7292">Khó rút, vô hạn</text>
<rect x="204" y="18" width="88" height="88" rx="8" fill="#1e222d" stroke="#7c6cff" stroke-width="1.5"/>
<text x="248" y="42" text-anchor="middle" font-size="18">🧱</text>
<text x="248" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#7c6cff">Protein</text>
<text x="248" y="72" text-anchor="middle" font-size="8" fill="#6b7292">Vật liệu XD</text>
<text x="248" y="84" text-anchor="middle" font-size="7.5" fill="#6b7292">Không đốt thường</text>
</svg>`},

{d:18,s:'bn',t:'Tại Sao Ép Cân Thường Thất Bại?',desc:'Nhịn đói quá mức → cơ thể hiểu là NẠN ĐÓI → cắt BMR → Hiệu ứng Yo-yo.',
b:`Khi cắt calo đột ngột, cơ thể hiểu là <strong>NẠN ĐÓI</strong>. Phản ứng sinh tồn: giảm BMR, tăng Cortisol.<br><br>
Sau chương trình: BMR đã giảm thấp hơn trước. Khi ăn bình thường trở lại → <strong>Hiệu ứng Yo-yo</strong>: tăng cân nhanh hơn bao giờ hết.`,
k:'💡 "Ép cân" dạy cơ thể trở nên hiệu quả hơn trong việc tích trữ mỡ — ngược hoàn toàn với mục tiêu.',
q:'Tại sao sau ăn kiêng cắt calo, nhiều người tăng cân nhanh trở lại?',o:['Vì không duy trì được ý chí','Vì BMR đã giảm thấp hơn — cơ thể giờ đốt ít hơn khi nghỉ','Vì cơ thể hấp thụ tốt hơn sau nhịn'],a:1,
ok:'✅ Đúng! BMR giảm → ăn bình thường lại → đốt ít hơn → Yo-yo.',
no:'❌ BMR đã giảm thấp hơn. Ăn bình thường lại → đốt ít hơn → tăng cân nhanh.',
svg:`<svg viewBox="0 0 300 125" class="illus" xmlns="http://www.w3.org/2000/svg">
<line x1="30" y1="20" x2="30" y2="105" stroke="#2a2f3d" stroke-width="1.5"/>
<line x1="30" y1="105" x2="270" y2="105" stroke="#2a2f3d" stroke-width="1.5"/>
<text x="20" y="30" font-size="8" fill="#6b7292">BMR</text>
<path d="M30 32 L75 32" stroke="#4fffb0" stroke-width="2.5"/>
<path d="M75 32 Q95 32 108 54 Q118 70 128 82 Q140 90 165 94 L200 94" stroke="#4fffb0" stroke-width="2.5"/>
<path d="M200 94 Q220 90 240 70 Q255 52 265 32" stroke="#ff6c6c" stroke-width="2" stroke-dasharray="5 3"/>
<text x="80" y="26" font-size="8" fill="#6b7292">Cắt calo</text>
<text x="203" y="89" font-size="7.5" fill="#ffaa4c">BMR thấp hơn</text>
<text x="252" y="28" font-size="8" fill="#ff6c6c">Yo-yo ↑</text>
</svg>`},

{d:19,s:'bn',t:'Loài Vượn Béo Nhất',desc:'Người có tỷ lệ mỡ cao hơn mọi loài linh trưởng — vì não lớn cần mỡ dự trữ để sống sót.',
b:`So với tinh tinh, con người có <strong>tỷ lệ mỡ tự nhiên cao hơn hẳn</strong>.<br><br>
Để duy trì <strong>bộ não khổng lồ</strong> (tiêu 20% tổng năng lượng) và nuôi con nhiều năm, tổ tiên ta buộc tiến hóa để trữ mỡ hiệu quả.<br><br>
Mỡ cơ thể là <strong>"bảo hiểm nhân thọ sinh học"</strong> giúp loài người sống sót qua các kỳ băng hà và nạn đói.`,
k:'💡 Cơ thể không phải kẻ thù — nó đang làm đúng chức năng tiến hóa. Hiểu nó để làm việc cùng nó.',
q:'Tại sao con người có tỷ lệ mỡ cao hơn các loài linh trưởng?',o:['Do ăn nhiều hơn','Do tiến hóa cần mỡ dự trữ để nuôi não lớn và sống sót','Do ít vận động hơn'],a:1,
ok:'✅ Đúng! Mỡ = bảo hiểm nhân thọ sinh học để duy trì não lớn qua băng hà.',
no:'❌ Tỷ lệ mỡ cao là đặc điểm tiến hóa — cần để duy trì bộ não và sinh con.',
svg:`<svg viewBox="0 0 300 120" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="15" width="120" height="98" rx="8" fill="#1e222d" stroke="#7c6cff" stroke-width="1.5"/>
<text x="80" y="42" text-anchor="middle" font-size="26">🦍</text>
<text x="80" y="62" text-anchor="middle" font-size="10" font-weight="700" fill="#7c6cff">Tinh tinh</text>
<text x="80" y="76" text-anchor="middle" font-size="8" fill="#4fffb0">Cơ bắp ~90%</text>
<text x="80" y="90" text-anchor="middle" font-size="8" fill="#6b7292">Não nhỏ</text>
<text x="80" y="105" text-anchor="middle" font-size="8" fill="#ffaa4c">Mỡ rất ít</text>
<rect x="160" y="15" width="120" height="98" rx="8" fill="#1e222d" stroke="#4fffb0" stroke-width="1.5"/>
<text x="220" y="42" text-anchor="middle" font-size="26">🧠</text>
<text x="220" y="62" text-anchor="middle" font-size="10" font-weight="700" fill="#4fffb0">Con người</text>
<text x="220" y="76" text-anchor="middle" font-size="8" fill="#6b7292">Não lớn = 20% NL</text>
<text x="220" y="90" text-anchor="middle" font-size="8" fill="#ff6c6c">Mỡ tự nhiên cao</text>
<text x="220" y="105" text-anchor="middle" font-size="8" fill="#4fffb0">= Bảo hiểm sinh học</text>
</svg>`},

{d:20,s:'bn',t:'Nếu Tập Không Giảm Cân, Tại Sao Phải Tập?',desc:'Tập luyện chiếm ~5% calo đốt — nhưng thiết yếu để kéo dài tuổi thọ và bảo vệ não bộ.',
b:`95% năng lượng đốt là tự động (tim đập, phổi thở, não hoạt động). Tập luyện chỉ ~5%.<br><br>
Vậy tại sao tập? <strong>Kéo dài tuổi thọ</strong> đáng kể, <strong>giảm viêm mãn tính</strong>, <strong>bảo vệ não bộ</strong>, cải thiện giấc ngủ.<br><br>
<strong>Đừng dùng chạy bộ như "hình phạt" cho những gì bạn đã ăn.</strong>`,
k:'💡 Ăn uống để quản lý cân nặng. Vận động để có cỗ máy sinh học khỏe mạnh và dẻo dai.',
q:'Tại sao tập luyện ít hiệu quả để giảm cân?',o:['Người tập thường ăn bù lại nhiều hơn','Tập chỉ chiếm ~5% tổng calo đốt — 95% là trao đổi chất tự động','Cơ thể giữ nước nhiều hơn khi tập'],a:1,
ok:'✅ Đúng! 95% calo đốt là tự động. Tập gym chỉ ảnh hưởng 5%.',
no:'❌ Vấn đề cơ bản: 95% calo đốt là trao đổi chất tự động. Tập chỉ ảnh hưởng 5%.',
svg:`<svg viewBox="0 0 300 125" class="illus" xmlns="http://www.w3.org/2000/svg">
<circle cx="125" cy="60" r="52" fill="#1e222d" stroke="#4fffb0" stroke-width="1.5"/>
<path d="M125 60 L125 8 A52 52 0 1 1 70 90 Z" fill="rgba(79,255,176,0.2)" stroke="#4fffb0" stroke-width="1"/>
<text x="95" y="72" text-anchor="middle" font-size="13" font-weight="700" fill="#4fffb0">95%</text>
<text x="95" y="85" text-anchor="middle" font-size="7.5" fill="#4fffb0">BMR tự động</text>
<path d="M125 60 L125 8 A52 52 0 0 0 70 90 Z" fill="rgba(255,170,76,0.3)" stroke="#ffaa4c" stroke-width="1.5"/>
<text x="82" y="36" text-anchor="middle" font-size="13" font-weight="700" fill="#ffaa4c">5%</text>
<text x="82" y="48" text-anchor="middle" font-size="7.5" fill="#ffaa4c">Tập luyện</text>
<rect x="192" y="15" width="102" height="90" rx="8" fill="#1e222d" stroke="#4pc4ff" stroke-width="1"/>
<text x="243" y="34" text-anchor="middle" font-size="9" font-weight="700" fill="#4fc4ff">Lợi ích thật</text>
<text x="243" y="50" text-anchor="middle" font-size="8" fill="#bcc0d4">⏳ Kéo dài tuổi thọ</text>
<text x="243" y="64" text-anchor="middle" font-size="8" fill="#bcc0d4">🔥 Giảm viêm</text>
<text x="243" y="78" text-anchor="middle" font-size="8" fill="#bcc0d4">🧠 Bảo vệ não</text>
<text x="243" y="92" text-anchor="middle" font-size="8" fill="#bcc0d4">😴 Ngủ tốt hơn</text>
</svg>`},

{d:21,s:'bn',t:'Volume Eating — Hack Cảm Giác Đói',desc:'Não nhận tín hiệu no từ thể tích dạ dày, không phải calo. Chọn thực phẩm thể tích lớn, calo thấp.',
b:`Cùng 400 calo:<br>
🍟 <strong>Dầu mỡ/chế biến sẵn</strong> — thể tích nhỏ → vẫn đói cồn cào.<br>
🍗 <strong>Thịt/Đạm</strong> → no vừa phải.<br>
🥗 <strong>Rau củ/nguyên bản</strong> — thể tích lớn → đã no cứng.<br><br>
Bí quyết: chọn thực phẩm lấp đầy dạ dày với ít calo nhất.`,
k:'💡 Đừng đếm calo — hãy chọn thực phẩm lấp đầy dạ dày với ít calo nhất.',
q:'Volume Eating dựa trên nguyên lý gì?',o:['Não tính calo để quyết định no','Não nhận tín hiệu no từ thể tích dạ dày — không phải calo','Ăn chậm giúp nhận tín hiệu no sớm'],a:1,
ok:'✅ Đúng! Não dựa vào thể tích. Rau củ: thể tích lớn, calo thấp.',
no:'❌ Não dựa vào thể tích dạ dày — không phải calo.',
svg:`<svg viewBox="0 0 300 108" class="illus" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="60" cy="72" rx="44" ry="28" fill="#2d1a1a" stroke="#ff6c6c" stroke-width="1.5"/>
<text x="60" y="66" text-anchor="middle" font-size="14">🍟</text>
<text x="60" y="82" text-anchor="middle" font-size="7.5" fill="#ff6c6c">400cal — nhỏ</text>
<text x="60" y="95" text-anchor="middle" font-size="7.5" fill="#ff6c6c">Vẫn đói!</text>
<ellipse cx="150" cy="68" rx="44" ry="32" fill="#1e222d" stroke="#ffaa4c" stroke-width="1.5"/>
<text x="150" y="60" text-anchor="middle" font-size="14">🍗</text>
<text x="150" y="76" text-anchor="middle" font-size="7.5" fill="#ffaa4c">400cal — vừa</text>
<text x="150" y="90" text-anchor="middle" font-size="7.5" fill="#ffaa4c">Tạm ổn</text>
<ellipse cx="240" cy="60" rx="44" ry="40" fill="#1a2d24" stroke="#4fffb0" stroke-width="2"/>
<text x="240" y="50" text-anchor="middle" font-size="14">🥗</text>
<text x="240" y="66" text-anchor="middle" font-size="7.5" fill="#4fffb0">400cal — lớn</text>
<text x="240" y="80" text-anchor="middle" font-size="7.5" fill="#4fffb0">No cứng!</text>
<text x="150" y="108" text-anchor="middle" font-size="9" font-weight="700" fill="#4fffb0">Cùng 400 calo — no khác nhau hoàn toàn</text>
</svg>`},

{d:22,s:'bn',t:'Thay Đổi Hệ Chuẩn: 4 Sự Thật Từ Burn',desc:'4 quan niệm sai phổ biến và 4 sự thật khoa học mà Burn chứng minh.',
b:`<strong>❌ Cỗ máy cơ khí</strong> → <strong>✅ Giám đốc Tài chính ki bo</strong><br><br>
<strong>❌ Tập nhiều = đốt nhiều</strong> → <strong>✅ TDEE bị giới hạn — cơ thể bù trừ</strong><br><br>
<strong>❌ Thuốc trà tăng trao đổi chất</strong> → <strong>✅ Trao đổi chất cực kỳ ổn định</strong><br><br>
<strong>❌ Tập để đốt mỡ</strong> → <strong>✅ Tập để kéo dài tuổi thọ, giảm viêm, bảo vệ não</strong>`,
k:'💡 Thay đổi hệ chuẩn là bước đầu tiên. Khi hiểu đúng cơ chế mới có thể hành động đúng.',
q:'Điều nào là SỰ THẬT khoa học từ sách Burn?',o:['Tập nhiều đốt nhiều calo hơn tỷ lệ thuận','Trao đổi chất rất ổn định — không tăng tốc được bằng thuốc hay trà giảm cân','Cardio hiệu quả nhất để giảm cân'],a:1,
ok:'✅ Đúng! Trao đổi chất cực kỳ ổn định — tiến hóa để bảo vệ chống nạn đói.',
no:'❌ TDEE bị giới hạn. Trao đổi chất không tăng tốc được bằng thuốc.',
svg:`<svg viewBox="0 0 300 120" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="10" width="134" height="100" rx="8" fill="#2d1a1a" stroke="#ff6c6c" stroke-width="1.5"/>
<text x="75" y="28" text-anchor="middle" font-size="9" font-weight="700" fill="#ff6c6c">❌ Tư duy cũ</text>
<text x="75" y="46" text-anchor="middle" font-size="7.5" fill="#bcc0d4">Cỗ máy cơ khí</text>
<text x="75" y="60" text-anchor="middle" font-size="7.5" fill="#bcc0d4">Tập nhiều = đốt nhiều</text>
<text x="75" y="74" text-anchor="middle" font-size="7.5" fill="#bcc0d4">Thuốc tăng TĐC</text>
<text x="75" y="88" text-anchor="middle" font-size="7.5" fill="#bcc0d4">Tập để đốt mỡ</text>
<rect x="158" y="10" width="134" height="100" rx="8" fill="#1a2d24" stroke="#4fffb0" stroke-width="1.5"/>
<text x="225" y="28" text-anchor="middle" font-size="9" font-weight="700" fill="#4fffb0">✅ Khoa học mới</text>
<text x="225" y="46" text-anchor="middle" font-size="7.5" fill="#bcc0d4">GĐ Tài chính</text>
<text x="225" y="60" text-anchor="middle" font-size="7.5" fill="#bcc0d4">TDEE cố định, bù trừ</text>
<text x="225" y="74" text-anchor="middle" font-size="7.5" fill="#bcc0d4">TĐC cực kỳ ổn định</text>
<text x="225" y="88" text-anchor="middle" font-size="7.5" fill="#bcc0d4">Tập để khỏe & sống lâu</text>
</svg>`},

{d:23,s:'bb',t:'Nghịch Lý Của Runner',desc:'Chỉ chạy không tập tạ → mòn cơ → giảm BMR → dễ chấn thương và Skinny-Fat.',
b:`Chỉ chạy mà không tập tạ, bạn rơi vào bẫy:<br><br>
<strong>Chạy dài gây dị hóa</strong> — phá vỡ cơ bắp để lấy năng lượng khi thiếu protein.<br>
<strong>Mất khối cơ</strong> → BMR giảm → đốt ít calo hơn cả khi nghỉ.<br>
<strong>Không có "giảm xóc"</strong> → khớp gối gánh toàn bộ → dễ chấn thương.<br><br>
Hội chứng <strong>Skinny-Fat</strong>: trông gầy nhưng tỷ lệ mỡ cao.`,
k:'💡 Chạy bộ không đủ — cần tạ + protein để bảo vệ cơ và tăng tốc độ chạy.',
q:'Điều gì xảy ra khi chỉ chạy bộ mà không tập tạ?',o:['Cơ bắp tự phát triển theo','Cơ bắp bị mòn → BMR giảm → dễ chấn thương','Chạy nhanh hơn nhưng sức bền kém'],a:1,
ok:'✅ Đúng! Chạy không có tạ = mất cơ + BMR giảm + dễ chấn thương.',
no:'❌ Chạy bộ thuần túy làm mòn cơ qua cơ chế dị hóa (catabolism).',
svg:`<svg viewBox="0 0 300 120" class="illus" xmlns="http://www.w3.org/2000/svg">
<defs><marker id="d" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0,0 L5,2.5 L0,5 Z" fill="#ff6c6c"/></marker></defs>
<rect x="15" y="18" width="270" height="28" rx="6" fill="#1e222d" stroke="#7c6cff" stroke-width="1"/>
<text x="150" y="35" text-anchor="middle" font-size="8.5" fill="#7c6cff">Chỉ chạy bộ, không tập tạ, thiếu protein</text>
<line x1="75" y1="46" x2="75" y2="58" stroke="#ff6c6c" stroke-width="1.5" marker-end="url(#d)"/>
<line x1="225" y1="46" x2="225" y2="58" stroke="#ff6c6c" stroke-width="1.5" marker-end="url(#d)"/>
<rect x="15" y="58" width="122" height="28" rx="6" fill="#2d1a1a" stroke="#ff6c6c" stroke-width="1"/>
<text x="76" y="75" text-anchor="middle" font-size="8" fill="#ff6c6c">Mất cơ → BMR giảm</text>
<rect x="163" y="58" width="122" height="28" rx="6" fill="#2d1a1a" stroke="#ff6c6c" stroke-width="1"/>
<text x="224" y="75" text-anchor="middle" font-size="8" fill="#ff6c6c">Không giảm xóc → chấn thương</text>
<line x1="76" y1="86" x2="148" y2="104" stroke="#ff6c6c" stroke-width="1.5" marker-end="url(#d)"/>
<line x1="224" y1="86" x2="152" y2="104" stroke="#ff6c6c" stroke-width="1.5" marker-end="url(#d)"/>
<rect x="80" y="104" width="140" height="14" rx="4" fill="#2d1a1a" stroke="#ff6c6c" stroke-width="1.5"/>
<text x="150" y="115" text-anchor="middle" font-size="8" fill="#ff6c6c">Skinny-Fat + Chậm lại</text>
</svg>`},

{d:24,s:'bb',t:'Protein 1.8-2.2g/kg — Nền Tảng Runner',desc:'Người chạy bộ cần protein cao để bảo vệ cơ và phục hồi sau chạy.',
b:`Nhu cầu protein cho runner: <strong>1.8 - 2.2g / kg / ngày</strong>.<br><br>
Ví dụ 55kg → cần <strong>99-121g protein/ngày</strong>.<br><br>
Protein: phục hồi vi chấn thương sau chạy, duy trì khối cơ khi thiếu calo, tăng no kéo dài.<br>
Nguồn tốt: thịt gà, cá, trứng, đậu phụ, sữa chua Hy Lạp.`,
k:'💡 Quy tắc đơn giản: 1 bàn tay = 1 phần protein. Ăn 4-5 phần/ngày.',
q:'Người chạy bộ nặng 55kg cần bao nhiêu protein/ngày?',o:['Khoảng 55g (1g/kg)','Khoảng 99-121g (1.8-2.2g/kg)','Khoảng 165g (3g/kg)'],a:1,
ok:'✅ Đúng! 1.8-2.2g/kg × 55kg = 99-121g/ngày.',
no:'❌ Người chạy bộ cần 1.8-2.2g/kg/ngày. 55kg = 99-121g protein.',
svg:`<svg viewBox="0 0 300 115" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="18" width="260" height="48" rx="10" fill="#1e222d" stroke="#7c6cff" stroke-width="2"/>
<text x="150" y="42" text-anchor="middle" font-size="22" font-weight="700" fill="#7c6cff">1.8 - 2.2g</text>
<text x="150" y="58" text-anchor="middle" font-size="10" fill="#6b7292">Protein / kg / ngày cho runner</text>
<rect x="20" y="80" width="122" height="28" rx="6" fill="#252a38" stroke="#2a2f3d"/>
<text x="81" y="93" text-anchor="middle" font-size="8" fill="#bcc0d4">55kg × 2g = 110g/ngày</text>
<text x="81" y="104" text-anchor="middle" font-size="7.5" fill="#6b7292">Ví dụ thực tế</text>
<rect x="158" y="80" width="122" height="28" rx="6" fill="#252a38" stroke="#2a2f3d"/>
<text x="219" y="93" text-anchor="middle" font-size="14">🍗🥚🐟🫘</text>
<text x="219" y="105" text-anchor="middle" font-size="7.5" fill="#6b7292">Nguồn protein tốt</text>
</svg>`},

{d:25,s:'bb',t:'Sức Mạnh = Tốc Độ — Progressive Overload',desc:'Tập tạ tạo lực đẩy cho mỗi bước chạy. Không làm bạn to hay chậm hơn.',
b:`Nhiều runner sợ tập tạ vì nghĩ sẽ "phồng cơ". Thực tế ngược lại:<br><br>
<strong>Cơ bắp mạnh hơn → mỗi bước đẩy mạnh hơn → tốc độ tăng.</strong><br><br>
<strong>Progressive Overload:</strong> cơ chỉ phát triển khi bị thách thức tăng dần. Tập ở mức <strong>75-85% 1RM</strong>. 3 bài cơ bản: <strong>Squat, Deadlift, Military Press</strong>.`,
k:'💡 Mục tiêu không phải "to hơn" mà là "mạnh hơn" — chạy nhanh hơn và ít chấn thương hơn.',
q:'Progressive Overload nghĩa là gì?',o:['Tập mỗi ngày không nghỉ','Tăng dần trọng lượng hoặc số rep để cơ liên tục bị thách thức','Tập nhiều set nhất có thể'],a:1,
ok:'✅ Đúng! Tăng dần thử thách — cơ chỉ phát triển khi vượt ngưỡng hiện tại.',
no:'❌ Progressive Overload là tăng dần trọng lượng/rep theo thời gian — không phải tập mỗi ngày.',
svg:`<svg viewBox="0 0 300 110" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="20" y="18" width="115" height="76" rx="8" fill="#1e222d" stroke="#7c6cff" stroke-width="1.5"/>
<text x="77" y="42" text-anchor="middle" font-size="20">🏋️</text>
<text x="77" y="60" text-anchor="middle" font-size="9" font-weight="700" fill="#7c6cff">Sức mạnh</text>
<text x="77" y="74" text-anchor="middle" font-size="8" fill="#6b7292">75-85% 1RM</text>
<text x="77" y="86" text-anchor="middle" font-size="7.5" fill="#6b7292">Squat/Deadlift/Press</text>
<text x="150" y="62" text-anchor="middle" font-size="22" fill="#4fffb0">=</text>
<rect x="165" y="18" width="115" height="76" rx="8" fill="#1e222d" stroke="#4fffb0" stroke-width="1.5"/>
<text x="222" y="42" text-anchor="middle" font-size="20">🏃</text>
<text x="222" y="60" text-anchor="middle" font-size="9" font-weight="700" fill="#4fffb0">Tốc độ</text>
<text x="222" y="74" text-anchor="middle" font-size="8" fill="#6b7292">Lực đẩy mạnh hơn</text>
<text x="222" y="86" text-anchor="middle" font-size="7.5" fill="#6b7292">Ít chấn thương hơn</text>
</svg>`},

{d:26,s:'bb',t:'Lộ Trình 3 Pha: Bắt Đầu Tập Tạ Từ Zero',desc:'Pha 1 (2 phút) → Pha 2 (kích hoạt) → Pha 3 (chu kỳ ổn định).',
b:`<strong>Pha 1 (Tuần 1-2) — Lực cản = 0:</strong> Chỉ cần chuẩn bị túi gym và đi đến gym. Mục tiêu: tạo thói quen đi.<br><br>
<strong>Pha 2 (Tháng 1) — Kích hoạt:</strong> 1-2 buổi tạ/tuần. 10-15 hard sets/buổi. Chú ý form trước khi tăng nặng.<br><br>
<strong>Pha 3 (Tháng 2+) — Chu kỳ BBLS:</strong> Thói quen vào form. Deload sau mỗi 4 tuần. Quy tắc vàng: <strong>Tạ trước, Chạy sau.</strong>`,
k:'💡 Chuẩn hóa hành vi trước khi tối ưu kết quả. Đi đến gym đều đã là thành công giai đoạn đầu.',
q:'Tại sao Pha 1 chỉ cần "đến gym" — không cần tập gì?',o:['Vì không cần tập tuần đầu','Vì Pha 1 tập trung tạo thói quen — chuẩn hóa hành vi trước, tối ưu sau','Vì cơ thể cần làm quen môi trường'],a:1,
ok:'✅ Đúng! Pha 1 áp dụng 2-Minute Rule — chuẩn hóa hành vi trước khi tối ưu kết quả.',
no:'❌ Mục tiêu Pha 1 là chuẩn hóa hành vi (đi đến gym đều) — tối ưu kết quả là bước tiếp theo.',
svg:`<svg viewBox="0 0 300 108" class="illus" xmlns="http://www.w3.org/2000/svg">
<line x1="18" y1="88" x2="282" y2="88" stroke="#2a2f3d" stroke-width="2"/>
<rect x="18" y="78" width="58" height="10" rx="3" fill="#7c6cff"/>
<text x="47" y="72" text-anchor="middle" font-size="7.5" fill="#7c6cff">Pha 1</text>
<text x="47" y="62" text-anchor="middle" font-size="7" fill="#bcc0d4">2 phút</text>
<rect x="86" y="62" width="58" height="26" rx="3" fill="#4fc4ff"/>
<text x="115" y="56" text-anchor="middle" font-size="7.5" fill="#4fc4ff">Pha 2</text>
<text x="115" y="46" text-anchor="middle" font-size="7" fill="#bcc0d4">Kích hoạt</text>
<rect x="154" y="38" width="128" height="50" rx="3" fill="#4fffb0" opacity=".8"/>
<text x="218" y="32" text-anchor="middle" font-size="7.5" fill="#0d0f14">Pha 3 — Chu kỳ BBLS</text>
<text x="218" y="42" text-anchor="middle" font-size="7" fill="#0d0f14">Ổn định + Deload</text>
<text x="150" y="104" text-anchor="middle" font-size="8" fill="#6b7292">Quy tắc vàng: Tạ trước, Chạy sau</text>
</svg>`},

{d:27,s:'bb',t:'Kết Hợp Lịch Tạ + Chạy Không Overtraining',desc:'Lịch mẫu 5 ngày/tuần để chuẩn bị giải 10km kết hợp tập tạ.',
b:`Nguyên tắc: <strong>Tạ trước, Chạy sau</strong> — tập tạ khi còn tươi nhất để form tốt và an toàn.<br><br>
<strong>T2:</strong> Tạ (Squat+Press) + Chạy nhẹ 20 phút<br>
<strong>T3:</strong> Chạy tempo/interval<br>
<strong>T4:</strong> Nghỉ hoặc đi bộ nhẹ<br>
<strong>T5:</strong> Tạ (Deadlift) + Chạy nhẹ 20 phút<br>
<strong>T7:</strong> Long run 40-60 phút pace thoải mái<br><br>
Tối thiểu <strong>6 tiếng giữa tạ và chạy dài</strong>. Deload mỗi 4 tuần.`,
k:'💡 Consistency quan trọng hơn intensity. 3 tháng đều đặn > 1 tháng điên cuồng rồi nghỉ.',
q:'Nên sắp xếp tạ và chạy thế nào trong cùng ngày?',o:['Chạy trước để khởi động','Tạ trước khi còn tươi nhất, chạy sau','Thứ tự không quan trọng'],a:1,
ok:'✅ Đúng! Tạ trước khi tươi = form tốt + an toàn. Chạy sau.',
no:'❌ Tạ trước, chạy sau. Form tập tạ cần sức lực tươi nhất để tránh chấn thương.',
svg:`<svg viewBox="0 0 300 108" class="illus" xmlns="http://www.w3.org/2000/svg">${''.concat(...['T2','T3','T4','T5','T6','T7','CN'].map((d,i)=>{const c=['#7c6cff','#4fffb0','#2a2f3d','#7c6cff','#2a2f3d','#4fffb0','#2a2f3d'];const h=[68,52,22,68,22,52,22];const lb=['Tạ+Chạy','Chạy','Nghỉ','Tạ+Chạy','Nghỉ','Long run','Nghỉ'];return`<rect x="${12+i*40}" y="${90-h[i]}" width="34" height="${h[i]}" rx="4" fill="${c[i]}" opacity="${c[i]==='#2a2f3d'?'0.4':'0.85'}"/><text x="${29+i*40}" y="98" text-anchor="middle" font-size="8" fill="#6b7292">${d}</text><text x="${29+i*40}" y="${84-h[i]}" text-anchor="middle" font-size="6.5" fill="#e8eaf2">${lb[i]}</text>`;}))}</svg>`},

{d:28,s:'bb',t:'Nhịn Ăn Gián Đoạn — Timeline Sinh Học',desc:'IF không phải nhịn đói — là Energy Switching từ Glycogen sang Mỡ qua 4 giai đoạn.',
b:`<strong>Giờ 0-4:</strong> Đường huyết & insulin bắt đầu giảm. Năng lượng vẫn từ thức ăn.<br>
<strong>Giờ 8-12:</strong> Glycogen cạn dần. Gan bắt đầu tìm kiếm chất béo.<br>
<strong>Giờ 12-16 — "Cửa Sổ Vàng":</strong> Insulin chạm đáy. Cơ thể chuyển sang <strong>Ketosis</strong>. <strong>Autophagy</strong> kích hoạt: tế bào tự dọn protein hư hỏng.<br>
<strong>Giờ 16+:</strong> 16:8 tối ưu — đang dùng mỡ thừa làm nhiên liệu.`,
k:'💡 IF là Energy Switching: chuyển từ tủ lạnh (Glycogen) sang tủ đông (Mỡ cơ thể).',
q:'Điều gì xảy ra sau 12-16 giờ nhịn ăn?',o:['Cơ thể bắt đầu phân hủy cơ bắp','Insulin chạm đáy, cơ thể đốt mỡ (Ketosis) và kích hoạt Autophagy','Cơ thể bị suy kiệt năng lượng'],a:1,
ok:'✅ Đúng! Giờ 12-16 là Cửa Sổ Vàng: Ketosis + Autophagy kích hoạt.',
no:'❌ Sau 12-16 giờ: Ketosis (đốt mỡ) + Autophagy (dọn tế bào) — không phân hủy cơ.',
svg:`<svg viewBox="0 0 300 95" class="illus" xmlns="http://www.w3.org/2000/svg">
<line x1="15" y1="75" x2="285" y2="75" stroke="#2a2f3d" stroke-width="1.5"/>
<circle cx="50" cy="75" r="16" fill="#1e222d" stroke="#6b7292" stroke-width="1.5"/>
<text x="50" y="79" text-anchor="middle" font-size="8.5" fill="#6b7292">0-4h</text>
<text x="50" y="55" text-anchor="middle" font-size="7" fill="#6b7292">Insulin giảm</text>
<circle cx="120" cy="75" r="16" fill="#1e222d" stroke="#ffaa4c" stroke-width="1.5"/>
<text x="120" y="79" text-anchor="middle" font-size="8.5" fill="#ffaa4c">8-12h</text>
<text x="120" y="55" text-anchor="middle" font-size="7" fill="#ffaa4c">Glycogen cạn</text>
<circle cx="200" cy="75" r="18" fill="#1a2d24" stroke="#4fffb0" stroke-width="2"/>
<text x="200" y="79" text-anchor="middle" font-size="8.5" fill="#4fffb0">12-16h</text>
<text x="200" y="48" text-anchor="middle" font-size="7.5" fill="#4fffb0">🔥 Ketosis</text>
<text x="200" y="38" text-anchor="middle" font-size="7" fill="#4fffb0">+ Autophagy</text>
<circle cx="268" cy="75" r="13" fill="#1a2d24" stroke="#4fffb0" stroke-width="1.5"/>
<text x="268" y="79" text-anchor="middle" font-size="8" fill="#4fffb0">16+h</text>
<text x="268" y="55" text-anchor="middle" font-size="7" fill="#4fffb0">Đốt mỡ</text>
</svg>`},

{d:29,s:'bb',t:'Lộ Trình Zero-Friction Bắt Đầu IF',desc:'4 bậc thang từ 12 tiếng đến 16:8 tự động — từng tuần, không đột ngột.',
b:`Sai lầm: cắt bỏ bữa sáng ngay lập tức. Ma sát quá lớn → bỏ cuộc ở "Thung lũng thất vọng".<br><br>
<strong>Bậc 1 (T1):</strong> Ăn tối 7PM, uống nước đến 7AM. Rất dễ — 12 tiếng.<br>
<strong>Bậc 2 (T2):</strong> Đẩy bữa sáng lùi 1 tiếng (ăn 8AM).<br>
<strong>Bậc 3 (T3) — Habit Stacking:</strong> "Sau khi pha cà phê đen, uống 1 ly nước, đợi thêm 1 tiếng."<br>
<strong>Bậc 4 (T4):</strong> 16:8 tự động — trở thành thói quen vô thức.`,
k:'💡 Chuẩn hóa hành vi trước khi tối ưu kết quả. Mỗi bậc = 1 tuần — không vội.',
q:'Tại sao không bắt đầu IF bằng cách cắt bỏ bữa sáng ngay?',o:['Vì bữa sáng quan trọng nhất','Vì tạo ma sát quá lớn — dễ bỏ cuộc ở Thung lũng thất vọng','Vì cơ thể cần ăn sáng để chạy bộ'],a:1,
ok:'✅ Đúng! Ma sát lớn → não phản kháng → bỏ cuộc. Tăng dần từng bước nhỏ.',
no:'❌ Vấn đề là ma sát tâm lý — thay đổi đột ngột khiến não phản kháng và bỏ cuộc.',
svg:`<svg viewBox="0 0 300 105" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="15" y="88" width="56" height="12" rx="4" fill="#7c6cff" opacity=".8"/>
<text x="43" y="98" text-anchor="middle" font-size="7.5" fill="white">12h</text>
<rect x="83" y="72" width="56" height="28" rx="4" fill="#4pc4ff" opacity=".8"/>
<text x="111" y="90" text-anchor="middle" font-size="7.5" fill="white">14h</text>
<rect x="151" y="50" width="56" height="50" rx="4" fill="#4fffb0" opacity=".7"/>
<text x="179" y="75" text-anchor="middle" font-size="7.5" fill="#0d0f14">Habit Stack</text>
<rect x="219" y="22" width="66" height="78" rx="4" fill="#4fffb0" opacity=".9"/>
<text x="252" y="55" text-anchor="middle" font-size="9" font-weight="700" fill="#0d0f14">16:8</text>
<text x="252" y="68" text-anchor="middle" font-size="7.5" fill="#0d0f14">Tự động</text>
<text x="150" y="103" text-anchor="middle" font-size="8" fill="#6b7292">Mỗi bậc = 1 tuần — không vội</text>
</svg>`},

{d:30,s:'bb',t:'🏆 Công Thức Runner Bất Bại',desc:'Chúc mừng hoàn thành 30 ngày! Công thức tổng hợp từ 4 cuốn sách.',
b:`<strong>Atomic Habits:</strong> Hệ thống > Mục tiêu. Bản sắc > Kết quả. 2-Minute Rule.<br><br>
<strong>The Obesity Code:</strong> Kiểm soát Insulin qua chất lượng thực phẩm + IF.<br><br>
<strong>Burn:</strong> Tập để khỏe và sống lâu — không phải để đốt calo. Ăn uống quyết định cân nặng.<br><br>
<strong>Beyond BLS:</strong> Protein 1.8-2.2g/kg + Tạ Progressive Overload + Chạy = Runner bất bại.<br><br>
<strong>Sức bền lõi + Tạ 80% 1RM + Protein 2g/kg = RUNNER BẤT BẠI.</strong>`,
k:'🎉 Bạn đã học 30 ngày kiến thức sức khỏe. Bây giờ là lúc thực hành — bắt đầu từ điều nhỏ nhất ngay hôm nay!',
q:'Công thức Runner Bất Bại theo Beyond BLS?',o:['Chỉ chạy nhiều nhất có thể','Sức bền + Tạ nặng (80% 1RM) + Protein đủ (2g/kg)','Ăn ít + Chạy nhiều'],a:1,
ok:'✅ Hoàn thành 30 ngày! Công thức: Sức bền + Tạ 80% 1RM + Protein 2g/kg = Runner Bất Bại.',
no:'✅ Hoàn thành 30 ngày! Đáp án đúng: Sức bền + Tạ 80% 1RM + Protein 2g/kg = Runner Bất Bại.',
svg:`<svg viewBox="0 0 300 105" class="illus" xmlns="http://www.w3.org/2000/svg">
<rect x="8" y="18" width="70" height="70" rx="8" fill="#1e222d" stroke="#4fffb0" stroke-width="1.5"/>
<text x="43" y="46" text-anchor="middle" font-size="18">🏃</text>
<text x="43" y="62" text-anchor="middle" font-size="8" font-weight="700" fill="#4fffb0">Sức bền lõi</text>
<text x="43" y="82" text-anchor="middle" font-size="16" fill="#4fffb0">+</text>
<rect x="85" y="18" width="70" height="70" rx="8" fill="#1e222d" stroke="#7c6cff" stroke-width="1.5"/>
<text x="120" y="46" text-anchor="middle" font-size="18">🏋️</text>
<text x="120" y="62" text-anchor="middle" font-size="8" font-weight="700" fill="#7c6cff">Tạ 80% 1RM</text>
<text x="120" y="82" text-anchor="middle" font-size="16" fill="#7c6cff">+</text>
<rect x="162" y="18" width="70" height="70" rx="8" fill="#1e222d" stroke="#ffaa4c" stroke-width="1.5"/>
<text x="197" y="46" text-anchor="middle" font-size="18">🥩</text>
<text x="197" y="62" text-anchor="middle" font-size="8" font-weight="700" fill="#ffaa4c">Protein 2g/kg</text>
<text x="197" y="82" text-anchor="middle" font-size="16" fill="#ffaa4c">=</text>
<rect x="240" y="28" width="52" height="50" rx="8" fill="#1a2d24" stroke="#4fffb0" stroke-width="2"/>
<text x="266" y="52" text-anchor="middle" font-size="16">🏆</text>
<text x="266" y="66" text-anchor="middle" font-size="7" fill="#4fffb0">Bất bại</text>
</svg>`}
];
