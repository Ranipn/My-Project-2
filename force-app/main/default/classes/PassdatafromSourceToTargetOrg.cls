public class PassdatafromSourceToTargetOrg 
{
public static void sendAccountList(List<Account> accList)
{
    String requestBody= JSON.serialize(accList);
    String targettEndPoint ='callout:SecondNamedCred/services/apexrest/AccountInt';
    HttpRequest req=new HttpRequest();
    req.setEndpoint(targettEndPoint);
    req.setMethod('POST');
    req.setHeader('Authorization', 'Bearer' + UserInfo.getSessionId());
    req.setHeader('Content-Type', 'application/json');
    req.setBody(requestBody);
    
    Http http=new Http();
    HttpResponse res=http.send(req);
    if(res.getStatusCode()!=200)
    {
        System.debug('Error sending accounts:'+  res.getBody());
    } 
    else
         {
        System.debug('Account send successfully:'+  res.getBody());
    } 
}
}