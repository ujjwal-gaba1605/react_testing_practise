import { Link } from "react-router-dom"

function Footer({numberOfIncompleteTasks}) {
    return (
        <div className="todo-footer">
            <p>{numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left</p>
            {/*<Link to="/followers">Followers</Link>*/}
        </div>
    )
}

export default Footer