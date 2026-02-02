'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuestionCount() {
      try {
        const res = await fetch('/api/questions');
        const data = await res.json();
        setTotalQuestions(data.total);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setTotalQuestions(48);
      } finally {
        setIsLoading(false);
      }
    }
    fetchQuestionCount();
  }, []);

  const handleStart = () => {
    router.push('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Strategic Management Quiz
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <>
              Master your exam prep with <span className="font-semibold text-blue-600">{totalQuestions}</span> questions derived
              directly from your study material.
            </>
          )}
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={handleStart}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Start Quiz
          </button>
          <a
            href="https://github.com/MK87543/strategic-management-quiz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-4 bg-gray-200 text-gray-800 font-semibold rounded-full hover:bg-gray-300 transition-all duration-300"
          >
            View on GitHub
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Features:</p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">✓</span> Randomized Questions
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">✓</span> Instant Feedback
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600 font-bold">✓</span> Score Tracking
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}