import React from 'react'

const year=new Date().getFullYear();

export default function Footer() {
  return (
    <footer className=' py-5 text-sec1 mt-auto'>
        <p>copyright&copy;{year}</p>
    </footer>
  )
}
