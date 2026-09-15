const root = document.documentElement;
root.classList.add('js');

const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('[data-language-toggle]');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
const header = document.querySelector('[data-header]');
const themeColor = document.querySelector('meta[name="theme-color"]');
const metaDescription = document.querySelector('meta[name="description"]');
const scrollProgress = document.querySelector('.scroll-progress span');
const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointerQuery = window.matchMedia('(hover: hover) and (pointer: fine)');

const translations = {
  en: {
    pageTitle: 'Nguyen Huynh Hong Phuoc — Education Technology Developer',
    metaDescription: 'Portfolio of Nguyen Huynh Hong Phuoc — an education technology developer building accessible learning interfaces, dependable systems, and practical computer vision solutions.',
    skip: 'Skip to content',
    backTop: 'Back to top',
    primaryNav: 'Primary navigation',
    navWork: 'Projects',
    navSkills: 'Expertise',
    navJourney: 'Journey',
    navContact: 'Contact',
    toggleNav: 'Toggle navigation',
    switchLanguage: 'Switch to Vietnamese',
    switchLight: 'Switch to light theme',
    switchDark: 'Switch to dark theme',
    brandRole: 'Education Technology Developer',
    availability: 'Open to EdTech & Full-stack opportunities',
    heroKicker: 'EDUCATION TECHNOLOGY · FULL-STACK · COMPUTER VISION',
    heroTitleStart: 'I build digital tools for',
    heroTitleAccent: 'clearer learning and assessment.',
    heroIntro: 'I’m Nguyen Huynh Hong Phuoc, an Information Technology student in Hanoi. I turn classroom workflows into accessible interfaces, dependable systems, and practical computer vision solutions.',
    exploreWork: 'Explore selected work',
    startConversation: 'Start a conversation',
    highlights: 'Portfolio highlights',
    statProject: 'Education project score',
    statProducts: 'End-to-end products',
    statEducation: 'Information Technology studies',
    developerProfile: 'Student developer profile',
    profileCardLabel: 'LEARNING PROFILE / HNUE',
    portraitTag: 'STUDENT · DEVELOPER',
    profileNameLabel: 'Name',
    profileFocusLabel: 'Focus',
    profileFocus: 'Education systems + Computer Vision',
    stackSystem: 'Education technology toolkit',
    stackTitle: 'LEARNING SYSTEM TOOLKIT',
    stackStatus: 'READY',
    technologyHighlights: 'Education technology focus',
    workIndex: 'CHAPTER 01 / EDUCATION PROJECTS',
    workTitle: 'Digital learning problems, solved through thoughtful systems.',
    workDescription: 'From assessment to knowledge sharing, each project turns a complex workflow into a clearer experience.',
    omrIllustration: 'Illustration of an OMR grading pipeline',
    pipelineCapture: 'Capture',
    pipelineDetect: 'Detect',
    pipelineReview: 'Review',
    projectScore: 'PROJECT SCORE',
    verifiedResult: 'VERIFIED RESULT',
    projectRole: 'ROLE · FULL-STACK + COMPUTER VISION',
    omrLead: 'A grading platform that transforms captured answer sheets into reviewable results, connecting classroom management with a robust image-processing pipeline.',
    omrOutcome1: 'Designed the complete workflow for multiple exam codes and sheet templates.',
    omrOutcome2: 'Built marker detection, perspective correction, and bubble recognition with FastAPI and OpenCV.',
    omrOutcome3: 'Added QR capture and Excel import/export to reduce repetitive grading work.',
    technologiesUsed: 'Technologies used',
    viewRepository: 'View repository',
    webApplication: 'KNOWLEDGE PUBLISHING',
    blogDescription: 'A structured publishing space for sharing knowledge, with authentication, post management, privacy controls, reactions, search, and an admin dashboard.',
    teamWorkflow: 'COLLABORATIVE WORKFLOW',
    pmsDescription: 'A collaborative task platform with four roles, member management, comments, activity history, and a Todo-to-Approval flow.',
    projectCapabilities: 'Project capabilities',
    skillsIndex: 'CHAPTER 02 / TECHNICAL TOOLKIT',
    skillsTitle: 'A technical toolkit shaped by real education workflows.',
    skillsDescription: 'I connect interface, backend, data, and computer vision to support dependable learning experiences.',
    frontendTitle: 'Frontend Engineering',
    frontendDescription: 'Responsive, accessible interfaces with clear states and maintainable component structures.',
    backendTitle: 'Backend & Data',
    backendDescription: 'Authentication, REST APIs, role-aware workflows, and structured persistence.',
    visionTitle: 'Computer Vision',
    visionDescription: 'Image correction and recognition pipelines designed around real input quality.',
    practiceTitle: 'Engineering Practice',
    practiceDescription: 'Clean handoffs, logical debugging, collaborative testing, and a habit of learning through delivery.',
    practice1: 'Git & team collaboration',
    practice2: 'Testing & defect discovery',
    practice3: 'OOP, MVC & algorithms',
    practice4: 'Docker & deployment basics',
    journeyIndex: 'CHAPTER 03 / LEARNING JOURNEY',
    journeyTitle: 'Learning by building, testing, and improving real systems.',
    workExperience: 'WORK EXPERIENCE',
    olmTitle: 'Software Development Intern · OLM',
    olmDescription: 'Contributed to automated multiple-choice grading software through feature testing, defect discovery, debugging, and examination-data processing with logical algorithms.',
    education: 'EDUCATION',
    degree: 'Bachelor of Information Technology',
    university: 'Hanoi National University of Education · Final-year student',
    contactIndex: 'CHAPTER 04 / LET’S CONNECT',
    contactTitle: 'Let’s build better learning experiences.',
    contactDescription: 'I’m looking for a team where technology serves a clear learning goal—and where I can contribute across the stack while growing with strong engineers.',
    emailMe: 'Email me',
    footerNote: 'Built for clarity, learning, and useful outcomes.',
    backToTop: 'Back to top',
  },
  vi: {
    pageTitle: 'Nguyễn Huỳnh Hồng Phước — Lập trình viên Công nghệ Giáo dục',
    metaDescription: 'Portfolio của Nguyễn Huỳnh Hồng Phước — lập trình viên Công nghệ Giáo dục xây dựng giao diện học tập dễ tiếp cận, hệ thống đáng tin cậy và giải pháp thị giác máy tính thực tiễn.',
    skip: 'Đi đến nội dung chính',
    backTop: 'Về đầu trang',
    primaryNav: 'Điều hướng chính',
    navWork: 'Dự án',
    navSkills: 'Năng lực',
    navJourney: 'Hành trình',
    navContact: 'Liên hệ',
    toggleNav: 'Mở hoặc đóng điều hướng',
    switchLanguage: 'Chuyển sang tiếng Anh',
    switchLight: 'Chuyển sang giao diện sáng',
    switchDark: 'Chuyển sang giao diện tối',
    brandRole: 'Lập trình viên Công nghệ Giáo dục',
    availability: 'Sẵn sàng cho cơ hội EdTech & Full-stack',
    heroKicker: 'CÔNG NGHỆ GIÁO DỤC · FULL-STACK · THỊ GIÁC MÁY TÍNH',
    heroTitleStart: 'Tôi xây dựng công cụ số cho',
    heroTitleAccent: 'việc học và đánh giá rõ ràng hơn.',
    heroIntro: 'Tôi là Nguyễn Huỳnh Hồng Phước, sinh viên Công nghệ Thông tin tại Hà Nội. Tôi biến quy trình lớp học thành giao diện dễ tiếp cận, hệ thống đáng tin cậy và giải pháp thị giác máy tính thực tiễn.',
    exploreWork: 'Khám phá dự án nổi bật',
    startConversation: 'Bắt đầu trò chuyện',
    highlights: 'Điểm nổi bật trong portfolio',
    statProject: 'Điểm đồ án giáo dục',
    statProducts: 'Sản phẩm hoàn chỉnh',
    statEducation: 'Quá trình học CNTT',
    developerProfile: 'Hồ sơ sinh viên phát triển phần mềm',
    profileCardLabel: 'HỒ SƠ HỌC TẬP / HNUE',
    portraitTag: 'SINH VIÊN · LẬP TRÌNH VIÊN',
    profileNameLabel: 'Họ tên',
    profileFocusLabel: 'Trọng tâm',
    profileFocus: 'Hệ thống giáo dục + Thị giác máy tính',
    stackSystem: 'Bộ công cụ công nghệ giáo dục',
    stackTitle: 'BỘ CÔNG CỤ CHO HỆ THỐNG HỌC TẬP',
    stackStatus: 'SẴN SÀNG',
    technologyHighlights: 'Trọng tâm công nghệ giáo dục',
    workIndex: 'CHƯƠNG 01 / DỰ ÁN GIÁO DỤC',
    workTitle: 'Giải quyết bài toán học tập số bằng những hệ thống chỉn chu.',
    workDescription: 'Từ đánh giá đến chia sẻ kiến thức, mỗi dự án biến một quy trình phức tạp thành trải nghiệm rõ ràng hơn.',
    omrIllustration: 'Minh họa quy trình chấm thi trắc nghiệm OMR',
    pipelineCapture: 'Thu nhận',
    pipelineDetect: 'Nhận diện',
    pipelineReview: 'Kiểm tra',
    projectScore: 'ĐIỂM ĐỒ ÁN',
    verifiedResult: 'KẾT QUẢ XÁC THỰC',
    projectRole: 'VAI TRÒ · FULL-STACK + THỊ GIÁC MÁY TÍNH',
    omrLead: 'Nền tảng chấm thi biến ảnh phiếu trả lời thành kết quả có thể kiểm tra, kết nối quản lý lớp học với quy trình xử lý ảnh bền vững.',
    omrOutcome1: 'Thiết kế toàn bộ quy trình cho nhiều mã đề và mẫu phiếu trả lời.',
    omrOutcome2: 'Xây dựng phát hiện marker, hiệu chỉnh phối cảnh và nhận diện đáp án bằng FastAPI cùng OpenCV.',
    omrOutcome3: 'Tích hợp chụp ảnh qua QR và nhập/xuất Excel để giảm thao tác chấm lặp lại.',
    technologiesUsed: 'Công nghệ sử dụng',
    viewRepository: 'Xem mã nguồn',
    webApplication: 'XUẤT BẢN KIẾN THỨC',
    blogDescription: 'Không gian xuất bản có cấu trúc để chia sẻ kiến thức, với đăng nhập, quản lý bài viết, quyền riêng tư, tương tác, tìm kiếm và trang quản trị.',
    teamWorkflow: 'QUY TRÌNH CỘNG TÁC',
    pmsDescription: 'Nền tảng quản lý công việc với bốn vai trò, quản lý thành viên, bình luận, lịch sử hoạt động và quy trình từ Todo đến Phê duyệt.',
    projectCapabilities: 'Tính năng dự án',
    skillsIndex: 'CHƯƠNG 02 / BỘ CÔNG CỤ KỸ THUẬT',
    skillsTitle: 'Năng lực kỹ thuật được rèn qua quy trình giáo dục thực tế.',
    skillsDescription: 'Tôi kết nối giao diện, backend, dữ liệu và thị giác máy tính để tạo nên trải nghiệm học tập đáng tin cậy.',
    frontendTitle: 'Phát triển Frontend',
    frontendDescription: 'Giao diện responsive, dễ tiếp cận, có trạng thái rõ ràng và cấu trúc component dễ bảo trì.',
    backendTitle: 'Backend & Dữ liệu',
    backendDescription: 'Xác thực, REST API, quy trình theo vai trò và lưu trữ dữ liệu có cấu trúc.',
    visionTitle: 'Thị giác máy tính',
    visionDescription: 'Quy trình hiệu chỉnh và nhận diện hình ảnh được thiết kế cho chất lượng đầu vào thực tế.',
    practiceTitle: 'Thực hành kỹ thuật',
    practiceDescription: 'Bàn giao rõ ràng, gỡ lỗi có logic, kiểm thử hợp tác và thói quen học hỏi qua sản phẩm thực tế.',
    practice1: 'Git & cộng tác nhóm',
    practice2: 'Kiểm thử & phát hiện lỗi',
    practice3: 'OOP, MVC & thuật toán',
    practice4: 'Docker & triển khai cơ bản',
    journeyIndex: 'CHƯƠNG 03 / HÀNH TRÌNH HỌC TẬP',
    journeyTitle: 'Học qua việc xây dựng, kiểm thử và cải tiến hệ thống thực tế.',
    workExperience: 'KINH NGHIỆM LÀM VIỆC',
    olmTitle: 'Thực tập sinh Phát triển Phần mềm · OLM',
    olmDescription: 'Tham gia phát triển phần mềm chấm thi trắc nghiệm tự động thông qua kiểm thử tính năng, phát hiện lỗi, gỡ lỗi và xử lý dữ liệu bài thi bằng thuật toán logic.',
    education: 'HỌC VẤN',
    degree: 'Cử nhân Công nghệ Thông tin',
    university: 'Đại học Sư phạm Hà Nội · Sinh viên năm cuối',
    contactIndex: 'CHƯƠNG 04 / KẾT NỐI',
    contactTitle: 'Cùng xây dựng trải nghiệm học tập tốt hơn.',
    contactDescription: 'Tôi đang tìm một đội ngũ nơi công nghệ phục vụ mục tiêu học tập rõ ràng—và nơi tôi có thể đóng góp xuyên suốt full-stack, đồng thời trưởng thành cùng những kỹ sư giỏi.',
    emailMe: 'Gửi email cho tôi',
    footerNote: 'Xây dựng vì sự rõ ràng, học tập và giá trị thực.',
    backToTop: 'Về đầu trang',
  },
};

function getStoredPreference(key) {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function storePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {
    // The portfolio remains fully usable when storage is blocked.
  }
}

let currentLanguage = getStoredPreference('portfolio-language') || (navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en');

function applyLanguage(language) {
  const dictionary = translations[language] || translations.en;
  currentLanguage = language;
  root.lang = language;
  root.dataset.language = language;
  document.title = dictionary.pageTitle;
  metaDescription?.setAttribute('content', dictionary.metaDescription);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = dictionary[element.dataset.i18n];
    if (value) element.textContent = value;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
    const value = dictionary[element.dataset.i18nAria];
    if (value) element.setAttribute('aria-label', value);
  });

  languageToggle?.setAttribute('aria-label', dictionary.switchLanguage);
  document.querySelectorAll('[data-language-label]').forEach((label) => {
    label.classList.toggle('is-active', label.dataset.languageLabel === language);
  });

  applyTheme(root.dataset.theme || 'dark');
}

const savedTheme = getStoredPreference('portfolio-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

function applyTheme(theme) {
  root.dataset.theme = theme;
  const dictionary = translations[currentLanguage] || translations.en;
  themeToggle?.setAttribute('aria-label', theme === 'dark' ? dictionary.switchLight : dictionary.switchDark);
  themeToggle?.setAttribute('title', theme === 'dark' ? dictionary.switchLight : dictionary.switchDark);
  themeColor?.setAttribute('content', theme === 'dark' ? '#0a1830' : '#f3f6fa');
}

applyTheme(savedTheme || preferredTheme);
applyLanguage(currentLanguage);

themeToggle?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  storePreference('portfolio-theme', nextTheme);
});

languageToggle?.addEventListener('click', () => {
  const nextLanguage = currentLanguage === 'en' ? 'vi' : 'en';
  applyLanguage(nextLanguage);
  storePreference('portfolio-language', nextLanguage);
});

function closeNavigation() {
  nav?.classList.remove('is-open');
  navToggle?.setAttribute('aria-expanded', 'false');
}

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNavigation));

document.addEventListener('click', (event) => {
  if (!nav?.classList.contains('is-open')) return;
  if (nav.contains(event.target) || navToggle?.contains(event.target)) return;
  closeNavigation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeNavigation();
});

let scrollFrame = 0;

function updateScrollState() {
  scrollFrame = 0;
  header?.classList.toggle('is-scrolled', window.scrollY > 16);

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? Math.min(window.scrollY / scrollableHeight, 1) : 0;
  scrollProgress?.style.setProperty('transform', `scaleX(${progress})`);

  if (window.scrollY < 320) {
    nav?.querySelectorAll('a').forEach((link) => link.classList.remove('is-active'));
  }
}

function requestScrollUpdate() {
  if (scrollFrame) return;
  scrollFrame = window.requestAnimationFrame(updateScrollState);
}

window.addEventListener('resize', () => {
  if (window.innerWidth > 1050) closeNavigation();
  requestScrollUpdate();
});

window.addEventListener('scroll', requestScrollUpdate, { passive: true });
updateScrollState();

const reducedMotion = motionQuery.matches;
const revealItems = document.querySelectorAll('.reveal');

document.querySelector('.hero-copy')?.style.setProperty('--reveal-delay', '40ms');
document.querySelector('.hero-visual')?.style.setProperty('--reveal-delay', '180ms');

document.querySelectorAll('.project-grid, .capability-grid, .timeline').forEach((group) => {
  [...group.children]
    .filter((item) => item.classList.contains('reveal'))
    .forEach((item, index) => item.style.setProperty('--reveal-delay', `${index * 90}ms`));
});

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -7%' });

  revealItems.forEach((item) => revealObserver.observe(item));
}

const sections = [...document.querySelectorAll('main section[id]:not(#top)')];
const navLinks = [...(nav?.querySelectorAll('a') || [])];

if ('IntersectionObserver' in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;
    navLinks.forEach((link) => {
      link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
    });
  }, { rootMargin: '-25% 0px -60%', threshold: [0.05, 0.2, 0.45] });

  sections.forEach((section) => sectionObserver.observe(section));
}

const counters = document.querySelectorAll('[data-counter]');

function getCounterText(element, value) {
  const pad = Number(element.dataset.countPad || 0);
  const suffix = element.dataset.countSuffix || '';
  return `${String(value).padStart(pad, '0')}${suffix}`;
}

function animateCounter(element) {
  if (element.dataset.counted === 'true') return;
  element.dataset.counted = 'true';

  const end = Number(element.dataset.countEnd || 0);
  const finalText = getCounterText(element, end);
  element.setAttribute('aria-label', finalText);

  if (reducedMotion) {
    element.textContent = finalText;
    return;
  }

  const startedAt = performance.now();
  const duration = 1100;

  function tick(now) {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = getCounterText(element, Math.round(end * eased));
    if (progress < 1) window.requestAnimationFrame(tick);
  }

  window.requestAnimationFrame(tick);
}

if (!('IntersectionObserver' in window)) {
  counters.forEach(animateCounter);
} else {
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.7 });

  counters.forEach((counter) => counterObserver.observe(counter));
}

if (!reducedMotion && finePointerQuery.matches) {
  let pointerFrame = 0;
  let pointerX = 0;
  let pointerY = 0;

  window.addEventListener('pointermove', (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (pointerFrame) return;

    pointerFrame = window.requestAnimationFrame(() => {
      document.body.style.setProperty('--pointer-x', `${pointerX}px`);
      document.body.style.setProperty('--pointer-y', `${pointerY}px`);
      document.body.classList.add('has-pointer-glow');
      pointerFrame = 0;
    });
  }, { passive: true });

  document.documentElement.addEventListener('mouseleave', () => {
    document.body.classList.remove('has-pointer-glow');
  });

  const heroVisual = document.querySelector('.hero-visual');

  heroVisual?.addEventListener('pointermove', (event) => {
    const bounds = heroVisual.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroVisual.style.setProperty('--profile-x', `${x * -9}px`);
    heroVisual.style.setProperty('--profile-y', `${y * -7}px`);
    heroVisual.style.setProperty('--system-x', `${x * 13}px`);
    heroVisual.style.setProperty('--system-y', `${y * 10}px`);
  });

  heroVisual?.addEventListener('pointerleave', () => {
    heroVisual.style.setProperty('--profile-x', '0px');
    heroVisual.style.setProperty('--profile-y', '0px');
    heroVisual.style.setProperty('--system-x', '0px');
    heroVisual.style.setProperty('--system-y', '0px');
  });

  document.querySelectorAll('.project-card, .capability-card').forEach((card) => {
    card.classList.add('tilt-card');

    card.addEventListener('pointermove', (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty('--tilt-x', `${(0.5 - y) * 4.5}deg`);
      card.style.setProperty('--tilt-y', `${(x - 0.5) * 5.5}deg`);
      card.style.setProperty('--glow-x', `${x * 100}%`);
      card.style.setProperty('--glow-y', `${y * 100}%`);
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
