public class OpportunityTriggerHelperTwo 
{
public static void OpportunityMethodTwo(List<Opportunity> newRec, Map<Id,Opportunity> oldRec)
{
    for(Opportunity opp:newRec)
    {
        if(oldRec.get(opp.Id).StageName!=opp.StageName)
        {
         opp.Amount=opp.Probability * opp.ExpectedRevenue;
        }
    }
}
}