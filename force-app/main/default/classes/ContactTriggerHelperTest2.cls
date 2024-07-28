public class ContactTriggerHelperTest2
{
public static void ContactMethod1(List<Contact> conList)
{
    List<Id> conIds=new List<Id>();
    for(Contact c:conList)
    {
        conIds.add(c.AccountId);
    }
    Map<Id, Account> accValue= new Map<Id, Account>([Select Id, BillingState, BillingCity, BillingCountry From Account WHERE ID IN:conIds]);
    
    for(Contact c:conList)
    {
        if(accValue.containsKey(c.AccountId))
        {
                c.MailingCity=accValue.get(c.AccountId).BillingCity;
                c.MailingState=accValue.get(c.AccountId).BillingState;
                c.MailingCountry=accValue.get(c.AccountId).BillingCountry;
        }
    }
    
}
}