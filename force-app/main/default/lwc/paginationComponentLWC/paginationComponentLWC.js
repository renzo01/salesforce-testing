import { api, LightningElement } from "lwc";

export default class PaginationComponentLWC extends LightningElement {
  @api changeView(str) {
    if (str === "trueprevious") {
      this.template.querySelector("lightning-button.Previous").disabled = true;
    }
    if (str === "falsenext") {
      this.template.querySelector("lightning-button.Next").disabled = false;
    }
    if (str === "truenext") {
      this.template.querySelector("lightning-button.Next").disabled = false;
    }
    if (str === "falseprevious") {
      this.template.querySelector("lightning-button.Previous").disabled = false;
    }
  }
  renderedCallback() {
    this.template.querySelector("lightning-button.Previous").disabled = true;
  }
  previousHandler1() {
    this.dispatchEvent(new CustomEvent("previous"));
  }
  nextHandler1() {
    this.dispatchEvent(new CustomEvent("next"));
  }
  FirstPageHandler1() {
    this.dispatchEvent(new CustomEvent("firstpage"));
  }
  LastPageHandler1() {
    this.dispatchEvent(new CustomEvent("lastpage"));
  }
  changeHandler(e) {
    e.preventDefault();
    const s_value = e.target.value;
    const selectedEvent = new CustomEvent("selected", { detail: s_value });
    this.dispatchEvent(selectedEvent);
  }
}