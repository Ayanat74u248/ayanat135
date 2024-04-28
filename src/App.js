import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Profile from './Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Friends from './Friends';
import data from './data';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Main posts={data.PostPage.posts}></Main>}></Route>
          <Route path='/profile' element={<Profile profile={data.ProfilePage}></Profile>}></Route>
          <Route path='/friends' element={<Friends friends={data.FriendsPage.friends}></Friends>}></Route>
        </Routes>
        <Footer></Footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
