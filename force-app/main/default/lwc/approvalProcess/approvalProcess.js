import { LightningElement, track } from "lwc";

export default class ApprovalProcess extends LightningElement {
  get columns() {
    return [
      {
        label: "Record Type",
        fieldName: "recordType"
      },
      {
        label: "Target type",
        fieldName: "targetType"
      },
      {
        label: "Owner",
        fieldName: "owner"
      },
      {
        label: "Date",
        fieldName: "date"
      }
    ];
  }
  @track values = [
    {
      recordType: "001",
      targetType: "Accounts",
      owner: "Renzo",
      date: new Date().toLocaleDateString()
    }
  ];
}
