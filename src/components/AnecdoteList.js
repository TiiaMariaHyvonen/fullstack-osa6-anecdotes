import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'

const Anecdotes = () => {

  const anecdotes = useSelector( state =>
    state.anecdotes.filter(
      anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  )

    const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id))
  }

  const sortedAnecdotes = (
    anecdotes.sort(
      (a1, a2) => (a1.votes < a2.votes) ? 1 : (a1.votes > a2.votes) ? -1 : 0
    )
  )

  return (
    <div>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Anecdotes