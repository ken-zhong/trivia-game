import Axios from 'axios'

export const RECEIVE_NEW_QUESTIONS = 'RECEIVE_NEW_QUESTIONS'

const receiveNewQuestions = questions => ({
  type: RECEIVE_NEW_QUESTIONS,
  questions
})

export const fetchNewQuestions = () => dispatch => {

  // 10 mc vg questions
  // https://opentdb.com/api.php?amount=10&category=15&type=multiple

  // 10 random mc questions
  // https://opentdb.com/api.php?amount=10&type=multiple

  return Axios.get('https://opentdb.com/api.php?amount=10&category=15&type=multiple')
  .then(res => dispatch(receiveNewQuestions(res.data.results)))
}
