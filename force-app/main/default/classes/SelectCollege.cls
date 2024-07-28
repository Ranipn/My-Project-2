public with sharing class SelectCollege {
    @AuraEnabled
    public static void selectCollegeEngg(String studentName, Date dob, String email, String phone, String fatherName, Integer pucMarks, String addressone, String collegeName)
    {
        try 
        {
            CollegeDetails__c college=new CollegeDetails__c(
                Student_Name__c=studentName,
                DOB__c=dob,
                Email__c=email,
                Phone__c=phone,
                Fateher_Name__c=fatherName,
                Enter_PUC_Diploma_marks__c=pucMarks,
                Address__c=addressone,
                Select_College__c=collegeName
            );
            insert college;
            
        } 
        catch (Exception e) {
            System.debug(e.getMessage());
        }
    }
}