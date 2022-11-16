
const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/api/1.0', (req, res) => {
  console.log('Cambios raealizados por la rama master');
  res.send({ mesage: 'Hola Mundo!' })
})


app.listen(PORT, () => {
  console.log('🚀 API lista por el puerto ', PORT)
})