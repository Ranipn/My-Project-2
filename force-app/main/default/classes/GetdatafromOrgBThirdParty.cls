global class GetdatafromOrgBThirdParty
{
public static void getCases()
{
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:SFDCAtoBNamedCred1/services/apexrest/Cases/');
        req.setMethod('GET');
        Http http = new Http();
        HTTPResponse res = http.send(req);
        // Deserialize the JSON string into collections of primitive data types.
       if(res.getStatusCode() == 200) 
       {
           System.debug(res.getBody());
       }
       
       
    }
}