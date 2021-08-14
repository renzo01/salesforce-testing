public with sharing class CustomFetchData {
  @AuraEnabled
  public static String CustomFetchData() {
    HttpRequest httpRequest = new HttpRequest();
    httpRequest.setEndpoint('https://jsonplaceholder.typicode.com/todos/1');
    httpRequest.setMethod('GET');
    String strResponse = null;
    try {
      Http http = new Http();
      HttpResponse httpResponse = http.send(httpRequest);
      if (httpResponse.getStatusCode() == 200) {
        strResponse = httpResponse.getBody();
      } else {
        throw new CalloutException(httpResponse.getBody());
      }
    } catch (Exception ex) {
      throw ex;
    }
    if (!String.isBlank(strResponse)) {
      return strResponse;
    } else {
      return null;
    }
  }
}