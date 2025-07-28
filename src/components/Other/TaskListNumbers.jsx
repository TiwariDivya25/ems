import React from 'react'

const TaskListNumbers = () => {
  return (
    <div id="tasklistnumbers" className='flex mt-10 justify-between gap-5 screen overflow-x-auto'>
        <div className='rounded-xl w-[45%] p-10 bg-red-400'>
            <h2 className='font-semibold text-3xl'>0</h2>
            <h3 className='text-xl font-medium'>new tasks</h3>
        </div>

        <div className='rounded-xl w-[45%] p-10 bg-emerald-400'>
            <h2 className='font-semibold text-3xl'>0</h2>
            <h3 className='text-xl font-medium'>new tasks</h3>
        </div>

        <div className='rounded-xl w-[45%] p-10 bg-blue-400'>
            <h2 className='font-semibold text-3xl'>0</h2>
            <h3 className='text-xl font-medium'>new tasks</h3>
        </div>

        <div className='rounded-xl w-[45%] p-10 bg-yellow-500'>
            <h2 className='font-semibold text-3xl'>0</h2>
            <h3 className='text-xl font-medium'>new tasks</h3>
        </div>
    </div>

    
  )
}

export default TaskListNumbers
