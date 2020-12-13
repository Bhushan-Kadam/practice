import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// get the browser object
platformBrowserDynamic()

  // load the AppModule
  .bootstrapModule(AppModule)

  // catch all the errors and display them on to the console
  .catch(err => console.error(err));
