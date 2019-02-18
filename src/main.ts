import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const jsreport = require('jsreport-browser-client-dist/jsreport');
//Cloud server URL can be used as well
jsreport.serverUrl = "http://localhost:5488";
//console.log(jsreport.render);
var request = {
  //All inline example
  //template: { content: 'qordu', engine: 'none', recipe: 'chrome-pdf'},
  //Using a JS Report template created in Studio
  "template": { "shortid": "rkPMUt4BE", engine:"handlebars", recipe: "chrome-pdf" },
  "data": {
    "to": "Ved Mishra",
    "from": "David Mann",
    "price": 500
  }
};
jsreport.render('_blank', request);

//display report in placeholder with id reportPlaceholder
//jsreport.render('reportPlaceholder', request);

//display report in placeholder element
//jsreport.render(document.getElementById('reportPlaceholder'), request);

//open download dialog for report
//jsreport.download('myReport.pdf', request);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
