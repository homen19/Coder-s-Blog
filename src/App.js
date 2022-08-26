import React from 'react';
import { Main } from './Page/mainPage/Main';
import {Post} from '../src/Page/mainPage/Components/ViewPart/Components/Posts/Post';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { InsertPost } from './Page/mainPage/Components/ViewPart/Components/InsertPost/InsertPost';
import { MyBlogs } from './Page/mainPage/Components/ViewPart/Components/MyBlogs/MyBlogs';
import { ErroPage } from './Page/mainPage/Components/ViewPart/Components/ErrorPage/ErroPage';

function App() {
 

  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<Main />}>
          <Route path='/' element={<Post />  } />
          <Route path='/post' element={<InsertPost /> } />
          <Route path='/myblogs' element={<MyBlogs /> } />

        </Route>
        <Route path='*' element={<ErroPage />} />
      </Routes>
    </BrowserRouter>
    
    
    // <>
    //   <div>
    //     <Main />
    //   </div>

      
    // </>
  );


}



export default App;
