import Task from './Task'

export default function Tasks ({tasks, onDelete}) {
    return (
        <ul className="bg-gray-300">
            {tasks.map((task)=>
            <li key={task.id}>
                <Task className="bg-gray-300 p-2 font-mono" 
                    task={task}
                    onDelete={onDelete}
                />

            </li>
            )}
        </ul>
    )
}
