type CaloriesInfoProps = {
  caloriesConsumed: number
  caloriesBurnt: number
}

const CaloriesInfo = ({caloriesConsumed, caloriesBurnt} : CaloriesInfoProps) => {
  return (
    <div>
      <p className="font-bold">
        Calories consumed: <span className="text-orange-600">{caloriesConsumed}</span>
      </p>
      <p className="font-bold">
        Calories burnt: <span className="text-blue-700">{caloriesBurnt}</span>
      </p>
      <p className="font-bold">Difference: <span>{caloriesConsumed - caloriesBurnt}</span></p>
    </div>
  )
}

export default CaloriesInfo
