import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3000/`
});

// Get a list of quiz titles and IDs
export function getQuizHeaders() {
  return api.get(`api/quizzes`) 
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    });
}

// Get quiz data with quiz id
export function getQuiz(id) {
  return api.get(`api/quizzes/${id}`) 
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    });
}

// Get graded result data with quiz id and answers 
export function getResult(id, answers) {
  return api.post(`api/quizzes/${id}/attempt`, { answers })
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error)
    });
}