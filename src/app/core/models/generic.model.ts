import { Injectable } from '@angular/core';

import { Adapter } from '../adapter';

export class GenericModel {
  constructor(public id: string, public name: string, public date: Date) {}
}
@Injectable({
  providedIn: 'root'
})
export class GenericAdapter implements Adapter<GenericModel> {
  adapt(item: any): GenericModel {
    return new GenericModel(item.id, item.name, new Date(item.created));
  }
}
