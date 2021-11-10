import { Component } from 'react';

class List extends Component {
   
    // constructor (){

    // }

    // atributo de la clase
    // state = {
    //     users: [
    //     {
    //         "email": "summer32@yahoo.com",
    //         "firstName": "female",
    //         "id": "spring-wave",
    //         "last_login": {
    //           "date_time": "Wed Apr 28 21:21:11 UTC 2049",
    //           "ip4": "179.8.249.58"
    //         }
    //       }


    // ]

    // }
   
    render() { 

            const users = [
                {
                            "email": "summer32@yahoo.com",
                            "firstName": "Laura",
                            "id": "spring-wave",
                            "last_login": {
                              "date_time": "Wed Apr 28 21:21:11 UTC 2049",
                              "ip4": "179.8.249.58"
                            }
                }
            ]




        return <div>

            {/* <p>{this.state.users[0].firstName}</p> */}



            <ul>
               {users.map( user => 

                    {const {firstName, id, email, last_login: login} = user;

                    return (<li
                        
                        key={id}
                        
                        >{firstName} {email} {login.date_time}</li>)
                    }
                )
                }
            </ul>



        </div>;
    }
}
 
export default List;