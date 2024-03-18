//your JS code here. If required.

      const prev = document.getElementById("prev");
      const next = document.getElementById("next");
      const progress = document.getElementsByClassName("progress")[0];
      const circle = document.getElementsByClassName("circle");
      
      let count = 0;

      next.addEventListener("click", () => updateCountnext(1));
      prev.addEventListener("click", () => updateCountprev(-1));

      function updateCountnext(change) {
          count += change;
          if(count>4){
            count=count-1;
              return;
          }
          circle[count].classList.toggle("active");
          progress.style.width = `${25*count}%`;      
        
          console.log(count)
        if (count == 4) {
            prev.classList.remove("disable");
            next.classList.add("disable");
          } 
      }

      function updateCountprev(change) {
        count += change;
        if(count<0){
            count=count+1;
            return;
        }
        // circle[count].classList.toggle("active");
        circle[count+1].classList.toggle("active");
        progress.style.width = `${25*count}%`;      

        console.log(count)
        if (count == 0) {
          next.classList.remove("disable");
          prev.classList.add("disable");
      } 

    }
