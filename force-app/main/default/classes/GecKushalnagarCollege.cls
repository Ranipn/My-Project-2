public with sharing class GecKushalnagarCollege {
    @AuraEnabled
    public static void kushalnagarCollege(String studentName, Integer age, String phone, String email, Integer pucMarks)
    {
        try 
        {
            GECK_college__c kushalnagaraColl=new GECK_college__c(
                Student_Name__c=studentName,
                Age__c=age,
                Phone__c=phone,
                Email__c=email,
                PUC_marks__c=pucMarks

            ) ;
            insert kushalnagaraColl;
        } 
        catch (Exception e) {
            System.debug(e.getMessage());
        }
    }
}