import express from 'express'
import LOGIN from './routes/users.js'
import categories from './routes/category.js'
import subcategories from './routes/subCategory.js'
import product from './routes/product.js'

const PORT = process.env.PORT || 5000



const app = express()

app.use( express.json() )
app.use( LOGIN )
app.use( categories )
app.use( subcategories )
app.use( product )


app.listen(PORT, () => console.log(`http://localhost:${PORT}`))