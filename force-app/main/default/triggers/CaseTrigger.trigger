trigger CaseTrigger on Case (before delete)
{
if(trigger.isBefore && trigger.isDelete) 
{
    Id systemAdminId=UserInfo.getProfileId();
    Id systemId=[Select Id, Name From Profile Where Name='System Administrator'].Id;
    for(Case c:Trigger.old)
    {
        if(systemAdminId!=systemId)
        {
            c.addError('you cannot able to delete the records');
        }
    }

     /*
    
    for(Case c:Trigger.new)
    {
        if(c.Origin=='Phone')
        {
            c.Priority='High';
        }
        else
        {
          c.Priority='Low';  
        }
    }
}
   
Set<Id> caseIds=new Set<Id>();
    for(Case c:Trigger.new)
    {
        if(c.ContactId!=null)
        {
            caseIds.add(c.ContactId);
        }
    }
    
    Map<Id, Date> contactLastCaseDate=new Map<Id, Date>();
    for(AggregateResult ar : [SELECT ContactId, MAX(CreatedDate__c) lastDate FROM Case WHERE ContactId IN :caseIds GROUP BY ContactId]){
   contactLastCaseDate.put((Id)ar.get('ContactId'), (Date)ar.get('lastDate'));
    
    }  
    
   List<Contact> ct=new List<Contact>();
    for(Id contactId:caseIds)
    {
        ct.add(new Contact(Id = contactId, LastCase__c = contactLastCaseDate.get(contactId)));
    }
    update ct;
*/
}
}