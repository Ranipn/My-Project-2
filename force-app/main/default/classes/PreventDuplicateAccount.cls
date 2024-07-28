public class PreventDuplicateAccount 
{
public static void duplicateAccount(List<Account> acc)
{
    for(Account a:acc)
    {
        List<Account> accList=[select ID, Name From Account WHERE Name=:a.Name];
        if(accList.size()>0)
        {
            a.Name.addError('You can not add duplicatee name');
        }
    }
}
}