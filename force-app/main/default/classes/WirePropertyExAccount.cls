public with sharing class WirePropertyExAccount
 {
    @AuraEnabled(cacheable=true)
   public static List<Account> accList()
    {
        return [SELECT Id, Name, Phone FROM Account];
    }

    @AuraEnabled
    public static List<Account> findaccount(String keyword)
    {
        String key='%'+keyword+'%';
    return [SELECT Id,Name FROM Account WHERE Name Like:key];
   }
    
}