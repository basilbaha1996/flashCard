
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <FlashCard />
    </div>
  );
}

const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    id: 2,
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare"
  },
  {
    id: 3,
    question: "What is the powerhouse of the cell?",
    answer: "Mitochondria"
  },
  {
    id: 4,
    question: "What is the chemical symbol for water?",
    answer: "H2O"
  },
  {
    id: 5,
    question: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci"
  },
  {
    id: 6,
    question: "What is the tallest mountain in the world?",
    answer: "Mount Everest"
  }
];

function FlashCard () {

  const [selectedId, setSelectedId] = useState(null);
  console.log(selectedId)

  const handelClick = (id)=> {
    setSelectedId(id !== selectedId ? id : null)
  }
 

  return ( 
  <div className='flashcard'>
    {questions.map((question)=> (
    <div onClick={()=>handelClick(question.id)} key={question.id} className={question.id === selectedId? 'selected' : ""}>
      <p>{question.id === selectedId ? question.answer : question.question}</p>
    </div>
     ))}
  </div>
  );
}


export default App;
