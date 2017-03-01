     
  /*
Name             : Vadiwoo Karuppiah

Assignment Title : API-How-to Guide

Date              : February,13, 2017 
*/
 var body = document.getElementsByTagName("body")[0];

  var host = document.getElementsByTagName("results");
 // var start = document.getElementByTagName("a");

/*
  var chapter1 = document.createElement("p");
  var intro1= "You can use the API to fetch profile info, boards, suggested boards, likes and Pins, as well as search boards and Pins for authenticated users.";
  var intro2 = "You can also create, fetch and delete followers and following relationships for authenticated users.";
  var intro3 =  "XXXXXXXXXXXXXXXXXXXXXXX";
*/
  
  /******************Adding a link*************************
   var link = document.createElement("p");
   var linkText = document.createTextNode("href = https://developers.pinterest.com/docs/api/overview/");
   link.appendChild(linkText);
   start.appenchild(link);
******************************************/
 // var chapter1Text = document.createTextNode(intro1 + intro2 + intro3);
 //chapter1.appendChild(chapter1Text);
 // introduction.appendChild(chapter1);

   document.addEventListener('DOMContentLoaded', bindButtons);

      function bindButtons(){
        document.getElementById('userSubmit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var payload = {user_name:null};
          payload.user_name = document.getElementById('user_name').value;

         // var str2 = payload.city_name;
          //var str2 =  '+' + str1 + '+';
          var queryURL = "https://api.pinterest.com/v1/users/";
          var name = payload.user_name;
          var tokenString = "/?access_token=";
          var access_token = "AdLuqw2gLXEzZFx9oa62gPaxC7L0FKXX4jXmDvxDzscLyaAw7AAAAAA&fields";
          var fieldString = "first_name%2Cid%2Clast_name%2Curl";

          var getSTring = queryURL + name + tokenString + access_token + fieldString ;

          req.open("GET", getSTring, true);
          
           req.addEventListener('load', function(){
            if (req.status >= 200 && req.status < 400){
              var response = JSON.parse(req.responseText);
              var name = response.data.first_name;
             
             
              var result = document.createElement("h3");
              var resultsText = document.createTextNode("Results : ");
              result.appendChild(resultsText);
              results.appendChild(result);


              var output1 = document.createElement("p");
              var outputText1 = document.createTextNode("User's First Name :  " + name );
              output1.appendChild(outputText1);
              results.appendChild(output1);
                

          

            console.log(JSON.parse(req.responseText));
            }
            else {
              console.log("Error in network request: " + req.statusText)
            }})

          req.send(JSON.stringify(payload));
 
          event.preventDefault();
        })
      }
/*
 document.addEventListener('DOMContentLoaded', postdata);

      function postdata(){
        document.getElementById('messageSubmit').addEventListener('click', function(event){
          var req = new XMLHttpRequest();
          var payload = {message:null};
          payload.message = document.getElementById('message').value;
          req.open("POST", 'http://httpbin.org/post', true);

          req.setRequestHeader('Content-Type', 'application/json');

           req.addEventListener('load',function(){
           if(req.status >= 200 && req.status < 400){
             var response = JSON.parse(req.responseText);

                     var myMessage = document.createElement("h2");
                    var textmyMessage = document.createTextNode("Sent Message: " + (JSON.stringify(response.data)));
                      myMessage.appendChild(textmyMessage);
                    body.appendChild(myMessage);

                   var l1 = document.createElement("p");
                    var textl1 = document.createTextNode("JSON Data: " +'\n' + (JSON.stringify(response, null, 10)));
                      l1.appendChild(textl1);
                    body.appendChild(l1);


             // }

              console.log(JSON.parse(req.responseText));
         
        } else {
        console.log("Error in network request: " + req.statusText);
      }})
          req.send(JSON.stringify(payload));
     

       //var x = output(response);
      
          event.preventDefault();
        })
      }
*/


