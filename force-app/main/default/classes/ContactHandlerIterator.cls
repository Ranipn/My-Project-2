public with sharing class ContactHandlerIterator
 {
    @AuraEnabled(cacheable=true)
    public static List<Contact> contactMethod()
    {
        return [SELECT Id, Name, Email,Phone FROM Contact];
    }
}