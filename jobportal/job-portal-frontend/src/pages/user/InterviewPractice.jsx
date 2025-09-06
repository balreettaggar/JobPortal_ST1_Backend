// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const InterviewPractice = () => {
//   const { category } = useParams();
//   const [questions, setQuestions] = useState([]);
//   const [currentQ, setCurrentQ] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [score, setScore] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/interview/questions/${category}`)
//       .then((res) => setQuestions(res.data))
//       .catch((err) => console.error("❌ Error fetching questions:", err));
//   }, [category]);

//   const handleOptionClick = (option) => {
//     setAnswers({ ...answers, [currentQ]: option });
//   };

//   const handleNext = () => {
//     if (currentQ < questions.length - 1) {
//       setCurrentQ(currentQ + 1);
//     }
//   };

//   const handleSubmit = async () => {
//     let calculatedScore = 0;
//     questions.forEach((q, idx) => {
//       if (answers[idx] === q.correctAnswer) calculatedScore++;
//     });
//     setScore(calculatedScore);

//     // Save result to MongoDB
//     await axios.post("http://localhost:5000/api/results", {
//       category,
//       answers,
//       score: calculatedScore,
//     });
//   };

//   if (!questions.length) return <p>Loading questions...</p>;

//   return (
//     <div className="practice-container">
//       <h2>{category} Interview Practice</h2>
//       {score === null ? (
//         <>
//           <div className="question-card">
//             <h3>
//               Q{currentQ + 1}: {questions[currentQ].question}
//             </h3>
//             <ul>
//               {questions[currentQ].options.map((opt, i) => (
//                 <li
//                   key={i}
//                   className={`option ${
//                     answers[currentQ] === opt ? "selected" : ""
//                   }`}
//                   onClick={() => handleOptionClick(opt)}
//                 >
//                   {opt}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="actions">
//             {currentQ < questions.length - 1 ? (
//               <button onClick={handleNext}>Next</button>
//             ) : (
//               <button onClick={handleSubmit}>Submit Answers</button>
//             )}
//           </div>
//         </>
//       ) : (
//         <div className="score-card">
//           <h2>
//             ✅ You scored {score} out of {questions.length}
//           </h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default InterviewPractice;





//Corrected code storing in mongoDB
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./InterviewPractice.css";

const InterviewPractice = () => {
  const location = useLocation();
  const { category } = location.state || { category: "DSA" };

  // Hardcoded question bank
const questionBank = {
  DSA: [
    {
      id: 1,
      question: "What is the time complexity of Binary Search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      correctAnswer: "O(log n)",
    },
    {
      id: 2,
      question: "Which data structure is used in BFS traversal?",
      options: ["Stack", "Queue", "Heap", "Graph"],
      correctAnswer: "Queue",
    },
    {
      id: 3,
      question: "What is the space complexity of Merge Sort?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctAnswer: "O(n)",
    },
    {
      id: 4,
      question: "Which data structure is ideal for implementing a Priority Queue?",
      options: ["Array", "Linked List", "Heap", "Stack"],
      correctAnswer: "Heap",
    },
    {
      id: 5,
      question: "Which algorithm is used to detect a cycle in a graph?",
      options: ["DFS", "BFS", "Dijkstra", "Kruskal"],
      correctAnswer: "DFS",
    },
  ],
  Aptitude: [
    {
      id: 6,
      question: "If a train travels 60 km in 1 hour, what is its speed in m/s?",
      options: ["16.6 m/s", "60 m/s", "100 m/s", "10 m/s"],
      correctAnswer: "16.6 m/s",
    },
    {
      id: 7,
      question: "What is 25% of 240?",
      options: ["50", "60", "65", "70"],
      correctAnswer: "60",
    },
    {
      id: 8,
      question: "A shopkeeper sold an article for ₹1200 with 20% profit. What was the cost price?",
      options: ["₹1000", "₹950", "₹1100", "₹1050"],
      correctAnswer: "₹1000",
    },
    {
      id: 9,
      question: "If a person can type 60 words in a minute, how many words can he type in 5 minutes?",
      options: ["300", "250", "360", "240"],
      correctAnswer: "300",
    },
    {
      id: 10,
      question: "Find the average of 10, 20, 30, 40, 50",
      options: ["25", "30", "35", "40"],
      correctAnswer: "30",
    },
  ],
  "System Design": [
    {
      id: 11,
      question: "Which database is best for storing hierarchical data?",
      options: ["Relational DB", "Graph DB", "Document DB", "Key-Value Store"],
      correctAnswer: "Graph DB",
    },
    {
      id: 12,
      question: "What does a Load Balancer do?",
      options: [
        "Stores data",
        "Balances user traffic across servers",
        "Compiles code",
        "Provides caching",
      ],
      correctAnswer: "Balances user traffic across servers",
    },
    {
      id: 13,
      question: "What is sharding in databases?",
      options: ["Vertical partitioning", "Horizontal partitioning", "Indexing", "Replication"],
      correctAnswer: "Horizontal partitioning",
    },
    {
      id: 14,
      question: "Explain eventual consistency.",
      options: [
        "All nodes always have same data",
        "Nodes may be temporarily inconsistent",
        "Data is never consistent",
        "Data is cached only",
      ],
      correctAnswer: "Nodes may be temporarily inconsistent",
    },
    {
      id: 15,
      question: "Which system design principle improves scalability?",
      options: ["Caching", "Single server", "Synchronous requests", "Hard coding values"],
      correctAnswer: "Caching",
    },
  ],
  Behavioral: [
    {
      id: 16,
      question: "How do you handle conflict in a team?",
      options: [
        "Ignore it",
        "Escalate to manager immediately",
        "Listen to both sides and resolve calmly",
        "Leave the team",
      ],
      correctAnswer: "Listen to both sides and resolve calmly",
    },
    {
      id: 17,
      question: "Describe a time when you faced a challenge at work.",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: "Option A",
    },
    {
      id: 18,
      question: "How do you prioritize tasks under pressure?",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: "Option B",
    },
    {
      id: 19,
      question: "How do you handle constructive feedback?",
      options: ["Ignore it", "Accept gracefully and improve", "Complain", "Blame others"],
      correctAnswer: "Accept gracefully and improve",
    },
    {
      id: 20,
      question: "Describe a situation where you worked effectively in a team.",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: "Option C",
    },
  ],
};


  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = questionBank[category] || [];

  const handleAnswer = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  // const handleSubmit = async () => {
  //   let correct = 0;
  //   questions.forEach((q) => {
  //     if (answers[q.id] === q.correctAnswer) correct++;
  //   });
  //   setScore(correct);

  //   // Save score to MongoDB via backend
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     try {
  //       await axios.post(
  //         "http://localhost:5001/api/scores",
  //         { category, score: correct, total: questions.length },
  //         { headers: { Authorization: `Bearer ${token}` } }
  //       );
  //     } catch (err) {
  //       console.error("Error saving score:", err);
  //     }
  //   }
  // };

// const handleSubmit = async () => {
//   let correct = 0;
//   questions.forEach((q) => {
//     if (answers[q.id] === q.correctAnswer) correct++;
//   });
//   setScore(correct);

//   // ✅ Get user info from localStorage
//   const user = JSON.parse(localStorage.getItem("user"));
//   console.log("Inside score function");
//   console.log(user);

//   try {
//     await axios.post("http://localhost:5001/api/scores", {
//       userId: user?._id,
//       name: user?.name,         // ✅ include name
//       email: user?.email,
//       category,
//       score: correct,
//       total: questions.length,
//     });
//   } catch (err) {
//     console.error("Error saving score:", err);
//   }
// };


const handleSubmit = async () => {
  let correct = 0;

  // ✅ Count correct answers
  questions.forEach((q) => {
    if (answers[q.id] === q.correctAnswer) correct++;
  });
  setScore(correct);

  // ✅ Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("Inside score function:");
  console.log("User from localStorage:", user);

  // ✅ Prepare JSON object to send
  const scoreData = {
    userId: user?._id,
    name: user?.name,
    email: user?.email,
    category,
    score: correct,
    total: questions.length,
  };

  // ✅ Log JSON object before sending
  console.log("Prepared score JSON object to send:");
  console.log(JSON.stringify(scoreData, null, 2)); // pretty-print

  try {
    // ✅ Send POST request
    const res = await axios.post(
      "http://localhost:5001/api/scores",
      scoreData
    );

    // ✅ Log response from backend
    console.log("Response from server:");
    console.log(res.data);
  } catch (err) {
    console.error("Error saving score:", err);
    if (err.response) {
      console.error("Error response data:", err.response.data);
    }
  }
};


  return (
    <div className="practice-container">
      <h2>{category} Practice</h2>

      {questions.map((q, idx) => (
        <div key={q.id} className="question-card">
          <p>
            {idx + 1}. {q.question}
          </p>
          {q.options.map((opt, i) => (
            <label key={i} className="option-label">
              <input
                type="radio"
                name={q.id}
                value={opt}
                checked={answers[q.id] === opt}
                onChange={() => handleAnswer(q.id, opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button className="submit-btn" onClick={handleSubmit}>
        Submit Answers
      </button>

      {score !== null && (
        <div className="score-box">
          ✅ You scored {score} out of {questions.length}
        </div>
      )}
    </div>
  );
};

export default InterviewPractice;
