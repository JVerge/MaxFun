import { Injectable } from '@angular/core';
import { grupUID } from '../models/declaracions-variables/declaracions-variables';

@Injectable({
  providedIn: 'root'
})
export class ValorsVariablesService {

  constructor() { }

  grupUID: string = '';

  setGrupUID(grupUID: string) {
    this.grupUID = grupUID;  
  }

  getgrupUID() {
    return this.grupUID;
  }
}
