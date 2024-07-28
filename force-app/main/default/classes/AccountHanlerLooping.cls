public with sharing class AccountHanlerLooping
 {
   @AuraEnabled(cacheable=true)
   public static List<Account> accountHandleMethod()
   {
      List<Account> accList=[SELECT Id, Name, Type, Rating,Phone, Website, AnnualRevenue, Amount__c FROM Account];
   return accList;

   }
}