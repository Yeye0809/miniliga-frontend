

export const ReminderCard = () => {
  return (
    <section className="card reminder-card">
      <div className="reminder-text">
        <svg className="reminder-icon" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6"/><path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
        <div>
          <p className="reminder-title">Recuerda</p>
          <p className="reminder-desc">Puedes registrar los resultados de los partidos desde el módulo de Partidos.</p>
        </div>
      </div>

      <svg className="reminder-illustration" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="62" cy="16" r="9" fill="#F2C29A"/>
        <path d="M50 32c4-4 10-6 14-6s10 2 13 6l7 20-9 3-5-13-2 10 4 30h-9l-4-24-5 24H45l3-30-4-16Z" fill="#2EDB5B"/>
        <rect x="47" y="66" width="9" height="20" rx="3" fill="#12233F"/>
        <rect x="60" y="66" width="9" height="20" rx="3" fill="#12233F"/>
        <circle cx="92" cy="70" r="8" fill="#FFFFFF" stroke="#12233F" strokeWidth="1.4"/>
        <path d="M92 63v14M85 70h14M87 65l10 10M97 65l-10 10" stroke="#12233F" strokeWidth="1"/>
      </svg>
    </section>
  )
}
