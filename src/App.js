import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
// import { db } from './db'
import { MyContext } from './context'
import './App.scss'
import Modal from './pages/Modal'
import Main from './pages/Main'
import NotFoundPage from './pages/NotFoundPage'
import Layout from './components/Layout'

const LOCAL_STORAGE_KEY = 'my-react-todo-list'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageData) {
      setData(storageData)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: new Date().toISOString(),
        text: userInput,
        done: false,
      }
      setData([...data, newItem])
    }
  }

  const removeTask = (id) => {
    setData([...data.filter((item) => item.id !== id)])
  }

  const toggleTask = (id) => {
    setData(
      data.map((item) => {
        return item.id === id ? { ...item, done: !item.done } : { ...item }
      })
    )
  }

  const editTask = (id) => {
    console.log('edited')
  }

  return (
    <MyContext.Provider value={{ data, addTask, removeTask, toggleTask, editTask }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />}></Route>
            <Route path="modal" element={<Modal />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Route>
        </Routes>
      </div>
    </MyContext.Provider>
  )
}

export default App
