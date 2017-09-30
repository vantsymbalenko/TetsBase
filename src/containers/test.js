import React, { Component } from 'react';
import Quiz from '../components/Test/Quiz';
import Result from '../components/Test/Result';
import jsonData from '../json/file.json';

 export default class test extends Component{
     constructor(props) {
         super(props);
         this.state = {
             counter: 0,
             questionId: 1,
             question: '',
             answerOptions: [],
             answer: '',
             answersCount: 0,
             result: ''
         };

         this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
     }
     //
     componentWillMount() {
         const categoryId = +this.props.match.params.categoryId;
         const testId = +this.props.match.params.testId;
         const testTitle= jsonData.categories[categoryId][testId][0];
         this.quizQuestions = jsonData.categories[categoryId][testId][1];
         // this.quizQuestions = JSON.parse(this.quizQuestions);
         console.log(this.quizQuestions);
         console.log(typeof this.quizQuestions[0].answers[0].type);
         const shuffledAnswerOptions = this.quizQuestions.map((question) => this.shuffleArray(question.answers));
         this.setState({
             title: testTitle,
             question: this.quizQuestions[0].question,
             answerOptions: shuffledAnswerOptions[0]
         });
     }

     shuffleArray(array) {
         let currentIndex = array.length, temporaryValue, randomIndex;

         // While there remain elements to shuffle...
         while (0 !== currentIndex) {

             // Pick a remaining element...
             randomIndex = Math.floor(Math.random() * currentIndex);
             currentIndex -= 1;

             // And swap it with the current element.
             temporaryValue = array[currentIndex];
             array[currentIndex] = array[randomIndex];
             array[randomIndex] = temporaryValue;
         }

         return array;
     };

     handleAnswerSelected(event) {
         this.setUserAnswer(event.currentTarget.value);

         if (this.state.questionId < this.quizQuestions.length) {
             setTimeout(() => this.setNextQuestion(), 300);
         } else {
             setTimeout(() => this.setResults(this.getResults()), 300);
         }
     }

     setUserAnswer(answer) {
         if(JSON.parse(answer)){
             this.setState({
                 answersCount: ++this.state.answersCount,
                 answer: answer
             });
         }
     }

     setNextQuestion() {
         const counter = this.state.counter + 1;
         const questionId = this.state.questionId + 1;

         this.setState({
             counter: counter,
             questionId: questionId,
             question: this.quizQuestions[counter].question,
             answerOptions: this.quizQuestions[counter].answers,
             answer: ''
         });
     }

     getResults() {
         return this.state.answersCount;
     }

     setResults(result) {
         this.setState({result: result});
     }

     renderQuiz() {
         return (
             <Quiz
                 answer={this.state.answer}
                 answerOptions={this.state.answerOptions}
                 questionId={this.state.questionId}
                 question={this.state.question}
                 questionTotal={this.quizQuestions.length}
                 onAnswerSelected={this.handleAnswerSelected}
             />
         );
     }

     renderResult() {
         return (
             <Result quizResult={this.state.result} />
         );
     }

     render() {
         return (
             <div className="App">
                 <div className="App-header">
                     <h2>React Quiz</h2>
                 </div>
                 {this.state.result !== "" ? this.renderResult() : this.renderQuiz()}
             </div>
         );
     }

 }