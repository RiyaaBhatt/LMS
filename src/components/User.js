import React from 'react'
import Header from './Header'
import SearchBooks from './SearchBooks'
import BookList from './BookList'
import UserProfile from './UserProfile'
import '../Assests/css/styles.css'
export default function User() {
  return (
    <div>
         <Header />
      <div className="container">
        <SearchBooks />
        <div className="content">
          <BookList />
          <UserProfile />
        </div>
      </div>
      
    </div>
  )
}
