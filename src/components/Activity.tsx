import type { TActivity } from "../types"

type ActivityProps = {
  activity: TActivity
}

const Activity = ({ activity } : ActivityProps) => {
  const { calories, category, name } = activity
  const setColor = () => {
    return category === 'food' ? '-orange-600' : '-blue-700'
  }

  const setSign = () => {
    return category === 'food' ? '+' : '-'
  }
  return (
    <div className={"flex items-center justify-between border-l-4 p-2 bg-slate-100 shadow-md rounded-md" + " border" + setColor()}>
      <div>
        <p className={`text${setColor()}`}>{category.toUpperCase()}</p>
        <p className="font-bold">{name}</p>
      </div>
      <div>
        <p className={"font-bold text" + setColor()}>{setSign()}{calories}</p>
      </div>
    </div>
  )
}

export default Activity