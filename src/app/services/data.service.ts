import { Injectable } from '@angular/core';
    import { HttpClient } from '@angular/common/http';
    @Injectable({
    providedIn: 'root'
    })
    export class DataService {
    constructor(private http: HttpClient) { }
    getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/usersss')
    }
    getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
    }
    getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    }


    login(requsetBody) {
        return this.http.post('http://172.105.33.239:3300/api/auth/signin',requsetBody)
        }

       
    ct(requsetBody) {
        return this.http.post('http://172.105.33.239:3300/api/rooms/create',requsetBody)
        }

        getRoomList(requsetBody) {
            return this.http.post('http://172.105.33.239:3300/api/rooms/getUserRooms',requsetBody)

            //172.105.33.239
            }


         getRoom(requsetBody) {
               
                return this.http.post('http://172.105.33.239:3300/api/rooms/getUserRoom',requsetBody)
              
             
                }


            getJoinRoomURL(requsetBody) {
                return this.http.post('http://172.105.33.239:3300/api/rooms/joinRoomURL',requsetBody)
                }
                validateAccessCode(requsetBody) {
                    return this.http.post('http://172.105.33.239:3300/api/rooms/validateAccessCode',requsetBody)
                    }


                
    }

    