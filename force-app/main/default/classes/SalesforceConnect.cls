public class SalesforceConnect 
{
@AuraEnabled
  public static string salesforceConnectToB(){
      Http http = new Http();
      HttpRequest request = new HttpRequest();
      request.setEndpoint('callout:SFDCConnectToB/services/apexrest/Cases');
      request.setMethod('GET');
      
      HttpResponse response = http.send(request);
      // If the request is successful, parse the JSON response.
      if (response.getStatusCode() == 200) 
      {
          System.debug(response.getBody());
          return response.getBody();
          
      }
      return '';
  }
    
    @AuraEnabled
  public static void CreateCaseInsalesforceOrgB(){
      Http http = new Http();
      HttpRequest request = new HttpRequest();
      request.setEndpoint('callout:SFDCConnectToB/services/apexrest/Cases');
      request.setMethod('POST');
      request.setHeader('Content-type', 'application/json;charset=UTF-8');
      request.setBody('  {"subject":"Case from SF Org A","status":"New", "origin":"Web", "priority":"Medium"}');
       
                          
       HttpResponse response = http.send(request);
      // If the request is successful, parse the JSON response.
      if (response.getStatusCode() == 200) 
      {
          System.debug(response.getBody());
         
          
      }
     
  }
}