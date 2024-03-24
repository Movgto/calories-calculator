import { useEffect, useMemo, useReducer, useState } from "react"
import type { TActivity } from "../types"
import { ActivityActions, ActivityState, activityReducer, initialState } from "../reducers/activityReducer"

export const useCalories = (state : ActivityState) => {
  // const initialState = () => {
  //   const fetchActivities = localStorage.getItem('activities')

  //   if (fetchActivities) {
  //     console.log(JSON.parse(fetchActivities))
  //     return JSON.parse(fetchActivities)
  //   } else return []
  // }

  // const [activities, setActivities] = useState<TActivity[]>(initialState())

  // useEffect(() => {
  //   localStorage.setItem('activities', JSON.stringify(activities))
  // }, [activities])

  // const addActivity = (activity : TActivity) => {
  //   setActivities([...activities, activity])
  // }

  const caloriesConsumed = useMemo(() => {
    return state.activities.reduce((total, item) => {
      if (item.category === 'food') {
        return total + item.calories
      } else {
        return total
      }
    }, 0)
  }, [state.activities])

  const caloriesBurnt = useMemo(() => {
    return state.activities.reduce((total, item) => {
      if (item.category === 'exercise') {
        return total + item.calories
      } else {
        return total
      }
    }, 0)
  }, [state.activities])

  // const resetActivities = () => setActivities([])

  return { caloriesConsumed, caloriesBurnt }
}