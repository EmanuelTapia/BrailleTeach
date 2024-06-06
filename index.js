const fs = require('fs');
const util = require('util');
const textToSpeech = require('@google-cloud/text-to-speech');
require('dotenv').config();

const client = new textToSpeech.TextToSpeechClient();

async function convertTextToSpeech(text, outputFilePath) {
  // Define la solicitud para la conversión de texto a voz
  const request = {
    input: { text },
    voice: { languageCode: 'es-ES', ssmlGender: 'NEUTRAL' },
    audioConfig: { audioEncoding: 'MP3' },
  };

  // Convierte el texto a voz utilizando la API de Google Cloud
  const [response] = await client.synthesizeSpeech(request);

  // Guarda el archivo de audio en el sistema local
  const writeFileAsync = util.promisify(fs.writeFile);
  await writeFileAsync(outputFilePath, response.audioContent, 'binary');

  console.log('Conversión de texto a voz completada. El archivo de audio ha sido guardado.');
}

// Llama a la función de conversión de texto a voz
convertTextToSpeech('¡Hola, amigos! Bienvenidos a mi aplicación.', 'output.mp3');