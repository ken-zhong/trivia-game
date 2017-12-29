class Question {
  constructor (questionJSON) {
    this.questionText = questionJSON.question
    this.correctAnswer = questionJSON.correct_answer
    this.wrongAnswers = questionJSON.incorrect_answers
    this.answerChoices = this.shuffleArray(this.wrongAnswers.concat(this.correctAnswer))
  }

  isCorrectAnswer (answer) {
    return this.correctAnswer === answer
  }

  shuffleArray (array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }
}

export default Question
