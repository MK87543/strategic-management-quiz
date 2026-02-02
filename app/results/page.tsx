'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(1);

  useEffect(() => {
    const scoreParam = searchParams.get('score');
    const totalParam = searchParams.get('total');
    if (scoreParam) setScore(parseInt(scoreParam));
    if (totalParam) setTotal(parseInt(totalParam));
  }, [searchParams]);

  const percentage = Math.round((score / total) * 100);

  const getPerformanceMessage = () => {
    if (percentage >= 90) return '🎉 Outstanding! You\'re quiz master!';
    if (percentage >= 80) return '🌟 Great job! You\'ve got this!';
    if (percentage >= 70) return '👍 Good work! Keep studying!';
    if (percentage >= 60) return '📚 Nice try! Review the material!';
    return '💪 Keep practicing! You\'ll improve!';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Quiz Completed!</h1>

        <div className="my-12 scaleIn">
          <div className="inline-block relative">
            <svg className="w-48 h-48" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="8"
              />
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="8"
                strokeDasharray={`${(percentage / 100) * 565.5} 565.5`}
                strokeLinecap="round"
                style={{ transition: 'stroke-dasharray 1s ease-out' }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2563eb" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <div className="text-5xl font-bold text-gray-900">{percentage}%</div>
                <div className="text-sm text-gray-600">Correct</div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-2xl font-semibold text-gray-800 mb-2">
          {score} out of {total} correct
        </p>
        <p className="text-xl text-gray-600 mb-8">{getPerformanceMessage()}</p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
          >
            Restart Quiz
          </button>
          <a
            href="/"
            className="px-8 py-3 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}