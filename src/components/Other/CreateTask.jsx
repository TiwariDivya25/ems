import React from 'react'

const CreateTask = () => {
  return (
    <div>
      <div className="mt-12 rounded-md shadow-lg p-8 bg-gray-800">
        <h2 className="text-2xl font-semibold mb-6">Create Task</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="taskTitle" className="block text-sm font-medium text-gray-300">Task Title</label>
            <input
              type="text"
              id="taskTitle"
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              placeholder="Make A UI design"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
            <textarea
              id="description"
              rows="3"
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              placeholder="Detailed description of task (Max 500 word)"
            ></textarea>
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-300">Date</label>
            <div className="relative">
              <input
                type="text"
                id="date"
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
                placeholder="dd/mm/yyyy"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-gray-500">
                  <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25a1 1 0 011 1v13a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h.25V2.75a.75.75 0 01.75-.75zm-.75 3h9v11H5V5zm-3 2a1 1 0 011-1h12a1 1 0 011 1v9a1 1 0 01-1 1H3a1 1 0 01-1-1V7z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="assignTo" className="block text-sm font-medium text-gray-300">Assign To</label>
            <input
              type="text"
              id="assignTo"
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300">Category</label>
            <input
              type="text"
              id="category"
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-700 text-white shadow-sm focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm"
              placeholder="Design, Development, etc..."
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full rounded-md bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTask
