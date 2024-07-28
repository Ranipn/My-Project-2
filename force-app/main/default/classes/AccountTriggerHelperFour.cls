public class AccountTriggerHelperFour
{
public static void AccountTriggerMethod4(List<Account> accList, Map<Id, Account> oldValue)
{
    Map<Id, String> newValue=new Map<Id, String>();
    for(Account a:accList)
    {
        if(a.Website!=oldValue.get(a.Id).Website)
        {
            
            newValue.put(a.Id, a.Website);
        }
    }
    if(newValue.keySet().size()>0)
    {
        List<Contact> conList1=new List<Contact>();
        List<Contact> conList=[SELECT Id, Name,	Website__c,	AccountId FROM Contact WHERE AccountId IN:newValue.keyset()];
        for(Contact c:conList)
        {
            c.Website__c=newValue.get(c.AccountId);
            conList1.add(c);
        }
       if(conList1.size()>0)
       {
           update conList1;
           
       }
    }
}
}