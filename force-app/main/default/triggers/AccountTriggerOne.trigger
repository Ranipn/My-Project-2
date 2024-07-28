trigger AccountTriggerOne on Account (before insert)
{
    Map<Id, Id> ownerValue=new Map<Id, Id>();
    for(Account a:Trigger.new)
    {
       ownerValue.put(a.Id,a.OwnerId);
    }
    
    Map<Id,User> userNameOne=new Map<Id,User>([Select Id, Name From User WHERE Id IN:ownerValue.values()]);
    
    for(Account aa:Trigger.new)
    {
        aa.Sales_Rep_Name__c=userNameOne.get(ownerValue.get(aa.Id)).Name;
    }
    
    
   /*
    List<Contact> conList=new List<Contact>();
    for(Account a:Trigger.new)
    {
        if(a.No_of_Contacts__c!=null)
        {
            for(Integer i=0; i<=a.No_of_Contacts__c;i++)
            {
                Contact c=new Contact();
                c.LastName=a.Name;
                c.AccountId=a.Id;
                conList.add(c);
            }
        }
    }
    if(conList.size()>0)
    {
        insert conList;
    }
      
    if(Trigger.isAfter && Trigger.isUpdate)
    {
        AccountTriggerHelperFour.AccountTriggerMethod4(Trigger.new, Trigger.oldMap);
    }
    
   
      if(Trigger.isBefore && Trigger.isUpdate)
    {
        AccountTriggerHelperthree.AccountTriggerMethod(Trigger.new, Trigger.oldMap);
    }
    
   
    Id currentUserId=UserInfo.getProfileId();
    Id SystemAdminId=[SELECT Id, Name FROM Profile WHERE Name='System Administrator' LIMIT 1].Id;
 for(Account acc:Trigger.old)
{
if(currentUserId!=SystemAdminId)
{
acc.addError('You do not have permission to delete the account rec');
}
} 
    /*
     if(Trigger.isBefore && Trigger.isInsert || Trigger.isUpdate)
     {
         for(Account a:Trigger.new)
      {
      a.Amount__c*=0.9;
      }
     }
    /*
     if(Trigger.isBefore && Trigger.isInsert || Trigger.isUpdate)
        
     {
       for(Account a:Trigger.new)
       {
           a.Hello__c='world';
       }
     }
  
    /*
    if(Trigger.isBefore && Trigger.isInsert || Trigger.isUpdate)
        
    {
        for(Account a:Trigger.new)
        {
            List<Account> accList=[SELECT Id, Name FROM Account WHERE Name=:a.Name];
             if(accList.size()>0)
        {
            a.Name.addError('Name should be unique');
        }
            
        }
       
    }
  /*
    List<Opportunity> oppList=new List<Opportunity>();
    for(Account a:Trigger.new)
    {
        if(a.Partner_Status__c=='Inactive' &&(Trigger.oldMap.get(a.Id).Partner_Status__c!='Inactive'))
        {
            oppList.addAll([SELECT Id FROM Opportunity WHERE AccountId =:a.Id AND StageName != 'Closed Lost']);
        }
    }
   for(Opportunity op:oppList)
   {
       op.StageName='Closed Lost';
   }
    
    
    if(oppList.size()>0)
    {
        update oppList;
    }
  /*
    List<Id> accIds=new List<Id>();
    for(Account acc:Trigger.old)
    {
        accIds.add(acc.Id);
    }
    
    Map<Id, AggregateResult> mapValue=new Map<Id, AggregateResult>([SELECT AccountId, COUNT(Id) oppCount FROM Opportunity WHERE AccountId IN :accIds GROUP BY AccountId]);
    for(Account ac:Trigger.old)
        {
        if(mapValue.containsKey(ac.Id) && (Integer)mapValue.get(ac.Id).get('oppCount')>0)
        {
            ac.addError('Cannot delete Account with related Opportunities.');
        }
        }
}
    
   */ 
    /* for(Account a : Trigger.new){

 AccountCreatedFromSource.createAccountinTargetOrg(a.Name, a.Id);

}
    
  if(trigger.isBefore && trigger.isDelete)
  {
      PreventDeleteAccountChildRecThere.preventMethod(Trigger.old);
  }
    
/*AccountTriggerClass.AccountTriggerMethod(Trigger.new);
 
if(trigger.isbefore && trigger.isinsert)
{
 AccountBillingToShippingAddres.AccountBillingToShippingAddresMethod(Trigger.new);
 }
    
if(trigger.isbefore && trigger.isinsert)
{
CopyAccountToContact.CopyAccountToContactMethod(Trigger.new);
 }
   
    
    if(trigger.isBefore && trigger.isInsert || trigger.isUpdate)
    {
        SecondPreventDuplicateAccount.secduplicateAccount(Trigger.new);
    }
    if(trigger.isAfter && trigger.isInsert || trigger.isUpdate)
    {
        ContactsCreation.ContactsCreationMethod(Trigger.new);
    }
*/
}