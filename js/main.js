/**
 * Your JS code here
 */

/**
 * Sample code
 */
document.addEventListener('DOMContentLoaded', function() {
 function toggleTable1()
    {
    var lTable = document.getElementById("Table1");
    lTable.style.display = (lTable.style.display == "table") ? "none" : "table";
	  document.getElementById("Table2").style.display="none";
	  document.getElementById("Table3").style.display="none";
	  document.getElementById("Table4").style.display="none";
   }
   
   function toggleTable2()
    {
    var lTable = document.getElementById("Table2");
    lTable.style.display = (lTable.style.display == "table") ? "none" : "table";
		  document.getElementById("Table1").style.display="none";
	  document.getElementById("Table3").style.display="none";
	  document.getElementById("Table4").style.display="none";
   }
   
   function toggleTable3()
    {
    var lTable = document.getElementById("Table3");
    lTable.style.display = (lTable.style.display == "table") ? "none" : "table";
		  document.getElementById("Table2").style.display="none";
	  document.getElementById("Table1").style.display="none";
	  document.getElementById("Table4").style.display="none";
   }
   
   function toggleTable4()
    {
    var lTable = document.getElementById("Table4");
    lTable.style.display = (lTable.style.display == "table") ? "none" : "table";
		  document.getElementById("Table2").style.display="none";
	  document.getElementById("Table3").style.display="none";
	  document.getElementById("Table1").style.display="none";
   }
});



