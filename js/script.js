/* =========================================================
   Cafe Ondo 오픈 안내 페이지 — JavaScript 과제

   아래 6개 기능을 순서대로 완성하세요.
   각 블록 위 주석에 적힌 선택자(class, id) 이름을 그대로 사용해야
   HTML·CSS와 연결됩니다. 이름이 다르면 동작하지 않습니다.
   ========================================================= */


/* =========================================================
   1. 헤더 메뉴 토글
   - 버튼: .btn-menu
   - 메뉴: .main-nav
   - 버튼을 클릭하면 .main-nav에 'open-menu' 클래스를 토글한다.
   - 버튼 글자를 'Menu' ↔ 'Close'로 바꾼다.
   ========================================================= */
// btn 요소에 .btn-menu 클래스를 저장.
const btn = document.querySelector('.btn-menu');
// nav 요소에 .main-nav 클래스를 저장.
const nav = document.querySelector('.main-nav');

// 버튼을 클릭하면
btn.addEventListener('click', () => {
  // nav 요소의 클래스에 'open-menu'를 토글한다.
  nav.classList.toggle('open-menu');
  // 만약 btn 요소의 innerHTML이 'Menu'인 경우,
  if (btn.innerHTML === 'Menu') {
    // btn 요소의 innerHTML을 'Close'로 변경.
    btn.innerHTML = 'Close';
  } else {
    // btn 요소의 innerHTML을 'Menu'로 변경.
    btn.innerHTML = 'Menu';
  }
});



/* =========================================================
   2. 다크 모드
   - 버튼: .mode-switch
   - 버튼을 클릭하면 body에 'dark' 클래스를 토글한다.
   - body에 'dark' 클래스가 있으면 버튼 글자를 '☀️', 없으면 '🌙'로 바꾼다.
   ========================================================= */
const themeBtn = document.querySelector('.mode-switch');

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
   themeBtn.innerHTML = '☀️';
  } else {
   themeBtn.innerHTML = '🌙';
  }
});



/* =========================================================
   3. Menu 카테고리 탭
   - 버튼: .cat-btn (여러 개, 각 버튼에는 data-category 속성이 있다)
   - 패널: .cat-panel (여러 개, 버튼의 data-category 값과 같은 id를 가진다)
   - 버튼을 클릭하면:
     ① 모든 버튼과 패널에서 'active' 클래스를 제거한다.
     ② 클릭한 버튼에 'active'를 추가한다.
     ③ 클릭한 버튼의 data-category 값과 같은 id를 가진 패널에 'active'를 추가한다.
   ========================================================= */
const catBtns = document.querySelectorAll('.cat-btn');
const catPanels = document.querySelectorAll('.cat-panel');

catBtns.forEach((cat) => {
  cat.addEventListener('click', () => {
    // 모든 탭 버튼과 패널에서 'active'를 제거한다
    catBtns.forEach((b) => b.classList.remove('active')); // 모든 버튼 끄기
    catPanels.forEach((p) => p.classList.remove('active')); // 모든 패널 끄기

    // 클릭한 버튼과, 그 버튼의 data-category 값과 같은 id를 가진 패널에 'active'를 붙인다
    cat.classList.add('active'); // 클릭한 버튼 켜기
    document.getElementById(cat.dataset.category).classList.add('active'); // 짝 패널 켜기
  });
});



/* =========================================================
   4. 사진 갤러리
   - 큰 이미지: .photo-main
   - 작은 이미지(썸네일): .photo-list 안의 img (여러 개)
   - 썸네일을 클릭하면:
     ① 큰 이미지의 src, alt를 클릭한 썸네일의 src, alt로 바꾼다.
     ② 모든 썸네일에서 'active' 클래스를 제거한다.
     ③ 클릭한 썸네일에 'active'를 추가한다.
   ========================================================= */
const galleryMain = document.querySelector('.photo-main');
const galleryList = document.querySelectorAll('.photo-list img');

galleryList.forEach((list) => {
  list.addEventListener('click', () => {
    // 큰 이미지의 주소와 설명을 클릭한 썸네일 것으로 바꾼다
    galleryMain.src = list.src;
    galleryMain.alt = list.alt;

    // 선택표시를 클릭한 썸네일로 옮긴다
    galleryList.forEach((t) => t.classList.remove('active')); // 모든 버튼 끄기
    list.classList.add('active'); // 클릭한 버튼 켜기
  });
});



/* =========================================================
   5. 예약 요청사항 글자 수 세기
   - 입력 칸: .form-message (textarea, maxlength="200")
   - 표시 문단: .msg-count
   - 글자를 입력할 때마다('input' 이벤트):
     ① 입력된 글자 수를 '숫자 / 200자' 형식으로 .msg-count에 표시한다.
     ② 글자 수가 180자 이상이면 .msg-count에 'warn' 클래스를 추가하고,
        180자 미만이면 'warn' 클래스를 제거한다.
   ========================================================= */
const textarea = document.querySelector('.form-message');
const charCount = document.querySelector('.msg-count');

// 글자를 입력할 때마다('input' 이벤트) 실행
textarea.addEventListener('input', () => {
  const length = textarea.value.length;
  charCount.textContent = length + ' / 200자';

  // 180자 이상이면 경고 스타일(warn)을 붙이고, 아니면 뗀다.
  if (length >= 180) {
    charCount.classList.add('warn');
  } else {
    charCount.classList.remove('warn');
  }
});



/* =========================================================
   6. 실시간 시계 (날짜 + 시각)
   - 날짜 표시: .now-date
   - 시각 표시: .now-time
   - 현재 날짜(년, 월, 일, 요일)를 '2026년 11월 7일 (토)' 형식으로 .now-date에 표시한다.
   - 현재 시각(시:분:초)을 '09:05:03' 형식(두 자리, 0으로 채움)으로 .now-time에 표시한다.
   - 1초마다 자동으로 갱신되어야 한다.
   ========================================================= */
const clockDate = document.querySelector('.now-date');
const clockTime = document.querySelector('.now-time');
const days = ['일', '월', '화', '수', '목', '금', '토'];

function updateClock() {
  const now = new Date();

  // --- 날짜 ---
  const year = now.getFullYear();
  const month = now.getMonth() + 1;   // 월은 0부터 시작하므로 +1
  const date = now.getDate();
  const day = days[now.getDay()];     // 요일은 0(일)~6(토) 숫자로 나옴
  clockDate.textContent = year + '년 ' + month + '월 ' + date + '일 (' + day + ')';

  // --- 시각 ---
  // String(값).padStart(2, '0') - 값을 글자로 바꾼 뒤, 두 자리가 되도록 앞에 '0'을 채움. (7 → '07') 
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  clockTime.textContent = h + ':' + m + ':' + s;
}



updateClock();   // 함수 호출. 페이지를 열자마자 한 번 실행

// 정해진 시간(밀리초)마다 함수를 계속 실행
setInterval(updateClock, 1000);  // 이후 1초마다 반복 실행