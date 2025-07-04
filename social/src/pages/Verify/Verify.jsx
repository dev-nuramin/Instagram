import React from 'react'
import './Verify.scss'
import { useParams } from 'react-router-dom'
const Verify = () => {
  const params = useParams()
  console.log(params)
  return (
    <>
      <h1>Verify your account</h1>
    </>
  )
}

export default Verify
