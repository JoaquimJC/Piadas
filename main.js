let piadas=[]


async function carregarpiadas(){
    try{
     const resposta= await fetch("jokes.json")
     piadas=await resposta.json()
    }
    catch(error)
    {
        console.error("Erro de carragar piadas",error)
    }
}
function soltarpiadas(){
    let index=Math.floor(Math.random()*piadas.length)

    const piada=piadas[index]  
    document.getElementById("texto").innerHTML= piada.Pergunta;

 setTimeout( ()=>{
    document.getElementById("texto").innerHTML= piada.Pergunta + "<br><br>" + piada.Resposta;   
 },5000)
}


carregarpiadas()