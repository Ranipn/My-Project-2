public class Mapclass 
{
public static void mapMethod()
{
    Map<Object, Object> newMap=new Map<Object, Object>();
    newMap.put(67,'Salesforce');
    newMap.put('Age', 18);
    newMap.put('Salary', 300000);
    System.debug(newMap);
}
}