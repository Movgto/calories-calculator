import Form from "./components/Form"
import Activity from "./components/Activity"
// import { useActivities } from "./hooks/useActivities"
import Header from "./components/Header"
import CaloriesInfo from "./components/CaloriesInfo"
import { useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activityReducer"
import { useCalories } from "./hooks/useCalories"

function App() {

  // const { activities, addActivity, caloriesConsumed,
  //         caloriesBurnt, resetActivities } = useActivities()
  const [state, dispatch] = useReducer(activityReducer, initialState)

  const { caloriesBurnt, caloriesConsumed } = useCalories(state)



  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto my-6">
        <Form dispatch={dispatch} />
        <div className="flex-1 flex flex-col p-5 justify-between gap-4">
          <CaloriesInfo caloriesBurnt={caloriesBurnt} caloriesConsumed={caloriesConsumed} />
          <button
            className="bg-yellow-700 text-white font-bold text-xl
                      rounded-md hover:bg-yellow-600"
            //onClick={resetActivities}
          >
            Reset
          </button>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-5 flex flex-col gap-4 mb-5">
        {state.activities.map(act => (
          <Activity activity={act} key={act.id} />
        ))}
      </main>
    </>
  )
}

export default App
