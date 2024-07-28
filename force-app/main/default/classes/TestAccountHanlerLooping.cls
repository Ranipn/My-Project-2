@isTest
private class TestAccountHanlerLooping{

	@testSetup static void setup(){

		Account accountObj = new Account (
			Type ='Prospect', 
			Phone = '1234567890', 
			Website = 'www.google.com', 
			AnnualRevenue = 1.1, 
			Rating ='Hot', 
			Amount__c = 1.1, 
			Name = 'test value'
		);
		insert accountObj;
		 
	}

	
}