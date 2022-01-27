import Kafka from 'node-rdkafka'

console.log('Consumer init...');

const consumer = Kafka.KafkaConsumer(
  {'group.id': 'kafka',
    'metadata.broker.list' : 'localhost:9092'}, {}
);

consumer.connect();

consumer.on('ready', () => {
  console.log('Estamos listos desde el consumer');
  consumer.subscribe(['tropical']) //Areglo de topics
  consumer.consume();
}).on('data', (data) => {
  console.log(`Se recibio: ${data.value}`);
})