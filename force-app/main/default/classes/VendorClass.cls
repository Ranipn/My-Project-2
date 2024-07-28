public with sharing class VendorClass 
{
    @AuraEnabled(cacheable=true)
    public static List<CertificateApplication__c> getCertificateApplications(){
        return [SELECT Id,	Applicant_Name__c, Date_of_Birth__c, Address__c, Email__c,Certificate_Type__c,Phone__c,Age__c,Father_Name__c, Verification_Status__c FROM CertificateApplication__c];
    }

    @AuraEnabled
    public static void verifyCertificateApp(String certId, String Status){
        CertificateApplication__c cert1 = [SELECT Id, Verification_Status__c FROM CertificateApplication__c WHERE Id=: certId];
        if(cert1 != null)
        {
            cert1.Verification_Status__c = Status;
            update cert1;
        }

       
    }

    @AuraEnabled(cacheable=true)
    public static void sendmaaill(String address) 
    {
        List<Messaging.SingleEmailMessage> emailList = new List<Messaging.SingleEmailMessage>();
        String[] toAddresses = new String[] {address};
       System.debug('address is'+address);
            
       	Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setSubject('Application Status');
        mail.setplaintextbody('Your application has been approved');
        mail.setToAddresses(toAddresses);
        emailList.add(mail);
        System.debug('address is'+emailList);
        if(emailList.size()>0)
        {
            Messaging.sendEmail(emailList);
        }	
    }


    @AuraEnabled(cacheable=true)
    public static void sendmaaillforreject(String addres) 
    {
        List<Messaging.SingleEmailMessage> emailListOne = new List<Messaging.SingleEmailMessage>();
        String[] toAddresse = new String[] {addres};
       System.debug('address is'+addres);
            
       	Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setSubject('Application Status');
        mail.setplaintextbody('Your application has been rejected');
        mail.setToAddresses(toAddresse);
        emailListOne.add(mail);
        System.debug('address is'+emailListOne);
        if(emailListOne.size()>0)
        {
            Messaging.sendEmail(emailListOne);
        }	
    }

    @AuraEnabled
    public static CertificateApplication__c verifyCertificateAppTwo(String certId){
        CertificateApplication__c cert2 =[SELECT Id, Applicant_Name__c, Date_of_Birth__c, Address__c, Email__c,Certificate_Type__c,Phone__c,Age__c,Father_Name__c, Verification_Status__c FROM CertificateApplication__c WHERE Id=:certId Limit 1];
        
return cert2;
       
    }

    @AuraEnabled
    public static CertificateApplication__c verifyCertificateAppThree(String certId){
        CertificateApplication__c cert2 =[SELECT Id, Applicant_Name__c, Date_of_Birth__c, Address__c, Email__c,Certificate_Type__c,Phone__c,Age__c,Father_Name__c, Verification_Status__c FROM CertificateApplication__c WHERE Id=:certId Limit 1];
        
return cert2;
       
    }

    @AuraEnabled
    public static CertificateApplication__c verifyCertificateAppFour(String certId){
        CertificateApplication__c cert4 =[SELECT Id, Applicant_Name__c, Date_of_Birth__c, Address__c, Email__c,Certificate_Type__c,Phone__c,Age__c,Father_Name__c, Verification_Status__c FROM CertificateApplication__c WHERE Id=:certId Limit 1];
        
return cert4;
       
    }

}