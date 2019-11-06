import React, { useState, useEffect } from 'react';
import User from './User';
import randomName from 'random-name';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let userArray = [];
        for (let i=0;i<40;i++){
            userArray.push({
              id: i,
              name: randomName.first()
            })
        }
        console.log(userArray);
        setUsers(userArray);
    }, []);

    function handleUserClick(user) {
      console.log(user);
    }

    return  <div>
              <ul>
                  <li>
                    <Link to="/users/profile">Profile</Link>
                  </li>
                  <li>
                    <Link to="/users/info">Info</Link>
                  </li>
                  {users.map(user =>
                      <li key={user.id} onClick={() => handleUserClick(user)}>
                        {user.name}
                      </li>
                  )}
                </ul>

              <Switch>
                <Route path="/users/:id">
                  <User/>
                </Route>
              </Switch>

              </div>;
  }