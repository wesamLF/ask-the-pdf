import React from 'react'

const Loading = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-8 w-full h-full'>
            <div className="h-24 w-24 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <span className=' text-title font-semibold text-primary'>Generating Questions...</span>

        </div>
    )
}

export default Loading