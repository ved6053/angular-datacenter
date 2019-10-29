import {Component, OnInit} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-nodes-detail',
  templateUrl: './nodes-detail.component.html',
  styleUrls: ['./nodes-detail.component.css']
})
export class NodesDetailComponent implements OnInit {

 node:any;
 
constructor(private modalService: BsModalRef) {}
isDanger(prop) {
return this.node[prop].used / this.node[prop].available > 0.7;
}
getType(prop) {
	return (this.isDanger(prop)) ? 'danger' : 'success';
}
  ngOnInit() {
  }
}
