window.onload = function() {
  document.getElementById('next').onclick = function () {
  window.location.href = "http://localhost:8080/krakow-bus/google.html";
};

     //Counter
     let add = document.querySelector("#add");
     let subract = document.querySelector("#subtract");
      //if user don't want change number of passengers
     sessionStorage.setItem("adult", 1);
     
     //Adult
     add.addEventListener("click", function () {
       let output = document.querySelector("#output");
       let end_result = document.querySelector("#result");
       let result = Number(output.innerText) + 1;
     
       if (result > 10) {
         result = 0;
       } 

       if (result > 1) {
          document.querySelector("#adult_result").innerHTML = "Dorośli";
        }
       
       output.innerText = result;
       end_result.innerText = result;
       sessionStorage.setItem("adult", result);
     });
     
     subract.addEventListener("click", function () {
       let output = document.querySelector("#output");
       let end_result = document.querySelector("#result");
       let result = Number(output.innerText) - 1;
       if (result < 0) {
         result = 0;
       }

       if (result <= 1) {
          document.querySelector("#adult_result").innerHTML = "Dorosły";
        }
     
       output.innerText = result;
       end_result.innerText = result;
       sessionStorage.setItem("adult", result);
     });

     //Children
     let add_two = document.querySelector("#add_two");
     let subract_two = document.querySelector("#subtract_two");
     let child_result = document.querySelector("#child_result");
     let result_two = Number(output_two.innerText) - 1;

     add_two.addEventListener("click", function () {
      let output_two = document.querySelector("#output_two");
      let result_two = Number(output_two.innerText) + 1;
    
      if (result_two > 10) {
        result_two = 0;
      }

      if (result_two > 1) {
          document.querySelector("#children_result").innerHTML = "Dzieci";
        }
    
      output_two.innerText = result_two;
      child_result.innerText = ", " + result_two;
      document.getElementById('child_result').style.display = "inherit";
      document.getElementById('children_result').style.display = "inherit";
      sessionStorage.setItem("children", result_two);
    });

     subract_two.addEventListener("click", function () {
      let output_two = document.querySelector("#output_two");
      let child_result = document.querySelector("#child_result");

      if (result_two < 0) {
          result_two = 0;
        }

        if (result_two <= 1) {
          document.querySelector("#children_result").innerHTML = "Dziecko";
        }
        output_two.innerText = result_two;
        child_result.innerText = result_two;
        sessionStorage.setItem("children", result_two);
    });

document.getElementById('from').addEventListener('input', function () {
  if(document.getElementById('from').value=="Na lotnisko"){
      sessionStorage.setItem("direction", "na lotnisko");
  } else {
      sessionStorage.setItem("direction", "Z lotniska");
  }
});

document.getElementById('date').addEventListener('input', function () {
      sessionStorage.setItem("date", this.value);
 
});

document.getElementById('time').addEventListener('input', function () {
  sessionStorage.setItem("time", this.value);

});
  
}





