import React from "react";
import QuestionItem from './QuestionItem';

function QuestionList({questionList, handleDeletedQuiz, handleUpdatedQuiz}) { 
  
  if(!questionList) return <p> Loading ...</p>

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionList.map((question) => <QuestionItem key={question.id} question={question} deleted={handleDeletedQuiz} updated={handleUpdatedQuiz}/>)}
      </ul>
    </section>
  );
}

export default QuestionList;
