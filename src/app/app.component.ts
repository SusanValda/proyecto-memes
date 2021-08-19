import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meme } from './meme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cargar memes!';

  mms:Meme[]=[];

  constructor(private http:HttpClient){}

  onSave():void{
    this.http.get<Meme>("https://api.imgflip.com/get_memes").subscribe(resp=>{
      this.mms = resp.data.memes;
    });
  }
}
