public class OpportunityTriggerHelperTest2 
{
public static void OpportunityMethodTest2(List<Opportunity> opList, Map<Id, Opportunity> oldValue)
{
    List<User> userList=[Select Id, Name, UserRole.Name From User WHERE UserRole.Name='Opportunists'];
    List<OpportunityTeamMember> teamMember=new List<OpportunityTeamMember>();
   for(Opportunity opp:opList)
   {
       if(opp.StageName=='Needs Analysis' && opp.StageName!=oldValue.get(opp.id).StageName)
       {
           for(User ur:userList)
           {
           OpportunityTeamMember team=new OpportunityTeamMember();
           team.OpportunityId=opp.Id;
           team.OpportunityAccessLevel='Edit';
           team.UserId=ur.Id;
               
           teamMember.add(team);
               }
       }
   }
    if(teamMember.size()>0)
    {
        insert teamMember;
    }
}
}