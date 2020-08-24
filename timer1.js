const alarms = process.argv.slice(2);

alarms.sort()

for (const alarm of alarms) {
  if (Number(alarm) > 0) {
    setTimeout(() => {
      process.stdout.write('.');
    }, alarm*1000);
  }
}
