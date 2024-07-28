public class CopyAccountToContact 
{
public static void CopyAccountToContactMethod(List<Account> accList)
   {
  
  List<Contact> conList = new List<Contact>();
    for(Account acc: accList)
    {
     Contact con= new Contact();
     con.FirstName = acc.Name + 'FN';
     con.LastName = acc.Name + 'LN';
     con.AccountId = acc.Id;
     conList.add(con);
  }
     if(!conList.isEmpty())
     {
     insert conList;
 
     }
}
}