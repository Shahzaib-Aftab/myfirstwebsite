// program to check if the string is palindrome or not

function palindrome()
{
  var x = document.getElementById("inputPalindrome").value;
  var y = "" ;
  for( i=x.length-1;i>=0;i--)
  {
    y += x [i];
  }
  if(x.length <=10)
  {
    if(x == y)
    {
      notification.innerHTML = "Yay! You've got yourself a palindrome";
      notification.className = "alert alert-success";
    }
    else
    {
      notification.innerHTML = "No! You Aren't palindrome";
      notification.className = "alert alert-danger";
    }
  }
  else
  {
    notification.innerHTML = "Your String is Very long";
    notification.className = "alert alert-danger";
  }
}