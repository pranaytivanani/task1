import { useState, useEffect } from 'react'

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bg: '#F8F9FC',
  bg2: '#F2F4F7',
  white: '#FFFFFF',
  text: '#111827',
  textSub: '#667085',
  textMuted: '#98A2B3',
  indigo: '#4F46E5',
  indigoDark: '#4338CA',
  indigoLight: '#E9E7FF',
  indigoSoft: '#F2F7FF',
  mint: '#20A88A',
  mintLight: '#EDFAF8',
  border: '#E4E7EC',
  dark: '#111827',
  gray50: '#F9FAFB',
  gray100: '#F3F4F6',
  gray200: '#E4E7EC',
  gray400: '#9CA3AF',
}

// ─── Icons ────────────────────────────────────────────────────────────────────
const ArrowRightIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)
const CheckIcon = ({ size = 13 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" />
  </svg>
)
const XIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const PlayIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3" /></svg>
)
const ZapIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)
const BotIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M12 2v4M8 11V7a4 4 0 018 0v4" />
    <circle cx="9" cy="16" r="1" fill="currentColor" stroke="none" />
    <circle cx="15" cy="16" r="1" fill="currentColor" stroke="none" />
  </svg>
)
const LayersIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
)
const UsersIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.95)' : '#fff',
        borderBottom: `1px solid ${scrolled ? C.border : C.border}`,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: C.indigo }}>
              <ZapIcon size={14} />
            </div>
            <span className="font-bold text-lg" style={{ color: C.text, letterSpacing: '-0.02em' }}>FlowAI</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {['Product', 'Solutions', 'Resources', 'Pricing'].map(item => (
              <a key={item} href="#" className="text-sm font-medium transition-colors"
                style={{ color: C.textSub }}
                onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                onMouseLeave={e => (e.currentTarget.style.color = C.textSub)}>
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium" style={{ color: C.textSub }}
              onMouseEnter={e => (e.currentTarget.style.color = C.text)}
              onMouseLeave={e => (e.currentTarget.style.color = C.textSub)}>
              Sign In
            </a>
            <button className="btn-primary" style={{ padding: '9px 18px', fontSize: '14px' }}>
              Book a Demo
            </button>
          </div>

          <button className="md:hidden" style={{ color: C.text }} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-5" style={{ borderTop: `1px solid ${C.border}` }}>
            <div className="flex flex-col gap-4">
              {['Product', 'Solutions', 'Resources', 'Pricing', 'Sign In'].map(item => (
                <a key={item} href="#" className="text-sm font-medium" style={{ color: C.textSub }}>{item}</a>
              ))}
              <button className="btn-primary mt-2" style={{ justifyContent: 'center' }}>Book a Demo</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

// ─── Product Video Mockup ─────────────────────────────────────────────────────
function ProductVideoMockup() {
  const [playing, setPlaying] = useState(false)
  const rows = [
    { avatar: 'F', color: C.indigo, name: 'Finalize Q3 roadmap', assignee: 'Fumo Idupora · Remindhand', date: '08 18, 2023', status: 'Completed' },
    { avatar: 'F', color: '#8B5CF6', name: 'Finalize Q3 roadmap', assignee: 'Fumo Idupora · Remindhand', date: '08 15, 2023', status: 'Completed' },
    { avatar: 'A', color: C.mint, name: 'Don\'t complete the stor...', assignee: 'Elasco Idupora · Remindhand', date: '08 18, 2023', status: 'Completed' },
    { avatar: 'B', color: '#F59E0B', name: 'Elatro deep tooling', assignee: 'Elasco Idupora · Toontran', date: '08 18, 2023', status: 'Completed' },
    { avatar: 'D', color: '#EF4444', name: 'Daed lo deserce', assignee: 'Datacolumns · Dacculta It.', date: '', status: 'Completed' },
  ]

  return (
    <div className="relative rounded-3xl overflow-hidden"
      style={{
        background: C.white,
        border: `1px solid ${C.border}`,
        boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
        width: '100%',
      }}>

      {/* App top bar */}
      <div className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: `1px solid ${C.border}`, background: C.white }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: C.indigo }}>
            <ZapIcon size={12} />
          </div>
          <span className="text-sm font-bold" style={{ color: C.text }}>FlowAI</span>
        </div>
        <div className="flex-1 mx-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs" style={{ background: C.gray50, border: `1px solid ${C.border}`, color: C.textMuted }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            Search for product
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs" style={{ background: C.gray100, color: C.textSub }}>?</div>
          <div className="relative">
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: C.gray100 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full flex items-center justify-center text-white" style={{ background: C.indigo, fontSize: '7px' }}>3</div>
          </div>
          <button className="px-3 py-1.5 rounded-lg text-xs font-medium" style={{ background: C.gray100, color: C.textSub, border: `1px solid ${C.border}` }}>Log in</button>
          <button className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white" style={{ background: C.indigo }}>Update</button>
          <div className="w-7 h-7 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=32&h=32&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>

      <div className="flex" style={{ minHeight: '380px' }}>
        {/* Sidebar */}
        <div className="flex flex-col gap-0.5 py-4 px-2" style={{ width: '140px', minWidth: '140px', borderRight: `1px solid ${C.border}`, background: C.gray50 }}>
          <div className="flex items-center gap-2 px-2 py-1.5 mb-2">
            <div className="w-6 h-6 rounded-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=32&h=32&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-xs font-semibold" style={{ color: C.text }}>FlowAI</div>
              <div className="text-xs" style={{ color: C.textMuted }}>Acme Destined</div>
            </div>
          </div>
          {[
            { label: 'Overview' },
            { label: 'Mashboard' },
            { label: 'Projects', active: true, badge: 'New' },
            { label: 'Preview' },
            { label: 'Deliveries' },
            { label: 'Community' },
            { label: 'Settings' },
          ].map(({ label, active, badge }) => (
            <div key={label} className="flex items-center justify-between px-2 py-1.5 rounded-lg text-xs cursor-pointer transition-all"
              style={{ background: active ? C.indigoLight : 'transparent', color: active ? C.indigo : C.textSub, fontWeight: active ? 600 : 400 }}>
              <div className="flex items-center gap-2">
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: active ? C.indigo : C.gray400, display: 'inline-block', flexShrink: 0 }} />
                {label}
              </div>
              {badge && <span className="text-xs px-1.5 py-0.5 rounded font-semibold" style={{ background: C.indigo, color: '#fff', fontSize: '9px' }}>{badge}</span>}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-4 overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="text-base font-bold" style={{ color: C.text }}>Projects</div>
            <div className="flex gap-2">
              <button className="px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1" style={{ background: C.gray50, border: `1px solid ${C.border}`, color: C.textSub }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                Preview
              </button>
              <button className="px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1" style={{ background: C.gray50, border: `1px solid ${C.border}`, color: C.textSub }}>
                Solulle Race <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
              </button>
            </div>
          </div>

          {/* Highlight card */}
          <div className="rounded-xl p-3 mb-3 flex items-center justify-between"
            style={{ background: `linear-gradient(135deg, ${C.indigo}, #7C3AED)` }}>
            <div>
              <div className="text-xs font-medium text-white opacity-80 mb-0.5">Atmospheric Cam</div>
              <div className="text-sm font-bold text-white">Finalize Q3 roadmap</div>
              <div className="text-xs text-white opacity-70 mt-1">1 tree process</div>
            </div>
            <div className="flex gap-1.5">
              <div className="w-8 h-8 rounded-lg" style={{ background: 'rgba(255,255,255,0.15)' }} />
              <div className="w-8 h-8 rounded-lg" style={{ background: 'rgba(255,255,255,0.15)' }} />
            </div>
          </div>

          {/* Table header */}
          <div className="grid text-xs font-semibold px-2 pb-1.5 mb-1" style={{ gridTemplateColumns: '1fr 160px 90px 80px', color: C.textMuted }}>
            <span>Name</span><span>Case Benefited</span><span>Added Time</span><span></span>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} className="grid items-center px-2 py-2 rounded-lg mb-0.5"
              style={{ gridTemplateColumns: '1fr 160px 90px 80px', background: i === 0 ? C.gray50 : 'transparent' }}>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-md flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{ background: row.color }}>
                  {row.avatar}
                </div>
                <span className="text-xs font-medium truncate" style={{ color: C.text }}>{row.name}</span>
              </div>
              <div>
                <div className="text-xs truncate" style={{ color: C.textMuted }}>{row.assignee}</div>
              </div>
              <div className="text-xs" style={{ color: C.textMuted }}>{row.date}</div>
              <div>
                <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: `${C.mint}15`, color: C.mint }}>
                  {row.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right panel */}
        <div className="p-3 flex flex-col gap-3" style={{ width: '160px', minWidth: '160px', borderLeft: `1px solid ${C.border}` }}>
          {/* Revenue card */}
          <div className="rounded-xl p-3" style={{ background: C.indigoLight, border: `1px solid ${C.indigo}20` }}>
            <div className="text-xs font-medium mb-1" style={{ color: C.textSub }}>Drawe date</div>
            <div className="text-lg font-bold" style={{ color: C.text }}>$3,600 non</div>
            <div className="text-xs font-semibold" style={{ color: C.mint }}>↑ 7.31%</div>
            <div className="mt-2 flex items-end gap-0.5" style={{ height: '28px' }}>
              {[4,6,5,8,6,9,7,10,8,11].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: `${h * 2.4}px`, background: i >= 7 ? C.indigo : C.gray200 }} />
              ))}
            </div>
          </div>

          {/* Assistance card */}
          <div className="rounded-xl p-3" style={{ background: C.white, border: `1px solid ${C.border}` }}>
            <div className="flex items-center justify-between mb-2">
              <div className="text-xs font-semibold" style={{ color: C.text }}>Assistations</div>
              <span style={{ color: C.textMuted, fontSize: '14px' }}>⋯</span>
            </div>
            <div className="text-xs mb-2" style={{ color: C.textMuted }}>Cash plans are five from she d once your business your dehorse.</div>
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=24&h=24&fit=crop&auto=format" alt="" className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-medium" style={{ color: C.text }}>Cehd Moefueri</span>
            </div>
          </div>

          {/* Chart card */}
          <div className="rounded-xl p-3 flex-1" style={{ background: C.white, border: `1px solid ${C.border}` }}>
            <div className="text-xs font-semibold mb-2" style={{ color: C.text }}>Descondability</div>
            <svg viewBox="0 0 120 60" className="w-full" style={{ height: '50px' }}>
              <polyline points="0,55 20,45 40,48 60,30 80,35 100,15 120,20" fill="none" stroke={C.indigo} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="0,55 20,45 40,48 60,30 80,35 100,15 120,20 120,60 0,60" fill={`${C.indigo}10`} stroke="none"/>
            </svg>
            <div className="flex justify-between text-xs mt-1" style={{ color: C.textMuted }}>
              <span>Sat 1st</span><span>23 Mar</span><span>24 Mar</span><span>11 M</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video play overlay */}
      {!playing && (
        <div
          className="absolute inset-0 flex items-center justify-center cursor-pointer transition-all"
          style={{ background: 'rgba(17,24,39,0.12)', borderRadius: '24px' }}
          onClick={() => setPlaying(true)}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{
              background: 'rgba(255,255,255,0.95)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill={C.indigo}><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: '#F0F2F7', minHeight: '760px' }}>
      {/* Atmospheric blob shapes */}
      <div className="absolute pointer-events-none" style={{
        top: '-80px', right: '5%', width: '560px', height: '560px',
        background: 'radial-gradient(circle, rgba(163,180,255,0.35) 0%, rgba(196,210,255,0.18) 45%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        top: '160px', right: '28%', width: '380px', height: '380px',
        background: 'radial-gradient(circle, rgba(186,168,255,0.28) 0%, rgba(200,185,255,0.12) 50%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(50px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-60px', right: '10%', width: '420px', height: '420px',
        background: 'radial-gradient(circle, rgba(147,196,255,0.25) 0%, rgba(180,218,255,0.10) 50%, transparent 70%)',
        borderRadius: '50%', filter: 'blur(55px)',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-20 relative">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-8 items-center">

          {/* Left — 40% */}
          <div className="w-full lg:w-[40%] flex-shrink-0 animate-fade-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-semibold"
              style={{ background: C.indigoLight, color: C.indigo, border: `1px solid ${C.indigo}20` }}>
              <ZapIcon size={11} />
              AI-powered workspace for modern teams
            </div>

            <h1 className="font-bold mb-5"
              style={{ color: C.text, letterSpacing: '-0.03em', lineHeight: 1.07, fontSize: 'clamp(36px, 4.5vw, 68px)' }}>
              Work smarter.{' '}
              <span style={{ color: C.indigo }}>Let AI handle</span>{' '}
              the busywork.
            </h1>

            <p className="text-lg leading-relaxed mb-7" style={{ color: C.textSub, maxWidth: '420px' }}>
              FlowAI brings your team's projects, tasks and workflows into one intelligent workspace — while AI automates the repetitive work.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <button className="btn-primary" style={{ height: '48px', paddingLeft: '24px', paddingRight: '24px' }}>
                Book a Demo <ArrowRightIcon />
              </button>
              <button className="btn-secondary" style={{ height: '48px' }}>
                <PlayIcon />See How It Works
              </button>
            </div>

            <p className="text-sm" style={{ color: C.textMuted }}>No credit card required · 30-minute personalized demo</p>

            {/* Avatar trust strip */}
            <div className="flex items-center gap-4 mt-8 pt-8" style={{ borderTop: `1px solid ${C.border}` }}>
              <div className="flex -space-x-2">
                {[
                  'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=48&h=48&fit=crop&auto=format',
                  'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=48&h=48&fit=crop&auto=format',
                  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=48&h=48&fit=crop&auto=format',
                  'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=48&h=48&fit=crop&auto=format',
                ].map((src, i) => (
                  <div key={i} className="w-8 h-8 rounded-full overflow-hidden"
                    style={{ border: `2px solid #F0F2F7`, zIndex: 4 - i }}>
                    <img src={src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                </div>
                <div className="text-xs" style={{ color: C.textSub }}>10,000+ teams love FlowAI</div>
              </div>
            </div>
          </div>

          {/* Right — 60% product video */}
          <div className="w-full lg:w-[60%] relative">
            <ProductVideoMockup />
          </div>
        </div>
      </div>

      {/* Next section peek */}
      <div className="text-center py-6" style={{ borderTop: `1px solid rgba(0,0,0,0.06)` }}>
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.textMuted }}>
          Trusted by teams building what's next
        </p>
      </div>
    </section>
  )
}

// ─── Social Proof ─────────────────────────────────────────────────────────────
function SocialProof() {
  const logos = ['Vercel', 'Axiom', 'Prisma', 'Resend', 'Supabase', 'Clerk']
  return (
    <section className="py-12" style={{ background: C.white, borderBottom: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-xs font-semibold mb-8 uppercase tracking-widest" style={{ color: C.textMuted }}>
          Trusted by teams building what's next
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14">
          {logos.map(logo => (
            <span key={logo} className="text-lg font-bold cursor-default transition-colors"
              style={{ color: C.gray200, letterSpacing: '-0.02em' }}
              onMouseEnter={e => (e.currentTarget.style.color = C.textMuted)}
              onMouseLeave={e => (e.currentTarget.style.color = C.gray200)}>
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Problem / Solution ───────────────────────────────────────────────────────
function ProblemSection() {
  const problems = [
    { icon: '⧉', title: 'Too many tools', desc: 'Projects, conversations and tasks scattered across different platforms — context is constantly lost.', color: '#F59E0B' },
    { icon: '↺', title: 'Repetitive work', desc: 'Teams spend hours creating tasks, assigning work and following up manually instead of getting things done.', color: '#EF4444' },
    { icon: '⚠', title: 'Work gets lost', desc: 'Important requests and decisions disappear between teams. Nothing is visible, nothing is accountable.', color: '#8B5CF6' },
  ]

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: C.white }}>
      {/* Orb */}
      <div className="absolute pointer-events-none" style={{
        top: '-80px', left: '-120px', width: '600px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(163,180,255,0.14) 0%, transparent 65%)',
        filter: 'blur(55px)',
      }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <p className="section-label mb-3">The problem</p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: C.text, letterSpacing: '-0.025em' }}>
            Your team shouldn't spend hours<br />managing work.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {problems.map(p => (
            <div key={p.title} className="card-hover rounded-2xl p-8"
              style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 text-lg"
                style={{ background: `${p.color}12`, border: `1px solid ${p.color}20` }}>
                {p.icon}
              </div>
              <h3 className="font-semibold mb-2 text-base" style={{ color: C.text }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.textSub }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
            style={{ background: C.indigoLight, color: C.indigo }}>
            ↓ The solution
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold" style={{ color: C.text, letterSpacing: '-0.02em' }}>
            One intelligent workspace. <span style={{ color: C.indigo }}>Less busywork.</span>
          </h3>
        </div>
      </div>
    </section>
  )
}

// ─── AI Automation Section ────────────────────────────────────────────────────
function AutomationSection() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive(n => (n + 1) % 5), 1100)
    return () => clearInterval(id)
  }, [])

  const steps = [
    { label: 'Customer request', sublabel: 'Trigger', color: '#60A5FA', icon: '◎' },
    { label: 'AI understands', sublabel: 'Intelligence', color: C.indigo, icon: '✦' },
    { label: 'Task created', sublabel: 'Action', color: '#818CF8', icon: '+' },
    { label: 'Team assigned', sublabel: 'Routing', color: '#34D399', icon: '◉' },
    { label: 'Completed', sublabel: 'Done', color: C.mint, icon: '✓' },
  ]

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: C.bg2 }}>
      {/* Orb */}
      <div className="absolute pointer-events-none" style={{
        top: '50%', left: '50%', transform: 'translate(-50%, -60%)',
        width: '700px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(147,196,255,0.18) 0%, rgba(196,210,255,0.08) 50%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="section-label mb-3">AI Automation</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-5" style={{ color: C.text, letterSpacing: '-0.025em' }}>
            Turn repetitive work into<br />
            <span style={{ color: C.indigo }}>automated workflows.</span>
          </h2>
          <p className="text-lg mx-auto" style={{ color: C.textSub, maxWidth: '520px' }}>
            FlowAI understands what needs to happen next and moves work forward automatically — no manual steps required.
          </p>
        </div>

        {/* Horizontal workflow */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
          {steps.map((step, i) => (
            <div key={step.label} className="flex lg:flex-col items-center gap-0 flex-1">
              {/* Node */}
              <div className="flex lg:flex-col items-center gap-3 lg:gap-4 p-4 rounded-2xl transition-all duration-500 w-full lg:text-center"
                style={{
                  background: active === i ? `${step.color}10` : 'transparent',
                  border: `1px solid ${active === i ? `${step.color}25` : 'transparent'}`,
                }}>
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-lg font-bold transition-all duration-500"
                  style={{
                    background: active === i ? step.color : C.white,
                    color: active === i ? '#fff' : C.textMuted,
                    border: `1px solid ${active === i ? 'transparent' : C.border}`,
                    boxShadow: active === i ? `0 4px 20px ${step.color}30` : '0 1px 4px rgba(0,0,0,0.06)',
                  }}>
                  {step.icon}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: active === i ? C.text : C.textSub }}>
                    {step.label}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: active === i ? step.color : C.textMuted }}>
                    {step.sublabel}
                  </div>
                </div>
              </div>

              {/* Connector arrow (between nodes) */}
              {i < steps.length - 1 && (
                <div className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: '32px', height: '32px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke={active > i ? C.indigo : C.gray200} strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="hidden lg:block rotate-0">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke={active > i ? C.indigo : C.gray200} strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="lg:hidden rotate-90">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Example card */}
        <div className="mt-14 max-w-2xl mx-auto rounded-2xl p-6"
          style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: C.mint }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: C.mint }}>Live example</span>
          </div>
          <div className="flex flex-wrap gap-3 items-center text-sm">
            {[
              { label: 'New customer request', color: '#60A5FA' },
              '→',
              { label: 'AI analyzes request', color: C.indigo },
              '→',
              { label: 'Task created', color: '#818CF8' },
              '→',
              { label: 'Assigned to Sarah', color: '#34D399' },
              '→',
              { label: '✓ Automation completed', color: C.mint },
            ].map((item, i) => typeof item === 'string'
              ? <span key={i} style={{ color: C.gray200, fontWeight: 600 }}>{item}</span>
              : <span key={i} className="px-2.5 py-1 rounded-lg text-xs font-medium"
                  style={{ background: `${item.color}12`, color: item.color, border: `1px solid ${item.color}20` }}>
                  {item.label}
                </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Product Showcase ─────────────────────────────────────────────────────────
function ProductShowcase() {
  return (
    <section className="py-28" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Product</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: C.text, letterSpacing: '-0.025em' }}>
            Everything your team needs.<br /><span style={{ color: C.indigo }}>In one workspace.</span>
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden"
          style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
          {/* Title bar */}
          <div className="flex items-center gap-2 px-5 py-3.5" style={{ borderBottom: `1px solid ${C.border}`, background: C.gray50 }}>
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
            <span className="ml-3 text-xs font-medium" style={{ color: C.textMuted }}>FlowAI — Workspace</span>
          </div>

          <div className="grid lg:grid-cols-4 min-h-80">
            <div className="lg:col-span-1 p-5" style={{ borderRight: `1px solid ${C.border}`, background: C.gray50 }}>
              <div className="text-xs font-semibold mb-4 uppercase tracking-widest" style={{ color: C.textMuted }}>Navigation</div>
              {['Overview', 'Projects', 'Tasks', 'Automations', 'AI Assistant', 'Team'].map((item, i) => (
                <div key={item} className="flex items-center gap-2 px-3 py-2 rounded-lg mb-1 text-sm cursor-pointer transition-all"
                  style={{ background: i === 1 ? C.indigoLight : 'transparent', color: i === 1 ? C.indigo : C.textSub, fontWeight: i === 1 ? 600 : 400 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', display: 'inline-block', background: i === 1 ? C.indigo : C.border }} />
                  {item}
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 p-6" style={{ borderRight: `1px solid ${C.border}` }}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="font-semibold mb-0.5" style={{ color: C.text }}>Q4 Growth Sprint</div>
                  <div className="text-xs" style={{ color: C.textMuted }}>12 tasks · 3 members · Due Dec 15</div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${C.mint}15`, color: C.mint }}>
                  On Track
                </span>
              </div>

              <div className="mb-5">
                <div className="flex justify-between text-xs mb-1.5" style={{ color: C.textMuted }}>
                  <span>Progress</span><span style={{ color: C.text, fontWeight: 600 }}>67%</span>
                </div>
                <div className="rounded-full overflow-hidden" style={{ height: '6px', background: C.border }}>
                  <div className="h-full rounded-full" style={{ width: '67%', background: `linear-gradient(90deg, ${C.indigo}, ${C.mint})` }} />
                </div>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: 'Launch blog content', done: true },
                  { name: 'Set up email sequences', done: true },
                  { name: 'Partner integrations', done: false },
                  { name: 'Performance benchmarks', done: false },
                ].map(task => (
                  <div key={task.name} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded flex items-center justify-center flex-shrink-0"
                      style={{ background: task.done ? C.indigoLight : C.gray50, border: `1px solid ${task.done ? C.indigo : C.border}`, color: C.indigo }}>
                      {task.done && <CheckIcon size={9} />}
                    </div>
                    <span className="text-sm" style={{ color: task.done ? C.textMuted : C.text, textDecoration: task.done ? 'line-through' : 'none' }}>
                      {task.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1 p-5">
              <div className="text-xs font-semibold mb-4 uppercase tracking-widest" style={{ color: C.textMuted }}>AI Activity</div>
              {[
                { msg: 'Partner task assigned to Kai', time: '2m ago', color: C.indigo },
                { msg: 'Deadline extended — team notified', time: '14m ago', color: C.mint },
                { msg: 'Duplicate task merged', time: '1h ago', color: '#8B5CF6' },
                { msg: 'Blocker escalated to manager', time: '2h ago', color: '#F59E0B' },
              ].map((item, i) => (
                <div key={i} className="flex gap-2.5 mb-4">
                  <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: item.color }} />
                  <div>
                    <div className="text-xs" style={{ color: C.textSub }}>{item.msg}</div>
                    <div className="text-xs mt-0.5" style={{ color: C.textMuted }}>{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Features ─────────────────────────────────────────────────────────────────
function FeatureSection() {
  const features = [
    {
      title: 'AI Workflows',
      desc: 'Automate repetitive processes with intelligent workflows that learn from your team.',
      color: C.indigo,
      preview: (
        <div className="rounded-xl p-3" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
          {[
            { label: 'New request received', done: true, color: '#60A5FA' },
            { label: 'AI analyzes intent', done: true, color: C.indigo },
            { label: 'Route to team member', done: false, color: C.mint },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-2 py-1.5">
              <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: s.done ? `${s.color}20` : C.gray100, border: `1px solid ${s.done ? s.color : C.border}`, color: s.color }}>
                {s.done && <CheckIcon size={9} />}
              </div>
              <span className="text-xs" style={{ color: s.done ? C.text : C.textMuted }}>{s.label}</span>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Smart Workspace',
      desc: 'Bring projects, tasks and team collaboration into one organized hub.',
      color: '#818CF8',
      preview: (
        <div className="rounded-xl p-3" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
          {[
            { name: 'Q4 Roadmap', pct: 78, color: C.indigo },
            { name: 'Design System', pct: 55, color: '#818CF8' },
            { name: 'Onboarding', pct: 32, color: C.mint },
          ].map(p => (
            <div key={p.name} className="mb-2">
              <div className="flex justify-between text-xs mb-1" style={{ color: C.textSub }}>
                <span>{p.name}</span><span style={{ color: C.text }}>{p.pct}%</span>
              </div>
              <div className="rounded-full overflow-hidden" style={{ height: '4px', background: C.border }}>
                <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: p.color }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Team Intelligence',
      desc: "Understand what's happening across your team's work with real-time insights.",
      color: C.mint,
      preview: (
        <div className="rounded-xl p-3" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
          <div className="flex items-end gap-1" style={{ height: '40px' }}>
            {[3,5,4,7,6,8,5,9,7,10].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm transition-all"
                style={{ height: `${h * 4}px`, background: i >= 7 ? C.mint : C.gray200 }} />
            ))}
          </div>
          <div className="flex justify-between text-xs mt-2" style={{ color: C.textMuted }}>
            <span>Mon</span><span>Wed</span><span>Fri</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Powerful Automations',
      desc: 'Connect everyday actions and eliminate manual steps with zero-code automation.',
      color: '#F59E0B',
      preview: (
        <div className="rounded-xl p-3" style={{ background: C.bg, border: `1px solid ${C.border}` }}>
          {[
            { trigger: 'Task overdue', action: 'Escalate to manager' },
            { trigger: 'Request created', action: 'Assign to team' },
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-2 mb-2 text-xs">
              <span className="px-1.5 py-0.5 rounded font-medium flex-shrink-0"
                style={{ background: '#F59E0B15', color: '#F59E0B' }}>If</span>
              <span style={{ color: C.textSub }}>{a.trigger}</span>
              <span style={{ color: C.gray200 }}>→</span>
              <span style={{ color: C.text }}>{a.action}</span>
            </div>
          ))}
        </div>
      ),
    },
  ]

  return (
    <section className="py-28 relative overflow-hidden" style={{ background: C.white }}>
      {/* Orb */}
      <div className="absolute pointer-events-none" style={{
        bottom: '-100px', right: '-100px', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(163,148,255,0.12) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Features</p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: C.text, letterSpacing: '-0.025em' }}>
            Built for how modern teams<br /><span style={{ color: C.indigo }}>actually work.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(f => (
            <div key={f.title} className="card-hover rounded-2xl p-6 flex flex-col gap-5"
              style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              {/* Mini UI preview */}
              {f.preview}
              <div>
                <h3 className="font-semibold mb-1.5" style={{ color: C.text }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.textSub }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Use Cases ────────────────────────────────────────────────────────────────
function UseCasesSection() {
  const cases = [
    {
      team: 'Marketing',
      headline: 'Automate campaign planning, approvals and content workflows.',
      body: 'Stop chasing approvals and manually updating spreadsheets. FlowAI keeps your campaigns moving automatically.',
      tags: ['Campaign tracking', 'Content calendar', 'Approval flows'],
      bg: '#EAF3FF',
      accent: '#3B82F6',
      img: 'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=600&h=360&fit=crop&auto=format',
    },
    {
      team: 'Operations',
      headline: 'Reduce repetitive processes and keep teams aligned automatically.',
      body: 'Build the playbooks once. FlowAI runs them every time — routing work, tracking SLAs and keeping everyone aligned.',
      tags: ['Process automation', 'Team sync', 'SLA tracking'],
      bg: '#EDFAF8',
      accent: C.mint,
      img: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&h=360&fit=crop&auto=format',
    },
    {
      team: 'Product',
      headline: 'Turn ideas into organized tasks and move from planning to execution faster.',
      body: 'Keep your roadmap, sprints and AI suggestions in one place so nothing slips and every build ships on time.',
      tags: ['Roadmapping', 'Sprint planning', 'Feature tracking'],
      bg: C.indigoLight,
      accent: C.indigo,
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=360&fit=crop&auto=format',
    },
  ]

  return (
    <section className="py-28" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Use cases</p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: C.text, letterSpacing: '-0.025em' }}>
            Built for teams that <span style={{ color: C.indigo }}>move fast.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map(c => (
            <div key={c.team} className="card-hover rounded-2xl overflow-hidden flex flex-col"
              style={{ background: c.bg, border: `1px solid rgba(0,0,0,0.06)` }}>
              {/* Photo */}
              <div className="relative overflow-hidden" style={{ height: '180px' }}>
                <img src={c.img} alt={c.team}
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.75, transition: 'transform 0.4s ease' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.2) 100%)' }} />
              </div>
              {/* Content */}
              <div className="p-8 flex flex-col flex-1 gap-4">
                <span className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit"
                  style={{ background: `${c.accent}20`, color: c.accent }}>
                  {c.team}
                </span>
                <h3 className="text-lg font-bold leading-snug" style={{ color: C.text }}>{c.headline}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: C.textSub }}>{c.body}</p>
                <div className="flex flex-wrap gap-2 pt-2" style={{ borderTop: `1px solid rgba(0,0,0,0.06)` }}>
                  {c.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-lg"
                      style={{ background: 'rgba(255,255,255,0.7)', color: C.textSub, border: '1px solid rgba(0,0,0,0.07)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── AI Assistant ─────────────────────────────────────────────────────────────
function AIAssistantSection() {
  const messages = [
    { role: 'user', text: "What's blocking the product launch?" },
    { role: 'ai', text: 'Three tasks are currently blocking the launch. Two are waiting for design approval and one is assigned to engineering.' },
  ]
  const [visible, setVisible] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(v => {
        if (v >= messages.length) { clearInterval(id); return v }
        return v + 1
      })
    }, 1400)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-28" style={{ background: C.white }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Chat */}
          <div className="flex justify-center">
            <div className="rounded-2xl overflow-hidden w-full max-w-md"
              style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: `1px solid ${C.border}`, background: C.gray50 }}>
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white" style={{ background: C.indigo }}>
                  <BotIcon size={14} />
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: C.text }}>FlowAI Assistant</div>
                  <div className="text-xs flex items-center gap-1.5" style={{ color: C.mint }}>
                    <span className="w-1.5 h-1.5 rounded-full inline-block animate-pulse-dot" style={{ background: C.mint }} />
                    Online
                  </div>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-4" style={{ minHeight: '200px' }}>
                {messages.slice(0, visible).map((m, i) => (
                  <div key={i} className="flex gap-3" style={{ justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                    {m.role === 'ai' && (
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-white mt-0.5" style={{ background: C.indigo }}>
                        <BotIcon size={12} />
                      </div>
                    )}
                    <div className="px-4 py-3 rounded-2xl text-sm leading-relaxed max-w-xs"
                      style={{
                        background: m.role === 'user' ? C.indigoLight : C.gray50,
                        color: m.role === 'user' ? C.indigo : C.textSub,
                        border: `1px solid ${m.role === 'user' ? `${C.indigo}20` : C.border}`,
                        borderTopRightRadius: m.role === 'user' ? '4px' : '16px',
                        borderTopLeftRadius: m.role === 'ai' ? '4px' : '16px',
                      }}>
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-5 pb-5">
                <div className="text-xs mb-2.5" style={{ color: C.textMuted }}>Suggested actions</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['Show blockers', 'Create follow-up', 'Assign task'].map(a => (
                    <button key={a} className="text-xs px-3 py-1.5 rounded-lg font-medium transition-all"
                      style={{ background: C.indigoLight, color: C.indigo, border: `1px solid ${C.indigo}20` }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = `${C.indigo}18` }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = C.indigoLight }}>
                      {a}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl"
                  style={{ background: C.gray50, border: `1px solid ${C.border}` }}>
                  <input className="flex-1 text-sm bg-transparent outline-none"
                    placeholder="Ask your workspace anything..."
                    style={{ color: C.textMuted }}
                    readOnly />
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
                    style={{ background: C.indigo }}>
                    <ArrowRightIcon size={13} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-label mb-3">AI Assistant</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: C.text, letterSpacing: '-0.025em' }}>
              Ask your workspace <span style={{ color: C.indigo }}>anything.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: C.textSub }}>
              FlowAI's assistant understands your entire workspace — blockers, deadlines, assignments and priorities — and surfaces answers instantly.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { q: '"What\'s blocking the launch?"', a: 'Surfaces blockers instantly' },
                { q: '"Who has capacity this week?"', a: 'Checks real workloads' },
                { q: '"Create a follow-up task"', a: 'Takes action in your workspace' },
              ].map(({ q, a }) => (
                <div key={q} className="flex items-center gap-4">
                  <div className="flex-1 px-4 py-2.5 rounded-xl text-sm"
                    style={{ background: C.gray50, border: `1px solid ${C.border}`, color: C.textSub }}>
                    {q}
                  </div>
                  <ArrowRightIcon size={14} />
                  <div className="text-xs font-semibold" style={{ color: C.indigo, minWidth: '130px' }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "FlowAI helped our team eliminate hours of repetitive coordination every week. The AI handles assignment and follow-up — we just focus on the work.",
      name: 'Priya Mehta',
      role: 'Head of Product, Orbit Labs',
      img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop&auto=format',
    },
    {
      quote: "We replaced five tools with FlowAI. The automation builder alone saves our ops team 12+ hours a week. It works the way you'd expect a smart product to.",
      name: 'Marcus Vogt',
      role: 'VP Operations, Fieldstone',
      img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=80&h=80&fit=crop&auto=format',
    },
    {
      quote: "The AI assistant is genuinely useful. I can ask what is overdue in our sprint and get an accurate answer in seconds. That alone is worth it.",
      name: 'Selin Kaya',
      role: 'Engineering Lead, Arca Systems',
      img: 'https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=80&h=80&fit=crop&auto=format',
    },
  ]

  return (
    <section className="py-28" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold" style={{ color: C.text, letterSpacing: '-0.025em' }}>
            Teams that switched <span style={{ color: C.indigo }}>don't look back.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {testimonials.map(t => (
            <div key={t.name} className="card-hover rounded-2xl p-8 flex flex-col gap-5"
              style={{ background: C.white, border: `1px solid ${C.border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)' }}>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="text-sm leading-relaxed flex-1" style={{ color: C.textSub }}>"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: `1px solid ${C.border}` }}>
                <img src={t.img} alt={t.name} className="w-10 h-10 rounded-full object-cover"
                  style={{ border: `2px solid ${C.border}` }} />
                <div>
                  <div className="text-sm font-semibold" style={{ color: C.text }}>{t.name}</div>
                  <div className="text-xs" style={{ color: C.textMuted }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="rounded-2xl p-8 flex flex-wrap justify-center gap-10"
          style={{ background: C.white, border: `1px solid ${C.border}` }}>
          {[
            { value: '10,000+', label: 'Teams worldwide' },
            { value: '4.9 / 5', label: 'Average rating' },
            { value: '73%', label: 'Less manual work' },
            { value: '4.8×', label: 'Faster delivery' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold mb-1" style={{ color: C.text }}>{value}</div>
              <div className="text-xs" style={{ color: C.textMuted }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Final CTA (dark) ─────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: C.dark }}>
      {/* Orbs in dark CTA */}
      <div className="absolute pointer-events-none" style={{
        top: '-100px', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(79,70,229,0.2) 0%, rgba(147,196,255,0.08) 50%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-80px', right: '10%',
        width: '400px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(32,168,138,0.12) 0%, transparent 65%)',
        filter: 'blur(50px)',
      }} />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#F9FAFB', letterSpacing: '-0.03em' }}>
          Give your team back<br /><span style={{ color: C.indigo }}>their time.</span>
        </h2>
        <p className="text-lg mb-10" style={{ color: '#9CA3AF' }}>
          See how FlowAI can help your team organize work, automate repetitive tasks and move faster.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button className="btn-primary" style={{ padding: '14px 32px', fontSize: '16px' }}>
            Book a Demo <ArrowRightIcon size={16} />
          </button>
          <button className="btn-secondary" style={{ padding: '14px 32px', fontSize: '16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', color: '#D1D5DB' }}>
            See How It Works
          </button>
        </div>
        <p className="text-sm" style={{ color: '#4B5563' }}>Talk to our team and see FlowAI in action. No commitment required.</p>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { title: 'Product', links: ['Features', 'Pricing', 'Changelog', 'Roadmap'] },
    { title: 'Solutions', links: ['Marketing', 'Operations', 'Product', 'Engineering'] },
    { title: 'Resources', links: ['Documentation', 'Blog', 'Status', 'Support'] },
    { title: 'Company', links: ['About', 'Careers', 'Contact', 'Partners'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Cookies'] },
  ]

  return (
    <footer style={{ background: C.white, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-6 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center text-white" style={{ background: C.indigo }}>
                <ZapIcon size={13} />
              </div>
              <span className="font-bold text-lg" style={{ color: C.text, letterSpacing: '-0.02em' }}>FlowAI</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: C.textMuted }}>
              Work smarter. Let AI handle the busywork.
            </p>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <div className="text-xs font-semibold mb-4 uppercase tracking-widest" style={{ color: C.textMuted }}>{col.title}</div>
              <div className="flex flex-col gap-2.5">
                {col.links.map(link => (
                  <a key={link} href="#" className="text-sm transition-colors" style={{ color: C.textSub }}
                    onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                    onMouseLeave={e => (e.currentTarget.style.color = C.textSub)}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8"
          style={{ borderTop: `1px solid ${C.border}` }}>
          <p className="text-xs" style={{ color: C.textMuted }}>© 2026 FlowAI, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Contact'].map(l => (
              <a key={l} href="#" className="text-xs transition-colors" style={{ color: C.textMuted }}
                onMouseEnter={e => (e.currentTarget.style.color = C.text)}
                onMouseLeave={e => (e.currentTarget.style.color = C.textMuted)}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: C.bg }}>
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <AutomationSection />
      <ProductShowcase />
      <FeatureSection />
      <UseCasesSection />
      <AIAssistantSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  )
}
