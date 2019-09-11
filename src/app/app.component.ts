import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Modeler from 'dmn-js/lib/Modeler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dmn-sample';
  public viewer: any;
  constructor(private http: HttpClient) {
    this.http.get('../assets/val.xml', { responseType: 'text' }).subscribe(x => {
      var xml = x; // my DMN 1.1 xml
      this.viewer = new Modeler({
        container: '.canvas'
      });

      this.viewer.importXML(xml, function (err) {
        console.log('*********************');
        if (err) {
          console.log('error rendering', err);
        } else {
          this.viewer
            .getActiveViewer()
            .get('canvas')
            .zoom('fit-viewport');
        }
      });
    });
  }
}
