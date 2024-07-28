@isTest
public class VendorClass_Test
{
    @isTest
    public static void methodOne()
    {
        test.startTest();
        VendorClass.getCertificateApplications();
        Test.stopTest();
        }
    @isTest
    public static void methodTwo()
    {
        CertificateApplication__c c1=new CertificateApplication__c();
        c1.Applicant_Name__c='Test';
        c1.Address__c='Bangalore';
        c1.Email__c='test@gmail.com';
        c1.Verification_Status__c='Not Verified';
        insert c1;
        
        c1.Verification_Status__c='Verified';
        update c1;
        test.startTest();
        VendorClass.verifyCertificateApp(c1.Id, 'Verified' );
        Test.stopTest();
        
    }
    
    @isTest
    public static void methodThree()
    {
        CertificateApplication__c c2=new CertificateApplication__c();
        c2.Applicant_Name__c='Test';
        c2.Address__c='Bangalore';
        c2.Email__c='test@gmail.com';
        c2.Verification_Status__c='Verified';
        insert c2;
        test.startTest();
        VendorClass.verifyCertificateAppTwo(c2.Id );
        Test.stopTest();
        
    }
    
    
    
}