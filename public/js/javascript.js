$(document).ready(function() {

var url = "";
var urlLocal = ""
var urlAPI = "https://api.guildwars2.com/v2/items/"; // url for the external API.    
var randNumMax = 49429; // Number of different available item id:s on GW2:s open API.
var fromValue = 0;
var toValue = 10;
    
 /*function generateItemId() {
     
     return Math.floor(Math.random()* randNumMax); //Generates a random item id.
     
 };
   
var itemIdResult = generateItemId();
var itemIdResultStr = itemIdResult.toString();
*/   

function getData() {
     
    var itemIdResult = Math.floor(Math.random()* randNumMax); //Generates a random item id.
    var itemIdResultStr = itemIdResult.toString(); //Converts the result from itemIdResult to a string.
    
    //$.getJSON("https://api.guildwars2.com/v2/items/" + (generateItemId());
    
    $.getJSON(urlAPI + itemIdResultStr, function(data) {
            var jsonSliced = data.slice(fromValue, toValue); // Get first 10 objects.
            for (var i = 0; i < jsonSliced.length; i++) {
                var name = jsonSliced[i].name;
                var type = jsonSliced[i].type;
                var rarity = jsonSliced[i].rarity;
                var iconUrl = jsonSliced[i].icon;
                var icon = "<img src='"+ iconUrl +"' class='img-fluid'>";
                
                

                var tr = $("<tr/>");
                tr.append("<td></td>");
                tr.append("<td class='name'>" + name + "</td>");
                tr.append("<td class='type'>" + type + "</td>");
                tr.append("<td class='rarity'>" + rarity + "</td>");
                tr.append("<td class='icon'>" + icon + "</td>");
                tr.append("<td width='10%'><form method='POST' action='http://localhost:3000/testdb'><input type='hidden' name='name' value='" + name + "'/><input type='hidden' name='type' value='" + type + "'/><input type='hidden' name='rarity' value='" + rarity + "'/><input type='hidden' name='icon' value='" + icon + "'/><input class='add' type='submit' value='+'/></form></td>");
                $(".table-left").append(tr);
            };
        });
    };
    
    
    getData();
    
    
    
    
    
    
});