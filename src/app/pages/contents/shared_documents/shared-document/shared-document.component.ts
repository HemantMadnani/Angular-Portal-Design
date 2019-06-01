import { Component, OnInit } from '@angular/core';
import { CustomService } from 'src/app/services/custom/custom.service';
declare let $: any;
@Component({
  selector: 'app-shared-document',
  templateUrl: './shared-document.component.html',
  styleUrls: ['./shared-document.component.css']
})
export class SharedDocumentComponent implements OnInit {
  documents: string[];
  constructor(private custom: CustomService) {
    this.custom.getDocuments().subscribe(data => {
      this.documents = data as string[];
    });
}
  ngOnInit() {
    $(document).ready(() => {
      $('#example').DataTable({
        pageLength: 5,
        pagingType: 'full_numbers',
        processing: true
      });
      setTimeout(() => {
        $('#example1').DataTable({
          pageLength: 5,
          pagingType: 'full_numbers',
          processing: true
        });
       }, 300);
});
  }
}
