$(document).ready(getExcelData);

function getExcelData() {
   $.ajax({
      type: 'GET',
      url: '/getData'
   }).then(function (response) {
        
      $('#excelData').empty();
        
      // append data to the DOM
      for (let i = 1; i < response.length; i++) {
         let row = response[i];
         $('#excelData').append(`
            <tr>
               <td>${row[0]}</td>
               <td>${row[1]}</td>
               <td>${row[2]}</td>
               <td>${row[3]}</td>
               <td>${row[4]}</td>
               <td>${row[5]}</td>
            </tr>
         `);
      }
    
   });
}
