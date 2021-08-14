public with sharing class CustomSearchingController {
  @AuraEnabled(Cacheable=true)
  public static list<Account> CustomSearchingController(String strAccName) {
    strAccName = '%' + strAccName + '%';
    list<Account> lstAccs = [
      SELECT Id, Name, Industry, Phone, Type
      FROM Account
      WHERE Name LIKE :strAccName
    ];

    if (lstAccs.isEmpty()) {
      throw new AuraHandledException('No Record Found..');
    }
    return lstAccs;
  }
}