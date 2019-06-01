import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';
declare let $: any;
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
@Output() messageEvent = new EventEmitter();
  constructor() { }

sendTitle(title: string) {
  this.messageEvent.emit(title);
}

  ngOnInit() {
    $(document).ready(() => {
      $('#sidebarToggle, #sidebarToggleTop').on('click', () => {
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
        if ($('.sidebar').hasClass('toggled')) {
          $('.sidebar .collapse').collapse('hide');
        }
      });


      $(window).resize( () => {
        if ($(window).width() < 768) {
          $('.sidebar .collapse').collapse('hide');
        }
      });

      // // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
      $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($(window).width() > 768) {
          // tslint:disable-next-line: one-variable-per-declaration
          var e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      });

      // Scroll to top button appear
      $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });
    });
  }

}
