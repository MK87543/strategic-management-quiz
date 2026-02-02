'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import QuizQuestion from '@/components/QuizQuestion';
import QuizFeedback from '@/components/QuizFeedback';
import { Question } from '@/lib/questions';

interface QuizSession {
  questionOrder: number[];
  currentIndex: number;
  score: number;
}

interface SubmissionResult {
  correct: boolean;
  userAnswer: string;
}

export default function QuizPage() {
  const router = useRouter();
  const [session, setSession] = useState<QuizSession | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastResult, setLastResult] = useState<SubmissionResult | null>(null);
  const [shuffledOptions, setShuffledOptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize quiz session
  useEffect(() => {
    const initializeQuiz = async () => {
      try {
        const res = await fetch('/api/questions');
        const data = await res.json();
        setQuestions(data.questions);

        // Initialize session
        const questionOrder = Array.from({ length: data.questions.length }, (_, i) => i).sort(
          () => Math.random() - 0.5
        );
        const newSession: QuizSession = {
          questionOrder,
          currentIndex: 0,
          score: 0,
        };
        setSession(newSession);

        // Shuffle options for first question
        if (data.questions.length > 0) {
          const q = data.questions[questionOrder[0]];
          const shuffled = [...q.options].sort(() => Math.random() - 0.5);
          setShuffledOptions(shuffled);
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing quiz:', error);
        setIsLoading(false);
      }
    };

    initializeQuiz();
  }, []);

  if (isLoading || !session || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <p className="text-gray-600">Loading quiz...</p>
      </div>
    );
  }

  const currentQuestionId = session.questionOrder[session.currentIndex];
  const currentQuestion = questions[currentQuestionId];

  if (!currentQuestion) {
    router.push(`/results?score=${session.score}&total=${questions.length}`);
    return null;
  }

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentQuestion.correct;
    setLastResult({ correct: isCorrect, userAnswer: answer });
    setShowFeedback(true);

    if (isCorrect) {
      setSession({
        ...session,
        score: session.score + 1,
      });
    }
  };

  const handleNext = () => {
    if (session.currentIndex + 1 >= session.questionOrder.length) {
      router.push(`/results?score=${session.score + (lastResult?.correct ? 1 : 0)}&total=${questions.length}`);
    } else {
      const nextIndex = session.currentIndex + 1;
      const nextQuestionId = session.questionOrder[nextIndex];
      const nextQuestion = questions[nextQuestionId];
      const shuffled = [...nextQuestion.options].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);

      setSession({
        ...session,
        currentIndex: nextIndex,
        score: session.score + (lastResult?.correct ? 1 : 0),
      });
      setShowFeedback(false);
      setLastResult(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
        body {
          font-family: 'Poppins', sans-serif;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8 fadeIn">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {session.currentIndex + 1} of {questions.length}</span>
              <span className="font-semibold text-blue-600">Score: {session.score}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${((session.currentIndex + 1) / questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {showFeedback && lastResult ? (
            <QuizFeedback
              question={currentQuestion}
              options={shuffledOptions}
              userAnswer={lastResult.userAnswer}
              onNext={handleNext}
              isLastQuestion={session.currentIndex === questions.length - 1}
            />
          ) : (
            <QuizQuestion
              question={currentQuestion}
              options={shuffledOptions}
              onAnswer={handleAnswer}
            />
          )}
        </div>
      </div>
    </div>
  );
}