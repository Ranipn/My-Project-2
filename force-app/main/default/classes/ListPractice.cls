public class ListPractice 
{
Public  void listMethod()
{
    List<String> addList=new List<String>();
    //sobject obj=[Select Id, Name FROM Account LIMIT 3];
    
    List<Account> acc=new List<Account>();
     acc= [SELECT Id, Name FROM ACCOUNT LIMIT 5];
    //List<String> addList2=new List<String>();
   // Set<String> addSet=new Set<String>();
    //Boolean res;
    //addList.add('Rani');
    //addList.add('Chama');
    //addList.add(1, 'Pavi');
    //addList2.add('Yashu');
    //addSet.add('Nag');
    // addList2=addList.clone();
   //String res =addList.get(1);
    //System.debug('1st List is:'+addList);
    //System.debug('2nd List is:'+addList2);
    //System.debug('Result is:'+res);
    //System.debug('Result is:'+obj.getsObjectType());
    System.debug('Account is==>>'+acc);
    
}
}