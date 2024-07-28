public class SecondPreventDuplicateAccount
{
public static void secduplicateAccount(List<Account> accList2)
{
    Set<String> accountName = new Set<String>();
        for(Account accVar : accList2){
            accountName.add(accVar.Name);
        }
        List<Account> duplicateAccounts = [SELECT Id, Name 
                                             FROM Account 
                                             WHERE Name IN :accountName]; 
        
        for(Account acc : accList2){
            if(duplicateAccounts.size()!=0){
                acc.Name.adderror('Account cannot be inserted');
            }
        }
}
}

/* map<Id,Account> existingAccountMap = new  map<Id,Account>([Select Id, Name, Rating From Account Where Rating != null]); 

     for(Account a : Trigger.new){
        //Remember to use Double equal
        if(a.name == existingAccountMap.get(a.Id).Name && a.rating == existingAccountMap.get(a.Id).rating){
          a.adderror('You cannot create a dulplicate account');
*/