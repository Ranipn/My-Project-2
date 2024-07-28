trigger OpportunityTriggerOne on Opportunity (after update)
{
     if(trigger.isAfter && trigger.isUpdate)
    {
        OpportunityTriggerHelperTest2.OpportunityMethodTest2(Trigger.new, Trigger.oldMap);
    }
    
   /* 
    if(trigger.isAfter && trigger.isUpdate)
    {
        OpportunityTriggerHelperTest1.OpportunityMethodTest1(Trigger.new);
    }
    
     if(trigger.isBefore && trigger.isUpdate)
    {
        Map<Id,Opportunity> oppMap=new Map<Id,Opportunity>();
        
       OpportunityTriggerHelperTwo.OpportunityMethodTwo(Trigger.new, Trigger.oldMap);
    }
    
  if(trigger.isAfter && trigger.isUpdate)
    {
        OpportunityTriggerHelper.OpportunityMethodOne(Trigger.new);
    }
*/
    
   
  /*  for(Opportunity opp:Trigger.new)
    {
        if(opp.CloseDate<Date.today())
        {
            opp.addError('close date cannot be in past');
        }
    }
    /*
OpportunityTriggerClass.OpportunityTriggerMethod(Trigger.new);

    
    Set<Id> accIds=new Set<Id>();
    if(trigger.isInsert || trigger.isUpdate || trigger.isUndelete)
    {
    for(Opportunity op:Trigger.new)
    {
        accIds.add(op.AccountId);
     }
        }
    if(trigger.isDelete || trigger.isUpdate)
    {
        for(Opportunity opp:Trigger.old)
        {
            accIds.add(opp.AccountId);
        }
    }
    Map<Id, Decimal> accountAnnualRevenue=new Map<Id, Decimal>();
    for(AggregateResult ar :[SELECT AccountId, SUM(Amount) oppAmount From Opportunity WHERE AccountId IN : accIds AND IsClosed = false AND IsWon = true GROUP BY AccountId])
    {
      accountAnnualRevenue.put((Id)ar.get('AccountId'),(Decimal)ar.get('oppAmount'));  
    }
    List<Account> acc=new List<Account>();
    for(Id acId:accIds)
    {
        acc.add(new Account(Id=acId, Amount__c=accountAnnualRevenue.get(acId)));
    }
    
    update acc;
   */ 
    
}