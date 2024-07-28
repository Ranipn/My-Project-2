public class AccountTriggerClass 
{
public static void AccountTriggerMethod(List<Account> accList)
{
    for(Account acc:accList)
    {
        if(acc.Industry!=null && acc.Industry=='Media')
        {
            acc.Rating='Hot';
        }
    }
}
}