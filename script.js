// GreenMindSys Landing Page JS
(function(){
  const header = document.querySelector('.header');
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const links = document.querySelectorAll('a[href^="#"]');
  const modal = document.getElementById('case-modal');
  const openBtns = document.querySelectorAll('[data-open-case]');
  const closeModalEls = document.querySelectorAll('[data-close-modal]');
  const caseTitle = document.getElementById('case-title');
  const caseDesc = document.getElementById('case-desc');
  const caseTech = document.getElementById('case-tech');

  // Sticky shrink on scroll
  const onScroll = () => {
    if (window.scrollY > 10) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile nav toggle
  navToggle?.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '12px';
    nav.style.background = '#121212';
    nav.style.padding = '10px';
    nav.style.borderRadius = '12px';
    nav.style.position = 'absolute';
    nav.style.top = '56px';
    nav.style.right = '18px';
  });

  // Smooth scroll
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Portfolio modal
  const openCase = (btn) => {
    const item = btn.closest('.portfolio-item');
    if (!item) return;
    caseTitle.textContent = item.dataset.caseTitle || 'Case';
    caseDesc.textContent = item.dataset.caseDesc || '';
    caseTech.textContent = item.dataset.caseTech || '';
    modal.setAttribute('aria-hidden', 'false');
  };
  openBtns.forEach(btn => btn.addEventListener('click', () => openCase(btn)));
  closeModalEls.forEach(el => el.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true')));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
  });

  // Form validation and submission (client-side)
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    formMsg.textContent = '';

    const data = Object.fromEntries(new FormData(form));
    const required = ['nome', 'email', 'telefone', 'descricao'];
    for (const field of required) {
      if (!data[field] || String(data[field]).trim() === '') {
        formMsg.textContent = 'Por favor, preencha todos os campos obrigatórios.';
        formMsg.style.color = '#ff6b6b';
        return;
      }
    }
    if (!String(data.email).includes('@')) {
      formMsg.textContent = 'Digite um e-mail válido.';
      formMsg.style.color = '#ff6b6b';
      return;
    }
    if (!form.querySelector('input[name="aceite"]').checked) {
      formMsg.textContent = 'Você precisa aceitar a Política de Privacidade.';
      formMsg.style.color = '#ff6b6b';
      return;
    }

    // Simular envio. Integração real: Formspree/Getform/Netlify.
    try {
      // Exemplo para integrar: descomentar e inserir endpoint do Formspree.
      // const resp = await fetch('https://formspree.io/f/SEU_ID_AQUI', {
      //   method: 'POST',
      //   headers: { 'Accept': 'application/json' },
      //   body: new FormData(form)
      // });
      // if (!resp.ok) throw new Error('Falha ao enviar');

      await new Promise(r => setTimeout(r, 600));
      formMsg.textContent = 'Obrigado! Respondemos em até 48h.';
      formMsg.style.color = '#28FF9C';
      form.reset();
    } catch (err) {
      formMsg.textContent = 'Ocorreu um erro. Tente novamente.';
      formMsg.style.color = '#ff6b6b';
    }
  });
})();

(() => {
  const rootEl = document.getElementById('react-hero-root');
  if (!rootEl || !window.React || !window.ReactDOM) return;
  const e = React.createElement;
  function Chip() { return e('span', { className: 'inline-block w-3.5 h-3.5 rounded-full bg-[var(--green-neon)]/90 mr-2' }); }
  function StatCard(props) {
    return e('div', { className: 'rounded-xl border border-[#1e1e1e] bg-[#111] p-4 shadow-[0_12px_26px_rgba(0,0,0,.25)]' }, [
      e('div', { className: 'text-sm text-[#bfbfbf]' }, props.label || 'Metric'),
      e('div', { className: 'mt-1 text-2xl font-semibold text-white' }, props.value || '—')
    ]);
  }
  function ChartCard() {
    const ref = React.useRef(null);
    React.useEffect(() => {
      if (!ref.current || !window.Chart) return;
      const ctx = ref.current.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(40,255,156,0.35)');
      gradient.addColorStop(1, 'rgba(40,255,156,0.0)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
          datasets: [{
            data: [12, 19, 15, 22, 28, 26, 34],
            borderColor: '#28FF9C',
            backgroundColor: gradient,
            fill: true,
            tension: 0.35,
            pointRadius: 0
          }]
        },
        options: {
          plugins: { legend: { display: false }, tooltip: { enabled: true, callbacks: { label: (c) => c.parsed.y } } },
          scales: { x: { display: false }, y: { display: false } },
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }, []);
    return e('div', { className: 'rounded-xl border border-[#1e1e1e] bg-[#111] p-4 shadow-[0_16px_34px_rgba(0,0,0,.3)] h-[180px]' }, [
      e('canvas', { ref })
    ]);
  }
  function HeroDashboard() {
    return e('div', { className: 'rounded-2xl border border-[#1e1e1e] bg-[#0e0e0e] p-4 w-full h-[320px] md:h-[340px] shadow-[0_20px_40px_rgba(0,0,0,.35)]' }, [
      e('div', { className: 'flex items-center gap-2 mb-3' }, [e(Chip), e(Chip), e(Chip)]),
      e('div', { className: 'grid grid-cols-2 gap-4' }, [
        e(StatCard, { label: 'Receita', value: 'R$ 28k' }),
        e(StatCard, { label: 'Conversão', value: '3.2%' }),
        e('div', { className: 'col-span-2' }, [e(ChartCard)])
      ])
    ]);
  }
  ReactDOM.createRoot(rootEl).render(e(HeroDashboard));
})();
