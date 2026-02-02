import { Question } from '@/data/questions';

interface QuizFeedbackProps {
  question: Question;
  options: string[];
  userAnswer: string;
  onNext: () => void;
  isLastQuestion: boolean;
}

export default function QuizFeedback({
  question,
  options,
  userAnswer,
  onNext,
  isLastQuestion,
}: QuizFeedbackProps) {
  const isCorrect = userAnswer === question.correct;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{question.question}</h2>

      <div className="space-y-3 mb-6">
        {options.map((option) => {
          const isSelected = option === userAnswer;
          const isCorrectOption = option === question.correct;

          return (
            <div
              key={option}
              className={`p-4 rounded-xl border-2 font-medium transition-all ${
                isCorrectOption
                  ? 'border-green-500 bg-green-50 text-green-900'
                  : isSelected
                  ? 'border-red-500 bg-red-50 text-red-900'
                  : 'border-gray-200 bg-white text-gray-800'
              }`}
            >
              <div className="flex justify-between items-center">
                <span>{option}</span>
                {isCorrectOption && <span className="text-2xl">✅</span>}
                {isSelected && !isCorrectOption && <span className="text-2xl">❌</span>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
        <p className="font-semibold text-blue-900 mb-2">💡 Explanation:</p>
        <p className="text-blue-800">{question.explanation}</p>
      </div>

      <button
        onClick={onNext}
        className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
      >
        {isLastQuestion ? 'See Results' : 'Next Question'}
      </button>
    </div>
  );
}