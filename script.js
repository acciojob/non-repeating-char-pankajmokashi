//your JS code here. If required.
let str = prompt("Enter a string");
let arr = str.split("")

arr.sort()
for(let i = 0; i < arr.length - 1; i++)
{
    if(arr[i] != arr[i + 1])
    {
        alert(arr[i])
    }
}
