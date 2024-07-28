public class OpportunityTriggerHelper
{
public static void OpportunityMethodOne(List<Opportunity> oppList)
{
    List<Task> t1=new List<Task>();
    for(Opportunity op:oppList)
    {
        if(op.StageName=='Closed Won')
        {
            Task t=new task();
            t.OwnerId=op.OwnerId;
            t.Priority='High';
            t.Subject='Call';
            t.WhatId=op.Id;
            t1.add(t);
        }
    }
    if(t1.size()>0)
    {
        insert t1;
    }
}
}