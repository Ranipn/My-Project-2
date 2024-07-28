public class SetPractice
{
public void setMethod()
{
    
    Set<String> str=new Set<String>();
    str.add('Apple');
    str.add('Mango');
    str.add('Apple');
    Set<String> str2=new Set<String>();
    str2.add('Apple');
    str2.add('Mango1');
    str2.add('Apple1');
    //List<String> li=new List<String>{'Apple'};
    //str.addAll(li);
    //Boolean b=str.contains('Apple');
    //Boolean b=str.containsAll(str2);
    str.removeAll(str2);
    System.debug('Set is==>'+str);
       // System.debug('List is==>'+li);
}
}