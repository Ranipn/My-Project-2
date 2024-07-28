public class SecondApecIntegration 
{
    public static void integrationOne()
    {
HttpRequest req = new HttpRequest();
String query='select+Id,Name+from+Account';
req.setEndpoint('callout:SecondNamedCred/services/data/v59.0?q=' +query);
req.setMethod('GET');
Http http = new Http();
HTTPResponse resp = http.send(req);
if(resp.getStatusCode() == 200) 
{
    
        System.debug(resp.getBody());
    
}
 }
}