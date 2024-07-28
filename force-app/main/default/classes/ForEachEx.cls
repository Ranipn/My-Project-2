public with sharing class ForEachEx 
{
   @AuraEnabled(cacheable=true)
    public static List<Account> accList(String accId)
    {
return
[SELECT Id, Name, Phone, Type, Rating FROM Account WHERE Id=:accId WITH SECURITY_ENFORCED];
    }
}