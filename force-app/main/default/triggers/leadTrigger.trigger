trigger leadTrigger on Lead (before update)
{
    for(Lead l:Trigger.new)
    {
        if(l.CreatedDate<System.today()-8)
        {
            l.addError('You cannot able to edit the records');
        }
    }
    
    /*
if(trigger.isBefore &&  trigger.isDelete)
{
    for(Lead l:Trigger.new)
        
    {
        System.debug(l.Status);
        if(l.Status=='Working-Contacted')
            
        {
            l.addError('you cannot delete Working - Contacted lead');
        }
    }
}

    

{
  for(Lead l1:trigger.new)
{
if(l1.Industry=='Healthcare')
{
    l1.LeadSource='Purchased List';
    l1.SICCode__c='1100';
    l1.Primary__c='Yes';
}
}
}*/
}