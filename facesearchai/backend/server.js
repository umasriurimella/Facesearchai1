import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)


// App Config
const app = express()
const port = process.env.PORT || 3000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)

app.get('/',(req,res)=>{
    res.send("API Working")
})
app.post('/payment',async(req,res)=>{
    const product =await stripe.products.create({
        name:"standard"
    });
    if(product){
        var price =await stripe.prices.create({
            product:`${product.id}`,
            unit_amount:100*100,
            currency:"inr",
        });
    }
    if(price.id){
        var session=await stripe.checkout.sessions.create({
            line_items:[
                {
                    price:`${price.id}`,
                    quantity:1,
                }
            ],
            mode:'payment',
            success_url:'http://localhost:3000/success',
            cancel_url:'http://localhost:3000/cancel',
            customer_email:'demo@gmail.com'
    })
}
    res.json(session)

})

app.listen(3000, () => {
    console.log('Server running on port 3000');
});