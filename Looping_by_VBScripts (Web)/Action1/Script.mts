' ----- Start Header -----
' ----- Import Excel File into RunTime DataTable -----
datatable.ImportSheet "C:\Automation_HP\Test\Automation_Training\Login.xlsx","Sheet1","Global"

' ----- Count Row in Data Table -----
LoginCount=datatable.GetSheet("Global").GetRowCount

' ----- Import Product file into DataTable -----
datatable.ImportSheet "C:\Automation_HP\Test\Automation_Training\Select_Product.xlsx","Sheet1","Action1"
ProductCount=datatable.GetSheet("Action1").GetRowCount
' ----- End Header -----
' ----- Start Loop -----
For i = 1 To LoginCount Step 1
	Datatable.GetSheet("Global").SetCurrentRow (i)
	SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe","https://www.advantageonlineshopping.com/"
	LocusWebElement "Google","Advantage Shopping","menuUserSVGPath"
	LocusWebEdit "Google","Advantage Shopping","username",Datatable("UserName","Global")
	LocusWebEdit "Google","Advantage Shopping","password",Datatable("Password","Global")
	LocusWebbutton "Google","Advantage Shopping","sign_in_btnundefined"

'----- Start choose product Loop ----
	For p = 1 To ProductCount Step 1
		Datatable.GetSheet("Action1").SetCurrentRow (p)
		LocusClickLink "Google","Advantage Shopping",datatable("Category","Action1")
		wait(1)
		LocusClickImg "Google","Advantage Shopping",datatable("Product","Action1")
		wait(1)
		LocusWebEdit "Google","Advantage Shopping","quantity",Datatable("Qty","Action1")
		wait(1)
		LocusWebbutton "Google","Advantage Shopping","save_to_cart"
		LocusClickLink "Google","Advantage Shopping","HOME"
		wait(1)
	Next
'----- End choose product Loop ----
'----- Log out and close browser -----
	LocusClickLink "Google","Advantage Shopping","UserMenu"
	LocusClickLink "Google","Advantage Shopping","Sign out"
	Browser("Google").Close
 	
' ----- Write Data input (date time)  into Data Table -----
DataTable("Login_Date","Global")=Date&" "&Time

Next

' ----- End Loop -----

' ----- Export Data in RunTime DataTable to Excel file -----
Call DataTable.ExportSheet("C:\Automation_HP\Test\Automation_Training\Test_Import_UFT_Ouput.xlsx", "Global", "Output")
