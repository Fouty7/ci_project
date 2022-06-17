module.exports = {
    mode: "development",
    entry: ['./sum.js'],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    }
}