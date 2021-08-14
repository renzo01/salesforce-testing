import { LightningElement, track, wire } from "lwc";
import getCaseList from "@salesforce/apex/CustomPagination.getCaseList";
import TotalRecords from "@salesforce/apex/CustomPagination.TotalRecord";
import getPrevious from "@salesforce/apex/CustomPagination.getPrevious";
import getNext from "@salesforce/apex/CustomPagination.getNext";
const COLS = [
  { label: "Case Number", fieldName: "CaseNumber" },
  { label: "Subject", fieldName: "Subject" }
];

export default class DisplayCasesPagination extends LightningElement {
  @track columns = COLS;
  @track v_Offset = 0;
  @track v_TotalRecords;
  @track page_size = 10;
  //fetching record;
  @wire(getCaseList, { v_Offset: "$v_Offset", v_pagesize: "$page_size" }) cases;
  //Execute when the page it's load
  connectedCallback() {
    TotalRecords().then((result) => {
      this.v_TotalRecords = result;
    });
  }
  previousHandler2() {
    getPrevious({ v_Offset: this.v_Offset, v_pagesize: this.page_size }).then(
      (result) => {
        this.v_Offset = result;
        if (this.v_Offset === 0) {
          this.template
            .querySelector("c-pagination-component-lwc")
            .changeView("trueprevious");
        } else {
          this.template
            .querySelector("c-pagination-component-lwc")
            .changeView("falseprevious");
        }
      }
    );
  }
  nextHandler2() {
    getNext({ v_Offset: this.v_Offset, v_pagesize: this.page_size }).then(
      (result) => {
        this.v_Offset = result;
        if (this.v_Offset + 10 > this.v_TotalRecords)
          this.template
            .querySelector("c-pagination-component-lwc")
            .changeView("truenext");
        else
          this.template
            .querySelector("c-pagination-component-lwc")
            .changeView("falseprevious");
      }
    );
  }
  changeHandler2(e) {
    const det = e.detail;
    this.page_size = det;
  }
  firstpagehandler() {
    this.v_Offset = 0;
    this.template
      .querySelector("c-pagination-component-lwc")
      .changeView("trueprevious");
    this.template
      .querySelector("c-pagination-component-lwc")
      .changeView("falsenext");
  }
  lastpagehandler() {
    this.v_Offset =
      this.v_TotalRecords - (this.v_TotalRecords % this.page_size);
    this.template
      .querySelector("c-pagination-component-lwc")
      .changeView("falseprevious");
    this.template
      .querySelector("c-pagination-component-lwc")
      .changeView("truenext");
  }
}