public with sharing class CharacterCerificateHandler 
{
    @AuraEnabled
    public static String submitApplication(String applicantName, Date dob, String email, String address, String certificateType, String fatherName, String phone, Integer age){
        try{
            CertificateApplication__c certApp = new CertificateApplication__c
            (
            Applicant_Name__c = applicantName,
            Date_of_Birth__c = dob,
            Email__c = email,
            Address__c = address,
            Certificate_Type__c=certificateType,
          Phone__c=phone,
            Age__c=age,
            Father_Name__c=fatherName

           // Document__c=myImage

            
         );
         insert certApp;
         return 'Success: Application submitted successfully!';
        } catch(Exception e){
         return 'Error:'+ e.getMessage();
        }      
        
     }
}