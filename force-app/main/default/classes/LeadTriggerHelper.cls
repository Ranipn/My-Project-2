public class LeadTriggerHelper 
{
public static void LeadTriggerMethod(List<Lead> leadlist)
{
    List<task> t1=new List<task>();
    for(Lead l1:leadlist)
    {
        Task t=new task();
            t.OwnerId=l1.OwnerId;
            t.Priority='High';
            t.Subject='Email';
            t.WhoId=l1.Id;
            t1.add(t);
    }
    if(t1.size()>0)
    {
        insert t1;
    }
}
}