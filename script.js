/* ===== KWIK — Kwanza Instantâneo (Clone Completo Front-end Offline-Ready) ===== */

// ===== SVG Icons =====
const Icons = {
  menu: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>`,
  chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  chevronDown: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,
  arrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  user: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  shieldCheck: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
  circleCheck: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
  partyPopper: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>`,
  x: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
  landmark: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 18v-7"/><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"/><path d="M14 18v-7"/><path d="M18 18v-7"/><path d="M3 22h18"/><path d="M6 18v-7"/></svg>`,
  smartphone: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>`,
  clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
};

// ===== Meta / Facebook Pixel Tracking =====
const FB_PIXEL_ID = '9371897792890847';

function trackPixel(event, params = {}) {
  try {
    if (typeof window.fbq === 'function') {
      if (params && Object.keys(params).length > 0) {
        window.fbq('track', event, params);
      } else {
        window.fbq('track', event);
      }
    }
  } catch (err) {
    console.debug('Pixel error:', err);
  }
}

function trackPixelCustom(event, params = {}) {
  try {
    if (typeof window.fbq === 'function') {
      if (params && Object.keys(params).length > 0) {
        window.fbq('trackCustom', event, params);
      } else {
        window.fbq('trackCustom', event);
      }
    }
  } catch (err) {
    console.debug('Pixel custom error:', err);
  }
}

// ===== Estado em Memória (Sem Salvar Progresso) =====
// Garante que nenhum dado salvo anteriormente persista
try {
  localStorage.removeItem('kwik_store');
  localStorage.removeItem('kwik_vsl_start_time');
  localStorage.removeItem('kwik_vsl_cta_shown');
  sessionStorage.clear();
} catch (e) {}

function getInitialStore() {
  return {
    registered: false,
    name: '',
    phone: '',
    balance: 0,
    couponStep: 0,
    lastWithdrawal: null,
    withdrawalDetails: null,
    history: [],
  };
}

const store = getInitialStore();

// Desabilitada qualquer gravação em localStorage — progresso reinicia a cada sessão/F5
function saveStore() {
  // Não persiste progresso
}

// ===== Coupon Data — local images with fallback =====
const COUPONS = [
  { step: 1, brand: 'UNITEL', code: '38154927', value: 3000, image: 'images/coupon-1.jpeg', webp: 'images/coupon-1.webp' },
  { step: 2, brand: 'KWIK', code: '62849317', value: 5000, image: 'images/coupon-2.jpeg', webp: 'images/coupon-2.webp' },
  { step: 3, brand: 'BANTUBET', code: '73528164', value: 7000, image: 'images/coupon-3.jpeg', webp: 'images/coupon-3.webp' },
  { step: 4, brand: 'CUCA', code: '16482753', value: 9000, image: 'images/coupon-4.jpeg', webp: 'images/coupon-4.webp' },
  { step: 5, brand: 'PAY', code: '95318472', value: 11000, image: 'images/coupon-5.jpeg', webp: 'images/coupon-5.webp' },
  { step: 6, brand: 'ZAP', code: '27594386', value: 13000, image: 'images/coupon-6.jpeg', webp: 'images/coupon-6.webp' },
  { step: 7, brand: 'EMIS', code: '84261935', value: 15000, image: 'images/coupon-7.jpeg', webp: 'images/coupon-7.webp' },
  { step: 8, brand: 'KERO', code: '31864572', value: 17000, image: 'images/coupon-8.jpeg', webp: 'images/coupon-8.webp' },
  { step: 9, brand: 'SONANGOL', code: '48372615', value: 20000, image: 'images/coupon-9.jpeg', webp: 'images/coupon-9.webp' },
  { step: 10, brand: 'AFRICELL', code: '57291846', value: 25000, image: 'images/coupon-10.jpeg', webp: 'images/coupon-10.webp' },
];

const TOTAL_VALUE = COUPONS.reduce((s, c) => s + c.value, 0);

// ===== Pré-carregamento Instantâneo de Imagens (Pre-caching em Memória) =====
function preloadAllCouponImages() {
  COUPONS.forEach((c) => {
    // Pré-carrega prioritariamente WebP (ultra-leve) e o JPEG
    const imgWebp = new Image();
    imgWebp.src = c.webp;
    imgWebp.decoding = 'async';
    if (imgWebp.decode) {
      imgWebp.decode().catch(() => {});
    }

    const imgJpeg = new Image();
    imgJpeg.src = c.image;
    imgJpeg.decoding = 'async';
    if (imgJpeg.decode) {
      imgJpeg.decode().catch(() => {});
    }
  });
}
// Dispara imediatamente no carregamento do script
preloadAllCouponImages();

// ===== Utilities =====
function formatKz(value) {
  const fixed = (value || 0).toFixed(2);
  const dotIndex = fixed.lastIndexOf('.');
  const intPart = fixed.slice(0, dotIndex);
  const decPart = fixed.slice(dotIndex + 1);
  return `Kz ${intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')},${decPart}`;
}

function kwikLogo(size = 'md') {
  return `
    <div class="kwik-logo">
      <span class="kwik-logo__word kwik-logo__word--${size}" aria-label="KWIK">
        <span>KW</span><span class="kwik-logo__i">I<span class="kwik-logo__tri kwik-logo__tri--${size}" aria-hidden="true"></span></span><span>K</span>
      </span>
      <span class="kwik-logo__sub kwik-logo__sub--${size}">kwanza instantâneo</span>
    </div>
  `;
}

function headerBar() {
  return `
    <header class="header-bar" style="display:flex;align-items:center;justify-content:space-between;padding:12px 16px;">
      ${kwikLogo('sm')}
      <div class="balance-badge">
        <div class="balance-badge__label">Saldo</div>
        <div class="balance-badge__value">${formatKz(store.balance)}</div>
      </div>
    </header>
  `;
}

// ===== Router =====
function navigate(path) {
  const cleanPath = path.startsWith('/') ? path : '/' + path;
  if (window.location.hash === '#' + cleanPath || (cleanPath === '/' && !window.location.hash)) {
    renderPage(true);
  } else {
    window.location.hash = cleanPath;
  }
}

function getCurrentRoute() {
  const hash = window.location.hash.slice(1) || '/';
  return hash;
}

// ===== Pages =====

// --- Cadastro (Início do Fluxo) ---
function renderCadastro() {
  const steps = ['Dados', 'Verificação', 'Segurança', 'Concluir'];
  return `
    <main class="page-main page-padded animate-fade-in">
      <div class="relative flex items-center justify-center" style="width:100%;margin-bottom:12px;">
        ${kwikLogo('md')}
      </div>
      <ol class="stepper">
        ${steps.map((label, i) => `
          <li class="stepper__item">
            <div class="stepper__track">
              <span class="stepper__line ${i === 0 ? 'stepper__line--transparent' : 'stepper__line--border'}"></span>
              <span class="stepper__dot ${i === 0 ? 'stepper__dot--active' : 'stepper__dot--inactive'}">${i + 1}</span>
              <span class="stepper__line ${i === steps.length - 1 ? 'stepper__line--transparent' : 'stepper__line--border'}"></span>
            </div>
            <span class="stepper__label ${i === 0 ? 'stepper__label--active' : 'stepper__label--inactive'}">${label}</span>
          </li>
        `).join('')}
      </ol>
      <h1 class="heading-page mt-8">Crie sua conta</h1>
      <p class="subtitle-page">É rápido, fácil e seguro.</p>
      <div class="divider-bar"></div>
      <form id="cadastro-form" class="mt-8 space-y-6">
        <div>
          <label for="nome" class="form-label">Nome completo</label>
          <div class="form-input-wrap">
            ${Icons.user}
            <input id="nome" required placeholder="Seu nome completo" class="form-input" value="${store.name || ''}" />
          </div>
        </div>
        <div>
          <label for="telefone" class="form-label">Telefone</label>
          <div class="phone-wrap">
            <div class="phone-prefix">
              <span class="phone-prefix__flag" aria-hidden="true">🇦🇴</span>
              <span class="phone-prefix__code" id="phone-code-display">+244</span>
              <span class="phone-prefix__chevron">${Icons.chevronDown}</span>
              <select aria-label="Código do país" id="phone-country">
                <option value="+244" selected>Angola +244</option>
                <option value="+238">Cabo Verde +238</option>
                <option value="+258">Moçambique +258</option>
                <option value="+351">Portugal +351</option>
                <option value="+55">Brasil +55</option>
              </select>
            </div>
            <input id="telefone" required inputmode="numeric" placeholder="900 000 000" class="phone-input" value="${store.phone ? store.phone.replace(/^\+\d+\s*/, '') : ''}" />
          </div>
        </div>
        <div id="cadastro-error" class="error-msg hidden"></div>
        <div class="security-notice">
          ${Icons.shieldCheck}
          <div>
            <p class="security-notice__title">Seus dados estão protegidos</p>
            <p class="security-notice__desc">Não compartilhamos suas informações com terceiros.</p>
          </div>
        </div>
        <button type="submit" class="btn-primary">Criar conta</button>
      </form>
    </main>
  `;
}

function bindCadastro() {
  document.getElementById('btn-back-cadastro')?.addEventListener('click', () => navigate('/'));

  const countrySelect = document.getElementById('phone-country');
  const codeDisplay = document.getElementById('phone-code-display');
  countrySelect?.addEventListener('change', () => {
    codeDisplay.textContent = countrySelect.value;
  });

  const phoneInput = document.getElementById('telefone');
  phoneInput?.addEventListener('input', () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, '').slice(0, 9);
  });

  document.getElementById('cadastro-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const errorEl = document.getElementById('cadastro-error');

    if (!nome || !telefone) {
      errorEl.textContent = 'Preencha seu nome e telefone.';
      errorEl.classList.remove('hidden');
      return;
    }

    errorEl.classList.add('hidden');
    const code = document.getElementById('phone-country').value;
    store.registered = true;
    store.name = nome;
    store.phone = `${code} ${telefone}`;
    saveStore();

    // Rastreamento Facebook Pixel
    trackPixel('CompleteRegistration', { content_name: 'Conta KWIK Criada', status: true });
    trackPixel('Lead', { content_name: 'Lead KWIK Cadastro' });

    showCadastroSuccess();
  });
}

function showCadastroSuccess() {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="modal-card">
      <div class="modal-icon modal-icon--success">
        ${Icons.check}
      </div>
      <h2 class="modal-title">CONTA CRIADA</h2>
      <p class="modal-text">Parabéns! Sua conta foi criada com sucesso!</p>
      <p class="modal-text-sm">Seja muito bem-vindo à KWIK.</p>
      <p class="modal-text-sm">Você já está dentro da nossa 1ª Campanha de Cupons de Desconto. 🚀</p>
      <p class="modal-text-orange">Seu próximo passo: encontrar seu primeiro KWIK!</p>
      <div class="modal-progress-track">
        <div class="modal-progress-bar"></div>
      </div>
    </div>
  `;
  overlay.classList.remove('hidden');

  setTimeout(() => {
    overlay.classList.add('hidden');
    overlay.innerHTML = '';
    navigate('/saque');
  }, 3500);
}

// --- Saque (Withdrawal Method) ---
function renderSaque() {
  return `
    <div class="page-main animate-fade-in">
      ${headerBar()}
      <main class="page-padded">
        <button class="btn-ghost" id="btn-back-saque" type="button">
          ${Icons.arrowLeft} Voltar
        </button>
        <h1 class="heading-page mt-4">Método de retirada</h1>
        <div class="divider-bar"></div>
        <form id="saque-form" class="mt-6 space-y-5">
          <div class="grid grid-cols-2 gap-3">
            <button type="button" class="method-btn method-btn--active" id="method-express" aria-pressed="true">
              <span style="font-size:1.5rem;">📱</span>
              Multicaixa Express
            </button>
            <button type="button" class="method-btn method-btn--inactive" id="method-iban" aria-pressed="false">
              ${Icons.landmark}
              IBAN
            </button>
          </div>
          <div>
            <label for="titular" class="form-label">Nome do titular</label>
            <div class="form-input-wrap">
              ${Icons.user}
              <input id="titular" placeholder="Nome completo" class="form-input" value="${store.name || ''}" />
            </div>
          </div>
          <div id="account-field">
            <label for="conta" class="form-label" id="conta-label">Número Multicaixa Express</label>
            <div class="form-input-wrap">
              ${Icons.smartphone}
              <input id="conta" inputmode="numeric" placeholder="900 000 000" class="form-input" value="${store.withdrawalDetails?.account || ''}" />
            </div>
          </div>
          <div id="saque-error" class="error-msg hidden"></div>
          <button type="submit" class="btn-primary">Continuar</button>
        </form>
      </main>
    </div>
  `;
}

function bindSaque() {
  let method = store.withdrawalDetails?.method || 'express';

  document.getElementById('btn-back-saque')?.addEventListener('click', () => navigate('/cadastro'));

  const expressBtn = document.getElementById('method-express');
  const ibanBtn = document.getElementById('method-iban');
  const contaLabel = document.getElementById('conta-label');
  const contaInput = document.getElementById('conta');

  function updateMethodUI() {
    if (method === 'express') {
      expressBtn.className = 'method-btn method-btn--active';
      expressBtn.setAttribute('aria-pressed', 'true');
      ibanBtn.className = 'method-btn method-btn--inactive';
      ibanBtn.setAttribute('aria-pressed', 'false');
      contaLabel.textContent = 'Número Multicaixa Express';
      contaInput.placeholder = '900 000 000';
    } else {
      ibanBtn.className = 'method-btn method-btn--active';
      ibanBtn.setAttribute('aria-pressed', 'true');
      expressBtn.className = 'method-btn method-btn--inactive';
      expressBtn.setAttribute('aria-pressed', 'false');
      contaLabel.textContent = 'IBAN (após AO06)';
      contaInput.placeholder = '000000000000000000000';
    }
  }

  updateMethodUI();

  expressBtn?.addEventListener('click', () => {
    method = 'express';
    updateMethodUI();
    contaInput.value = '';
  });

  ibanBtn?.addEventListener('click', () => {
    method = 'iban';
    updateMethodUI();
    contaInput.value = '';
  });

  contaInput?.addEventListener('input', () => {
    const max = method === 'express' ? 9 : 21;
    contaInput.value = contaInput.value.replace(/\D/g, '').slice(0, max);
  });

  document.getElementById('saque-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const holder = document.getElementById('titular').value.trim();
    const account = contaInput.value.trim();
    const errorEl = document.getElementById('saque-error');

    if (!holder) {
      errorEl.textContent = 'Indique o nome do titular.';
      errorEl.classList.remove('hidden');
      return;
    }

    if (method === 'express' && !/^\d{9}$/.test(account)) {
      errorEl.textContent = 'Indique um número Multicaixa Express válido (9 dígitos).';
      errorEl.classList.remove('hidden');
      return;
    }

    if (method === 'iban' && !/^\d{21}$/.test(account)) {
      errorEl.textContent = 'Indique um IBAN válido (21 dígitos após AO06).';
      errorEl.classList.remove('hidden');
      return;
    }

    errorEl.classList.add('hidden');
    store.withdrawalDetails = { method, holder, account };
    store.lastWithdrawal = store.balance || TOTAL_VALUE;
    saveStore();

    // Rastreamento Facebook Pixel
    trackPixel('AddPaymentInfo', { content_name: 'Método de Saque Configurado', payment_type: method });

    navigate('/app');
  });
}

// --- App (Coupon Validation) ---
function renderApp() {
  if (!store.registered) {
    navigate('/');
    return '';
  }

  const currentStep = Math.min(store.couponStep, COUPONS.length);
  const allDone = currentStep >= COUPONS.length;
  const coupon = allDone ? null : COUPONS[currentStep];

  function stepDots() {
    return `
      <div class="step-dots">
        ${COUPONS.map((c, i) => `
          <div class="step-dot ${i < currentStep ? 'step-dot--done' : i === currentStep ? 'step-dot--current' : 'step-dot--pending'}"></div>
        `).join('')}
      </div>
    `;
  }

  let mainContent = '';
  if (coupon) {
    mainContent = `
      ${stepDots()}
      <div class="coupon-step-label">Etapa ${coupon.step} de ${COUPONS.length}</div>
      <picture class="coupon-picture">
        <source srcset="${coupon.webp}" type="image/webp">
        <img
          src="${coupon.image}"
          alt="Cupom ${coupon.brand} — código ${coupon.code}"
          class="coupon-img"
          width="320"
          height="481"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          onerror="const p = this.closest('.coupon-picture'); if (p) { p.style.display='none'; if (p.nextElementSibling) p.nextElementSibling.style.display='flex'; }"
        />
      </picture>
      <div class="coupon-fallback" style="display:none;">
        <div class="coupon-fallback__inner">
          <p class="coupon-fallback__label">Cupom de desconto</p>
          <h3 class="coupon-fallback__brand">${coupon.brand}</h3>
          <div class="coupon-fallback__code">${coupon.code}</div>
          <p class="coupon-fallback__value">Valor: <strong>${formatKz(coupon.value)}</strong></p>
        </div>
      </div>
      <form id="validate-form" class="mt-6">
        <label class="coupon-code-label">Código KWIK</label>
        <input id="coupon-input"
          inputmode="numeric"
          placeholder="Digite os 8 dígitos do KWIK"
          class="coupon-code-input coupon-code-input--default"
          value=""
          maxlength="8"
          autocomplete="off"
        />
        <button type="submit" class="btn-validate">Validar KWIK</button>
      </form>
    `;
  } else {
    mainContent = `
      <section class="final-card">
        <p class="final-card__label">Saldo final</p>
        <p class="final-card__value">${formatKz(TOTAL_VALUE)}</p>
        <p class="final-card__desc">Você validou todos os ${COUPONS.length} cupons da campanha KWIK.</p>
        <button type="button" class="final-card__btn" id="btn-levantamento">Levantar saldo</button>
      </section>
    `;
  }

  return `
    <div class="page-main animate-fade-in">
      ${headerBar()}
      <main style="padding: 1.25rem 1rem;">
        <div class="app-status ${allDone ? 'app-status--orange' : 'app-status--green'}">
          ${allDone ? Icons.partyPopper : Icons.circleCheck}
          <span class="app-status__text">${allDone ? 'Todos os KWIK validados!' : 'Novo KWIK localizado!'}</span>
        </div>
        <div class="mt-6"></div>
        ${mainContent}
        <div id="app-feedback" class="app-feedback hidden"></div>
      </main>
    </div>
  `;
}

function bindApp() {
  const input = document.getElementById('coupon-input');
  const currentStep = Math.min(store.couponStep, COUPONS.length);
  const coupon = currentStep < COUPONS.length ? COUPONS[currentStep] : null;

  if (input && coupon) {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/g, '').slice(0, 8);
      const val = input.value;
      const startsCorrect = coupon.code.startsWith(val);
      const isComplete = val.length === 8 && startsCorrect;

      input.className = 'coupon-code-input';
      if (val.length === 0) {
        input.classList.add('coupon-code-input--default');
      } else if (isComplete) {
        input.classList.add('coupon-code-input--valid');
      } else if (startsCorrect) {
        input.classList.add('coupon-code-input--partial');
      } else {
        input.classList.add('coupon-code-input--invalid');
      }
    });
  }

  document.getElementById('validate-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!coupon) return;

    const val = input.value.trim();
    const feedbackEl = document.getElementById('app-feedback');

    const alreadyUsed = store.history.some(h => h.code === val);
    const matchOther = COUPONS.find(c => c.code === val);

    if (val !== coupon.code) {
      let msg = 'Código inválido. Confira os 8 dígitos do KWIK.';
      if (alreadyUsed) msg = 'Este KWIK já foi validado. Use o código do cupom atual.';
      else if (matchOther) msg = `Ainda não é a vez deste KWIK. Valide primeiro o cupom ${coupon.step}.`;

      feedbackEl.textContent = msg;
      feedbackEl.classList.remove('hidden');
      return;
    }

    // Success!
    const newBalance = store.balance + coupon.value;
    store.balance = newBalance;
    store.couponStep = currentStep + 1;
    store.history.unshift({
      id: Date.now().toString(),
      code: coupon.code,
      value: coupon.value,
      date: new Date().toISOString()
    });
    saveStore();

    // Rastreamento Facebook Pixel
    trackPixelCustom('CouponValidated', {
      step: coupon.step,
      brand: coupon.brand,
      value: coupon.value,
      total_balance: newBalance,
      currency: 'AOA'
    });

    feedbackEl.classList.add('hidden');
    showPrizeModal(coupon.value);
  });

  document.getElementById('btn-levantamento')?.addEventListener('click', () => {
    // Rastreamento Facebook Pixel
    trackPixel('InitiateCheckout', { value: TOTAL_VALUE, currency: 'AOA', num_items: COUPONS.length });
    trackPixelCustom('AllCouponsCompleted', { total_value: TOTAL_VALUE });
    navigate('/levantamento');
  });
}

function showPrizeModal(value) {
  const overlay = document.getElementById('modal-overlay');
  overlay.innerHTML = `
    <div class="prize-modal-overlay" id="prize-overlay-bg">
      <div class="prize-modal" id="prize-modal-card">
        <button class="prize-close" id="prize-close-btn" aria-label="Fechar">
          ${Icons.x}
        </button>
        <div class="modal-icon modal-icon--party">
          ${Icons.partyPopper}
        </div>
        <p class="prize-label">Parabéns!</p>
        <h2 class="prize-heading">Você ganhou!</h2>
        <p class="prize-value">+${formatKz(value)}</p>
        <button class="prize-continue" id="prize-continue-btn">Continuar</button>
      </div>
    </div>
  `;
  overlay.classList.remove('hidden');
  overlay.style.display = 'block';

  function closePrize() {
    overlay.classList.add('hidden');
    overlay.style.display = '';
    overlay.innerHTML = '';
    renderPage(true);
  }

  document.getElementById('prize-close-btn')?.addEventListener('click', closePrize);
  document.getElementById('prize-continue-btn')?.addEventListener('click', closePrize);
  document.getElementById('prize-overlay-bg')?.addEventListener('click', (e) => {
    if (e.target.id === 'prize-overlay-bg') closePrize();
  });

  setTimeout(closePrize, 3000);
}

// --- Levantamento (Geração da Factura Aprimorada) ---
function renderLevantamento() {
  return `
    <div class="loading-page animate-fade-in" style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f8fafc;padding:24px 16px;">
      <div class="invoice-loading-card">
        <div class="invoice-pulse-ring">
          <div class="pulse-glow"></div>
          <div class="pulse-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
        </div>

        <h2 style="font-size:1.45rem;font-weight:900;color:#0f172a;margin-bottom:6px;">Processando Fatura</h2>
        <p style="font-size:0.88rem;color:#64748b;margin-bottom:20px;">Estamos a preparar o comprovativo digital da sua transferência.</p>

        <div class="invoice-steps-list">
          <div class="invoice-step-item active" id="step-inv-1">
            <span class="invoice-step-dot">1</span>
            <span>Verificando saldo e cupons validados</span>
          </div>
          <div class="invoice-step-item" id="step-inv-2">
            <span class="invoice-step-dot">2</span>
            <span>Conectando com a rede Multicaixa EMIS</span>
          </div>
          <div class="invoice-step-item" id="step-inv-3">
            <span class="invoice-step-dot">3</span>
            <span>Emitindo fatura e comprovativo de liquidação</span>
          </div>
        </div>

        <div class="modal-progress-track" style="margin-top:20px;">
          <div class="modal-progress-bar" style="animation-duration: 4.5s;"></div>
        </div>
      </div>
    </div>
  `;
}

function bindLevantamento() {
  const s1 = document.getElementById('step-inv-1');
  const s2 = document.getElementById('step-inv-2');
  const s3 = document.getElementById('step-inv-3');

  setTimeout(() => {
    if (s1) { s1.className = 'invoice-step-item completed'; s1.querySelector('.invoice-step-dot').innerHTML = '✓'; }
    if (s2) { s2.className = 'invoice-step-item active'; }
  }, 1400);

  setTimeout(() => {
    if (s2) { s2.className = 'invoice-step-item completed'; s2.querySelector('.invoice-step-dot').innerHTML = '✓'; }
    if (s3) { s3.className = 'invoice-step-item active'; }
  }, 2800);

  setTimeout(() => {
    if (s3) { s3.className = 'invoice-step-item completed'; s3.querySelector('.invoice-step-dot').innerHTML = '✓'; }
    store.lastWithdrawal = store.balance;
    saveStore();
    navigate('/saque-sucesso');
  }, 4200);
}

// --- Saque Sucesso ---
function renderSaqueSucesso() {
  const amount = store.lastWithdrawal || store.balance || TOTAL_VALUE;

  return `
    <div class="sucesso-page animate-fade-in">
      <div class="sucesso-check">
        ${Icons.check}
      </div>
      <h1 class="sucesso-title">Parabéns!</h1>
      <p class="sucesso-text">
        Seu cadastro foi realizado!<br>
        Você acaba de ganhar
        <strong>${formatKz(amount)}!</strong>
      </p>
      <p class="sucesso-subtext">
        Veja os detalhes do comprovativo da sua transferência Multicaixa.
      </p>
      <button class="sucesso-btn" id="btn-ver-comprovativo">
        <span class="sucesso-btn__inner">
          <span class="sucesso-btn__label">Ver Comprovativo</span>
        </span>
        ${Icons.arrowRight}
      </button>
    </div>
  `;
}

function bindSaqueSucesso() {
  document.getElementById('btn-ver-comprovativo')?.addEventListener('click', () => {
    navigate('/multicaixa');
  });
}

// --- Multicaixa confirmation page (Layout Original Aprimorado) ---
function renderMulticaixa() {
  const withdrawal = store.withdrawalDetails || {};
  const holder = withdrawal.holder || store.name || 'Titular';
  const account = withdrawal.account || '900 000 000';
  const amount = formatKz(store.lastWithdrawal || store.balance || TOTAL_VALUE);

  return `
  <div class="animate-fade-in" style="min-height:100vh;background:#f7f8fa;display:flex;justify-content:center;align-items:flex-start;">
    <main style="width:min(100%,860px);min-height:100vh;background:#f7f8fa;display:flex;flex-direction:column;align-items:center;color:#111827;font-family:Arial,sans-serif;">
      
      <!-- Topo Laranja com Logo / Título -->
      <header style="width:100%;background:#f97316;color:#fff;padding:28px 24px 24px;text-align:center;font-size:clamp(28px,6vw,58px);font-weight:800;letter-spacing:1px;box-shadow:0 4px 20px rgba(249,115,22,0.25);">
        MULTICAIXA
      </header>

      <!-- Badge de Estado Processando -->
      <div style="margin-top:28px;">
        <span style="display:inline-flex;align-items:center;gap:8px;background:#fef3c7;color:#b45309;border:1px solid #fde68a;padding:8px 18px;border-radius:9999px;font-size:clamp(14px,2.5vw,18px);font-weight:700;box-shadow:0 2px 8px rgba(217,119,6,0.15);">
          <span style="width:10px;height:10px;border-radius:50%;background:#f59e0b;display:inline-block;animation:pulseAnimation 1.5s infinite ease-out;"></span>
          Estado: Processando transferência...
        </span>
      </div>

      <!-- Dados Centrais da Transferência (Design Original Clássico) -->
      <section style="width:100%;padding:clamp(36px,7vw,70px) 24px 24px;text-align:center;">
        <div style="font-size:clamp(32px,6vw,60px);font-weight:800;margin-bottom:20px;color:#111827;letter-spacing:-0.5px;">${amount}</div>
        <div style="color:#f97316;font-size:clamp(20px,3.8vw,34px);font-weight:700;margin-bottom:36px;letter-spacing:0.5px;">MONTANTE</div>
        
        <div style="font-size:clamp(24px,4.5vw,44px);font-weight:600;margin-bottom:20px;word-break:break-word;color:#1f2937;">${account}</div>
        <div style="color:#f97316;font-size:clamp(20px,3.8vw,34px);font-weight:700;margin-bottom:36px;letter-spacing:0.5px;">DESTINATÁRIO</div>
        
        <div style="font-size:clamp(24px,4.5vw,44px);font-weight:600;word-break:break-word;color:#1f2937;">${holder}</div>
      </section>

      <!-- Tabela de Custo e Total (Design Original Limpo com Linhas Delimitadoras) -->
      <section style="width:100%;border-top:1px solid #d9dde3;border-bottom:1px solid #d9dde3;padding:26px 12%;font-size:clamp(18px,3vw,30px);background:#ffffff;">
        <div style="display:flex;justify-content:space-between;gap:24px;margin-bottom:24px;">
          <span style="color:#6b7280;">Custo</span>
          <span style="color:#6b7280;">Isento</span>
        </div>
        <div style="display:flex;justify-content:space-between;gap:24px;font-weight:800;color:#111827;">
          <span>Total</span>
          <span>${amount}</span>
        </div>
      </section>

      <!-- Botões de Ação -->
      <div style="display:flex;flex-direction:column;align-items:center;width:100%;margin:48px 0 40px;">
        <button id="btn-concluir" type="button" style="width:min(85%,360px);border:0;border-radius:14px;background:#f97316;color:#fff;font-size:20px;font-weight:800;padding:18px 24px;cursor:pointer;box-shadow:0 8px 24px rgba(249,115,22,.3);transition:transform 0.15s, box-shadow 0.15s;display:flex;align-items:center;justify-content:center;gap:10px;">
          Continuar para Sacar ${Icons.arrowRight}
        </button>
      </div>

    </main>
  </div>
  `;
}

function bindMulticaixa() {
  document.getElementById('btn-concluir')?.addEventListener('click', () => {
    trackPixelCustom('ContinuarParaSacarClick', {
      amount: store.lastWithdrawal || store.balance || TOTAL_VALUE,
      currency: 'AOA'
    });
    navigate('/vsl');
  });
}

// --- VSL (Video Sales Letter) Page ---
function renderVSL() {
  return `
    <div class="animate-fade-in" style="min-height:100vh;background:#ffffff;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;padding:0;padding-bottom:80px;">
      
      <!-- Headline -->
      <div style="width:100%;padding:clamp(28px,6vw,56px) clamp(16px,5vw,32px) clamp(16px,4vw,28px);text-align:center;background:#ffffff;">
        <h1 style="font-family:'Archivo',sans-serif;font-size:clamp(1.1rem,4vw,1.9rem);font-weight:900;color:#0f172a;line-height:1.25;letter-spacing:-0.3px;margin:0 auto;max-width:600px;">
          ASSISTA O VÍDEO COMPLETO<br>
          <span style="color:#f97316;">PARA RECEBER OS VALORES</span>
        </h1>
        <div style="width:50px;height:4px;background:#f97316;border-radius:4px;margin:16px auto 0;"></div>
      </div>

      <!-- VSL Video Container com VTurb SmartPlayer -->
      <div class="vsl-video-section">
        <div class="vsl-video-card">
          <vturb-smartplayer id="vid-6af0d639ffe8f86276d8cdeb" class="vsl-smartplayer" style="display: block; margin: 0 auto; width: 100%;">
            <div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;"></div>
          </vturb-smartplayer>
        </div>

        <!-- Botão CTA com delay de 3 minutos após o vídeo rolar -->
        <div id="vsl-cta-container" class="vsl-cta-container hidden">
          <a id="btn-pagar-receber" href="https://pay.clickpayon.com/f5aa20b1-59d9-4296-a72a-2148803bde4d" class="btn-pagar-receber" style="text-decoration:none;">
            <span>Continuar e Receber</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>

        <!-- Progress hint -->
        <p style="color:#94a3b8;font-size:clamp(0.75rem,2vw,0.85rem);text-align:center;margin-top:14px;line-height:1.5;">
          ⚠️ Assista até ao fim para activar o levantamento do seu saldo.
        </p>
      </div>

      <!-- Barra de Envio Pendente (fixa no fundo) -->
      <div style="position:fixed;bottom:0;left:0;width:100%;background:#ffffff;border-top:1px solid #e2e8f0;padding:12px 20px 16px;z-index:100;box-shadow:0 -4px 16px rgba(0,0,0,0.06);">
        <div style="max-width:600px;margin:0 auto;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
            <span style="font-size:0.78rem;font-weight:700;color:#64748b;letter-spacing:0.3px;text-transform:uppercase;">Transferência pendente</span>
            <span style="display:inline-flex;align-items:center;gap:5px;font-size:0.78rem;font-weight:700;color:#d97706;">
              <span style="width:7px;height:7px;border-radius:50%;background:#f59e0b;display:inline-block;animation:pulseAnimation 1.5s infinite ease-out;"></span>
              A processar…
            </span>
          </div>
          <!-- Barra de progresso indeterminada -->
          <div style="width:100%;height:6px;background:#f1f5f9;border-radius:9999px;overflow:hidden;">
            <div style="height:100%;width:40%;background:linear-gradient(90deg,#f97316,#fb923c);border-radius:9999px;animation:pendingSlide 2s ease-in-out infinite;"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

const VSL_DELAY_SECONDS = 180; // 3 minutos (180 segundos) após o vídeo começar a rolar
let vslTimerId = null;
let vslIntervalId = null;
let vslPlayerCheckInterval = null;
let videoRollStartTime = null;
let isVideoRolling = false;

// Função para reiniciar completamente o estado da VSL
function resetVSL() {
  if (vslTimerId) { clearTimeout(vslTimerId); vslTimerId = null; }
  if (vslIntervalId) { clearInterval(vslIntervalId); vslIntervalId = null; }
  if (vslPlayerCheckInterval) { clearInterval(vslPlayerCheckInterval); vslPlayerCheckInterval = null; }
  videoRollStartTime = null;
  isVideoRolling = false;
  sessionStorage.removeItem('kwik_vsl_start_time');
  sessionStorage.removeItem('kwik_vsl_cta_shown');
  localStorage.removeItem('kwik_vsl_start_time');
  localStorage.removeItem('kwik_vsl_cta_shown');

  const ctaContainer = document.getElementById('vsl-cta-container');
  if (ctaContainer) {
    ctaContainer.classList.add('hidden');
  }
}

function bindVSL() {
  // Reinicia do zero sempre que a página é carregada
  resetVSL();

  const scriptUrl = "https://scripts.converteai.net/f8fdf2b4-7ffe-495a-ad7a-db1f2add5e84/players/6af0d639ffe8f86276d8cdeb/v4/player.js";
  const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
  if (!existingScript) {
    const s = document.createElement("script");
    s.src = scriptUrl;
    s.async = true;
    document.head.appendChild(s);
  }

  const ctaContainer = document.getElementById('vsl-cta-container');
  const btnContinuar = document.getElementById('btn-pagar-receber');

  // Garante que o botão inicia oculto
  ctaContainer?.classList.add('hidden');

  function showCTA() {
    if (!ctaContainer) return;
    ctaContainer.classList.remove('hidden');
    if (vslTimerId) { clearTimeout(vslTimerId); vslTimerId = null; }
    if (vslIntervalId) { clearInterval(vslIntervalId); vslIntervalId = null; }
    if (vslPlayerCheckInterval) { clearInterval(vslPlayerCheckInterval); vslPlayerCheckInterval = null; }
    trackPixelCustom('VSL_PitchButtonShown', {
      time_seconds: VSL_DELAY_SECONDS,
      amount: store.lastWithdrawal || store.balance || TOTAL_VALUE
    });
  }

  // Atalhos de teste no console do navegador
  window.showContinuarEReceber = showCTA;
  window.showPagarEReceber = showCTA;

  // Disparado assim que o vídeo começa a rolar
  function onVideoStartRolling() {
    if (isVideoRolling) return;
    isVideoRolling = true;
    videoRollStartTime = Date.now();

    // Contagem de 3 minutos (180 segundos) a partir do início da reprodução
    vslTimerId = setTimeout(() => {
      showCTA();
    }, VSL_DELAY_SECONDS * 1000);

    vslIntervalId = setInterval(() => {
      if (!videoRollStartTime) return;
      const elapsed = Math.floor((Date.now() - videoRollStartTime) / 1000);
      if (elapsed >= VSL_DELAY_SECONDS) {
        showCTA();
      }
    }, 1000);
  }

  // 1. Mensagens postMessage disparadas pelo VTurb / ConverteAI SmartPlayer
  const messageHandler = (event) => {
    try {
      let data = event.data;
      if (typeof data === 'string' && (data.includes('smartplayer') || data.includes('play'))) {
        try { data = JSON.parse(data); } catch (e) {}
      }
      if (data && typeof data === 'object') {
        const action = data.action || data.event || data.type || '';
        const time = data.currentTime || data.time || 0;
        if (action === 'play' || action === 'playing' || time > 0.5) {
          onVideoStartRolling();
        }
        if (time >= VSL_DELAY_SECONDS) {
          showCTA();
        }
      }
    } catch (e) {}
  };
  window.addEventListener('message', messageHandler);

  // 2. Interação direta com o elemento do player de vídeo
  const vturbEl = document.getElementById('vid-6af0d639ffe8f86276d8cdeb');
  if (vturbEl) {
    vturbEl.addEventListener('click', () => {
      setTimeout(onVideoStartRolling, 300);
    }, { once: true });
    vturbEl.addEventListener('touchstart', () => {
      setTimeout(onVideoStartRolling, 300);
    }, { once: true, passive: true });
  }

  // 3. Verificação periódica do SmartPlayer e do elemento <video>
  vslPlayerCheckInterval = setInterval(() => {
    // API SmartPlayer
    if (window.smartplayer && window.smartplayer.instances && window.smartplayer.instances.length) {
      for (const instance of window.smartplayer.instances) {
        if (!instance.__kwikHooked) {
          instance.__kwikHooked = true;
          if (typeof instance.on === 'function') {
            instance.on('play', onVideoStartRolling);
            instance.on('timeupdate', () => {
              const current = instance.video ? instance.video.currentTime : (instance.currentTime || 0);
              if (current > 0.5) onVideoStartRolling();
              if (current >= VSL_DELAY_SECONDS) showCTA();
            });
          }
        }
        if (instance.video && (!instance.video.paused || instance.video.currentTime > 0)) {
          onVideoStartRolling();
          if (instance.video.currentTime >= VSL_DELAY_SECONDS) {
            showCTA();
          }
        }
      }
    }

    // Elemento <video> nativo no DOM
    const videoTag = document.querySelector('vturb-smartplayer video') ||
                     (vturbEl && vturbEl.shadowRoot && vturbEl.shadowRoot.querySelector('video')) ||
                     document.querySelector('video');
    if (videoTag) {
      if (!videoTag.__kwikHooked) {
        videoTag.__kwikHooked = true;
        videoTag.addEventListener('play', onVideoStartRolling);
        videoTag.addEventListener('playing', onVideoStartRolling);
        videoTag.addEventListener('timeupdate', () => {
          if (videoTag.currentTime > 0.5) onVideoStartRolling();
          if (videoTag.currentTime >= VSL_DELAY_SECONDS) showCTA();
        });
      }
      if (!videoTag.paused && videoTag.currentTime > 0) {
        onVideoStartRolling();
        if (videoTag.currentTime >= VSL_DELAY_SECONDS) {
          showCTA();
        }
      }
    }
  }, 500);

  // Preserva parâmetros da URL (ex: UTMs do Meta Ads / Facebook) no link de checkout
  if (btnContinuar && window.location.search) {
    try {
      const searchParams = window.location.search.replace(/^\?/, '');
      if (searchParams) {
        const separator = btnContinuar.href.includes('?') ? '&' : '?';
        btnContinuar.href += separator + searchParams;
      }
    } catch (e) {}
  }

  // Evento de clique no botão "Continuar e Receber"
  btnContinuar?.addEventListener('click', () => {
    trackPixel('InitiateCheckout', {
      content_name: 'Continuar e Receber KWIK',
      value: store.lastWithdrawal || store.balance || TOTAL_VALUE,
      currency: 'AOA'
    });
    trackPixelCustom('Click_ContinuarEReceber', {
      amount: store.lastWithdrawal || store.balance || TOTAL_VALUE,
      currency: 'AOA'
    });
  });
}

// Reiniciar a VSL sempre que o usuário sair da página, fechar ou mudar de aba
window.addEventListener('beforeunload', resetVSL);
window.addEventListener('pagehide', resetVSL);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && getCurrentRoute() === '/vsl') {
    resetVSL();
  }
});

// ===== Router & Rendering =====
let currentRoute = null;

function renderPage(force = false) {
  const route = getCurrentRoute();
  if (!force && route === currentRoute) return;
  const isRouteChange = currentRoute !== route;
  currentRoute = route;

  if (route !== '/vsl') {
    resetVSL();
  }

  // Disparar PageView e eventos de rota no Facebook Pixel
  trackPixel('PageView');
  const currentAmount = store.lastWithdrawal || store.balance || TOTAL_VALUE;
  switch (route) {
    case '/':
      trackPixelCustom('View_Home');
      break;
    case '/cadastro':
      trackPixelCustom('View_Cadastro');
      break;
    case '/saque':
      trackPixelCustom('View_MetodoSaque');
      break;
    case '/app':
      trackPixelCustom('View_ValidarCupons', { step: store.couponStep, balance: store.balance });
      break;
    case '/levantamento':
      trackPixelCustom('View_ProcessandoFatura', { amount: currentAmount, currency: 'AOA' });
      break;
    case '/saque-sucesso':
      trackPixelCustom('View_SaqueSucesso', { amount: currentAmount, currency: 'AOA' });
      break;
    case '/multicaixa':
      trackPixelCustom('View_MulticaixaComprovativo', { amount: currentAmount, currency: 'AOA' });
      break;
    case '/vsl':
      trackPixel('ViewContent', { content_name: 'VSL Final KWIK', value: currentAmount, currency: 'AOA' });
      break;
  }

  const app = document.getElementById('app');
  let html = '';
  let bind = null;

  switch (route) {
    case '/':
    case '/cadastro':
      html = renderCadastro();
      bind = bindCadastro;
      break;
    case '/saque':
      html = renderSaque();
      bind = bindSaque;
      break;
    case '/app':
      html = renderApp();
      bind = bindApp;
      break;
    case '/levantamento':
      html = renderLevantamento();
      bind = bindLevantamento;
      break;
    case '/saque-sucesso':
      html = renderSaqueSucesso();
      bind = bindSaqueSucesso;
      break;
    case '/multicaixa':
      html = renderMulticaixa();
      bind = bindMulticaixa;
      break;
    case '/vsl':
      html = renderVSL();
      bind = bindVSL;
      break;
    default:
      html = renderCadastro();
      bind = bindCadastro;
      break;
  }

  app.innerHTML = html;
  if (bind) bind();
  if (isRouteChange) {
    window.scrollTo(0, 0);
  }
}

// Listen for hash changes
window.addEventListener('hashchange', () => renderPage(false));

// Initial render
document.addEventListener('DOMContentLoaded', () => {
  renderPage(false);
});

// Global exports
window.navigate = navigate;
