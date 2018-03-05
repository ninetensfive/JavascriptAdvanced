function processCommands(input) {
    let commandProcessor = (function () {
        let text = '';
        return{
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)
        }
    })();

    for(let line of input)
    {
        let [command, arg] = line.split(' ');
        commandProcessor[command](arg);
    }
}

processCommands(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);