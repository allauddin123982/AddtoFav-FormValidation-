//sk_test_51Nt8UNCNDYVdVn33Xzx1ILHn72IpFDRnOP1FFPh8TUCBjx7b9XjAgS8HTVzCen4YLbzu69iPopJsyL6XnI6lI45h00ZsXNS3FO

//cotton coat: price_1Nt8ikCNDYVdVn33P3F9rd6Y
//sunglasses price_1Nt8kfCNDYVdVn33RQ4dEQmC

const express = require('express')
var cors = require('cors')
const stripe = require('stripe')('pk_test_51Nt8UNCNDYVdVn33gaa9sK6aEXEVHSoldOLgBo597ECa7kmK2SEFXA1lYyjZV9FWV630sO9yBlBhK52BnUnDkuRF00cCp2So8c')

const app = express()
app.use(cors());

app.use(express.static("public"))
app.use(express.json())

app.post("/checkout", async (req, res) => {
    console.log(req.body)
    const items = req.body.items;
    let lineItems = []
    items.forEach(element => {
        lineItems.push({
            price:element.id,
            quantity:element.quantity
        })
    });

    const session = await stripe.checkout.sessions.create({
        line_items:lineItems,
        mode:'payment',
        success_url:"https://localhost:3000/success",
        cancel_url:"https://localhost:3000/cancel"
    })

    res.send(JSON.stringify({
       url:session.url 
    }))

})


app.listen(4000, () => {console.log("listening")})



























