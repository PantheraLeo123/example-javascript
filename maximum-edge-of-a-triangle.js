function nextedge(side1,side2){
    if (typeof side1 =="number" && typeof side2 =="number") {
        if (side1>0 && side2>0) {

            var maximumEdge=(side1+side2) -1
            console.log (maximumEdge)
            
        } else {
            console.log ("negatif sayı")
        }
      
    } else {
        console.log ("hata")

    }
  
}nextedge(6,7)