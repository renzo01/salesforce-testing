import { LightningElement, track } from "lwc";

export default class ClientSideRendering extends LightningElement {
  @track responsedata;
  //hook when the page it's start to load
  async connectedCallback() {
    await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(`jsonResponse ======> ${JSON.stringify(jsonResponse)}`);
        this.responsedata = JSON.stringify(jsonResponse);
      })
      .catch((error) =>
        console.log(`Callout error ====> ${JSON.stringify(error)}`)
      );
  }
}