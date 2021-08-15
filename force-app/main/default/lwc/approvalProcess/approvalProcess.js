import { LightningElement, track } from "lwc";

export default class ApprovalProcess extends LightningElement {
  get columns() {
    return [
      {
        label: "Record Type",
        value: "recordType"
      },
      {
        label: "Target type",
        value: "targetType"
      },
      {
        label: "Owner",
        value: "owner"
      },
      {
        label: "Date",
        value: "date"
      }
    ];
  }
  @track values = [
    {
      recordType: "001",
      targetType: "Accounts",
      owner: "Renzo",
      data: new Date().toLocaleDateString()
    }
  ];
}
