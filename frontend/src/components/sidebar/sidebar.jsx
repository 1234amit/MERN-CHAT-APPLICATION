import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
    return (
        <div className='border border-gray-300 rounded-lg w-[360px] p-4 flex flex-col'>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
        </div>
    )
}

export default Sidebar