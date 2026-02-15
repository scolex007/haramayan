import { severityTiers, erRates } from '../../data/benefitsData';

const formatPeso = (amount) => {
  return '₱' + amount.toLocaleString();
};

export default function BracketCard({ bracket, label, accountType, multiplier, isFuneral }) {
  const baseAmount = bracket[accountType] * multiplier;
  const erRate = erRates[accountType];

  const severeAmount = baseAmount * severityTiers.severe;
  const moderateAmount = baseAmount * severityTiers.moderate;
  const mildAmount = baseAmount * severityTiers.mild;
  const erAmount = baseAmount * erRate;

  return (
    <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      {/* Label badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
          label === 'Maximum'
            ? 'bg-primary-100 text-primary-800'
            : label === 'Growing'
              ? 'bg-emerald-100 text-emerald-800'
              : 'bg-gray-100 text-gray-700'
        }`}>
          {label}
        </span>
        {isFuneral && (
          <span className="inline-block px-2 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
            2x Coverage
          </span>
        )}
      </div>

      {/* Bracket info */}
      <div className="mb-4">
        <p className="text-sm text-gray-500 font-medium">Bracket {bracket.bracket}</p>
        <p className="text-xs text-gray-400">{bracket.members.toLocaleString()} cumulative members</p>
      </div>

      {/* Main amount */}
      <div className="mb-5">
        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium">Up to</p>
        <p className="text-3xl font-bold text-primary-700">{formatPeso(baseAmount)}</p>
      </div>

      {/* Severity breakdown or Funeral flat payout */}
      {isFuneral ? (
        <div className="border-t border-gray-100 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
              Funeral Benefit
            </span>
            <span className="text-sm font-semibold text-gray-900">{formatPeso(baseAmount)}</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Flat payout — no severity tiers</p>
        </div>
      ) : (
        <div className="space-y-2 border-t border-gray-100 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 inline-block"></span>
              Severe
            </span>
            <span className="text-sm font-semibold text-gray-900">{formatPeso(severeAmount)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-orange-500 inline-block"></span>
              Moderate
            </span>
            <span className="text-sm font-semibold text-gray-900">{formatPeso(moderateAmount)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-500 inline-block"></span>
              Mild
            </span>
            <span className="text-sm font-semibold text-gray-900">{formatPeso(mildAmount)}</span>
          </div>
          <div className="flex justify-between items-center border-t border-gray-100 pt-2">
            <span className="text-sm text-gray-600 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
              ER Only
            </span>
            <span className="text-sm font-semibold text-gray-900">{formatPeso(erAmount)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
