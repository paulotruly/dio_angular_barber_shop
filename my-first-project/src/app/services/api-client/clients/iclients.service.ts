import { Observable } from "rxjs";
import { DetailClientResponse, ListClientResponse, SaveClientRequest, SaveClientResponse, UpdateClientRequest } from "./clients.models";

export interface IClientService {
  save(request: SaveClientRequest): Observable<SaveClientResponse>
  update(id: number, request: UpdateClientRequest): Observable<SaveClientResponse>
  delete(id: number): Observable<void>
  list(): Observable<ListClientResponse[]>
  findById(id: number): Observable<DetailClientResponse>
}