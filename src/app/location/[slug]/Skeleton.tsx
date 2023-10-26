import React from 'react'

const skeleton = (): React.ReactElement => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-5 my-3">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-md bg-slate-700 h-40 w-40"></div>
      <div className="flex-1 space-y-6 py-1">
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-4 bg-slate-700 rounded col-span-1"></div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="h-16 bg-slate-700 rounded col-span-2"></div>
            <div className="h-16 bg-slate-700 rounded col-span-1"></div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <div className="h-8 bg-slate-700 rounded col-span-2"></div>
            <div className="h-8 bg-slate-700 rounded col-span-1"></div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default skeleton
