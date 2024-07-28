public class MapPractice 
{
public void MapMethod()
{
    Map<Integer, String> intToStr=new Map<Integer, String>();
    intToStr.put(1, 'Rani');
    intToStr.put(2, 'Pavi');
    intToStr.put(3, 'F1');
     Map<Integer, String> intToStr2=new Map<Integer, String>();
    intToStr2.put(4, 'AB');
    intToStr2.put(5, 'CD');
    intToStr2.put(3, 'EF');
    intToStr2.remove(5);
    
    //System.debug('Only values==>>'+intToStr.values());
   List<String> str=new List<String>();
    str=intToStr.values();
    System.debug('Only values==>>'+str);
    
    //System.debug('Only Keys==>>'+intToStr.keySet());
    Set<Integer> accId=new Set<Integer>();
    accId=intToStr.keySet();
    
    System.debug('Only Keys==>>'+accId);
    System.debug('Map is==>>'+intToStr);
    
    intToStr2.putAll(intToStr);
    
    System.debug('Map2 is==>>'+intToStr2);
    
    List<Account> accList=[SELECT Id, Name FROM Account LIMIT 5];
    Map<ID, Account> accList1=new Map<ID, Account>(accList);
    System.debug('Account list is==>'+accList1);
    
    List<Account> accList3=[SELECT Id, Name FROM Account LIMIT 10];
    Map<ID, Account> accList4=new Map<ID, Account>(accList3);
        accList4.putAll(accList1);
    System.debug('Account values is==>'+accList4.values());
     System.debug('Account keys is==>'+accList4.keySet());
    
    
}
}