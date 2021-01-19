import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  // url="http://localhost:3000/restaurants";
  // regUrl="http://localhost:3000/users";
  constructor(private http:HttpClient) { }

  getList()
  {
    return this.http.get('/api/restaurants');
  }
  saveResto(data)
  {
    return this.http.post('/api/restaurants', data)
  }
  deleteResto(id){
    return this.http.delete(`${'/api/restaurants'}/${id}`)
  }
   getCurrentResto(id){
    return this.http.get(`${'/api/restaurants'}/${id}`)
  }
  updateResto(id, data){
    return this.http.put(`${'/api/restaurants'}/${id}`, data)
  }
  createUser(data){
    return this.http.post('/api/users',  data)
  }
  getUsers()
  {
    return this.http.get('/api/users');
  }
}
