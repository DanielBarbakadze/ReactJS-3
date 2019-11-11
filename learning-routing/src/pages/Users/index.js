import React, { useState, useEffect } from 'react';
import User from './User';
import randomName from 'random-name';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

function Users({history}) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        let userArray = [];
        for (let i=0;i<40;i++){
            userArray.push({
              id: i,
              name: randomName.first()
            })
        }
        // console.log(userArray);
        setUsers(userArray);
    }, []);

    function handleUserClick(user) {
      history.push(`/users/${user.id}`)
      // console.log(user);
    }

    return  <div style={{display: 'flex'}}>
              <div style={{flex: 1}}>
                <ul>
                    {/* <li>
                      <Link to="/users/info">Info</Link>
                    </li> */}
                    {users.map(user =>
                        <li key={user.id} onClick={() => handleUserClick(user)}>
                          {user.name}
                        </li>
                    )}
                  </ul>
              </div>
              <div style={{flex: 1}}>
                <Switch>
                  {/* <Route path="/users/info">
                    {console.log('works')}
                  </Route> */}
                  <Route path="/users/:id">
                    <User users = {users} />
                  </Route>
                </Switch>
              </div>

              </div>;
  }

  export default withRouter(Users) 