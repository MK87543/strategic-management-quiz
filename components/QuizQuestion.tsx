import { Question } from '@/data/questions';

interface QuizQuestionProps {
  question: Question;
  options: string[];
  onAnswer: (answer: string) => void;
}

export default function QuizQuestion({
  question,
  options,
  onAnswer,
}: QuizQuestionProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{question.question}</h2>

      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="block w-full text-left p-4 border-2 border-gray-200 bg-white rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-200 font-medium text-gray-800 hover:text-blue-600"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}