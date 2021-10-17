const App = require('./app')
const readline = require('readline')

const start = async () => {
  const app = new App()

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Qual o binário?\nR:', (answer) => {
    if(!answer.includes('0', '1')){
      console.log('Utilize somente binários (0, 1).')
      rl.close();
      return
    }
    if(answer.length >= 8){
      console.log('Utilize no máximo 8 caracteres.')
    }
    app.bin2dec(answer)
    rl.close();
  });
}
start().catch(e=>console.log(e.message));