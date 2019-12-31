'=================================
' ========== CheckPoint ==========
'=================================

' ========== Login
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "john" @@ hightlight id_;_2108878056_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").SetSecure "5e0b0a459d721d5392f6" @@ hightlight id_;_2074880536_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click @@ hightlight id_;_2074881352_;_script infofile_;_ZIP::ssf2.xml_;_
' ========== Login

' ========== Select Flight
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_2108889912_;_script infofile_;_ZIP::ssf7.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "Portland" @@ hightlight id_;_2108890488_;_script infofile_;_ZIP::ssf9.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Select "2" @@ hightlight id_;_2108893704_;_script infofile_;_ZIP::ssf11.xml_;_

' ========== Standard Checkpoint
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("numOfTickets").Check CheckPoint("numOfTickets") @@ hightlight id_;_465724_;_script infofile_;_ZIP::ssf17.xml_;_
' ========== Standard Checkpoint


' ========== Text Checkpoint @@ hightlight id_;_393446_;_script infofile_;_ZIP::ssf19.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_2117178472_;_script infofile_;_ZIP::ssf18.xml_;_
' ========== Text Checkpoint

WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2108900616_;_script infofile_;_ZIP::ssf12.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfTable("flightsDataGrid").SelectCell 1,1 @@ hightlight id_;_2108902152_;_script infofile_;_ZIP::ssf13.xml_;_
WpfWindow("Micro Focus MyFlight Sample").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2067525240_;_script infofile_;_ZIP::ssf14.xml_;_
' ========== Select Flight

' ========== Close
WpfWindow("Micro Focus MyFlight Sample").Close @@ hightlight id_;_203582_;_script infofile_;_ZIP::ssf15.xml_;_
' ========== Close
