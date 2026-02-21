import { useState } from 'react';
import { brackets, programs, spotlightBrackets, spotlightLabels, probationaryContingency } from '../../data/benefitsData';
import BracketCard from './BracketCard';
import BenefitsTable from './BenefitsTable';

export default function BenefitsSection() {
  const [programType, setProgramType] = useState('medical');
  const [accountType, setAccountType] = useState('principal');
  const [showTable, setShowTable] = useState(false);

  const currentProgram = programs.find(p => p.id === programType);
  const multiplier = currentProgram.multiplier;
  const isFuneral = programType === 'funeral';

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
          Your <span className="text-primary-700">Benefits</span> Grow With Us
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Your benefits increase as more members join HPI. The more the community grows,
          the greater protection you and your family receive. All members start at Bracket 1.
        </p>

        {/* Program Toggle */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {programs.map(prog => (
            <button
              key={prog.id}
              onClick={() => setProgramType(prog.id)}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                programType === prog.id
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-400 hover:text-primary-700'
              }`}
            >
              <span>{prog.icon}</span>
              <span>{prog.label}</span>
              {prog.badge && (
                <span className={`ml-1 px-1.5 py-0.5 rounded text-[10px] font-bold ${
                  programType === prog.id ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-700'
                }`}>
                  2x
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Account Type Toggle */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setAccountType('principal')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              accountType === 'principal'
                ? 'bg-primary-100 text-primary-800 ring-2 ring-primary-500'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Principal (Member)
          </button>
          <button
            onClick={() => setAccountType('dependent')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              accountType === 'dependent'
                ? 'bg-primary-100 text-primary-800 ring-2 ring-primary-500'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Dependent (Family)
          </button>
        </div>

        {/* Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {spotlightBrackets.map((idx, i) => (
            <BracketCard
              key={brackets[idx].bracket}
              bracket={brackets[idx]}
              label={spotlightLabels[i]}
              accountType={accountType}
              multiplier={multiplier}
              isFuneral={isFuneral}
            />
          ))}
        </div>

        {/* Expand All Brackets Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowTable(!showTable)}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-primary-700 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
          >
            <span>{showTable ? 'Hide' : 'View All 8'} Bracket Levels</span>
            <svg
              className={`w-4 h-4 transition-transform ${showTable ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Expandable Table */}
        {showTable && (
          <div className="mb-10 animate-fadeIn">
            <BenefitsTable
              accountType={accountType}
              multiplier={multiplier}
              isFuneral={isFuneral}
            />
          </div>
        )}

        {/* Info Callouts */}
        <div className={`grid grid-cols-1 ${isFuneral ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-4 mb-8`}>
          {!isFuneral && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Hospital Admitted</h4>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Severe — 100% of claimable
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                  Moderate — 70% of claimable
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  Mild — 50% of claimable
                </div>
              </div>
            </div>
          )}

          {!isFuneral && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">ER Only (Not Admitted)</h4>
              <div className="space-y-1 text-xs text-gray-600">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Principal — 5% of claimable
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-300"></span>
                  Dependent — 2% of claimable
                </div>
              </div>
            </div>
          )}

          {isFuneral && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-amber-900 mb-2">Funeral Assistance</h4>
              <p className="text-xs text-amber-700">
                All funeral benefits are <strong>DOUBLED</strong> compared to regular program amounts.
                Principal max: ₱80,000 | Dependent max: ₱40,000
              </p>
            </div>
          )}

          {!isFuneral && (
            <div className="bg-primary-50 border border-primary-200 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-primary-900 mb-2">Claim Frequency</h4>
              <p className="text-xs text-primary-700">
                Members can claim assistance <strong>twice per year</strong> for Medical, Accidental,
                and Natal Care programs.
              </p>
            </div>
          )}
        </div>

        {/* Important Information (FAQ-style) */}
        <div className="space-y-3 max-w-4xl mx-auto">
          <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Important Information</h3>

          <details className="bg-primary-50 p-5 rounded-lg">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Probationary Period (First 2 Months)
            </summary>
            <div className="mt-3 text-gray-700 text-sm space-y-3">
              <p>
                All new members undergo a <strong>2-month probationary period</strong> from enrollment.
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="font-medium text-gray-900 mb-2">Covered during probation (fixed contingency):</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">&#10003;</span>
                    <span><strong>Severe cases</strong> (hospital admitted) — ₱{probationaryContingency.principal.toLocaleString()} (Principal) / ₱{probationaryContingency.dependent.toLocaleString()} (Dependent)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary-600">&#10003;</span>
                    <span><strong>Funeral Assistance</strong> — ₱{probationaryContingency.principal.toLocaleString()} (Principal) / ₱{probationaryContingency.dependent.toLocaleString()} (Dependent), covered immediately</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-medium text-gray-900 mb-2">NOT covered during probation:</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">&#10007;</span>
                    <span>Moderate cases (70%) — must wait 2 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">&#10007;</span>
                    <span>Mild cases (50%) — must wait 2 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">&#10007;</span>
                    <span>ER only (not admitted) — must wait 2 months</span>
                  </li>
                </ul>
              </div>
              <p className="italic text-gray-600">
                After the 2-month probationary period, full bracket-based benefits apply for all severity levels and ER.
              </p>
            </div>
          </details>

          <details className="bg-primary-50 p-5 rounded-lg">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              Starting Bracket
            </summary>
            <p className="mt-3 text-gray-700 text-sm">
              All members automatically start at <strong>Bracket 1</strong> (up to 1,000 cumulative members).
              This ensures that post-probation benefits never fall below the probationary contingency amount
              of ₱{probationaryContingency.principal.toLocaleString()} (Principal) / ₱{probationaryContingency.dependent.toLocaleString()} (Dependent).
            </p>
          </details>

          <details className="bg-primary-50 p-5 rounded-lg">
            <summary className="font-semibold text-gray-900 cursor-pointer">
              How Brackets Work
            </summary>
            <p className="mt-3 text-gray-700 text-sm">
              Your bracket level is determined by the total cumulative active members who joined HPI after you.
              As the community grows, your benefits increase automatically. The more members that join after you,
              the higher your bracket — and the greater your coverage.
            </p>
          </details>
        </div>

        {/* Probationary Notice Banner */}
        <div className="mt-8 bg-gradient-to-r from-primary-50 to-primary-100 border border-primary-200 rounded-lg p-5 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                <strong>2-month probationary period</strong> applies to Medical, Accidental, and Natal Care benefits.
                During probation, only severe (hospital admitted) cases are covered at a fixed contingency amount.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                <strong>Funeral Assistance</strong> is covered immediately — ₱{probationaryContingency.principal.toLocaleString()} (Principal) / ₱{probationaryContingency.dependent.toLocaleString()} (Dependent) contingency fund available from day one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
