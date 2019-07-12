const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const readXlsxFile = require('read-excel-file/node');
const PORT = 5000;

app.listen(PORT, () => {
   console.log('listening on port', PORT)
});
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( {extended: true } ));

app.get('/getData', (req, res) => {
   // Display all of the sheets on the console.
   // Adjust the upper bound of the for loop's condition to match the number of sheets, an error
   // will display if you choose an upper bound larger than the number of sheets in the file
   for(let currentSheet = 1; currentSheet <= 2; currentSheet++){
      readXlsxFile('server/test_data_3.xlsx', {sheet:currentSheet}).then((rows) => {
         console.log('\n////////////////////////////')
         console.log('SHEET #' + currentSheet + '\n')
         console.log(rows)
      })
   }
   // Send a specific sheet, defined in the second parameter of readXlsxFile()
   readXlsxFile('server/test_data_3.xlsx', {sheet:1}).then((rows) => {
      res.send(rows);
   })
});

