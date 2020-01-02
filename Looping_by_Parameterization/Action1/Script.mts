' ----- Open Web Browser -----

SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe","https://www.advantageonlineshopping.com/"

' ----- Import Excel File into RunTime DataTable -----

datatable.ImportSheet "D:\Automation_HP\Test\Automation_Training\Login.xlsx","Sheet1","Global"

' ----- Count Row in Data Table -----

RowCount=datatable.GetSheet("Global").GetRowCount

' ----- Start Login -----

LocusWebElement "Google","Advantage Shopping","menuUserSVGPath"
LocusWebEdit "Google","Advantage Shopping","username",Datatable("UserName","Global")
LocusWebEdit "Google","Advantage Shopping","password",Datatable("Password","Global")
LocusWebbutton "Google","Advantage Shopping","sign_in_btnundefined"
