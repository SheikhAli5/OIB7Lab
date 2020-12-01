let word = document.getElementById('word');


function sub(){
    console.log(word.value);
    var a = [
    ['A','B','C','D','E'],
    ['F','G','H','I','K'],
    ['L','M','N','O','P'],
    ['Q','R','S','T','U'],
    ['V','W','X','Y','Z']
    ]
    word2 = (word.value.replace(/\s/g, '')).toUpperCase();
    console.log(word2);
    code1 = "";
    code2 = "";
    encrypt ="";
    decrypt1 ="";
    decrypt2 ="";
    final ="";
    decoded ="";
    for (let k=0; k<word2.length; k++){
        for (let i=0; i<5; i++){
            for (let j=0; j<5; j++){
                if(word2[k]==a[i][j]){
                    code1+=j;
                    code2+=i;
                    
                }
            }
        }
    }
    for (let k=0; k<code1.length; k++){
        
            encrypt+=code1[k];
        
    }
    for (let k=0; k<code2.length; k++){
        
            encrypt+=code2[k];
        
    }
    for (let k=0; k<encrypt.length; k++){
        if(k!=encrypt.length){
        if(k%2==0){
            final +=a[encrypt[k+1]][encrypt[k]];
        }
        }
    }
document.getElementById('encrypt').innerHTML += encrypt;
    console.log("encrypt:")
    console.log(encrypt)
    console.log("final:")
    console.log(final)
    for (let k=0; k<encrypt.length/2; k++){
            decrypt1+=encrypt[k];
    }
    for (let k=encrypt.length/2; k<encrypt.length; k++){
            decrypt2+=encrypt[k];
    }
    for (let k=0; k<decrypt1.length; k++){
            decoded+=a[decrypt2[k]][decrypt1[k]];
    }
document.getElementById('encoded').innerHTML += final;
document.getElementById('decoded').innerHTML += decoded;
    console.log("decrypt1:")
    console.log(decrypt1)
    console.log("decrypt2:")
    console.log(decrypt2)
    console.log("decoded:")
    console.log(decoded)
}