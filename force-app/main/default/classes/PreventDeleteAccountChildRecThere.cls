public class PreventDeleteAccountChildRecThere 
{
public static void preventMethod(List<Account> oldRec)
{
    List<Id> accIds=new List<Id>();
    for(Account acc:oldRec)
    {
        accIds.add(acc.Id);
    }
    
    Map<Id, AggregateResult> mapValue=new Map<Id, AggregateResult>([SELECT AccountId, COUNT(Id) oppCount FROM Opportunity WHERE AccountId IN :accIds GROUP BY AccountId]);
    for(Account ac:oldRec)
        {
        if(mapValue.containsKey(ac.Id) && (Integer)mapValue.get(ac.Id).get('oppCount')>0)
        {
            ac.addError('Cant able to delete the account rec if opp is there');
        }
        }
}
}