import Kafka from 'node-rdkafka'

console.log('Producer init...');
let counter = 0;

const stream = Kafka.Producer.createWriteStream({
  'metadata.broker.list' : 'localhost:9092'}, {},
  {'topic' : 'tropical'}
  );

  function queueMessage() {
    const isSuccess = stream.write(Buffer.from(`Paquete numero: ${counter}`));
    counter+=1;
    if (isSuccess) {
      console.log('Paquete enviado correctamente');
    }
    else{
      console.log('Ha ocurrido un error');
    }
  }
  setInterval(() => {
    queueMessage()
  }, 3000);