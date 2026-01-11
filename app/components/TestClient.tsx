'use client'

import React, { useState } from 'react'
import { useAppContext } from '../context/test'
import TestServer from './TestServer'

const TestClient = () => {
    const [st, setSt] = useState(0)
    const { count, increment } = useAppContext()

    return (
        <>
            <div>TestClient {st} <button onClick={() => setSt(st + 1)}>++</button></div>

            <div className="bg-green-300 py-34">
                <div>TestClient {count} <button onClick={increment}>++</button></div>
        <TestServer />
            </div>
        </>
    )
}

export default TestClient