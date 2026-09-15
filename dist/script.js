const root = document.documentElement;
root.classList.add('js');

const themeToggle = document.querySelector('.theme-toggle');
const languageToggle = document.querySelector('[data-language-toggle]');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.primary-nav');
const header = document.querySelector('[data-header]');
const themeColor = document.querySelector('meta[name="theme-color"]');
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  en: {
    pageTitle: 'Nguyen Huynh Hong Phuoc — Full Stack Developer',
    metaDescription: 'Portfolio of Nguyen Huynh Hong Phuoc — a Full Stack Developer building accessible interfaces, secure APIs, and practical computer vision systems.',
    skip: 'Skip to content',
    backTop: 'Back to top',
    primaryNav: 'Primary navigation',
    navWork: 'Work',
    navSkills: 'Toolkit',
    navJourney: 'Journey',
    navContact: 'Contact',
    toggleNav: 'Toggle navigation',
    switchLanguage: 'Switch to Vietnamese',
    switchLight: 'Switch to light theme',
    switchDark: 'Switch to dark theme',
    availability: 'Available for a Full-stack Internship',
    heroKicker: 'FULL-STACK · COMPUTER VISION · PRODUCT THINKING',
    heroTitleStart: 'I turn complex workflows into',
    heroTitleAccent: 'clear, working products.',
    heroIntro: 'I’m Nguyen Huynh Hong Phuoc, an Information Technology student in Hanoi. I connect thoughtful interfaces, secure APIs, reliable data, and practical image processing into complete experiences.',
    exploreWork: 'Explore selected work',
    startConversation: 'Start a conversation',
    highlights: 'Portfolio highlights',
    statProject: 'Specialized project',
    statProducts: 'End-to-end products',
    statEducation: 'IT education',
    developerProfile: 'Developer profile',
    profileNameLabel: 'Name',
    profileFocusLabel: 'Focus',
    profileFocus: 'Web systems + Computer Vision',
    stackSystem: 'Current technology system',
    stackTitle: 'CURRENT TOOLKIT',
    stackStatus: 'READY',
    technologyHighlights: 'Technology highlights',
    workIndex: '01 / SELECTED WORK',
    workTitle: 'Real projects, explained through decisions and outcomes.',
    workDescription: 'Each project covers a different workflow, but all three share the same goal: make complex tasks feel simple.',
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
    webApplication: 'WEB APPLICATION',
    blogDescription: 'A publishing experience with authentication, post management, privacy controls, reactions, search, and an admin dashboard.',
    teamWorkflow: 'TEAM WORKFLOW',
    pmsDescription: 'A collaborative task platform with four roles, member management, comments, activity history, and a Todo-to-Approval flow.',
    projectCapabilities: 'Project capabilities',
    skillsIndex: '02 / CAPABILITIES',
    skillsTitle: 'A practical toolkit for shipping the whole experience.',
    skillsDescription: 'I’m most useful where product, frontend, backend, and data meet — with enough depth to debug across boundaries.',
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
    journeyIndex: '03 / JOURNEY',
    journeyTitle: 'Learning fastest when the work is real.',
    workExperience: 'WORK EXPERIENCE',
    olmTitle: 'Software Development Intern · OLM',
    olmDescription: 'Contributed to automated multiple-choice grading software through feature testing, defect discovery, debugging, and examination-data processing with logical algorithms.',
    education: 'EDUCATION',
    degree: 'Bachelor of Information Technology',
    university: 'Hanoi National University of Education · Final-year student',
    contactIndex: '04 / LET’S CONNECT',
    contactTitle: 'Let’s build something useful together.',
    contactDescription: 'I’m looking for a team where I can contribute across the stack, learn from strong engineers, and turn requirements into dependable software.',
    emailMe: 'Email me',
    footerNote: 'Designed with clarity. Built with care.',
    backToTop: 'Back to top',
  },
  vi: {
    pageTitle: 'Nguyễn Huỳnh Hồng Phước — Lập trình viên Full Stack',
    metaDescription: 'Portfolio của Nguyễn Huỳnh Hồng Phước — lập trình viên Full Stack tập trung vào giao diện dễ dùng, API an toàn và hệ thống thị giác máy tính thực tiễn.',
    skip: 'Đi đến nội dung chính',
    backTop: 'Về đầu trang',
    primaryNav: 'Điều hướng chính',
    navWork: 'Dự án',
    navSkills: 'Kỹ năng',
    navJourney: 'Hành trình',
    navContact: 'Liên hệ',
    toggleNav: 'Mở hoặc đóng điều hướng',
    switchLanguage: 'Chuyển sang tiếng Anh',
    switchLight: 'Chuyển sang giao diện sáng',
    switchDark: 'Chuyển sang giao diện tối',
    availability: 'Sẵn sàng cho vị trí Thực tập sinh Full-stack',
    heroKicker: 'FULL-STACK · THỊ GIÁC MÁY TÍNH · TƯ DUY SẢN PHẨM',
    heroTitleStart: 'Tôi biến quy trình phức tạp thành',
    heroTitleAccent: 'sản phẩm rõ ràng, vận hành tốt.',
    heroIntro: 'Tôi là Nguyễn Huỳnh Hồng Phước, sinh viên Công nghệ Thông tin tại Hà Nội. Tôi kết nối giao diện chỉn chu, API an toàn, dữ liệu đáng tin cậy và xử lý ảnh thực tiễn thành trải nghiệm hoàn chỉnh.',
    exploreWork: 'Khám phá dự án nổi bật',
    startConversation: 'Bắt đầu trò chuyện',
    highlights: 'Điểm nổi bật trong portfolio',
    statProject: 'Đồ án chuyên ngành',
    statProducts: 'Sản phẩm hoàn chỉnh',
    statEducation: 'Đào tạo CNTT',
    developerProfile: 'Hồ sơ lập trình viên',
    profileNameLabel: 'Họ tên',
    profileFocusLabel: 'Trọng tâm',
    profileFocus: 'Hệ thống web + Thị giác máy tính',
    stackSystem: 'Hệ thống công nghệ hiện tại',
    stackTitle: 'BỘ CÔNG CỤ HIỆN TẠI',
    stackStatus: 'SẴN SÀNG',
    technologyHighlights: 'Công nghệ nổi bật',
    workIndex: '01 / DỰ ÁN NỔI BẬT',
    workTitle: 'Dự án thực tế, được kể qua quyết định và kết quả.',
    workDescription: 'Mỗi dự án giải quyết một quy trình khác nhau, nhưng cùng hướng đến một mục tiêu: làm cho tác vụ phức tạp trở nên đơn giản.',
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
    webApplication: 'ỨNG DỤNG WEB',
    blogDescription: 'Trải nghiệm xuất bản với đăng nhập, quản lý bài viết, quyền riêng tư, tương tác, tìm kiếm và trang quản trị.',
    teamWorkflow: 'QUY TRÌNH NHÓM',
    pmsDescription: 'Nền tảng quản lý công việc với bốn vai trò, quản lý thành viên, bình luận, lịch sử hoạt động và quy trình từ Todo đến Phê duyệt.',
    projectCapabilities: 'Tính năng dự án',
    skillsIndex: '02 / NĂNG LỰC',
    skillsTitle: 'Bộ công cụ thực tiễn để hoàn thiện toàn bộ trải nghiệm.',
    skillsDescription: 'Tôi phát huy tốt nhất ở giao điểm giữa sản phẩm, frontend, backend và dữ liệu — đủ chiều sâu để gỡ lỗi xuyên suốt các lớp.',
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
    journeyIndex: '03 / HÀNH TRÌNH',
    journeyTitle: 'Học nhanh nhất khi công việc tạo ra giá trị thật.',
    workExperience: 'KINH NGHIỆM LÀM VIỆC',
    olmTitle: 'Thực tập sinh Phát triển Phần mềm · OLM',
    olmDescription: 'Tham gia phát triển phần mềm chấm thi trắc nghiệm tự động thông qua kiểm thử tính năng, phát hiện lỗi, gỡ lỗi và xử lý dữ liệu bài thi bằng thuật toán logic.',
    education: 'HỌC VẤN',
    degree: 'Cử nhân Công nghệ Thông tin',
    university: 'Đại học Sư phạm Hà Nội · Sinh viên năm cuối',
    contactIndex: '04 / KẾT NỐI',
    contactTitle: 'Cùng nhau xây dựng một sản phẩm hữu ích.',
    contactDescription: 'Tôi đang tìm một đội ngũ nơi mình có thể đóng góp xuyên suốt full-stack, học hỏi từ các kỹ sư giỏi và biến yêu cầu thành phần mềm đáng tin cậy.',
    emailMe: 'Gửi email cho tôi',
    footerNote: 'Thiết kế rõ ràng. Xây dựng chỉn chu.',
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
  themeColor?.setAttribute('content', theme === 'dark' ? '#07111f' : '#eef4f7');
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

window.addEventListener('resize', () => {
  if (window.innerWidth > 1050) closeNavigation();
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 16);
  if (window.scrollY < 320) {
    nav?.querySelectorAll('a').forEach((link) => link.classList.remove('is-active'));
  }
}, { passive: true });

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealItems = document.querySelectorAll('.reveal');

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

document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
