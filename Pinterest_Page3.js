     
  /*
Name             : Vadiwoo Karuppiah

Assignment Title : API-How-to Guide
Date              : February,13, 2017 
*/
 var body = document.getElementsByTagName("body")[0];

  var host = document.getElementsByTagName("results");
 // var start = document.getElementByTagName("a");



   document.addEventListener('DOMContentLoaded', bindButtons);

      function bindButtons(){
        document.getElementById('userSubmit').addEventListener('click', function(event){
          var request = new XMLHttpRequest();
          var payload = {user_name:null};
          payload.user_name = document.getElementById('user_name').value;

        
          var queryURL = "https://api.pinterest.com/v1/users/";
          var name = payload.user_name;
          var tokenString = "/?access_token=";
          var access_token = "AdLuqw2gLXEzZFx9oa62gPaxC7L0FKXX4jXmDvxDzscLyaAw7AAAAAA&fields";
          var fieldString = "first_name%2Cid%2Clast_name%2Curl";

          var querySTring = queryURL + name + tokenString + access_token + fieldString ;

          request.open("GET", querySTring, true);
          
           request.addEventListener('load', function(){
            if (request.status >= 200 && request.status < 400){
              var response = JSON.parse(request.responseText);
              var firstname = response.data.first_name;
              var lastName = response.data.last_name;
              var url = response.data.url;
             
             
              var result = document.createElement("h3");
              var resultsText = document.createTextNode("Recieved Responses : ");
              result.appendChild(resultsText);
              results.appendChild(result);


              var output1 = document.createElement("p");
              var outputText1 = document.createTextNode("User's First Name :  " + firstname );
              output1.appendChild(outputText1);
              results.appendChild(output1);

              var output2 = document.createElement("p");
              var outputText2 = document.createTextNode("User's Last Name :  " + lastName );
              output2.appendChild(outputText2);
              results.appendChild(output2);

              var output3 = document.createElement("p");
              var outputText3 = document.createTextNode("User's URL :  " + url );
              output3.appendChild(outputText3);
              results.appendChild(output3);
                

          

            console.log(JSON.parse(request.responseText));
            }
            else {
              console.log("Error in network request: " + request.statusText)
            }})

          request.send(JSON.stringify(payload));
 
          event.preventDefault();
        })
      }
