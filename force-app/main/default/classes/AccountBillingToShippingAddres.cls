public class AccountBillingToShippingAddres
{
public static void AccountBillingToShippingAddresMethod(List<Account> accList)
{
    for(Account ac:accList)
    {
        if(ac.BillingAddress!=null)
        {
            ac.ShippingStreet=ac.BillingStreet;
            ac.ShippingCity=ac.BillingCity;
        }
    }
}
}