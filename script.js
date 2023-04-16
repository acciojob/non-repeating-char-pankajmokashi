//your JS code here. If required.
let str = prompt("Enter a string");
let arr = str.split("")

arr.sort()
for(let i = 0; i < arr.length; i++)
{
    if(arr[i] != arr[i + 1])
    {
        alert(arr[i])
        break
    }
    else{
        let j = i + 1
        while(arr[i] == arr[j] && j < arr.length)
        {
            j++;
        }
        i = j - 1
    }
}
