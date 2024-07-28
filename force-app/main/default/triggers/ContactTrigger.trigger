trigger ContactTrigger on Contact (Before insert, after update)
{
    
    if(trigger.isBefore && trigger.isInsert)
{
    ContactTriggerHelperTest2.ContactMethod1(Trigger.new);
}  

    /*
   if(trigger.isAfter && trigger.isUpdate)
{
    ContactTriggerHelperTest1.ContactMethod(Trigger.new, Trigger.oldMap);
}    
    

    for(Contact c:Trigger.new)
{
    if(c.AccountId==null)
    {
        c.addError('You cannot creat contact without parent account');
    }
   
}

    List<Contact> existingCon=[SELECT Id, LastName, Email, Phone FROM Contact];
    for(Contact c:Trigger.new)
    {
        for(Contact conList:existingCon)
        {
       if(conList.LastName==c.LastName && conList.Email==c.Email && conList.Phone==c.Phone)
       {
           c.addError('cannot able to insert duplicate records');
       }
            }
    }
*/
}