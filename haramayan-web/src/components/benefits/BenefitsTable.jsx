import { brackets, severityTiers, erRates } from '../../data/benefitsData';

const formatPeso = (amount) => {
  return '₱' + amount.toLocaleString();
};

export default function BenefitsTable({ accountType, multiplier }) {
  const erRate = erRates[accountType];

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Bracket</th>
            <th className="px-3 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wide">Members</th>
            <th className="px-3 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wide">Claimable</th>
            <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wide bg-red-50 text-red-700">Severe (100%)</th>
            <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wide bg-orange-50 text-orange-700">Moderate (70%)</th>
            <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wide bg-yellow-50 text-yellow-700">Mild (50%)</th>
            <th className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wide bg-blue-50 text-blue-700">ER Only</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {brackets.map((b, i) => {
            const base = b[accountType] * multiplier;
            return (
              <tr key={b.bracket} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                <td className="px-3 py-3 font-medium text-gray-900">Bracket {b.bracket}</td>
                <td className="px-3 py-3 text-gray-600">{b.members.toLocaleString()}</td>
                <td className="px-3 py-3 text-right font-semibold text-primary-700">{formatPeso(base)}</td>
                <td className="px-3 py-3 text-right text-gray-900 bg-red-50/50">{formatPeso(base * severityTiers.severe)}</td>
                <td className="px-3 py-3 text-right text-gray-900 bg-orange-50/50">{formatPeso(base * severityTiers.moderate)}</td>
                <td className="px-3 py-3 text-right text-gray-900 bg-yellow-50/50">{formatPeso(base * severityTiers.mild)}</td>
                <td className="px-3 py-3 text-right text-gray-900 bg-blue-50/50">{formatPeso(base * erRate)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
