public class AccountCreatedFromSource
{
public class deserializeResponse
{
   public String id;
   public String access_token;
}
@future(callout=true)
public static void createAccountinTargetOrg(String accName, String accId)
{ 
        String clientId = '3MVG9fe4g9fhX0E4.bH04rOlWVpkfxR.q4.gTr34eJ.S99OWOZ6uR0yl.9c4E82XP7j64egibkmAmeeyjR1is';//your consumer Key
        String clientSecret ='FB2B957833246689C8908831066C3F40795279F05F7062E4BC054C1226BF9605';//your consumer secret
        String username = 'thirdparty@gmail.com';
        String password ='Chubbi65@123';
        String reqbody = 'grant_type=password&client_id='+clientId+'&client_secret='+clientSecret+'&username='+username+'&password='+password;

        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setBody(reqbody);
        req.setMethod('POST');
        req.setEndpoint('https://marlabs-7f-dev-ed.develop.lightning.force.com');
        HttpResponse res = h.send(req);
        deserializeResponse resp1 = (deserializeResponse)JSON.deserialize(res.getbody(),deserializeResponse.class);
         if(resp1.access_token != null)
         {
             String endPoint = 'https://marlabs-7f-dev-ed.develop.lightning.force.com/services/apexrest/createAccount/';
             String jsonstr = '{"AccName" : "' + accName + '"}';
             Http h2 = new Http();
            HttpRequest req1 = new HttpRequest();
            req1.setHeader('Authorization','Bearer ' + resp1.access_token);
            req1.setHeader('Content-Type','application/json');
             req1.setHeader('accept','application/json');
               req1.setBody(jsonstr);
               req1.setMethod('POST');
              req1.setEndpoint(endPoint);
             HttpResponse res1 = h2.send(req1);
             System.debug(res1);
            }

    }


}