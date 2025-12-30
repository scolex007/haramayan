import { benefitTypes } from '../../data/testimonialsData';

export default function BenefitBadge({ type }) {
  const config = benefitTypes[type] || benefitTypes.general;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${config.color}`}>
      <span className="mr-1">{config.icon}</span>
      {config.label}
    </span>
  );
}
