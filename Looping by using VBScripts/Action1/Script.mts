' ----- Start Header -----
' ----- Import Excel File into RunTime DataTable -----
datatable.ImportSheet "D:\Automation_HP\Test\Automation_Training\LoginApp.xlsx","Sheet1","Global"

' ----- Count Row in Data Table -----
LoginCount = datatable.GetSheet("Global").GetRowCount

' ----- Import Product file into DataTable -----
datatable.ImportSheet "D:\Automation_HP\Test\Automation_Training\FlightSelection.xlsx","Sheet1","Action1"
ProductCount = datatable.GetSheet("Action1").GetRowCount
' ----- End Header -----

 print LoginCount & " " & " " & ProductCount
 
' ----- Start Loop -----
For i = 1 To LoginCount Step 1
	Datatable.GetSheet("Global").SetCurrentRow(i)
	SystemUtil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set Datatable("UserName","Global") @@ hightlight id_;_1979039320_;_script infofile_;_ZIP::ssf2.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure Datatable("Password","Global") @@ hightlight id_;_2118577768_;_script infofile_;_ZIP::ssf3.xml_;_
	WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2118577192_;_script infofile_;_ZIP::ssf4.xml_;_
	 @@ hightlight id_;_10000000_;_script infofile_;_ZIP::ssf35.xml_;_
 @@ hightlight id_;_794420_;_script infofile_;_ZIP::ssf27.xml_;_
	
	
'----- Start choose product Loop ----
	For p = 1 To ProductCount Step 1
		Datatable.GetSheet("Action1").SetCurrentRow(p)
		WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select DataTable("FromCity", dtLocalSheet)
		WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select DataTable("ToCity", dtLocalSheet) @@ hightlight id_;_2123454848_;_script infofile_;_ZIP::ssf8.xml_;_
		WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate DataTable("Date", dtLocalSheet) @@ hightlight id_;_2123454896_;_script infofile_;_ZIP::ssf10.xml_;_
		WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("Ticket", dtLocalSheet) @@ hightlight id_;_794420_;_script infofile_;_ZIP::ssf17.xml_;_
		WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select DataTable("Class", dtLocalSheet) @@ hightlight id_;_2123454944_;_script infofile_;_ZIP::ssf19.xml_;_
		'wait (1)
		WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2123454656_;_script infofile_;_ZIP::ssf20.xml_;_
		'wait (1)
		WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,DataTable("Ticket", dtLocalSheet) @@ hightlight id_;_2122401208_;_script infofile_;_ZIP::ssf21.xml_;_
		WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2115415832_;_script infofile_;_ZIP::ssf22.xml_;_
		WpfWindow("Micro Focus MyFlight Sample").WpfEdit("passengerName").Set DataTable("PassengerName", dtLocalSheet) @@ hightlight id_;_2122403656_;_script infofile_;_ZIP::ssf24.xml_;_
		WpfWindow("Micro Focus MyFlight Sample").WpfButton("ORDER").Click @@ hightlight id_;_1983795792_;_script infofile_;_ZIP::ssf25.xml_;_
		WpfWindow("Micro Focus MyFlight Sample").WpfButton("NEW SEARCH").Click
		'wait(1)
	Next
'----- End choose product Loop ----
'----- Log out and close browser -----
WpfWindow("Micro Focus MyFlight Sample").Close
 	
' ----- Write Data input (date time)  into Data Table -----
DataTable("Login_Date","Global") = Date & " " & Time

Next

' ----- End Loop -----

' ----- Export Data in RunTime DataTable to Excel file -----
Call DataTable.ExportSheet("D:\Automation_HP\Test\Automation_Training\Test_Import_UFT_OuputApp.xlsx","Global","Output")

