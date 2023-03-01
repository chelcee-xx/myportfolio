import React from 'react'

export default function Card(props) {
  return (
    <div>
     <div className="card drop-shadow-lg w-[34rem] bg-light border-1 border-gray-200 shadow-gray-200 p-5">
        <div>
            <h1>{props.title}</h1>
            <p>{props.date}</p>
            <p>{props.desc}</p>
        </div>
    </div>
    </div>
  )
}
