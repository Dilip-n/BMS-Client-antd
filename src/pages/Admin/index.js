import React, { Children } from 'react'
import {Tabs} from 'antd'
import MovieList from './MovieListComponent';
import TheaterTable from './TheaterTable';

function Admin() {
    const tabItems = [
        {key:"1", label:"Movies", children: <MovieList/>},
        {key:"2", label:"Theater", children: <TheaterTable/>},
    ]
  return (
    <div>
        <h1> Admin Page</h1>
        <Tabs items={tabItems}></Tabs>
    </div>
  )
}

export default Admin