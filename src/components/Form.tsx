import { Dispatch, useState } from "react"
import { categories } from "../db/db"
// import type { TActivity } from "../types"
import { generateId } from "../helpers"
import { ActivityActions } from "../reducers/activityReducer"

type FormProps = {
  dispatch: Dispatch<ActivityActions>
}

const Form = ({ dispatch } : FormProps) => {
  const [activity, setActivity] = useState({
    category: '',
    name: '',
    calories: 0, 
  })

  const [error, setError] = useState('')

  const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {category, name, calories} = activity
    if (category === '' || name === '' || calories <= 0) {
      setError('All fields must be filled')
      return
    }

    setError('')

    const newActivity = {
      ...activity,
      id: generateId()
    }

    dispatch({
      type: 'add-activity',
      payload: { newActivity }
    })

    setActivity({
      category: '',
      name: '',
      calories: 0
    })
  }

  return (
    <form
      className="bg-emerald-700 flex-1 flex flex-col gap-4 rounded-lg
                  p-4 font-bold text-xl shadow-lg"
      onSubmit={handleSubmit}
    >
      {error.length > 0 && (<p className="text-center text-white bg-red-500 rounded-md">{error}</p>)}
      <div className="flex flex-col gap-3">
        <label className="text-center text-white" htmlFor="category">Category</label>
        <select
          id='category'
          className="p-1 rounded-lg text-center text-lg"
          value={activity.category}
          onChange={(e) => setActivity({
            ...activity,
            category: e.target.value
          })}
        >
          <option selected disabled value=''>-- Select Category --</option>
          {categories.map((item) => (
            <option id={item.id} value={item.value}>{item.name}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-3">
        <label className="text-center text-white">Activity</label>
        <input
          type="text"
          id="activity"
          placeholder="e.g: Burger, Pizza, Running, Walking..."
          className="p-1 rounded-lg text-center text-lg"
          value={activity.name}
          onChange={e => setActivity({
            ...activity,
            name: e.target.value
          })}
        />
      </div>
      <div className="flex flex-col gap-3">
        <label className="text-center text-white">Calories</label>
        <input
          type="number"
          id="calories"
          placeholder="Calories"
          className="p-1 rounded-lg text-center text-lg"
          value={activity.calories}
          min="0"
          onChange={e => setActivity({
            ...activity,
            calories: e.target.valueAsNumber
          })}
        />
      </div>
      <button
        type="submit"
        className="bg-teal-950 hover:bg-teal-600 text-white rounded-md py-2"
      >
        Add activity or food
      </button>
    </form>
  )
}

export default Form
