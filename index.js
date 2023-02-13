const speech = require('@google-cloud/speech');
require('dotenv').config();

// Inicializar el cliente de Cloud Speech-to-Text
const client = new speech.SpeechClient();


const config = {
  languageCode: 'es-AR', // Establecer el idioma del audio
  encoding: 'WEBM_OPUS', // Establecer el formato del archivo de audio
  sampleRateHertz: 48000 // Establecer los Hz que esta grabado
};

// Si el audio se encuentra en una URL, establecer la URL en la propiedad "uri" del objeto "request"
const audio = {
    //uri: 'gs://m-infra.appspot.com/public/res/PLBWX5XYGQ2B3GP7IN8Q/users/8e28/6e13/7b54/03d7/1214/3045/4007/9cd2/8e286e137b5403d71214304540079cd2.ogg'
    uri: 'gs://storage.botmaker.com/public/res/PLBWX5XYGQ2B3GP7IN8Q/20230213-5MyJccNmNkSoRSSJKva1tHC2q3H2-IFZFE-V2hhdHNBcHAgQXVkaW8gMjAyMy0wMi0xMyBhdCAxMC4wNC4yNw==.ogg'
};

// Crear un objeto RecognitionAudio con la URL del archivo de audio
const request = {
  audio: audio,
  config: config
};


async function quickstart() {
  // Llamar al método "recognize" del cliente de Cloud Speech-to-Text y pasarle el objeto Request 
  // AUDIOS MENORES DE 60 SEGUNDOS
  //const [response] = await client.recognize(request);


  // AUDIOS MAYORES DE 60 SEGUNDOS
  const [operation] = await client.longRunningRecognize(request);
  const [response] = await operation.promise();

  // Recorrer la lista de resultados y extraer el texto transcrito
  // El resultado de la transcripción se encuentra en el campo "alternatives"
  const transcription = response.results
    .map(result => result.alternatives[0].transcript) 
    .join('\n');

  // Mostrar en consola la trascripcion
  console.log(`Transcription: ${transcription}`);

}

quickstart();
