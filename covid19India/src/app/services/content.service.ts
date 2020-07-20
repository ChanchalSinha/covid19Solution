import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  map = new Map<string, string>();  
  constructor(private http: HttpClient) {
    this.map.set('AN', 'Andaman and Nicobar Islands');
    this.map.set('AP', 'Andhra Pradesh');
    this.map.set('AR', 'Arunachal Pradesh');
    this.map.set('AS', 'Assam');
    this.map.set('BR', 'Bihar');
    this.map.set('CH', 'Chandigarh');
    this.map.set('CT', 'Chhattisgarh');
    this.map.set('DL', 'Delhi');
    this.map.set('DN', 'Dadra and Nagar Haveli and Daman and Diu');
    this.map.set('GA', 'Goa');
    this.map.set('GJ', 'Gujarat');
    this.map.set('HP', 'Himachal Pradesh');
    this.map.set('HR', 'Haryana');
    this.map.set('JH', 'Jharkhand');
    this.map.set('JK', 'Jammu and Kashmir');
    this.map.set('KA', 'Karnataka');
    this.map.set('KL', 'Kerala');
    this.map.set('LA', 'Ladakh');
    this.map.set('MH', 'Maharashtra');
    this.map.set('ML', 'Meghalaya');
    this.map.set('MN', 'Manipur');
    this.map.set('MP', 'Madhya Pradesh');
    this.map.set('MZ', 'Mizoram');
    this.map.set('NL', 'Nagaland');
    this.map.set('OR', 'Odisha');
    this.map.set('PB', 'Punjab');
    this.map.set('PY', 'Puducherry');
    this.map.set('RJ', 'Rajasthan');
    this.map.set('SK', 'Sikkim');
    this.map.set('TG', 'Telangana');
    this.map.set('TN', 'Tamil Nadu');
    this.map.set('TR', 'Tripura');
    this.map.set('TT', 'India');
    this.map.set('UN', 'Unassigned');
    this.map.set('UP', 'Uttar Pradesh');
    this.map.set('UT', 'Uttarakhand');
    this.map.set('WB', 'West Bengal');
   }

   public getContents(): Observable<any> {
     return this.http.get('https://api.covid19India.org/v4/min/data.min.json').pipe(
       catchError((err)=>{
         console.log('error caught in service');
         console.log(err);
         return throwError(err);        
       })
     )
   }

   public getCountryName(countryCode: string): String {
     return this.map.get(countryCode);
   }
}
