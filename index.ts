import { Init } from './src/services/init';

try {
    new Init();
} catch (err) {
    console.log(err);
    process.exit(1);
}

process.on('uncaughtException', err => {
    console.log('uncaughtException', err);
    process.exit(1);
});