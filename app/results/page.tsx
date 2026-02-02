'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { RotateCcw, Home as HomeIcon } from 'lucide-react';

function ResultsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const score = parseInt(searchParams.get('score') || '0');
  const total = parseInt(searchParams.get('total') || '1');
  const percentage = Math.round((score / total) * 100);

  let message = '';
  let colorClass = '';

  if (percentage >= 90) {
    message = "Outstanding! You're a strategy master!";
    colorClass = "text-green-600";
  } else if (percentage >= 70) {
    message = "Great job! You've got a solid grasp.";
    colorClass = "text-blue-600";
  } else if (percentage >= 50) {
    message = "Good effort! A bit more study will help.";
    colorClass = "text-amber-600";
  } else {
    message = "Keep practicing! Review the core concepts.";
    colorClass = "text-red-600";
  }

  return (
    <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center animate-in zoom-in duration-300">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Quiz Complete!</h1>

      <div className="relative w-48 h-48 mx-auto mb-8">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            className="stroke-slate-100"
            strokeWidth="12"
            fill="none"
          />
          <circle
            cx="96"
            cy="96"
            r="88"
            className="stroke-indigo-600 transition-all duration-1000 ease-out"
            strokeWidth="12"
            fill="none"
            strokeDasharray={553}
            strokeDashoffset={553 - (553 * percentage) / 100}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-5xl font-bold text-slate-800">{percentage}%</span>
          <span className="text-sm text-slate-400 font-medium uppercase tracking-wider mt-1">Score</span>
        </div>
      </div>

      <div className="mb-8">
        <p className="text-2xl font-bold text-slate-700 mb-2">
          {score} / {total} Correct
        </p>
        <p className={`font-medium ${colorClass}`}>
          {message}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={() => router.push('/quiz')}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> Try Again
        </button>
        <button
          onClick={() => router.push('/')}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors"
        >
          <HomeIcon className="w-4 h-4" /> Home
        </button>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Suspense fallback={<div>Loading result...</div>}>
        <ResultsContent />
      </Suspense>
    </div>
  );
}