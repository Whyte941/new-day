const express = require("express")
const app = express()
const port = 8000


app.get("/groceries", (req, res) => {
    res.send(
        [
        {
            item: 'milk',
            quantity: 3,
        },
        {
            item: 'sugar',
            quantity: 7,
        },
        {
            item: 'flour',
            quantity: 4,
        },
    ]
    );
})
app.listen(port, () => {
    console.log(` Running Express Server On Port ${port}`)
})

