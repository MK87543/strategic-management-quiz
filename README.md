# Strategic Management Quiz - Next.js WebApp

🚀 An interactive Strategic Management quiz application built with **Next.js**, **React**, and **TypeScript**. Designed for exam preparation with 48 comprehensive questions.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black?logo=next.js)
![React](https://img.shields.io/badge/React-18.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 📚 **48 Randomized Questions** - Questions are shuffled to prevent memorization
- 📊 **Real-time Score Tracking** - Track your progress as you answer questions
- 💡 **Instant Feedback** - Get detailed explanations for every answer
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Built with Next.js for optimal speed
- 🎨 **Modern UI** - Beautiful gradient design with smooth animations
- 🚀 **Vercel Ready** - One-click deployment to Vercel
- 💻 **TypeScript** - Full type safety throughout the application
- 🔄 **Session Management** - Randomized question order per session
- 📈 **Progress Visualization** - Visual progress bar and score display

## 🛠 Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library  
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling (via inline classes)
- **Vercel** - Hosting platform
- **Node.js** - Backend runtime

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/MK87543/strategic-management-quiz.git
cd strategic-management-quiz
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
pnpm install
bun install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
pnpm dev
bun dev
```

4. **Open your browser and navigate to:**

```
http://localhost:3000
```

## 📦 Production Build

```bash
npm run build
npm start
```

## 🌐 Deployment on Vercel

### Option 1: Via GitHub (Recommended)

1. Push this repository to your GitHub account
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository  
5. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 3: Connect to Vercel from this Repo

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMK87543%2Fstrategic-management-quiz)

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home/Start page
│   ├── quiz/
│   │   └── page.tsx            # Quiz page with session management
│   ├── results/
│   │   └── page.tsx            # Results page with score visualization
│   └── api/
│       └── questions/
│           └── route.ts        # API endpoint for questions
├── components/
│   ├── QuizQuestion.tsx        # Question display component
│   └── QuizFeedback.tsx        # Feedback and explanation component
├── lib/
│   └── questions.ts            # Question database (48 questions)
├── public/                      # Static assets
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── next.config.js              # Next.js configuration
└── README.md                   # This file
```

## 🎯 How It Works

### 1. **Home Page** - Welcome Screen
- Introduction to the quiz
- Display total number of questions
- Start quiz button
- Links to GitHub repository

### 2. **Quiz Page** - Answer Questions
- Questions are randomized on each quiz attempt
- Options are shuffled for each question
- Real-time score tracking
- Progress bar showing quiz completion
- Smooth transitions between questions

### 3. **Feedback Page** - Review Answers
- Correct answer highlighted in green ✅
- User's incorrect answer highlighted in red ❌
- Detailed explanation for each question
- Option to continue to next question

### 4. **Results Page** - Final Score
- Percentage score with circular visualization
- Number of correct answers
- Performance-based motivational message
- Option to restart quiz
- Back to home button

## 📡 API Endpoints

### GET `/api/questions`

Returns all questions and the total count.

**Response:**
```json
{
  "questions": [
    {
      "id": 1,
      "question": "...",
      "options": ["...", "...", "...", "..."],
      "correct": "...",
      "explanation": "..."
    }
  ],
  "total": 48
}
```

## 🎓 Questions Included

The quiz covers comprehensive strategic management topics including:

- **Porter's Generic Strategies** - Cost leadership, Differentiation, Focus
- **Blue Ocean Strategy** - Uncontested market innovation
- **Mintzberg's 5 Ps of Strategy** - Plan, Ploy, Pattern, Position, Perspective
- **Innovation Types** - Product, Process, Position, Paradigm
- **Organizational Structures** - Functional, Matrix, Divisional
- **Leadership Styles** - Autocratic, Participative, Bureaucratic, Laissez-faire
- **PEST(EL) Analysis** - Political, Economic, Social, Technological, Environmental, Legal
- **Ansoff Matrix** - Market Penetration, Development, Product Development, Diversification
- **Agency Problems** - Manager-shareholder conflicts
- **Hersey & Blanchard** - Situational leadership
- **And much more...**

## 🎨 Design Highlights

- **Modern Gradient Backgrounds** - Beautiful, smooth color gradients
- **Smooth Animations** - Fade-in and scale effects for visual polish
- **Responsive Layout** - Adapts perfectly to all screen sizes
- **Interactive Buttons** - Hover effects and smooth transitions
- **Progress Visualization** - Clear visual progress bar
- **Score Circle** - SVG-based animated score circle on results page

## 🔧 Customization

### Adding More Questions

Edit `lib/questions.ts` and add to the `QUESTIONS_DB` array:

```typescript
{
  id: 49,
  question: "Your question here?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  correct: "Correct Option",
  explanation: "Explanation for the correct answer"
}
```

### Changing Colors

Edit component files to change the gradient colors. For example, in `app/page.tsx`:

```jsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

## 📊 Performance

- **Fast Load Times** - Optimized with Next.js
- **Client-Side Rendering** - Smooth interactions with no page reloads
- **Efficient State Management** - React hooks for minimal re-renders
- **Lightweight** - No heavy external dependencies

## 🐛 Known Limitations

- Questions are stored in memory (no database)
- Quiz progress is not persisted (resets on page refresh)
- No user authentication or profiles

## 📝 Future Enhancements

- [ ] Database integration for dynamic questions
- [ ] User authentication and profiles
- [ ] Quiz history and statistics
- [ ] Admin panel for managing questions
- [ ] Multiple quiz sets/categories
- [ ] Export results as PDF
- [ ] Dark mode toggle
- [ ] Difficulty levels
- [ ] Time-based quizzes
- [ ] Leaderboard

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - Feel free to use this project however you'd like.

See [LICENSE](LICENSE) for details.

## 👤 Author

Built with ❤️ for exam preparation

**Matteo Kleber** - [@MK87543](https://github.com/MK87543)

## 🙏 Acknowledgments

- HTL Dornbirn for the strategic management course
- Next.js team for the amazing framework
- React community for the fantastic library
- Vercel for hosting platform

## 📞 Support

If you have any questions or issues:

1. Check the [GitHub Issues](https://github.com/MK87543/strategic-management-quiz/issues)
2. Create a new issue with details
3. Include steps to reproduce the problem
4. Provide screenshots if applicable

---

**Ready to boost your Strategic Management knowledge?**

[Start the quiz now! 🚀](https://strategic-management-quiz.vercel.app)

### Key Stats

| Metric | Value |
|--------|-------|
| Total Questions | 48 |
| Technology | Next.js 14 + React 18 |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Hosting | Vercel |
| Build Time | < 1 minute |
| Deployment Time | < 30 seconds |

### Environment Requirements

| Package | Version |
|---------|----------|
| Node.js | 16+ |
| npm | 8+ |
| Next.js | 14+ |
| React | 18+ |
| TypeScript | 5.3+ |

---

**Made with Poppins font and modern web technologies** ✨
