import {FaTimes} from 'react-icons/fa';

export default function Task ({task, onDelete}) {
    return (
        <div>
            <h3 className="flex flex-row justify-between">
                {task.title} 
                <FaTimes className="text-red-500 cursor-pointer" 
                    onClick={() => onDelete(task.id)}
                /> 
            </h3>
            <p>{task.day}</p>
        </div>
    )
}
