public with sharing class ScenarioFour 
{
    @AuraEnabled
    public static Account ScenarioFourmethod(Account acc)
    {
       insert acc;
       return acc;
    }
}