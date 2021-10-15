// Función de respuesta

//-- 
const wait = () => { 
return '*⌛ _Carregando..._ ▬▬▬▭*\n\n*🧘🏻‍♂️ Aguarde, * isso pode levar alguns segundos.'
}

//--
const stick = () => {
  return '❎ Desculpe, ocorreu um erro, repita após esta mensagem'
}

//--
const errorfg = (prefix) => {
  return `❎ Erro! \n🔍 Tente novamente mais tarde`
}

//-- 
const group = () => {
  return '❎  Este comando é apenas para grupos'
}

//-- 
const banf = () => {
  return '❎ Você está na lista de banidos, desculpe, você não pode usar nenhum comando'
}

//--
const ownerB = () => {
  return '❎  Esta função é apenas para *Para o dono do bot*'
}
//--
const modsB = () => {
  return `❎ Este comando é apenas para o *Dono e Moderadores do Bot*`
}
//--
const leveloff = () => {
  return '❎ O sistema de niveis não está habilitado no grupo'
}
const lvlnul = () => {
  return '❎ Seu nível ainda está vazio'
}

//--
const userB = (prefix) => {
  return `≡ Você não está verificado como um usuário de bot, para usar os comandos, primeiro verifique\n\n┌─⊷ *VERIFICAÇÃO* ⊶\n▢ Escreva *${prefix}Verify*\n└─────────────`
}

//--
const admin = () => {
  return '❎ Este recurso é apenas para administradores de grupo'
}

//--
const Badmin = () => {
  return '❎ Para usar este comando, preciso ser *Administrador!*'
}


module.exports =  { wait, stick, errorfg, group, banf, ownerB, userB, modsB, admin, Badmin, leveloff, lvlnul} 