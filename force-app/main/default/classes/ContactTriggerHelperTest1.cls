public class ContactTriggerHelperTest1 
{
public static void ContactMethod(List<Contact> conList, Map<Id, Contact> oldValue)
{
    List<Id> conIds=new List<Id>();
    for(Contact c:conList)
    {
        if(c.AccountId!=null)
        {
           if(c.Phone!=oldValue.get(c.Id).Phone || c.Email!=oldValue.get(c.Id).Email)
           {
               conIds.add(c.AccountId);
           }
        }
    }
    
    List<String> emailAddress=new List<String>();
    List<Account> accIds=[Select Id, OwnerId, Owner.Email FROM Account WHERE Id IN:conIds];
    for(Account a:accIds)
    {
     emailAddress.add(a.Owner.Email);   
    }
    
    if(emailAddress.size()>0)
    {
        List<Messaging.SingleEmailMessage> emailList = new List<Messaging.SingleEmailMessage>();
        for(Id idd:conIds)
        {
         Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.ToAddresses=emailAddress;
        mail.Subject='Contact Email or Phone changed';
        mail.plaintextbody='Contact Email or Phone changed. Please check it';
        //mail.setToAddresses(address);
        emailList.add(mail);
        
        if(!emailList.isEmpty()){
            Messaging.sendEmail(emailList);
        }	   
}    } 
    }
}