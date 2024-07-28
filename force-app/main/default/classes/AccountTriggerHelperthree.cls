public class AccountTriggerHelperthree
{
public static void AccountTriggerMethod(List<Account> accList, Map<Id, Account> oldValue)
{
    for(Account a:accList)
    {
        if(a.Industry=='Agriculture' && a.Type=='Prospect')
        {
            if(oldValue.get(a.Id).Ownership!=a.Ownership && a.Ownership=='Private')
            {
                a.addError('You can not update ownership');
            }
        }
    }
}
}