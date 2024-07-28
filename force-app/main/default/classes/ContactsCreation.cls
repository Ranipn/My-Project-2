public class ContactsCreation
{
    public static void ContactsCreationMethod(List<Account> accList)
{
List<Contact> conList=new List<Contact>();
map<Id, decimal> newMapOne=new map<Id, decimal>();
    for(Account acc:accList)
    {
        newMapOne.put(acc.Id, acc.NumberofLocations__c);
    }
    
    if(newMapOne.size()>0 && newMapOne!=null)
    {
        for(Id accId:newMapOne.keyset())
        {
            for(integer i=0; i<newMapOne.get(accId); i++)
            {
                Contact con=new Contact();
                con.AccountId=accId;
                con.LastName='contact'+i;
                conList.add(con);
            }
        }
    }
    if(conList.size()>0 && conList!=null)
    {
        insert conList;
    }
  }
    }