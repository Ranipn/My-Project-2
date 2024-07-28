public with sharing class AccountDataInsertingFromDynamicForm {
    @AuraEnabled
    public static void AccountInserting(String name, String phoneNo, String accNum)
    {
        try
         {
            
            Account acc=new Account(Name=name, Phone=phoneNo, AccountNumber=accNum);
            insert acc;
        } catch (Exception e) {
            System.debug(e.getMessage());
        }
    }
}