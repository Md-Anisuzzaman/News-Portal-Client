import React from 'react'
import { Outlet } from 'react-router-dom'

const NewsLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default NewsLayout