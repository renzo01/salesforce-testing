import { LightningElement, track } from "lwc";
import restDataPull from "@salesforce/apex/CustomFetchData.CustomFetchData";
export default class ServerSideFetchingData extends LightningElement {
  @track responsedata;
  connectedCallback() {
    restDataPull()
      .then((result) => {
        console.log("Result -----" + result);
        this.responsedata = result;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}