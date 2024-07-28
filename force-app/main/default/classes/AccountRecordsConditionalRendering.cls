public with sharing class AccountRecordsConditionalRendering {
    @AuraEnabled(cacheable=true)
    public static List<Account> accRec()
    {
        return [Select Id, Name, Phone, website, AccountNumber FROM Account LIMIT 20];
    }
        
}