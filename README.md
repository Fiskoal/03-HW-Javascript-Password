# 03 JavaScript: Password Generator

For this assignment I set myself a list of things to do, and executed them in order. Sorry for the lack of commits, I did it all in one go.

First, I set variables for all character types, as well as a master array to store them in.
Then, I set all the window alert events.

For the password length (prompt), I have it check to make sure input is >8 and <128, and attatched function error to it.

For all the character queries (confirm), I have it check to see if it is true. If it is true, then I have a for loop push 128 random character from the array into the masterArray. (for example, lower case confirm pulls 128 characters from the lowerCase array). I did it this way to make sure that even if they only want 1 character type, there will be 128 characters available in masterArray

Then I use a sort function after all of that on masterArray to sort masterArray randomly, since masterArray (up until this point) has all the different character types in order.

I then have the main function running this whole operation (generatePassword()) slice out characters based on the amount from passwordLength. I used join("") to get rid of the commas.

## Bugs
I only ran into one "bug". If you tried to generate a new password before refreshing the page, with different character types selected, master array still had stuff from the previous generation. For example, if you ran it once and excluded lower case characters, and ran it a second time to exclude upper case characters (without refreshing the page), you could still get upper case characters. I surprisingly guessed right the first time that masterArray just had those characters left over from the first time.

Solution: In the function writePassword() I added a splice function to masterArray so that after the password is generated, all of masterArray is deleted. Now if you try to generate another password without refreshing the page, you are starting from a clean slate and won't run into an issues with character types.

## github-pages
https://fiskoal.github.io/password-generator/

## Screenshots
https://github.com/Fiskoal/Password-Generator/blob/master/Assets/1%20init.png
https://github.com/Fiskoal/Password-Generator/blob/master/Assets/2%20(input)passwordlength.png
https://github.com/Fiskoal/Password-Generator/blob/master/Assets/3%20(confirm)char-types.png
https://github.com/Fiskoal/Password-Generator/blob/master/Assets/4%20successful-password-generation.png
