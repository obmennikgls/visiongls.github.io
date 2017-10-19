socket.onopen = function(event) {
       setInterval(function() { 
       socket.send(JSON.stringify({ 
            id: 1,
            method: 'get_dynamic_global_properties',
            'params': []
        })); lastblock++;                           
        }, 3000);                               
};
fixblock = true;
socket.onmessage = function(event) {
console.log(event.data); // Вывод данных в консоль
      };