import { api, LightningElement } from 'lwc';

export default class MyAction extends LightningElement {
    @api invoke() {
        console.log('Hello, world!');
      }
}