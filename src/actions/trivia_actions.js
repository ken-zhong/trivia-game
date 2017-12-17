import Axios from 'axios'

export const RECEIVE_NEW_QUESTIONS = 'RECEIVE_NEW_QUESTIONS'

const receiveNewQuestions = questions => ({
  type: RECEIVE_NEW_QUESTIONS,
  questions
})

export const fetchNewQuestions = () => dispatch => {
  Axios.get('https://opentdb.com/api.php?amount=10&type=multiple')
  .then(res => dispatch(receiveNewQuestions(res.data.results)))
}
