$(function() {  
    var availableTags = [  
        
        'Royal Enfield Classic 550.',
        'Royal Enfield Bullet 350.',
        'Yamaha YZF R15 V3.',
        'Yamaha MT 15.',
        'Hero Splendor Plus.',
        'Bajaj Pulsar 150.',
        'KTM 200 Duke. ',
        'Bajaj Pulsar NS200',
        'Activa 6G ',
        'Access 125'
    ];  
    $( "#names" ).autocomplete({  
      source: availableTags
    });  
  });  