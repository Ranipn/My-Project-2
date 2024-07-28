public class OpportunityTriggerClass
{

    public static void OpportunityTriggerMethod(List<Opportunity> oppList)
    {
       for(Opportunity opp:oppList)
       {
           if(opp.Amount>100000 && opp.Amount!=null)
           {
               opp.Description='Rani';
           }
       }
    }
}