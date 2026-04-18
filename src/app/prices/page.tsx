import type { CSSProperties } from 'react';

export default function PricesPage() {
  const tableStyle: CSSProperties = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '2rem',
  };
  const thStyle: CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
  };
  const tdStyle: CSSProperties = {
    border: '1px solid #ddd',
    padding: '8px',
  };

  return (
    <main>
      <div className="containt" style={{ padding: '2rem' }}>
        <h2>Prices 2024</h2>
        <div className="table-wrap">
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Period</th>
                <th style={thStyle}>20.05-30.06</th>
                <th style={thStyle}>01.07-15.07</th>
                <th style={thStyle}>16.07-19.08</th>
                <th style={thStyle}>20.08-31.08</th>
                <th style={thStyle}>01.09-20.09</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Single Room</td>
                <td style={tdStyle}>40lv</td>
                <td style={tdStyle}>45lv</td>
                <td style={tdStyle}>55lv</td>
                <td style={tdStyle}>45lv</td>
                <td style={tdStyle}>40lv</td>
              </tr>
              <tr>
                <td style={tdStyle}>Double Room</td>
                <td style={tdStyle}>70lv</td>
                <td style={tdStyle}>85lv</td>
                <td style={tdStyle}>70lv</td>
                <td style={tdStyle}>55lv</td>
                <td style={tdStyle}>60lv</td>
              </tr>
              <tr>
                <td style={tdStyle}>Triple Room</td>
                <td style={tdStyle}>90lv</td>
                <td style={tdStyle}>100lv</td>
                <td style={tdStyle}>90lv</td>
                <td style={tdStyle}>80lv</td>
                <td style={tdStyle}>95lv</td>
              </tr>
              <tr>
                <td style={tdStyle}>Suit</td>
                <td style={tdStyle}>110lv</td>
                <td style={tdStyle}>130lv</td>
                <td style={tdStyle}>110lv</td>
                <td style={tdStyle}>100lv</td>
                <td style={tdStyle}>120lv</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
          <br />
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>7 nights package price</th>
                <th style={thStyle}>20.05-30.06</th>
                <th style={thStyle}>01.07-15.07</th>
                <th style={thStyle}>16.07-19.08</th>
                <th style={thStyle}>20.08-31.08</th>
                <th style={thStyle}>01.09-20.09</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Single Room</td>
                <td style={tdStyle}>270lv</td>
                <td style={tdStyle}>290lv</td>
                <td style={tdStyle}>350lv</td>
                <td style={tdStyle}>450lv</td>
                <td style={tdStyle}>400lv</td>
              </tr>
              <tr>
                <td style={tdStyle}>Double Room</td>
                <td style={tdStyle}>360lv</td>
                <td style={tdStyle}>450lv</td>
                <td style={tdStyle}>560lv</td>
                <td style={tdStyle}>450lv</td>
                <td style={tdStyle}>360lv</td>
              </tr>
              <tr>
                <td style={tdStyle}>Triple Room</td>
                <td style={tdStyle}>520lv</td>
                <td style={tdStyle}>590lv</td>
                <td style={tdStyle}>660lv</td>
                <td style={tdStyle}>590lv</td>
                <td style={tdStyle}>520lv</td>
              </tr>
              <tr>
                <td style={tdStyle}>Suit</td>
                <td style={tdStyle}>670lv</td>
                <td style={tdStyle}>730lv</td>
                <td style={tdStyle}>810lv</td>
                <td style={tdStyle}>700lv</td>
                <td style={tdStyle}>620lv</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li>The prices are in BGN and include breakfast and resort fee.</li>
            <li>Above prices relate to accommodate 1 person in single room, 2 people in double room, 3 persons for triple room 4 people apartment.</li>
            <li>For additional accommodation is paid: for adults 20lv; children under 12 years - 10 leva.</li>
            <li>Children under 4 years are free in the presence of two adults (without using additional bed).</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
