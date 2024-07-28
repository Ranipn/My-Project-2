public with sharing class CollegeVerification 
{
    @AuraEnabled(cacheable=true)
    public static List<CollegeDetails__c> getcollegeApplication()
    {
        return [Select Id, Student_Name__c, DOB__c, Fateher_Name__c, Email__c, Phone__c, Enter_PUC_Diploma_marks__c, Select_College__c FROM CollegeDetails__c];
    }
}