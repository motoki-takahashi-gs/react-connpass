import React from 'react';
import Axios from 'axios';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Eventlist from './components/Eventlist';
import Button from 'react-bootstrap/Button';
import LikedList from './components/Likedlist';

function App() {

  const languages = ['JavaScript', 'PHP', 'Python', 'Ruby', 'React',
    'Vue', 'Angular', 'Swift', 'Laravel'];

  const getDataFromAPI = async keyword => {

    const jsonpAdapter = require('axios-jsonp');

    const requestURL = 'https://connpass.com/api/v1/event/';
    const result = await Axios({
      url: `${requestURL}?keyword=${keyword}&count=10&order=1`,
      adapter: jsonpAdapter
    });
    return result;
  }

  return (
    <BrowserRouter>
      <div>
        <h1>勉強会サーチ</h1>
        <div className='menu'>
          <ul>
            <li>
              <Link to='/javascript'>
                <Button variant="outline-success">{languages[0]}</Button>
              </Link>
            </li>
            <li><Link to='/php'><Button variant="outline-primary">{languages[1]}</Button></Link></li>
            <li><Link to='/python'><Button variant="outline-info">{languages[2]}</Button></Link></li>
            <li><Link to='/ruby'><Button variant="outline-secondary">{languages[3]}</Button></Link></li>
            <li><Link to='/react'><Button variant="outline-warning">{languages[4]}</Button></Link></li>
            <li><Link to='/vue'><Button variant="outline-danger">{languages[5]}</Button></Link></li>
            <li><Link to='/angular'><Button variant="outline-dark">{languages[6]}</Button></Link></li>
            <li><Link to='/swift'><Button variant="outline-success">{languages[7]}</Button></Link></li>
            <li><Link to='/laravel'><Button variant="outline-primary">{languages[8]}</Button></Link></li>
          </ul>
        </div>
        <div className='go-to-liked'>
          <Link to='/likedlist'><Button variant="success">「いいね」されたイベント</Button></Link>
        </div>
        <Route path='/javascript'
          render={
            props =>
              <Eventlist
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route path='/php'
          render={
            props =>
              <Eventlist
                language={languages[1]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route path='/python'
          render={
            props =>
              <Eventlist
                language={languages[2]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route path='/ruby'
          render={
            props =>
              <Eventlist
                language={languages[3]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route path='/react'
          render={
            props =>
              <Eventlist
                language={languages[4]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route path='/vue'
          render={
            props =>
              <Eventlist
                language={languages[5]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route path='/angular'
          render={
            props =>
              <Eventlist
                language={languages[6]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route path='/swift'
          render={
            props =>
              <Eventlist
                language={languages[7]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route path='/laravel'
          render={
            props =>
              <Eventlist
                language={languages[8]}
                getData={keyword => getDataFromAPI(keyword)}
              />
          }
        />
        <Route path='/likedlist'
          render={
            props =>
              <LikedList />
          }
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
