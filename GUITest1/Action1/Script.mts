'SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\Chrome.exe", "http://www.google.co.th"
Browser("Google").Page("Google").WebEdit("ค้นหา").Set "new year party 2020" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Google").Page("Google").WebButton("ค้นหาด้วย Google").Click
wait (1)
Browser("Google").Maximize
wait (1)
Browser("Google").Page("new year party 2020 -").WebElement("Times Square 2020 New").Click
wait (1)
Browser("Google").Close


