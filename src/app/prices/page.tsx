import type { CSSProperties } from 'react';

type PeriodKey = 'early' | 'mid' | 'peak' | 'late' | 'autumn';

const periods: { key: PeriodKey; label: string; highlight: boolean }[] = [
  { key: 'early', label: '20.05 - 30.06', highlight: false },
  { key: 'mid', label: '01.07 - 15.07', highlight: false },
  { key: 'peak', label: '16.07 - 19.08', highlight: true },
  { key: 'late', label: '20.08 - 31.08', highlight: false },
  { key: 'autumn', label: '01.09 - 20.09', highlight: false },
];

const roomTypes: { name: string; prices: Record<PeriodKey, number>; icon: string }[] = [
  { name: 'Single Room', prices: { early: 40, mid: 45, peak: 55, late: 45, autumn: 40 }, icon: 'fa-user' },
  { name: 'Double Room', prices: { early: 70, mid: 85, peak: 70, late: 55, autumn: 60 }, icon: 'fa-users' },
  { name: 'Triple Room', prices: { early: 90, mid: 100, peak: 90, late: 80, autumn: 95 }, icon: 'fa-users' },
  { name: 'Suite', prices: { early: 110, mid: 130, peak: 110, late: 100, autumn: 120 }, icon: 'fa-bed' },
];

const packages: { name: string; nights: number; prices: Record<PeriodKey, number> }[] = [
  { name: 'Single Room', nights: 7, prices: { early: 270, mid: 290, peak: 350, late: 450, autumn: 400 } },
  { name: 'Double Room', nights: 7, prices: { early: 360, mid: 450, peak: 560, late: 450, autumn: 360 } },
  { name: 'Triple Room', nights: 7, prices: { early: 520, mid: 590, peak: 660, late: 590, autumn: 520 } },
  { name: 'Suite', nights: 7, prices: { early: 670, mid: 730, peak: 810, late: 700, autumn: 620 } },
];

export default function PricesPage() {
  const thStyle: CSSProperties = {
    border: '1px solid #e5e7eb',
    padding: '12px 16px',
    textAlign: 'center',
    backgroundColor: '#f9fafb',
    fontWeight: '600',
    color: '#374151',
  };
  const tdStyle: CSSProperties = {
    border: '1px solid #e5e7eb',
    padding: '14px 16px',
    textAlign: 'center',
  };
  const firstTdStyle: CSSProperties = {
    ...tdStyle,
    textAlign: 'left',
    fontWeight: '600',
    color: '#1f2937',
    backgroundColor: '#fafafa',
  };

  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-semibold tracking-wider uppercase text-sm">Accommodation</span>
          <h1 className="text-4xl font-serif text-gray-800 mt-2 mb-4">Prices 2024</h1>
          <p className="text-gray-500">All prices include breakfast and resort fee</p>
        </div>

        {/* Season Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-gray-200"></span>
            <span className="text-sm text-gray-600">Regular Season</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-orange-700"></span>
            <span className="text-sm text-gray-600">Peak Season</span>
          </div>
        </div>

        {/* Daily Prices Table */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-gray-800 mb-6 flex items-center gap-3">
            <i className="fa fa-calendar-day text-orange-500"></i>
            Daily Prices (BGN)
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr className="bg-gradient-to-r from-orange-50 to-yellow-50">
                  <th style={{ ...thStyle, textAlign: 'left', backgroundColor: 'transparent' }}>Room Type</th>
                  {periods.map((p) => (
                    <th key={p.key} style={{ ...thStyle, backgroundColor: p.highlight ? '#fff7ed' : 'transparent' }}>
                      {p.highlight && <span className="inline-block w-2 h-2 bg-orange-400 rounded-full mr-2"></span>}
                      {p.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roomTypes.map((room, idx) => (
                  <tr key={room.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td style={firstTdStyle}>
                      <i className={`fa ${room.icon} text-orange-700 mr-2`} aria-hidden="true"></i>
                      {room.name}
                    </td>
                    {periods.map((p) => (
                      <td key={p.key} style={{ ...tdStyle, backgroundColor: p.highlight ? '#fff7ed' : 'transparent' }}>
                        <span className={p.highlight ? 'text-orange-600 font-semibold' : 'text-gray-700'}>
                          {room.prices[p.key]} lv
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Package Prices */}
        <section className="mb-16">
          <h2 className="text-2xl font-serif text-gray-800 mb-6 flex items-center gap-3">
            <i className="fa fa-tag text-orange-700"></i>
            7 Nights Package (BGN)
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr className="bg-gradient-to-r from-orange-50 to-yellow-50">
                  <th style={{ ...thStyle, textAlign: 'left', backgroundColor: 'transparent' }}>Room Type</th>
                  {periods.map((p) => (
                    <th key={p.key} style={{ ...thStyle, backgroundColor: p.highlight ? '#fff7ed' : 'transparent' }}>
                      {p.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg, idx) => (
                  <tr key={pkg.name} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td style={firstTdStyle}>{pkg.name}</td>
                    {periods.map((p) => (
                      <td key={p.key} style={{ ...tdStyle, backgroundColor: p.highlight ? '#fff7ed' : 'transparent' }}>
                        <span className={p.highlight ? 'text-orange-600 font-semibold' : 'text-gray-700'}>
                          {pkg.prices[p.key]} lv
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Notes */}
        <section className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8">
          <h2 className="text-xl font-serif text-gray-800 mb-4 flex items-center gap-2">
            <i className="fa fa-info-circle text-orange-500"></i>
            Important Information
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-600">
              <i className="fa fa-check text-green-500 mt-1" aria-hidden="true"></i>
              Prices are in BGN and include breakfast and resort fee
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <i className="fa fa-check text-green-500 mt-1" aria-hidden="true"></i>
              Single room: 1 person, Double room: 2 people, Triple room: 3 people, Suite: 4 people
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <i className="fa fa-plus text-orange-500 mt-1" aria-hidden="true"></i>
              Additional bed: Adults 20 lv, Children under 12: 10 lv
            </li>
            <li className="flex items-start gap-3 text-gray-600">
              <i className="fa fa-child text-green-500 mt-1" aria-hidden="true"></i>
              Children under 4 free when sharing bed with two adults
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
