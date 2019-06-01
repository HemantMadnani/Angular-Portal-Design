import { Component, OnInit } from '@angular/core';
import * as $ from '../../../../../assets/vendor/jquery/jquery.min';

@Component({
  selector: 'app-maintainence',
  templateUrl: './maintainence.component.html',
  styleUrls: ['./maintainence.component.css']
})
export class MaintainenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
      $('body').css('background-color', '#eee');
    });
  }

}
