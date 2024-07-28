public class OpportunityTriggerHelperTest1 
{
public static void OpportunityMethodTest1(List<Opportunity> oppList)
{
    List<Id> opIds=new List<Id>();
    List<OpportunityTeamMember> team1=new List<OpportunityTeamMember>();
    for(Opportunity op:oppList)
    {
       opIds.add(op.Id);
   
    List<OpportunityTeamMember> opTeam=[SELECT Id, 	OpportunityId FROM 	OpportunityTeamMember WHERE OpportunityId IN:opIds];
    for(OpportunityTeamMember op1:opTeam)
    {
    if(op.StageName=='Closed Lost')
    {
       if(op1.OpportunityId==op.Id)
       {
         team1.add(op1);  
       }
    }
    }
     }
    if(team1.size()>0)
    {
        delete team1;
    }
}
}