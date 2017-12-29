import Question from './question'

class Game {
  constructor (questions) {
    this.questions = []
    this.generateQuestions(questions)
    this.score = 0
    this.indexNumber = 0
  }

  generateQuestions (questions) {
    questions.forEach(question => {
      this.questions.push(new Question(question))
    })
  }

  getQuestion () {
    return this.questions[this.indexNumber]
  }

  checkAnswer (ac) {
    console.log(ac);
    return ac === this.questions[this.indexNumber].correctAnswer
  }
}

export default Game
