export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Based on the data: Business A (Prod Index 111, Cost 103), Business B (Prod Index 108, Cost 95), Business C (Prod Index 99, Cost 95), Business D (Prod Index 80, Cost 110). Which business appears to be achieving economies of scale?",
    options: ["Business A", "Business B", "Business C", "Business D"],
    correct: "Business B",
    explanation: "Business B has increased production (Index > 100) while unit costs have decreased (Index < 100), which defines economies of scale."
  },
  {
    id: 2,
    question: "According to the concept of the experience curve, which businesses are most likely to lower unit costs?",
    options: ["Service sector businesses", "New market entrants", "Manufacturing businesses", "Market leaders"],
    correct: "Manufacturing businesses",
    explanation: "Manufacturing businesses benefit most because costs usually decline by 10-30% with each unit of output due to standardized processes."
  },
  {
    id: 3,
    question: "What does the term 'Blue Ocean' refer to?",
    options: ["A brand innovation", "An agile management technique", "A strategic approach to search for innovation opportunities in uncontested markets", "New leadership approach to support employees"],
    correct: "A strategic approach to search for innovation opportunities in uncontested markets",
    explanation: "Blue Ocean Strategy refers to a market where there is no competition or very little competition."
  },
  {
    id: 4,
    question: "Which of Porter's 3 generic strategies describes Mercedes' strategic approach best?",
    options: ["Cost leader", "Differentiation", "Focus/Niche", "Stuck in the middle"],
    correct: "Differentiation",
    explanation: "Mercedes focuses on creating uniquely desirable products and services (Differentiation)."
  },
  {
    id: 5,
    question: "In which of the following circumstances might a business be experiencing economies of scale?",
    options: ["Output falling and unit costs rising", "Output falling and unit costs falling", "Output rising and unit costs sinking", "Output rising and unit costs rising"],
    correct: "Output rising and unit costs sinking",
    explanation: "Economies of scale occur when more units are produced on a larger scale with fewer input costs on average."
  },
  {
    id: 6,
    question: "The consumption of water usage is outperforming the supply. In the PEST(EL) analysis this would be an example of which factor?",
    options: ["Technological", "Economic/environmental", "Socio-cultural", "Political / legal"],
    correct: "Economic/environmental",
    explanation: "Resource scarcity relates to Environmental factors, often linked with Economic impacts."
  },
  {
    id: 7,
    question: "A big Internet retailer is testing delivery of goods with drones. Although technically possible, the company stops due to regulations. This is most likely due to:",
    options: ["Technological issues", "Environmental issues", "Political, legal issues", "Social issues"],
    correct: "Political, legal issues",
    explanation: "Regulations regarding airspace and safety fall under Political and Legal factors."
  },
  {
    id: 8,
    question: "Which type of innovation 'changes the context in which the products and services are introduced'?",
    options: ["Position Innovation", "Paradigm Innovation", "Product Innovation", "Process Innovation"],
    correct: "Position Innovation",
    explanation: "Position innovation changes the context or target market of the offering."
  },
  {
    id: 9,
    question: "Which type of innovation 'changes the underlying mental model which frames what the organization does'?",
    options: ["Position Innovation", "Paradigm Innovation", "Product Innovation", "Process Innovation"],
    correct: "Paradigm Innovation",
    explanation: "Paradigm innovation shifts the mental model of the business logic."
  },
  {
    id: 10,
    question: "True or False: Coming up with a new version of a popular chocolate bar is an example of radical innovation.",
    options: ["True", "False"],
    correct: "False",
    explanation: "This is incremental innovation (improving what already exists), not radical."
  },
  {
    id: 11,
    question: "Which of the following is associated with successful innovation organizations?",
    options: ["Mechanistic structure", "Low market share", "Effective enabling mechanisms for the core innovation process", "Zero mistake policy"],
    correct: "Effective enabling mechanisms for the core innovation process",
    explanation: "Successful innovators need enabling mechanisms, strategic direction, and rich networks."
  },
  {
    id: 12,
    question: "Which statement correctly describes Platform Innovation?",
    options: ["The same components are produced with the same core design to be used in different products", "Platforms are dangerous because of high unrecoverable investments", "It prevents incremental innovation", "It is only for service sectors"],
    correct: "The same components are produced with the same core design to be used in different products",
    explanation: "Platform innovation allows components to be shared across products to harness efficiency."
  },
  {
    id: 13,
    question: "Which of the following would be a typical example of a 'market pull' innovation?",
    options: ["The hovercraft", "Nanotechnology-based paints", "Improved safety features in cars (airbags)", "Nuclear fusion"],
    correct: "Improved safety features in cars (airbags)",
    explanation: "Market Pull refers to a need identified by customers (safety) that drives product development."
  },
  {
    id: 14,
    question: "What does AIM stand for in the innovation process?",
    options: ["Accelerating Ideas to Market", "Automated Innovation Management", "Agile Implementation Method", "Advanced Idea Modeling"],
    correct: "Accelerating Ideas to Market",
    explanation: "AIM is a framework for managing organizational changes and accelerating implementation."
  },
  {
    id: 15,
    question: "According to Porter's Generic Strategies, where would 'Lidl' typically be positioned?",
    options: ["Broad market / Lower Cost", "Broad market / Differentiation", "Narrow market / Lower Cost", "Narrow market / Differentiation"],
    correct: "Broad market / Lower Cost",
    explanation: "Lidl targets a broad market with a cost-leadership strategy."
  },
  {
    id: 16,
    question: "According to Porter's Generic Strategies, where would 'Apple' typically be positioned?",
    options: ["Broad market / Lower Cost", "Broad market / Differentiation", "Narrow market / Lower Cost", "Narrow market / Differentiation"],
    correct: "Broad market / Differentiation",
    explanation: "Apple targets a broad market with high differentiation."
  },
  {
    id: 17,
    question: "Which of Mintzberg's 5 Ps is defined as 'a specific manoeuvre intended to outwit an opponent'?",
    options: ["Plan", "Ploy", "Pattern", "Position", "Perspective"],
    correct: "Ploy",
    explanation: "A Ploy is a specific tactic/manoeuvre to disrupt or discourage competitors."
  },
  {
    id: 18,
    question: "A firm that acquires a business outside of its present scope of operation, but with similar or related core competencies is engaging in:",
    options: ["Horizontal integration", "Vertical integration", "Conglomerate diversification", "Liquidation"],
    correct: "Horizontal integration",
    explanation: "Horizontal Integration is growing by acquiring a similar company/related competencies."
  },
  {
    id: 19,
    question: "A no-frills product targeted at the market at large is consistent with:",
    options: ["Focus strategy", "Differentiation strategy", "Low-cost strategy", "Hybrid strategy"],
    correct: "Low-cost strategy",
    explanation: "Low-cost strategies offer relatively low prices to stimulate demand and gain market share."
  },
  {
    id: 20,
    question: "Twitter engineers deciding to increase processing capacity is an example of:",
    options: ["Corporate level strategy", "Business unit level strategy", "Operative strategy", "Global strategy"],
    correct: "Operative strategy",
    explanation: "Operational strategy involves refining specific plans enabling departments to implement the overall strategy."
  },
  {
    id: 21,
    question: "When Facebook decides to offer market research services for all associated businesses, this is an example of:",
    options: ["Corporate level strategy", "Operative Strategy", "Business unit level strategy", "Functional strategy"],
    correct: "Corporate level strategy",
    explanation: "Corporate strategy defines the overall company plan and expansion into new segments/businesses."
  },
  {
    id: 22,
    question: "Which is NOT a key advantage of the low-cost-differentiation (hybrid) strategy?",
    options: ["It offers prospects of high profitability", "It allows the business to distinguish its product", "It is easier to implement than either low-cost or differentiation", "It enables the business to compete from cost leadership"],
    correct: "It is easier to implement than either low-cost or differentiation",
    explanation: "Hybrid strategies are generally harder to implement because they require balancing conflicting goals."
  },
  {
    id: 23,
    question: "True or False: The likelihood that new firms will enter an industry is contingent on the extent to which barriers to entry have been erected.",
    options: ["True", "False"],
    correct: "True",
    explanation: "High entry barriers reduce the threat of new entrants."
  },
  {
    id: 24,
    question: "True or False: A firm always operates in a single, distinct industry.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Many firms have multiple business units operating in different industries."
  },
  {
    id: 25,
    question: "Freddy Laker's Skytrain failed because competitors cut prices to match him. Which of Mintzberg's 5 Ps did he likely ignore?",
    options: ["Plan", "Ploy", "Pattern", "Perspective"],
    correct: "Ploy",
    explanation: "He failed to anticipate the 'Ploy' (manoeuvres) of competitors like British Airways."
  },
  {
    id: 26,
    question: "A railway company offers passengers transportation. By also moving into the cargo business, management thinks it can achieve:",
    options: ["Economies of scale", "Economies of scope", "Learning curve benefits", "Differentiation"],
    correct: "Economies of scope",
    explanation: "Economies of scope arise when resources (rails/trains) are used for a variety of products (passengers and cargo)."
  },
  {
    id: 27,
    question: "Based on the text about Apple's self-driving car innovation, 'Position Innovation' fits because:",
    options: ["They are using new technology", "They are entering a new market (cars) vs their old market (phones)", "They are changing the mental model of driving", "They are improving safety"],
    correct: "They are entering a new market (cars) vs their old market (phones)",
    explanation: "Position innovation relates to changes in the context/market in which products are introduced."
  },
  {
    id: 28,
    question: "True or False: A high degree of specialization can limit communication between subunits and prevent them from learning from one another.",
    options: ["True", "False"],
    correct: "True",
    explanation: "Disadvantages of specialization include boredom and isolation (silo effect)."
  },
  {
    id: 29,
    question: "'People in the organization like me because I know what I am doing and share knowledge with followers.' This describes:",
    options: ["Position power", "Information power", "Legitimate power", "Coercive power"],
    correct: "Information power",
    explanation: "Information Power is based on controlling information/knowledge needed by others."
  },
  {
    id: 30,
    question: "True or False: In a simple organization, differentiation is low because the division of labour is low.",
    options: ["True", "False"],
    correct: "True",
    explanation: "In simple organizations, one or few people perform all tasks."
  },
  {
    id: 31,
    question: "According to Hersey and Blanchard, if an employee has Low Competence but High Commitment (D1), the leader should use:",
    options: ["Delegating", "Supporting", "Coaching", "Directing"],
    correct: "Directing",
    explanation: "S1 (Directing) is for D1 (Low competence, High commitment)."
  },
  {
    id: 32,
    question: "The intensity of rivalry among firms in an industry is dependent on:",
    options: ["Concentration of competitors", "High fixed/storage costs", "High exit barriers", "All of the above"],
    correct: "All of the above",
    explanation: "Porter's intensity of rivalry is driven by all these factors."
  },
  {
    id: 33,
    question: "An organization structure where the CEO oversees functions (Res, Eng, Mkt) which intersect with Product Managers (A, B) is a:",
    options: ["Functional Organization", "Project Organization", "Matrix Organization", "Divisional Organization"],
    correct: "Matrix Organization",
    explanation: "A matrix organization has teams reporting to multiple leaders (Functional and Product)."
  },
  {
    id: 34,
    question: "Motivation of employees is very likely to be the highest under which leader?",
    options: ["Autocratic/authoritarian", "Participative leader", "Bureaucratic leader", "Dictatorial leader"],
    correct: "Participative leader",
    explanation: "Participative leaders engage employees, often leading to higher motivation."
  },
  {
    id: 35,
    question: "Speedy decisions are most likely taken by which leader?",
    options: ["Autocratic/authoritarian", "Participative leader", "Bureaucratic leader", "Laissez-faire"],
    correct: "Autocratic/authoritarian",
    explanation: "Autocratic leaders make decisions alone without consultation, which is faster."
  },
  {
    id: 36,
    question: "Information power is:",
    options: ["Derived from having the ability to provide rewards", "Derived from possessing knowledge that others want or need", "Based on followers liking their leader", "Focused on the social contract"],
    correct: "Derived from possessing knowledge that others want or need",
    explanation: "It is based on controlling information needed to reach a goal."
  },
  {
    id: 37,
    question: "An agency problem arises when:",
    options: ["Managers act in the best interest of the company", "Managers strictly adhere to moral standards", "Managers seek to increase sales to get their bonus (conflict of interest)", "Shareholders manage the company"],
    correct: "Managers seek to increase sales to get their bonus (conflict of interest)",
    explanation: "Agency problems are conflicts of interest between agents (managers) and principals (shareholders)."
  },
  {
    id: 38,
    question: "Universities and elementary schools in Austria are mostly:",
    options: ["Private enterprise organizations", "Public organizations", "Non-profit private organizations", "Start-ups"],
    correct: "Public organizations",
    explanation: "They are typically state-funded/public organizations."
  },
  {
    id: 39,
    question: "What do all organizations have in common?",
    options: ["Objectives, People, Structure", "Objectives, Bureaucracy, R&D", "Management, Guidelines, Incentives", "People, Profit, Products"],
    correct: "Objectives, People, Structure",
    explanation: "The fundamental elements of any organization are People, Objectives (Goals), and Structure."
  },
  {
    id: 40,
    question: "True or False: Horizontal differentiation is supposed to enable people to specialize and become more productive.",
    options: ["True", "False"],
    correct: "True",
    explanation: "It assigns specific job functions to specific people."
  },
  {
    id: 41,
    question: "True or False: In a centralized organization, the authority to take important decisions is delegated to managers at all levels.",
    options: ["True", "False"],
    correct: "False",
    explanation: "In centralized orgs, decisions are handled strictly at the top."
  },
  {
    id: 42,
    question: "True or False: Strategy doesn't include a USP (Unique Selling Point).",
    options: ["True", "False"],
    correct: "False",
    explanation: "A strategy usually includes a USP to define the unique position in the market."
  },
  {
    id: 43,
    question: "True or False: A strategy includes a vision of where a company wants to be in 5-10 years.",
    options: ["True", "False"],
    correct: "True",
    explanation: "Strategy is about long-term goals and vision."
  },
  {
    id: 44,
    question: "True or False: Mintzberg's 5 Ps of strategy are: Plan, Ploy, Pattern, Position, Principles.",
    options: ["True", "False"],
    correct: "False",
    explanation: "The 5th P is Perspective, not Principles."
  },
  {
    id: 45,
    question: "True or False: Companies risk 'being stuck in the middle' if they try to serve everybody by being a cost leader AND offering premium products.",
    options: ["True", "False"],
    correct: "True",
    explanation: "Porter argues that failing to choose a generic strategy leads to being stuck in the middle with no advantage."
  },
  {
    id: 46,
    question: "True or False: A vision and a mission are the same thing.",
    options: ["True", "False"],
    correct: "False",
    explanation: "Mission defines the business/objectives; Vision describes the desired future position."
  },
  {
    id: 47,
    question: "According to Ansoff, companies that operate in a saturated market will likely NOT choose which option?",
    options: ["Market penetration", "New product development", "Diversification", "Market development"],
    correct: "Market penetration",
    explanation: "In a saturated market, trying to sell more of the same product to the same people (Penetration) is the least effective/likely strategy."
  },
  {
    id: 48,
    question: "A 'first-mover' strategy involves:",
    options: ["Waiting for competitors to test the market", "Launching first to gain competitive advantage and brand recognition", "Copying the market leader", "Focusing only on cost reduction"],
    correct: "Launching first to gain competitive advantage and brand recognition",
    explanation: "First movers gain advantage by setting standards and building loyalty before competitors arrive."
  }
];