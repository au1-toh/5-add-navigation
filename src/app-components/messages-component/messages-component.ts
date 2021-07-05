import { autoinject } from 'aurelia-framework';
import { MessageService } from "app-services";

@autoinject
export class MessagesComponent {

  constructor(public messageService: MessageService) {}
  
}
