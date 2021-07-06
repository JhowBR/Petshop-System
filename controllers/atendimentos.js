module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send(`
        <html>
            <body>
                <form action="" method="post">
                    <input type="text" value="MOI">
                    <button type="submit">oioi</button>
                </form>
            </body>
        </html>
    `))

    app.post('/', (req, res) => {
        console.log(req.body)
        res.send(`posttt`)
    })
}