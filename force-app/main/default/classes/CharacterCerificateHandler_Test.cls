@isTest
public class CharacterCerificateHandler_Test
{
@isTest
    public static void methodOne()
    {
       CertificateApplication__c c1=new CertificateApplication__c();
        c1.Applicant_Name__c='Test';
       // c1.Date_of_Birth__c=2020-01-28;
        c1.Certificate_Type__c='test';
        c1.Father_Name__c='test';
        c1.Phone__c='9086578789';
        c1.Age__c=23;
        c1.Address__c='Bangalore';
        c1.Email__c='test@gmail.com';
        c1.Verification_Status__c='Not Verified';
        insert c1;
         String dateString = '2023-06-07';
        Date convertedDate = Date.valueOf(dateString);
        
        Test.startTest();
       CharacterCerificateHandler.submitApplication('test',convertedDate,'test@gmail.com', 'Bangalore', 'Test', 'test', '9746788597', 89 );
        Test.stopTest();
    }
    
}