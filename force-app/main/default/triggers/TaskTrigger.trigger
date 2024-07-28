trigger TaskTrigger on Task (before insert)
{
for(Task t:Trigger.new)
{
    t.Priority='High';
}
}