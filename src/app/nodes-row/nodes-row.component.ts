import { Component, Input,ChangeDetectionStrategy } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { NodesDetailComponent } from '../nodes-detail/nodes-detail.component';
@Component({
	selector: '[app-nodes-row]',
	templateUrl: './nodes-row.component.html',
	styleUrls: ['./nodes-row.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NodesRowComponent  {
	@Input() node: any;
	modal:BsModalRef;
	constructor(private modalService: BsModalService) {}

	isDanger(prop) {
		return this.node[prop].used / this.node[prop].available > 0.7;
	}
	open(node) {
	const initialState ={node:node}
	this.modal = this.modalService.show(NodesDetailComponent,{initialState});
	this.modal.content.node=node;	
	}
}