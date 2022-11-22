# Lab 8 - Starter
Gnamitha Naganathanahalli

**Questions:**
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

   - Within a Github action that runs whenever code is pushed 
   - Manually run them locally before pushing code
   - Run them all after all development is completed
  
    > We would want to do automated tests as soon and as often as possible. Therefore, it would make the most sense to fit the automated tests within a github action that runs whenever code is pushed so that tests are automatically run to determine the safety of the code. 

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
   > No

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    > You would probably not use a unit test to test the message feature of a messaging application because it would be a little difficult to create a set of tests for this. You could probably check if a user is able to write anything, but you wouldn't be able to check if it is being sent to another user correctly with unit testing.


4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    > You would use a unit test to test the max message length feature of a messaging application because unit tests are tests for the lowest level of code designed to test the exercise the method. In this case, it is easy to test with a unit test if the user has typed more than 80 characters.


