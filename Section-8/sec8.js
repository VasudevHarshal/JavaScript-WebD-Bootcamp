		  //Numbers
		  console.log(4+5);

		  console.log(4/5);

		  console.log((3-8)*24); //Follows BODMAS

		  console.log(8%3);  //will give remainder i.e 2

		  //Strings:
			  //Singles and double quotes both works fine
			  //but together it will generate error eg:"Hi'
		  console.log("Hello");
		  console.log('Hello');

			  //Conactenation
			  console.log("Hello " + "World");
				
			//To write "" itself we use	escape characters
			//which all starts with \
			console.log("She said \"Goodbye!\"");

			//Length:will print 11
			console.log("Hello World".length);

			//Get individual characters
			//will give only H as strings starts with index 0
			//But length will start counting from 1
			console.log("Hello Guys"[0]);


		    /*Primitive exercise:
		    1)100%3 =1 because closest multiple of 3 is 99 so 100-99=1;

		    2)("blah" + "blah")[6]=a
		    because first concatenate then take 6th alphabet from 0.

		    3)"hello".length % "hi\\".length=2
		    as 5%3=2 second string will be hi\

            */

            console.log(100%3);
            console.log(("blah" + "blah")[6]);
            console.log("hello".length % "hi\\".length);


            //Variables that are declared but not initialized 
            //are undefined
            var name;
            var age;

            console.log(name);  //undefined

            //null is "explicitly nothing"
            var currentPlayer = 'Charlie';
            currentPlayer = null;







          /*Some Inbuilt fxn*/

	          //alert:pops up a message for user

	          alert("Hello There");

	          alert(19*23);
          
	          //consol.log():prints output in console


	          //prompt: gets input from user

		        var userName = prompt("what is your name?");
                alert("Nice to meet you  " + userName)
		        console.log(userName);
		        



          


