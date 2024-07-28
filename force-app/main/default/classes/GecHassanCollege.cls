public with sharing class GecHassanCollege {
    @AuraEnabled
    public static void gecHassacollege(String studentName, Integer age, String email, String phone, Integer pucMarks)
    {
        try 
        {
            GECH_College__c hassanCollge=new GECH_College__c(
            	Student_Name__c=studentName,
                Age__c=age,
                Email__c=email,
                Phone__c=phone,
                Enter_PUC_marks__c=pucMarks

            ) ;
            insert hassanCollge;
        } catch (Exception e) {
            System.debug(e.getMessage());
        }
    }
}