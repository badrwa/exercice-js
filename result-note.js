let tnm=[];
let tp=[];
let tn=[];
const np=prompt("enter num of students:");
alert(`num of students is : ${np}` );
for (let i = 0; i <np; i++) {
    const name=prompt("enter name:");
    tnm.push(name);
    const prenom=prompt("enter prenom:");
    tp.push(prenom);
    const note=prompt("enter note:");
    tn.push(note);
}


// tn.sort(function(a, b){return b-a}); 
for (let i = 0; i < tn.length; i++) {
  for (let j = 0; j < tn.length; j++) {
    if (tn[i]<tn[j]) {
        let x=tn[i]
        tn[i]=tn[j]
        tn[j]=x;
        let y=tnm[i]
        tnm[i]=tnm[j]
        tnm[j]=y;
        let z=tp[i]
        tp[i]=tp[j]
        tp[j]=z;


        
    }
    
  }
    
}

for (let i = 0; i <np; i++) {
  
    console.log(`${i+1}. ${tnm[i]} ${tp[i]}, note : ${tn[i]}`);
  
    const note = tn[i];
  
    if (note>=0 && note<10) {
        console.log("no admis");
        
    }else if (note<=20 && note>=10) {
        console.log("admis");
        
    } else {
        console.log("Error");

        
    }
}