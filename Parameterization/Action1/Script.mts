'=======================================
' ========== Parameterization ==========
'=======================================

' ========== Login
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2067557400_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5e0b075045ca7bb799f5" @@ hightlight id_;_1910807632_;_script infofile_;_ZIP::ssf4.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_1910809456_;_script infofile_;_ZIP::ssf3.xml_;_
' ========== Login

' ========== Select Flight
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_1928201128_;_script infofile_;_ZIP::ssf6.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "London" @@ hightlight id_;_2072709816_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfCalendar("datePicker").SetDate "1-Dec-2020" @@ hightlight id_;_2072706216_;_script infofile_;_ZIP::ssf11.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select DataTable("NoOfTicket", dtGlobalSheet)
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2108879064_;_script infofile_;_ZIP::ssf18.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_1512872_;_script infofile_;_ZIP::ssf20.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_1927683296_;_script infofile_;_ZIP::ssf16.xml_;_
' ========== Select Flight

' ========== Close
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_790000_;_script infofile_;_ZIP::ssf17.xml_;_
' ========== Close
