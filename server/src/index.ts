async function init() {
    console.log('Server is running...');
}

process.on('unhandledRejection', err => {
    console.error(err);
    process.exit(1);
});

void init()
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
    .then(() => process.exit(0));
