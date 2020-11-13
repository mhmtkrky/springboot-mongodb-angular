import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationEntity } from '../model/application.entity';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  url = 'http://localhost:8002/api/application/';

  constructor(private readonly httpClient: HttpClient) { }

  public getList(): Observable<ApplicationEntity[]> {
    return this.httpClient.get<ApplicationEntity[]>(this.url );
  }

  public getById(id: number): Observable<ApplicationEntity> {
    return this.httpClient.get<ApplicationEntity>(this.url + id);
  }

  public create(model: ApplicationEntity): Observable<ApplicationEntity> {
    return this.httpClient.post<ApplicationEntity>(this.url, model);
  }

  public update(model: ApplicationEntity): Observable<ApplicationEntity> {
    return this.httpClient.put<ApplicationEntity>(this.url, model);
  }

  public delete(id: number): any {
    return this.httpClient.delete<ApplicationEntity>(this.url + id);
  }
}
