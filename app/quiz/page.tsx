'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/data/questions';
import { ChevronRight, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function QuizPage() {
  const router = useRouter();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(() => 
    [...questions].sort(() => Math.random() - 0.5)
  );

  const question = shuffledQuestions[currentIdx];
  const progress = ((currentIdx) / questions.length) * 100;

  const handleAnswer = (option: string) => {
    if (isAnswered) return;
    setSelectedAnswer(option);
    setIsAnswered(true);
    if (option === question.correct) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(c => c + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      router.push(`/results?score=${score + (selectedAnswer === question.correct ? 0 : 0)}&total=${questions.length}`);
    }
  };

  if (!question) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex justify-between items-center">
          <div>
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Question</span>
            <div className="text-xl font-bold text-slate-800">
              {currentIdx + 1} <span className="text-slate-300">/</span> {questions.length}
            </div>
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Score</span>
            <div className="text-xl font-bold text-indigo-600">{score}</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-600 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="p-8 border-b border-slate-100">
            <h2 className="text-xl font-medium text-slate-800 leading-relaxed">
              {question.question}
            </h2>
          </div>

          <div className="p-6 space-y-3 bg-slate-50/50">
            {question.options.map((option, idx) => {
              const isSelected = selectedAnswer === option;
              const isCorrect = option === question.correct;
              
              let buttonStyle = "hover:border-indigo-300 hover:bg-indigo-50";
              if (isAnswered) {
                if (isCorrect) buttonStyle = "bg-green-50 border-green-500 ring-1 ring-green-500 text-green-700";
                else if (isSelected) buttonStyle = "bg-red-50 border-red-500 ring-1 ring-red-500 text-red-700";
                else buttonStyle = "opacity-50 grayscale";
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  disabled={isAnswered}
                  className={cn(
                    "w-full text-left p-4 rounded-xl border border-slate-200 bg-white transition-all duration-200 flex items-center justify-between group",
                    buttonStyle
                  )}
                >
                  <span className="font-medium">{option}</span>
                  {isAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                </button>
              );
            })}
          </div>

          {/* Feedback Section */}
          {isAnswered && (
            <div className="p-6 bg-slate-50 border-t border-slate-100 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex gap-4 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg h-fit">
                  <AlertCircle className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Explanation</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {question.explanation}
                  </p>
                </div>
              </div>
              
              <button
                onClick={nextQuestion}
                className="w-full bg-indigo-600 text-white py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                Next Question <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}