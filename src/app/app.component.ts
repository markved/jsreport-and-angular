import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json'
//   })
// };
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.post("http://localhost:5488/api/report",
      {
        //All Inline example
        //"template": { "content" : "Hello world", "recipe" : "html", "engine":"handlebars" },
        //Using a JS Report template created in Studio
        "template": { "shortid": "rkPMUt4BE" },
        //OPTIONAL
        "data": {
          "to": "Ved Mishra",
          "from": "David Mann",
          "price": 800
        },
        "options": { "timeout": 60000 }
      },
      //Other options are json (the default), arraybuffer and blob
      { responseType: 'blob' }
    ).subscribe(
      data => { console.log("POST Request is successful ", data); },
      error => { console.log("Error", error); }
    );
  }
}
