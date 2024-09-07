import React from 'react'
import {Table} from 'antd'

function MovieList() {
    const fakeMovies = [{
       key:1,
       poster:"Image1",
       description:"wolverin vs deadpool",
       duration:120,
       gener:"Action",
       language:"English",
       releaseDate: "2024-01-10",
       name:"wolverin vs deadpool"
    },
    {
        key:2,
        poster:"Image2",
        description:"Batman vs superman",
        duration:120,
        gener:"Action",
        language:"English",
        releaseDate: "2024-01-10",
        name:"Batman vs superman"
     }];
     const tableHeadings = [
        {title: "Poster", },
        {title:"Movie Name",
         dataIndex:"name"
        },
        {title:"Description",
         dataIndex:"description"
        },
        {title:"duration",
            dataIndex:"duration"
           },
           {title:"gener",
            dataIndex:"gener"
           },
           {title:"language",
            dataIndex:"language"
           },
           {title:"releaseDate",
            dataIndex:"releaseDate"
           }

     ]
  return (
    <>
    <div>
        
        <Table dataSource={fakeMovies} columns={tableHeadings}></Table>
        
    
    </div>
    
    </>
    
  )
}

export default MovieList