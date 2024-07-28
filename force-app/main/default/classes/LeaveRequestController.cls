public with sharing class LeaveRequestController {
   @AuraEnabled(cacheable=true)
   public static List<LeaveTracker__c> getMyLeaves()
   {
    try{
        List<LeaveTracker__c> myLeaves=new List<LeaveTracker__c>();
        myLeaves=[SELECT Id, Name,	From_Date__c, 	To_Date__c, Reason__c, Status__c,	Manager_Comment__c FROM LeaveTracker__c WHERE 	User__c=:UserInfo.getUserId()  ORDER BY CreatedDate DESC];
        return myLeaves;
    }
    catch(Exception e)
    {
         throw new AuraHandledException(e.getMessage());
    }
   }

   @AuraEnabled(cacheable=true)
   public static List<LeaveTracker__c> getLeaveRequests()
   {
    try
    {
        List<LeaveTracker__c> myLeaves=new List<LeaveTracker__c>();
        myLeaves=[SELECT Id, Name,	From_Date__c, To_Date__c, Reason__c, Status__c,Manager_Comment__c, User__r.ManagerId,User__r.Name FROM LeaveTracker__c WHERE User__r.ManagerId=:UserInfo.getUserId() ORDER BY CreatedDate DESC ];
        return myLeaves;
        
    }
    catch(Exception e)
    {
        throw new AuraHandledException(e.getMessage());
    }
   }
   
   
   
}