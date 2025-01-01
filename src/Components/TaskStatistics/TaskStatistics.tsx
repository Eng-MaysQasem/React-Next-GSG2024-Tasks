import React from 'react';
import { IItem } from '../../assets/Type.tsx';
import './TaskStatistics.css';

interface IProps {
  tasks: IItem[];
}

function TaskStatistics(props: IProps) {
  const completedTasks = props.tasks.filter((task) => task.IsComplete).length;
  const urgentTasks = props.tasks.filter((task) => task.IsUrgent).length;

  return (
    <div className='data-container'>
      <div>
        <b>{props.tasks.length}</b>
        <span>Created Tasks</span>
      </div>
      <div>
        <b>{completedTasks}</b>
        <span>Completed Tasks</span>
      </div>
      <div>
        <b>{urgentTasks}</b>
        <span>Urgent Tasks</span>
      </div>
    </div>
  );
}

export default TaskStatistics;
