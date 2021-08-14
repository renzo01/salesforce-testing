public with sharing class CustomWrappFetching {
  @AuraEnabled(Cacheable=true)
  public static List<WrapperDemo> CustomWrappFetching() {
    List<WrapperDemo> lstWrapper = new List<WrapperDemo>();
    for (Account acIterator : [
      SELECT Id, Name, (SELECT Id, Name FROM Contacts)
      FROM Account
      WHERE Id = '001B000000vZWOHIA4'
    ]) {
      lstWrapper.add(new WrapperDemo(acIterator, acIterator.Contacts));
    }
    return lstWrapper;
  }
  public class WrapperDemo {
    @AuraEnabled
    public Account objAcc;
    @AuraEnabled
    public List<Contact> lstCons;

    public WrapperDemo(Account acc, List<Contact> lstCons) {
      this.objAcc = acc;
      this.lstCons = lstCons;
    }
  }
}