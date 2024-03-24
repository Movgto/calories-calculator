import type { TActivity } from "../types"

export type ActivityActions = {
  type: 'add-activity',
  payload: {
    newActivity: TActivity
  }
}

export type ActivityState = {
  activities: TActivity[]
}

export const initialState : ActivityState = {
  activities: []
}

export const activityReducer = (
  state : ActivityState = initialState,
  action : ActivityActions
) => {
  switch(action.type) {
    case 'add-activity':
      return {
        ...state,
        activities: [...state.activities, action.payload.newActivity]
      }
    default: return state
  }
}