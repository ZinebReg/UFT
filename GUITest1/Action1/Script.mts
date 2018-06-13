SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" , "http://www.casinodrive.fr/ecommerce/GC-catalog/fr/WE29177/"
If Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebElement("WebElement").Exist(5) Then
	Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebElement("WebElement").Click
End If
 @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Le magasin en ligne des").Page("Le magasin en ligne des").Link("Boissons").Click @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Le magasin en ligne des").Page("Le magasin en ligne des_2").Link("Colas").Click @@ script infofile_;_ZIP::ssf3.xml_;_

