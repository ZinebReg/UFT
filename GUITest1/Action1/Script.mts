'SystemUtil.Run "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" , "http://www.casinodrive.fr/ecommerce/GC-catalog/fr/WE29177/"
If Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebElement("WebElement").Exist(5) Then
	Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebElement("WebElement").Click
End If

 'if Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebElement("WebElement_2").Exist(5) Then
 'Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf4.xml_;_
 'End If
 
 'If Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebEdit("query").Exist(3) Then
 '	Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebEdit("query").Set Parameter.Item("Param2")
 'End If
 @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebButton("WebButton").Click @@ script infofile_;_ZIP::ssf1.xml_;_

if Browser("Le magasin en ligne des").Page("Le magasin en ligne des").Link("Boissons").Exist(10) then 
	Browser("Le magasin en ligne des").Page("Le magasin en ligne des").Link("Boissons").Click @@ script infofile_;_ZIP::ssf2.xml_;_
End  If
If Browser("Le magasin en ligne des").Page("Le magasin en ligne des_2").Link("Colas").Exist(10) Then
	Browser("Le magasin en ligne des").Page("Le magasin en ligne des_2").Link("Colas").Click
End If

if Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebElement("WebElement_2").Exist(5) Then
 Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebElement("WebElement_2").Click @@ script infofile_;_ZIP::ssf4.xml_;_
 End If
 
 If Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebEdit("query").Exist(3) Then
 	Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebEdit("query").Set Parameter.Item("Param2")
 End If

'If Parameter.Item("Param2") = "Entrer le chemin d un fichier" Then
	
'	Browser("Le magasin en ligne des").Close
'End If
'Browser("Le magasin en ligne des").Page("Le magasin en ligne des_2").Link("Colaaaas").Click

 @@ script infofile_;_ZIP::ssf6.xml_;_
