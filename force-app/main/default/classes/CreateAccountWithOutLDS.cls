public class CreateAccountWithOutLDS
 {
    @AuraEnabled
    public static Account createdAccount(Account acc)
    {
        insert acc;
        return acc;
        
    }
}