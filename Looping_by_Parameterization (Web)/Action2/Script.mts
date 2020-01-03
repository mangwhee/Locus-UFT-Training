' ----- Import Excel File into RunTime DataTable -----

datatable.ImportSheet "C:\Automation_HP\Test\Automation_Training\Select_Product.xlsx","Sheet1","Select_Product"

' ----- Count Row in Data Table -----

RowCount=datatable.GetSheet("Select_Product").GetRowCount

' ----- Start Select Product -----

LocusClickLink "Google","Advantage Shopping",datatable("Category","Select_Product")
wait (1)
LocusClickImg "Google","Advantage Shopping",datatable("Product","Select_Product")
wait (1)
LocusWebEdit "Google","Advantage Shopping","quantity",Datatable("Qty","Select_Product")
wait (1)
LocusWebbutton "Google","Advantage Shopping","save_to_cart"
LocusClickLink "Google","Advantage Shopping","HOME"
