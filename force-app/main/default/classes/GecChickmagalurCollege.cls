public with sharing class GecChickmagalurCollege {
    @AuraEnabled
   public static void submitGeccApplication(String studentName, Integer age, String email, String phone, Integer pucMarks)
   {
    try{
        GECC_College__c chikmagalur=new GECC_College__c(
            Student_Name__c=studentName,
            Age__c=age,
            Email__c=email,
            Phone__c=phone,
            PUC_marks__c=pucMarks
            
            );

    
    insert chikmagalur;
   }
   catch(Exception e)
   {
    System.debug(e.getMessage());
   }
}
}