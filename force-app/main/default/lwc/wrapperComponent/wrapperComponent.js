import { LightningElement, wire } from "lwc";
import AccAndCons from "@salesforce/apex/CustomWrappFetching.CustomWrappFetching";

export default class WrapperComponent extends LightningElement {
  //variables
  data;
  error;

  @wire(AccAndCons)
  accs({ error, data }) {
    if (data) {
      this.data = data;
      window.console.log(`Data ==> ${JSON.stringify(data)}`);
    } else if (error) {
      this.error = error;
    }
  }
}