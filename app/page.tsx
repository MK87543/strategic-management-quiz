import { questions } from "@/data/questions";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-indigo-600 p-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">
            Strategic Management Quiz
          </h1>
          <p className="text-indigo-100">
            Master your exam preparation
          </p>
        </div>
        
        <div className="p-8 text-center">
          <div className="mb-8">
            <span className="text-5xl font-bold text-slate-800 block mb-2">
              {questions.length}
            </span>
            <span className="text-slate-500 uppercase tracking-wide text-sm font-semibold">
              Questions Available
            </span>
          </div>
          
          <p className="text-slate-600 mb-8 leading-relaxed max-w-md mx-auto">
            Test your knowledge on economies of scale, innovation types, 
            Porter's strategies, and organizational structures.
          </p>

          <a 
            href="/quiz" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
          >
            Start Quiz Now
          </a>
        </div>
        
        <div className="bg-slate-50 p-4 text-center text-slate-400 text-sm">
          Updated for 2024 Exam Prep
        </div>
      </div>
    </main>
  );
}