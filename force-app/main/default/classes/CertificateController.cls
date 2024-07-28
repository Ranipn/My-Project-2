public with sharing class CertificateController {
    
    @AuraEnabled
    public static void submitApplication(String applicantName, Date dob, String email, String address, String certificateType){
       try{
        CertificateApp1__c cert = new CertificateApp1__c(
            ApplicantName__c = applicantName,
            Date_of_Birth__c = dob,
            Address__c = address,
            Email__c = email,
            Certificate_Type__c = certificateType
        );
        insert cert;
        
       } catch(Exception e){
        System.debug(e.getMessage());
       }       
        
    }

    @AuraEnabled
    public static CertificateApp1__c getCertificateApplicationsDetails(String AppId){
        CertificateApp1__c cert =[SELECT Id,	ApplicantName__c, Date_of_Birth__c, Address__c, Email__c,Certificate_Type__c, Verification_Status__c FROM CertificateApp1__c WHERE Id =:AppId LIMIT 1];
       
        return cert;
    }
    @AuraEnabled(cacheable=true)
    public static List<CertificateApp1__c> getCertificateApplications(){
        return [SELECT Id,	ApplicantName__c, Date_of_Birth__c, Address__c, Email__c,Certificate_Type__c, Verification_Status__c FROM CertificateApp1__c];
    }

    @AuraEnabled
    public static void verifyCertificateApp(String certId, String status){
        CertificateApp1__c cert1 = [SELECT Id, Verification_Status__c FROM CertificateApp1__c WHERE Id=: certId];
        if(cert1 != null)
        {
            cert1.Verification_Status__c = status;
            update cert1;
        }

       
    }

    @AuraEnabled
    public static void deleteRecord(String recId){
        try {
            CertificateApp1__c delt = [SELECT Id,ApplicantName__c, Date_of_Birth__c, Address__c, Email__c,Certificate_Type__c, Verification_Status__c FROM CertificateApp1__c WHERE Id =:recId LIMIT 1];

            if(delt != null)
            {
                delete delt;
            }else {
                {
                    throw new AuraHandledException('Applicant not found');
                }
            }
           
        } catch (Exception e) {
            throw new AuraHandledException('Error in deleting record' +e.getMessage());
        }
    }

}