function validateNewRecordForm()
{
	var name=document.getElementById('new-name').value;

	if(name==="")
	{
		alert("Enter your name");
		return false;
	}
	return true;
}