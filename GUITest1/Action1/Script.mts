 @@ script infofile_;_ZIP::ssf6.xml_;_
 
 If Browser("Le magasin en ligne des").Page("Le magasin en ligne des_2").WebElement("WebElement").Exist(3) Then
 	Browser("Le magasin en ligne des").Page("Le magasin en ligne des_2").WebElement("WebElement").Click
 End If
 
 If Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebEdit("query").Exist(3) Then
    Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebEdit("query").Set Parameter.Item ("Param2") 

 End If
 @@ script infofile_;_ZIP::ssf15.xml_;_
If Browser("Le magasin en ligne des").Page("Le magasin en ligne des").Link("Colas").Exist(3) Then
	Browser("Le magasin en ligne des").Page("Le magasin en ligne des").Link("Colas").Click
 
End If
'Browser("Le magasin en ligne des").Page("Le magasin en ligne des").WebElement("Colas et boissons gazeusesTous").Click @@ script infofile_;_ZIP::ssf16.xml_;_
 @@ script infofile_;_ZIP::ssf18.xml_;_
