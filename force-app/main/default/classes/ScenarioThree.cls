public with sharing class ScenarioThree 
{
   @AuraEnabled(cacheable=true)
   public static List<Account> ScenarioThreeMethod()
   {
   return [Select Id, Name, Phone From Account LIMIT 20];
   }
}