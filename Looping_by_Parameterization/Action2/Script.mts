' ----- Import Excel File into RunTime DataTable -----

datatable.ImportSheet "D:\Automation_HP\Test\Automation_Training\Select_Product.xlsx","Sheet1","Select_Product"

' ----- Count Row in Data Table -----

RowCount=datatable.GetSheet("Select_Product").GetRowCount

' ----- Start Select Product -----

LocusClickLink "Google","Advantage Shopping",datatable("Category","Select_Product")
LocusClickImg "Google","Advantage Shopping",datatable("Product","Select_Product")
LocusWebEdit "Google","Advantage Shopping","quantity",Datatable("Qty","Select_Product")
LocusWebbutton "Google","Advantage Shopping","save_to_cart"
LocusClickLink "Google","Advantage Shopping","HOME"
