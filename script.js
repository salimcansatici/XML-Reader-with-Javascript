document.write("<a href='http://xmlreader.salimcan.com/' style='z-index:9999; margin-left:500px; position:fixed; _position:absolute;bottom:0px;right:0px;clip:rect(0 100 85 0);_top:expression(document.documentElement.scrollTop +document.documentElement.clientHeight-this.clientHeight);_left:expression(document.documentElement.scrollLe ft + document.documentElement.clientWidth - offsetWidth');>xmlreader.salimcan.com</a>");

document.getElementById("xmlverininoldugu").innerHTML = "XML verinin olduğu URL'i giriniz.";
document.getElementById("xmlurlsinin").innerHTML = "XML Url'sinin içerisinde aradığınız TAG'ı yazınız";


document.getElementById("demo").addEventListener('click', function () {
    var xmlDataInputDemo = document.getElementById('xmlLink');


    var xmlTagsDemo = document.getElementById('xmltags');
    xmlDataInputDemo.value = 'https://raw.githubusercontent.com/salimcansatici/XML-Reader-with-Javascript/master/testData.xml';
    xmlTagsDemo.value = 'Fax'; //XmlTag

    document.getElementById("demoalti").innerHTML = "XML Çek butonuna basabilirsiniz.";
    document.getElementById("xmlverininoldugu").innerHTML = "Demo Aktarıldı!";
    document.getElementById("xmlurlsinin").innerHTML = "Demo Aktarıldı!";

});

    document.getElementById("temizle").addEventListener('click', function () {
    document.getElementById("xmlverininoldugu").innerHTML = "XML verinin olduğu URL'i giriniz.";
    document.getElementById("xmlurlsinin").innerHTML = "XML Url'sinin içerisinde aradığınız TAG'ı yazınız";
    document.getElementById("demoalti").innerHTML = "";
    var xmlDataInputDemo = document.getElementById('xmlLink');
    var xmlTagsDemo = document.getElementById('xmltags');
    xmlDataInputDemo.value = '';
    xmlTagsDemo.value = ''; 

});



$( "#xmlCek" ).click(function() {
    var xmlTag=document.getElementById("xmltags");
    var xmlLink=document.getElementById("xmlLink");
    var xmlx = xmlLink.value;
    $.ajax({
      type: "GET",
      url: xmlx,
      dataType: "xml",
      success: parseXML
    });
    function parseXML(xml) {
      $('#xmlSource').val( xmlToString(xml) );
    
      var xmlList = $(xmlTag.value, xml).get();
      var xmlCount=0;
      $.each(xmlList, function( index, value ) {
        console.log( index + ": " + value.textContent );
        $('#results').append(value.textContent);
        if (xmlCount < xmlList.length-1) {
    
          $('#results').append(",<br>");
        }
        xmlCount++;
      });
      

    }
    function xmlToString(xmlData) { 
      var xmlString;
      if (window.ActiveXObject){
        xmlString = xmlData.xml;
      } else{
        xmlString = (new XMLSerializer()).serializeToString(xmlData);
      }
      return xmlString;
    }
    });
    

    var ad=document.getElementById("xmltags");